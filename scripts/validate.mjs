#!/usr/bin/env node
//
// validate — verify every translated item against its English source, and stamp
// staleness hashes once every blocking check passes.
//
// Usage:
//   node scripts/validate.mjs [<locale|all>] [--type=<id>] [--slug=<slug>]
//                             [--shippable] [--stamp]
//
// Examples:
//   node scripts/validate.mjs all          # CI gate, reads only
//   node scripts/validate.mjs hu --shippable   # also fail on any remaining sentinel
//   node scripts/validate.mjs hu --type=concept --slug=arrays --stamp   # after translating
//
// Exit codes: 0 all ERROR checks passed, 1 at least one ERROR.
//
// ## Errors block, warnings never do
//
// Same split as the translator repo's scripts/check-translation, deliberately:
// ERROR checks are structural facts (key parity, placeholder counts, brace
// balance, frontmatter keys, staleness stamps), WARN checks are heuristics over
// prose that produce false positives by design. A WARN is printed to be read,
// never to gate. Do not promote one.
//
// ## Stamping
//
// ## Stamping writes only when asked
//
// `--stamp` is required to write. Without it this reads and reports, nothing else.
//
// The default matters more than it looks. A stamp asserts "this translation
// matches that English", and the checks here cannot see meaning: reword the
// English while leaving its keys, gaps and links alone and every structural check
// still passes, so the only complaint is staleness, which stamping then erases.
// A bulk stamp therefore marks a whole locale current without anyone reading a
// word of it. That is not hypothetical, it has happened here.
//
// So stamping belongs to a translation pass, next to the writing, one item at a
// time. It has no place in CI: nothing automated should be able to declare a
// translation current.
//
// The staleness stamp is written HERE and never by hand, because a hand-written
// stamp looks like a passed check and is not one. Each format carries it wherever
// that format can. Prose carries `en_md5` in its own frontmatter; a subtitle file
// carries a `NOTE en_md5` block, WebVTT's own comment syntax, under the header; a
// catalog has neither, so it carries a sibling `<name>.meta.json`, which is the
// convention the translator repo already uses (`translation.meta.json`) and is
// invisible to every key-parity guard because those address the catalog by exact
// filename.
//
// ## English
//
// Every English byte this reads comes from a source-repo checkout, resolved by
// scripts/lib/english.mjs. Nothing about the checks changed when the mirror was
// deleted, only where they read English from. A run with no checkout to read
// says so and says how to get one. See ENGLISH-SOURCE.md.
//
// `--shippable` additionally fails on any remaining sentinel. That is the
// production gate: the sentinel renders as a visible replacement glyph, so a
// locale is not servable until its count is zero. Ordinary runs allow sentinels,
// because a partly translated locale is a normal, expected state here.

import fs from "node:fs";
import path from "node:path";
import { INAPPLICABLE, SENTINEL, TARGET_LOCALES, assertTargetLocale } from "./lib/constants.mjs";
import { CONTENT_TYPE_IDS, contentType, listItems, localPath, metaPath } from "./lib/content-types.mjs";
import { DEFAULT_SOURCE_REPO, englishPath, englishRepo, scopeItems } from "./lib/english.mjs";
import {
  countSentinels,
  frontmatterPaths,
  frontmatterValue,
  md5File,
  parseFrontmatter,
  parseVttNotes,
  readJson,
  readText,
  stampFrontmatter,
  stampVttNote,
  writeJson,
  writeText
} from "./lib/files.mjs";
import { ERROR, WARN, checkCatalog, checkProse, checkVtt } from "./lib/checks.mjs";
import { GuardViolation, assertPublishableKey } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";

/**
 * The R2 key guard, exercised rather than trusted.
 *
 * This is all that is left of the English write guard, and it is here for the
 * same reason the rest of it is gone: publishing English from a directory walk
 * is now impossible, but synthesising an English KEY from a bad path template
 * still is not, and that failure is silent. A guard meant never to fire only
 * stays honest if something makes it fire.
 */
function checkGuards() {
  const issues = [];
  const mustRefuse = [
    "static/i18n/app/en/messages-abc123456789.json",
    "static/i18n/app/source/messages-abc123456789.json",
    "static/i18n/exercises/acronym/en/messages-abc123456789.json",
    "i18n/app/hu/messages-abc123456789.json"
  ];

  for (const key of mustRefuse) {
    let refused = false;
    try {
      assertPublishableKey(key);
    } catch (error) {
      refused = error instanceof GuardViolation;
    }
    if (!refused) issues.push({ level: ERROR, message: `the R2 key guard did NOT refuse "${key}"; the guard is broken` });
  }

  // ...and still permits a legitimate target-locale key.
  try {
    assertPublishableKey("static/i18n/app/hu/messages-abc123456789.json");
  } catch (error) {
    issues.push({ level: ERROR, message: `the R2 key guard rejects a legitimate key: ${error.message}` });
  }

  return issues;
}

// ------------------------------------------ the frontmatter parser cross-check
//
// `checkProse` already runs `frontmatterSyntaxIssues`, this repo's own
// dependency-free reader of what YAML will and will not accept. That is the
// FLOOR: it runs with no node_modules, which is the point, but it is a second
// opinion and a second opinion can drift from the first.
//
// The one that matters is the parser that actually gates publishing:
// @jiki.io/content-renderer, which is js-yaml, and which the front-end renders
// with too. So when the install is present, the file is put through THAT parser
// and the verdict is taken from it directly. Two things are errors:
//
//   - it throws. The file is not YAML, and `publish` would have died on it,
//     late, in an unrelated phase, on whichever locale happened to hold it.
//     That is how the Hungarian guide was found.
//   - it parses to something DIFFERENT from what this repo's reader saw. Nothing
//     downstream is wrong in a way anyone can see: validate checked one document
//     and publish shipped another.
//
// With no install this returns nothing and the floor stands alone.

let sharedParser;

async function loadSharedParser() {
  if (sharedParser !== undefined) return sharedParser;
  try {
    const { parseFrontmatterShared } = await import("./lib/prose.mjs");
    await parseFrontmatterShared("---\nprobe: value\n---\n"); // the import inside is itself lazy
    sharedParser = parseFrontmatterShared;
  } catch {
    sharedParser = null;
  }
  return sharedParser;
}

/** Every leaf of a frontmatter object as `path=json`, for comparing two parses. */
const leafSignature = (data) => frontmatterPaths(data).map((leaf) => `${leaf}=${JSON.stringify(frontmatterValue(data, leaf))}`);

async function crossCheckFrontmatter(raw, ours) {
  const parseShared = await loadSharedParser();
  if (!parseShared) return [];

  let shared;
  try {
    shared = await parseShared(raw);
  } catch (error) {
    return [
      {
        level: ERROR,
        message:
          "frontmatter: the renderer's YAML parser, which is what publishing uses, rejects this file: " +
          `${error.message.split("\n")[0]}. Until it parses, this page cannot be published.`
      }
    ];
  }

  const theirs = leafSignature(shared.data ?? {});
  const mine = leafSignature(ours);
  if (theirs.join("\n") === mine.join("\n")) return [];

  const differing = [...new Set([...mine, ...theirs])].filter((leaf) => !(mine.includes(leaf) && theirs.includes(leaf)));
  return [
    {
      level: ERROR,
      message:
        "frontmatter: the two parsers read these bytes DIFFERENTLY, so validate is checking one document and " +
        `publish would ship another (scripts/ reads ${mine.length} leaves, the renderer reads ${theirs.length}; ` +
        `first difference: ${differing[0]}). Quote the value, or fix the block, until both agree.`
    }
  ];
}

async function validateItem({ typeId, locale, slug, stamp, shippable }) {
  const type = contentType(typeId);
  const english = englishPath(typeId, slug);
  const targetPath = localPath(typeId, locale, slug);

  // An item a locale has not reached yet is a normal state, on the same terms as
  // a remaining sentinel: this script answers "is what is here correct", and
  // coverage.mjs answers "how much is here". It only blocks under --shippable,
  // where a gap means the locale would render English in an RTL layout.
  if (!fs.existsSync(targetPath)) {
    if (!shippable) return { issues: [], label: label(typeId, locale, slug), absent: true };
    return { issues: [{ level: ERROR, message: "not translated (no file)" }], label: label(typeId, locale, slug) };
  }

  if (type.format === "catalog") {
    const source = readJson(english);
    const target = readJson(targetPath);
    const issues = checkCatalog(source, target, {
      icu: type.interpolation === "icu",
      allowSentinel: !shippable,
      locale
    });

    // Catalog staleness: the sibling stamp against the current English file.
    if (type.staleness === "sibling") {
      const expected = md5File(english);
      const meta = fs.existsSync(metaPath(targetPath)) ? readJson(metaPath(targetPath)) : null;
      if (!meta?.en_md5) issues.push({ level: ERROR, message: "no staleness stamp (missing sibling .meta.json)" });
      else if (meta.en_md5 !== expected) {
        issues.push({ level: ERROR, message: `stale: stamp is ${meta.en_md5}, English is now ${expected}` });
      }
      if (stamp && !issues.some((i) => i.level === ERROR && !i.message.startsWith("stale:") && !i.message.startsWith("no staleness"))) {
        writeJson(metaPath(targetPath), { en_md5: expected });
        // The stamp is now current, so the staleness findings above no longer apply.
        return { issues: issues.filter((i) => !i.message.startsWith("stale:") && !i.message.startsWith("no staleness")), label: label(typeId, locale, slug) };
      }
    }

    return { issues, label: label(typeId, locale, slug) };
  }

  if (type.format === "vtt") {
    const sourceText = readText(english);
    const targetText = readText(targetPath);
    const expected = md5File(english);

    const issues = checkVtt(sourceText, targetText, {
      stamps: parseVttNotes(targetText),
      expectedMd5: expected,
      allowUntranslated: !shippable
    });

    const blockingOtherThanStamp = issues.filter(
      (i) => i.level === ERROR && !i.message.startsWith("stale:") && !i.message.startsWith("no NOTE en_md5")
    );

    if (stamp && blockingOtherThanStamp.length === 0) {
      writeText(targetPath, stampVttNote(targetText, expected));
      return { issues: blockingOtherThanStamp.concat(issues.filter((i) => i.level === WARN)), label: label(typeId, locale, slug), stamped: true };
    }

    return { issues, label: label(typeId, locale, slug) };
  }

  // Prose.
  const source = parseFrontmatter(readText(english));
  const target = parseFrontmatter(readText(targetPath));
  const expected = md5File(english);

  const issues = checkProse(source.body, target.body, {
    englishData: source.data,
    targetData: target.data,
    translatedKeys: type.frontmatterTranslated ?? [],
    expectedMd5: expected,
    targetRaw: target.raw,
    // Symmetric with `allowSentinel` for catalogs above: an untranslated item is
    // a normal state of a partly translated locale, and only blocks a shippable
    // check, where it would serve English prose from a translated URL.
    allowUntranslated: !shippable
  });

  issues.push(...(await crossCheckFrontmatter(target.raw, target.data)));

  const blockingOtherThanStamp = issues.filter(
    (i) => i.level === ERROR && !i.message.startsWith("stale:") && !i.message.startsWith("frontmatter: no en_md5")
  );

  if (stamp && blockingOtherThanStamp.length === 0 && target.data.en_md5 !== expected) {
    writeText(targetPath, stampFrontmatter(target.raw, expected));
    return { issues: blockingOtherThanStamp, label: label(typeId, locale, slug), stamped: true };
  }

  return { issues, label: label(typeId, locale, slug) };
}

const label = (typeId, locale, slug) => `${locale} ${typeId}${slug ? `/${slug}` : ""}`;

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0] ?? "all";
  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);

  const requestedTypes = args.flags.type ? [contentType(args.flags.type) && args.flags.type] : CONTENT_TYPE_IDS;

  // A source repo that is not checked out takes its content types out of scope
  // rather than failing the run. `videos` is private, so CI cannot check it out
  // on a fork or without a token, and a subtitle checked against no English is
  // not a failed check, it is an unrun one. An explicit `--type` still resolves
  // English directly and fails loudly if there is none: asking for a type by name
  // is asking for it to be checked.
  const typeIds = args.flags.type
    ? requestedTypes
    : requestedTypes.filter((typeId) => {
        const repo = contentType(typeId).sourceRepo ?? DEFAULT_SOURCE_REPO;
        if (englishRepo(repo, undefined, { optional: true })) return true;
        console.log(`skip: ${typeId} (no ${repo} checkout to read English from)`);
        return false;
      });
  const stamp = Boolean(args.flags.stamp);
  const shippable = Boolean(args.flags.shippable);

  let errors = 0;
  let warnings = 0;
  let checked = 0;

  const guardIssues = checkGuards();
  for (const found of guardIssues) {
    console.error(`  ${found.level}  guards: ${found.message}`);
    errors += 1;
  }
  if (guardIssues.length === 0) console.log(`guards: the R2 key guard is armed and refusing every English prefix.`);
  // One line per source repo actually in scope, resolved lazily: a run narrowed
  // to one type must not fail on a checkout it is never going to read.
  for (const id of [...new Set(typeIds.map((typeId) => contentType(typeId).sourceRepo ?? DEFAULT_SOURCE_REPO))]) {
    console.log(`english (${id}): read from ${englishRepo(id)}`);
  }

  // Said out loud, because it changes how much this run can promise. With the
  // renderer present, frontmatter is judged by the parser publishing uses; without
  // it, only by this repo's own reader of what YAML accepts.
  console.log(
    (await loadSharedParser())
      ? "frontmatter: cross-checked against @jiki.io/content-renderer, the parser publishing uses."
      : "frontmatter: no @jiki.io/content-renderer install; checked by the built-in reader alone (run `pnpm install` for the real parser)."
  );

  for (const locale of locales) {
    for (const typeId of typeIds) {
      for (const item of scopeItems(typeId, { slug: args.flags.slug })) {
        checked += 1;

        const { issues, label: name, stamped } = await validateItem({ typeId, locale, slug: item.slug, stamp, shippable });
        const itemErrors = issues.filter((i) => i.level === ERROR);
        const itemWarnings = issues.filter((i) => i.level === WARN);
        errors += itemErrors.length;
        warnings += itemWarnings.length;

        if (itemErrors.length === 0 && itemWarnings.length === 0) {
          console.log(`ok    ${name}${stamped ? " (stamped)" : ""}`);
        } else {
          console.log(`${itemErrors.length > 0 ? "FAIL " : "warn "} ${name}`);
          for (const found of issues) console.log(`        ${found.level}  ${found.message}`);
        }
      }
    }
  }

  // Sentinel summary, so a plain run still answers "what is left?".
  for (const locale of locales) {
    let total = 0;
    let stubbed = 0;
    let inapplicable = 0;
    for (const typeId of typeIds) {
      if (contentType(typeId).format !== "catalog") continue;
      for (const item of listItems(typeId, locale)) {
        const counts = countSentinels(readJson(item.path));
        total += counts.total;
        stubbed += counts.stubbed;
        inapplicable += counts.inapplicable;
      }
    }
    // Inapplicable keys are reported, not hidden, and sit outside the fraction:
    // they are neither done nor missing.
    console.log(
      `\n${locale}: ${total - stubbed}/${total} catalog keys translated, ${stubbed} still "${SENTINEL}"` +
        (inapplicable > 0 ? `, ${inapplicable} "${INAPPLICABLE}" (unreachable in this language)` : "")
    );
  }

  console.log(`\nvalidate: ${checked} items, ${errors} errors, ${warnings} warnings.`);
  if (errors > 0) process.exit(1);
}

await main();
