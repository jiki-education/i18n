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
