#!/usr/bin/env node
//
// validate — verify every translated item against its English source, and stamp
// staleness hashes once every blocking check passes.
//
// Usage:
//   node scripts/validate.mjs [<locale|all>] [--type=<id>] [--slug=<slug>]
//                             [--shippable] [--stamp] [--gate=all]
//                             [--baseline-ref=<ref>] [--json=<path>]
//
// Examples:
//   node scripts/validate.mjs all          # the whole backlog, absolute count
//   node scripts/validate.mjs all --baseline-ref=origin/main   # ...only what I introduced
//   node scripts/validate.mjs all --gate=all   # hold every locale to it
//   node scripts/validate.mjs hu --shippable   # also fail on any remaining sentinel
//   node scripts/validate.mjs hu --type=concept --slug=arrays --stamp   # after translating
//
// Exit codes: 0 no gating ERROR, 1 at least one. Two things narrow "gating": only
// PRODUCTION locales gate (see below), and with `--baseline-ref` only errors this
// branch INTRODUCED gate (see "Baseline-relative gating"). `--gate=all` widens the
// first; nothing widens the second except leaving the flag off, which is the
// default and is the absolute question.
//
// ## Errors block, warnings never do
//
// ERROR checks are structural facts (a key English has and the translation does
// not, placeholder counts, brace balance, frontmatter keys, staleness stamps),
// WARN checks are heuristics, and judgements a human has to make. A WARN is
// printed to be read, never to gate. Do not promote one.
//
// Key parity is asymmetric, and deliberately so: a key English has and the
// target does not blocks, a key the target has and English does not warns. The
// two repos deploy separately, so a catalog has to be allowed to be a superset
// of English for the length of a deploy. See "deploy overlap" in lib/checks.mjs.
//
// ## The gate is scoped to production locales
//
// Every locale in scope is checked, printed and counted exactly as it always
// was. What changed is which of those findings decide the exit code: only errors
// in a PRODUCTION locale do, meaning one listed in locales.json's
// `productionTargets` (see that file for the list, its provenance, and why it is
// not the front-end's served-locale list).
//
// This is a change to what gates, never to what is checked. Nothing became
// invisible: the summary prints both counts side by side, so a run that exits 0
// with hundreds of non-production errors says so on its last line and cannot be
// mistaken for a clean corpus.
//
// The reason for scoping is that `targets` spans locales at wildly different
// stages, from served-to-real-users down to a first bootstrap sample that nobody
// has reviewed yet. Holding all of them to one gate made it permanently red, and
// a permanently red gate is not a gate: it gets ignored within a month, and the
// first real regression in a live locale then lands underneath the noise with
// nothing to distinguish it. A gate that is normally green is the only kind whose
// going red means anything, and "fix this now" is a sentence you can only write
// about a locale somebody is actually held to.
//
// A locale joining `productionTargets` is therefore a deliberate step, taken when
// somebody intends to keep it green, and it precedes that locale being served.
//
// `--gate=all` is the escape hatch: it holds every locale in scope to the exit
// code, which is what you want when you are deliberately sweeping the whole
// corpus and want a non-zero exit to drive a script.
//
// ### Why --shippable is NOT scoped
//
// `--shippable` is a different question asked about one named locale: "is this
// locale fit to be served?". It is the go-live gate, and go-live is exactly the
// moment a locale is not yet in `productionTargets` (it joins by passing). So
// scoping `--shippable` to production locales would make it answer "yes" for
// every locale that has not already gone live, which is every locale anyone would
// ever point it at. It therefore gates on whatever locale it is given, production
// or not, and `--gate` has no effect on it.
//
// That rule is written as "whatever locale it is given", and it is meant
// literally, including the odd case: `validate.mjs all --shippable` gates on all
// of them. Nobody sensibly asks the go-live question about thirty-odd locales at
// once, so this is not a case worth building a third policy for, and of the two
// available answers the conservative one is right: a flag whose whole job is to
// refuse to ship something imperfect should not start making exceptions when it
// is pointed at more than one thing. `--shippable` widens the gate; it never
// narrows it.
//
// ## Baseline-relative gating (--baseline-ref)
//
// Without the flag this answers an ABSOLUTE question: how many errors are there.
// That is the right question for a human asking "what is the backlog?", and it is
// the default for exactly that reason. It is the wrong question to gate a pull
// request on, and the difference is not academic: as this is written, i18n main
// carries 884 errors in production locales against front-end main, so every PR in
// this repo, including one that touches nothing but `scripts/`, fails a gate for a
// backlog it did not create.
//
// That backlog is the intended workflow rather than a mistake. The front-end's
// queue dispatches translation at a PR's HEAD, so translation deliberately runs
// AHEAD of English merging: for the whole review window of any curriculum PR,
// this repo holds translations of English that is not yet on front-end main, and
// every one of them reads as `stale:` or `missing key:` against main. The backlog
// is a function of how many front-end PRs are open, and it is never zero for long.
//
// So `--baseline-ref` gates on the DIFFERENCE. The same checks run twice, once
// against this branch and once against the content at its merge base with the
// named ref, and only the errors present at the head and absent at the base decide
// the exit code. Errors on both sides are pre-existing: still printed, still
// counted, never fatal. Errors on the base alone are fixes, and are named as such,
// so a PR that repairs something gets credit for it rather than merely not being
// punished. This is the same reasoning that took `validate` off pushes to main: a
// check that is permanently red is not a check, because within a month nobody
// reads it, and the first real regression then lands underneath the noise.
//
// ### Head scripts, base content
//
// The base run uses the BASE's `locales/`, `locales.json` and `corpus.json`, and
// this branch's `scripts/`. Running the base's own scripts would compare two
// different validators, so a PR that only reworded a message would report its
// whole corpus as new errors. Running the head's checks over both trees asks one
// question with one set of rules, which is the only version of the question that
// has an answer.
//
// It also means a PR that TIGHTENS a check owns everything the tightening finds,
// which is correct: those errors did not exist before the PR, in the only sense
// that matters to the person reviewing it.
//
// ### Both runs read the same English
//
// The base run is given the head's English checkout, whatever that is, including
// when the head moved the `English-Ref:` pin. Letting each side resolve its own
// pin would mean differencing two runs against two different Englishes, and the
// result would attribute to the branch every item whose English moved between the
// two pins. The translation PR is the case that makes this obvious: it moves the
// pin forward and retranslates some items. Against one fixed English, the items it
// retranslated are stale at the base and clean at the head, so they show up as
// FIXED, and the items it did not touch are stale on both sides, so they are
// pre-existing. Against two Englishes, that second group would read as new errors
// the branch introduced, which is the opposite of the truth.
//
// ### It does not touch --shippable
//
// `--shippable` asks whether a locale is fit to be SERVED. A reader hitting a
// stale page does not care when it went stale, so an absolute question is the only
// honest one, and a baseline could only ever make a locale look shippable because
// its defects are old. So `--shippable` ignores the baseline entirely and gates on
// the absolute count, exactly as it did before. `--gate=all` is orthogonal and
// composes: it widens WHICH locales' errors count, and the baseline decides WHICH
// errors are the branch's, in that order.
//
// ### --json
//
// The machine-readable finding set, which is how the two runs are compared: the
// head spawns itself over the base tree with `--json` and reads the file back. It
// is also usable on its own, for anything that wants the error set rather than the
// count.
//
// Findings are matched across the two runs by an IDENTITY, not by their printed
// line: locale, content type, slug, and the message with its volatile parts
// (staleness hashes, counts, paths, the parenthetical detail) normalised away. A
// weaker key hides new errors behind old ones; a stricter one reports every
// re-hashed stamp as a fresh defect. See `findingId`.
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
//
// ## An item with no file is `miss`, never `ok`
//
// Every check here reads a translation, so an item a locale holds NO file for
// produces no findings at all. Reported on the findings alone that is an `ok`
// line, which is what this printed for a locale missing the file entirely, and
// a clean run then read as "this language is complete" for a language missing
// dozens of items.
//
// The item list is derived from ENGLISH (`scopeItems` -> `corpusItems`), so the
// gap is knowable: the run walks what English defines and asks each locale for
// it. Absence is now its own status, counted separately and printed per locale
// in the summary, and it stays non-blocking outside `--shippable` for the same
// reason a sentinel does. See `itemVerdict` in scripts/lib/checks.mjs for why it
// is a status and not an error.
//
// One caveat this cannot fix and does not pretend to: `corpusItems` is English
// filtered to what at least one locale has begun, so an item NO locale has
// started is not in any run's scope and cannot be reported missing by any of
// them. `coverage.mjs`'s `unstarted` column is what answers that, and the
// summary line here says so.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { INAPPLICABLE, PRODUCTION_LOCALES, REPO_ROOT, SENTINEL, TARGET_LOCALES, assertTargetLocale, fail } from "./lib/constants.mjs";
import { CONTENT_TYPE_IDS, contentType, listItems, localPath, metaPath } from "./lib/content-types.mjs";
import { isBodyExcluded } from "./lib/exclusions.mjs";
import { DEFAULT_SOURCE_REPO, englishPath, englishRepo, scopeItems, sourceRepoSpec } from "./lib/english.mjs";
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
import { ERROR, FAILED, MISSING, OK, WARN, checkCatalog, checkProse, checkVtt, itemVerdict } from "./lib/checks.mjs";
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
  // An item whose BODY is declared out of the corpus (corpus.json, `"scope":
  // "body"`) is checked for its translatable frontmatter and not for its prose.
  // See scripts/lib/exclusions.mjs. Nothing else about the item changes: it is
  // still resolved, still checked, still stamped.
  const bodyOutOfCorpus = isBodyExcluded(typeId, slug);
  const english = englishPath(typeId, slug);
  const targetPath = localPath(typeId, locale, slug);

  // An item a locale has not reached yet is a normal state, on the same terms as
  // a remaining sentinel: this script answers "is what is here correct", and
  // coverage.mjs answers "how much is here". It only blocks under --shippable,
  // where a gap means the locale would render English in an RTL layout.
  //
  // It is REPORTED either way, as `miss`. Returning no findings is not the same
  // as passing, and returning here before any of the format branches is also what
  // makes a missing file unstampable: there is nothing to stamp and nothing that
  // could write one.
  //
  // The two exemptions compose here, and getting that wrong is the whole point of
  // `body` scope. A body-excluded item with no file still needs its title and
  // description and still does NOT need its body, so it carries the same note a
  // present one does: `miss` says "start this", the note says "only this much of
  // it". Without the note a reader would translate a body nothing publishes.
  if (!fs.existsSync(targetPath)) {
    const where = path.relative(process.cwd(), targetPath);
    return {
      issues: shippable
        ? [{ level: ERROR, message: `not translated (no file at ${where})${bodyOutOfCorpus ? "; its frontmatter is required, its body is not" : ""}` }]
        : [],
      label: label(typeId, locale, slug),
      missing: true,
      note: bodyNote(bodyOutOfCorpus),
      where
    };
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
    allowUntranslated: !shippable,
    bodyOutOfCorpus
  });

  issues.push(...(await crossCheckFrontmatter(target.raw, target.data)));

  const blockingOtherThanStamp = issues.filter(
    (i) => i.level === ERROR && !i.message.startsWith("stale:") && !i.message.startsWith("frontmatter: no en_md5")
  );

  const note = bodyNote(bodyOutOfCorpus);

  if (stamp && blockingOtherThanStamp.length === 0 && target.data.en_md5 !== expected) {
    writeText(targetPath, stampFrontmatter(target.raw, expected));
    return { issues: blockingOtherThanStamp, label: label(typeId, locale, slug), stamped: true, note };
  }

  return { issues, label: label(typeId, locale, slug), note };
}

const label = (typeId, locale, slug) => `${locale} ${typeId}${slug ? `/${slug}` : ""}`;

/**
 * Said out loud on every line it applies to, present file or missing one: an item
 * checked (or wanted) for its frontmatter alone is held to less than the line
 * above it, and a reader must not have to know which slugs are in corpus.json to
 * see that.
 */
const bodyNote = (bodyOutOfCorpus) => (bodyOutOfCorpus ? "frontmatter only; its body is out of the corpus" : null);

// ------------------------------------------------------- baseline machinery
//
// Everything below exists to answer "which of these errors did this branch
// introduce?". See "Baseline-relative gating" in the header for why that is the
// question a PR has to be gated on, and the absolute count is not.

/**
 * The parts of a message that change without the error changing.
 *
 * An identity has to survive a re-run over a slightly different tree, or every
 * PR reports churn as new errors, and it has to keep whatever names the thing
 * that is wrong, or a real new error hides behind an old one with the same
 * shape. So this strips the values and keeps the subject:
 *
 *   - a 32-character hex string is a staleness stamp. `stale: en_md5 is a1... ,
 *     the English source is now b2...` is ONE error about one item however many
 *     times either hash is rewritten.
 *   - a trailing parenthetical is the detail, never the subject: the placeholder
 *     lists, the leaf counts, the path a missing file would have had (which is
 *     cwd-relative, so it differs between the two checkouts for that reason
 *     alone).
 *   - a bare number is a count. `cue count: 12 in the translation` and the same
 *     line saying 13 are the same defect.
 *
 * A digit that is part of an identifier is NOT a count and is left alone, so
 * `missing key: item1` and `missing key: item2` stay two different errors. That
 * is the boundary the lookbehind draws.
 */
function normaliseMessage(message) {
  return message
    .replace(/\b[0-9a-f]{32}\b/g, "<hash>")
    .replace(/\s*\([^()]*\)\s*$/, "")
    .replace(/(?<![\w.])\d+(?![\w.])/g, "<n>")
    .trim();
}

/**
 * The identity of one finding, stable across two runs over two trees.
 *
 * NUL as the separator because it is the one byte a locale, a type id, a slug and
 * a message all cannot contain, so no combination of them can be spelled two ways.
 */
export function findingId({ locale, typeId, slug, message }) {
  return [locale ?? "", typeId ?? "", slug ?? "", normaliseMessage(message)].join("\u0000");
}

const countById = (findings) => {
  const counts = new Map();
  for (const found of findings) counts.set(found.id, (counts.get(found.id) ?? 0) + 1);
  return counts;
};

/**
 * Head findings against base findings, as a multiset difference.
 *
 * A multiset rather than a set, because an item can carry the same error twice
 * (two missing keys that normalise alike, say), and going from one to two of them
 * is a regression a set would not see. The nth occurrence of an identity is new
 * when the base had fewer than n of it.
 */
export function diffFindings(baseFindings, headFindings) {
  const baseCounts = countById(baseFindings);
  const headCounts = countById(headFindings);

  const seen = new Map();
  const introduced = [];
  const preExisting = [];
  for (const found of headFindings) {
    const index = seen.get(found.id) ?? 0;
    seen.set(found.id, index + 1);
    (index < (baseCounts.get(found.id) ?? 0) ? preExisting : introduced).push(found);
  }

  const seenBase = new Map();
  const fixed = [];
  for (const found of baseFindings) {
    const index = seenBase.get(found.id) ?? 0;
    seenBase.set(found.id, index + 1);
    if (index >= (headCounts.get(found.id) ?? 0)) fixed.push(found);
  }

  return { introduced, preExisting, fixed };
}

/**
 * Run these same checks over the content at `ref`'s merge base with HEAD, and
 * return its findings.
 *
 * The merge base rather than the ref itself, for the same reason the English diff
 * uses one: a branch open for a while would otherwise be handed every error that
 * landed on main since it forked and told it had introduced them.
 *
 * The base tree is a detached git worktree, with THIS branch's `scripts/` copied
 * over the top of its own (head checks, base content: see the header) and this
 * run's `node_modules` and English checkouts pointed at from the environment, so
 * the two runs differ in exactly one thing, which is the content.
 */
function baselineFindings({ ref, locale, typeId, slug, gate }) {
  let mergeBase;
  try {
    mergeBase = execFileSync("git", ["merge-base", ref, "HEAD"], { cwd: REPO_ROOT, encoding: "utf8" }).trim();
  } catch (error) {
    fail(
      `--baseline-ref=${ref}: could not find a merge base with HEAD (${error.message.split("\n")[0]}).\n` +
        `  In CI, fetch the base branch first; the workflow's "Which English" step already does.`
    );
  }

  const work = fs.mkdtempSync(path.join(os.tmpdir(), "jiki-i18n-baseline-"));
  const tree = path.join(work, "tree");
  const report = path.join(work, "findings.json");

  try {
    execFileSync("git", ["worktree", "add", "--detach", "--quiet", tree, mergeBase], { cwd: REPO_ROOT, stdio: ["ignore", "pipe", "inherit"] });

    fs.rmSync(path.join(tree, "scripts"), { recursive: true, force: true });
    fs.cpSync(path.join(REPO_ROOT, "scripts"), path.join(tree, "scripts"), { recursive: true });

    // Not copied: an install is tens of megabytes and the renderer cross-check
    // needs the same one either way. A symlink is refused on nothing this runs
    // on, and a missing install is already a state validate handles.
    const modules = path.join(REPO_ROOT, "node_modules");
    if (fs.existsSync(modules)) fs.symlinkSync(modules, path.join(tree, "node_modules"), "junction");

    // English, named explicitly rather than left to resolve. The base tree has no
    // `.source/`, and even if it did, both runs MUST read one English: see "Both
    // runs read the same English" in the header.
    const env = { ...process.env };
    for (const id of [...new Set(CONTENT_TYPE_IDS.map((each) => contentType(each).sourceRepo ?? DEFAULT_SOURCE_REPO))]) {
      const resolved = englishRepo(id, undefined, { optional: true });
      if (resolved) env[sourceRepoSpec(id).env] = resolved;
    }

    const argv = [path.join(tree, "scripts", "validate.mjs"), locale, `--json=${report}`, `--gate=${gate}`];
    if (typeId) argv.push(`--type=${typeId}`);
    if (slug) argv.push(`--slug=${slug}`);

    // Its exit code is the base's own verdict and says nothing here; what is
    // wanted is its finding set, and a base full of errors is the normal case
    // this whole mechanism exists for. Only a run that produced no report at all
    // is a failure.
    const run = spawnSync(process.execPath, argv, { cwd: tree, encoding: "utf8", env, maxBuffer: 256 * 1024 * 1024 });
    if (!fs.existsSync(report)) {
      fail(
        `--baseline-ref=${ref}: the baseline run over ${mergeBase.slice(0, 12)} produced no findings file.\n` +
          `${(run.stderr || run.stdout || "").split("\n").slice(-15).join("\n")}`
      );
    }
    return { mergeBase, findings: readJson(report).findings };
  } finally {
    try {
      execFileSync("git", ["worktree", "remove", "--force", tree], { cwd: REPO_ROOT, stdio: "ignore" });
    } catch {
      // A worktree that will not detach is a temp directory left behind, which is
      // not worth failing a run over.
    }
    fs.rmSync(work, { recursive: true, force: true });
  }
}

/** One finding, printed the way the per-item lines print it, with its item named. */
const findingLine = (found) => `  ${found.locale} ${found.typeId}${found.slug ? `/${found.slug}` : ""}: ${found.message}`;

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0] ?? "all";
  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);

  // `--gate=all` widens the exit code to every locale in scope. Spelled as a
  // value rather than a bare flag so the default ("production") has a name a
  // reader can say out loud, and so a future third policy has somewhere to go.
  const gate = args.flags.gate ?? "production";
  if (gate !== "production" && gate !== "all") {
    fail(`unknown --gate=${gate}. Use --gate=production (the default, exit 1 on errors in a production locale) or --gate=all (exit 1 on any error).`);
  }


  // Baseline-relative gating. Off by default, because the absolute count is the
  // right answer to "what is the backlog?" and the wrong one to gate a PR on.
  // See "Baseline-relative gating" in the header.
  const baselineRef = typeof args.flags["baseline-ref"] === "string" ? args.flags["baseline-ref"] : null;
  if (args.flags["baseline-ref"] === true) fail("--baseline-ref needs a ref to compare against, for example --baseline-ref=origin/main.");
  const jsonPath = typeof args.flags.json === "string" ? path.resolve(args.flags.json) : null;
  if (args.flags.json === true) fail("--json needs a path to write the finding set to, for example --json=findings.json.");
  if (baselineRef && args.flags.stamp) {
    fail("--baseline-ref and --stamp do not go together: stamping rewrites the very staleness findings the diff is made of.");
  }

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

  const isProduction = (locale) => PRODUCTION_LOCALES.includes(locale);

  let warnings = 0;
  let checked = 0;
  let missing = 0;
  // Counted by where the error IS, never by whether it gates. The split is a
  // property of the corpus, so it is reported identically under every --gate
  // setting and the exit code is decided from it afterwards. That way widening
  // the gate changes what fails, never what the summary says is there.
  let productionErrors = 0;
  let nonProductionErrors = 0;
  /** Errors belonging to no locale (the guard checks). Always gate. */
  let guardErrors = 0;
  /** The locales that actually have errors, so the summary can count them. */
  const productionLocalesWithErrors = new Set();
  const nonProductionLocalesWithErrors = new Set();
  /** Per locale, the missing items grouped by type, for the summary. */
  const missingByLocale = new Map();
  /**
   * Every ERROR, as an identified finding, for --json and for the baseline diff.
   *
   * Errors only. Warnings never gate, so differencing them would produce a list
   * nothing can act on, and they are the noisiest half of the output.
   */
  const findings = [];

  // The guard checks belong to no locale: a broken R2 key guard is a fact about
  // this repo's code, not about anybody's translation, and it would let English
  // reach the bucket. It gates unconditionally, whatever --gate says.
  const guardIssues = checkGuards();
  for (const found of guardIssues) {
    console.error(`  ${found.level}  guards: ${found.message}`);
    guardErrors += 1;
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

        const result = await validateItem({ typeId, locale, slug: item.slug, stamp, shippable });
        const { issues, label: name, stamped, note, where } = result;
        const suffix = `${stamped ? " (stamped)" : ""}${note ? ` [${note}]` : ""}`;
        const verdict = itemVerdict(result);
        if (isProduction(locale)) {
          productionErrors += verdict.errors;
          if (verdict.errors > 0) productionLocalesWithErrors.add(locale);
        } else {
          nonProductionErrors += verdict.errors;
          if (verdict.errors > 0) nonProductionLocalesWithErrors.add(locale);
        }
        warnings += verdict.warnings;

        for (const found of issues) {
          if (found.level !== ERROR) continue;
          const finding = { locale, typeId, slug: item.slug ?? null, message: found.message, production: isProduction(locale) };
          findings.push({ id: findingId(finding), ...finding });
        }

        if (verdict.missing) {
          missing += 1;
          if (!missingByLocale.has(locale)) missingByLocale.set(locale, new Map());
          const byType = missingByLocale.get(locale);
          byType.set(typeId, (byType.get(typeId) ?? 0) + 1);
        }

        if (verdict.status === OK) {
          console.log(`ok    ${name}${suffix}`);
        } else if (verdict.status === MISSING) {
          // Not an error outside --shippable, and never silent: no file is a
          // fact about the translation, not an absence of facts.
          console.log(`miss  ${name}${suffix}`);
          console.log(`        no translation file at ${where}`);
        } else {
          console.log(`${verdict.status === FAILED ? "FAIL " : "warn "} ${name}${suffix}`);
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
        // Counted against ENGLISH's keys, as coverage.mjs counts: a catalog may
        // hold a key English does not have (see "deploy overlap" in checks.mjs),
        // and counting it would put a key nobody can work on into both halves of
        // the fraction, so `1490/1490` would read `1491/1491`.
        const english = englishPath(typeId, item.slug);
        const counts = countSentinels(readJson(item.path), {
          english: fs.existsSync(english) ? readJson(english) : null
        });
        total += counts.total;
        stubbed += counts.stubbed;
        inapplicable += counts.inapplicable;
      }
    }
    // Inapplicable keys are reported, not hidden, and sit outside the fraction:
    // they are neither done nor missing.
    //
    // The fraction counts the catalogs the locale HOLDS, so a catalog it holds no
    // file for contributes nothing to either half and a locale with none reads
    // `0/0`, which is the same shape a finished one has. The missing line below
    // is what tells those apart, and it is printed before the fraction so the two
    // are read together.
    const gaps = missingByLocale.get(locale);
    if (gaps) {
      const detail = [...gaps.entries()].map(([typeId, count]) => `${typeId}${count > 1 ? ` x${count}` : ""}`).join(", ");
      const totalMissing = [...gaps.values()].reduce((sum, count) => sum + count, 0);
      console.log(
        `\n${locale}: ${totalMissing} ${totalMissing === 1 ? "item has" : "items have"} NO translation file (${detail}).` +
          (shippable
            ? `\n${locale}: blocking, because --shippable serves this locale and a gap would serve English from a translated URL.`
            : `\n${locale}: not an error here (a partly translated locale is normal); --shippable blocks on them.`) +
          `\n${locale}: this counts only items some locale has begun; coverage.mjs also counts the ones nobody has.`
      );
    }
    console.log(
      `${gaps ? "" : "\n"}${locale}: ${total - stubbed}/${total} catalog keys translated, ${stubbed} still "${SENTINEL}"` +
        (inapplicable > 0 ? `, ${inapplicable} "${INAPPLICABLE}" (unreachable in this language)` : "")
    );
  }

  // The two error counts are printed side by side, always, so the scoping of the
  // gate is impossible to miss and a green run can never be read as "the corpus
  // is clean" when it is only "the locales we hold to this are clean".
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const errorSummary = [
    `${plural(productionErrors, "error", "errors")} in ${plural(productionLocalesWithErrors.size, "production locale", "production locales")}`,
    `${plural(nonProductionErrors, "error", "errors")} in ${plural(nonProductionLocalesWithErrors.size, "non-production locale", "non-production locales")}`
  ];
  if (guardErrors > 0) errorSummary.unshift(`${plural(guardErrors, "guard error", "guard errors")}`);

  console.log(
    `\nvalidate: ${checked} items, ${missing} with no translation file, ${errorSummary.join(", ")}, ${warnings} warnings.`
  );

  // Written before the baseline diff, and before the exit code is decided, so a
  // report exists even for a run that is about to fail. It is what the baseline
  // subprocess is spawned for.
  if (jsonPath) {
    fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
    writeJson(jsonPath, { version: 1, checked, findings });
    console.log(`validate: wrote ${findings.length} findings to ${jsonPath}.`);
  }

  // What actually gates. Guard errors always do (they belong to the repo, not to
  // a locale). Production errors always do. Everything else does only when asked:
  // --gate=all for a deliberate whole-corpus sweep, --shippable because it is the
  // go-live question about one named locale and scoping it would answer "yes" for
  // every locale that has not already gone live. See the header.
  // `--shippable` widens and never narrows, deliberately, including on a wide
  // run: see "Why --shippable is NOT scoped" in the header.
  const widened = gate === "all" || shippable;

  // What the branch introduced, when there is a baseline to say. `--shippable` is
  // deliberately exempt: it asks whether a locale is fit to be served, and a
  // reader hitting a stale page does not care how long it has been stale. See
  // "It does not touch --shippable" in the header.
  let gatingFindings = findings;
  if (baselineRef && shippable) {
    console.log(
      `\nvalidate: --shippable ignores --baseline-ref=${baselineRef}. "Is this locale fit to be served?" is an absolute ` +
        `question: a reader hitting a stale page does not care how long it has been stale.`
    );
  }
  if (baselineRef && !shippable) {
    const { mergeBase, findings: baseFindings } = baselineFindings({
      ref: baselineRef,
      locale: requested,
      typeId: args.flags.type,
      slug: args.flags.slug,
      gate
    });
    const { introduced, preExisting, fixed } = diffFindings(baseFindings, findings);
    gatingFindings = introduced;

    console.log(
      `\nbaseline: ${baselineRef} (merge base ${mergeBase.slice(0, 12)}), ${plural(baseFindings.length, "error", "errors")} there, ` +
        `${findings.length} here: ${introduced.length} introduced, ${preExisting.length} pre-existing, ${fixed.length} fixed.`
    );

    // Pre-existing errors are not hidden, only summarised: they are every line
    // marked FAIL above, and reprinting hundreds of them would bury the handful
    // that matter. Where they are is what a reader needs from this line.
    if (preExisting.length > 0) {
      const byLocale = new Map();
      for (const found of preExisting) byLocale.set(found.locale, (byLocale.get(found.locale) ?? 0) + 1);
      const worst = [...byLocale.entries()].sort((a, b) => b[1] - a[1]);
      console.log(
        `baseline: ${plural(preExisting.length, "pre-existing error", "pre-existing errors")}, printed in full above and NOT gating this run ` +
          `(${worst.map(([name, count]) => `${name} x${count}`).join(", ")}).`
      );
      console.log(
        `baseline: they are mostly translations of English that has not merged yet, which is what the queue is for. ` +
          `Run without --baseline-ref for the absolute backlog.`
      );
    }

    // Said out loud, because a branch that repairs something should be able to
    // see that it did, not merely fail to be punished for what it did not.
    if (fixed.length > 0) {
      console.log(`\nbaseline: ${plural(fixed.length, "error", "errors")} FIXED by this branch:`);
      for (const found of fixed.slice(0, 20)) console.log(findingLine(found));
      if (fixed.length > 20) console.log(`  ...and ${fixed.length - 20} more.`);
    }

    if (introduced.length === 0) {
      console.log(`\nbaseline: this branch introduces no new errors.`);
    } else {
      console.log(`\nbaseline: ${plural(introduced.length, "error", "errors")} INTRODUCED by this branch:`);
      for (const found of introduced) console.log(findingLine(found));
    }
  }

  const gatingProductionErrors = gatingFindings.filter((found) => found.production).length;
  const gatingNonProductionErrors = gatingFindings.length - gatingProductionErrors;
  const gatingErrors = guardErrors + gatingProductionErrors + (widened ? gatingNonProductionErrors : 0);

  // Said out loud whenever a run could otherwise be mistaken for a passed gate:
  // a translator working on `de` must not read a clean run as a production
  // sign-off it was never held to.
  const scopedToOneLocale = locales.length === 1;
  if (!widened && scopedToOneLocale && !isProduction(locales[0])) {
    console.log(
      `validate: ${locales[0]} is not a production locale (locales.json "productionTargets"), so its errors do NOT gate ` +
        `and this run's exit code says nothing about them. Use --gate=all to be held to them, or --shippable to ask ` +
        `the go-live question about this locale.`
    );
  } else if (!widened && nonProductionErrors > 0) {
    console.log(
      `validate: only the ${PRODUCTION_LOCALES.length} production locales gate (locales.json "productionTargets"); ` +
        `the non-production errors above are real and reported, they just do not fail this run. --gate=all holds every locale to it.`
    );
  }

  if (gatingErrors > 0) process.exit(1);
}

// Run only when this file IS the command. `findingId` and `diffFindings` are the
// identity and the multiset difference the baseline gate is built on, and they are
// worth asserting directly rather than through a whole corpus run, so test.mjs
// imports them. Without this guard, importing the module would run a validation.
// Through realpath on both sides, because the baseline run invokes a copy of this
// file inside a temp directory and macOS reports that path two ways (/var and
// /private/var). Comparing the two spellings makes the child exit silently having
// validated nothing, which is the least debuggable failure available.
const realpath = (target) => {
  try {
    return fs.realpathSync(target);
  } catch {
    return path.resolve(target);
  }
};
if (process.argv[1] && realpath(process.argv[1]) === realpath(fileURLToPath(import.meta.url))) {
  await main();
}
