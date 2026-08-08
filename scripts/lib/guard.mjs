// The one guard left: no English R2 key, ever.
//
// This repo used to hold a mirror of English under `locales/source/`, and with
// it a write guard, a divergence check and a set of assertions proving both were
// still armed. None of that exists now. English is read from a front-end
// checkout outside this repo, so there is no English directory here to write to
// and no mirror to diverge. Publishing English is structurally impossible rather
// than defended against, which is the stronger version of the same rule.
//
// What survives is the R2 key check, because that failure mode is unchanged and
// silent. Keys are built from path templates, not from a directory walk, so a
// bad template could still synthesise `static/i18n/app/en/...` out of a locale
// variable that was never a locale. Nothing downstream would notice: the object
// would upload cleanly and land between the front-end's own English upload and
// its worker deploy.
//
// Credential scoping cannot express the rule. The key that must not be written
// sits INSIDE the prefix this repo legitimately writes, so no bucket policy can
// separate them.
//
// It is a HARD FAIL by construction: it throws a GuardViolation, never a warning
// and never a silent skip. A publish that quietly dropped English would look
// exactly like a successful one.

import { SOURCE_LOCALE, SOURCE_REPO_LOCALE, R2_PREFIX } from "./constants.mjs";

export class GuardViolation extends Error {
  constructor(message) {
    super(message);
    this.name = "GuardViolation";
  }
}

// Every spelling of English a path template could plausibly produce. `source` is
// included because it was this repo's own name for English for a long time, and
// a leftover reference to it would otherwise publish `.../source/messages-*.json`
// as though it were a real locale.
const ENGLISH_SEGMENTS = new Set([SOURCE_REPO_LOCALE, SOURCE_LOCALE, "en-US", "en-GB", "default"]);

/**
 * Refuse any R2 key whose locale segment is English.
 *
 * The front-end publishes the English catalogs itself, atomically with its
 * worker deploy, so that the code and the copy it renders go live together. An
 * English artifact written from here would at best duplicate that, and at worst
 * land between the front-end's upload and its deploy.
 */
export function assertPublishableKey(key) {
  const normalised = key.replace(/^\/+/, "");
  if (!normalised.startsWith(`${R2_PREFIX}/`)) {
    throw new GuardViolation(`refusing to publish "${key}": every key must live under ${R2_PREFIX}/`);
  }
  for (const segment of normalised.split("/")) {
    if (ENGLISH_SEGMENTS.has(segment)) {
      throw new GuardViolation(
        `refusing to publish "${key}": segment "${segment}" is the English prefix. ` +
          `English is published by the front-end, atomically with its worker deploy, and never from here.`
      );
    }
  }
  return normalised;
}
