#!/usr/bin/env node
//
// validate — verify every translated item against its English source, and stamp
// staleness hashes once every blocking check passes.
//
// Usage:
//   node scripts/validate.mjs [<locale|all>] [--type=<id>] [--slug=<slug>]
//                             [--shippable] [--no-stamp]
//
// Examples:
//   node scripts/validate.mjs all          # CI gate
//   node scripts/validate.mjs hu --shippable   # also fail on any remaining sentinel
//
// Exit codes: 0 all ERROR checks passed, 1 at least one ERROR.
//
// ## Errors block, warnings never do
//
// Same split as the translator repo's scripts/check-translation, deliberately:
// ERROR checks are structural facts (key parity, placeholder counts, brace
// balance, frontmatter keys, staleness stamps), WARN checks are heuristics over
// prose that produce false positives by design. A WARN is printed to be read,
// never to gate. Do not promote one.
//
// ## Stamping
//
// The staleness stamp is written HERE and never by hand, because a hand-written
// stamp looks like a passed check and is not one. Prose carries `en_md5` in its
// own frontmatter; a catalog has no frontmatter, so it carries a sibling
// `<name>.meta.json`, which is the convention the translator repo already uses
// (`translation.meta.json`) and is invisible to every key-parity guard because
// those address the catalog by exact filename.
//
// `--shippable` additionally fails on any remaining sentinel. That is the
// production gate: the sentinel renders as a visible replacement glyph, so a
// locale is not servable until its count is zero. Ordinary runs allow sentinels,
// because a partly translated locale is a normal, expected state here.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SENTINEL, SOURCE_LOCALE, TARGET_LOCALES, assertTargetLocale, fail } from "./lib/constants.mjs";
import { CONTENT_TYPE_IDS, contentType, listItems, localPath, metaPath } from "./lib/content-types.mjs";
import { countSentinels, md5File, parseFrontmatter, readJson, readText, serializeFrontmatter } from "./lib/files.mjs";
import { ERROR, WARN, checkCatalog, checkProse } from "./lib/checks.mjs";
import { GuardViolation, assertPublishableKey, assertWritablePath, guardedWrite, guardedWriteJson } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";

/**
 * The English write guard, exercised as a check rather than trusted.
 *
 * These assertions cost nothing and fail the build the moment the guard stops
 * guarding, which is the only way a guard that is meant to never fire stays
 * honest. A publish run enforces it for real; this proves it is still armed.
 */
function checkGuards() {
  const issues = [];
  const mustRefuse = [
    () => assertWritablePath(path.join(REPO_ROOT, "locales", SOURCE_LOCALE, "app", "messages.json")),
    () => assertPublishableKey("static/i18n/app/en/messages-abc123456789.json"),
    () => assertPublishableKey("static/i18n/app/source/messages-abc123456789.json"),
    () => assertPublishableKey("static/i18n/exercises/acronym/en/messages-abc123456789.json"),
    () => assertPublishableKey("i18n/app/hu/messages-abc123456789.json")
  ];

  for (const [index, attempt] of mustRefuse.entries()) {
    let refused = false;
    try {
      attempt();
    } catch (error) {
      refused = error instanceof GuardViolation;
    }
    if (!refused) issues.push({ level: ERROR, message: `English write guard #${index + 1} did NOT fire; the guard is broken` });
  }

  // ...and still permits a legitimate target-locale key.
  try {
    assertPublishableKey("static/i18n/app/hu/messages-abc123456789.json");
  } catch (error) {
    issues.push({ level: ERROR, message: `English write guard rejects a legitimate key: ${error.message}` });
  }

  return issues;
}

function validateItem({ typeId, locale, slug, stamp, shippable }) {
  const type = contentType(typeId);
  const englishPath = localPath(typeId, SOURCE_LOCALE, slug);
  const targetPath = localPath(typeId, locale, slug);

  // An item a locale has not reached yet is a normal state, on the same terms as
  // a remaining sentinel: this script answers "is what is here correct", and
  // coverage.mjs answers "how much is here". It only blocks under --shippable,
  // where a gap means the locale would render English in an RTL layout.
  if (!fs.existsSync(targetPath)) {
    if (!shippable) return { issues: [], label: label(typeId, locale, slug), absent: true };
    return { issues: [{ level: ERROR, message: "not translated (no file)" }], label: label(typeId, locale, slug) };
  }

  if (type.format === "catalog") {
    const english = readJson(englishPath);
    const target = readJson(targetPath);
    const issues = checkCatalog(english, target, {
      icu: type.interpolation === "icu",
      allowSentinel: !shippable
    });

    // Catalog staleness: the sibling stamp against the current English file.
    if (type.staleness === "sibling") {
      const expected = md5File(englishPath);
      const meta = fs.existsSync(metaPath(targetPath)) ? readJson(metaPath(targetPath)) : null;
      if (!meta?.en_md5) issues.push({ level: ERROR, message: "no staleness stamp (missing sibling .meta.json)" });
      else if (meta.en_md5 !== expected) {
        issues.push({ level: ERROR, message: `stale: stamp is ${meta.en_md5}, English is now ${expected}` });
      }
      if (stamp && !issues.some((i) => i.level === ERROR && !i.message.startsWith("stale:") && !i.message.startsWith("no staleness"))) {
        guardedWriteJson(metaPath(targetPath), { en_md5: expected });
        // The stamp is now current, so the staleness findings above no longer apply.
        return { issues: issues.filter((i) => !i.message.startsWith("stale:") && !i.message.startsWith("no staleness")), label: label(typeId, locale, slug) };
      }
    }

    return { issues, label: label(typeId, locale, slug) };
  }

  // Prose.
  const englishText = readText(englishPath);
  const targetText = readText(targetPath);
  const english = parseFrontmatter(englishText);
  const target = parseFrontmatter(targetText);
  const expected = md5File(englishPath);

  const issues = checkProse(english.body, target.body, {
    englishData: english.data,
    targetData: target.data,
    translatedKeys: type.frontmatterTranslated ?? [],
    expectedMd5: expected,
    // Symmetric with `allowSentinel` for catalogs above: an untranslated item is
    // a normal state of a partly translated locale, and only blocks a shippable
    // check, where it would serve English prose from a translated URL.
    allowUntranslated: !shippable
  });

  const blockingOtherThanStamp = issues.filter(
    (i) => i.level === ERROR && !i.message.startsWith("stale:") && !i.message.startsWith("frontmatter: no en_md5")
  );

  if (stamp && blockingOtherThanStamp.length === 0 && target.data.en_md5 !== expected) {
    guardedWrite(targetPath, serializeFrontmatter({ ...target.data, en_md5: expected }, target.body));
    return { issues: blockingOtherThanStamp, label: label(typeId, locale, slug), stamped: true };
  }

  return { issues, label: label(typeId, locale, slug) };
}

const label = (typeId, locale, slug) => `${locale} ${typeId}${slug ? `/${slug}` : ""}`;

function main() {
  const args = parseArgs(process.argv.slice(2));
  const requested = args.positional[0] ?? "all";
  const locales = requested === "all" ? TARGET_LOCALES : [requested];
  locales.forEach(assertTargetLocale);

  const typeIds = args.flags.type ? [contentType(args.flags.type) && args.flags.type] : CONTENT_TYPE_IDS;
  const stamp = !args.flags["no-stamp"];
  const shippable = Boolean(args.flags.shippable);

  let errors = 0;
  let warnings = 0;
  let checked = 0;

  const guardIssues = checkGuards();
  for (const found of guardIssues) {
    console.error(`  ${found.level}  guards: ${found.message}`);
    errors += 1;
  }
  if (guardIssues.length === 0) console.log("guards: English write guard armed and refusing every English prefix.");

  for (const locale of locales) {
    for (const typeId of typeIds) {
      for (const item of listItems(typeId, SOURCE_LOCALE)) {
        if (args.flags.slug && item.slug !== args.flags.slug) continue;
        checked += 1;

        const { issues, label: name, stamped } = validateItem({ typeId, locale, slug: item.slug, stamp, shippable });
        const itemErrors = issues.filter((i) => i.level === ERROR);
        const itemWarnings = issues.filter((i) => i.level === WARN);
        errors += itemErrors.length;
        warnings += itemWarnings.length;

        if (itemErrors.length === 0 && itemWarnings.length === 0) {
          console.log(`ok    ${name}${stamped ? " (stamped)" : ""}`);
        } else {
          console.log(`${itemErrors.length > 0 ? "FAIL " : "warn "} ${name}`);
          for (const found of issues) console.log(`        ${found.level}  ${found.message}`);
        }
      }
    }
  }

  // Sentinel summary, so a plain run still answers "what is left?".
  for (const locale of locales) {
    let total = 0;
    let stubbed = 0;
    for (const typeId of typeIds) {
      if (contentType(typeId).format !== "catalog") continue;
      for (const item of listItems(typeId, locale)) {
        const counts = countSentinels(readJson(item.path));
        total += counts.total;
        stubbed += counts.stubbed;
      }
    }
    console.log(`\n${locale}: ${total - stubbed}/${total} catalog keys translated, ${stubbed} still "${SENTINEL}"`);
  }

  console.log(`\nvalidate: ${checked} items, ${errors} errors, ${warnings} warnings.`);
  if (errors > 0) process.exit(1);
}

main();
