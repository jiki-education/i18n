#!/usr/bin/env node
//
// have-translations — does a set of CHANGED English files already have
// translations, in every locale that is asked about?
//
// Usage:
//   node scripts/have-translations.mjs --changes=<file|-> [--locales=hu,fr] [--json]
//   node scripts/have-translations.mjs <path> [<path>...] [--locales=hu,fr] [--json]
//
// `--changes` takes `git diff --name-status` output (`A\tpath`, `M\tpath`,
// `D\tpath`, and `R100\told\tnew`), which is exactly what a CI job already has
// to hand. Bare positional paths are treated as modified.
//
// ## What this is for
//
// The front-end's `.github/workflows/i18n.yml` calls this on a PR, over the
// English that PR changes, and fails the PR on anything BLOCKING. That closes a
// hole nothing else could see. The front-end's own locale gate reads
// `completeness.json`, which is generated against front-end MAIN, so it is
// structurally incapable of noticing English that exists only on the branch: a
// PR adding a hundred untranslated files passes it, and the failure surfaces
// later on somebody else's production deploy.
//
// The question here is asked about the branch's own files instead, by reading
// the branch's checkout as the English source (`--source-repo`, or the
// `JIKI_SOURCE_REPO` env override that scripts/lib/english.mjs already honours).
//
// ## The three verdicts
//
//   BLOCKING  the item is in the corpus, and this locale cannot render it. Either
//             the locale holds no file for it at all, or the file is there and
//             does not hold every key English defines. Both mean a learner in
//             that locale sees raw key names or an English page, so both fail.
//   WARNING   the translation exists and covers English, but was made against
//             OLDER English (its `en_md5` stamp no longer matches), or English
//             was deleted and translations of it are still on disk. Real work,
//             and never a merge blocker: an edit leaves a page slightly behind,
//             which is a much smaller harm than a hole, and blocking on it would
//             make every copy tweak in the front-end un-mergeable until ten
//             locales caught up.
//   IGNORED   corpus.json says the item is out of scope (`isExcluded`), or the
//             path is not English anything translates. Never blocks, and says so
//             out loud rather than silently dropping out, because "why did that
//             not block?" is a question somebody will ask.
//
// A `body`-scoped exclusion is deliberately NOT ignored. Its title and
// description are still required in every locale (see corpus.json), so it is
// still checked; only its Markdown body is exempt, and the body was never what
// is checked here.
//
// ## Nothing here knows a path layout
//
// The mapping from a front-end path back to (type, slug) is INVERTED from
// scripts/lib/content-types.mjs's own `sourceRepoPath`, using the same
// `"__SLUG__"` probe trick `discoverItems` uses to walk forwards. So a content
// type that is added, moved or renamed there is picked up here with no edit at
// all, and there is still exactly one place that knows where an item lives.

import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "./lib/args.mjs";
import { PRODUCTION_LOCALES, REPO_ROOT, assertTargetLocale, fail } from "./lib/constants.mjs";
import { CONTENT_TYPES, CONTENT_TYPE_IDS, contentType, localPath, metaPath } from "./lib/content-types.mjs";
import { DEFAULT_SOURCE_REPO, englishPath, englishRepo } from "./lib/english.mjs";
import { isExcluded } from "./lib/exclusions.mjs";
import {
  countAgainstEnglish,
  frontmatterValue,
  md5File,
  parseFrontmatter,
  parseVttNotes,
  readJson,
  readText
} from "./lib/files.mjs";

export const BLOCKING = "blocking";
export const WARNING = "warning";
export const IGNORED = "ignored";

// ------------------------------------------------------------ path inversion

/**
 * Invert one content type's `sourceRepoPath` into a matcher.
 *
 * A slugged type's path is a fixed string with the slug substituted into it, so
 * probing it with a sentinel and splitting on that sentinel recovers the fixed
 * halves. What goes between them depends on how many path segments the slug is
 * allowed to span, which the type already declares as `slugDepth` for discovery:
 * 1 (the usual case) is one directory name, 2 is a project episode's
 * "<project>/<uuid>", and "any" is the videos tree, which is not uniformly deep.
 *
 * An unslugged type has no slug to recover, so it is a plain string equality.
 */
function matcherFor(typeId) {
  const type = CONTENT_TYPES[typeId];
  if (!type.slugged) {
    const exact = type.sourceRepoPath();
    return (candidate) => (candidate === exact ? { type: typeId, slug: null } : null);
  }

  const [prefix, suffix] = type.sourceRepoPath("__SLUG__").split("__SLUG__");
  const depth = type.slugDepth ?? 1;
  // `[^/]+` per segment so a depth-1 slug can never swallow a directory
  // separator and match an item two levels down that belongs to nothing.
  const slug = depth === "any" ? "[^/]+(?:/[^/]+)*" : Array.from({ length: depth }, () => "[^/]+").join("/");
  const pattern = new RegExp(`^${escape(prefix)}(${slug})${escape(suffix)}$`);

  return (candidate) => {
    const match = pattern.exec(candidate);
    return match ? { type: typeId, slug: match[1] } : null;
  };
}

function escape(literal) {
  return literal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const MATCHERS = CONTENT_TYPE_IDS.map(matcherFor);

/**
 * The (type, slug) one source-repo path addresses, or null when it addresses
 * nothing this repo translates.
 *
 * Null is the ordinary answer, not an error: a PR touching an exercise's
 * TypeScript changes `curriculum/src/...` without changing a word anybody has to
 * translate, and the caller passes those in rather than pre-filtering, so that
 * the filter itself is derived from the registry rather than written twice.
 */
export function itemForSourcePath(sourcePath) {
  const normalised = sourcePath.replace(/^\.\//, "");
  for (const match of MATCHERS) {
    const hit = match(normalised);
    if (hit) return hit;
  }
  return null;
}

// -------------------------------------------------------------- the verdicts

/**
 * Classify one changed English path against one locale.
 *
 * `status` is git's: "A", "M" or "D". It only ever changes the WARNING half of
 * the answer (a stale stamp is only interesting for an edit; an orphan only for
 * a deletion). Whether the locale can render the item is asked the same way
 * however the file got there.
 *
 * `resolveEnglish` is the one seam, and it exists for scripts/test.mjs. English
 * is resolved through a module-level cache in scripts/lib/english.mjs, so a test
 * cannot point this at a doctored English tree by setting an env var after that
 * cache is warm. Overriding the resolver lets one assertion say "English has a
 * key the locale does not" against real files plus a temp one, which is the
 * rule most worth a test and the only one that needs the seam.
 */
export function classify({ sourcePath, status, locale, resolveEnglish = englishPath }) {
  const item = itemForSourcePath(sourcePath);
  if (!item) {
    return { verdict: IGNORED, sourcePath, locale, reason: "not a translated English file" };
  }

  const { type: typeId, slug } = item;
  const base = { sourcePath, locale, type: typeId, slug };

  if (isExcluded(typeId, slug)) {
    return { ...base, verdict: IGNORED, reason: "corpus.json excludes this item from the corpus" };
  }

  const target = localPath(typeId, locale, slug);
  const held = fs.existsSync(target);

  if (status === "D") {
    // English is gone, so there is nothing left to be missing and nothing to
    // compare keys against. What is left is a file for an item that no longer
    // exists, which is tidy-up rather than a gate.
    return held
      ? { ...base, verdict: WARNING, reason: "English was deleted; this translation is now orphaned", detail: rel(target) }
      : { ...base, verdict: IGNORED, reason: "English was deleted and this locale held no translation" };
  }

  const english = resolveEnglish(typeId, slug);
  if (!fs.existsSync(english)) {
    // The checkout does not hold the file the diff says changed, which means the
    // caller pointed at the wrong commit. Guessing would report a whole PR as
    // translated, so it says so instead.
    fail(`${sourcePath} is not in the English checkout at ${englishRepo(contentType(typeId).sourceRepo ?? DEFAULT_SOURCE_REPO)}`);
  }

  const type = contentType(typeId);
  const missing = type.format === "catalog" ? missingCatalogKeys(english, target, held, locale) : missingProseFields(type, english, target, held);
  if (missing) return { ...base, verdict: BLOCKING, ...missing };

  // Present and complete. The only thing left to say is whether it was made
  // against the English that is there NOW.
  if (status === "M" && isStale(type, english, target)) {
    return { ...base, verdict: WARNING, reason: "English changed; this translation was made against the older text", detail: rel(target) };
  }

  return { ...base, verdict: "ok", reason: "translated" };
}

/**
 * A catalog, counted against English's key set by the shared counter.
 *
 * `absent` is the number that matters: a key English defines that this locale
 * does not hold. It is deliberately not the same question as "is every key
 * translated". A `�` sentinel is a key that EXISTS and renders visibly as work
 * in progress, which `validate --shippable` gates on separately. What cannot be
 * allowed to merge is a key that is not there at all, because an exercise
 * catalog has no English fallback and the learner sees the raw key path.
 */
function missingCatalogKeys(english, target, held, locale) {
  const counts = countAgainstEnglish(readJson(english), held ? readJson(target) : null, { locale });
  if (counts.absent === 0) return null;

  return held
    ? {
        reason: `${counts.absent} of ${counts.total} key(s) English defines are absent from this locale's catalog`,
        detail: rel(target)
      }
    : { reason: "no catalog in this locale at all", detail: rel(target) };
}

/**
 * A prose page or subtitle file.
 *
 * Absent is the whole of it for a format with no key set. Where the type DOES
 * declare translatable frontmatter, an absent one of those fields is the same
 * failure as an absent catalog key and is reported the same way: the field is
 * card copy that surfaces in listings, and a page missing its title has a hole
 * in it. Whether a PRESENT field is a real translation or a copy of English is a
 * judgement `coverage` and `validate` make, and not one a merge gate should.
 */
function missingProseFields(type, english, target, held) {
  if (!held) return { reason: "no translation in this locale at all", detail: rel(target) };

  const fields = type.frontmatterTranslated ?? [];
  if (fields.length === 0) return null;

  const englishData = parseFrontmatter(readText(english)).data;
  const targetData = parseFrontmatter(readText(target)).data;
  // Only fields English actually carries. A type declares the fields it MAY
  // translate, and not every item fills every one of them.
  const absent = fields.filter((field) => frontmatterValue(englishData, field) !== undefined && frontmatterValue(targetData, field) === undefined);
  if (absent.length === 0) return null;

  return { reason: `frontmatter field(s) English defines are absent: ${absent.join(", ")}`, detail: rel(target) };
}

/**
 * Is the translation stamped against older English?
 *
 * One question, read from wherever the format can carry a stamp: prose puts
 * `en_md5` in its frontmatter, a VTT in a `NOTE en_md5` block, a catalog in a
 * sibling `.meta.json`. An UNSTAMPED file is not treated as stale here. It is a
 * real `validate` error, but it is not evidence that anything is out of date,
 * and this gate reports only what it can actually show.
 */
function isStale(type, english, target) {
  const expected = md5File(english);
  if (type.staleness === "sibling") {
    const meta = metaPath(target);
    if (!fs.existsSync(meta)) return false;
    const stamp = readJson(meta).en_md5;
    return Boolean(stamp) && stamp !== expected;
  }
  const stamp = type.staleness === "note" ? parseVttNotes(readText(target)).en_md5 : parseFrontmatter(readText(target)).data.en_md5;
  return Boolean(stamp) && stamp !== expected;
}

function rel(file) {
  return path.relative(REPO_ROOT, file);
}

// ------------------------------------------------------------------- the run

/** Every (path, locale) verdict for one set of changes. */
export function report(changes, locales) {
  const findings = [];
  for (const change of changes) {
    // A path that is not English at all is one finding rather than one per
    // locale: the locale set has nothing to do with why it was ignored.
    if (!itemForSourcePath(change.path)) {
      findings.push(classify({ sourcePath: change.path, status: change.status, locale: null }));
      continue;
    }
    for (const locale of locales) findings.push(classify({ sourcePath: change.path, status: change.status, locale }));
  }
  return findings;
}

// ------------------------------------------------------------ the CLI, below

function parseChanges(text) {
  const changes = [];
  for (const line of text.split("\n")) {
    if (line.trim() === "") continue;
    const fields = line.split("\t");
    const code = fields[0].trim();
    // A rename is two facts: the old path is gone and the new one is here. Said
    // as both, so a renamed exercise blocks on its new slug and warns about the
    // orphan under the old one, exactly as a delete-plus-add would.
    if (code.startsWith("R") || code.startsWith("C")) {
      if (code.startsWith("R")) changes.push({ status: "D", path: fields[1] });
      changes.push({ status: "A", path: fields[2] });
      continue;
    }
    changes.push({ status: code[0], path: fields[1] });
  }
  return changes;
}

function readChanges(source) {
  const text = source === "-" ? fs.readFileSync(0, "utf8") : fs.readFileSync(source, "utf8");
  return parseChanges(text);
}

function main() {
  const { flags, positional } = parseArgs(process.argv.slice(2));

  // Resolved through the env override rather than threaded as an argument,
  // because `englishPath` reaches the resolver several calls down and the
  // override is the documented way in. See scripts/lib/english.mjs.
  if (typeof flags["source-repo"] === "string") process.env.JIKI_SOURCE_REPO = path.resolve(flags["source-repo"]);

  const changes = flags.changes ? readChanges(flags.changes) : positional.map((file) => ({ status: "M", path: file }));
  if (changes.length === 0) {
    console.log("have-translations: no changed files given, so nothing to check.");
    process.exit(0);
  }

  const locales = typeof flags.locales === "string" ? flags.locales.split(",").map((l) => l.trim()).filter(Boolean) : PRODUCTION_LOCALES;
  for (const locale of locales) assertTargetLocale(locale);

  const findings = report(changes, locales);
  const blocking = findings.filter((f) => f.verdict === BLOCKING);
  const warnings = findings.filter((f) => f.verdict === WARNING);

  if (flags.json) {
    console.log(JSON.stringify({ locales, changes: changes.length, findings, blocking: blocking.length, warnings: warnings.length }, null, 2));
  } else {
    printHuman({ changes, locales, findings, blocking, warnings });
  }

  process.exit(blocking.length > 0 ? 1 : 0);
}

/**
 * The human report, grouped by FILE rather than by locale.
 *
 * A gap is almost always one item missing from every locale at once, so a
 * locale-major listing prints the same file ten times and buries the fact that
 * there is one thing to fix. File-major says "this file, in these ten locales",
 * which is both shorter and the shape of the work.
 */
function printHuman({ changes, locales, findings, blocking, warnings }) {
  console.log(`have-translations: ${changes.length} changed English file(s) against ${locales.length} locale(s): ${locales.join(", ")}\n`);

  for (const [file, group] of groupByPath(blocking)) {
    console.log(`  BLOCKING  ${file}`);
    for (const [reason, entries] of groupByReason(group)) {
      console.log(`      ${reason}`);
      console.log(`      in: ${entries.map((entry) => entry.locale).join(", ")}`);
    }
    console.log("");
  }

  for (const [file, group] of groupByPath(warnings)) {
    console.log(`  warning   ${file}`);
    for (const [reason, entries] of groupByReason(group)) {
      console.log(`      ${reason} (${entries.map((entry) => entry.locale).join(", ")})`);
    }
    console.log("");
  }

  const ignored = findings.filter((finding) => finding.verdict === IGNORED && finding.type);
  const ignoredFiles = new Set(ignored.map((finding) => finding.sourcePath));
  if (ignoredFiles.size > 0) {
    console.log(`  ${ignoredFiles.size} file(s) out of scope (corpus.json excludes the item), never blocking:`);
    for (const file of [...ignoredFiles].sort()) console.log(`      ${file}`);
    console.log("");
  }

  if (blocking.length === 0) {
    console.log(`Nothing blocking. ${warnings.length} warning(s).`);
    return;
  }

  const untouched = [...groupByPath(blocking)].filter(([, group]) => group.length === locales.length && group.every((entry) => entry.reason.startsWith("no ")));

  console.log(
    `${new Set(blocking.map((finding) => finding.sourcePath)).size} English file(s) are in the corpus and untranslated.\n\n` +
      `What to do about it, in the order to consider it:\n\n` +
      `  1. If the item is LIVE, it needs translating. The front-end's i18n-queue workflow has\n` +
      `     already opened an issue in jiki-education/i18n carrying this PR's head SHA. The\n` +
      `     translator repo's orchestrator picks that issue up, translates against that SHA,\n` +
      `     pushes to i18n, and closes it. Re-run this check when it does.\n` +
      `  2. If the item is NOT LIVE, it should never have been in scope, and translating it is\n` +
      `     the wrong fix. An exercise past the last shipped level is unreachable, so its\n` +
      `     teaching content is deferred: add it to i18n's corpus.json with the "not-yet-live\n` +
      `     exercise" reason (the instructions with "scope": "body", so its title and\n` +
      `     description are still translated; the message catalog whole), and delete those\n` +
      `     lines again in the change that makes the exercise live.\n`
  );

  if (untouched.length > 0) {
    console.log(
      `Case 2 is the likely one for ${untouched.length === 1 ? "this file" : "these files"}: no locale holds anything for\n` +
        `${untouched.length === 1 ? "it" : "them"} at all, which is the shape of a brand-new item rather than of a translation gap.\n` +
        untouched.map(([file]) => `      ${file}\n`).join("")
    );
  }
}

function groupByPath(findings) {
  const groups = new Map();
  for (const finding of findings) {
    if (!groups.has(finding.sourcePath)) groups.set(finding.sourcePath, []);
    groups.get(finding.sourcePath).push(finding);
  }
  return [...groups].sort(([a], [b]) => a.localeCompare(b));
}

function groupByReason(findings) {
  const groups = new Map();
  for (const finding of findings) {
    if (!groups.has(finding.reason)) groups.set(finding.reason, []);
    groups.get(finding.reason).push(finding);
  }
  return [...groups];
}

// Importable by scripts/test.mjs without running the CLI.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) main();

export { parseChanges };
