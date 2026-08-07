// The English write guard.
//
// This repo mirrors English in as `locales/source/`, so every script here is one
// bug away from writing over the copy the front-end authors, or from publishing
// an English artifact to R2 and racing the front-end's own atomic deploy of it.
//
// Credential scoping cannot express that: the R2 key that must not be written
// (`static/i18n/app/en/...`) sits inside the prefix this repo legitimately writes
// (`static/i18n/app/`). So the guard is at script level instead, and it is a HARD
// FAIL by construction: it throws a GuardViolation, it is never a warning, never
// a filter, and never a silent skip. A silent skip is the failure mode this
// exists to prevent, because a publish that quietly dropped English would look
// exactly like a successful one.
//
// Every write in this repo goes through guardedWrite(). Every R2 key goes through
// assertPublishableKey().

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SOURCE_LOCALE, SOURCE_REPO_LOCALE, R2_PREFIX } from "./constants.mjs";
import { writeText } from "./files.mjs";

export class GuardViolation extends Error {
  constructor(message) {
    super(message);
    this.name = "GuardViolation";
  }
}

const SOURCE_TREE = path.join(REPO_ROOT, "locales", SOURCE_LOCALE) + path.sep;

/**
 * Refuse any write under locales/source/.
 *
 * `sync-source.mjs` is the ONE writer of that tree and opts out explicitly with
 * `{ syncingSource: true }`, which is greppable: if that flag appears anywhere
 * but sync-source.mjs, the guard has been routed around.
 */
export function assertWritablePath(target, { syncingSource = false } = {}) {
  const resolved = path.resolve(target);
  if (resolved.startsWith(SOURCE_TREE) && !syncingSource) {
    throw new GuardViolation(
      `refusing to write ${path.relative(REPO_ROOT, resolved)}: locales/${SOURCE_LOCALE}/ is a read-only ` +
        `mirror of English. English is authored in the front-end monorepo, beside the code. ` +
        `Only scripts/sync-source.mjs may write here.`
    );
  }
  if (!resolved.startsWith(REPO_ROOT + path.sep)) {
    throw new GuardViolation(
      `refusing to write ${resolved}: outside this repo. This repo never writes to a source repo.`
    );
  }
}

export function guardedWrite(target, content, options) {
  assertWritablePath(target, options);
  writeText(target, content);
}

export function guardedWriteJson(target, value, options) {
  guardedWrite(target, `${JSON.stringify(value, null, 2)}\n`, options);
}

// R2 keys whose locale segment is English, in any spelling this repo could
// plausibly produce. `source` is included because a mapping bug that forgot to
// translate the locale name would otherwise publish `.../source/messages-*.json`
// as a real locale.
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

/**
 * Verify the mirror has not been hand-edited.
 *
 * `locales/source/` is only trustworthy as a mirror if nothing here has ever
 * edited it, so sync-source.mjs records the md5 of everything it wrote and this
 * compares it back. Divergence is a hard error, never an auto-repair: an
 * overwrite would destroy the only evidence of what was changed and why.
 */
export function assertMirrorClean(manifest, computeMd5) {
  const diverged = [];
  for (const [relative, expected] of Object.entries(manifest.files)) {
    const file = path.join(REPO_ROOT, "locales", SOURCE_LOCALE, relative);
    if (!fs.existsSync(file)) {
      diverged.push(`${relative}: deleted since the last sync`);
      continue;
    }
    const actual = computeMd5(file);
    if (actual !== expected) diverged.push(`${relative}: edited since the last sync (${expected} -> ${actual})`);
  }
  if (diverged.length > 0) {
    throw new GuardViolation(
      `locales/${SOURCE_LOCALE}/ has been modified locally, which it never may be:\n` +
        diverged.map((line) => `  - ${line}`).join("\n") +
        `\n\nEnglish is authored in the front-end monorepo. Revert these files (git restore), make the ` +
        `change there, and re-run sync-source. To overwrite the mirror from the source repo anyway, ` +
        `re-run with --force.`
    );
  }
}
