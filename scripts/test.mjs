#!/usr/bin/env node
//
// test — the assertions that guard the parts of this repo a mistake in would be
// invisible until it reached R2.
//
// Usage:
//   node scripts/test.mjs
//
// Deliberately a plain script with plain assertions, matching the rest of
// scripts/: no framework, no install step, `node scripts/test.mjs` and a
// non-zero exit on failure. Add a `test(name, fn)` block, not a dependency.

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { INAPPLICABLE, SENTINEL } from "./lib/constants.mjs";
import { CONTENT_TYPES, CONTENT_TYPE_IDS } from "./lib/content-types.mjs";
import { isUnreachablePluralKey, parsePluralKey, reachableCategories } from "./lib/plurals.mjs";
import { deepMerge, mergeExerciseCatalogs } from "./lib/families.mjs";
import {
  contentHash,
  countSentinels,
  flatten,
  frontmatterPaths,
  frontmatterValue,
  parseFrontmatter,
  parseVttNotes,
  stampFrontmatter,
  stampVttNote,
  stubAgainst,
  unflatten,
  vttBody,
  vttTimestamps
} from "./lib/files.mjs";
import { ERROR, checkCatalog, checkProse, findRepeatedBodies, isCopiedEnglish } from "./lib/checks.mjs";
import { GuardViolation, assertPublishableKey } from "./lib/guard.mjs";
import { localeFileLeaves, railsKnownLocales, railsLocale } from "./lib/api-copy.mjs";

let failures = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ok    ${name}`);
  } catch (error) {
    failures += 1;
    console.log(`  FAIL  ${name}\n        ${error.message.split("\n").join("\n        ")}`);
  }
}

// ------------------------------------------------- the exercise family merge

// These mirror app/scripts/generate-exercise-cache.js in the front-end. The
// published artifact is JSON.stringify of the merged object and its R2 filename
// is a hash of exactly those bytes, so a change in merge semantics OR in key
// insertion order silently moves every family exercise's URL away from the one
// the front-end built against. That is what these assert.

console.log("\nexercise family merge:");

test("the exercise wins over its family on a colliding leaf", () => {
  assert.deepEqual(deepMerge({ a: "base" }, { a: "own" }), { a: "own" });
});

test("nested objects merge rather than replace", () => {
  assert.deepEqual(deepMerge({ d: { x: "1", y: "2" } }, { d: { y: "own", z: "3" } }), { d: { x: "1", y: "own", z: "3" } });
});

test("a non-object override replaces an object wholesale", () => {
  assert.deepEqual(deepMerge({ d: { x: "1" } }, { d: "flat" }), { d: "flat" });
});

test("arrays replace, they never concatenate", () => {
  assert.deepEqual(deepMerge({ a: ["base"] }, { a: ["own"] }), { a: ["own"] });
});

test("a shared key keeps the family's position; a new key is appended", () => {
  // Insertion order is the whole point: JSON.stringify serialises in it, and the
  // hash is taken over those bytes.
  const merged = deepMerge({ errors: {}, describers: {} }, { describers: {}, checks: {} });
  assert.deepEqual(Object.keys(merged), ["errors", "describers", "checks"]);
});

test("the merged bytes hash the way the front-end hashes them", () => {
  // A frozen expectation over a fixed input. If the merge, the serialisation or
  // the hash changes, this moves, and so would every published family exercise.
  const merged = deepMerge({ errors: { hitWall: "base" }, describers: { canMove: "base" } }, { describers: { canMove: "own" } });
  assert.equal(JSON.stringify(merged), '{"errors":{"hitWall":"base"},"describers":{"canMove":"own"}}');
  assert.equal(contentHash(JSON.stringify(merged)), "5a0f0b44665b");
});

console.log("\nexercise catalog selection:");

const families = { "maze-walk": "maze", "maze-turn-around": "maze", "bouncer-dress-code": null };
const mazeBase = { errors: { hitWall: "base" } };

test("a member with no catalog of its own is still published from its family's", () => {
  const merged = mergeExerciseCatalogs({ families, own: new Map(), baseFor: () => mazeBase });
  assert.deepEqual(merged.map((entry) => entry.slug), ["maze-turn-around", "maze-walk"]);
  assert.deepEqual(merged[0].catalog, mazeBase);
});

test("a standalone exercise is published unmerged", () => {
  const own = new Map([["bouncer-dress-code", { checks: { ok: "hu" } }]]);
  const merged = mergeExerciseCatalogs({ families, own, baseFor: () => null });
  assert.deepEqual(merged, [{ slug: "bouncer-dress-code", catalog: { checks: { ok: "hu" } } }]);
});

test("a member whose family has nothing in this locale publishes its own", () => {
  const own = new Map([["maze-walk", { checks: { ok: "hu" } }]]);
  const merged = mergeExerciseCatalogs({ families, own, baseFor: () => null });
  assert.deepEqual(merged, [{ slug: "maze-walk", catalog: { checks: { ok: "hu" } } }]);
});

test("the published set is the union of both sides, sorted", () => {
  const own = new Map([["bouncer-dress-code", {}], ["maze-walk", {}]]);
  const merged = mergeExerciseCatalogs({ families, own, baseFor: () => mazeBase });
  assert.deepEqual(merged.map((entry) => entry.slug), ["bouncer-dress-code", "maze-turn-around", "maze-walk"]);
});


// ------------------------------------------------------ catalog key parity

// Parity with English is stub's whole contract, and a break in it is silent:
// no error, no warning, and the resulting file still validates. The empty
// container is the case that broke it. `{}` flattens to no leaf at all, so a key
// holding one was invisible to the parity logic and was dropped on the way out
// (English's exercises/triangle `"functions": {}` vanished from a locale).

console.log("\ncatalog key parity:");

test("an empty container is a leaf, not a branch that flattens to nothing", () => {
  assert.deepEqual(flatten({ a: "x", fns: {}, list: [] }), { a: "x", fns: {}, list: [] });
});

test("a nested empty object keeps its whole dotted path, and round-trips", () => {
  const tree = { checks: { ok: "x" }, scenarios: { one: { fns: {} } } };
  assert.deepEqual(flatten(tree), { "checks.ok": "x", "scenarios.one.fns": {} });
  assert.deepEqual(unflatten(flatten(tree)), tree);
});

test("an empty object in English survives stub as an empty object", () => {
  assert.deepEqual(stubAgainst({ a: "en", fns: {} }, { a: "hu", fns: {} }), { a: "hu", fns: {} });
});

test("an empty object survives even when the target has never held the key", () => {
  assert.deepEqual(stubAgainst({ a: "en", fns: {} }, { a: "hu" }), { a: "hu", fns: {} });
});

test("an empty container is never the sentinel: it is structure, not a gap", () => {
  const stubbed = stubAgainst({ fns: {} }, {});
  assert.deepEqual(stubbed, { fns: {} });
  assert.equal(JSON.stringify(stubbed), '{"fns":{}}');
});

test("an empty array is structure the same way", () => {
  assert.deepEqual(stubAgainst({ a: "en", list: [] }, {}), { a: SENTINEL, list: [] });
});

test("the stubbed empty container is a fresh one, not English's own object", () => {
  const english = { fns: {} };
  stubAgainst(english, {}).fns.leaked = true;
  assert.deepEqual(english, { fns: {} });
});

test("an existing translation is still reproduced byte for byte", () => {
  assert.deepEqual(stubAgainst({ a: "en", b: "en" }, { a: "  hu  ", b: "hu" }), { a: "  hu  ", b: "hu" });
});

test("a key English has deleted is still dropped, sentinel or not", () => {
  assert.deepEqual(stubAgainst({ a: "en" }, { a: "hu", gone: "hu", also: SENTINEL }), { a: "hu" });
});

test("a missing key and an existing sentinel both stub to the sentinel", () => {
  assert.deepEqual(stubAgainst({ a: "en", b: "en" }, { a: SENTINEL }), { a: SENTINEL, b: SENTINEL });
});

test("output key order still mirrors English, empty containers included", () => {
  const stubbed = stubAgainst({ a: "en", fns: {}, z: "en" }, { z: "hu", a: "hu" });
  assert.equal(JSON.stringify(stubbed), `{"a":"hu","fns":{},"z":"hu"}`);
});

test("an empty container is not counted as a translatable key", () => {
  assert.deepEqual(countSentinels({ a: "hu", b: SENTINEL, fns: {} }), { total: 2, stubbed: 1, translated: 1, inapplicable: 0 });
});

test("a target missing English's empty container is a key-parity error", () => {
  const issues = checkCatalog({ a: "en", fns: {} }, { a: "hu" });
  assert.deepEqual(issues, [{ level: ERROR, message: "missing key: fns" }]);
});

test("a target holding the same empty container is clean, not a wrong-type error", () => {
  assert.deepEqual(checkCatalog({ a: "en", fns: {} }, { a: "hu", fns: {} }), []);
});

test("a target that filled English's empty container with a string is an error", () => {
  const issues = checkCatalog({ fns: {} }, { fns: SENTINEL });
  assert.deepEqual(issues, [{ level: ERROR, message: "fns: source is an empty object, target is not" }]);
});

// ---------------------------------------------------- the inapplicable key

// `∅` marks a key the language can never reach. Getting the reachable set wrong
// in the permissive direction leaves a dead key blocking a publish forever;
// getting it wrong in the strict direction BLANKS A REAL TRANSLATION, silently,
// in every locale at once. It has already happened once: a sweep derived the set
// from Intl alone and wiped 26 live `_zero` strings. These assertions are the
// behaviour of i18next 25.10.10, measured, not reasoned about.

console.log("\nthe inapplicable key:");

test("a plural key splits into base, ordinality and category", () => {
  assert.deepEqual(parsePluralKey("flowerCount_two"), { base: "flowerCount", ordinal: false, category: "two" });
  assert.deepEqual(parsePluralKey("a.b.result_ordinal_few"), { base: "a.b.result", ordinal: true, category: "few" });
  assert.equal(parsePluralKey("slotCount"), null);
  assert.equal(parsePluralKey("thing_ordinal"), null);
});

test("`_zero` is reachable in EVERY language, whatever CLDR says", () => {
  // i18next special-cases it: t(k, {count: 0}) renders k_zero in fr (categories
  // one/many/other) and in ja (other alone). Deriving from Intl alone marks it
  // dead and wipes the string. This is the assertion that stops that returning.
  for (const locale of ["en", "fr", "ja", "ko", "zh-CN", "hi", "ru", "el", "hu"]) {
    assert.ok(reachableCategories(locale).has("zero"), `${locale} cardinal zero`);
  }
});

test("`_ordinal_zero` is NOT special-cased: ordinals follow CLDR alone", () => {
  // With every _ordinal_* key present, count 0 renders _ordinal_other everywhere.
  assert.equal(reachableCategories("en", { ordinal: true }).has("zero"), false);
  assert.equal(reachableCategories("hi", { ordinal: true }).has("zero"), false);
});

test("the reachable set is CLDR's, per type", () => {
  assert.deepEqual([...reachableCategories("ja")].sort(), ["other", "zero"]);
  assert.deepEqual([...reachableCategories("hu", { ordinal: true })].sort(), ["one", "other"]);
  assert.deepEqual([...reachableCategories("en", { ordinal: true })].sort(), ["few", "one", "other", "two"]);
});

test("an unknown locale answers null, so nothing is provably unreachable", () => {
  assert.equal(reachableCategories("zz-XX"), null);
  assert.equal(isUnreachablePluralKey("n_one", "zz-XX", { n_one: "x", n_other: "x" }), false);
});

const ENGLISH = {
  "phrases.slotCount_zero": "no input slots",
  "phrases.slotCount_one": "one input slot",
  "phrases.slotCount_many": INAPPLICABLE,
  "phrases.slotCount_other": "{{count}} input slots",
  "result_ordinal_one": "1st",
  "result_ordinal_two": "2nd",
  "result_ordinal_other": "nth",
  "step_one": "Open the editor"
};

test("a category the locale lacks is unreachable", () => {
  assert.equal(isUnreachablePluralKey("phrases.slotCount_one", "ja", ENGLISH), true);
  assert.equal(isUnreachablePluralKey("result_ordinal_two", "hu", ENGLISH), true);
});

test("a category the locale has is reachable", () => {
  assert.equal(isUnreachablePluralKey("phrases.slotCount_one", "hu", ENGLISH), false);
  assert.equal(isUnreachablePluralKey("result_ordinal_two", "en", ENGLISH), false);
});

test("`_zero` and `_other` are never unreachable", () => {
  assert.equal(isUnreachablePluralKey("phrases.slotCount_zero", "ja", ENGLISH), false);
  assert.equal(isUnreachablePluralKey("phrases.slotCount_other", "ja", ENGLISH), false);
});

test("a key that merely ENDS in a category word is not a plural key", () => {
  // `step_one` has no `step_other` sibling, so i18next never plural-resolves it.
  // Without this guard, stubbing ja would blank an ordinary instruction.
  assert.equal(isUnreachablePluralKey("step_one", "ja", ENGLISH), false);
});

test("stub writes the inapplicable sentinel, not the untranslated one", () => {
  const stubbed = stubAgainst({ n_one: "one", n_other: "many" }, {}, { locale: "ja" });
  assert.deepEqual(stubbed, { n_one: INAPPLICABLE, n_other: SENTINEL });
});

test("with no locale nothing is provably unreachable, so stub writes no `∅`", () => {
  assert.deepEqual(stubAgainst({ n_one: "one", n_other: "many" }, {}), { n_one: SENTINEL, n_other: SENTINEL });
});

test("English's `∅` does not propagate: a locale that reaches the key gets a gap", () => {
  // fr has cardinal `many`; English does not, so English holds `∅` there. fr must
  // show `�` and keep counting as untranslated, never inherit English's `∅`.
  const stubbed = stubAgainst({ n_many: INAPPLICABLE, n_other: "many" }, {}, { locale: "fr" });
  assert.deepEqual(stubbed, { n_many: SENTINEL, n_other: SENTINEL });
});

test("a locale that also lacks the category English lacks still gets `∅`", () => {
  assert.deepEqual(stubAgainst({ n_many: INAPPLICABLE, n_other: "many" }, {}, { locale: "ja" }), {
    n_many: INAPPLICABLE,
    n_other: SENTINEL
  });
});

test("an unjustified `∅` in a target is demoted to the untranslated sentinel", () => {
  const stubbed = stubAgainst({ n_one: "one", n_other: "many" }, { n_one: INAPPLICABLE }, { locale: "hu" });
  assert.deepEqual(stubbed, { n_one: SENTINEL, n_other: SENTINEL });
});

test("a real translation on a reachable plural key is left alone", () => {
  const stubbed = stubAgainst({ n_zero: "none", n_other: "many" }, { n_zero: "nulla", n_other: "sok" }, { locale: "ja" });
  assert.deepEqual(stubbed, { n_zero: "nulla", n_other: "sok" });
});

test("an inapplicable key is outside the coverage denominator", () => {
  assert.deepEqual(countSentinels({ a: "hu", b: SENTINEL, c: INAPPLICABLE }), {
    total: 2,
    stubbed: 1,
    translated: 1,
    inapplicable: 1
  });
});

test("validate accepts a justified `∅` and rejects an unjustified one", () => {
  const english = { n_one: "one", n_other: "many" };
  assert.deepEqual(checkCatalog(english, { n_one: INAPPLICABLE, n_other: "ja" }, { locale: "ja" }), []);
  const issues = checkCatalog(english, { n_one: INAPPLICABLE, n_other: "hu" }, { locale: "hu" });
  assert.deepEqual(issues, [{ level: ERROR, message: `n_one: "${INAPPLICABLE}" is not justified (the key is reachable in hu)` }]);
});

test("the guard fails closed: with no locale, every `∅` is an error", () => {
  const issues = checkCatalog({ n_one: "one", n_other: "many" }, { n_one: INAPPLICABLE, n_other: "x" });
  assert.equal(issues.length, 1);
  assert.equal(issues[0].level, ERROR);
});

test("`∅` in English is an error where English reaches the key", () => {
  const issues = checkCatalog({ n_zero: INAPPLICABLE, n_other: "many" }, { n_zero: "x", n_other: "y" }, { locale: "hu" });
  assert.deepEqual(issues, [
    { level: ERROR, message: `n_zero: source is "${INAPPLICABLE}" but the key is reachable in English` }
  ]);
});

test("`∅` in English is fine where English lacks the category", () => {
  // English has no cardinal `many`; fr does, so fr holds a real string there.
  assert.deepEqual(checkCatalog({ n_many: INAPPLICABLE, n_other: "many" }, { n_many: "beaucoup", n_other: "autres" }, { locale: "fr" }), []);
});

// -------------------------------------------------------- untranslated prose

// Prose has three untranslated conventions and publishing any of them serves
// English, or an apology, from a URL a reader reached by asking for their own
// language. The sentinel is covered by the catalog checks; these cover the other
// two, which are the ones with no marker in the file.

console.log("\nuntranslated prose:");

test("a body byte-identical to English is untranslated", () => {
  assert.equal(isCopiedEnglish("Roll the ball.", "Roll the ball."), true);
});

test("leading and trailing whitespace is not a translation", () => {
  assert.equal(isCopiedEnglish("Roll the ball.", "\n  Roll the ball.  \n"), true);
});

test("a real translation is not flagged", () => {
  assert.equal(isCopiedEnglish("Roll the ball.", "Gurítsd el a labdát."), false);
});

test("two empty bodies are not evidence of anything", () => {
  // A category concept has no body in either language, and is skipped for being
  // empty rather than for being untranslated.
  assert.equal(isCopiedEnglish("", ""), false);
});

test("one placeholder body reused across items is untranslated, all of it", () => {
  const repeated = findRepeatedBodies([
    { key: "blog/a", englishBody: "A long English post.", targetBody: "Ez az oldal még nincs lefordítva." },
    { key: "blog/b", englishBody: "A different English post.", targetBody: "Ez az oldal még nincs lefordítva." },
    { key: "blog/c", englishBody: "A third English post.", targetBody: "Egy igazi fordítás." }
  ]);
  assert.deepEqual([...repeated].sort(), ["blog/a", "blog/b"]);
});

test("identical translations of identical English are correct, not evidence", () => {
  // Two items whose English is the same SHOULD translate the same way. Flagging
  // that would suppress a correct translation, which is worse than missing one.
  const repeated = findRepeatedBodies([
    { key: "blog/a", englishBody: "Coming soon.", targetBody: "Hamarosan." },
    { key: "blog/b", englishBody: "Coming soon.", targetBody: "Hamarosan." }
  ]);
  assert.equal(repeated.size, 0);
});

test("a body used exactly once is left alone", () => {
  const repeated = findRepeatedBodies([
    { key: "blog/a", englishBody: "A long English post.", targetBody: "Rövid." }
  ]);
  assert.equal(repeated.size, 0);
});

test("empty bodies never group together", () => {
  const repeated = findRepeatedBodies([
    { key: "concept/a-group", englishBody: "", targetBody: "" },
    { key: "concept/b-group", englishBody: "", targetBody: "" }
  ]);
  assert.equal(repeated.size, 0);
});

// ------------------------------------------------------- the frontmatter reader

// The reader was flat, and the flattening was silent: it stripped indentation
// before splitting, so `seo:`'s `description` landed at top level as if it had
// been written there, and a type asking for `seo.description` got undefined and
// no complaint. Nothing nested was checked by anything, for as long as that was
// true. These pin the nesting, and above all the shapes that LOOK fine under
// the old reader and are not.

console.log("\nthe frontmatter reader:");

test("a nested mapping is an object, not leaves promoted to the top", () => {
  const { data } = parseFrontmatter('---\ntitle: "T"\nseo:\n  description: "D"\n---\nBody.\n');
  assert.deepEqual(data, { title: "T", seo: { description: "D" } });
});

test("a colon inside a quoted scalar is not a key separator", () => {
  const { data } = parseFrontmatter('---\ntitle: "Episode 1: Agentic Coding 101"\n---\nB\n');
  assert.equal(data.title, "Episode 1: Agentic Coding 101");
});

test("an inline flow sequence is an array of strings", () => {
  const { data } = parseFrontmatter('---\ntags: ["one", "two", "three"]\n---\nB\n');
  assert.deepEqual(data.tags, ["one", "two", "three"]);
});

// The trap. Prettier reflows a long `keywords:` onto the next line, so the same
// field is inline in one post and wrapped in the next. Read naively the wrapped
// form is a key with an empty mapping under it, which has no leaves at all: the
// field does not fail the check, it DISAPPEARS from it. Every post that happened
// to be long would have gone unchecked.
test("a flow sequence wrapped onto the next line is still that sequence", () => {
  const { data } = parseFrontmatter('---\nseo:\n  keywords:\n    ["a", "b"]\n---\nB\n');
  assert.deepEqual(data.seo.keywords, ["a", "b"]);
});

test("a flow sequence spread over many lines is still that sequence", () => {
  const { data } = parseFrontmatter('---\nseo:\n  keywords:\n    [\n      "a",\n      "b",\n      "c"\n    ]\n---\nB\n');
  assert.deepEqual(data.seo.keywords, ["a", "b", "c"]);
});

test("a comma inside a quoted item does not split it", () => {
  const { data } = parseFrontmatter('---\ntags: ["one, and a half", "two"]\n---\nB\n');
  assert.deepEqual(data.tags, ["one, and a half", "two"]);
});

test("a block sequence is an array too", () => {
  const { data } = parseFrontmatter('---\ntags:\n  - one\n  - "two"\n---\nB\n');
  assert.deepEqual(data.tags, ["one", "two"]);
});

test("a bare key with nothing under it is still the empty string", () => {
  const { data } = parseFrontmatter("---\ntitle: T\nseo:\n---\nB\n");
  assert.equal(data.seo, "");
});

test("an empty flow sequence is an empty array, not a one-item one", () => {
  assert.deepEqual(parseFrontmatter("---\ntags: []\n---\nB\n").data.tags, []);
});

test("a dotted path reads a nested field, and undefined means absent", () => {
  const { data } = parseFrontmatter('---\ntitle: "T"\nseo:\n  description: "D"\n---\nB\n');
  assert.equal(frontmatterValue(data, "seo.description"), "D");
  assert.equal(frontmatterValue(data, "title"), "T");
  assert.equal(frontmatterValue(data, "seo.keywords"), undefined);
  assert.equal(frontmatterValue(data, "summary.from"), undefined);
});

test("a dotted path does not descend into a string or an array", () => {
  const { data } = parseFrontmatter('---\ntitle: "T"\ntags: ["a"]\n---\nB\n');
  assert.equal(frontmatterValue(data, "title.length"), undefined);
  assert.equal(frontmatterValue(data, "tags.0"), undefined);
});

test("leaf paths are dotted, and an array is a leaf rather than a branch", () => {
  const { data } = parseFrontmatter('---\ntitle: "T"\ntags: ["a", "b"]\nseo:\n  description: "D"\n  keywords: ["k"]\n---\nB\n');
  assert.deepEqual(frontmatterPaths(data), ["title", "tags", "seo.description", "seo.keywords"]);
});

// -------------------------------------------- the translatable frontmatter check

// checkProse's frontmatter half, driven by the type's `frontmatterTranslated`
// list. Two things are being pinned: that a DOTTED path is checked at all, and
// that a list-valued field does not blow the run up on `.trim()`.

console.log("\nthe translatable frontmatter check:");

const POST_KEYS = ["title", "excerpt", "seo.description", "seo.keywords"];

function frontmatterIssues(englishFm, targetFm, translatedKeys = POST_KEYS) {
  const english = `---\n${englishFm}\n---\nBody.\n`;
  const target = `---\n${targetFm}\nen_md5: abc\n---\nMás szöveg.\n`;
  return checkProse(parseFrontmatter(english).body, parseFrontmatter(target).body, {
    englishData: parseFrontmatter(english).data,
    targetData: parseFrontmatter(target).data,
    translatedKeys,
    expectedMd5: "abc"
  })
    .filter((i) => i.message.startsWith("frontmatter:"))
    .map((i) => `${i.level} ${i.message}`);
}

const EN_POST = 'title: "T"\nexcerpt: "E"\nseo:\n  description: "D"\n  keywords: ["a", "b"]';

test("a fully translated post has nothing to say about its frontmatter", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"\n  keywords: ["x", "y"]'), []);
});

// The bug in one assertion: before the nested reader, this passed silently.
test("an empty nested field is an ERROR rather than nothing at all", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: ""\n  keywords: ["x"]'), [
    'ERROR frontmatter: missing "seo.description"'
  ]);
});

test("a list-valued field is checked item by item, not trimmed as a string", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"\n  keywords: ["x ", "y"]'), [
    'ERROR frontmatter: leading or trailing whitespace in "seo.keywords"'
  ]);
});

test("an empty list is as missing as an empty string", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"\n  keywords: []'), [
    'ERROR frontmatter: missing "seo.keywords"'
  ]);
});

test("a wrapped list is accepted, not reported as an empty mapping", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"\n  keywords:\n    ["x", "y"]'), []);
});

test("a dropped nested key is caught by parity, not swallowed by its block", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"'), [
    'ERROR frontmatter: missing "seo.keywords"',
    'ERROR frontmatter: key "seo.keywords" dropped (only en_md5/tidied_md5 may be added)'
  ]);
});

test("an invented nested key is caught too", () => {
  assert.deepEqual(frontmatterIssues(EN_POST, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"\n  keywords: ["x"]\n  author: "Nobody"'), [
    'ERROR frontmatter: invented key "seo.author"'
  ]);
});

test("a field the type does not declare translatable is left alone", () => {
  // `tags` stays English on purpose, and saying so is the point of the list.
  const english = `${EN_POST}\ntags: ["one", "two"]`;
  assert.deepEqual(frontmatterIssues(english, 'title: "C"\nexcerpt: "K"\nseo:\n  description: "L"\n  keywords: ["x"]\ntags: ["one", "two"]'), []);
});

test("a path English does not have is not demanded of the translation", () => {
  assert.deepEqual(frontmatterIssues('title: "T"\nexcerpt: "E"', 'title: "C"\nexcerpt: "K"'), []);
});

// ------------------------------------------------------ the staleness stamp

// The stamp is the one thing validate WRITES, and a post's frontmatter carries
// a nested `seo` mapping and a `tags` sequence that reach a published artifact.
// So the write has to be surgical: everything but the stamp line comes back
// byte for byte, or adding one key silently rewrites what publish reads.

console.log("\nthe staleness stamp:");

test("a missing stamp is appended and nothing else moves", () => {
  const raw = '---\ntitle: "A Post"\ntags: ["one", "two"]\nseo:\n  description: "Hi"\n---\n\nBody.\n';
  assert.equal(
    stampFrontmatter(raw, "abc123"),
    '---\ntitle: "A Post"\ntags: ["one", "two"]\nseo:\n  description: "Hi"\nen_md5: abc123\n---\n\nBody.\n'
  );
});

test("an existing stamp is replaced in place", () => {
  const raw = "---\ntitle: T\nen_md5: old\ndescription: D\n---\nBody.\n";
  assert.equal(stampFrontmatter(raw, "new"), "---\ntitle: T\nen_md5: new\ndescription: D\n---\nBody.\n");
});

test("quoting, indentation and multi-line sequences survive a stamp", () => {
  const raw = '---\nseo:\n  keywords:\n    [\n      "a",\n      "b"\n    ]\n---\nBody.\n';
  const stamped = stampFrontmatter(raw, "x");
  assert.ok(stamped.includes('    [\n      "a",\n      "b"\n    ]'));
  assert.equal(stamped.replace("\nen_md5: x", ""), raw);
});

test("the body is untouched, including a body that contains ---", () => {
  const raw = "---\ntitle: T\n---\nBefore\n\n---\n\nAfter\n";
  assert.equal(stampFrontmatter(raw, "y"), "---\ntitle: T\nen_md5: y\n---\nBefore\n\n---\n\nAfter\n");
});

// ------------------------------------------------------------ the VTT stamp

// Same job, a format with no frontmatter. The stamp is a WebVTT NOTE block, and
// every cue and timing has to come back byte for byte: a subtitle file is
// displayed against a video that was not re-cut for it.

console.log("\nthe VTT staleness stamp:");

const VTT = "WEBVTT\n\n00:00:00.000 --> 00:00:01.000\nHello\n";

test("a missing stamp is inserted under the header, terminated by a blank line", () => {
  assert.equal(stampVttNote(VTT, "abc"), "WEBVTT\n\nNOTE en_md5 abc\n\n00:00:00.000 --> 00:00:01.000\nHello\n");
});

test("a header with no blank line after it still gets a terminated NOTE block", () => {
  const raw = "WEBVTT\n00:00:00.000 --> 00:00:01.000\nHello\n";
  assert.equal(stampVttNote(raw, "abc"), "WEBVTT\n\nNOTE en_md5 abc\n\n00:00:00.000 --> 00:00:01.000\nHello\n");
});

test("an existing stamp is replaced in place, and stamping is idempotent", () => {
  const once = stampVttNote(VTT, "abc");
  assert.equal(stampVttNote(once, "abc"), once);
  assert.equal(stampVttNote(once, "def"), once.replace("abc", "def"));
});

test("the stamp round-trips through the reader, and a human NOTE is not one", () => {
  assert.deepEqual(parseVttNotes(stampVttNote(VTT, "d41d8cd98f00b204e9800998ecf8427e")), {
    en_md5: "d41d8cd98f00b204e9800998ecf8427e"
  });
  assert.deepEqual(parseVttNotes("WEBVTT\n\nNOTE a human comment\n\n00:00:00.000 --> 00:00:01.000\nHi\n"), {});
});

test("cue timings and caption text survive a stamp", () => {
  assert.equal(vttTimestamps(stampVttNote(VTT, "abc")).join(), "00:00:00.000 --> 00:00:01.000");
  assert.equal(vttBody(stampVttNote(VTT, "abc")), "Hello");
});

// ---------------------------------------------------------- the R2 key guard

// The one guard left after the English mirror was deleted. Publishing English
// from a directory walk is impossible now; synthesising an English KEY from a
// bad path template is not, and that failure is silent on R2.

console.log("\nthe R2 key guard:");

const refuses = (key) => {
  try {
    assertPublishableKey(key);
    return false;
  } catch (error) {
    return error instanceof GuardViolation;
  }
};

test("an English locale segment is refused", () => {
  assert.equal(refuses("static/i18n/app/en/messages-abc123456789.json"), true);
});

test("`source`, this repo's old name for English, is refused too", () => {
  assert.equal(refuses("static/i18n/app/source/messages-abc123456789.json"), true);
});

test("English is refused wherever the segment sits in the key", () => {
  assert.equal(refuses("static/i18n/exercises/acronym/en/messages-abc123456789.json"), true);
});

test("a key outside the static/ prefix is refused", () => {
  assert.equal(refuses("i18n/app/hu/messages-abc123456789.json"), true);
});

test("a legitimate target-locale key is permitted, and normalised", () => {
  assert.equal(assertPublishableKey("/static/i18n/app/hu/messages-abc123456789.json"), "static/i18n/app/hu/messages-abc123456789.json");
});

// -------------------------------------------------------- the api copy rows

// Coverage reports two bodies of copy that are still translated in the api repo.
// Both answers hang on reading a Rails locale file's keys without a YAML parser,
// and on which locale name the api spells a file with, so those are what these
// pin. Everything else in that module talks to git and belongs to a real
// checkout, not to a unit test.

console.log("\nthe api copy rows:");

const MAILER_YML = `# a comment
en:
  account_mailer:
    welcome:
      subject: "Welcome to Jiki!"
      body_markdown: |
        Welcome to [Jiki](https://jiki.io)!

        Cheers,
      cta: ''
    empty_map:
`;

test("leaf keys are dotted paths, and the locale key is stripped", () => {
  assert.deepEqual(
    [...localeFileLeaves(MAILER_YML).keys()],
    ["account_mailer.welcome.subject", "account_mailer.welcome.body_markdown", "account_mailer.welcome.cta"]
  );
});

test("a block scalar is one leaf, and its body does not leak in as keys", () => {
  const body = localeFileLeaves(MAILER_YML).get("account_mailer.welcome.body_markdown");
  assert.equal(body.split("\n")[0], "Welcome to [Jiki](https://jiki.io)!");
});

test("quotes come off a scalar, so an empty value reads as empty", () => {
  assert.equal(localeFileLeaves(MAILER_YML).get("account_mailer.welcome.subject"), "Welcome to Jiki!");
  assert.equal(localeFileLeaves(MAILER_YML).get("account_mailer.welcome.cta"), "");
});

test("two locales of the same file produce the same key set", () => {
  const hu = MAILER_YML.replace("en:", "hu:").replace("Welcome to Jiki!", "Üdv a Jikiben!");
  assert.deepEqual([...localeFileLeaves(hu).keys()], [...localeFileLeaves(MAILER_YML).keys()]);
});

test("Rails' own locale list is read from the initializer, both constants", () => {
  const initializer = `  PRODUCTION_LOCALES = %w[en].freeze\n  WIP_LOCALES = %w[\n    de hu\n    pt-PT\n  ].freeze\n`;
  assert.deepEqual(railsKnownLocales(initializer), ["en", "de", "hu", "pt-PT"]);
});

test("a locale file takes RAILS' spelling of the locale, not this repo's", () => {
  // The two lists agree today. This is what keeps that a fact rather than an
  // assumption: `pt-pt` here and `pt-PT` there are one locale.
  assert.deepEqual(railsLocale("pt-pt", ["pt-PT"]), { locale: "pt-PT", knownToRails: true });
  assert.deepEqual(railsLocale("zh_CN", ["zh-CN"]), { locale: "zh-CN", knownToRails: true });
});

test("a locale Rails has never heard of keeps its own spelling and is flagged", () => {
  assert.deepEqual(railsLocale("fi", ["de", "hu"]), { locale: "fi", knownToRails: false });
});

// -------------------------------------------------------- the how-to routing

// Every content type names the `translator` how-to a pass must load for it. A
// type with no `howto` is a type nobody can be told how to translate, and the
// omission is invisible: every other script keeps working, and the gap only
// surfaces when someone tries to run a pass. `levels`, `blog`, `articles`,
// `guides`, `project-episodes` and `exercise-category` were each added without
// one. This is the assertion that would have caught all six on the day.

console.log("\nthe how-to routing:");

function howtoNames(howto) {
  return Array.isArray(howto) ? howto : [howto];
}

test("every content type declares a howto", () => {
  const missing = CONTENT_TYPE_IDS.filter((id) => {
    const { howto } = CONTENT_TYPES[id];
    if (typeof howto === "string") return howto.length === 0;
    if (Array.isArray(howto)) {
      return howto.length === 0 || howto.some((name) => typeof name !== "string" || name.length === 0);
    }
    return true;
  });
  assert.deepEqual(missing, [], `content types with no usable howto: ${missing.join(", ")}`);
});

// Only runnable where a translator checkout exists. CI has none, so this is
// skipped there, and the skip is PRINTED: a check that quietly passes when it
// did not run is worse than no check.
const TRANSLATOR_REPO = process.env.JIKI_TRANSLATOR_REPO;

if (!TRANSLATOR_REPO) {
  console.log("  SKIP  every howto names a file that exists (set JIKI_TRANSLATOR_REPO to run it)");
} else {
  test("every howto names a file that exists in the translator repo", () => {
    const absent = [];
    for (const id of CONTENT_TYPE_IDS) {
      for (const name of howtoNames(CONTENT_TYPES[id].howto)) {
        const file = path.join(TRANSLATOR_REPO, "content-types", `${name}.md`);
        if (!fs.existsSync(file)) absent.push(`${id} → content-types/${name}.md`);
      }
    }
    assert.deepEqual(absent, [], `how-to files that do not exist:\n${absent.join("\n")}`);
  });
}

// ------------------------------------------------------------------- result

console.log(failures === 0 ? "\ntest: all assertions passed.\n" : `\ntest: ${failures} FAILED.\n`);
process.exit(failures === 0 ? 0 : 1);
