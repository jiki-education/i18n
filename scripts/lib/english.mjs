// Where English comes from, and what "the corpus" means without a registry.
//
// English is not stored in this repo. It is checked out from the repo it is
// authored in into `.source/<id>/`, which is gitignored and ephemeral. Every
// script that needs English reads it from there, through this module and nowhere
// else.
//
// See ENGLISH-SOURCE.md for the model: which commit gets checked out on a PR
// versus on main, and why the corpus is derived rather than tracked.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { REPO_ROOT, TARGET_LOCALES, fail } from "./constants.mjs";
import { CONTENT_TYPES, contentType, discoverItems, listItems, sourceRepoPath } from "./content-types.mjs";
import { isExcluded } from "./exclusions.mjs";

/**
 * The repos English is authored in.
 *
 * Almost all of it is the front-end, and a content type that names no
 * `sourceRepo` means that one. Video subtitles are the exception: they are cut
 * from the rendered video, so they are authored in `videos` beside the footage
 * and the Mux publishing pipeline that serves them. A content type therefore
 * names WHICH repo its English comes from, and everything downstream of that
 * (the checkout directory, the sparse paths, the env override) is a fact about
 * the repo rather than about the type.
 *
 * `probe` is one English file the content-type map already knows the path of, so
 * a source layout change cannot leave the probe pointing at a path that no longer
 * exists — which would fail as "no checkout here", the least useful thing it
 * could say. `dirs` is exactly what the sparse checkout takes.
 */
export const SOURCE_REPOS = {
  "front-end": {
    remote: "jiki-education/front-end",
    env: "JIKI_SOURCE_REPO",
    sibling: "front-end",
    dirs: ["app/messages.json", "curriculum/src", "interpreters/src", "content/src"],
    probe: () => CONTENT_TYPES["app-messages"].sourceRepoPath()
  },
  videos: {
    remote: "jiki-education/videos",
    env: "JIKI_VIDEOS_REPO",
    sibling: "videos",
    dirs: ["videos"],
    probe: () => CONTENT_TYPES["video-subtitles"].sourceRepoPath("using-functions")
  },
  // The api holds two bodies of user-facing copy that are translated IN the api
  // rather than here: the level milestone emails and the mailer / message YAML.
  // Neither has been migrated to this repo yet, and until that happens coverage
  // has to read them there to answer "is this language complete?" at all. A
  // known gap awaiting a migration, not the design.
  //
  // No content type names it, so nothing translates, validates or publishes from
  // it: scripts/lib/api-copy.mjs is the only reader, and coverage.mjs the only
  // caller. It is read at main, never at the working tree's branch.
  api: {
    remote: "jiki-education/api",
    env: "JIKI_API_REPO",
    sibling: "api",
    dirs: ["config/locales", "config/initializers", "db/seeds"],
    probe: () => "db/seeds/curriculum.json"
  }
};

/** The source repo a content type's English is authored in. */
export const DEFAULT_SOURCE_REPO = "front-end";

export const SOURCE_REPO_IDS = Object.keys(SOURCE_REPOS);

export function sourceRepoSpec(id) {
  const spec = SOURCE_REPOS[id];
  if (!spec) fail(`unknown source repo "${id}". Known: ${SOURCE_REPO_IDS.join(", ")}`);
  return spec;
}

/** Where scripts/source-checkout.mjs and the CI checkout step put one source repo. */
export function checkoutDir(id = DEFAULT_SOURCE_REPO) {
  sourceRepoSpec(id);
  return path.join(REPO_ROOT, ".source", id);
}

const cached = new Map();

/**
 * Resolve the checkout English is read from, for one source repo.
 *
 * Order: an explicit --source-repo, the repo's env override, the checkout this
 * repo manages at .source/<id>, then a sibling working copy. The sibling is last
 * because it is whatever the developer happens to have checked out, which is the
 * right convenience locally and the wrong answer in CI.
 *
 * Failing here is a normal state for a fresh clone, so it says how to fix it
 * rather than reporting a missing file from somewhere three calls down.
 *
 * `optional` returns null instead of failing, for a caller that reports on a
 * repo rather than translating from it. Coverage is the only one: it must never
 * exit non-zero, and a clone with no api beside it is an ordinary state.
 */
export function englishRepo(id = DEFAULT_SOURCE_REPO, explicit, { optional = false } = {}) {
  const spec = sourceRepoSpec(id);
  if (!explicit && cached.has(id)) return cached.get(id);

  const candidates = [explicit, process.env[spec.env], checkoutDir(id), path.resolve(REPO_ROOT, "..", spec.sibling)].filter(Boolean);

  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (fs.existsSync(path.join(resolved, spec.probe()))) {
      if (!explicit) cached.set(id, resolved);
      return resolved;
    }
  }

  if (optional) return null;

  fail(
    `no ${id} checkout to read English from. This repo holds no English of its own.\n` +
      `  Looked in: ${candidates.map((c) => path.resolve(c)).join(", ")}\n` +
      `  Fetch one:  pnpm source:checkout --source=${id}\n` +
      `              pnpm source:checkout --source=${id} --ref=<sha>\n` +
      `  Or point at one you already have:  --source-repo=<path>, or ${spec.env}=<path>.`
  );
}

/** The checkout one content type's English is read from. */
export function repoFor(typeId) {
  return englishRepo(contentType(typeId).sourceRepo ?? DEFAULT_SOURCE_REPO);
}

/**
 * The front-end commit English was read from, or null when it cannot be known.
 *
 * Publish stamps this into completeness.json. On a PR it is the pinned SHA; on
 * main it is whatever front-end main was at that moment, which floats, and
 * recording it is the whole reason the float is acceptable. Null when the
 * checkout is a working copy with uncommitted changes to English, which is a
 * local-only state and says so rather than reporting a SHA that is not the truth.
 *
 * The front-end only. Publish serves nothing whose English comes from anywhere
 * else, so a second SHA would record a repo no published artifact was built from.
 */
export function englishSha() {
  const repo = englishRepo();
  try {
    const head = execFileSync("git", ["rev-parse", "HEAD"], { cwd: repo, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    const dirty = execFileSync("git", ["status", "--porcelain", "--", ...SOURCE_REPOS["front-end"].dirs], {
      cwd: repo,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    return dirty ? null : head;
  } catch {
    return null;
  }
}

/** Absolute path to one item's English original, inside its source repo's checkout. */
export function englishPath(typeId, slug) {
  return sourceRepoPath(repoFor(typeId), typeId, slug);
}

/** Every item of one type that English exists for. The REAL corpus, all of it. */
export function englishItems(typeId) {
  return discoverItems(repoFor(typeId), typeId);
}

/**
 * How many items of one type exist in English.
 *
 * This is completeness's denominator, and it is deliberately not the working
 * corpus below. Measuring completeness against what this repo has started asks
 * "have you finished what you started", which any locale satisfies by starting
 * one thing. The question that matters is "have you translated everything that
 * EXISTS", and the checkout is what knows that number.
 *
 * The one thing it is not measured against is an item corpus.json declares out
 * of scope. Those are not "everything that exists": they are English nobody is
 * expected to translate, and counting them would make completeness unreachable
 * by design rather than by omission. They drop out of the locale side too (see
 * `listItems`), so the fraction stays a comparison of like with like.
 *
 * An item excluded only for its BODY is still counted, because its frontmatter is
 * still expected. Its file has to exist and carry a translated title, so a locale
 * that has not written one is not complete.
 */
export function englishCorpusSize(typeId) {
  return englishItems(typeId).filter((item) => !isExcluded(typeId, item.slug)).length;
}

// ------------------------------------------------------------- the corpus --

/**
 * The working corpus for one type: what this repo is actually translating.
 *
 * Derived by comparing the two trees rather than recorded anywhere. An item is
 * in the corpus when English exists for it AND at least one target locale holds
 * a translation of it. That is exactly what the old sync manifest's tracked item
 * list held, except that it is recomputed, so it cannot fall out of step with
 * the files it describes.
 *
 * Bringing a new item in is deliberate: `stub` and `validate` resolve an
 * explicit --type/--slug against English directly, and the item is in the corpus
 * from the moment the first locale holds a file for it.
 */
export function corpusItems(typeId) {
  return partitionEnglish(typeId).inCorpus;
}

/**
 * English items of one type that no target locale has begun, and that no
 * exclusion accounts for.
 *
 * The complement of `corpusItems` within English, and the price of the corpus
 * rule: an item outside the corpus is outside every locale's fraction, so a type
 * nobody has started reads `0/0` and is indistinguishable from a type everybody
 * has finished. This is what a reporter says alongside the fraction so the two
 * states are told apart. It is a count of what exists and is untouched, never a
 * denominator: putting it in the fraction is the "have you translated everything
 * that exists" question, which `englishCorpusSize` and publish's completeness
 * record answer.
 */
export function unstartedItems(typeId) {
  return partitionEnglish(typeId).unstarted;
}

/** English's items for one type, split by whether the corpus rule admits them. */
function partitionEnglish(typeId) {
  const type = contentType(typeId);

  const held = new Set();
  for (const locale of TARGET_LOCALES) {
    for (const item of listItems(typeId, locale)) held.add(item.slug ?? "");
  }

  const inCorpus = [];
  const unstarted = [];
  for (const item of englishItems(typeId)) {
    const key = item.slug ?? "";
    if (isExcluded(typeId, item.slug)) continue;
    const resolved = { type: typeId, slug: item.slug, path: englishPath(typeId, item.slug), slugged: type.slugged };
    (held.has(key) ? inCorpus : unstarted).push(resolved);
  }
  return { inCorpus, unstarted };
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
    fail(`no English for ${typeId}${slug ? `/${slug}` : ""} at ${path.relative(repoFor(typeId), file)} in ${repoFor(typeId)}`);
  }
  return { type: typeId, slug: slug ?? null, path: file, slugged: contentType(typeId).slugged };
}

/**
 * Items in scope for a run: the corpus, or one explicit item.
 *
 * Every script that walks "everything English defines" goes through this, so the
 * corpus rule and the seed-a-new-item rule live in one place.
 *
 * `bootstrap` is how an UNSLUGGED type is named explicitly. A named --slug is
 * what brings a new slugged item into the corpus, and an unslugged type has no
 * slug to name, so before this it had no way in at all: `corpusItems` needs some
 * locale to hold the file already, and the only thing that creates the first one
 * is the run being asked for. A new unslugged catalog was therefore unstubbable,
 * and the first file for it had to be written by hand, which is exactly what stub
 * exists to stop. It stays opt-in and off by default, because the reason the
 * corpus rule exists is unchanged: a bare `stub all` must never sentinel-fill the
 * whole English tree into every locale.
 */
export function scopeItems(typeId, { slug, bootstrap = false } = {}) {
  if (!slug) {
    if (bootstrap && !contentType(typeId).slugged) return [englishItem(typeId, null)];
    return corpusItems(typeId);
  }
  // A slug filter cannot match a type that has no slugs, so it excludes them
  // rather than matching them all. `--slug=x` with no `--type` sweeps every
  // type, and the app catalog is not one of them.
  if (!contentType(typeId).slugged) return [];
  return [englishItem(typeId, slug)];
}
