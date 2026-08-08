#!/usr/bin/env node
//
// coverage — per-locale translated vs sentinel counts, and prose translated vs
// missing vs stale.
//
// Usage:
//   node scripts/coverage.mjs [<locale|all>] [--json] [--type=<id>]
//
// Coverage is derived entirely from the files themselves, never from a tracking
// file that has to be kept in step with them. English is read from a front-end
// checkout; see ENGLISH-SOURCE.md. A catalog key is done unless it is
// the sentinel; a prose page is done unless it is absent or its en_md5 no longer
// matches the English source. That is what makes "what is left?" a question the
// repo can always answer, including for a locale nobody has touched in months.
//
// A locale is shippable (addable to the front-end's SUPPORTED_LOCALES) when
// every line here reads 100% and `validate --shippable` passes.

import fs from "node:fs";
import { SENTINEL, TARGET_LOCALES, assertTargetLocale } from "./lib/constants.mjs";
import { CONTENT_TYPE_IDS, contentType, localPath, metaPath } from "./lib/content-types.mjs";
import { corpusItems } from "./lib/english.mjs";
import { countSentinels, md5File, parseFrontmatter, readJson, readText } from "./lib/files.mjs";
import { parseArgs } from "./lib/args.mjs";

function coverageFor(locale, typeIds) {
  const rows = [];

  for (const typeId of typeIds) {
    const type = contentType(typeId);
    let total = 0;
    let done = 0;
    let stale = 0;
    let missing = 0;

    for (const item of corpusItems(typeId)) {
      const target = localPath(typeId, locale, item.slug);

      if (type.format === "catalog") {
        if (!fs.existsSync(target)) {
          const counts = countSentinels(readJson(item.path));
          total += counts.total;
          missing += counts.total;
          continue;
        }
        const counts = countSentinels(readJson(target));
        total += counts.total;
        done += counts.translated;

        if (type.staleness === "sibling") {
          const meta = fs.existsSync(metaPath(target)) ? readJson(metaPath(target)) : null;
          if (meta?.en_md5 && meta.en_md5 !== md5File(item.path)) stale += counts.total;
        }
      } else {
        total += 1;
        if (!fs.existsSync(target)) {
          missing += 1;
          continue;
        }
        const { data } = parseFrontmatter(readText(target));
        if (data.en_md5 === md5File(item.path)) done += 1;
        else stale += 1;
      }
    }

    rows.push({ type: typeId, unit: type.format === "catalog" ? "keys" : "pages", total, done, stale, missing });
  }

  return rows;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0] ?? "all";
  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);
  const typeIds = args.flags.type ? [args.flags.type] : CONTENT_TYPE_IDS;

  const report = Object.fromEntries(locales.map((locale) => [locale, coverageFor(locale, typeIds)]));

  if (args.flags.json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  for (const [locale, rows] of Object.entries(report)) {
    const total = rows.reduce((sum, row) => sum + row.total, 0);
    const done = rows.reduce((sum, row) => sum + row.done, 0);
    console.log(`\n${locale}  —  ${pct(done, total)} overall (${done}/${total})`);
    console.log(`  ${"type".padEnd(24)}${"done".padStart(12)}${"stale".padStart(8)}${"missing".padStart(9)}${"".padStart(8)}`);
    for (const row of rows) {
      console.log(
        `  ${row.type.padEnd(24)}${`${row.done}/${row.total}`.padStart(12)}${String(row.stale).padStart(8)}` +
          `${String(row.missing).padStart(9)}${pct(row.done, row.total).padStart(8)}  ${row.unit}`
      );
    }
    const stubbed = rows.filter((row) => row.unit === "keys").reduce((sum, row) => sum + (row.total - row.done - row.missing), 0);
    console.log(`  ${stubbed} catalog keys still "${SENTINEL}"${stubbed === 0 ? "" : "  (not shippable until 0)"}`);
  }
  console.log("");
}

const pct = (done, total) => (total === 0 ? "n/a" : `${Math.round((done / total) * 100)}%`);

main();
