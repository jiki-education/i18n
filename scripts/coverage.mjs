#!/usr/bin/env node
//
// coverage — per-locale translated vs sentinel counts, and prose translated vs
// missing vs stale.
//
// Usage:
//   node scripts/coverage.mjs [<locale|all>] [--json] [--type=<id>]
//
// Coverage is derived entirely from the files themselves, never from a tracking
// file that has to be kept in step with them. English is read from a source-repo
// checkout; see ENGLISH-SOURCE.md. A catalog key is done unless it is
// the sentinel; a prose page or subtitle file is done unless it is absent, its
// en_md5 no longer matches the English source, or one of the frontmatter fields
// its type declares translatable is not translated. That is what makes "what is
// left?" a question the repo can always answer, including for a locale nobody
// has touched in months.
//
// A STAMP IS NOT A COMPLETENESS SIGNAL ON ITS OWN.
//
// `en_md5` hashes ENGLISH. It answers "was this made against today's source?",
// which is a different question from "was all of it made", and it is structurally
// incapable of seeing part of a translation go missing. Coverage used to count a
// prose page done on that stamp plus the file existing, so Hungarian read
// `concept 52/52` while `concepts/scope/page.md` carried the English title
// "Scope" over a fully Hungarian body, and every tool built on this number
// repeated it. So the declared fields are now read too, from the registry's
// `frontmatterTranslated`, and a page with one missing is stale.
//
// A page whose field merely REPEATS English is a third thing, counted in
// `needsReview` and in neither `done` nor `stale`. Some titles are correctly
// identical (`Luhn` is a person, `Two-Fer` is wordplay) and no rule can tell
// those from a skipped one, so calling them done hides real gaps and calling
// them stale builds a number that can never reach 100% and will be ignored
// within a month. Reported as its own column, it is a queue a human drains once
// per item: translate it, or record the decision as a glossary row, which
// scripts/lib/kept-english.mjs then honours for good.
//
// ENGLISH IS THE DENOMINATOR, on both axes.
//
// Per key: a catalog is counted against English's key set, so a key English
// defines and the locale does not hold is reported missing. Counting the
// locale's own keys instead lets a deleted key leave both halves of the
// fraction, and the row then reads 100% precisely because the gap is total.
//
// Per item: the fraction covers the working corpus (`corpusItems`), which is
// English filtered to what at least one locale has begun, so a type nobody has
// started contributes no items and its row reads `0/0`. That filter is
// deliberate, and the reason is in `corpusItems`. What it cannot be allowed to
// do is make never-started look like finished, so every row also carries how
// many English items sit outside the corpus (`unstarted`), reported beside the
// fraction and never inside it.
//
// A locale is shippable (addable to the front-end's SUPPORTED_LOCALES) when
// every line here reads 100% and `validate --shippable` passes.
//
// The last two rows are the api repo's: the level milestone emails and the
// mailer / message YAML are translated there rather than here, because that copy
// has not been migrated to this repo yet. Coverage reads them so that "is this
// language complete?" has one answer covering everything. It only ever REPORTS
// them: coverage gates nothing, and an api checkout that is absent or unreadable
// produces a row saying so rather than a failure. See scripts/lib/api-copy.mjs.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { INAPPLICABLE, SENTINEL, TARGET_LOCALES, assertTargetLocale, fail } from "./lib/constants.mjs";
import { CONTENT_TYPE_IDS, contentType, localPath, metaPath } from "./lib/content-types.mjs";
import { DEFAULT_SOURCE_REPO, corpusItems, englishRepo, unstartedItems } from "./lib/english.mjs";
import { API_ROW_IDS, apiCoverageFor, apiSourceLine } from "./lib/api-copy.mjs";
import { countAgainstEnglish, md5File, parseFrontmatter, parseVttNotes, readJson, readText } from "./lib/files.mjs";
import { FIELDS_INCOMPLETE, FIELDS_NEED_REVIEW, proseFieldStatus } from "./lib/checks.mjs";
import { keptEnglishTerms, translatorRepo } from "./lib/kept-english.mjs";
import { bodyExcludedCount } from "./lib/exclusions.mjs";
import { parseArgs } from "./lib/args.mjs";

/** What one row of a type counts. A catalog counts keys; everything else counts whole files. */
const UNITS = { catalog: "keys", markdown: "pages", vtt: "videos" };

/**
 * What one ITEM of a type is, which is what the corpus is a set of. The same
 * thing as `UNITS` for a type whose item is one file, and not for a catalog: a
 * catalog row counts keys, while the corpus counts whole catalogs.
 */
const ITEM_UNITS = { catalog: "catalogs", markdown: "pages", vtt: "videos" };

// Both halves of the corpus split are a fact about the two trees, not about any
// one locale, so a run over 30 locales reads them once. Safe to hold for the
// process because coverage only ever reads.
const corpus = new Map();
const unstarted = new Map();

function itemsFor(typeId) {
  if (!corpus.has(typeId)) {
    corpus.set(typeId, corpusItems(typeId));
    unstarted.set(typeId, unstartedItems(typeId).length);
  }
  return { items: corpus.get(typeId), unstarted: unstarted.get(typeId) };
}

function coverageFor(locale, typeIds) {
  const rows = [];

  for (const typeId of typeIds) {
    const type = contentType(typeId);
    let total = 0;
    let done = 0;
    let stale = 0;
    let missing = 0;
    // Untranslated, split by what it takes to fix. A catalog key holding `�` is
    // in the file and needs translating; a key that is not in the file at all is
    // counted in `missing` alongside the whole prose pages that are absent, and
    // needs stubbing first. Both are outside `done`.
    let stubbed = 0;
    // Outside the fraction: an `∅` key is unreachable in this language, so it is
    // neither done nor missing and counting it either way misreports coverage.
    let inapplicable = 0;
    // Outside `done` and outside `stale`: a page whose translatable frontmatter
    // repeats English with nothing on record saying it should. See
    // `proseFieldStatus` for why this is its own bucket and not folded into
    // either neighbour, and `needsReviewItems` below for what a human does with it.
    let needsReview = 0;
    const needsReviewItems = [];

    const scope = itemsFor(typeId);
    // The frontmatter fields this type declares translatable, from the registry
    // and never a list written out here: a type that gains a field gains the
    // check with it. A type that declares none (a catalog, a VTT) skips all of
    // this and is counted exactly as before.
    const translatedKeys = type.frontmatterTranslated ?? [];
    const keptEnglish = translatedKeys.length > 0 ? keptEnglishTerms(locale) : null;

    for (const item of scope.items) {
      const target = localPath(typeId, locale, item.slug);

      if (type.format === "catalog") {
        const held = fs.existsSync(target) ? readJson(target) : null;
        const counts = countAgainstEnglish(readJson(item.path), held, { locale });
        total += counts.total;
        done += counts.translated;
        stubbed += counts.stubbed;
        missing += counts.absent;
        inapplicable += counts.inapplicable;

        if (held !== null && type.staleness === "sibling") {
          const meta = fs.existsSync(metaPath(target)) ? readJson(metaPath(target)) : null;
          if (meta?.en_md5 && meta.en_md5 !== md5File(item.path)) stale += counts.total;
        }
      } else {
        total += 1;
        if (!fs.existsSync(target)) {
          missing += 1;
          continue;
        }
        // One stamp, read from wherever the format can carry one: prose puts it
        // in frontmatter, a VTT in a `NOTE en_md5` block. The question either way
        // is whether it still matches the English on disk.
        const targetData = type.staleness === "note" ? null : parseFrontmatter(readText(target)).data;
        const stamp = type.staleness === "note" ? parseVttNotes(readText(target)).en_md5 : targetData.en_md5;
        if (stamp !== md5File(item.path)) {
          stale += 1;
          continue;
        }

        // A current stamp is necessary and NOT sufficient. `en_md5` hashes the
        // English source, so it says the translation was made against today's
        // English; it can say nothing about whether every part of the
        // translation got made. A title left in English never moves that hash.
        if (translatedKeys.length > 0) {
          const { status, key } = proseFieldStatus({
            englishData: parseFrontmatter(readText(item.path)).data,
            targetData,
            translatedKeys,
            keptEnglish
          });
          if (status === FIELDS_INCOMPLETE) {
            stale += 1;
            continue;
          }
          if (status === FIELDS_NEED_REVIEW) {
            needsReview += 1;
            needsReviewItems.push(`${item.slug} (${key})`);
            continue;
          }
        }

        done += 1;
      }
    }

    rows.push({
      type: typeId,
      unit: UNITS[type.format] ?? "items",
      itemUnit: ITEM_UNITS[type.format] ?? "items",
      total,
      done,
      stale,
      missing,
      stubbed,
      inapplicable,
      needsReview,
      // The slugs behind that count, so it can be acted on without a second
      // tool. Capped, because the point is a starting list and not a dump.
      needsReviewItems: needsReviewItems.slice(0, 20),
      // How many English items of this type no locale has begun, which is what
      // tells a `0/0` row that is finished from one that has never started.
      unstarted: scope.unstarted,
      // Said out loud, because otherwise the row over-promises. A body-excluded
      // item counts as done on its frontmatter alone (that is all that is asked
      // of it), so `106/106` covers 24 pages whose prose is still English. A
      // reader must not have to open corpus.json to learn that.
      note: bodyExcludedCount(typeId) > 0
        ? `${bodyExcludedCount(typeId)} of these are counted on their translated title and ` +
          `description alone: corpus.json puts their bodies out of the corpus (not-yet-live exercises)`
        : undefined
    });
  }

  return rows;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0] ?? "all";
  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);
  // `--type=` selects from both sets, because a reader asking for one row does
  // not care which repo it is read from.
  const requestedType = args.flags.type;
  const selectedTypes = requestedType ? CONTENT_TYPE_IDS.filter((id) => id === requestedType) : CONTENT_TYPE_IDS;
  // A source repo with no checkout drops its types, on the same terms as a
  // missing api checkout: this script must never exit non-zero, and CI cannot
  // check out the private `videos` repo at all. The row is absent rather than
  // reported as zero, which would read as "nothing translated".
  const typeIds = selectedTypes.filter((id) =>
    Boolean(englishRepo(contentType(id).sourceRepo ?? DEFAULT_SOURCE_REPO, undefined, { optional: true }))
  );
  const apiIds = requestedType ? API_ROW_IDS.filter((id) => id === requestedType) : API_ROW_IDS;
  if (requestedType && selectedTypes.length + apiIds.length === 0) {
    fail(`unknown content type "${requestedType}". Known: ${[...CONTENT_TYPE_IDS, ...API_ROW_IDS].join(", ")}`);
  }

  const report = Object.fromEntries(
    locales.map((locale) => [locale, [...coverageFor(locale, typeIds), ...apiCoverageFor(locale, apiIds)]])
  );

  if (args.flags.json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  for (const [locale, rows] of Object.entries(report)) {
    const total = rows.reduce((sum, row) => sum + row.total, 0);
    const done = rows.reduce((sum, row) => sum + row.done, 0);
    console.log(`\n${locale}  —  ${pct(done, total)} overall (${done}/${total})`);
    console.log(
      `  ${"type".padEnd(24)}${"done".padStart(12)}${"stale".padStart(8)}${"missing".padStart(9)}${"review".padStart(8)}${"".padStart(12)}`
    );
    for (const row of rows) {
      // Beside the fraction, never inside it: these items are outside the
      // corpus, so `0/0  not started` says the opposite of `0/0` alone.
      const outside = row.unstarted > 0 ? `  (+${row.unstarted} ${row.itemUnit} in English no locale has started)` : "";
      console.log(
        `  ${row.type.padEnd(24)}${`${row.done}/${row.total}`.padStart(12)}${String(row.stale).padStart(8)}` +
          `${String(row.missing).padStart(9)}${String(row.needsReview ?? 0).padStart(8)}` +
          `${pct(row.done, row.total, row.unstarted).padStart(12)}  ${row.unit}${outside}`
      );
    }
    // Named, not just counted: "12 pages need review" is a number, and a number
    // with no slugs behind it is one nobody ever gets round to acting on.
    const review = rows.reduce((sum, row) => sum + (row.needsReview ?? 0), 0);
    if (review > 0) {
      console.log(`  ${review} pages whose translated frontmatter repeats English (neither done nor known-fine):`);
      for (const row of rows.filter((r) => r.needsReview > 0)) {
        const more = row.needsReview > row.needsReviewItems.length ? `, +${row.needsReview - row.needsReviewItems.length} more` : "";
        console.log(`    ${row.type}: ${row.needsReviewItems.join(", ")}${more}`);
      }
      console.log(
        "    Each is a proper noun / named work / wordplay, or an untranslated field. Translate it, or record\n" +
          `    the decision as a glossary row in the translator repo (an English term whose ${locale} column repeats\n` +
          "    it), and it counts as done from then on."
      );
    }
    const stubbed = rows.reduce((sum, row) => sum + (row.stubbed ?? 0), 0);
    console.log(`  ${stubbed} catalog keys still "${SENTINEL}"${stubbed === 0 ? "" : "  (not shippable until 0)"}`);
    const inapplicable = rows.reduce((sum, row) => sum + (row.inapplicable ?? 0), 0);
    if (inapplicable > 0) console.log(`  ${inapplicable} catalog keys "${INAPPLICABLE}" (unreachable in this language, never publishable)`);
    for (const note of new Set(rows.map((row) => row.note).filter(Boolean))) console.log(`  note: ${note}`);
  }
  if (apiIds.length > 0) console.log(`\n${apiSourceLine()}`);
  console.log("");
}

/**
 * An empty fraction has two readings, and the count of items outside the corpus
 * is what separates them: nothing exists to translate, or nothing has been begun.
 * Exported so the difference is asserted rather than eyeballed.
 */
export const pct = (done, total, unstarted = 0) => {
  if (total > 0) return `${Math.round((done / total) * 100)}%`;
  return unstarted > 0 ? "not started" : "n/a";
};

// Run only when run, so the assertions can import the pieces above.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
