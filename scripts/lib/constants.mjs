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
 * The name English goes by in THIS repo. Not `en`.
 *
 * `locales/source/` is a one-way mirror of the English authored in the source
 * repos. It is read-only here: every script hard-fails rather than write to it,
 * and `scripts/publish.mjs` refuses to put anything under the English prefix on
 * R2. The front-end publishes English itself, atomically with its worker deploy.
 */
export const SOURCE_LOCALE = "source";

/** The locale English is called in the SOURCE repos (app/messages/en.json, locales/en/). */
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
        `and mirrored read-only into locales/${SOURCE_LOCALE}/.`
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
