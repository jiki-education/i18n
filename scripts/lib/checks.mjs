// The mechanical checks. Structural facts only, in the same ERROR/WARN split as
// the translator repo's scripts/check-translation:
//
//   ERROR — a structural fact that is true or false (key parity, brace balance,
//           placeholder counts, tag counts, frontmatter keys). Blocks.
//   WARN  — a heuristic over prose. Produces false positives BY DESIGN, is there
//           to be read by a human, and must never be promoted to an error.
//
// These are deliberately the same checks that script already makes, applied to
// this repo's layout. They are not routed THROUGH it: its CONTENT_TYPES map
// addresses paths inside the front-end monorepo by construction, so it cannot be
// pointed at locales/<locale>/. See CLAUDE.md § "Relationship to the translator repo".

import { INAPPLICABLE, SENTINEL, SOURCE_REPO_LOCALE } from "./constants.mjs";
import {
  arrayPaths,
  flatten,
  frontmatterPaths,
  frontmatterSyntaxIssues,
  frontmatterValue,
  isEmptyContainer,
  vttBody,
  vttTimestamps
} from "./files.mjs";
import { isUnreachablePluralKey } from "./plurals.mjs";

export const ERROR = "ERROR";
export const WARN = "WARN";

const issue = (level, message) => ({ level, message });

// ---------------------------------------------------------- the item verdict
//
// One item's status line, from its issues AND from whether it has a file at all.
//
// The second half is the whole reason this exists. Every check below reads a
// translation, so a locale with NO file for an item produces no issues, and a
// reporter that classifies on the issue list alone calls that `ok`. It did:
// `validate.mjs it --type=exercise-instructions` printed `ok` for a locale
// holding no instructions file of any kind, and a clean `validate.mjs <locale>`
// therefore read as "this language is complete" for a language missing dozens
// of files.
//
// Absence is a THIRD status rather than an error, on the terms the rest of the
// repo already uses for a partly translated locale (see the untranslated
// sentinel, and `coverage.mjs` on never-started versus finished): a young
// language legitimately has almost nothing, and turning each gap into an error
// buries the real problems under a wall of them. So `miss` is loud, counted and
// never `ok`, and it blocks only under `--shippable`, where the gap would serve
// English from a translated URL. That is `MISSING` below, and it is the caller's
// job to make sure a missing item is never stamped.
export const OK = "ok";
export const MISSING = "miss";
export const WARNED = "warn";
export const FAILED = "FAIL";

/**
 * The status of one item, and its error/warning counts.
 *
 * `missing` means the target file does not exist. Under `--shippable` the caller
 * has already turned that into an ERROR, so the status is `FAIL` and the item is
 * still counted as missing: the two facts are independent.
 */
export function itemVerdict({ issues = [], missing = false } = {}) {
  const errors = issues.filter((found) => found.level === ERROR).length;
  const warnings = issues.filter((found) => found.level === WARN).length;
  const status = errors > 0 ? FAILED : missing ? MISSING : warnings > 0 ? WARNED : OK;
  return { status, errors, warnings, missing };
}

// --------------------------------------------------------------- placeholders

// Three interpolation syntaxes live in this corpus and all three are immutable,
// inner name included. Word order may move them; nothing else may.
const PLACEHOLDER_PATTERNS = [
  /\{\{\s*[\w.]+\s*\}\}/g, // i18next, exercise + interpreter catalogs
  /\$\{\s*[\w.]+\s*\}/g, // describers, substituted by the interpreter
  /\{\s*[\w.]+\s*\}/g // ICU simple argument, app catalog
];

// The index of the `}` closing the `{` at `start`, or -1 if there is none. Same
// walk checkIcu does (apostrophe-escape aware), factored out so both use one
// notion of where a construct ends.
function matchingBrace(text, start) {
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    const char = text[i];
    if (char === "'" && text[i + 1] === "'") i += 1;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const ICU_CONSTRUCT = /^\{\s*([\w.]+)\s*,\s*(?:plural|selectordinal|select)\s*,/;

/**
 * Blank the BRANCH BODIES of ICU `plural`/`select`/`selectordinal` constructs,
 * leaving the argument reference and any genuinely nested placeholder intact.
 *
 *   {count, plural, one {second} other {seconds}}  ->  {count}  second   seconds
 *   {n, plural, other {{n} items}}                 ->  {n}  {n} items
 *
 * A branch body is TRANSLATABLE TEXT that happens to sit in braces, so the plain
 * `{word}` placeholder pattern reads `{second}` as an argument named `second`.
 * German translating it to `{Sekunde}` then looks like a changed placeholder,
 * which is a false positive on every correct translation of a plural. Only the
 * OUTER braces of each branch are removed, so a real argument nested inside a
 * branch still reads as one and is still compared.
 */
export function stripIcuBranchBodies(value) {
  const text = String(value);
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "'" && text[i + 1] === "'") {
      out += "''";
      i += 1;
      continue;
    }
    if (char === "{") {
      const match = ICU_CONSTRUCT.exec(text.slice(i));
      const end = match ? matchingBrace(text, i) : -1;
      if (end !== -1) {
        out += `{${match[1]}} ${stripBranches(text.slice(i + match[0].length, end))}`;
        i = end;
        continue;
      }
    }
    out += char;
  }
  return out;
}

// The selector/branch list of one construct: `one {…} other {…}`. Each branch's
// own braces go, its content is recursed into (so a nested plural is handled the
// same way), and the bare selector words are left alone as the text they are.
function stripBranches(text) {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "'" && text[i + 1] === "'") {
      out += "''";
      i += 1;
      continue;
    }
    if (char === "{") {
      const end = matchingBrace(text, i);
      if (end !== -1) {
        out += ` ${stripIcuBranchBodies(text.slice(i + 1, end))} `;
        i = end;
        continue;
      }
    }
    out += char;
  }
  return out;
}

// The mask below blanks a placeholder this scan has already taken, so a later
// pattern cannot match inside an earlier pattern's match. Three properties, and
// all three are load-bearing:
//
//  - It must be IMPOSSIBLE in real copy, not merely unlikely. U+FFFF is a formal
//    Unicode noncharacter: permanently reserved, never assigned, never valid in
//    interchanged text. An ordinary character (`X`, `#`, a space, a private-use
//    code point) can legitimately occur in a translated string, and a collision
//    would silently corrupt the placeholder scan rather than fail loudly.
//  - It must NOT be the untranslated sentinel or the unreachable-plural marker.
//    Those look like the natural choices and are exactly wrong: both are real
//    values in the data this function scans, so masking with either would make
//    genuine content indistinguishable from a mask.
//  - It must be a single UTF-16 code unit, because `.repeat(match.length)` is
//    here to preserve length. U+FFFF is in the BMP, so it is one unit; an astral
//    character would be two and would quietly break the arithmetic.
//
// Written as an escape and never as a literal character: a raw sentinel byte in
// the source makes git treat this whole file as binary, and every diff of it
// unreviewable.
const PLACEHOLDER_MASK = "\uFFFF";

function placeholders(value) {
  const found = [];
  let remaining = stripIcuBranchBodies(value);
  for (const pattern of PLACEHOLDER_PATTERNS) {
    remaining = remaining.replace(pattern, (match) => {
      found.push(match.replace(/\s+/g, ""));
      return PLACEHOLDER_MASK.repeat(match.length);
    });
  }
  return found.sort();
}

/**
 * Keep ONE branch of each ICU `plural`/`select`/`selectordinal` construct, since
 * only one branch ever renders. A language with more CLDR plural categories than
 * English (Arabic has four where English has two) correctly repeats the same
 * markup in every branch, so a raw tag count reads 8 against English's 4 and
 * false-flags a correct translation. `other` is preferred as the representative
 * branch (it is mandatory), falling back to the first. Text outside the
 * construct, and any nested construct inside the chosen branch, are preserved.
 */
export function collapseIcuBranches(value) {
  const text = String(value);
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "'" && text[i + 1] === "'") {
      out += "''";
      i += 1;
      continue;
    }
    if (char === "{") {
      const match = ICU_CONSTRUCT.exec(text.slice(i));
      const end = match ? matchingBrace(text, i) : -1;
      if (end !== -1) {
        out += `{${match[1]}} ${pickBranch(text.slice(i + match[0].length, end))}`;
        i = end;
        continue;
      }
    }
    out += char;
  }
  return out;
}

// Split one construct's `one {…} other {…}` branch list and return the chosen
// branch's body, recursed into so a nested construct collapses the same way.
function pickBranch(text) {
  const branches = [];
  let selector = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "'" && text[i + 1] === "'") {
      selector += "''";
      i += 1;
      continue;
    }
    if (char === "{") {
      const end = matchingBrace(text, i);
      if (end !== -1) {
        branches.push({ selector: selector.trim(), body: text.slice(i + 1, end) });
        selector = "";
        i = end;
        continue;
      }
    }
    selector += char;
  }
  if (branches.length === 0) return text;
  const chosen = branches.find((branch) => branch.selector === "other") ?? branches[0];
  return ` ${collapseIcuBranches(chosen.body)} `;
}

function tags(value) {
  return [...collapseIcuBranches(String(value)).matchAll(/<\/?([A-Za-z][\w-]*)\b[^>]*>/g)].map((match) => match[1].toLowerCase()).sort();
}

// ------------------------------------------------------------------- ICU ----

/**
 * Structural ICU MessageFormat check: balanced braces, no empty argument name,
 * and every `plural`/`selectordinal`/`select` carrying an `other` branch.
 *
 * A locale missing `other` is the failure that actually happens in practice: a
 * language with plural categories English lacks gets an extra branch right and
 * drops the fallback, and next-intl throws at render time rather than at build.
 */
export function checkIcu(value) {
  const text = String(value);
  const problems = [];
  let depth = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "'" && text[i + 1] === "'") {
      i += 1; // escaped apostrophe
    } else if (char === "{") {
      depth += 1;
      // `{}` with nothing in it is a mistake. `{` followed by another `{` is not:
      // a select or plural branch holds its own content, so `other {{field}}` is
      // an argument nested in a branch and is valid. English carries exactly that
      // construct, so treating it as empty fails every faithful translation of it.
      if (/^\{\s*\}/.test(text.slice(i))) problems.push("empty placeholder `{}`");
    } else if (char === "}") {
      depth -= 1;
      if (depth < 0) return [`unbalanced braces (a "}" with no opening "{")`];
    }
  }
  if (depth !== 0) problems.push(`unbalanced braces (${depth} unclosed "{")`);

  for (const match of text.matchAll(/\{\s*[\w.]+\s*,\s*(plural|selectordinal|select)\s*,/g)) {
    const body = text.slice(match.index + match[0].length);
    if (!/(^|\s)other\s*\{/.test(body)) {
      problems.push(`${match[1]} with no "other" branch`);
    }
  }

  return problems;
}

// --------------------------------------------------------------- catalogs ----

/**
 * One catalog against its English source. `interpolation` picks whether ICU is
 * checked (the app catalog) or not (i18next catalogs use `{{var}}` and are not
 * ICU).
 *
 * `locale` is what justifies an `∅`. It is the guard, and it fails closed: with
 * no locale nothing is provably unreachable, so every `∅` is an ERROR. Both
 * sides are checked, English included, because English carries the union of
 * plural categories and so has its own unreachable keys.
 */
export function checkCatalog(english, target, { icu = false, allowSentinel = true, locale = null } = {}) {
  const issues = [];
  const flatEnglish = flatten(english);
  const flatTarget = flatten(target);

  const englishKeys = Object.keys(flatEnglish);
  const targetKeys = Object.keys(flatTarget);

  const missing = englishKeys.filter((key) => !(key in flatTarget));
  const extra = targetKeys.filter((key) => !(key in flatEnglish));

  // Key parity is the load-bearing one: the curriculum's i18next instance runs
  // with `fallbackLng: false` and returns the key itself on a miss, so an absent
  // key renders the literal string `checks.tooManyLines` to a learner.
  for (const key of missing) issues.push(issue(ERROR, `missing key: ${key}`));
  for (const key of extra) issues.push(issue(ERROR, `key not in source: ${key}`));

  // Array or object, at every branch. Key parity alone cannot see the difference:
  // `flatten` descends into a non-empty array as `tags.0`, `tags.1`, and an object
  // spelled `{"0": …, "1": …}` flattens to exactly the same paths. So a target
  // that turned English's array into an object passes every check above and then
  // publishes different bytes, which is a different content hash, which is a URL
  // the front-end never asks for. Cheap to compare, and silent if it is not.
  const englishArrays = arrayPaths(english);
  const targetArrays = arrayPaths(target);
  for (const path of englishArrays) {
    if (path in flatTarget || !targetKeys.some((key) => key.startsWith(`${path}.`))) continue;
    if (!targetArrays.has(path)) issues.push(issue(ERROR, `${path}: source is an array, target is an object`));
  }
  for (const path of targetArrays) {
    if (path in flatEnglish || !englishKeys.some((key) => key.startsWith(`${path}.`))) continue;
    if (!englishArrays.has(path)) issues.push(issue(ERROR, `${path}: source is an object, target is an array`));
  }

  const shared = englishKeys.filter((key) => key in flatTarget);
  if (shared.length === englishKeys.length && missing.length === 0 && extra.length === 0) {
    const orderMatches = englishKeys.every((key, index) => targetKeys[index] === key);
    if (!orderMatches) issues.push(issue(WARN, "key order differs from source (diffs will be noisy)"));
  }

  // `∅` in English is legitimate only where English itself cannot reach the key.
  // Checked here rather than in a script of its own, so every locale's validate
  // run exercises it and an unjustified one cannot sit in English unnoticed.
  for (const [key, source] of Object.entries(flatEnglish)) {
    if (source === INAPPLICABLE && !isUnreachablePluralKey(key, SOURCE_REPO_LOCALE, flatEnglish)) {
      issues.push(issue(ERROR, `${key}: source is "${INAPPLICABLE}" but the key is reachable in English`));
    }
  }

  for (const key of shared) {
    const source = flatEnglish[key];
    const value = flatTarget[key];

    // An empty container in English is structure. The target has to hold the
    // same empty container, and none of the string checks below apply to it.
    if (isEmptyContainer(source)) {
      if (!isEmptyContainer(value)) {
        issues.push(issue(ERROR, `${key}: source is an empty ${Array.isArray(source) ? "array" : "object"}, target is not`));
      }
      continue;
    }

    if (typeof value !== "string") {
      issues.push(issue(ERROR, `${key}: value is ${typeof value}, expected a string`));
      continue;
    }

    // `∅` has to be earned. It is accepted only on a key this locale can never
    // reach, so it can never be used to make a real gap stop counting.
    if (value === INAPPLICABLE) {
      if (!locale || !isUnreachablePluralKey(key, locale, flatEnglish)) {
        issues.push(issue(ERROR, `${key}: "${INAPPLICABLE}" is not justified (the key is reachable in ${locale ?? "this locale"})`));
      }
      continue;
    }

    if (value === SENTINEL) {
      if (!allowSentinel) issues.push(issue(ERROR, `${key}: still the untranslated sentinel`));
      continue; // every other check is meaningless against a sentinel
    }

    if (value.trim() !== value) issues.push(issue(ERROR, `${key}: leading or trailing whitespace`));
    if (value === "") issues.push(issue(ERROR, `${key}: empty value`));

    // English gave up on this key and the target's own grammar reaches it, so a
    // real string here is right and a `�` above was already counted as the gap
    // it is. There is no English text to compare against, so the rest is skipped.
    if (source === INAPPLICABLE) continue;

    const sourcePlaceholders = placeholders(source).join("|");
    const targetPlaceholders = placeholders(value).join("|");
    if (sourcePlaceholders !== targetPlaceholders) {
      issues.push(
        issue(ERROR, `${key}: placeholders changed (source: ${sourcePlaceholders || "none"}, target: ${targetPlaceholders || "none"})`)
      );
    }

    const sourceTags = tags(source).join("|");
    const targetTags = tags(value).join("|");
    if (sourceTags !== targetTags) {
      issues.push(issue(ERROR, `${key}: HTML/rich-text tags changed (source: ${sourceTags || "none"}, target: ${targetTags || "none"})`));
    }

    if (icu) {
      for (const problem of checkIcu(value)) issues.push(issue(ERROR, `${key}: invalid ICU, ${problem}`));
    }

    if (value === source && source.length > 24) {
      issues.push(issue(WARN, `${key}: byte-identical to English (may be untranslated, may be legitimate)`));
    }
  }

  return issues;
}

// ------------------------------------------------------------------ prose ----

/**
 * One Markdown page against its English source. Counts of the structures a
 * translation must preserve, plus the frontmatter contract.
 */
/**
 * Whether a translated prose file is really just a copy of English.
 *
 * Copied-English is a real untranslated convention here, alongside the sentinel,
 * and it is the more dangerous of the two. The sentinel announces itself: it
 * renders as a visible replacement glyph, and every catalog check looks for it.
 * A byte-identical copy of English announces nothing at all. It passes every
 * structural check trivially (identical fences, identical links, identical
 * headings), carries a perfectly valid staleness stamp, and publishes as a
 * healthy artifact that serves English prose from a Hungarian URL.
 *
 * The comparison is on the trimmed BODY, not the file. Frontmatter legitimately
 * differs (the target carries an `en_md5` stamp English does not), and leading or
 * trailing whitespace is not a translation.
 *
 * A body that is empty in both is not evidence of anything, so it is not counted.
 */
export function isCopiedEnglish(englishBody, targetBody) {
  const english = englishBody.trim();
  return english.length > 0 && english === targetBody.trim();
}

/**
 * Which of a locale's prose items are untranslated because their bodies REPEAT.
 *
 * This catches the third untranslated convention, and it is the one with no
 * marker of its own. A file gets fully translated frontmatter over a one-line
 * body saying the page is not translated yet ("Ez az oldal még nincs lefordítva
 * magyarra.", "A tartalom hamarosan érkezik.", and a longer variant pointing at
 * the video). Nothing in the file says it is a placeholder: the frontmatter is
 * real, the stamp is valid, and the body is fluent target-language prose.
 *
 * Detecting it per-file would mean either a list of phrasings, which is one list
 * per locale and stale the moment someone writes a new sentence, or a
 * length-and-structure heuristic, which needs thresholds and can only ever be
 * approximately right.
 *
 * Neither is necessary, because the giveaway is not in any one file. It is that
 * ONE body is reused across MANY items. Two items whose English differs cannot
 * both have the same correct translation. So: group a locale's items by their
 * translated body, and any group with more than one member whose English bodies
 * are not themselves identical is untranslated, all of it.
 *
 * That is exact rather than heuristic. It has no thresholds, knows nothing about
 * any language, and needs no phrase list, so it works on the first locale as
 * well as the thirtieth.
 *
 * Its one blind spot is a notice used exactly ONCE in a locale, which is
 * indistinguishable from a very short translation and is left alone.
 *
 * `items` is [{ key, englishBody, targetBody }]. Returns a Set of keys.
 */
export function findRepeatedBodies(items) {
  const groups = new Map();
  for (const item of items) {
    const body = item.targetBody.trim();
    if (body.length === 0) continue;
    if (!groups.has(body)) groups.set(body, []);
    groups.get(body).push(item);
  }

  const repeated = new Set();
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    // If English is identical across the group too, an identical translation is
    // correct, not evidence of anything.
    if (new Set(group.map((item) => item.englishBody.trim())).size < 2) continue;
    for (const item of group) repeated.add(item.key);
  }
  return repeated;
}

// ------------------------------------------------------------------- vtt ----

/**
 * One subtitle file against its English source.
 *
 * The cue grid is the contract. A subtitle is displayed against a rendered video
 * that is not re-cut per locale, so the translation has the same number of cues
 * as English, in the same order, with byte-identical timings; anything else puts
 * words on screen at the wrong moment. Every other check mirrors prose: copied
 * English is untranslated, the stamp must be present and current, and surviving
 * <define>/<literal> markup means the expansion never happened.
 */
export function checkVtt(englishText, targetText, { stamps, expectedMd5, allowUntranslated = false }) {
  const issues = [];

  if (!/^﻿?WEBVTT\b/.test(targetText)) issues.push(issue(ERROR, "no WEBVTT header"));

  if (isCopiedEnglish(vttBody(englishText), vttBody(targetText))) {
    issues.push(
      issue(
        allowUntranslated ? WARN : ERROR,
        "untranslated: the caption text is byte-identical to English. Copied English is untranslated content " +
          "that passes every structural check, so it is treated exactly as a remaining sentinel is."
      )
    );
  }

  const english = vttTimestamps(englishText);
  const target = vttTimestamps(targetText);

  if (english.length !== target.length) {
    issues.push(issue(ERROR, `cue count: ${target.length} in the translation, ${english.length} in English`));
  } else {
    const differing = english
      .map((cue, index) => (cue === target[index] ? null : `cue ${index + 1}: "${target[index]}" should be "${cue}"`))
      .filter(Boolean);
    for (const message of differing.slice(0, 5)) issues.push(issue(ERROR, `timings changed, ${message}`));
    if (differing.length > 5) issues.push(issue(ERROR, `timings changed on ${differing.length} cues in total`));
  }

  if (!stamps.en_md5) {
    issues.push(issue(ERROR, "no NOTE en_md5 stamp (never translated, or stamped by hand and removed)"));
  } else if (stamps.en_md5 !== expectedMd5) {
    issues.push(issue(ERROR, `stale: en_md5 is ${stamps.en_md5}, the English source is now ${expectedMd5}`));
  }

  for (const tag of ["define", "literal"]) {
    if (new RegExp(`<${tag}\\b`).test(targetText)) issues.push(issue(WARN, `surviving <${tag}> markup`));
  }

  return issues;
}

/**
 * What is wrong with one translatable frontmatter value, as message fragments.
 *
 * A value is a string or a LIST of strings (`seo.keywords`, `summary.keyConcepts`),
 * so this cannot just call `.trim()`: on a list that throws, which is how a
 * whole run would end rather than one item failing. A list is judged item by
 * item, and an empty list is as missing as an empty string, because a field
 * present but holding nothing is not a translation of a field that held five
 * keywords.
 */
function frontmatterProblems(value) {
  const padded = (item) => typeof item === "string" && item.trim() !== item;

  if (Array.isArray(value)) {
    if (value.length === 0 || value.every((item) => `${item}`.trim() === "")) return ["missing"];
    return value.some(padded) ? ["leading or trailing whitespace in"] : [];
  }

  if (value === undefined || value === null || `${value}`.trim() === "") return ["missing"];
  return padded(value) ? ["leading or trailing whitespace in"] : [];
}

/**
 * One frontmatter value as comparable text, or null if it is not translatable
 * copy at all.
 *
 * A translated field is a string or a LIST of strings (`seo.keywords`,
 * `summary.keyConcepts`); anything else (a number, a boolean, a nested block) is
 * not prose and is not this check's business.
 */
function frontmatterText(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === "string")) return value.join(", ");
  return null;
}

// Two letters in a row: the smallest thing that could have been translated. It
// is what keeps a value with no words in it out of the comparison below, so a
// bare number, a lone symbol or a single letter is never reported as English.
const TRANSLATABLE_WORD = /\p{L}{2,}/u;

/**
 * Whether a translated frontmatter value simply repeats English.
 *
 * This is the frontmatter twin of the copied-English body check, and it exists
 * because a title is invisible to everything else here. Hungarian shipped
 * fifteen pages whose bodies were fully translated under an English heading
 * ("Snowman" over prose that says `hóember` throughout): the structural checks
 * all passed, the staleness stamp was valid and current, and nothing anywhere
 * said a word. A title is the most visible string on a page and the one a
 * staleness hash can never see, so it can survive indefinitely.
 *
 * A WARN and never an ERROR, because plenty of titles are legitimately identical:
 * proper nouns (`Luhn`, `Hamming` are people), named works (`Space Invaders`),
 * and untranslatable wordplay (`Two-Fer`). Blocking on those would be wrong and
 * would teach people to route around the check.
 *
 * Lists are compared whole. A keyword list that shares SOME entries with English
 * is normal (`vscode`, `jiki`); one that is the English list, item for item, is
 * the same finding as an English title.
 */
export function isUntranslatedFrontmatter(source, target) {
  const text = frontmatterText(source);
  if (text === null || frontmatterText(target) === null) return false;
  if (JSON.stringify(source) !== JSON.stringify(target)) return false;
  return TRANSLATABLE_WORD.test(text);
}

/**
 * Whether a field ENGLISH itself leaves empty, which is nothing to translate.
 *
 * A declared translatable field English does not have at all is not the
 * translation's problem, and one English has and leaves blank is the same fact
 * with a different spelling. Several exercises ship `description: ""`, and
 * demanding a translation of it made the only correct file (an empty string,
 * copied) read as an unfinished one, blocking the page's stamp for good. Key
 * parity is checked separately and still requires the key to be present.
 */
function nothingToTranslate(source) {
  return source === undefined || frontmatterProblems(source).includes("missing");
}

/** The three answers `proseFieldStatus` can give. See its comment. */
export const FIELDS_COMPLETE = "complete";
export const FIELDS_INCOMPLETE = "incomplete";
export const FIELDS_NEED_REVIEW = "needs_review";

/**
 * Whether one page's TRANSLATABLE FRONTMATTER is finished, as a three-way
 * answer, for a counter that has to produce a number rather than a warning.
 *
 * `checkProse` above reports the same facts as issues, and can afford to leave
 * the identical-to-English case as a WARN for a human to read and dismiss.
 * Coverage cannot: it answers "what is left to translate?", and every page it
 * calls done is a page nobody will look at again. A whole-file `en_md5` cannot
 * see a per-field regression (it hashes ENGLISH, not the translation), so
 * without this a page whose body is translated and whose title still says
 * "Snowman" counted as done, and every tool downstream repeated it.
 *
 * Three answers, because there are genuinely three cases and folding any two of
 * them together tells a lie:
 *
 *   `complete`      — every declared field is present and is not merely English.
 *   `incomplete`    — a declared field English HAS is missing or blank here.
 *                     Unambiguous, nothing to judge: it is unfinished work.
 *   `needs_review`  — a declared field is byte-identical to English and nothing
 *                     on record says it should be. It is either an untranslated
 *                     title or a proper noun (`Luhn`), a named work (`Space
 *                     Invaders`) or untranslatable wordplay (`Two-Fer`), and no
 *                     rule can tell those apart. Counting it done is the bug;
 *                     counting it unfinished makes a number that can never reach
 *                     100% and so gets ignored, which is the same bug wearing a
 *                     hat. So it is reported as its own thing, and a human
 *                     resolves it once: translate it, or record the decision as
 *                     a glossary row, after which `keptEnglish` clears it for
 *                     good.
 *
 * `keptEnglish` is that set of agreed-English terms, from
 * scripts/lib/kept-english.mjs. Omit it and nothing is exempted, which
 * under-credits rather than over-credits.
 *
 * A missing field beats an identical one, because it needs no judgement at all.
 */
export function proseFieldStatus({ englishData, targetData, translatedKeys, keptEnglish = null }) {
  let review = null;

  for (const key of translatedKeys) {
    const source = frontmatterValue(englishData, key);
    if (nothingToTranslate(source)) continue;
    const value = frontmatterValue(targetData, key);

    // Only "missing" counts here. Stray whitespace is a real finding and
    // `checkProse` reports it, but it is a tidy-up of a translation that exists,
    // not a translation that does not.
    if (frontmatterProblems(value).includes("missing")) return { status: FIELDS_INCOMPLETE, key, reason: "missing" };

    if (isUntranslatedFrontmatter(source, value)) {
      // Lowercased on both sides: kept-english.mjs stores the glossary's terms
      // that way, because `scope` in a glossary and `Scope` in a page title are
      // the same decision about the same word.
      if (keptEnglish?.has(frontmatterText(value).trim().toLowerCase())) continue;
      review ??= { status: FIELDS_NEED_REVIEW, key, reason: "byte-identical to English" };
    }
  }

  return review ?? { status: FIELDS_COMPLETE };
}

export function checkProse(
  englishText,
  targetText,
  { englishData, targetData, translatedKeys, expectedMd5, allowUntranslated = false, targetRaw = null, bodyOutOfCorpus = false }
) {
  const issues = [];

  // Is this even YAML? Asked first, because every check below reads `targetData`,
  // and `targetData` came from a reader that is more forgiving than the one
  // publishing uses. A file that fails here parsed into SOMETHING here and into
  // nothing at all there, so a clean bill of health from the rest of this function
  // would be a statement about a document the renderer will never see. See
  // "Two parsers read these bytes" in files.mjs.
  //
  // `targetRaw` is the whole file rather than the parsed data, because the fault
  // is in bytes the parse already threw away.
  if (targetRaw !== null) {
    for (const problem of frontmatterSyntaxIssues(targetRaw)) {
      issues.push(issue(ERROR, `frontmatter: not valid YAML, ${problem}`));
    }
  }

  // Reported first, because everything below it is trivially satisfied by a copy
  // of English and would otherwise read as a clean bill of health.
  //
  // Unless this item's BODY is out of the corpus (corpus.json, `"scope": "body"`),
  // in which case an English body is the expected, correct state and the only
  // thing being asserted here is the frontmatter. The structural counts below
  // still run: they are cheap, and a body that has been mangled rather than left
  // alone is still worth catching.
  if (!bodyOutOfCorpus && isCopiedEnglish(englishText, targetText)) {
    issues.push(
      issue(
        allowUntranslated ? WARN : ERROR,
        "untranslated: the body is byte-identical to English. Copied English is untranslated content " +
          "that passes every structural check, so it is treated exactly as a remaining sentinel is."
      )
    );
  }

  // Every field a type declares translatable, addressed by DOTTED PATH so a
  // nested one (`seo.description`) is checked exactly as a top-level one is. A
  // path English does not have is not this file's problem; a path English has
  // and the translation does not is.
  for (const key of translatedKeys) {
    const source = frontmatterValue(englishData, key);
    if (nothingToTranslate(source)) continue;
    const value = frontmatterValue(targetData, key);
    for (const problem of frontmatterProblems(value)) {
      issues.push(issue(ERROR, `frontmatter: ${problem} "${key}"`));
    }

    // Untranslated frontmatter: see isUntranslatedFrontmatter. A heuristic, so a
    // WARN, and it says the value so it can be judged without opening the file.
    if (isUntranslatedFrontmatter(source, value)) {
      const shown = frontmatterText(source);
      issues.push(
        issue(
          WARN,
          `frontmatter: "${key}" is byte-identical to English (${JSON.stringify(shown.length > 80 ? `${shown.slice(0, 77)}...` : shown)}): ` +
            "untranslated, or legitimately the same (a proper noun, a named work, untranslatable wordplay)"
        )
      );
    }
  }

  // Parity over LEAF PATHS, not top-level keys. Over top-level keys a nested
  // block was one opaque key, so anything inside `seo` could be dropped,
  // renamed or invented without a word being said about it.
  const englishPaths = frontmatterPaths(englishData);
  const targetPaths = frontmatterPaths(targetData);

  for (const key of englishPaths) {
    if (!targetPaths.includes(key)) issues.push(issue(ERROR, `frontmatter: key "${key}" dropped (only en_md5/tidied_md5 may be added)`));
  }
  for (const key of targetPaths) {
    if (!englishPaths.includes(key) && !["en_md5", "tidied_md5"].includes(key)) {
      issues.push(issue(ERROR, `frontmatter: invented key "${key}"`));
    }
  }

  // The staleness stamp. Not written by hand anywhere: validate.mjs writes it
  // once every ERROR check passes, exactly as check-translation does.
  if (!targetData.en_md5) {
    issues.push(issue(ERROR, "frontmatter: no en_md5 stamp (never translated, or stamped by hand and removed)"));
  } else if (targetData.en_md5 !== expectedMd5) {
    issues.push(issue(ERROR, `stale: en_md5 is ${targetData.en_md5}, the English source is now ${expectedMd5}`));
  }

  const count = (text, pattern) => (text.match(pattern) || []).length;
  const structures = [
    ["fenced code blocks", /^```/gm],
    ["images", /!\[[^\]]*\]\(|<img\b/g],
    ["links", /\[[^\]]*\]\([^)]*\)/g],
    ["headings", /^#{1,6}\s/gm]
  ];
  for (const [label, pattern] of structures) {
    const expected = count(englishText, pattern);
    const actual = count(targetText, pattern);
    if (expected !== actual) issues.push(issue(ERROR, `${label}: ${actual} in the translation, ${expected} in English`));
  }

  // <define> / <literal> markup is expanded at translation time, so a surviving
  // tag means the expansion never happened. A body that is out of the corpus was
  // never expanded because it was never translated, so it carries English's own
  // markup by design and the warning would fire on every one of them.
  for (const tag of bodyOutOfCorpus ? [] : ["define", "literal"]) {
    if (new RegExp(`<${tag}\\b`).test(targetText)) issues.push(issue(WARN, `surviving <${tag}> markup`));
  }

  return issues;
}
