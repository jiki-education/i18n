#!/usr/bin/env node
//
// import-existing — the one-off migration: lift translations that already live
// in the source repos into locales/<locale>/.
//
// Usage:
//   node scripts/import-existing.mjs <locale> [--source-repo=<path>] [--type=<id>] [--slug=<slug>]
//
// Example:
//   node scripts/import-existing.mjs hu
//
// This is NOT part of the steady state. The steady state is: English arrives via
// sync-source, translations are produced here by translate/stub, and publish
// ships them. This script exists only for the cutover, when the front-end still
// holds translations that have to move across, and for adding a locale that was
// translated in the old world.
//
// It is separate from sync-source on purpose. sync-source is defined as
// English-only and one-way, and teaching it to also fetch target locales would
// make "did this file come from the source repo or from a translation pass?"
// unanswerable, which is exactly the ambiguity the source mirror exists to kill.
//
// Every item the manifest tracks is imported. Anything the source repo has no
// translation for is left alone; run `stub` afterwards to sentinel-fill it.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SOURCE_LOCALE, assertTargetLocale, fail } from "./lib/constants.mjs";
import { localPath, metaPath, resolveSourceRepo, sourceRepoPath, contentType } from "./lib/content-types.mjs";
import { md5File, readJson, readText, writeJson } from "./lib/files.mjs";
import { guardedWrite } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";

function main() {
  const args = parseArgs(process.argv.slice(2));
  const locale = args.positional[0];
  if (!locale) fail("usage: node scripts/import-existing.mjs <locale> [--type=<id>] [--slug=<slug>]");
  assertTargetLocale(locale);

  const sourceRepo = resolveSourceRepo(args.flags["source-repo"]);
  const manifestPath = path.join(REPO_ROOT, "locales", SOURCE_LOCALE, ".manifest.json");
  if (!fs.existsSync(manifestPath)) fail("no source mirror yet; run scripts/sync-source.mjs first");

  const items = JSON.parse(readText(manifestPath)).items.filter(
    (item) => (!args.flags.type || item.type === args.flags.type) && (!args.flags.slug || item.slug === args.flags.slug)
  );

  let imported = 0;
  let missing = 0;

  for (const item of items) {
    const from = sourceRepoPath(sourceRepo, item.type, locale, item.slug);
    if (!fs.existsSync(from)) {
      console.log(`  no ${locale} translation in the source repo for ${item.type}${item.slug ? `/${item.slug}` : ""}`);
      missing += 1;
      continue;
    }

    const type = contentType(item.type);
    const to = localPath(item.type, locale, item.slug);
    let content = readText(from);

    // A namespace-sliced import keeps the same slice as the English mirror, so
    // key parity holds by construction.
    if (item.namespaces) {
      const parsed = JSON.parse(content);
      const out = {};
      for (const namespace of item.namespaces) {
        if (namespace in parsed) out[namespace] = parsed[namespace];
      }
      content = `${JSON.stringify(out, null, 2)}\n`;
    }

    guardedWrite(to, content);
    imported += 1;
    console.log(`  imported ${path.relative(REPO_ROOT, to)}`);

    // Carry the staleness stamp across. Catalogs keep it in a sibling meta file;
    // prose already carries `en_md5` in its own frontmatter, so it needs nothing.
    if (type.staleness === "sibling") {
      const sourceMeta = path.join(path.dirname(from), "translation.meta.json");
      const englishFile = localPath(item.type, SOURCE_LOCALE, item.slug);
      writeJson(metaPath(to), {
        en_md5: fs.existsSync(sourceMeta) ? readJson(sourceMeta).en_md5 : md5File(englishFile),
        importedFrom: path.relative(sourceRepo, from)
      });
    }
  }

  console.log(`\nimport-existing: ${imported} imported, ${missing} not present in the source repo.`);
}

main();
