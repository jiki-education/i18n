// The single source of truth for "where does one item live".
//
// Every script maps between three coordinate systems, and does it HERE and
// nowhere else:
//
//   1. source repo path   — where English is authored, read from a front-end
//                            checkout at .source/front-end (see ENGLISH-SOURCE.md)
//   2. local path         — where it lives in this repo, under locales/<locale>/
//   3. R2 path            — where the published artifact is served from
//
// The local layout MIRRORS each source package's own layout, with two
// mechanical edits and no other invention:
//
//   - the package's `src/` segment is dropped (`curriculum/src/concepts` →
//     `curriculum/concepts`), because it says nothing here
//   - the locale segment is HOISTED to the top and removed from within the path
//     (`.../instructions/hu.md` → `locales/hu/.../instructions.md`), because
//     encoding the locale twice makes a rename a two-place edit
//
// Adding a content type is adding one entry to CONTENT_TYPES. Nothing else
// changes.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SOURCE_LOCALE, SOURCE_REPO_LOCALE, fail } from "./constants.mjs";

/** The file basename English uses in the source repos, per format. */
const sourceName = (locale, { markdown }) => {
  if (locale !== SOURCE_LOCALE) return locale;
  return markdown ? "source" : SOURCE_REPO_LOCALE;
};

export const CONTENT_TYPES = {
  "app-messages": {
    label: "app UI catalog",
    format: "catalog",
    slugged: false,
    // Per-key staleness via the sentinel; there is no stamp and none is possible
    // (a whole-file hash cannot say which of 1300 keys moved).
    staleness: "sentinel",
    interpolation: "icu",
    sourceRepoPath: (locale) => `app/messages/${sourceName(locale, { markdown: false })}.json`,
    localPath: () => "app/messages.json",
    r2: (locale, _slug, hash) => `/static/i18n/app/${locale}/messages-${hash}.json`
  },

  concept: {
    label: "concept page",
    format: "markdown",
    slugged: true,
    staleness: "frontmatter",
    frontmatterTranslated: ["title", "description"],
    sourceRepoPath: (locale, slug) => `curriculum/src/concepts/${slug}/${sourceName(locale, { markdown: true })}.md`,
    localPath: (slug) => `curriculum/concepts/${slug}/page.md`,
    // Rendered HTML, not JSON, and the only artifact here that is not a catalog.
    // The bytes come from @jiki.io/content-renderer, the same package the
    // front-end's generate-concept-cache.js renders English with, so the two
    // publishers cannot drift. See CLAUDE.md § "Prose publishing".
    r2: (locale, slug, hash) => `/static/concepts/${slug}/${locale}/content-${hash}.html`
  },

  "exercise-instructions": {
    label: "exercise instructions",
    format: "markdown",
    slugged: true,
    exerciseScoped: true,
    staleness: "frontmatter",
    frontmatterTranslated: ["title", "description"],
    sourceRepoPath: (locale, slug) =>
      `curriculum/src/exercises/${slug}/instructions/${sourceName(locale, { markdown: true })}.md`,
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
    format: "catalog",
    slugged: true,
    exerciseScoped: true,
    staleness: "sibling",
    interpolation: "i18next",
    sourceRepoPath: (locale, slug) =>
      `curriculum/src/exercises/${slug}/locales/${sourceName(locale, { markdown: false })}/translation.json`,
    localPath: (slug) => `curriculum/exercises/${slug}/messages.json`,
    r2: (locale, slug, hash) => `/static/i18n/exercises/${slug}/${locale}/messages-${hash}.json`
  },

  "video-lessons": {
    label: "video lesson copy",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    sourceRepoPath: (locale) =>
      `curriculum/src/video-lessons/locales/${sourceName(locale, { markdown: false })}/translation.json`,
    localPath: () => "curriculum/video-lessons/messages.json",
    // Merged with every exercise's frontmatter title/description into ONE
    // curriculum catalog per locale, so it has no artifact of its own.
    // publish.mjs assembles /static/i18n/curriculum/<locale>/messages-<hash>.json.
    r2: null
  },

  badges: {
    label: "badge copy",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    sourceRepoPath: (locale) =>
      `curriculum/src/badges/locales/${sourceName(locale, { markdown: false })}/translation.json`,
    localPath: () => "curriculum/badges/messages.json",
    r2: (locale, _slug, hash) => `/static/i18n/badges/${locale}/messages-${hash}.json`
  },

  levels: {
    label: "level copy",
    format: "catalog",
    slugged: false,
    staleness: "sibling",
    interpolation: "none",
    sourceRepoPath: (locale) =>
      `curriculum/src/levels/locales/${sourceName(locale, { markdown: false })}/translation.json`,
    localPath: () => "curriculum/levels/messages.json",
    r2: (locale, _slug, hash) => `/static/i18n/levels/${locale}/messages-${hash}.json`
  },

  "exercise-category": {
    label: "exercise family base catalog",
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
    sourceRepoPath: (locale, slug) =>
      `curriculum/src/exercise-categories/${slug}/locales/${sourceName(locale, { markdown: false })}/translation.json`,
    localPath: (slug) => `curriculum/exercise-categories/${slug}/messages.json`,
    r2: null
  },

  "interpreter-messages": {
    label: "interpreter message catalog",
    format: "catalog",
    slugged: true,
    staleness: "sibling",
    interpolation: "i18next",
    // The slug is an interpreter LANGUAGE (javascript, jikiscript, python).
    // The `system` locale beside English in that tree is a machine-readable
    // key channel, not a translation, and is never mirrored or translated here.
    sourceRepoPath: (locale, slug) =>
      `interpreters/src/${slug}/locales/${sourceName(locale, { markdown: false })}/translation.json`,
    localPath: (slug) => `interpreters/${slug}/messages.json`,
    r2: (locale, slug, hash) => `/static/i18n/interpreter/${slug}/${locale}/messages-${hash}.json`
  },

  // --- posts: blog, articles, guides ----------------------------------------
  //
  // Three entries rather than one, because the model here is one entry per
  // LAYOUT and these are three sibling directories in the content package, each
  // with its own slug namespace. Everything else about them is identical, which
  // is why they are built from one factory below rather than written out three
  // times.
  //
  // Project episodes are deliberately NOT here. Their source path carries a UUID
  // directory that is not the slug, and their metadata lives in a per-episode
  // config.json, so they do not fit the (type, locale, slug) coordinate system
  // this file is. They stay front-end published until that is worth doing
  // properly.
  ...postType("blog"),
  ...postType("articles"),
  ...postType("guides"),

  "project-episodes": {
    label: "project episode",
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
    frontmatterTranslated: ["title", "excerpt"],
    sourceRepoPath: (locale, slug) => `content/src/posts/projects/${slug}/${sourceName(locale, { markdown: true })}.md`,
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
function postType(kind) {
  return {
    [kind]: {
      label: `${kind} post`,
      format: "markdown",
      slugged: true,
      staleness: "frontmatter",
      frontmatterTranslated: ["title", "excerpt"],
      sourceRepoPath: (locale, slug) => `content/src/posts/${kind}/${slug}/${sourceName(locale, { markdown: true })}.md`,
      localPath: (slug) => `content/posts/${kind}/${slug}/page.md`,
      r2: (locale, slug, hash) => `/static/content/${kind}/${slug}/${locale}/content-${hash}.html`
    }
  };
}


export const CONTENT_TYPE_IDS = Object.keys(CONTENT_TYPES);

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
export function sourceRepoPath(sourceRepo, typeId, locale, slug) {
  const type = contentType(typeId);
  return path.join(sourceRepo, type.sourceRepoPath(locale, slug));
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
  const probe = CONTENT_TYPES["exercise-messages"].sourceRepoPath(SOURCE_LOCALE, "__SLUG__");
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
  const exists = (slug) => fs.existsSync(sourceRepoPath(sourceRepo, typeId, SOURCE_LOCALE, slug));

  if (!type.slugged) return exists(null) ? [{ type: typeId, slug: null }] : [];

  const probe = type.sourceRepoPath(SOURCE_LOCALE, "__SLUG__");
  const [prefix] = probe.split("__SLUG__");
  const root = path.join(sourceRepo, prefix);

  return slugsUnder(root, type.slugDepth ?? 1)
    .filter(exists)
    .map((slug) => ({ type: typeId, slug }));
}

/**
 * Every slug under a directory, at the type's slug depth.
 *
 * Depth 1 is a single directory name, which is what every type but project
 * episodes uses. Depth 2 joins two levels with "/", so an episode's slug is
 * "<project>/<uuid>" and is still just "the part of the path that varies".
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
  return names.flatMap((name) => slugsUnder(path.join(root, name), depth - 1).map((rest) => `${name}/${rest}`));
}

/**
 * Every item of one type present for one locale, as { type, locale, slug, path }.
 * Discovery is by what is on disk, so a newly synced item needs no registration.
 */
export function listItems(typeId, locale) {
  const type = contentType(typeId);
  if (!type.slugged) {
    const file = localPath(typeId, locale);
    return fs.existsSync(file) ? [{ type: typeId, locale, slug: null, path: file }] : [];
  }

  const probe = type.localPath("__SLUG__");
  const [prefix] = probe.split("__SLUG__");
  const root = path.join(REPO_ROOT, "locales", locale, prefix);

  return slugsUnder(root, type.slugDepth ?? 1)
    .map((slug) => ({ type: typeId, locale, slug, path: localPath(typeId, locale, slug) }))
    .filter((item) => fs.existsSync(item.path));
}

/** Every item of every type for one locale. */
export function listAllItems(locale) {
  return CONTENT_TYPE_IDS.flatMap((id) => listItems(id, locale));
}
