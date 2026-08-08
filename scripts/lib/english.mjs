// Where English comes from, and what "the corpus" means without a registry.
//
// English is not stored in this repo. It is checked out from the front-end into
// `.source/front-end/`, which is gitignored and ephemeral. Every script that
// needs English reads it from there, through this module and nowhere else.
//
// See ENGLISH-SOURCE.md for the model: which commit gets checked out on a PR
// versus on main, and why the corpus is derived rather than tracked.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { REPO_ROOT, SOURCE_LOCALE, TARGET_LOCALES, fail } from "./constants.mjs";
import { contentType, discoverItems, listItems, sourceRepoPath } from "./content-types.mjs";

/** Where scripts/source-checkout.mjs and the CI checkout step put the front-end. */
export const CHECKOUT_DIR = path.join(REPO_ROOT, ".source", "front-end");

/** The probe that says a directory really is a front-end checkout. */
const PROBE = path.join("app", "messages", "en.json");

let cached = null;

/**
 * Resolve the front-end checkout English is read from.
 *
 * Order: an explicit --source-repo, JIKI_SOURCE_REPO, the checkout this repo
 * manages at .source/front-end, then a sibling working copy. The sibling is last
 * because it is whatever the developer happens to have checked out, which is the
 * right convenience locally and the wrong answer in CI.
 *
 * Failing here is a normal state for a fresh clone, so it says how to fix it
 * rather than reporting a missing file from somewhere three calls down.
 */
export function englishRepo(explicit) {
  if (!explicit && cached) return cached;

  const candidates = [
    explicit,
    process.env.JIKI_SOURCE_REPO,
    CHECKOUT_DIR,
    path.resolve(REPO_ROOT, "..", "front-end")
  ].filter(Boolean);

  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (fs.existsSync(path.join(resolved, PROBE))) {
      if (!explicit) cached = resolved;
      return resolved;
    }
  }

  fail(
    `no front-end checkout to read English from. This repo holds no English of its own.\n` +
      `  Looked in: ${candidates.map((c) => path.resolve(c)).join(", ")}\n` +
      `  Fetch one:  npm run source:checkout            (front-end main)\n` +
      `              npm run source:checkout -- --ref=<sha>\n` +
      `  Or point at one you already have:  --source-repo=<path>, or JIKI_SOURCE_REPO=<path>.`
  );
}

/**
 * The front-end commit English was read from, or null when it cannot be known.
 *
 * Publish stamps this into completeness.json. On a PR it is the pinned SHA; on
 * main it is whatever front-end main was at that moment, which floats, and
 * recording it is the whole reason the float is acceptable. Null when the
 * checkout is a working copy with uncommitted changes to English, which is a
 * local-only state and says so rather than reporting a SHA that is not the truth.
 */
export function englishSha() {
  const repo = englishRepo();
  try {
    const head = execFileSync("git", ["rev-parse", "HEAD"], { cwd: repo, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    const dirty = execFileSync("git", ["status", "--porcelain", "--", ...ENGLISH_DIRS], {
      cwd: repo,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    return dirty ? null : head;
  } catch {
    return null;
  }
}

/** The four directories English is authored in. Also what the sparse checkout takes. */
export const ENGLISH_DIRS = ["app/messages", "curriculum/src", "interpreters/src", "content/src"];

/** Absolute path to one item's English original, inside the checkout. */
export function englishPath(typeId, slug) {
  return sourceRepoPath(englishRepo(), typeId, SOURCE_LOCALE, slug);
}

/** Every item of one type that English exists for. The REAL corpus, all of it. */
export function englishItems(typeId) {
  return discoverItems(englishRepo(), typeId);
}

/**
 * How many items of one type exist in English.
 *
 * This is completeness's denominator, and it is deliberately not the working
 * corpus below. Measuring completeness against what this repo has started asks
 * "have you finished what you started", which any locale satisfies by starting
 * one thing. The question that matters is "have you translated everything that
 * EXISTS", and the checkout is what knows that number.
 */
export function englishCorpusSize(typeId) {
  return englishItems(typeId).length;
}

// ------------------------------------------------------------- the corpus --

/** Explicit exclusions. Nothing implicit: an excluded item names its reason. */
function exclusions() {
  const file = path.join(REPO_ROOT, "corpus.json");
  if (!fs.existsSync(file)) return new Set();
  const { exclude = [] } = JSON.parse(fs.readFileSync(file, "utf8"));
  return new Set(exclude.map((entry) => `${entry.type}:${entry.slug ?? ""}`));
}

/**
 * The working corpus for one type: what this repo is actually translating.
 *
 * Derived by comparing the two trees rather than recorded anywhere. An item is
 * in the corpus when English exists for it AND at least one target locale holds
 * a translation of it. That is exactly what the old sync manifest's tracked item
 * list held, except that it is recomputed, so it cannot fall out of step with
 * the files it describes.
 *
 * Bringing a new item in is deliberate: `stub` and `translate` resolve an
 * explicit --type/--slug against English directly, and the item is in the corpus
 * from the moment the first locale holds a file for it.
 */
export function corpusItems(typeId) {
  const type = contentType(typeId);
  const excluded = exclusions();

  const held = new Set();
  for (const locale of TARGET_LOCALES) {
    for (const item of listItems(typeId, locale)) held.add(item.slug ?? "");
  }

  return englishItems(typeId)
    .filter((item) => held.has(item.slug ?? ""))
    .filter((item) => !excluded.has(`${typeId}:${item.slug ?? ""}`))
    .map((item) => ({
      type: typeId,
      slug: item.slug,
      path: englishPath(typeId, item.slug),
      slugged: type.slugged
    }));
}

/**
 * One item resolved against English, whether or not it is in the corpus yet.
 *
 * This is what an explicit --type/--slug uses, and it is the only way a new item
 * enters the corpus. Hard-fails when English does not exist for it, because the
 * alternative is stubbing a locale full of sentinels for a slug that is a typo.
 */
export function englishItem(typeId, slug) {
  const file = englishPath(typeId, slug);
  if (!fs.existsSync(file)) {
    fail(`no English for ${typeId}${slug ? `/${slug}` : ""} at ${path.relative(englishRepo(), file)} in ${englishRepo()}`);
  }
  return { type: typeId, slug: slug ?? null, path: file, slugged: contentType(typeId).slugged };
}

/**
 * Items in scope for a run: the corpus, or one explicit item.
 *
 * Every script that walks "everything English defines" goes through this, so the
 * corpus rule and the seed-a-new-item rule live in one place.
 */
export function scopeItems(typeId, { slug } = {}) {
  if (!slug) return corpusItems(typeId);
  // A slug filter cannot match a type that has no slugs, so it excludes them
  // rather than matching them all. `--slug=x` with no `--type` sweeps every
  // type, and the app catalog is not one of them.
  if (!contentType(typeId).slugged) return [];
  return [englishItem(typeId, slug)];
}
