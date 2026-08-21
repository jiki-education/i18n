// Constants shared by every script in this repo. Anything that more than one
// script needs to agree on lives here and nowhere else.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

/**
 * The untranslated sentinel: U+FFFD REPLACEMENT CHARACTER.
 *
 * A catalog value that is EXACTLY this string is not yet translated. Every
 * other value is a real translation. This is the only marker of "not done";
 * the English string is never used as filler, because English-as-filler is
 * indistinguishable from a translation that legitimately matches English, and
 * once that ambiguity is in a file it cannot be undone.
 *
 * It renders as a visible replacement glyph, which is the intent on the review
 * site and is exactly why a locale is not shippable until its sentinel count is
 * zero. `scripts/validate.mjs --shippable` is the gate.
 */
export const SENTINEL = "�";

/**
 * The inapplicable sentinel: U+2205 EMPTY SET.
 *
 * A catalog value that is EXACTLY this string is a key the language can never
 * reach, so nobody can ever fill it. It is not a gap and it is not progress: it
 * is the honest answer for a key that exists only so the catalogs share one key
 * set.
 *
 * The known case, and currently the only justified one, is an i18next plural
 * category the locale has no rule for. English carries the UNION of plural keys
 * across every supported locale, so a language whose grammar needs a category
 * English lacks has somewhere to put it; English itself holds `∅` there, and so
 * does every other locale the category does not apply to.
 *
 * `∅` must be JUSTIFIED, never a way to silence a real gap, so `checkCatalog`
 * accepts it only where the key is provably unreachable for that locale and
 * errors everywhere else. See scripts/lib/plurals.mjs for how "unreachable" is
 * derived, and CLAUDE.md § "The two sentinels".
 *
 * Unlike `�`, it never blocks publishing: the key is provably never read, so
 * publish omits it from the artifact rather than shipping the character.
 */
export const INAPPLICABLE = "∅";

/**
 * The token that means "English" when a locale has to be named at all.
 *
 * It is not a locale and there is no `locales/source/` directory: English is
 * read from a front-end checkout at `.source/front-end`, never stored here. See
 * ENGLISH-SOURCE.md. Addressing an English file needs no locale now — a source
 * repo holds exactly one, so `sourceRepoPath` takes only a slug — and what the
 * name survives for is refusing English as a target: it is one of the spellings
 * `assertTargetLocale` and the R2 key guard reject.
 */
export const SOURCE_LOCALE = "source";

/** The locale English is called wherever a locale segment names it (R2 keys, `locales/en/` in the interpreter tree). */
export const SOURCE_REPO_LOCALE = "en";

/** R2 bucket and key prefix the front-end's `static:upload` publishes into. */
export const R2_BUCKET = "assets";
export const R2_PREFIX = "static";
export const R2_ENDPOINT = "https://0a0e6f92decf825364b860e2286ceebf.r2.cloudflarestorage.com";

const config = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "locales.json"), "utf8"));

/** Locales this repo actively translates into. Never includes `source`. */
export const TARGET_LOCALES = config.targets;

/** Locales queued for future work, not yet translated here. */
export const PLANNED_LOCALES = config.plannedTargets;

/**
 * Why `productionTargets` is checked at load, and why every bad shape of it is
 * fatal rather than tolerated.
 *
 * This list SHRINKS a gate, which makes every mistake in it silent in the worst
 * possible direction: whatever goes wrong, the result is a run that goes green
 * having quietly stopped checking a live language, and nothing downstream can
 * tell that apart from a clean corpus. Two shapes of mistake do it:
 *
 *  - a locale `targets` does not know (a casing slip, "pt-pt" for "pt-PT", or a
 *    stale code) drops that one locale out of the production bucket;
 *  - an absent, empty, or non-array list empties the bucket ENTIRELY, so every
 *    error lands on the non-production side and `validate.mjs all` exits 0 while
 *    printing hundreds of them.
 *
 * The second is the one worth spelling out, because `productionTargets` being
 * missing looks like an innocent state and is not one. There is no legitimate
 * reason for this repo to hold nothing to a production standard: locales are
 * served from it. If the honest answer really were "nothing is production yet",
 * the honest behaviour is a loud failure telling whoever reads it to populate
 * the list, never a green run that has silently gated on nothing.
 *
 * Returned rather than thrown so `scripts/test.mjs` can assert each case without
 * a doctored locales.json or a subprocess. The caller below is what makes it
 * fatal.
 *
 * @returns {string|null} the failure message, or null if the list is sound.
 */
export function productionLocaleIssue(productionTargets, targetLocales) {
  if (!Array.isArray(productionTargets)) {
    return (
      `locales.json "productionTargets" is ${productionTargets === undefined ? "missing" : `not an array (got ${JSON.stringify(productionTargets)})`}. ` +
      `It must be an array of locale codes: it is the list validate.mjs gates on, so without it nothing gates and a run ` +
      `full of errors exits 0. Add it, listing the locales held to a production standard.`
    );
  }
  if (productionTargets.length === 0) {
    return (
      `locales.json "productionTargets" is empty. An empty gate is never a legitimate state: it makes validate.mjs exit 0 ` +
      `however many errors it printed. Populate it with the locales held to a production standard (the served ones, plus ` +
      `any being held to that standard ahead of going live).`
    );
  }
  const strays = productionTargets.filter((locale) => !targetLocales.includes(locale));
  if (strays.length > 0) {
    return (
      `locales.json "productionTargets" lists ${strays.length === 1 ? "a locale" : "locales"} that "targets" does not: ` +
      `${strays.join(", ")}. Every production locale must be a target locale, and a code that matches nothing silently ` +
      `drops out of the gate (check the casing: "pt-PT", not "pt-pt"). Known targets: ${targetLocales.join(", ")}`
    );
  }
  return null;
}

const productionIssue = productionLocaleIssue(config.productionTargets, TARGET_LOCALES);
if (productionIssue) fail(productionIssue);

/**
 * The subset of TARGET_LOCALES held to a production standard.
 *
 * This is what `scripts/validate.mjs` exits non-zero on, and the only thing it
 * does. Errors in every other locale are still found, printed and counted; they
 * simply do not gate. See locales.json's `$comment` for the provenance of the
 * list and for why it deliberately differs from the front-end's
 * `app/lib/production-locales.json`. Guaranteed non-empty by the check above.
 */
export const PRODUCTION_LOCALES = config.productionTargets;

export function assertTargetLocale(locale) {
  if (locale === SOURCE_LOCALE || locale === SOURCE_REPO_LOCALE) {
    fail(
      `refusing to treat "${locale}" as a target locale. English is authored in the source repos ` +
        `and read from a front-end checkout, never held here.`
    );
  }
  if (!TARGET_LOCALES.includes(locale)) {
    fail(`unknown target locale "${locale}". Add it to locales.json "targets" first. Known: ${TARGET_LOCALES.join(", ")}`);
  }
}

export function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}
