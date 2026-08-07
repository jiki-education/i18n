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
// Concept pages are rendered here, to /static/concepts/<slug>/<locale>/content-<hash>.html,
// using @jiki.io/content-renderer. That is the same package the front-end's
// generate-concept-cache.js renders English with, and the pinned version is the
// byte-identity contract between the two: the filename IS the hash of the bytes,
// so HTML that differs by one character sits at a URL the front-end never asks
// for. The version used is recorded in dist/manifest.json.
//
// Exercise instructions are NOT an artifact here. The front-end caches them
// inside a per-language content-<hash>.json alongside that exercise's stub and
// solution, and stubs and solutions are code, which lives in the front-end and
// not in this repo. So instructions are still exported to dist/export/ for the
// front-end's generator to consume, put through the same prepare step the
// generator applies so the exported bytes are the cached bytes. See CLAUDE.md
// § "Prose publishing".

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
import { prepareInstructions, renderConcept, rendererVersion } from "./lib/prose.mjs";

const DIST = path.join(REPO_ROOT, "dist");

/** Write one artifact, hashed the front-end's way, with the guard in front of it. */
function emit(artifacts, r2Path, value) {
  return emitBytes(artifacts, r2Path, JSON.stringify(value));
}

/**
 * Write one artifact from bytes that are already final.
 *
 * Catalogs go through emit(), which serialises them; rendered HTML is already a
 * string and must not be JSON-encoded on the way past. Both hash exactly what
 * reaches disk, which is the only rule that matters: the filename is that hash.
 */
function emitBytes(artifacts, r2Path, content) {
  const hash = contentHash(content);
  const resolved = typeof r2Path === "function" ? r2Path(hash) : r2Path;
  const key = assertPublishableKey(resolved);

  const file = path.join(DIST, key);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  artifacts.push({ key, hash, bytes: content.length });
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

async function publishLocale(locale, { allowPartial, allowIncomplete }) {
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

  // --- concept pages, rendered to the bytes the front-end would have rendered --
  //
  // Only the Markdown BODY is rendered. Frontmatter is metadata about the file
  // (title, description, the en_md5 staleness stamp) and never reaches the HTML,
  // which is why this repo's own zero-dependency frontmatter parser is enough and
  // the renderer package takes a body rather than a file.
  manifest.concepts = {};
  for (const item of listItems("concept", locale)) {
    const { body } = parseFrontmatter(readText(item.path));
    const html = await renderConcept(body);
    manifest.concepts[item.slug] = emitBytes(
      artifacts,
      (hash) => CONTENT_TYPES.concept.r2(locale, item.slug, hash),
      html
    );
  }

  // --- exercise instructions, exported for the front-end's generator ----------
  //
  // Not an artifact from here: the front-end caches instructions inside a
  // per-language content-<hash>.json alongside that exercise's stub and solution,
  // and those are code, which lives in the front-end. So the file is exported
  // verbatim, frontmatter included, because its generator reads title and
  // description from there and then applies prepareInstructions itself.
  //
  // The body is checked against that prepare step rather than rewritten by it.
  // The step is idempotent, so a file it would change is one carrying authoring
  // tags a translator was never meant to receive, and saying so is more useful
  // than silently normalising it on the way out.
  let exported = 0;
  const instructions = contentType("exercise-instructions");
  for (const item of listItems("exercise-instructions", locale)) {
    const { body } = parseFrontmatter(readText(item.path));
    if ((await prepareInstructions(body)) !== body.trim()) {
      console.log(`  WARN ${item.path}: carries <define>/<literal> authoring tags, which translations should not`);
    }
    const to = path.join(DIST, "export", instructions.sourceRepoPath(locale, item.slug));
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(item.path, to);
    exported += 1;
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

async function main() {
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
    const result = await publishLocale(locale, {
      allowPartial: Boolean(args.flags["allow-partial"]),
      allowIncomplete: Boolean(args.flags["allow-incomplete"])
    });
    for (const artifact of result.artifacts) console.log(`  ${artifact.key}  (${artifact.bytes} bytes)`);
    all.push(...result.artifacts);
    manifests[locale] = result.manifest;
    exported += result.exported;
  }

  // The hash manifest. The front-end resolves a locale's catalog URL from a hash
  // it holds at build time (lib/generated/*-hashes.ts), so a locale published from
  // here is unreachable until the front-end learns its hashes. This file is the
  // hand-back: the workflow dispatches it to the front-end, which commits it.
  //
  // `renderer` is the version of @jiki.io/content-renderer that produced the
  // concept HTML. It is recorded because the failure it guards against is silent:
  // two publishers on different versions render different bytes, so a translated
  // page lands at a URL the front-end never computes, and the page simply does not
  // appear. Written down, that is a diff between two numbers. Not written down, it
  // is only reproducible by re-running both repos with whatever their dependencies
  // resolve to today, which is the state they were in when they disagreed.
  fs.writeFileSync(
    path.join(DIST, "manifest.json"),
    `${JSON.stringify(
      { generatedAt: new Date().toISOString(), renderer: await rendererVersion(), locales: manifests },
      null,
      2
    )}\n`
  );

  // Re-run the guard over the finished tree. Cheap, and it catches a key that
  // reached disk by a route that skipped emit().
  for (const file of walk(path.join(DIST, R2_PREFIX))) {
    assertPublishableKey(path.relative(DIST, file));
  }

  const plan = all
    .map((artifact) => path.dirname(artifact.key))
    .filter((dir, index, list) => list.indexOf(dir) === index)
    .map(
      (dir) =>
        `aws s3 sync dist/${dir} s3://${R2_BUCKET}/${dir} --endpoint-url ${R2_ENDPOINT} ` +
        `--cache-control 'public, max-age=31536000, immutable' --size-only`
    );
  fs.writeFileSync(path.join(DIST, "sync.sh"), `#!/usr/bin/env bash\nset -euo pipefail\n\n${plan.join("\n")}\n`, { mode: 0o755 });

  console.log(`\npublish: ${all.length} artifacts, ${exported} prose files exported, ${plan.length} sync commands in dist/sync.sh.`);

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

main().catch((error) => {
  if (error instanceof GuardViolation) fail(error.message);
  throw error;
});
