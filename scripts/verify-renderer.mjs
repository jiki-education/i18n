#!/usr/bin/env node
//
// verify-renderer — prove this repo's prose pipeline and the front-end's agree,
// byte for byte, over the whole concept corpus.
//
// Usage:
//   node scripts/verify-renderer.mjs [--source-repo=<path>]
//
// ## What is actually being established
//
// A concept page is served from `/static/concepts/<slug>/<locale>/content-<hash>.html`,
// and the front-end resolves that URL from a hash it computed at ITS build time.
// So a page published from here is reachable only if these bytes equal the bytes
// the front-end would have produced from the same Markdown. Not similar. Equal.
//
// The check therefore does not compare this repo's Hungarian to the front-end's
// Hungarian. Those are two revisions of a translation and they differ whenever a
// translation pass has landed on one side and not the other, which is the normal
// state of the world and says nothing about the renderers. Comparing them would
// produce a red result for a healthy system, and, worse, a green one the day both
// happened to be in step.
//
// Instead it takes the front-end's OWN Markdown, feeds it through THIS repo's
// publish path (the frontmatter parser in scripts/lib/files.mjs, the renderer in
// scripts/lib/prose.mjs, the hash in contentHash), and asserts the hash it lands
// on is the filename the front-end's generator actually wrote. Same input, both
// pipelines, whole corpus. A pass means the only thing that can make the two
// repos disagree is the content itself.
//
// English is not an exception in the corpus, it is the interesting case: the
// authored English is the only prose carrying the <define> and <literal>
// authoring tags, so it is the only input that exercises the strip.
//
// Exit 1 on any mismatch.

import fs from "node:fs";
import path from "node:path";
import { fail } from "./lib/constants.mjs";
import { contentHash, parseFrontmatter, readText } from "./lib/files.mjs";
import { englishRepo } from "./lib/english.mjs";
import { renderConcept, rendererVersion } from "./lib/prose.mjs";

/**
 * Every concept HTML artifact the front-end has generated, as
 * { slug, locale, hash }, read from its cache tree.
 *
 * The tree is a build output and is gitignored, so an empty one means it has not
 * been generated rather than that there is nothing to check. That distinction is
 * the difference between a real pass and a vacuous one, so it is a hard fail.
 */
function frontEndArtifacts(sourceRepo) {
  const root = path.join(sourceRepo, "app", "public", "static", "concepts");
  if (!fs.existsSync(root)) {
    fail(
      `no concept cache at ${root}. It is a gitignored build output; generate it with ` +
        `\`node app/scripts/generate-concept-cache.js\` in the front-end checkout first.`
    );
  }

  const found = [];
  for (const slug of fs.readdirSync(root, { withFileTypes: true })) {
    if (!slug.isDirectory() || slug.name === "icons") continue;
    const slugDir = path.join(root, slug.name);
    for (const locale of fs.readdirSync(slugDir, { withFileTypes: true })) {
      if (!locale.isDirectory()) continue;
      for (const file of fs.readdirSync(path.join(slugDir, locale.name))) {
        const match = /^content-([0-9a-f]{12})\.html$/.exec(file);
        if (match) found.push({ slug: slug.name, locale: locale.name, hash: match[1] });
      }
    }
  }
  return found.sort((a, b) => `${a.slug}/${a.locale}`.localeCompare(`${b.slug}/${b.locale}`));
}

/** The front-end's Markdown for one concept and locale. English is authored as source.md. */
function sourceMarkdown(sourceRepo, slug, locale) {
  const name = locale === "en" ? "source" : locale;
  return path.join(sourceRepo, "curriculum", "src", "concepts", slug, `${name}.md`);
}

async function main() {
  const explicit = process.argv.slice(2).find((arg) => arg.startsWith("--source-repo="));
  const sourceRepo = englishRepo("front-end", explicit ? explicit.split("=")[1] : undefined);

  const artifacts = frontEndArtifacts(sourceRepo);
  if (artifacts.length === 0) fail(`the front-end concept cache at ${sourceRepo} is empty`);

  const mismatches = [];
  let checked = 0;

  for (const artifact of artifacts) {
    const file = sourceMarkdown(sourceRepo, artifact.slug, artifact.locale);
    if (!fs.existsSync(file)) {
      // An artifact whose Markdown is gone means the cache is stale, not that the
      // renderers disagree. Say which, rather than reporting a mismatch.
      mismatches.push(`${artifact.slug}/${artifact.locale}: no Markdown at ${file} (stale cache?)`);
      continue;
    }

    const { body } = parseFrontmatter(readText(file));
    const hash = contentHash(await renderConcept(body));
    checked += 1;

    if (hash !== artifact.hash) {
      mismatches.push(
        `${artifact.slug}/${artifact.locale}: front-end wrote content-${artifact.hash}.html, ` +
          `this repo renders content-${hash}.html`
      );
    }
  }

  console.log(`renderer: @jiki.io/content-renderer ${await rendererVersion()}`);
  console.log(`source repo: ${sourceRepo}`);
  console.log(`checked: ${checked} concept pages across ${new Set(artifacts.map((a) => a.locale)).size} locales`);

  if (mismatches.length > 0) {
    for (const mismatch of mismatches) console.error(`  MISMATCH ${mismatch}`);
    fail(
      `${mismatches.length} of ${artifacts.length} concept pages do not match. The two repos are ` +
        `not rendering identically, so anything published from here would be served from a URL ` +
        `the front-end never asks for. Check that both sides resolve the same ` +
        `@jiki.io/content-renderer version.`
    );
  }

  console.log(`\nOK: every page hashes to the filename the front-end wrote.`);
}

main();
