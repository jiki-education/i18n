#!/usr/bin/env node
//
// have-translations — does a set of CHANGED English files already have
// translations, in every locale that is asked about?
//
// Usage:
//   node scripts/have-translations.mjs --changes=<file|-> [--base=<sha>] [--locales=hu,fr] [--json]
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
//   BLOCKING  the item is in the corpus, and this CHANGE has made it
//             unrenderable in this locale. Either the locale holds no file for
//             it at all, or the change adds a key (or a frontmatter field) the
//             locale does not hold. A learner in that locale sees raw key names
//             or an English page, and the PR in front of you is why.
//   WARNING   real work, and never a merge blocker. Three shapes of it: the
//             translation covers English but was made against OLDER English (its
//             `en_md5` stamp no longer matches); the locale was ALREADY missing
//             keys this change did not touch; or English was deleted and
//             translations of it are still on disk.
//   IGNORED   corpus.json says the item is out of scope (`isExcluded`), or the
//             path is not English anything translates. Never blocks, and says so
//             out loud rather than silently dropping out, because "why did that
//             not block?" is a question somebody will ask.
//
// ## Only what the change ADDS blocks
//
// The distinction between the first two verdicts is what keeps this check worth
// having. A gate that blocked on every gap in every file a PR happens to touch
// would be a debt collector: it would turn a PR red for absences its author did
// not create and could not reasonably fix, and a check like that gets routed
// around once and ignored forever after.
//
// So for a MODIFIED catalog the blocking set is `head keys - base keys`, and a
// key the locale is missing that BASE English already defined is a warning. The
// same reasoning applies to a prose page's translatable frontmatter. An ADDED
// file needs none of this: every key in it is new by definition, so its whole
// key set blocks and the rule is unchanged.
//
// Base English is read with `git show <base>:<path>` from the same checkout head
// English is read from, rather than by checking the repo out twice. The caller
// already has both commits (its `--changes` came from a
// `git diff --name-status BASE...HEAD` in that very checkout), a second worktree
// would double the clone for one blob per file, and `git show` cannot drift from
// the diff the file list was derived from. With no `--base`, every absence
// blocks, which is the honest answer when nobody has said what "new" means.
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
import { execFileSync } from "node:child_process";
import { parseArgs } from "./lib/args.mjs";
import { PRODUCTION_LOCALES, REPO_ROOT, assertTargetLocale, fail } from "./lib/constants.mjs";
import { CONTENT_TYPES, CONTENT_TYPE_IDS, contentType, localPath, metaPath } from "./lib/content-types.mjs";
import { DEFAULT_SOURCE_REPO, englishPath, englishRepo } from "./lib/english.mjs";
import { isExcluded } from "./lib/exclusions.mjs";
import {
  arrayPaths,
  countAgainstEnglish,
  flatten,
  frontmatterValue,
  md5File,
  parseFrontmatter,
  parseVttNotes,
  readJson,
  readText,
  unflatten
} from "./lib/files.mjs";

export const BLOCKING = "blocking";
export const WARNING = "warning";
export const IGNORED = "ignored";

// -------------------------------------------------------------- base English

/**
 * One English file as it stood at the merge base, or null.
 *
 * `git show` against the checkout head English is already read from, because
 * that checkout necessarily holds both commits: the caller's file list came from
 * a `git diff` between them in that same repo. A second checkout would fetch a
 * whole tree to read one blob per changed file, and could be pointed at a
 * different commit from the one the diff used, which is the only way this could
 * silently answer the wrong question.
 *
 * Null means "the file did not exist at the base", which is not an error and not
 * even unusual: a file git called MODIFIED can still be absent at the base of a
 * three-dot diff in a merge-heavy history, and the honest reading of that is the
 * same as an addition, everything in it is new.
 */
function readBaseFile(repo, baseSha, sourcePath) {
  try {
    return execFileSync("git", ["show", `${baseSha}:${sourcePath}`], {
      cwd: repo,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"]
    });
  } catch {
    return null;
  }
}

/**
 * A reader for base English, bound to one base commit.
 *
 * Returned as a function rather than a preloaded map so a run with no blocking
 * findings never shells out at all: the base is only ever consulted to decide
 * whether an absence is new, and most files have no absences.
 */
export function baseReaderFor(baseSha, { repo = null } = {}) {
  if (!baseSha) return null;
  const cache = new Map();
  return (typeId, sourcePath) => {
    if (!cache.has(sourcePath)) {
      const from = repo ?? englishRepo(contentType(typeId).sourceRepo ?? DEFAULT_SOURCE_REPO);
      cache.set(sourcePath, readBaseFile(from, baseSha, sourcePath));
    }
    return cache.get(sourcePath);
  };
}

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
 * `readBase` is what makes only NEW gaps block: given the type and the path, it
 * returns that file's bytes at the merge base, or null. Omitted, every absence
 * blocks, which is the right answer when the caller has not said what the change
 * is being measured against.
 *
 * `resolveEnglish` is the one seam, and it exists for scripts/test.mjs. English
 * is resolved through a module-level cache in scripts/lib/english.mjs, so a test
 * cannot point this at a doctored English tree by setting an env var after that
 * cache is warm. Overriding the resolver lets one assertion say "English has a
 * key the locale does not" against real files plus a temp one, which is the
 * rule most worth a test and the only one that needs the seam.
 */
export function classify({ sourcePath, status, locale, resolveEnglish = englishPath, readBase = null }) {
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
  // An ADDED file has no base to be measured against: every key in it is new, so
  // the base reader is deliberately not consulted even when one was given.
  const baseText = status === "A" || !readBase ? null : readBase(typeId, sourcePath);
  const gaps =
    type.format === "catalog"
      ? catalogGaps(english, target, held, locale, baseText)
      : proseGaps(type, english, target, held, baseText);

  if (gaps.blocking) return { ...base, verdict: BLOCKING, ...gaps.blocking };
  // A pre-existing gap is reported before staleness, because it is the larger of
  // the two problems and only one line is printed per file per locale.
  if (gaps.warning) return { ...base, verdict: WARNING, ...gaps.warning };

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
 *
 * Which of those absences BLOCKS is the base's question. English is split into
 * the keys this change added and the keys the base already had, and each half is
 * counted separately by the same function, so the plural-reachability and
 * empty-container rules that decide what counts as absent at all are applied
 * once, in `countAgainstEnglish`, rather than restated here.
 */
function catalogGaps(english, target, held, locale, baseText) {
  const englishTree = readJson(english);
  if (!held) {
    // Nothing to partition. Every key is missing, and no reading of the base
    // makes a file the locale does not have at all anything but a hole.
    const counts = countAgainstEnglish(englishTree, null, { locale });
    return counts.absent === 0 ? {} : { blocking: { reason: "no catalog in this locale at all", detail: rel(target) } };
  }

  const targetTree = readJson(target);
  const counts = countAgainstEnglish(englishTree, targetTree, { locale });
  if (counts.absent === 0) return {};

  if (baseText === null) {
    return { blocking: { reason: `${counts.absent} of ${counts.total} key(s) English defines are absent from this locale's catalog`, detail: rel(target) } };
  }

  const baseKeys = new Set(Object.keys(flatten(JSON.parse(baseText))));
  const added = countAgainstEnglish(subsetOfKeys(englishTree, (key) => !baseKeys.has(key)), targetTree, { locale });
  const preExisting = counts.absent - added.absent;

  if (added.absent > 0) {
    return {
      blocking: {
        reason:
          `${added.absent} key(s) this change ADDS are absent from this locale's catalog` +
          (preExisting > 0 ? ` (and ${preExisting} more were already absent before it)` : ""),
        detail: rel(target)
      }
    };
  }

  return {
    warning: {
      reason: `${preExisting} of ${counts.total} key(s) were ALREADY absent from this locale before this change; nothing this change adds is missing`,
      detail: rel(target)
    }
  };
}

/**
 * One catalog reduced to the keys a predicate keeps.
 *
 * Flattened and rebuilt rather than walked, because `unflatten` is told which
 * paths were arrays and restores them as arrays. A subset built by hand would
 * turn a two-element array into an object with keys "0" and "1", and
 * `countAgainstEnglish` counts those differently.
 */
function subsetOfKeys(tree, keep) {
  const flat = flatten(tree);
  const kept = Object.fromEntries(Object.entries(flat).filter(([key]) => keep(key)));
  return unflatten(kept, arrayPaths(tree));
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
 *
 * The base split applies here for the same reason it applies to a catalog. A
 * type that gains a translatable field, or a page that starts filling one it
 * left empty, adds a hole to every locale and blocks; a field the locale has
 * been missing all along is somebody's outstanding work and warns.
 */
function proseGaps(type, english, target, held, baseText) {
  if (!held) return { blocking: { reason: "no translation in this locale at all", detail: rel(target) } };

  const fields = type.frontmatterTranslated ?? [];
  if (fields.length === 0) return {};

  const englishData = parseFrontmatter(readText(english)).data;
  const targetData = parseFrontmatter(readText(target)).data;
  // Only fields English actually carries. A type declares the fields it MAY
  // translate, and not every item fills every one of them.
  const absent = fields.filter((field) => frontmatterValue(englishData, field) !== undefined && frontmatterValue(targetData, field) === undefined);
  if (absent.length === 0) return {};

  if (baseText === null) {
    return { blocking: { reason: `frontmatter field(s) English defines are absent: ${absent.join(", ")}`, detail: rel(target) } };
  }

  const baseData = parseFrontmatter(baseText).data;
  const added = absent.filter((field) => frontmatterValue(baseData, field) === undefined);
  const preExisting = absent.filter((field) => !added.includes(field));

  if (added.length > 0) {
    return {
      blocking: {
        reason:
          `frontmatter field(s) this change ADDS are absent: ${added.join(", ")}` +
          (preExisting.length > 0 ? ` (and ${preExisting.join(", ")} were already absent before it)` : ""),
        detail: rel(target)
      }
    };
  }

  return {
    warning: {
      reason: `frontmatter field(s) were ALREADY absent before this change: ${preExisting.join(", ")}`,
      detail: rel(target)
    }
  };
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
export function report(changes, locales, { readBase = null } = {}) {
  const findings = [];
  for (const change of changes) {
    // A path that is not English at all is one finding rather than one per
    // locale: the locale set has nothing to do with why it was ignored.
    if (!itemForSourcePath(change.path)) {
      findings.push(classify({ sourcePath: change.path, status: change.status, locale: null }));
      continue;
    }
    for (const locale of locales) findings.push(classify({ sourcePath: change.path, status: change.status, locale, readBase }));
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

  // The merge base this change is measured against. Without it every absence
  // blocks, which is safe but blunt; CI always has it, because the file list it
  // passes in came from a diff against it.
  const readBase = baseReaderFor(typeof flags.base === "string" ? flags.base : null);

  const findings = report(changes, locales, { readBase });
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
    `${new Set(blocking.map((finding) => finding.sourcePath)).size} English file(s) this change adds or extends have no translation.\n\n` +
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
