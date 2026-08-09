#!/usr/bin/env node
//
// translate — produce or refresh translations for added and changed items.
//
// Usage:
//   node scripts/translate.mjs <locale|all> [--type=<id>] [--slug=<slug>]
//                              [--mode=outdated|all|missing] [--engine=<name>]
//                              [--model=<name>] [--dry-run] [--translator-repo=<path>]
//
// Examples:
//   node scripts/translate.mjs hu --dry-run           # what would run, and the prompt size
//   node scripts/translate.mjs hu --type=concept --slug=arrays --mode=all
//
// Modes, matching the translator repo exactly so a command means the same thing
// in both places:
//   outdated  (default) — items with no translation, or whose staleness stamp no
//                         longer matches the English source
//   missing             — catalogs: only keys absent or still the sentinel
//   all                 — everything, regardless of staleness. Use after a
//                         glossary or guide change: those do not touch English,
//                         so they are invisible to the stamp.
//
// ## What this script is and is not
//
// It is the plumbing: resolve items, assemble the prompt, call the provider,
// write the result, hand off to validate. It is NOT the translation guidance.
// That lives in the translator repo (global/rules.md, global/voice.md,
// global/translating.md, content-types/<type>.md, languages/<lang>/guide.md and
// glossary.md) and is read from a checkout of it, never copied here. Two copies
// of a glossary is two glossaries.
//
// ## Prompt order is load-bearing
//
// The prompt is assembled language-invariant part first (rules, voice,
// translating, the content-type how-to), then everything language-specific, then
// the item. The system message names no language either.
//
// That is not cosmetic. A provider with prompt caching can only reuse a shared
// PREFIX. With the language name leading, no two calls in a fan-out share a
// single token of prefix, and the measured cache hit rate is 0%. Keeping the
// invariant block first makes the opening thousands of tokens byte-identical
// across every language and every item of a type. Anything added to the front of
// the prompt that varies by language or item throws that away.
//
// ## en_md5 is never written by the model
//
// Every model tested fabricates a plausible hash when left to it, so the model is
// told to omit the field entirely. scripts/validate.mjs computes the real one and
// stamps it only once every blocking check passes, which is what makes a stamp
// mean "checked", not "claimed".
//
// ## One call, no self-review
//
// One item, one call. There is deliberately no second review call: the mechanical
// problems a review would catch are validate's job, and the judgement ones do not
// survive a model grading its own output.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { REPO_ROOT, SENTINEL, TARGET_LOCALES, assertTargetLocale, fail } from "./lib/constants.mjs";
import { CONTENT_TYPE_IDS, contentType, localPath, metaPath } from "./lib/content-types.mjs";
import { scopeItems } from "./lib/english.mjs";
import { flatten, md5File, parseFrontmatter, readJson, readText, stubAgainst, unflatten, writeText } from "./lib/files.mjs";
import { resolveEngine } from "./lib/engines.mjs";
import { parseArgs } from "./lib/args.mjs";

// The content-type ids here map to the translator repo's own how-to filenames.
const TRANSLATOR_HOWTO = {
  "app-messages": "website-keys",
  concept: "concept-pages",
  "exercise-instructions": "exercise",
  "exercise-messages": "exercise-messages",
  "video-lessons": "curriculum-copy",
  badges: "curriculum-copy"
};

const SYSTEM =
  "You are translating a learn-to-code course. Follow the supplied rules, voice, craft and " +
  "content-type guidance exactly. Output only the requested artifact, with no preamble, no " +
  "commentary and no code fence. Never invent, rename, drop or reorder a key. Never emit an " +
  "en_md5 field.";

/** Read the translator repo's governance files. Never copied into this repo. */
function loadGuidance(translatorRepo, typeId, locale) {
  const read = (relative, { required = true } = {}) => {
    const file = path.join(translatorRepo, relative);
    if (!fs.existsSync(file)) {
      if (required) fail(`missing guidance file ${relative} in ${translatorRepo}`);
      return null;
    }
    return `\n\n# ${relative}\n\n${readText(file)}`;
  };

  // Invariant first (see "Prompt order is load-bearing"), language-specific after.
  const family = locale.includes("-") ? locale.split("-")[0] : null;
  const invariant = [
    read("global/rules.md"),
    read("global/voice.md"),
    read("global/translating.md"),
    read(`content-types/${TRANSLATOR_HOWTO[typeId]}.md`)
  ];
  const languageSpecific = [
    family && read(`languages/${family}/guide.md`, { required: false }),
    family && read(`languages/${family}/glossary.md`, { required: false }),
    read(`languages/${locale}/guide.md`),
    read(`languages/${locale}/glossary.md`)
  ];

  return { invariant: invariant.filter(Boolean).join(""), languageSpecific: languageSpecific.filter(Boolean).join("") };
}

/** Which items are in scope, and why. */
function resolveScope({ locale, typeIds, slug, mode }) {
  const scope = [];

  for (const typeId of typeIds) {
    const type = contentType(typeId);
    // A type that is not translated by a scripted API call is skipped outright
    // rather than half-handled. Video subtitles are the only one: the pass maps
    // the English transcript onto the already-translated concept page and re-cuts
    // the result onto the English cue timings, which is judgment work an engine
    // cannot do, so it runs as /translate-video-subtitles in the translator repo.
    if (type.scriptedTranslation === false) continue;
    for (const item of scopeItems(typeId, { slug })) {
      const target = localPath(typeId, locale, item.slug);
      const englishMd5 = md5File(item.path);

      if (mode === "all") {
        scope.push({ typeId, slug: item.slug, target, englishPath: item.path, englishMd5, reason: "mode=all" });
        continue;
      }

      if (!fs.existsSync(target)) {
        scope.push({ typeId, slug: item.slug, target, englishPath: item.path, englishMd5, reason: "never translated" });
        continue;
      }

      if (type.format === "catalog") {
        const flat = flatten(readJson(target));
        const gaps = Object.keys(flatten(readJson(item.path))).filter((key) => flat[key] === undefined || flat[key] === SENTINEL);
        const meta = type.staleness === "sibling" && fs.existsSync(metaPath(target)) ? readJson(metaPath(target)) : null;
        const stale = type.staleness === "sibling" && meta?.en_md5 !== englishMd5;

        if (gaps.length > 0) {
          scope.push({ typeId, slug: item.slug, target, englishPath: item.path, englishMd5, keys: gaps, reason: `${gaps.length} keys missing or sentinel` });
        } else if (mode === "outdated" && stale) {
          scope.push({ typeId, slug: item.slug, target, englishPath: item.path, englishMd5, reason: "stale stamp" });
        }
        continue;
      }

      const { data } = parseFrontmatter(readText(target));
      if (mode === "outdated" && data.en_md5 !== englishMd5) {
        scope.push({ typeId, slug: item.slug, target, englishPath: item.path, englishMd5, reason: "stale en_md5" });
      }
    }
  }

  return scope;
}

function buildPrompt({ guidance, locale, item }) {
  const type = contentType(item.typeId);
  const header = `\n\n# Task\n\nTranslate the following into ${locale}.\n`;

  if (type.format === "catalog") {
    // Only the keys in scope are sent, as the flat {"dotted.key": "english"}
    // work list the translator repo's extract/merge scripts already use, so an
    // incremental pass costs output tokens proportional to the change and never
    // to the file size.
    const english = flatten(readJson(item.englishPath));
    const keys = item.keys ?? Object.keys(english);
    const work = Object.fromEntries(keys.map((key) => [key, english[key]]));
    const existing = fs.existsSync(item.target) ? flatten(readJson(item.target)) : {};
    const alreadyDone = Object.fromEntries(
      Object.entries(existing).filter(([key, value]) => value !== SENTINEL && !keys.includes(key))
    );

    return {
      prompt:
        `${header}\nReturn a single JSON object with EXACTLY these keys and no others, each value the ` +
        `translation. Reproduce every placeholder and HTML tag exactly, inner name included.\n\n` +
        "## Keys to translate\n\n```json\n" +
        JSON.stringify(work, null, 2) +
        "\n```\n\n" +
        (Object.keys(alreadyDone).length > 0
          ? "## Already translated, for terminology consistency only. Do NOT return these.\n\n```json\n" +
            JSON.stringify(alreadyDone, null, 2) +
            "\n```\n"
          : ""),
      json: true,
      keys
    };
  }

  const existing = fs.existsSync(item.target) ? readText(item.target) : null;
  return {
    prompt:
      `${header}\nReturn the complete Markdown file, frontmatter included. Translate the ` +
      `${(type.frontmatterTranslated ?? []).join(" and ")} frontmatter fields and the body. ` +
      `Do NOT emit an en_md5 field; it is stamped by the checker.\n\n` +
      "## English source\n\n```markdown\n" +
      readText(item.englishPath) +
      "\n```\n" +
      (existing
        ? "\n## The existing translation. Revise it in place; do not rewrite what has not changed.\n\n```markdown\n" +
          existing +
          "\n```\n"
        : ""),
    json: false
  };
}

function applyResult({ item, text, keys }) {
  const type = contentType(item.typeId);

  if (type.format === "catalog") {
    const cleaned = text.trim().replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    let returned;
    try {
      returned = JSON.parse(cleaned);
    } catch (error) {
      fail(`the model did not return valid JSON for ${item.typeId}${item.slug ? `/${item.slug}` : ""}: ${error.message}`);
    }

    const invented = Object.keys(returned).filter((key) => !keys.includes(key));
    if (invented.length > 0) fail(`the model invented keys: ${invented.slice(0, 5).join(", ")}`);

    const english = readJson(item.englishPath);
    const existing = fs.existsSync(item.target) ? flatten(readJson(item.target)) : {};
    const merged = { ...existing };
    for (const key of keys) {
      if (typeof returned[key] === "string" && returned[key].trim() !== "") merged[key] = returned[key].trim();
    }
    // Rebuild against English so key order and parity are structural, not trusted.
    writeText(item.target, `${JSON.stringify(stubAgainst(english, unflatten(merged)), null, 2)}\n`);
    return;
  }

  const cleaned = text.trim().replace(/^```(?:markdown|md)?\n?/, "").replace(/\n?```$/, "");
  const parsed = parseFrontmatter(cleaned);
  // Strip any fabricated stamp before it touches disk. validate.mjs writes the
  // real one, and only once the checks pass.
  delete parsed.data.en_md5;
  writeText(item.target, `${cleaned.startsWith("---") ? serialize(parsed) : cleaned}\n`.replace(/\n+$/, "\n"));
}

function serialize({ data, body }) {
  const lines = Object.entries(data).map(([key, value]) => `${key}: ${/[:#"']/.test(String(value)) ? `"${String(value).replace(/"/g, '\\"')}"` : value}`);
  return `---\n${lines.join("\n")}\n---\n${body}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0];
  if (!requested) fail("usage: node scripts/translate.mjs <locale|all> [--type=<id>] [--slug=<slug>] [--mode=outdated|all|missing]");

  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);

  const mode = args.flags.mode ?? "outdated";
  if (!["outdated", "all", "missing"].includes(mode)) fail(`unknown --mode "${mode}". Use outdated, all or missing.`);

  const typeIds = args.flags.type ? [contentType(args.flags.type) && args.flags.type] : CONTENT_TYPE_IDS;
  // Asked for by name, a type this script does not translate is an error rather
  // than a silent skip: "nothing to do" would read as "already up to date".
  if (args.flags.type && contentType(args.flags.type).scriptedTranslation === false) {
    fail(`"${args.flags.type}" is not translated by a scripted pass. Run /translate-video-subtitles in the translator repo.`);
  }
  const translatorRepo = path.resolve(args.flags["translator-repo"] || process.env.JIKI_TRANSLATOR_REPO || path.join(REPO_ROOT, "..", "translator"));
  const dryRun = Boolean(args.flags["dry-run"]);

  let calls = 0;
  let cost = 0;

  for (const locale of locales) {
    const scope = resolveScope({ locale, typeIds, slug: args.flags.slug, mode });
    if (scope.length === 0) {
      console.log(`${locale}: nothing to do (mode=${mode}).`);
      continue;
    }

    const { adapter, model } = resolveEngine({ engine: args.flags.engine, model: args.flags.model, locale });
    if (!fs.existsSync(translatorRepo)) {
      fail(`no translator checkout at ${translatorRepo}; pass --translator-repo=<path> or set JIKI_TRANSLATOR_REPO`);
    }

    for (const item of scope) {
      const name = `${locale} ${item.typeId}${item.slug ? `/${item.slug}` : ""}`;
      const guidance = loadGuidance(translatorRepo, item.typeId, locale);
      const { prompt, json, keys } = buildPrompt({ guidance, locale, item });
      const full = `${guidance.invariant}${guidance.languageSpecific}${prompt}`;

      if (dryRun) {
        console.log(`would translate ${name}  (${item.reason})  ~${Math.round(full.length / 4)} tokens via ${adapter.name}/${model}`);
        continue;
      }

      console.log(`translating ${name}  (${item.reason})`);
      const { text, usage } = await adapter.call({ model, apiKey: adapter.apiKey(), system: SYSTEM, prompt: full, json });
      applyResult({ item, text, keys });
      calls += 1;
      cost += usage.cost;
      console.log(`  wrote ${path.relative(REPO_ROOT, item.target)}  ($${usage.cost.toFixed(4)}, cache hit ${usage.cacheHit})`);
    }
  }

  if (dryRun) return;
  console.log(`\ntranslate: ${calls} calls, $${cost.toFixed(4)}.`);

  // An item is not finished until it has been checked. validate is what stamps
  // the staleness hash, so skipping it leaves a translation that cannot be told
  // apart from a stale one.
  if (calls > 0) {
    console.log("\nRunning validate to check and stamp...\n");
    execFileSync(process.execPath, [path.join(REPO_ROOT, "scripts", "validate.mjs"), ...locales.slice(0, 1)], { stdio: "inherit" });
  }
}

main();
