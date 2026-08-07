#!/usr/bin/env node
//
// publish — build the content-hashed artifacts and prepare the R2 sync.
//
// Usage:
//   node scripts/publish.mjs [<locale|all>] [--upload] [--out-dir=<path>]
//
// Examples:
//   node scripts/publish.mjs hu                     # build into dist/, print the plan
//   node scripts/publish.mjs all --upload           # ...and run the aws s3 sync
//   node scripts/publish.mjs all --out-dir=../front-end/app/public/static
//                                                   # ...write the same tree locally instead
//
// There are no flags that loosen what gets published. See "Nothing partial ships".
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
// ## Nothing partial ships, and there is no flag to say otherwise
//
// Two kinds of artifact can be incomplete, and neither is publishable:
//
//   - ASSEMBLED FROM A CORPUS. The app UI catalog, the merged curriculum copy
//     catalog and the exercise prose index are each built from a whole corpus
//     rather than one file, so a partial import produces an artifact with entries
//     missing. On R2 that is indistinguishable from a good one.
//   - STILL CARRYING THE SENTINEL. A catalog holding the untranslated sentinel
//     renders a visible replacement glyph to a learner.
//
// Both are SKIPPED, loudly, and the run carries on. Skipping is deliberate on
// both counts. Aborting would let one unfinished locale stop every finished one
// from publishing, and on a merge-triggered publish it would turn main red on
// most merges. A run with nothing shippable exits 0: a green no-op, not a
// failure.
//
// What there is no way to do is publish either anyway. This used to be a matter
// of how the script was invoked (--allow-partial, --allow-incomplete); it is now
// a property of the script, which is the only place a rule like this survives.
// That mirrors the English guard, which has never had an override.
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
// Exercise instructions ARE an artifact here, which they could not be while an
// exercise's cached content was one file holding instructions, stub and solution
// together: stubs and solutions are code, which lives in the front-end and not in
// this repo. The front-end now splits them along their real keys, prose by
// (slug, locale) and code by (slug, language), so this publishes the prose half
// plus the per-locale prose index that names it, and never touches the code half.
//
// Posts (blog, articles, guides) are rendered here too, with renderPost, the
// renderer package's second pipeline. Project episodes are not: their source
// layout does not fit this repo's (type, locale, slug) coordinates. See
// scripts/lib/content-types.mjs.
//
// Instructions are still ALSO exported to dist/export/ in the source repo's
// layout, for tooling that wants the authored file rather than the published
// bytes. See CLAUDE.md § "Prose publishing".

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
import {
  CONTENT_TYPES,
  FAMILY_TYPE_ID,
  contentType,
  listItems,
  localPath,
  resolveSourceRepo
} from "./lib/content-types.mjs";
import { mergeExerciseCatalogs } from "./lib/families.mjs";
import { contentHash, flatten, parseFrontmatter, readJson, readText } from "./lib/files.mjs";
import { findRepeatedBodies, isCopiedEnglish } from "./lib/checks.mjs";
import { GuardViolation, assertPublishableKey } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";
import {
  makeImageResolver,
  prepareInstructions,
  renderConcept,
  renderPostHtml,
  rendererVersion,
  warmRenderer
} from "./lib/prose.mjs";

// Where the tree is written. `dist/` for a publish; a front-end's
// public/static/ for a local dev build (--out-dir). Deliberately ONE generation
// path with two destinations rather than two code paths: the local tree is only
// worth having if it is the tree that would have been uploaded, byte for byte.
let DIST = path.join(REPO_ROOT, "dist");

/** The kinds of post that are published from here, in content-types.mjs order. */
const POST_TYPE_IDS = ["blog", "articles", "guides"];

/** Every markdown type, which is every type the untranslated-prose rules apply to. */
const PROSE_TYPE_IDS = ["concept", "exercise-instructions", ...POST_TYPE_IDS];

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

  const pointerKey = assertPublishableKey(pointerKeyFor(key));
  const pointer = `${JSON.stringify({ hash })}\n`;
  fs.writeFileSync(path.join(DIST, pointerKey), pointer);
  artifacts.push({ key: pointerKey, hash, bytes: pointer.length, pointer: true });

  return hash;
}

/**
 * Whether a catalog is free of the untranslated sentinel, and therefore servable.
 *
 * A catalog that still holds it is SKIPPED, loudly, and the run continues. There
 * is no flag to publish it anyway, and no flag to make this abort instead: one
 * unfinished locale must not stop every finished one from shipping.
 *
 * Returns false when the artifact must be skipped.
 */
function checkNoSentinels(label, value) {
  const stubbed = Object.entries(flatten(value)).filter(([, v]) => v === SENTINEL);
  if (stubbed.length === 0) return true;

  console.log(
    `  SKIPPED ${label}: ${stubbed.length} keys are still the untranslated sentinel "${SENTINEL}" ` +
      `(first: ${stubbed[0][0]}). The sentinel renders as a visible replacement glyph, so this ` +
      `catalog is not servable. Run \`node scripts/coverage.mjs\` to see what is left.`
  );
  return false;
}

async function publishLocale(locale, { exportSources }) {
  const artifacts = [];
  const manifest = {};
  const sliced = new Set(readSlicedTypes());
  // --- what is actually translated -------------------------------------------
  //
  // Prose has THREE untranslated conventions and none of them is a missing file.
  // All three are classified here, once, before anything is emitted:
  //
  //   1. THE SENTINEL. Machine-readable, and handled on the catalog path rather
  //      than here, since prose bodies do not carry it.
  //   2. COPIED ENGLISH. The body is byte-identical to English. Exact, and the
  //      most dangerous of the three: it satisfies every structural check
  //      trivially, carries a valid staleness stamp, and would publish as a
  //      perfectly healthy artifact serving English from a translated URL.
  //   3. A TRANSLATION NOTICE. Real translated frontmatter over a one-line body
  //      saying the page is not translated yet. Nothing in the file marks it, so
  //      it is caught corpus-wide by findRepeatedBodies: one body reused across
  //      items whose English differs cannot be a translation of all of them.
  //
  // Every one of them is SKIPPED and counted, never published, with no flag to
  // say otherwise. Publishing any of them serves English, or an apology, from a
  // URL the reader reached by asking for their own language.
  const prose = new Map();
  const untranslated = [];

  for (const typeId of PROSE_TYPE_IDS) {
    for (const item of listItems(typeId, locale)) {
      const key = `${typeId}/${item.slug}`;
      const { data, body } = parseFrontmatter(readText(item.path));
      const englishPath = localPath(typeId, SOURCE_LOCALE, item.slug);
      const englishBody = fs.existsSync(englishPath) ? parseFrontmatter(readText(englishPath)).body : "";
      prose.set(key, { key, data, body, englishBody, item });
    }
  }

  const repeated = findRepeatedBodies([...prose.values()].map(({ key, englishBody, body }) => ({ key, englishBody, targetBody: body })));

  for (const entry of prose.values()) {
    if (isCopiedEnglish(entry.englishBody, entry.body)) entry.untranslated = "identical to English";
    else if (repeated.has(entry.key)) entry.untranslated = "a repeated placeholder body";
    if (entry.untranslated) untranslated.push({ key: entry.key, reason: entry.untranslated });
  }

  if (untranslated.length > 0) {
    const byReason = {};
    for (const { reason } of untranslated) byReason[reason] = (byReason[reason] ?? 0) + 1;
    console.log(
      `  SKIPPED ${untranslated.length} untranslated prose item(s): ` +
        Object.entries(byReason)
          .map(([reason, count]) => `${count} ${reason}`)
          .join(", ")
    );
    for (const { key, reason } of untranslated) console.log(`    ${key} (${reason})`);
  }

  /** One markdown item's translated body, or null when there is nothing to ship. */
  const translatedBody = (typeId, item) => {
    const entry = prose.get(`${typeId}/${item.slug}`);
    return entry && !entry.untranslated ? entry : null;
  };

  // --- app UI catalog -------------------------------------------------------
  const appPath = localPath("app-messages", locale);
  if (fs.existsSync(appPath)) {
    if (sliced.has("app-messages")) {
      console.log(`  SKIPPED app catalog: imported as a namespace slice, not the whole tree`);
    } else {
      const catalog = readJson(appPath);
      if (checkNoSentinels(`${locale} app catalog`, catalog)) {
        manifest.app = emit(artifacts, (hash) => CONTENT_TYPES["app-messages"].r2(locale, null, hash), catalog);
      }
    }
  }

  // --- badges ---------------------------------------------------------------
  const badgesPath = localPath("badges", locale);
  if (fs.existsSync(badgesPath)) {
    const catalog = readJson(badgesPath);
    if (checkNoSentinels(`${locale} badge catalog`, catalog)) {
      manifest.badges = emit(artifacts, (hash) => CONTENT_TYPES.badges.r2(locale, null, hash), catalog);
    }
  }

  // --- exercise message catalogs, one artifact per exercise -----------------
  manifest.exercises = {};
  for (const { slug, catalog } of exerciseCatalogs(locale)) {
    if (!checkNoSentinels(`${locale} exercise catalog ${slug}`, catalog)) continue;
    manifest.exercises[slug] = emit(artifacts, (hash) => CONTENT_TYPES["exercise-messages"].r2(locale, slug, hash), catalog);
  }

  // --- merged curriculum copy ----------------------------------------------
  // ONE flat catalog keyed by slug: every exercise's frontmatter title +
  // description, merged with the video lessons. Exercises and videos share one
  // collision-free slug namespace, so consumers resolve copy by slug alone and
  // never branch on what they are rendering. A collision is a hard error, exactly
  // as in the front-end generator.
  const copy = {};
  const instructionItems = listItems("exercise-instructions", locale);
  for (const item of instructionItems) {
    const { data } = parseFrontmatter(readText(item.path));
    if (!data.title) fail(`${item.path}: no title in frontmatter`);
    copy[item.slug] = { title: data.title, description: data.description || "" };
  }

  // A partial exercise corpus makes two artifacts unshippable, and only those
  // two: the merged curriculum copy and the exercise prose index. Both are
  // assembled from every exercise, so a gap in either is a lesson that renders
  // its slug or an exercise that will not load at all. Per-exercise artifacts are
  // unaffected, so they still publish.
  const exerciseCorpus = sourceCorpusSize("exercise-instructions");
  const translatedExercises = instructionItems.filter((item) => translatedBody("exercise-instructions", item)).length;
  const exercisesArePartial = exerciseCorpus === null || translatedExercises !== exerciseCorpus;
  if (exercisesArePartial) {
    console.log(
      `  SKIPPED curriculum copy and exercise prose index: ` +
        (exerciseCorpus === null
          ? `the sync manifest records no source corpus size, so completeness cannot be established. ` +
            `Re-run sync-source.mjs against a front-end checkout.`
          : `assembled from a partial exercise corpus (${translatedExercises} translated of ${exerciseCorpus} in the source repo)`)
    );
  }

  let videosShippable = true;
  const videoPath = localPath("video-lessons", locale);
  if (fs.existsSync(videoPath)) {
    const videos = readJson(videoPath);
    videosShippable = checkNoSentinels(`${locale} video lesson catalog`, videos);
    if (videosShippable) {
      for (const [slug, entry] of Object.entries(videos)) {
        if (slug in copy) fail(`slug "${slug}" is both an exercise and a video lesson (locale ${locale}); the namespace must stay collision-free`);
        copy[slug] = entry;
      }
    }
  }
  if (Object.keys(copy).length > 0 && !exercisesArePartial && videosShippable) {
    // Sorted, so the hash moves only when the copy does.
    const sorted = Object.fromEntries(Object.keys(copy).sort().map((slug) => [slug, copy[slug]]));
    manifest.curriculum = emit(artifacts, (hash) => `/static/i18n/curriculum/${locale}/messages-${hash}.json`, sorted);
  }

  // --- concept pages, rendered to the bytes the front-end would have rendered --
  //
  // Only the Markdown BODY is rendered. Frontmatter is metadata about the file
  // (title, description, the en_md5 staleness stamp) and never reaches the HTML,
  // which is why this repo's own zero-dependency frontmatter parser is enough and
  // the renderer package takes a body rather than a file.
  manifest.concepts = {};
  for (const item of listItems("concept", locale)) {
    const translated = translatedBody("concept", item);
    if (!translated) continue;
    const { body } = translated;

    // A CATEGORY concept (arrays-group, loops-group, ...) is a heading in the
    // concept tree, not a page. It carries a title and description and no body,
    // and the front-end's generator renders no HTML for it at all. Publishing one
    // from here would put an empty document at a URL nothing ever requests.
    //
    // The test is the empty body rather than the `category` flag because that
    // flag lives in a config.json this repo does not mirror. The two agree today
    // because a category concept is exactly a concept with no body; if one ever
    // gains one, the front-end warns and ignores it, and this would publish it.
    if (body.trim().length === 0) continue;

    const html = await renderConcept(body);
    manifest.concepts[item.slug] = emitBytes(
      artifacts,
      (hash) => CONTENT_TYPES.concept.r2(locale, item.slug, hash),
      html
    );
  }

  // --- posts: blog, articles and guides, rendered to HTML ---------------------
  //
  // The second renderer pipeline, and the only one here that needs image bytes.
  // The resolver takes a source-repo checkout lazily, so a corpus whose posts
  // reference no images publishes without one.
  const resolveImage = makeImageResolver(() => resolveSourceRepo());
  for (const typeId of POST_TYPE_IDS) {
    manifest[typeId] = {};
    for (const item of listItems(typeId, locale)) {
      const translated = translatedBody(typeId, item);
      if (!translated) continue;
      const { body } = translated;
      manifest[typeId][item.slug] = emitBytes(
        artifacts,
        (hash) => CONTENT_TYPES[typeId].r2(locale, item.slug, hash),
        await renderPostHtml(body, resolveImage)
      );
    }
  }

  // --- exercise instructions: one prose artifact each, plus the index ---------
  //
  // The published bytes are what the front-end caches, which is the PREPARED
  // body: trimmed, with the <define>/<literal> authoring tags stripped. Running
  // the same prepare step here rather than assuming translations are already
  // clean is what makes the bytes match; a warning is still worth printing,
  // because a translated file carrying those tags means a translator was handed
  // markup they should never have seen.
  //
  // The index is what names every prose artifact, and it carries the title and
  // description too, so the front-end has an exercise's display copy before it
  // fetches anything. It deliberately holds no code hashes: this repo has no
  // code, and an artifact one publisher owns must never need a fact from the
  // other.
  manifest.exerciseProse = {};
  const proseIndex = [];
  for (const item of instructionItems) {
    const translated = translatedBody("exercise-instructions", item);
    if (!translated) continue;
    const { data, body } = translated;
    const prepared = await prepareInstructions(body);
    if (prepared !== body.trim()) {
      console.log(`  WARN ${item.path}: carries <define>/<literal> authoring tags, which translations should not`);
    }
    const hash = emit(
      artifacts,
      (h) => CONTENT_TYPES["exercise-instructions"].r2(locale, item.slug, h),
      { instructions: prepared }
    );
    manifest.exerciseProse[item.slug] = hash;
    proseIndex.push({ slug: item.slug, title: data.title, description: data.description || "", proseHash: hash });
  }

  if (proseIndex.length > 0 && !exercisesArePartial) {
    // Sorted by slug, exactly as the front-end's generator sorts it: the index is
    // one JSON array and its key order is part of its bytes.
    proseIndex.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
    manifest.exerciseIndex = emit(artifacts, (hash) => `/static/exercises/${locale}/index-${hash}.json`, proseIndex);
  }

  // --- exercise instructions, also exported in the source repo's layout -------
  //
  // The authored file, frontmatter included, for tooling that wants the source
  // rather than the published bytes. Only for a publish: under --out-dir the
  // destination is a front-end's public/, where an export/ tree would be a
  // directory of Markdown served to the internet.
  let exported = 0;
  const instructions = contentType("exercise-instructions");
  for (const item of exportSources ? instructionItems : []) {
    const to = path.join(DIST, "export", instructions.sourceRepoPath(locale, item.slug));
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(item.path, to);
    exported += 1;
  }

  return { artifacts, manifest, exported, untranslated: untranslated.length };
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

/**
 * How many items of one type exist in the REAL source repo, or null when the
 * manifest predates this being recorded.
 *
 * Not `listItems(..., SOURCE_LOCALE)`, which counts the MIRROR. The mirror is a
 * subset of the source corpus by design, so measuring completeness against it
 * asks "have you translated everything you imported", which any locale can
 * satisfy by importing one exercise. The question that matters is "have you
 * translated everything that EXISTS", and only the front-end knows that number,
 * so sync-source records it.
 *
 * Null is deliberately not treated as complete. A denominator this repo cannot
 * establish means the artifact is skipped, because the alternative is publishing
 * a partial index that looks whole.
 */
const sourceCorpusSize = (typeId) => readManifest().corpus?.[typeId] ?? null;

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

  // --out-dir writes the same tree somewhere else, for a local dev build. The
  // R2_PREFIX ("static") is part of every key, so an --out-dir of
  // `<front-end>/app/public` lands exactly on `public/static/...`.
  const outDir = args.flags["out-dir"];
  if (typeof outDir === "string") DIST = path.resolve(process.cwd(), outDir);

  if (outDir === undefined) {
    // A publish owns dist/ entirely, so it starts from empty. An --out-dir does
    // NOT: it is writing into a tree the front-end's own generators also write,
    // and wiping that would delete every English artifact. The keys here are
    // content-hashed and locale-scoped, so writing over an existing tree can only
    // add or replace this repo's own objects.
    if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });

  // Loaded up front rather than on first use, because the image resolver inside
  // a post render has to be synchronous.
  await warmRenderer();

  const all = [];
  const manifests = {};
  let exported = 0;
  let untranslated = 0;

  for (const locale of locales) {
    console.log(`\n${locale}:`);
    const result = await publishLocale(locale, { exportSources: outDir === undefined });
    for (const artifact of result.artifacts) console.log(`  ${artifact.key}  (${artifact.bytes} bytes)`);
    all.push(...result.artifacts);
    manifests[locale] = result.manifest;
    exported += result.exported;
    untranslated += result.untranslated;
  }

  // The hash manifest, for humans and for CI. The front-end no longer needs it
  // to reach a locale: it resolves non-English hashes from the pointers written
  // above. This is the record of what a run published, so a deploy can be
  // audited and a bad publish identified by hash.
  //
  // `renderer` is the version of @jiki.io/content-renderer that produced the
  // concept HTML. It is recorded because the failure it guards against is silent:
  // two publishers on different versions render different bytes, so a translated
  // page lands at a URL the front-end never computes, and the page simply does not
  // appear. Written down, that is a diff between two numbers. Not written down, it
  // is only reproducible by re-running both repos with whatever their dependencies
  // resolve to today, which is the state they were in when they disagreed.
  // Only for a publish. An --out-dir is a front-end's public/static tree, and a
  // manifest.json or a sync.sh dropped in there would be served to the internet.
  if (outDir === undefined) {
    fs.writeFileSync(
      path.join(DIST, "manifest.json"),
      `${JSON.stringify(
        { generatedAt: new Date().toISOString(), renderer: await rendererVersion(), locales: manifests },
        null,
        2
      )}\n`
    );
  }

  // Re-run the guard over the finished tree. Cheap, and it catches a key that
  // reached disk by a route that skipped emit().
  //
  // Only for a publish, which owns dist/ outright and started it empty, so
  // everything in it is something this run wrote. An --out-dir is a front-end's
  // public/static, which is FULL of English this repo did not write and must not
  // be blamed for: the guard's question is "did this repo write English", and
  // over a shared tree the walk answers a different question and always says yes.
  // Every key this run emitted was guarded at emit() either way.
  if (outDir === undefined) {
    for (const file of walk(path.join(DIST, R2_PREFIX))) {
      assertPublishableKey(path.relative(DIST, file));
    }
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

  const plan = outDir !== undefined ? [] : [
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
  if (outDir === undefined) {
    fs.writeFileSync(path.join(DIST, "sync.sh"), `#!/usr/bin/env bash\nset -euo pipefail\n\n${plan.join("\n")}\n`, { mode: 0o755 });
  }

  const pointerCount = all.filter((artifact) => artifact.pointer).length;
  const artifactCount = all.length - pointerCount;

  if (outDir !== undefined) {
    console.log(`\npublish: ${artifactCount} artifacts and ${pointerCount} pointers written to ${DIST}.`);
    return;
  }

  console.log(
    `\npublish: ${artifactCount} artifacts, ${pointerCount} pointers, ` +
      `${exported} prose files exported, ${untranslated} untranslated prose items skipped, ` +
      `${plan.length} sync commands in dist/sync.sh.`
  );

  // Nothing shippable is a green no-op. Every locale being skipped is the
  // expected state of a partly translated corpus, and a merge that produces it
  // must not turn main red.
  if (artifactCount === 0) {
    console.log("Nothing shippable in any locale. Not an error; nothing to upload.");
    return;
  }

  if (args.flags.upload) {
    console.log("\nUploading...\n");
    execFileSync("bash", [path.join(DIST, "sync.sh")], { cwd: REPO_ROOT, stdio: "inherit" });
  } else {
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
