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
