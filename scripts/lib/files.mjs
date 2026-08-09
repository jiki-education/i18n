// Reading and writing the two file formats this repo holds: JSON catalogs and
// Markdown-with-frontmatter prose. Deliberately dependency-free (no gray-matter,
// no yaml): the frontmatter this repo handles is a flat block of `key: value`
// scalars, every writer of it is in this repo, and a zero-dependency scripts/
// directory runs on a bare `node` with no install step.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { INAPPLICABLE, SENTINEL, fail } from "./constants.mjs";
import { isUnreachablePluralKey } from "./plurals.mjs";

export function readText(file) {
  return fs.readFileSync(file, "utf8");
}

export function writeText(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

export function readJson(file) {
  try {
    return JSON.parse(readText(file));
  } catch (error) {
    fail(`invalid JSON in ${file}: ${error.message}`);
  }
}

/** Catalogs are written 2-space indented with a trailing newline, like the source repos. */
export function writeJson(file, value) {
  writeText(file, `${JSON.stringify(value, null, 2)}\n`);
}

/**
 * md5 of a file's entire bytes, matching `md5 -q` / `md5sum`. This is the
 * `en_md5` staleness stamp the translator repo already uses; it is reused
 * verbatim here rather than replaced with a snapshot tree.
 */
export function md5File(file) {
  return crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");
}

export function md5String(value) {
  return crypto.createHash("md5").update(value).digest("hex");
}

/** The front-end's cache-tree fingerprint: first 12 hex chars of SHA-256. */
export function contentHash(content) {
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 12);
}

// ------------------------------------------------------------- frontmatter --

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/** Split a Markdown file into { data, body, raw }. */
export function parseFrontmatter(text) {
  const match = FRONTMATTER.exec(text);
  if (!match) return { data: {}, body: text, raw: text };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    let value = line.slice(sep + 1).trim();
    if (/^"[\s\S]*"$/.test(value) || /^'[\s\S]*'$/.test(value)) {
      value = value.slice(1, -1).replace(/\\"/g, '"');
    }
    data[key] = value;
  }

  return { data, body: text.slice(match[0].length), raw: text };
}

/**
 * Write one `en_md5` stamp into a Markdown file, changing nothing else.
 *
 * A surgical edit rather than a parse-and-reserialise, because the reader above
 * is deliberately minimal: it flattens frontmatter to scalars, so `seo:` (a
 * nested mapping) and `tags:` (a sequence) do not survive a round trip. Posts
 * carry both, and both reach a published artifact, so reserialising to add one
 * key would silently rewrite the frontmatter publish reads.
 *
 * Only the stamp line is touched: replaced where one exists, appended as the
 * last frontmatter line where it does not. Every other byte, including quoting,
 * indentation and line endings, is reproduced exactly.
 */
export function stampFrontmatter(raw, md5) {
  const match = FRONTMATTER.exec(raw);
  if (!match) fail("cannot stamp a file with no frontmatter");

  const eol = match[0].includes("\r\n") ? "\r\n" : "\n";
  const block = match[1];
  const stamped = /^en_md5:.*$/m.test(block)
    ? block.replace(/^en_md5:.*$/m, `en_md5: ${md5}`)
    : `${block}${eol}en_md5: ${md5}`;

  const trailing = match[0].slice(match[0].lastIndexOf("---") + 3);
  return `---${eol}${stamped}${eol}---${trailing}${raw.slice(match[0].length)}`;
}

// ---------------------------------------------------------------- webvtt ----
//
// WebVTT has no frontmatter and no sibling convention, so a subtitle file
// carries its staleness stamp as a `NOTE en_md5 <hash>` block under the header.
// `NOTE` is WebVTT's own comment syntax: every player skips it, so the stamp is
// inert in the file it stamps, and it needs no second file to go missing.

const VTT_NOTE = /^NOTE (en_md5|tidied_md5) ([0-9a-f]{32})\s*$/gm;

/** The `NOTE <key> <hash>` stamps of a VTT, as { en_md5, tidied_md5 }. */
export function parseVttNotes(text) {
  const data = {};
  for (const match of text.matchAll(VTT_NOTE)) data[match[1]] = match[2];
  return data;
}

/**
 * Write one `NOTE en_md5` stamp into a VTT, changing nothing else.
 *
 * Surgical for the same reason stampFrontmatter is: this edits a file a human
 * may have hand-tuned, and every cue, timing and blank line is reproduced
 * exactly. The stamp is replaced where one exists and inserted as its own block
 * directly under the `WEBVTT` header where it does not, which is the only place
 * a NOTE may precede the first cue.
 */
export function stampVttNote(raw, md5) {
  if (/^NOTE en_md5 .*$/m.test(raw)) return raw.replace(/^NOTE en_md5 .*$/m, `NOTE en_md5 ${md5}`);

  const header = /^(﻿?WEBVTT[^\n]*\r?\n)/.exec(raw);
  if (!header) fail("cannot stamp a file with no WEBVTT header");
  const eol = header[1].includes("\r\n") ? "\r\n" : "\n";
  const rest = raw.slice(header[1].length);
  // A NOTE block ends at a blank line, so one is guaranteed after it rather than
  // borrowed from whatever happened to follow the header.
  const separated = /^\r?\n/.test(rest) ? rest : `${eol}${rest}`;
  return `${header[1]}${eol}NOTE en_md5 ${md5}${eol}${separated}`;
}

/** The timestamp lines of a VTT, in order. One per cue, so also the cue count. */
const VTT_TIMESTAMP = /^(\d{2,}:)?\d{2}:\d{2}[.,]\d{3}\s+-->\s+(\d{2,}:)?\d{2}:\d{2}[.,]\d{3}/;

export function vttTimestamps(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => VTT_TIMESTAMP.test(line));
}

/**
 * A VTT's caption text alone: no header, no NOTE block, no timing lines.
 *
 * This is the VTT analogue of a prose body, and it is what the copied-English
 * check compares. Comparing whole files would never fire, because the target
 * carries a stamp English does not.
 */
export function vttBody(text) {
  const lines = [];
  let inNote = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (/^﻿?WEBVTT\b/.test(line)) continue;
    if (/^NOTE\b/.test(line)) {
      inNote = true;
      continue;
    }
    if (line === "") {
      inNote = false;
      continue;
    }
    if (inNote) continue;
    if (VTT_TIMESTAMP.test(line)) continue;
    lines.push(line);
  }
  return lines.join("\n");
}

// ----------------------------------------------------------- catalog trees --

/**
 * An empty object or array: catalog structure, not a translatable leaf.
 *
 * `{}` is a real thing a catalog holds (an exercise with a `functions` section
 * and nothing in it yet), and it is the one value that flattens to no key at
 * all. Every consumer of `flatten` has to know the difference between a key
 * whose value is structure and a key whose value is a string, so the test lives
 * here rather than being re-derived at each call site.
 */
export function isEmptyContainer(value) {
  return value !== null && typeof value === "object" && Object.keys(value).length === 0;
}

/**
 * Flatten a nested catalog to { "dotted.key": "value" }, in depth-first source order.
 *
 * An empty container is a LEAF, not a branch. Recursing into one yields nothing,
 * which makes the key invisible to key parity, and anything rebuilding a tree
 * from the flat map then drops it silently. Emitting the container itself keeps
 * the key visible; `isEmptyContainer` is how a caller tells it from a string.
 */
export function flatten(tree, prefix = "", out = {}) {
  for (const [key, value] of Object.entries(tree)) {
    const dotted = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0) {
      flatten(value, dotted, out);
    } else {
      out[dotted] = value;
    }
  }
  return out;
}

/** Rebuild a nested catalog from a flat map, in the flat map's own key order. */
export function unflatten(flat) {
  const out = {};
  for (const [dotted, value] of Object.entries(flat)) {
    const parts = dotted.split(".");
    let node = out;
    for (const part of parts.slice(0, -1)) {
      node[part] ??= {};
      node = node[part];
    }
    node[parts.at(-1)] = value;
  }
  return out;
}

/**
 * Rebuild `target` against `source`'s key tree, in `source`'s own key order.
 *
 * Keys only in the target are dropped (parity is defined by English). Keys only
 * in the source, or whose target value is already the sentinel, become the
 * sentinel. Every other value is reproduced byte for byte, because it may be a
 * native speaker's decision and nothing here re-litigates one.
 *
 * A key whose English value is an empty container is reproduced as that empty
 * container. It is structure, not a missing translation: there is nothing to
 * translate and a sentinel there would be a lie about the file's state.
 *
 * A plural key `locale` can never reach becomes `∅`. That is decided by the
 * TARGET locale alone and never by what English holds: English carries the union
 * of plural categories, so its own `∅` on a key another language needs must NOT
 * propagate. A locale that has the category gets `�` there and the key counts as
 * a real gap, which is correct: that language does need a string nobody has
 * written yet.
 *
 * This is the same rule as the translator repo's `scripts/catalog-stub`, applied
 * to every catalog type rather than only the app's.
 */
export function stubAgainst(source, target, { locale = null } = {}) {
  const flatSource = flatten(source);
  const flatTarget = flatten(target);
  const out = {};
  for (const [key, english] of Object.entries(flatSource)) {
    if (isEmptyContainer(english)) {
      out[key] = Array.isArray(english) ? [] : {};
      continue;
    }
    // Neither a string nor an empty container leaves no correct move: copying
    // English is banned and a sentinel would destroy the value. Say so instead.
    if (typeof english !== "string") {
      fail(`${key} in English is ${english === null ? "null" : typeof english}; catalogs hold strings and empty containers only`);
    }
    if (locale && isUnreachablePluralKey(key, locale, flatSource)) {
      out[key] = INAPPLICABLE;
      continue;
    }
    // An existing `∅` that this run cannot justify is demoted to `�`, so a
    // hand-written one on a reachable key becomes the gap it really is. No
    // locale means nothing is provably unreachable, so nothing is written.
    const existing = flatTarget[key];
    const keep = typeof existing === "string" && existing !== SENTINEL && existing !== INAPPLICABLE;
    out[key] = keep ? existing : SENTINEL;
  }
  return unflatten(out);
}

/**
 * Translatable keys only. An empty container is structure and an `∅` key is
 * unreachable, so neither is a key anyone can fill and neither belongs in the
 * denominator. `inapplicable` is reported alongside rather than hidden.
 */
export function countSentinels(tree) {
  const values = Object.values(flatten(tree)).filter((value) => !isEmptyContainer(value));
  const inapplicable = values.filter((value) => value === INAPPLICABLE).length;
  const stubbed = values.filter((value) => value === SENTINEL).length;
  const total = values.length - inapplicable;
  return { total, stubbed, translated: total - stubbed, inapplicable };
}
