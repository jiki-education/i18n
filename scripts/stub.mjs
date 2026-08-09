#!/usr/bin/env node
//
// stub — bring a locale's catalogs up to full key parity with `source`, marking
// every key with no translation yet with the sentinel `�`.
//
// Usage:
//   node scripts/stub.mjs <locale|all> [--type=<id>] [--slug=<slug>] [--count]
//
// Examples:
//   node scripts/stub.mjs hu             # fill every gap in every hu catalog
//   node scripts/stub.mjs all --count    # report only, write nothing
//
// This is the translator repo's `scripts/catalog-stub` generalised from the app
// catalog to every catalog type in this repo, and it keeps that script's rules
// exactly:
//
//   - an existing non-sentinel value is reproduced BYTE FOR BYTE. It may be a
//     native speaker's decision, and nothing here re-litigates one.
//   - a key deleted from English is dropped. Parity is defined by English.
//   - output key order mirrors `source`, so diffs stay readable.
//   - the filler is the sentinel and NEVER the English string. English-as-filler
//     is indistinguishable from a translation that legitimately matches English,
//     and once that ambiguity is in a file it cannot be undone.
//
// Scope is the derived corpus: every item English exists for that some locale
// already holds. Bringing a NEW item in is deliberate, and is what an explicit
// --type/--slug does: it resolves against English directly, so the first locale
// file for an item is always something someone asked for by name. Without that
// rule a bare `stub all` would sentinel-fill the entire English tree into every
// locale. See ENGLISH-SOURCE.md.
//
// Only catalogs are stubbed, because only a catalog has a per-key state to
// stub. Prose (concept pages, exercise instructions, posts) has none: a Markdown
// page is either translated or absent. Neither do subtitles: a VTT with the
// English caption text left in place under translated timings is copied English,
// which is exactly the untranslated-but-plausible state the sentinel exists to
// avoid, and a VTT of empty cues is not a file any player should be handed.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, TARGET_LOCALES, assertTargetLocale, fail } from "./lib/constants.mjs";
import { contentType, localPath, CONTENT_TYPE_IDS } from "./lib/content-types.mjs";
import { scopeItems } from "./lib/english.mjs";
import { countSentinels, readJson, stubAgainst, writeJson } from "./lib/files.mjs";
import { parseArgs } from "./lib/args.mjs";

function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0];
  if (!requested) fail("usage: node scripts/stub.mjs <locale|all> [--type=<id>] [--slug=<slug>] [--count]");

  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);

  const typeIds = args.flags.type ? [args.flags.type] : CONTENT_TYPE_IDS;
  let exitCode = 0;

  for (const locale of locales) {
    for (const typeId of typeIds) {
      const type = contentType(typeId);
      if (type.format !== "catalog") continue;

      for (const item of scopeItems(typeId, { slug: args.flags.slug })) {

        const english = readJson(item.path);
        const target = localPath(typeId, locale, item.slug);
        const existing = fs.existsSync(target) ? readJson(target) : {};
        const stubbed = stubAgainst(english, existing);
        const counts = countSentinels(stubbed);
        const label = `${locale} ${typeId}${item.slug ? `/${item.slug}` : ""}`;

        if (args.flags.count) {
          console.log(
            `${label}: ${counts.total} keys, ${counts.translated} translated, ${counts.stubbed} stubbed`
          );
          if (counts.stubbed > 0) exitCode = 1;
          continue;
        }

        const changed = JSON.stringify(stubbed) !== JSON.stringify(existing);
        if (changed) writeJson(target, stubbed);
        console.log(
          `${changed ? "wrote " : "ok    "} ${path.relative(REPO_ROOT, target)} ` +
            `(${counts.translated}/${counts.total} translated, ${counts.stubbed} stubbed)`
        );
      }
    }
  }

  process.exit(args.flags.count ? exitCode : 0);
}

main();
