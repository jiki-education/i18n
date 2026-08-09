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
// Posts are rendered here too, with renderPost, the renderer package's second
// pipeline. That includes project episodes: their UUID directory is a
// namespacing device, not a different coordinate system, so their slug is simply
// two parts rather than one. See scripts/lib/content-types.mjs.
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
  TARGET_LOCALES,
  assertTargetLocale,
  fail
} from "./lib/constants.mjs";
import {
  CONTENT_TYPES,
  FAMILY_TYPE_ID,
  contentType,
  deriveFamily,
  listItems,
  localPath
} from "./lib/content-types.mjs";
import { corpusItems, englishCorpusSize, englishPath, englishRepo, englishSha } from "./lib/english.mjs";
import { mergeExerciseCatalogs } from "./lib/families.mjs";
import { contentHash, flatten, parseFrontmatter, readJson, readText } from "./lib/files.mjs";
import { findRepeatedBodies, isCopiedEnglish } from "./lib/checks.mjs";
import { GuardViolation, assertPublishableKey } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";
import {
  buildSearch,
  makeImageResolver,
  prepareInstructions,
  renderConcept,
  renderPostHtml,
  rendererVersion,
  estimateReadingTime,
  parseFrontmatterShared,
  warmRenderer
} from "./lib/prose.mjs";

// Where the tree is written. `dist/` for a publish; a front-end's
// public/static/ for a local dev build (--out-dir). Deliberately ONE generation
// path with two destinations rather than two code paths: the local tree is only
// worth having if it is the tree that would have been uploaded, byte for byte.
let DIST = path.join(REPO_ROOT, "dist");

/**
 * Every post type published from here, in content-types.mjs order.
 *
 * Project episodes are in this list like anything else. Their slug is two parts
 * ("<project>/<uuid>") rather than one, and that is the whole of the difference:
 * content-types.mjs expresses it with slugDepth, so nothing downstream special
 * cases them.
 */
const POST_TYPE_IDS = ["blog", "articles", "guides", "project-episodes"];

/** Every markdown type, which is every type the untranslated-prose rules apply to. */
const PROSE_TYPE_IDS = ["concept", "exercise-instructions", ...POST_TYPE_IDS];

// Video subtitles are deliberately not published from here, and their content
// type carries `r2: null` to say so. A translated subtitle track is uploaded to
// Mux and served with the video it belongs to, by the `videos` repo's own
// `bin/attach-subtitles`, so there is no R2 artifact to build and no pointer to
// write. Publishing a copy to R2 would be a second home for bytes Mux already
// serves, and nothing would read it.

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
 * Count a catalog's remaining untranslated sentinels, and record them.
 *
 * This used to REFUSE the artifact. It no longer does, and the change is the
 * point rather than a relaxation. Publishing and serving are different
 * questions: R2 carries whatever is on main, so a translator can see work in
 * progress on staging, and a catalog full of replacement glyphs is exactly the
 * state someone reviewing it needs to look at. Refusing to publish it made the
 * WIP invisible in the only place it could be reviewed.
 *
 * Strictness moved to serving. The front-end's PRODUCTION_LOCALES is where an
 * incomplete locale is kept away from readers, and `gaps` in dist/manifest.json
 * is the record it is checked against.
 *
 * Returns the number of sentinels found, so callers can record it.
 */
function countSentinels(gaps, typeId, label, value) {
  const entries = Object.entries(flatten(value));
  const stubbed = entries.filter(([, v]) => v === SENTINEL);
  // `TBD: ` is a fourth untranslated convention, alongside the sentinel, copied
  // English and the repeated placeholder body. It marks a key deliberately left
  // in English with a note, so unlike the sentinel it renders as readable text
  // and nothing else would ever notice it.
  const todo = entries.filter(([, v]) => typeof v === "string" && v.startsWith("TBD: "));

  if (stubbed.length > 0) {
    gaps.push({
      type: typeId,
      count: stubbed.length,
      detail: `${label}: ${stubbed.length} key(s) still the untranslated sentinel (first: ${stubbed[0][0]})`
    });
  }
  if (todo.length > 0) {
    gaps.push({
      type: typeId,
      count: todo.length,
      detail: `${label}: ${todo.length} key(s) marked "TBD: " and still English (first: ${todo[0][0]})`
    });
  }
  return stubbed.length + todo.length;
}

/**
 * Whether one post is `listed`, read from the English config beside its source.
 *
 * A post's flags (date, author, listed, premium, order) are English config and
 * never copy, so they are not translated and do not live here. The front-end
 * publishes them as one locale-invariant object; the search index needs one of
 * them, so it reads it from the same file the front-end does.
 *
 * Absent means NOT listed, matching the front-end's plain truthiness test. Every
 * article states it either way today, so this only decides the case neither repo
 * has.
 */
function isListed(typeId, slug) {
  const config = path.join(englishRepo(), "content", "src", "posts", typeId, slug, "config.json");
  return fs.existsSync(config) ? Boolean(readJson(config).listed) : false;
}

async function publishLocale(locale, { exportSources }) {
  const artifacts = [];
  // Everything that stops this locale being COMPLETE. It does not stop anything
  // being published: R2 carries whatever is on main so work in progress can be
  // reviewed on staging. This is the record the front-end checks before adding a
  // locale to PRODUCTION_LOCALES.
  const gaps = [];
  const manifest = {};
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
      // The SHARED parser: `seo` and `tags` reach a published artifact, so a
      // reader that returned them as raw strings would move the artifact's hash.
      const { data, body } = await parseFrontmatterShared(readText(item.path));
      const english = englishPath(typeId, item.slug);
      const englishBody = fs.existsSync(english) ? parseFrontmatter(readText(english)).body : "";
      prose.set(key, { key, data, body, englishBody, item });
    }
  }

  const repeated = findRepeatedBodies([...prose.values()].map(({ key, englishBody, body }) => ({ key, englishBody, targetBody: body })));

  for (const entry of prose.values()) {
    if (isCopiedEnglish(entry.englishBody, entry.body)) entry.untranslated = "identical to English";
    else if (repeated.has(entry.key)) entry.untranslated = "a repeated placeholder body";
    if (entry.untranslated) untranslated.push({ key: entry.key, reason: entry.untranslated });
  }

  // Recorded, not withheld. An untranslated page IS the thing a reviewer needs to
  // see on staging: publishing English bytes under a translated URL is obvious
  // there and harmless, because production will not serve the locale at all
  // until these reach zero.
  const untranslatedByType = {};
  for (const { key } of untranslated) {
    const typeId = key.slice(0, key.indexOf("/"));
    (untranslatedByType[typeId] ??= []).push(key);
  }
  for (const [typeId, keys] of Object.entries(untranslatedByType)) {
    gaps.push({ type: typeId, count: keys.length, detail: `${keys.length} item(s) untranslated (first: ${keys[0]})` });
  }

  /** One markdown item's body and frontmatter. */
  const translatedBody = (typeId, item) => prose.get(`${typeId}/${item.slug}`) ?? null;

  // --- app UI catalog -------------------------------------------------------
  const appPath = localPath("app-messages", locale);
  if (fs.existsSync(appPath)) {
    const catalog = readJson(appPath);
    countSentinels(gaps, "app-messages", `${locale} app catalog`, catalog);
    manifest.app = emit(artifacts, (hash) => CONTENT_TYPES["app-messages"].r2(locale, null, hash), catalog);
  }

  // --- badges ---------------------------------------------------------------
  const badgesPath = localPath("badges", locale);
  if (fs.existsSync(badgesPath)) {
    const catalog = readJson(badgesPath);
    countSentinels(gaps, "badges", `${locale} badge catalog`, catalog);
    manifest.badges = emit(artifacts, (hash) => CONTENT_TYPES.badges.r2(locale, null, hash), catalog);
  }

  // --- levels ---------------------------------------------------------------
  const levelsPath = localPath("levels", locale);
  if (fs.existsSync(levelsPath)) {
    const catalog = readJson(levelsPath);
    countSentinels(gaps, "levels", `${locale} level catalog`, catalog);
    manifest.levels = emit(artifacts, (hash) => CONTENT_TYPES.levels.r2(locale, null, hash), catalog);
  }

  // --- interpreter message catalogs, one artifact per interpreter language ---
  //
  // The slug is a LANGUAGE (javascript, jikiscript, python), not an exercise, so
  // these are discovered the same way every other slugged type is and need no
  // special case beyond that.
  manifest.interpreters = {};
  for (const item of listItems("interpreter-messages", locale)) {
    const catalog = readJson(item.path);
    countSentinels(gaps, "interpreter-messages", `${locale} interpreter catalog ${item.slug}`, catalog);
    manifest.interpreters[item.slug] = emit(
      artifacts,
      (hash) => CONTENT_TYPES["interpreter-messages"].r2(locale, item.slug, hash),
      catalog
    );
  }

  // --- exercise message catalogs, one artifact per exercise -----------------
  manifest.exercises = {};
  for (const { slug, catalog } of exerciseCatalogs(locale)) {
    countSentinels(gaps, "exercise-messages", `${locale} exercise catalog ${slug}`, catalog);
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
  // Corpus completeness per prose type, against the REAL English corpus in the
  // checkout. Recorded, never a refusal: an index covering the pages that
  // exist is precisely what staging needs, and production is gated separately.
  for (const typeId of PROSE_TYPE_IDS) {
    const present = listItems(typeId, locale).length;
    const expected = englishCorpusSize(typeId);
    if (present < expected) {
      gaps.push({ type: typeId, count: expected - present, detail: `${present} of ${expected} present` });
    }
  }

  const videoPath = localPath("video-lessons", locale);
  if (fs.existsSync(videoPath)) {
    const videos = readJson(videoPath);
    countSentinels(gaps, "video-lessons", `${locale} video lesson catalog`, videos);
    {
      for (const [slug, entry] of Object.entries(videos)) {
        if (slug in copy) fail(`slug "${slug}" is both an exercise and a video lesson (locale ${locale}); the namespace must stay collision-free`);
        copy[slug] = entry;
      }
    }
  }
  if (Object.keys(copy).length > 0) {
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
  // The translated half of the concept index, on the same terms as posts: the
  // hierarchy, ordering, icon and exercise links are locale-invariant and come
  // from English config, so the front-end publishes them once and merges.
  const conceptCopy = {};

  manifest.concepts = {};
  for (const item of listItems("concept", locale)) {
    const translated = translatedBody("concept", item);
    if (!translated) continue;
    const { data, body } = translated;

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
    const hash = emitBytes(artifacts, (h) => CONTENT_TYPES.concept.r2(locale, item.slug, h), html);
    manifest.concepts[item.slug] = hash;
    conceptCopy[item.slug] = { title: data.title, description: data.description ?? "", contentHash: hash };
  }

  if (Object.keys(conceptCopy).length > 0) {
    const sorted = Object.fromEntries(Object.keys(conceptCopy).sort().map((slug) => [slug, conceptCopy[slug]]));
    manifest.conceptCopy = emit(artifacts, (hash) => `/static/concepts/${locale}/copy-${hash}.json`, sorted);
  }

  // --- posts: blog, articles and guides, rendered to HTML ---------------------
  //
  // The second renderer pipeline, and the only one here that needs image bytes.
  // The resolver takes a source-repo checkout lazily, so a corpus whose posts
  // reference no images publishes without one.
  const resolveImage = makeImageResolver(() => englishRepo());

  // The translated half of the post metadata index. Its other half (date,
  // author, cover image, featured/listed/premium/order) comes from English
  // config.json, does not vary by language, and is published by the front-end as
  // one locale-invariant object. The two are merged at read time, which is what
  // lets a locale published from here appear in listings and carry SEO metadata
  // with no front-end build. Project episodes have no listing index of their own,
  // so they contribute HTML only.
  const postCopy = { blog: {}, articles: {}, guides: {} };

  for (const typeId of POST_TYPE_IDS) {
    manifest[typeId] = {};
    for (const item of listItems(typeId, locale)) {
      const translated = translatedBody(typeId, item);
      if (!translated) continue;
      const { data, body } = translated;
      const hash = emitBytes(
        artifacts,
        (hash) => CONTENT_TYPES[typeId].r2(locale, item.slug, hash),
        await renderPostHtml(body, resolveImage)
      );
      manifest[typeId][item.slug] = hash;

      if (postCopy[typeId]) {
        postCopy[typeId][item.slug] = {
          title: data.title,
          excerpt: data.excerpt ?? "",
          seo: data.seo ?? { description: data.excerpt ?? "", keywords: [] },
          tags: data.tags ?? [],
          readingTime: await estimateReadingTime(body, resolveImage),
          contentHash: hash
        };
      }
    }
  }

  // Sorted, so the bytes move only when the copy does.
  const sortKeys = (obj) => Object.fromEntries(Object.keys(obj).sort().map((k) => [k, obj[k]]));
  for (const type of Object.keys(postCopy)) postCopy[type] = sortKeys(postCopy[type]);
  if (Object.values(postCopy).some((entries) => Object.keys(entries).length > 0)) {
    manifest.postCopy = emit(artifacts, (hash) => `/static/content/copy/${locale}/copy-${hash}.json`, postCopy);
  }

  // A search index is derived ENTIRELY from translated copy, so it has to be
  // published wherever the copy is. The front-end still builds English's, and
  // built every locale's while the translations lived beside English there; once
  // they moved here, nothing else can build them, and the front-end's reader
  // resolves a missing one to an empty index, which is a search box that silently
  // returns nothing rather than an error anyone would notice.
  //
  // Blog has no index; only articles and guides do. Articles index the `listed`
  // ones only, and `listed` is English config, not copy, so it is read from the
  // English checkout exactly as the front-end reads it. Guides index everything,
  // premium included, so premium guides stay searchable.
  //
  // The bytes need not match the front-end's for the same type: these are
  // different LOCALES, each resolved through its own pointer. What must match is
  // the index SHAPE, which is why it is built by the shared renderer.
  manifest.search = {};
  for (const typeId of ["articles", "guides"]) {
    const slugs = Object.keys(postCopy[typeId]);
    const indexed = typeId === "articles" ? slugs.filter((slug) => isListed(typeId, slug)) : slugs;
    if (indexed.length === 0) continue;

    const index = await buildSearch(
      indexed.map((slug) => {
        const copy = postCopy[typeId][slug];
        return {
          slug,
          title: copy.title,
          excerpt: copy.excerpt,
          description: copy.seo.description ?? "",
          keywords: (copy.seo.keywords ?? []).join(" ")
        };
      })
    );
    manifest.search[typeId] = emit(
      artifacts,
      (hash) => `/static/content/search/${typeId}/${locale}/index-${hash}.json`,
      index
    );
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

  if (proseIndex.length > 0) {
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
  //
  // Under `export/<locale>/`, because the source repo's layout has no per-locale
  // slot to write into: it holds one English `instructions.md` per exercise and
  // nothing else. Naming the locale in a directory above the mirrored path keeps
  // the export unambiguous when several locales are published in one run.
  let exported = 0;
  const instructions = contentType("exercise-instructions");
  for (const item of exportSources ? instructionItems : []) {
    const to = path.join(DIST, "export", locale, instructions.sourceRepoPath(item.slug));
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(item.path, to);
    exported += 1;
  }

  return { artifacts, manifest, exported, gaps };
}

/**
 * Every exercise message catalog to publish for one locale, already merged with
 * its exercise family's base catalog. See scripts/lib/families.mjs for what the
 * merge is and why.
 *
 * Which family each exercise belongs to is a fact about the exercise's
 * TypeScript imports, so it is read from the front-end checkout, for exactly the
 * exercises in the corpus. It used to be recorded in the sync manifest so that
 * publish could run without a checkout; publish has a checkout now, so the
 * record is redundant and a derived answer cannot go stale.
 *
 * Derived over the CORPUS and not over all of English, deliberately. The union
 * rule below publishes a family member from its family's base catalog even when
 * the member has no catalog of its own, so a families map covering every
 * exercise in the front-end would publish a catalog for every member of every
 * translated family, including exercises nobody has started.
 */
function exerciseCatalogs(locale) {
  const families = Object.fromEntries(
    corpusItems("exercise-messages").map((item) => [item.slug, deriveFamily(englishRepo(), item.slug)])
  );
  const own = new Map(listItems("exercise-messages", locale).map((item) => [item.slug, readJson(item.path)]));

  // An exercise this locale holds that English has no directory for is a HARD
  // FAIL rather than an unmerged publish: a catalog missing its inherited keys
  // renders raw key names like `errors.hitWall` to a learner, and on R2 it would
  // look exactly like a good one.
  const unknown = [...own.keys()].filter((slug) => !(slug in families));
  if (unknown.length > 0) {
    fail(
      `no exercise directory in the front-end checkout for ${unknown.length} exercise(s) (first: ${unknown[0]}). ` +
        `Publishing them would under-merge any exercise-category base catalog. ` +
        `Check the checkout is at the right commit, or that the exercise has not been renamed.`
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
  const completeness = {};

  for (const locale of locales) {
    console.log(`\n${locale}:`);
    const result = await publishLocale(locale, { exportSources: outDir === undefined });
    for (const artifact of result.artifacts) console.log(`  ${artifact.key}  (${artifact.bytes} bytes)`);
    all.push(...result.artifacts);
    manifests[locale] = result.manifest;
    exported += result.exported;
    completeness[locale] = {
      complete: result.gaps.length === 0,
      gaps: result.gaps
    };

    if (result.gaps.length > 0) {
      const types = [...new Set(result.gaps.map((gap) => gap.type))].sort();
      const items = result.gaps.reduce((sum, gap) => sum + gap.count, 0);
      console.log(
        `  INCOMPLETE: published, but "${locale}" is not production-ready. ` +
          `${types.length} content type(s), ${items} item(s) outstanding.`
      );
      for (const gap of result.gaps) console.log(`    ${gap.type}: ${gap.detail}`);
    } else {
      console.log(`  COMPLETE: "${locale}" is production-ready.`);
    }
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
  // The completeness record, published as its own object.
  //
  // MUTABLE and unhashed, like a pointer and for the same reason: the question
  // it answers ("is this locale production-ready right now") has one current
  // answer, not a version history. Exactly one writer, this repo, so the
  // single-writer rule holds as it does for every pointer.
  //
  // This is what stops publishing being permissive from becoming a way to ship a
  // half-translated locale. Publishing carries whatever is on main so staging can
  // show it; the front-end reads THIS before allowing a locale into
  // PRODUCTION_LOCALES, so nobody can add one by hand and have it silently ship.
  const completenessKey = assertPublishableKey(`/${R2_PREFIX}/i18n/completeness.json`);
  // The front-end commit English was read from. On a PR that is the SHA the work
  // was dispatched for; on main it is whatever front-end main was at that moment,
  // which floats. Recording it is what makes the float acceptable: "which English
  // was this measured against" stays answerable after the fact.
  const englishRef = englishSha();
  const completenessBody = `${JSON.stringify(
    { generatedAt: new Date().toISOString(), english: { repo: "front-end", sha: englishRef }, locales: completeness },
    null,
    2
  )}\n`;
  fs.mkdirSync(path.dirname(path.join(DIST, completenessKey)), { recursive: true });
  fs.writeFileSync(path.join(DIST, completenessKey), completenessBody);
  all.push({ key: completenessKey, hash: "current", bytes: completenessBody.length, pointer: true });

  // Only for a publish. An --out-dir is a front-end's public/static tree, and a
  // manifest.json or a sync.sh dropped in there would be served to the internet.
  if (outDir === undefined) {
    fs.writeFileSync(
      path.join(DIST, "manifest.json"),
      `${JSON.stringify(
        {
        generatedAt: new Date().toISOString(),
        english: { repo: "front-end", sha: englishRef },
        renderer: await rendererVersion(),
        completeness,
        locales: manifests
      },
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
  // Two commands, not two per item. Every artifact is content-hashed, so one
  // recursive sync over the whole tree is exactly as safe as thousands of
  // directory-scoped ones, and the aws CLI is a fresh process each time it is
  // invoked: at 33 locales the per-item plan was six thousand process launches
  // and hours of startup cost for two seconds of actual work.
  //
  // The pointers still go separately, because they need the opposite of
  // everything the artifacts need. They are copied rather than synced, since
  // `--size-only` compares byte counts and one hash is exactly as long as
  // another, so a sync would skip the single object whose whole job is to
  // change. And they carry a short TTL with a long stale-while-revalidate, so
  // the steady state is an edge hit and a republish propagates in about a
  // minute.
  //
  // Artifacts land before pointers, so a reader can never follow a pointer to an
  // object that is not there yet.
  const plan = outDir !== undefined ? [] : [
    `aws s3 sync dist/static s3://${R2_BUCKET}/static --endpoint-url ${R2_ENDPOINT} ` +
      `--cache-control 'public, max-age=31536000, immutable' --size-only ` +
      `--exclude '*/current.json' --exclude 'completeness.json'`,
    `aws s3 cp dist/static s3://${R2_BUCKET}/static --endpoint-url ${R2_ENDPOINT} --recursive ` +
      `--cache-control 'public, max-age=60, stale-while-revalidate=86400' ` +
      `--exclude '*' --include '*/current.json' --include 'completeness.json'`
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
      `${exported} prose files exported, ${plan.length} sync commands in dist/sync.sh.`
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
