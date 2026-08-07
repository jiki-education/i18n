// Rendering prose to the exact bytes Jiki serves.
//
// ## This is the one file in scripts/ with a dependency, on purpose
//
// Everything else under scripts/ is deliberately dependency-free, so it runs on
// a bare `node` with no install step. Prose is the exception, and it has to be.
//
// A concept page is served as `/static/concepts/<slug>/<locale>/content-<hash>.html`,
// where the filename IS the hash of the bytes. The front-end computes that URL
// from a hash it holds at build time, so HTML published from here that differs by
// one character is not "slightly different", it is at a URL nothing reads. That
// makes reimplementing the front-end's Markdown pipeline here the one thing this
// repo must not do: two renderers drift, and the drift shows up as a page that
// looks wrong rather than as a failure.
//
// So the renderer is a package both repos depend on, `@jiki.io/content-renderer`,
// and the pinned version is the contract. Publishing records the version it used
// (see `rendererVersion()`), so a byte mismatch between the two publishers is
// diagnosable from the artifacts after the fact rather than only reproducible
// locally.
//
// ## Why the import is lazy
//
// It is loaded on first use rather than at module load, so `validate`, `stub`,
// `coverage`, `sync-source` and `test` keep running with no `node_modules` at
// all. Only `publish` needs the install, and only when it reaches prose.

import fs from "node:fs";
import path from "node:path";

let renderer = null;

async function load() {
  if (renderer) return renderer;
  try {
    renderer = await import("@jiki.io/content-renderer");
  } catch (error) {
    throw new Error(
      `cannot load @jiki.io/content-renderer, which prose publishing needs: ${error.message}\n` +
        `Run \`npm install\` in this repo. Unlike the rest of scripts/, publishing prose is not ` +
        `dependency-free: the rendered HTML must match the front-end's byte for byte, so both ` +
        `repos share one renderer rather than each having their own.`
    );
  }
  return renderer;
}

/** Markdown body to the exact HTML Jiki serves for a concept page. */
export async function renderConcept(markdownBody) {
  const { renderMarkdown } = await load();
  return renderMarkdown(markdownBody);
}

/** Exercise instructions prepared for caching: the trim and the inline-tag strip. */
export async function prepareInstructions(markdownBody) {
  const { prepareInstructions: prepare } = await load();
  return prepare(markdownBody);
}

/**
 * The renderer version this run used, recorded in `dist/manifest.json`.
 *
 * Without it, "the front-end and i18n disagree about these bytes" is only ever
 * answerable by re-running both sides with today's dependencies, which is
 * precisely the state they were in when they disagreed. With it, the published
 * artifact says which renderer produced it.
 */
export async function rendererVersion() {
  const { RENDERER_VERSION } = await load();
  return RENDERER_VERSION;
}

/**
 * Markdown body to the exact HTML Jiki serves for a post (blog, article, guide).
 *
 * A different pipeline from `renderConcept`, not a variant of it: posts carry
 * footnotes, the stock highlight.js grammars rather than Jiki's own, and images.
 * Both live in the renderer package, so the difference is one both repos share
 * rather than one either repo invented.
 */
export async function renderPostHtml(markdownBody, resolveImage) {
  const { renderPost } = await load();
  return renderPost(markdownBody, { resolveImage });
}

/**
 * Resolve an authored `/images/...` reference to its fingerprinted URL.
 *
 * The URL contains a hash of the image BYTES, and those bytes live in the
 * front-end's content package, not here. So this needs a source-repo checkout,
 * and it takes one lazily: a locale whose posts reference no images publishes
 * with no checkout at all, which is the common case.
 *
 * It resolves rather than copies. English references the same images, so the
 * front-end has already published every one of them at exactly this URL; a
 * translation that referenced an image English does not is the one case this
 * cannot serve, and it says so rather than emitting a dead link.
 */
export function makeImageResolver(resolveSourceRepo) {
  const cache = new Map();
  let sourceRepo = null;

  return (ref) => {
    if (cache.has(ref)) return cache.get(ref);

    sourceRepo ??= resolveSourceRepo();
    const relative = ref.slice("/images/".length);
    const file = path.join(sourceRepo, "content", "images", relative);
    if (!fs.existsSync(file)) {
      throw new Error(
        `image ${ref} is referenced by a translated post but does not exist in the source repo ` +
          `(looked in ${file}). Only images English also uses can be served: the front-end publishes ` +
          `the image bytes, this repo only names them.`
      );
    }

    const url = postImageUrlSync(relative, fs.readFileSync(file));
    cache.set(ref, url);
    return url;
  };
}

// The renderer package is loaded lazily everywhere else here, but the image URL
// is needed synchronously from inside a render, so it is warmed once up front.
let postImageUrlSync = () => {
  throw new Error("renderer not loaded; call warmRenderer() before rendering posts");
};

/** Load the renderer eagerly, so the image resolver can run synchronously. */
export async function warmRenderer() {
  const { postImageUrlFromBytes } = await load();
  postImageUrlSync = postImageUrlFromBytes;
}

/** Build the exact search index Jiki serves for one locale and content type. */
export async function buildSearch(items) {
  const { buildSearchIndex } = await load();
  return buildSearchIndex(items);
}

/**
 * Estimate reading time exactly as the front-end's generator does.
 *
 * Counted over the IMAGE-REWRITTEN body, because that is what the front-end
 * counts. The two happen to agree either way (a URL is one whitespace-delimited
 * token before and after the rewrite), but matching the front-end's input rather
 * than relying on that is the difference between a guarantee and a coincidence.
 */
export async function estimateReadingTime(markdownBody, resolveImage) {
  const { rewriteImageRefs } = await load();
  const words = rewriteImageRefs(markdownBody, resolveImage).trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Frontmatter, parsed by the shared package rather than by this repo's minimal
 * reader.
 *
 * The minimal reader in scripts/lib/files.mjs is still correct for what it was
 * written for: `en_md5` stamps and flat scalar fields, read by scripts that must
 * run with no node_modules. But `seo` is a nested mapping and `tags` is a
 * sequence, and both now travel from frontmatter into a published artifact, so
 * for anything that reaches the bytes the parser has to be the one the front-end
 * uses. Publishing already requires the install; nothing else here does.
 */
export async function parseFrontmatterShared(source) {
  const { parseFrontmatter } = await load();
  return parseFrontmatter(source);
}
