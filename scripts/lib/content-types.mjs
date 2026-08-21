// The single source of truth for "where does one item live".
//
// Every script maps between three coordinate systems, and does it HERE and
// nowhere else:
//
//   1. source repo path   — where English is authored, read from a checkout of
//                            that type's `sourceRepo` at .source/<id>
//                            (see ENGLISH-SOURCE.md)
//   2. local path         — where it lives in this repo, under locales/<locale>/
//   3. R2 path            — where the published artifact is served from
//
// `sourceRepo` names which repo English is authored in, and defaults to the
// front-end. scripts/lib/english.mjs holds the list and resolves each one.
//
// `howto` names the translator repo's how-to file(s) for the type, under its
// `content-types/` directory and WITHOUT the `.md` extension. It is the fourth
// coordinate: given a type id, it says which guidance a pass must load. Every
// type declares one, and scripts/test.mjs asserts it, because a type with no
// route is a type a pass cannot be run for.
//
//   - a STRING is the usual case: one how-to, e.g. `concept` → "concept-pages"
//   - an ARRAY is a how-to that only makes sense on top of another, and it is
//     ORDERED: the shared doc first, the one that defers to it second. Order is
//     load-bearing twice over. It is the order the docs are concatenated into a
//     prompt, so the shared prefix stays byte-identical across every type that
//     shares it and a provider's prompt cache can reuse it; and a doc that says
//     "as blog.md, except…" is unreadable before the doc it excepts.
//
// `frontmatterTranslated` lists the frontmatter fields a translation must
// actually translate, as DOTTED PATHS: `title`, and equally `seo.description`.
// A bare leaf name is not a shorthand for a nested field and must never be used
// as one. It only ever looked like one because the reader used to flatten a
// nested block to its leaf names, and it fails two ways: leaf names collide
// (`description` is a real top-level field on `concept`), and a list reflowed
// across lines stops resolving. scripts/lib/files.mjs owns the reader.
//
// The local layout MIRRORS each source package's own layout, with two
// mechanical edits and no other invention:
//
//   - the package's `src/` segment is dropped (`curriculum/src/concepts` →
//     `curriculum/concepts`), because it says nothing here
//   - the locale segment is HOISTED to the top of the path
//     (`curriculum/exercises/<slug>/instructions.md` → `locales/hu/…`), because
//     encoding the locale twice makes a rename a two-place edit
//
// `sourceRepoPath` takes no locale. The source repos hold ENGLISH and nothing
// else: there is one instructions file per exercise and one catalog per thing,
// and every translation of them lives here. A source path is therefore a fact
// about the item alone, and a caller that had a locale to hand never needed it.
//
// Adding a content type is adding one entry to CONTENT_TYPES. Nothing else
// changes.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SOURCE_LOCALE, SOURCE_REPO_LOCALE, fail } from "./constants.mjs";
import { isExcluded } from "./exclusions.mjs";

export const CONTENT_TYPES = {
  "app-messages": {
    label: "app UI catalog",
    howto: "website-keys",
    format: "catalog",
    slugged: false,
    // Per-key staleness via the sentinel; there is no stamp and none is possible
    // (a whole-file hash cannot say which of 1300 keys moved).
    staleness: "sentinel",
    interpolation: "icu",
    sourceRepoPath: () => "app/messages.json",
    localPath: () => "app/messages.json",
    r2: (locale, _slug, hash) => `/static/i18n/app/${locale}/messages-${hash}.json`
  },

  concept: {
    label: "concept page",
    howto: "concept-pages",
    format: "markdown",
    slugged: true,
    staleness: "frontmatter",
    frontmatterTranslated: ["title", "description"],
    sourceRepoPath: (slug) => `curriculum/src/concepts/${slug}/source.md`,
    localPath: (slug) => `curriculum/concepts/${slug}/page.md`,
    // Rendered HTML, not JSON, and the only artifact here that is not a catalog.
    // The bytes come from @jiki.io/content-renderer, the same package the
    // front-end's generate-concept-cache.js renders English with, so the two
    // publishers cannot drift. See CLAUDE.md § "Prose publishing".
    r2: (locale, slug, hash) => `/static/concepts/${slug}/${locale}/content-${hash}.html`
  },

  "exercise-instructions": {
    label: "exercise instructions",
    howto: "exercise",
    format: "markdown",
    slugged: true,
    exerciseScoped: true,
    staleness: "frontmatter",
    frontmatterTranslated: ["title", "description"],
    sourceRepoPath: (slug) => `curriculum/src/exercises/${slug}/instructions.md`,
    localPath: (slug) => `curriculum/exercises/${slug}/instructions.md`,
    // Instructions are cached as Markdown inside a JSON artifact and rendered by
    // the browser at runtime, so the published bytes are the prepared body (the
    // trim and the <define>/<literal> strip) and nothing else. `prose` rather
    // than `content` in the filename because it sits beside a `code-<hash>.json`
    // holding that exercise's stub and solution, which vary by programming
    // language and not by locale, and which this repo neither holds nor
    // publishes. Splitting them along those two keys is what makes translated
    // instructions publishable from here at all.
    r2: (locale, slug, hash) => `/static/exercises/${slug}/${locale}/prose-${hash}.json`
  },

  "exercise-messages": {
    label: "exercise message catalog",
    howto: ["exercise", "exercise-messages"],
    format: "catalog",
    slugged: true,
    exerciseScoped: true,
    staleness: "sibling",
    interpolation: "i18next",
    sourceRepoPath: (slug) => `curriculum/src/exercises/${slug}/messages.json`,
    localPath: (slug) => `curriculum/exercises/${slug}/messages.json`,
    r2: (locale, slug, hash) => `/static/i18n/exercises/${slug}/${locale}/messages-${hash}.json`
  },

  "video-lessons": {
    label: "video lesson copy",
    howto: "curriculum-copy",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    sourceRepoPath: () => "curriculum/src/video-lessons/messages.json",
    localPath: () => "curriculum/video-lessons/messages.json",
    // Merged with every exercise's frontmatter title/description into ONE
    // curriculum catalog per locale, so it has no artifact of its own.
    // publish.mjs assembles /static/i18n/curriculum/<locale>/messages-<hash>.json.
    r2: null
  },

  badges: {
    label: "badge copy",
    howto: "curriculum-copy",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    sourceRepoPath: () => "curriculum/src/badges/messages.json",
    localPath: () => "curriculum/badges/messages.json",
    r2: (locale, _slug, hash) => `/static/i18n/badges/${locale}/messages-${hash}.json`
  },

  levels: {
    label: "level copy",
    howto: "curriculum-copy",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    sourceRepoPath: () => "curriculum/src/levels/messages.json",
    localPath: () => "curriculum/levels/messages.json",
    r2: (locale, _slug, hash) => `/static/i18n/levels/${locale}/messages-${hash}.json`
  },

  "project-metadata": {
    label: "project metadata copy",
    howto: "project-metadata",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    // The listing copy for the three PROJECTS (title, description, tags), as one
    // catalog keyed by project slug. Not to be confused with `project-episodes`
    // below, which is the prose of one episode inside a project: this is the copy
    // a learner reads on the projects index before opening anything, and there is
    // one of it per locale rather than one per item, so it is unslugged.
    //
    // A project's translated copy lives HERE and never in the front-end. The
    // front-end authors English only, as a plain messages.json beside the
    // projects; it holds no locale keys, and a project's config.json holds no
    // copy at all. Anything shaped like `"title": {"en": "...", "de": "..."}`
    // over there is an invitation to put translations in the one place they may
    // never live, and a locale set derived from such a map is a set the
    // front-end must not be able to compute.
    //
    // `tags` is an ARRAY, one of only two in any catalog this repo holds (the
    // other is `testimonials`' marquee). scripts/lib/files.mjs § flatten says
    // what that costs and why an array is a branch rather than a leaf.
    sourceRepoPath: () => "content/src/posts/projects/messages.json",
    localPath: () => "content/posts/projects/messages.json",
    r2: (locale, _slug, hash) => `/static/content/projects/${locale}/meta-${hash}.json`
  },

  testimonials: {
    label: "testimonial copy",
    howto: "testimonials",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    // The student quotes, as one catalog per locale: `heading`, `subheading`,
    // `roles` keyed by person, `quotes` keyed by quote key, and the `marquee`
    // lines that scroll across the hero. One catalog serves both places a
    // testimonial appears, the landing section and the /testimonials page.
    //
    // What is NOT here is the point of the split. A person's name, their avatar
    // filename, which person a quote belongs to and the order the two pages show
    // them in are all locale-invariant, so they live in the front-end beside the
    // components that render them (content/src/testimonials/structure.json) and
    // are published in its structure artifact. A name is not copy and translating
    // one is a bug, so a translator is never shown one.
    //
    // A quote key is a person's slug, or that slug plus `-short` where the
    // landing grid shows a trimmed form of the same testimonial the /testimonials
    // page shows in full. Keying by slug is what lets a locale translate a subset:
    // the front-end drops any key it has no words for rather than reordering.
    //
    // `marquee` is an ARRAY, the second and last one in this repo; see
    // `project-metadata` above.
    sourceRepoPath: () => "content/src/testimonials/messages.json",
    localPath: () => "content/testimonials/messages.json",
    r2: (locale, _slug, hash) => `/static/content/testimonials/${locale}/meta-${hash}.json`
  },

  "exercise-category": {
    label: "exercise family base catalog",
    howto: ["exercise", "exercise-messages"],
    format: "catalog",
    slugged: true,
    staleness: "sibling",
    interpolation: "i18next",
    // The slug is an exercise FAMILY (draw, maze, cityscape), not an exercise.
    // A family catalog is a MERGE INPUT and never an artifact of its own: the
    // front-end's generator deep-merges it into each member exercise's emitted
    // pack and emits nothing for the family itself, so there is no R2 key to
    // mirror here. publish.mjs performs the same merge, which is why the
    // exercise-messages artifact it writes is self-contained.
    sourceRepoPath: (slug) => `curriculum/src/exercise-categories/${slug}/messages.json`,
    localPath: (slug) => `curriculum/exercise-categories/${slug}/messages.json`,
    r2: null
  },

  "interpreter-messages": {
    label: "interpreter message catalog",
    howto: "interpreters",
    format: "catalog",
    slugged: true,
    staleness: "sibling",
    interpolation: "i18next",
    // An untranslated key is ABSENT here, never a `\u{FFFD}` sentinel. The
    // interpreter runtime sets `fallbackLng: false` on purpose, so an absent key
    // renders as its own key path, loudly, rather than as plausible silent
    // English. Stubbing sentinels into this type breaks the one thing every
    // interpreter script reads to answer "is this translated?": a stubbed key
    // is present, so it counts as done, so `missing` resolves to nothing and a
    // pass reports there is no work while the catalog stays untranslated.
    // scripts/stub.mjs reads this and leaves the type alone.
    untranslated: "absent",
    // The slug is an interpreter LANGUAGE (javascript, jikiscript, python).
    // The `system` locale beside English in that tree is a machine-readable
    // key channel, not a translation, and is never mirrored or translated here.
    sourceRepoPath: (slug) => `interpreters/src/${slug}/locales/en/translation.json`,
    localPath: (slug) => `interpreters/${slug}/messages.json`,
    r2: (locale, slug, hash) => `/static/i18n/interpreter/${slug}/${locale}/messages-${hash}.json`
  },

  "video-subtitles": {
    label: "video subtitles",
    howto: "video-subtitles",
    format: "vtt",
    slugged: true,
    // The slug is a video KEY, the video's own directory name. Most sit directly
    // under `videos/`; the promos sit a level down, under `videos/promos/`. So
    // the slug is however many directory segments it takes to reach a
    // `subtitles.vtt`, which is what `slugDepth: "any"` means.
    slugDepth: "any",
    // The only type whose English is not the front-end's. Subtitles are cut from
    // the rendered video, so they are authored in `videos` beside the footage and
    // the Mux pipeline. See SOURCE_REPOS in scripts/lib/english.mjs.
    sourceRepo: "videos",
    // WebVTT has no frontmatter and no sibling convention, so the stamp is a
    // `NOTE en_md5 <hash>` line under the WEBVTT header. NOTE is WebVTT's own
    // comment block, ignored by every player, so the stamp is inert in the file
    // it stamps.
    staleness: "note",
    // The locale is hoisted into the path like every other type, so the filename
    // is `subtitles.vtt` here and not `subtitles.<locale>.vtt`: naming the locale
    // twice makes a rename a two-place edit.
    sourceRepoPath: (slug) => `videos/${slug}/subtitles.vtt`,
    localPath: (slug) => `videos/${slug}/subtitles.vtt`,
    // Subtitles are not served from R2. A translated track is uploaded to Mux and
    // served with the video it belongs to, by the `videos` repo's own
    // `bin/attach-subtitles`, so there is no artifact for publish.mjs to build.
    r2: null,
    // Never a scripted API pass. Building a subtitle file is mapping the English
    // transcript onto the already-translated concept page and re-cutting the
    // result onto the English cue timings, which is judgment work and belongs to
    // an opus worker running /translate-video-subtitles.
    scriptedTranslation: false
  },

  // --- posts: blog, articles, guides ----------------------------------------
  //
  // Three entries rather than one, because the model here is one entry per
  // LAYOUT and these are three sibling directories in the content package, each
  // with its own slug namespace. Everything else about them is identical, which
  // is why they are built from one factory below rather than written out three
  // times.
  //
  // Project episodes are a fourth post layout, and they ARE here, below. They
  // were once left out for not fitting the (type, locale, slug) coordinate
  // system; `slugDepth` fixed that rather than working around it, and the
  // entry's own comment says how.
  ...postType("blog"),
  ...postType("articles", "blog"),
  ...postType("guides", ["blog", "guides"]),

  "project-episodes": {
    label: "project episode",
    howto: ["blog", "project-episodes"],
    format: "markdown",
    slugged: true,
    // A TWO-PART slug: "<project-slug>/<episode-uuid>". The UUID exists purely to
    // keep episode names from colliding across projects, so the honest key is the
    // namespace and the name together, and writing it as one path-shaped string
    // keeps the mapping mechanical and reversible in both directions.
    //
    // `slugDepth` is what makes that work: discovery walks two directory levels
    // instead of one and joins them with "/". Everything else in this file, and
    // every script that reads it, is unchanged, because a slug was always just
    // the part of the path that varies.
    slugDepth: 2,
    staleness: "frontmatter",
    // The `summary` block is not metadata. It is the from/to promise and the
    // concept chips a learner reads to decide whether to watch the episode, so
    // it is the most-read copy on the page and it is checked like it.
    frontmatterTranslated: [
      "title",
      "excerpt",
      "summary.from",
      "summary.to",
      "summary.keyConcepts",
      "seo.description",
      "seo.keywords"
    ],
    sourceRepoPath: (slug) => `content/src/posts/projects/${slug}/source.md`,
    localPath: (slug) => `content/posts/projects/${slug}/page.md`,
    r2: (locale, slug, hash) => `/static/content/projects/${slug}/${locale}/content-${hash}.html`
  }
};

/**
 * One `posts/<kind>/` directory as a content type.
 *
 * Posts are served as rendered HTML, produced by @jiki.io/content-renderer's
 * `renderPost` — a different pipeline from the concept one (footnotes, the stock
 * highlight.js grammars, image fingerprinting), and the same one the front-end's
 * generate-content-cache.js renders English with, so the two publishers cannot
 * drift.
 *
 * `excerpt` rather than `description`: that is what a post's frontmatter calls
 * the same thing, and the field names here are the source's, never a
 * normalisation of it.
 */
function postType(kind, howto = kind) {
  return {
    [kind]: {
      label: `${kind} post`,
      howto,
      format: "markdown",
      slugged: true,
      staleness: "frontmatter",
      // `tags` is deliberately absent: translator/content-types/blog.md keeps it
      // as-is, and it is a slug namespace rather than copy. The two `seo` fields
      // that guide HAS mandated since it was written are here, having gone
      // unchecked until the reader could see into a nested block at all.
      frontmatterTranslated: ["title", "excerpt", "seo.description", "seo.keywords"],
      sourceRepoPath: (slug) => `content/src/posts/${kind}/${slug}/source.md`,
      localPath: (slug) => `content/posts/${kind}/${slug}/page.md`,
      r2: (locale, slug, hash) => `/static/content/${kind}/${slug}/${locale}/content-${hash}.html`
    }
  };
}


export const CONTENT_TYPE_IDS = Object.keys(CONTENT_TYPES);

/**
 * Every post type, in this file's order.
 *
 * A post is a Markdown page rendered to HTML and reached from a listing: the
 * blog index, the articles and guides indexes, a project's episode list. Being
 * on this list is what makes a type publish both halves of itself, the HTML and
 * the listing copy, so the list is stated once here and read by everything that
 * treats posts as a set.
 *
 * Project episodes are on it like anything else. Their slug is two parts
 * ("<project>/<uuid>") rather than one, and that is the whole of the difference:
 * `slugDepth` above expresses it, so nothing downstream special cases them.
 */
export const POST_TYPE_IDS = ["blog", "articles", "guides", "project-episodes"];

export function contentType(id) {
  const type = CONTENT_TYPES[id];
  if (!type) fail(`unknown content type "${id}". Known: ${CONTENT_TYPE_IDS.join(", ")}`);
  return type;
}

/**
 * Absolute path to one item in THIS repo, which only ever holds target locales.
 *
 * English is not addressable here. It lives in a front-end checkout, and
 * scripts/lib/english.mjs is the only thing that resolves a path to it. Asking
 * for it here is a bug in the caller rather than a missing file, so it says so.
 */
export function localPath(typeId, locale, slug) {
  const type = contentType(typeId);
  if (locale === SOURCE_LOCALE || locale === SOURCE_REPO_LOCALE) {
    fail(`locales/${locale}/ does not exist: English is read from a front-end checkout, never from locales/.`);
  }
  if (type.slugged && !slug) fail(`content type "${typeId}" needs a slug`);
  return path.join(REPO_ROOT, "locales", locale, type.localPath(slug));
}

/** Absolute path to the English original in the source repo. */
export function sourceRepoPath(sourceRepo, typeId, slug) {
  const type = contentType(typeId);
  return path.join(sourceRepo, type.sourceRepoPath(slug));
}

/**
 * The sibling staleness stamp for a catalog: `messages.json` →
 * `messages.meta.json`. Mirrors the translator repo's `translation.meta.json`
 * convention exactly, and stays invisible to every key-parity guard because
 * those address the catalog by exact filename.
 */
export function metaPath(itemPath) {
  return itemPath.replace(/\.json$/, ".meta.json");
}

/** The content type whose slug is an exercise FAMILY rather than an exercise. */
export const FAMILY_TYPE_ID = "exercise-category";

/** One exercise's own directory in a source repo checkout, derived from the type map. */
function exerciseDir(sourceRepo, slug) {
  const probe = CONTENT_TYPES["exercise-messages"].sourceRepoPath("__SLUG__");
  const [prefix] = probe.split("__SLUG__");
  return path.join(sourceRepo, prefix, slug);
}

/**
 * The exercise family one exercise belongs to, or null when it is standalone.
 *
 * The family is a fact about the exercise's CODE: it is whichever
 * `exercise-categories/<family>/` module the exercise imports. That makes it
 * underivable from copy alone, so it is read from the front-end checkout at the
 * moment publish needs it rather than recorded anywhere. It mirrors the front-end's own derivation in
 * app/scripts/generate-exercise-cache.js exactly: the same regex, over every
 * `.ts` file in the exercise directory rather than only `Exercise.ts`, because
 * some exercises name their class file differently. Files are visited in sorted
 * order so the answer does not depend on directory iteration order.
 */
export function deriveFamily(sourceRepo, slug) {
  const dir = exerciseDir(sourceRepo, slug);
  let files;
  try {
    files = fs.readdirSync(dir).filter((file) => file.endsWith(".ts")).sort();
  } catch {
    return null;
  }
  for (const file of files) {
    const match = fs.readFileSync(path.join(dir, file), "utf8").match(/exercise-categories\/([^/"'`\s]+)/);
    if (match) return match[1];
  }
  return null;
}

/**
 * Every item of one type that ENGLISH exists for in a source repo checkout.
 *
 * Discovery is by what is on disk, exactly as `listItems` discovers what this
 * repo holds, and it is derived from the type's own `sourceRepoPath` so there is
 * still only one place that knows a layout. A slugged type's slug is the single
 * directory segment `sourceRepoPath` varies, so listing that directory and
 * keeping the entries whose English file exists is the whole rule.
 *
 * scripts/lib/english.mjs builds both the working corpus and completeness's
 * denominator from this, so there is no tracked item list anywhere.
 */
export function discoverItems(sourceRepo, typeId) {
  const type = contentType(typeId);
  const exists = (slug) => fs.existsSync(sourceRepoPath(sourceRepo, typeId, slug));

  if (!type.slugged) return exists(null) ? [{ type: typeId, slug: null }] : [];

  const probe = type.sourceRepoPath("__SLUG__");
  const [prefix] = probe.split("__SLUG__");
  const root = path.join(sourceRepo, prefix);

  return slugsUnder(root, type.slugDepth ?? 1)
    .filter(exists)
    .map((slug) => ({ type: typeId, slug }));
}

/**
 * Every slug under a directory, at the type's slug depth.
 *
 * Depth 1 is a single directory name, which is what most types use. Depth 2
 * joins two levels with "/", so a project episode's slug is "<project>/<uuid>"
 * and is still just "the part of the path that varies". Depth "any" returns
 * every directory path at every level, for a tree that is not uniformly deep
 * (the videos tree, where the promos sit one level below everything else); the
 * callers already keep only the paths whose file exists, so a directory that is
 * purely a container drops out on its own.
 *
 * Sorted at every level so the answer never depends on directory order.
 */
function slugsUnder(root, depth) {
  if (!fs.existsSync(root)) return [];

  const names = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  if (depth === 1) return names;
  if (depth === "any") {
    return names.flatMap((name) => [name, ...slugsUnder(path.join(root, name), "any").map((rest) => `${name}/${rest}`)]);
  }
  return names.flatMap((name) => slugsUnder(path.join(root, name), depth - 1).map((rest) => `${name}/${rest}`));
}

/**
 * Every item of one type present for one locale, as { type, locale, slug, path }.
 * Discovery is by what is on disk, so a newly synced item needs no registration.
 *
 * With one subtraction: an item corpus.json declares WHOLLY out of the corpus is
 * not listed even when a file for it exists. An exclusion has to bind on both
 * sides or it binds on neither, because every report and every published index
 * compares this list against the English one (see `englishCorpusSize`). A leftover
 * file for an excluded item is therefore inert rather than an error: it stays on
 * disk, untouched, and comes back into scope the moment the exclusion is deleted.
 *
 * A `body`-scoped exclusion subtracts nothing here. The item is still expected,
 * so it is still listed, and what its body is exempt from is a question its
 * readers ask separately (see scripts/lib/exclusions.mjs).
 */
export function listItems(typeId, locale) {
  const type = contentType(typeId);
  if (!type.slugged) {
    const file = localPath(typeId, locale);
    if (isExcluded(typeId, null)) return [];
    return fs.existsSync(file) ? [{ type: typeId, locale, slug: null, path: file }] : [];
  }

  const probe = type.localPath("__SLUG__");
  const [prefix] = probe.split("__SLUG__");
  const root = path.join(REPO_ROOT, "locales", locale, prefix);

  return slugsUnder(root, type.slugDepth ?? 1)
    .filter((slug) => !isExcluded(typeId, slug))
    .map((slug) => ({ type: typeId, locale, slug, path: localPath(typeId, locale, slug) }))
    .filter((item) => fs.existsSync(item.path));
}

/** Every item of every type for one locale. */
export function listAllItems(locale) {
  return CONTENT_TYPE_IDS.flatMap((id) => listItems(id, locale));
}
