// The single source of truth for "where does one item live".
//
// Every script maps between three coordinate systems, and does it HERE and
// nowhere else:
//
//   1. source repo path   — where English is authored (front-end monorepo)
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

/**
 * Resolve the front-end monorepo checkout that English is read from.
 *
 * Order: --source-repo flag, then JIKI_SOURCE_REPO, then the sibling checkout.
 * This repo NEVER writes there; sync-source.mjs reads it and nothing else does.
 */
export function resolveSourceRepo(explicit) {
  const candidate = explicit || process.env.JIKI_SOURCE_REPO || path.resolve(REPO_ROOT, "..", "front-end");
  const resolved = path.resolve(candidate);
  if (!fs.existsSync(path.join(resolved, "app", "messages", "en.json"))) {
    fail(
      `no front-end checkout at ${resolved} (expected app/messages/en.json). ` +
        `Pass --source-repo=<path> or set JIKI_SOURCE_REPO.`
    );
  }
  return resolved;
}

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
    // Concept pages are served as rendered HTML, produced by the curriculum
    // renderer, not by this repo. See CLAUDE.md § "Prose publishing".
    r2: null
  },

  "exercise-instructions": {
    label: "exercise instructions",
    format: "markdown",
    slugged: true,
    staleness: "frontmatter",
    frontmatterTranslated: ["title", "description"],
    sourceRepoPath: (locale, slug) =>
      `curriculum/src/exercises/${slug}/instructions/${sourceName(locale, { markdown: true })}.md`,
    localPath: (slug) => `curriculum/exercises/${slug}/instructions.md`,
    r2: null
  },

  "exercise-messages": {
    label: "exercise message catalog",
    format: "catalog",
    slugged: true,
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
  }
};

export const CONTENT_TYPE_IDS = Object.keys(CONTENT_TYPES);

export function contentType(id) {
  const type = CONTENT_TYPES[id];
  if (!type) fail(`unknown content type "${id}". Known: ${CONTENT_TYPE_IDS.join(", ")}`);
  return type;
}

/** Absolute path to one item in THIS repo. */
export function localPath(typeId, locale, slug) {
  const type = contentType(typeId);
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

  // Walk the type's own directory in the SOURCE locale so the slug list is
  // always defined by English, exactly as key parity is.
  const probe = type.localPath("__SLUG__");
  const [prefix] = probe.split("__SLUG__");
  const root = path.join(REPO_ROOT, "locales", locale, prefix);
  if (!fs.existsSync(root)) return [];

  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
    .map((slug) => ({ type: typeId, locale, slug, path: localPath(typeId, locale, slug) }))
    .filter((item) => fs.existsSync(item.path));
}

/** Every item of every type for one locale. */
export function listAllItems(locale) {
  return CONTENT_TYPE_IDS.flatMap((id) => listItems(id, locale));
}
