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
import { deepMerge, mergeExerciseCatalogs } from "./lib/families.mjs";
import { contentHash } from "./lib/files.mjs";
import { findRepeatedBodies, isCopiedEnglish } from "./lib/checks.mjs";

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

// ------------------------------------------------------------------- result

console.log(failures === 0 ? "\ntest: all assertions passed.\n" : `\ntest: ${failures} FAILED.\n`);
process.exit(failures === 0 ? 0 : 1);
