#!/usr/bin/env node
//
// verify-import — prove that what this repo holds is exactly, and losslessly,
// what the source repo holds.
//
// Usage:
//   node scripts/verify-import.mjs [--source-repo=<path>] [--json]
//
// `import-existing` copies; this is the thing that says the copy is right. It is
// deliberately a separate script rather than an assertion inside the copier,
// because a copier that grades its own output can only ever confirm its own
// mapping, and the mapping is the part most likely to be wrong.
//
// Four questions, all answered from the files rather than from a log:
//
//   1. COMPLETE   every translation in the source repo, for every tracked item
//                 and every target locale, is present here.
//   2. LOSSLESS   every one of them is byte-for-byte identical. Not "parses to
//                 the same JSON": identical bytes, so nothing has been silently
//                 reformatted, re-ordered, or re-encoded on the way through.
//   3. ACCOUNTED  every file under locales/<target>/ maps back to a tracked
//                 item, so nothing has arrived here from somewhere unexplained.
//   4. NO ENGLISH no target locale directory is an English spelling, and the
//                 mirror still matches what was synced.
//
// It also REPORTS, without judging, the two untranslated markers that coexist in
// the imported corpus: the sentinel, and values that are byte-identical to their
// English. The second is a heuristic and a legitimate translation can trip it,
// so it is a count to read and never a failure.
//
// Exit codes: 0 every check passed, 1 at least one failed.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SENTINEL, SOURCE_LOCALE, SOURCE_REPO_LOCALE, TARGET_LOCALES, fail } from "./lib/constants.mjs";
import { contentType, localPath, metaPath, resolveSourceRepo, sourceRepoPath } from "./lib/content-types.mjs";
import { flatten, md5File, readJson, readText } from "./lib/files.mjs";
import { parseArgs } from "./lib/args.mjs";

const ENGLISH_SPELLINGS = new Set([SOURCE_REPO_LOCALE, "en-US", "en-GB", "default"]);

function trackedItems() {
  const manifest = path.join(REPO_ROOT, "locales", SOURCE_LOCALE, ".manifest.json");
  if (!fs.existsSync(manifest)) fail("no source mirror yet; run scripts/sync-source.mjs first");
  return JSON.parse(readText(manifest));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const sourceRepo = resolveSourceRepo(args.flags["source-repo"]);
  const { items, files: mirrored } = trackedItems();

  const failures = [];
  const stats = {
    sourceRepo,
    trackedItems: items.length,
    expected: 0,
    verified: 0,
    missing: [],
    mismatched: [],
    unaccounted: [],
    metaSiblings: 0,
    perLocale: {},
    perType: {},
    sentinelFiles: 0,
    sentinelKeys: 0,
    englishIdenticalFiles: 0,
    englishIdenticalKeys: 0
  };

  // ---------------------------------------------- 1 + 2. complete, lossless --
  const accountedFor = new Set();

  for (const locale of TARGET_LOCALES) {
    stats.perLocale[locale] = 0;

    for (const item of items) {
      const from = sourceRepoPath(sourceRepo, item.type, locale, item.slug);
      if (!fs.existsSync(from)) continue;

      stats.expected += 1;
      const to = localPath(item.type, locale, item.slug);
      const relative = path.relative(REPO_ROOT, to);

      if (!fs.existsSync(to)) {
        stats.missing.push(relative);
        continue;
      }
      accountedFor.add(path.resolve(to));

      if (!fs.readFileSync(from).equals(fs.readFileSync(to))) {
        stats.mismatched.push(relative);
        continue;
      }

      stats.verified += 1;
      stats.perLocale[locale] += 1;
      stats.perType[item.type] = (stats.perType[item.type] ?? 0) + 1;

      // The staleness sibling is written by the importer, not copied, so it is
      // accounted for here rather than compared.
      if (contentType(item.type).staleness === "sibling" && fs.existsSync(metaPath(to))) {
        accountedFor.add(path.resolve(metaPath(to)));
        stats.metaSiblings += 1;
      }

      // The two untranslated markers, counted and not touched.
      if (contentType(item.type).format === "catalog") {
        const translated = flatten(readJson(to));
        const english = flatten(readJson(localPath(item.type, SOURCE_LOCALE, item.slug)));
        const entries = Object.entries(translated);
        const sentinels = entries.filter(([, value]) => value === SENTINEL).length;
        const copied = entries.filter(([key, value]) => typeof value === "string" && value === english[key]).length;
        if (sentinels > 0) stats.sentinelFiles += 1;
        if (copied > 0) stats.englishIdenticalFiles += 1;
        stats.sentinelKeys += sentinels;
        stats.englishIdenticalKeys += copied;
      } else if (readText(to).includes(SENTINEL)) {
        stats.sentinelFiles += 1;
      }
    }
  }

  // ------------------------------------------------------- 3. accounted for --
  for (const locale of fs.readdirSync(path.join(REPO_ROOT, "locales"))) {
    if (locale === SOURCE_LOCALE) continue;
    if (ENGLISH_SPELLINGS.has(locale)) {
      failures.push(`locales/${locale}/ is an English spelling; English lives only in locales/${SOURCE_LOCALE}/`);
    }
    if (!TARGET_LOCALES.includes(locale)) {
      failures.push(`locales/${locale}/ is not in locales.json "targets"`);
    }
    for (const file of walk(path.join(REPO_ROOT, "locales", locale))) {
      if (!accountedFor.has(path.resolve(file))) stats.unaccounted.push(path.relative(REPO_ROOT, file));
    }
  }

  // ----------------------------------------------------------- 4. no English --
  for (const [relative, expected] of Object.entries(mirrored)) {
    const file = path.join(REPO_ROOT, "locales", SOURCE_LOCALE, relative);
    if (!fs.existsSync(file)) failures.push(`locales/${SOURCE_LOCALE}/${relative} is missing`);
    else if (md5File(file) !== expected) failures.push(`locales/${SOURCE_LOCALE}/${relative} diverges from the mirror`);
  }

  if (stats.missing.length > 0) failures.push(`${stats.missing.length} translations present in the source repo are missing here`);
  if (stats.mismatched.length > 0) failures.push(`${stats.mismatched.length} imported files are not byte-identical to their source`);
  if (stats.unaccounted.length > 0) failures.push(`${stats.unaccounted.length} files under locales/<target>/ map to no tracked item`);

  if (args.flags.json) {
    console.log(JSON.stringify({ ...stats, failures }, null, 2));
  } else {
    console.log(`source repo         ${sourceRepo}`);
    console.log(`tracked items       ${stats.trackedItems}`);
    console.log(`translations found  ${stats.expected}`);
    console.log(`byte-identical      ${stats.verified}`);
    console.log(`meta siblings       ${stats.metaSiblings}`);
    console.log(`missing             ${stats.missing.length}`);
    console.log(`mismatched          ${stats.mismatched.length}`);
    console.log(`unaccounted         ${stats.unaccounted.length}`);
    console.log(`\nby type:`);
    for (const [type, count] of Object.entries(stats.perType).sort()) console.log(`  ${type.padEnd(24)}${String(count).padStart(6)}`);
    console.log(`\nby locale:`);
    for (const [locale, count] of Object.entries(stats.perLocale).sort()) console.log(`  ${locale.padEnd(24)}${String(count).padStart(6)}`);
    console.log(`\nuntranslated markers (report only, never a failure):`);
    console.log(`  sentinel "${SENTINEL}"        ${stats.sentinelKeys} keys in ${stats.sentinelFiles} files`);
    console.log(`  value identical to English  ${stats.englishIdenticalKeys} keys in ${stats.englishIdenticalFiles} files`);
    for (const line of [...stats.missing, ...stats.mismatched, ...stats.unaccounted].slice(0, 20)) console.log(`  ! ${line}`);
    console.log(failures.length === 0 ? `\nverify-import: OK` : `\nverify-import: FAILED\n${failures.map((f) => `  - ${f}`).join("\n")}`);
  }

  process.exit(failures.length === 0 ? 0 : 1);
}

main();
