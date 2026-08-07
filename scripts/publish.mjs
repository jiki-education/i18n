#!/usr/bin/env node
//
// publish — build the content-hashed artifacts and prepare the R2 sync.
//
// Usage:
//   node scripts/publish.mjs [<locale|all>] [--allow-partial] [--allow-incomplete] [--upload]
//
// Examples:
//   node scripts/publish.mjs hu                # build into dist/, print the plan
//   node scripts/publish.mjs all --upload      # ...and run the aws s3 sync
//
// ## The path convention is the front-end's, byte for byte
//
// Artifact paths and the hash come from app/lib/assets-paths.ts and
// app/scripts/lib/cache-utils.js in the front-end: every dimension is a
// directory, the leaf is `{kind}-{hash}.{ext}`, and the hash is the first 12 hex
// chars of the SHA-256 of the exact bytes written. The content hashed is
// `JSON.stringify(parsed)` (compact, no whitespace), so source formatting cannot
// move a hash. Those two sides must stay in lockstep; scripts/lib/content-types.mjs
// is where this half of it lives.
//
// ## Pointers, and why they exist
//
// Beside every immutable artifact this writes a mutable pointer at a stable
// path, `.../current.json` holding `{ "hash": "..." }`. The front-end resolves a
// non-English catalog URL by reading that pointer at runtime, so publishing a
// translation is rewriting one small object, not rebuilding and redeploying the
// worker. Each pointer object has exactly ONE writer, so the two repos cannot
// lose each other's updates: this repo owns every non-English pointer, and
// English has none at all (see the English guard below).
//
// ## The English guard
//
// Every key goes through assertPublishableKey() before it is written, and again
// before it is uploaded. A key with an English locale segment is a HARD FAIL that
// aborts the whole run, never a skipped file: a publish that quietly dropped
// English would be indistinguishable from a successful one.
//
// This replaces credential scoping, which cannot express the rule. The key that
// must not be written (`static/i18n/app/en/...`) sits INSIDE the prefix this repo
// legitimately writes (`static/i18n/app/`), so no bucket policy can separate them.
//
// The front-end publishes English itself, atomically with its worker deploy, so
// the code and the copy it renders go live together.
//
// ## Partial catalogs
//
// Two artifacts are assembled from a whole corpus rather than one file: the app
// UI catalog (the full 1300-key tree) and the merged curriculum copy catalog
// (every exercise's frontmatter plus every video lesson). Publishing either from
// a partial import would serve a catalog with keys missing, so this refuses
// unless --allow-partial is passed. That is the expected state while this repo
// carries a seed corpus rather than the full one.
//
// Separately, a catalog still holding the untranslated sentinel is not servable
// and is refused. --allow-incomplete downgrades that one refusal to a loud skip,
// for a dry run over a partly translated corpus. Neither flag touches the English
// guard, which has no override.
//
// ## Exercise families
//
// An exercise may belong to an exercise-category, whose base catalog holds the
// strings every member of the family shares. The front-end's generator
// deep-merges that base into each member's pack, so this does too, and the
// published exercise catalog is self-contained. See exerciseCatalogs() below.
//
// ## Prose
//
// Concept pages and exercise instructions are served as rendered HTML
// (/static/concepts/<slug>/<locale>/content-<hash>.html), produced by the
// curriculum renderer, not here. This script writes them into dist/export/ in the
// source repos' own layout so that renderer can consume them unchanged. See
// CLAUDE.md § "Prose publishing".

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  R2_BUCKET,
  R2_ENDPOINT,
  R2_PREFIX,
  REPO_ROOT,
  SENTINEL,
  SOURCE_LOCALE,
  TARGET_LOCALES,
  assertTargetLocale,
  fail
} from "./lib/constants.mjs";
import { CONTENT_TYPES, FAMILY_TYPE_ID, contentType, listItems, localPath } from "./lib/content-types.mjs";
import { mergeExerciseCatalogs } from "./lib/families.mjs";
import { contentHash, flatten, parseFrontmatter, readJson, readText } from "./lib/files.mjs";
import { GuardViolation, assertPublishableKey } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";

const DIST = path.join(REPO_ROOT, "dist");

/** The mutable pointer that sits beside an artifact: `.../messages-<hash>.json` -> `.../current.json`. */
const pointerKeyFor = (artifactKey) => `${path.dirname(artifactKey)}/current.json`;

/**
 * Write one artifact, hashed the front-end's way, with the guard in front of it.
 *
 * Every artifact gets a POINTER written beside it: a tiny mutable `current.json`
 * holding `{ "hash": "<this artifact's hash>" }` at a stable URL. The artifact
 * stays immutable and content-addressed; the pointer is what moves.
 *
 * That indirection is what makes this repo independent of the front-end's
 * release cycle. Without it the front-end can only reach an artifact whose hash
 * was compiled into the worker at build time, so a locale published here is
 * invisible until the front-end rebuilds and redeploys. With it, rewriting one
 * ~24-byte object publishes a translation.
 *
 * The English guard applies to the pointer exactly as it does to the artifact,
 * so this can no more overwrite English's pointer than English's catalog. In
 * practice English has no pointer at all: the front-end compiles its hash in and
 * ships the catalog with the deploy, so its render path never looks one up.
 */
function emit(artifacts, r2Path, value) {
  const content = JSON.stringify(value);
  const hash = contentHash(content);
  const resolved = typeof r2Path === "function" ? r2Path(hash) : r2Path;
  const key = assertPublishableKey(resolved);

  const file = path.join(DIST, key);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  artifacts.push({ key, hash, bytes: content.length });

  const pointerKey = assertPublishableKey(pointerKeyFor(key));
  const pointer = `${JSON.stringify({ hash })}\n`;
  fs.writeFileSync(path.join(DIST, pointerKey), pointer);
  artifacts.push({ key: pointerKey, hash, bytes: pointer.length, pointer: true });

  return hash;
}

/**
 * Refuse to serve a catalog that still contains the untranslated sentinel.
 *
 * `--allow-incomplete` downgrades this to a loud skip, for a dry run that wants
 * to exercise the rest of the pipeline on a partly translated corpus. It does
 * NOT touch the English guard, which has no override at all.
 *
 * Returns false when the artifact must be skipped.
 */
function checkNoSentinels(label, value, allowIncomplete) {
  const stubbed = Object.entries(flatten(value)).filter(([, v]) => v === SENTINEL);
  if (stubbed.length === 0) return true;

  const message =
    `${label}: ${stubbed.length} keys are still the untranslated sentinel "${SENTINEL}" ` +
    `(first: ${stubbed[0][0]}). The sentinel renders as a visible replacement glyph, so this ` +
    `catalog is not servable. Run \`node scripts/coverage.mjs\` to see what is left.`;

  if (!allowIncomplete) fail(message);
  console.log(`  SKIPPED ${message}`);
  return false;
}

function publishLocale(locale, { allowPartial, allowIncomplete }) {
  const artifacts = [];
  const manifest = {};
  const sliced = new Set(readSlicedTypes());

  // --- app UI catalog -------------------------------------------------------
  const appPath = localPath("app-messages", locale);
  if (fs.existsSync(appPath)) {
    if (sliced.has("app-messages") && !allowPartial) {
      console.log(`  skipped app catalog: imported as a namespace slice, not the whole tree (--allow-partial to publish anyway)`);
    } else {
      const catalog = readJson(appPath);
      if (checkNoSentinels(`${locale} app catalog`, catalog, allowIncomplete)) {
        manifest.app = emit(artifacts, (hash) => CONTENT_TYPES["app-messages"].r2(locale, null, hash), catalog);
      }
    }
  }

  // --- badges ---------------------------------------------------------------
  const badgesPath = localPath("badges", locale);
  if (fs.existsSync(badgesPath)) {
    const catalog = readJson(badgesPath);
    if (checkNoSentinels(`${locale} badge catalog`, catalog, allowIncomplete)) {
      manifest.badges = emit(artifacts, (hash) => CONTENT_TYPES.badges.r2(locale, null, hash), catalog);
    }
  }

  // --- exercise message catalogs, one artifact per exercise -----------------
  manifest.exercises = {};
  for (const { slug, catalog } of exerciseCatalogs(locale)) {
    if (!checkNoSentinels(`${locale} exercise catalog ${slug}`, catalog, allowIncomplete)) continue;
    manifest.exercises[slug] = emit(artifacts, (hash) => CONTENT_TYPES["exercise-messages"].r2(locale, slug, hash), catalog);
  }

  // --- merged curriculum copy ----------------------------------------------
  // ONE flat catalog keyed by slug: every exercise's frontmatter title +
  // description, merged with the video lessons. Exercises and videos share one
  // collision-free slug namespace, so consumers resolve copy by slug alone and
  // never branch on what they are rendering. A collision is a hard error, exactly
  // as in the front-end generator.
  const copy = {};
  for (const item of listItems("exercise-instructions", locale)) {
    const { data } = parseFrontmatter(readText(item.path));
    if (!data.title) fail(`${item.path}: no title in frontmatter`);
    copy[item.slug] = { title: data.title, description: data.description || "" };
  }
  const videoPath = localPath("video-lessons", locale);
  if (fs.existsSync(videoPath)) {
    const videos = readJson(videoPath);
    if (!checkNoSentinels(`${locale} video lesson catalog`, videos, allowIncomplete)) return { artifacts, manifest, exported: 0 };
    for (const [slug, entry] of Object.entries(videos)) {
      if (slug in copy) fail(`slug "${slug}" is both an exercise and a video lesson (locale ${locale}); the namespace must stay collision-free`);
      copy[slug] = entry;
    }
  }
  if (Object.keys(copy).length > 0) {
    const isPartial = countSourceExercises() !== Object.keys(copy).filter((slug) => !isVideoSlug(slug, locale)).length;
    if (isPartial && !allowPartial) {
      console.log(`  skipped curriculum copy: assembled from a partial exercise corpus (--allow-partial to publish anyway)`);
    } else {
      // Sorted, so the hash moves only when the copy does.
      const sorted = Object.fromEntries(Object.keys(copy).sort().map((slug) => [slug, copy[slug]]));
      manifest.curriculum = emit(artifacts, (hash) => `/static/i18n/curriculum/${locale}/messages-${hash}.json`, sorted);
    }
  }

  // --- prose, exported for the curriculum renderer ---------------------------
  let exported = 0;
  for (const typeId of ["concept", "exercise-instructions"]) {
    const type = contentType(typeId);
    for (const item of listItems(typeId, locale)) {
      const to = path.join(DIST, "export", type.sourceRepoPath(locale, item.slug));
      fs.mkdirSync(path.dirname(to), { recursive: true });
      fs.copyFileSync(item.path, to);
      exported += 1;
    }
  }

  return { artifacts, manifest, exported };
}

/**
 * Every exercise message catalog to publish for one locale, already merged with
 * its exercise family's base catalog. See scripts/lib/families.mjs for what the
 * merge is and why.
 *
 * This half is the disk half: which family each exercise belongs to comes from
 * the sync manifest, because it is derived from the exercise's TypeScript
 * imports and this repo holds no TypeScript. An exercise the manifest has no
 * record for is a HARD FAIL rather than an unmerged publish: a catalog missing
 * its inherited keys renders raw key names like `errors.hitWall` to a learner,
 * and on R2 it would look exactly like a good one.
 */
function exerciseCatalogs(locale) {
  const families = readManifest().families ?? {};
  const own = new Map(listItems("exercise-messages", locale).map((item) => [item.slug, readJson(item.path)]));

  const unrecorded = [...own.keys()].filter((slug) => !(slug in families));
  if (unrecorded.length > 0) {
    fail(
      `no family record for ${unrecorded.length} exercise(s) (first: ${unrecorded[0]}). ` +
        `Publishing them would under-merge any exercise-category base catalog. ` +
        `Run \`node scripts/sync-source.mjs\` against a front-end checkout to record them.`
    );
  }

  const bases = new Map();
  const baseFor = (family) => {
    if (!bases.has(family)) {
      const file = localPath(FAMILY_TYPE_ID, locale, family);
      bases.set(family, fs.existsSync(file) ? readJson(file) : null);
    }
    return bases.get(family);
  };

  return mergeExerciseCatalogs({ families, own, baseFor });
}

const isVideoSlug = (slug, locale) => {
  const file = localPath("video-lessons", locale);
  return fs.existsSync(file) && slug in readJson(file);
};

const countSourceExercises = () => listItems("exercise-instructions", SOURCE_LOCALE).length;

/**
 * The sync manifest, which publish reads for two things English defines: which
 * catalogs were imported as namespace slices, and which family each exercise
 * belongs to. Both are written by sync-source.mjs, so publish needs no front-end
 * checkout of its own.
 */
function readManifest() {
  const file = path.join(REPO_ROOT, "locales", SOURCE_LOCALE, ".manifest.json");
  return fs.existsSync(file) ? JSON.parse(readText(file)) : { items: [], families: {} };
}

function readSlicedTypes() {
  return readManifest().items.filter((item) => item.namespaces).map((item) => item.type);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0] ?? "all";
  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);

  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  fs.mkdirSync(DIST, { recursive: true });

  const all = [];
  const manifests = {};
  let exported = 0;

  for (const locale of locales) {
    console.log(`\n${locale}:`);
    const result = publishLocale(locale, {
      allowPartial: Boolean(args.flags["allow-partial"]),
      allowIncomplete: Boolean(args.flags["allow-incomplete"])
    });
    for (const artifact of result.artifacts) console.log(`  ${artifact.key}  (${artifact.bytes} bytes)`);
    all.push(...result.artifacts);
    manifests[locale] = result.manifest;
    exported += result.exported;
  }

  // The hash manifest, for humans and for CI. The front-end no longer needs it
  // to reach a locale: it resolves non-English hashes from the pointers written
  // above. This is the record of what a run published, so a deploy can be
  // audited and a bad publish identified by hash.
  fs.writeFileSync(
    path.join(DIST, "manifest.json"),
    `${JSON.stringify({ generatedAt: new Date().toISOString(), locales: manifests }, null, 2)}\n`
  );

  // Re-run the guard over the finished tree. Cheap, and it catches a key that
  // reached disk by a route that skipped emit().
  for (const file of walk(path.join(DIST, R2_PREFIX))) {
    assertPublishableKey(path.relative(DIST, file));
  }

  // Two kinds of object, two sets of headers, and two different commands.
  //
  // The hashed artifacts are immutable, so they sync with a year-long TTL and
  // `--size-only` (their name already encodes their content).
  //
  // The pointers are the opposite in every respect. They are copied, never
  // synced: `--size-only` compares byte counts, and one hash is exactly as long
  // as another, so a sync would silently skip the single object whose whole job
  // is to change. And they carry a short TTL plus a long
  // stale-while-revalidate, so the steady state is an edge cache hit, a
  // republish propagates in about a minute, and a slow origin is never on the
  // critical path of a render.
  //
  // The artifact always lands before the pointer that names it, so a reader can
  // never follow a pointer to an object that is not there yet.
  const dirs = all
    .filter((artifact) => !artifact.pointer)
    .map((artifact) => path.dirname(artifact.key))
    .filter((dir, index, list) => list.indexOf(dir) === index);

  const plan = [
    ...dirs.map(
      (dir) =>
        `aws s3 sync dist/${dir} s3://${R2_BUCKET}/${dir} --endpoint-url ${R2_ENDPOINT} ` +
        `--cache-control 'public, max-age=31536000, immutable' --size-only --exclude 'current.json'`
    ),
    ...all
      .filter((artifact) => artifact.pointer)
      .map(
        (artifact) =>
          `aws s3 cp dist/${artifact.key} s3://${R2_BUCKET}/${artifact.key} --endpoint-url ${R2_ENDPOINT} ` +
          `--cache-control 'public, max-age=60, stale-while-revalidate=86400'`
      )
  ];
  fs.writeFileSync(path.join(DIST, "sync.sh"), `#!/usr/bin/env bash\nset -euo pipefail\n\n${plan.join("\n")}\n`, { mode: 0o755 });

  const pointerCount = all.filter((artifact) => artifact.pointer).length;
  console.log(
    `\npublish: ${all.length - pointerCount} artifacts, ${pointerCount} pointers, ` +
      `${exported} prose files exported, ${plan.length} sync commands in dist/sync.sh.`
  );

  if (args.flags.upload) {
    console.log("\nUploading...\n");
    execFileSync("bash", [path.join(DIST, "sync.sh")], { cwd: REPO_ROOT, stdio: "inherit" });
  } else if (all.length > 0) {
    console.log("Nothing uploaded. Re-run with --upload, or run dist/sync.sh.");
  }
}

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

try {
  main();
} catch (error) {
  if (error instanceof GuardViolation) fail(error.message);
  throw error;
}
