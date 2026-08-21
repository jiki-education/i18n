// Reading and writing the two file formats this repo holds: JSON catalogs and
// Markdown-with-frontmatter prose. Deliberately dependency-free (no gray-matter,
// no yaml): the frontmatter this repo handles is the small subset of YAML the
// content packages actually use, every writer of it is in this repo or the
// front-end, and a zero-dependency scripts/ directory runs on a bare `node`
// with no install step.

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

/**
 * Split a Markdown file into { data, body, raw }.
 *
 * `data` is NESTED, mirroring the frontmatter's own shape: a mapping is an
 * object, a sequence is an array of strings, everything else is a string. It
 * was once flat, and the flattening was a silent bug rather than a
 * simplification: indentation was stripped before the split, so `seo:`'s
 * `description` landed at top level as if it had been written there, and a
 * caller asking for the dotted path `seo.description` got `undefined` and no
 * complaint. Anything checking a nested field therefore checked nothing.
 *
 * Read it with `frontmatterValue(data, "seo.description")` rather than by
 * indexing, so a caller never has to know which fields happen to be nested.
 *
 * The supported subset is exactly what `content/` and `curriculum/` contain,
 * and no more: scalars (optionally quoted, and a quoted scalar may itself
 * contain a colon), nested mappings, `- ` block sequences, and `[...]` flow
 * sequences whether written on one line or wrapped across several. A shape
 * outside that subset is not silently dropped: it reaches the key-parity check
 * as a leaf whose path does not match English, which is an ERROR that names it.
 */
export function parseFrontmatter(text) {
  const match = FRONTMATTER.exec(text);
  if (!match) return { data: {}, body: text, raw: text };

  return { data: parseBlock(frontmatterLines(match[1]), 0).value, body: text.slice(match[0].length), raw: text };
}

/**
 * Frontmatter as `{ indent, text }`, blanks and comments dropped, and any flow
 * collection wrapped across lines joined back onto the line that opened it.
 *
 * The join is what makes wrapping invisible to everything downstream. Prettier
 * reflows a long `keywords: [...]` in the front-end whenever it crosses the
 * print width, so the same field is one line in one post and four in the next,
 * and a reader that saw the difference would report a phantom empty value for
 * whichever posts happened to be long.
 */
function frontmatterLines(block) {
  const lines = [];

  for (const raw of block.split(/\r?\n/)) {
    if (!raw.trim() || raw.trimStart().startsWith("#")) continue;

    const previous = lines[lines.length - 1];
    if (previous && unclosed(previous.text)) {
      // A continuation, not a line of its own: it belongs to the collection the
      // previous line opened, however deeply that one is indented.
      previous.text = `${previous.text} ${raw.trim()}`;
      continue;
    }

    lines.push({ indent: raw.length - raw.trimStart().length, text: raw.trim() });
  }

  // A bare `key:` whose flow collection was written on the line BELOW it, which
  // is what Prettier produces once the one-line form crosses the print width.
  // Pulling it back up is what stops it reading as an empty mapping, which is
  // how it would silently lose the field: an empty mapping has no leaves, so it
  // vanishes from the parity check rather than failing it.
  for (let i = lines.length - 1; i > 0; i -= 1) {
    const opensFlow = lines[i].text.startsWith("[") || lines[i].text.startsWith("{");
    if (opensFlow && lines[i].indent > lines[i - 1].indent && lines[i - 1].text.endsWith(":")) {
      lines[i - 1].text = `${lines[i - 1].text} ${lines[i].text}`;
      lines.splice(i, 1);
    }
  }

  return lines;
}

/** Whether a line leaves a `[` or `{` open, counting only brackets outside quotes. */
function unclosed(text) {
  let depth = 0;
  let quote = null;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quote) {
      if (char === "\\") i += 1;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === "[" || char === "{") depth += 1;
    else if (char === "]" || char === "}") depth -= 1;
  }

  return depth > 0;
}

/**
 * One indentation level, from `start`, as { value, next }.
 *
 * Returns an array when the level is `- ` items and an object otherwise, and
 * hands back the index it stopped at so the caller can carry on. Indentation is
 * the only thing that decides nesting, matching YAML and matching how these
 * files are actually written.
 */
function parseBlock(lines, start) {
  const indent = lines[start].indent;
  const asSequence = lines[start].text.startsWith("- ") || lines[start].text === "-";
  const value = asSequence ? [] : {};
  let i = start;

  while (i < lines.length && lines[i].indent >= indent) {
    // Deeper than this level and not consumed by the line above: a shape the
    // subset does not cover. Skipping it keeps the reader total, and the
    // key-parity check is what makes the omission visible.
    if (lines[i].indent > indent) {
      i += 1;
      continue;
    }

    const { text } = lines[i];

    if (asSequence) {
      value.push(scalar(text.replace(/^-\s*/, "")));
      i += 1;
      continue;
    }

    const sep = text.indexOf(":");
    if (sep === -1) {
      i += 1;
      continue;
    }

    const key = text.slice(0, sep).trim();
    const rest = text.slice(sep + 1).trim();
    i += 1;

    // A value on the same line wins; only a bare `key:` looks below itself, and
    // only when something is actually indented under it. `key:` with nothing
    // under it stays the empty string it has always been.
    if (rest !== "") value[key] = scalar(rest);
    else if (i < lines.length && lines[i].indent > indent) {
      const nested = parseBlock(lines, i);
      value[key] = nested.value;
      i = nested.next;
    } else value[key] = "";
  }

  return { value, next: i };
}

/** One scalar: a flow sequence becomes an array, anything else an unquoted string. */
function scalar(text) {
  if (text.startsWith("[") && text.endsWith("]")) return splitFlow(text.slice(1, -1)).map(unquote);
  return unquote(text);
}

function unquote(text) {
  const value = text.trim();
  if (/^"[\s\S]*"$/.test(value) || /^'[\s\S]*'$/.test(value)) return value.slice(1, -1).replace(/\\"/g, '"');
  return value;
}

/**
 * Split a flow sequence's body on the commas that are not inside a quoted item.
 *
 * Items are handed back with their quotes still on, for `unquote` to take off,
 * so a deliberately empty `""` survives and the separator-only debris of `[]`
 * or of a trailing comma does not.
 */
function splitFlow(body) {
  const items = [];
  let current = "";
  let quote = null;

  for (let i = 0; i < body.length; i += 1) {
    const char = body[i];
    current += char;
    if (quote) {
      if (char === "\\") current += body[++i] ?? "";
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === ",") {
      items.push(current.slice(0, -1));
      current = "";
    }
  }
  items.push(current);

  return items.filter((item) => item.trim() !== "");
}

/**
 * One frontmatter field by dotted path: `frontmatterValue(data, "seo.description")`.
 *
 * The whole point of the nested reader. Every caller that names a field names
 * it this way, so `title` and `seo.description` are written the same and a
 * field moving into a block is not a silent loss of coverage.
 */
export function frontmatterValue(data, dottedPath) {
  let node = data;
  for (const segment of dottedPath.split(".")) {
    if (node === null || typeof node !== "object" || Array.isArray(node) || !(segment in node)) return undefined;
    node = node[segment];
  }
  return node;
}

/**
 * Every leaf of a frontmatter object as a dotted path, in document order.
 *
 * An array is a LEAF, not a branch: `seo.keywords` is one field whose value
 * happens to be a list, and a translation is free to hold a different number of
 * keywords than English does. Descending into it would turn that freedom into a
 * parity error.
 */
export function frontmatterPaths(data, prefix = "") {
  const paths = [];
  for (const [key, value] of Object.entries(data)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) paths.push(...frontmatterPaths(value, path));
    else paths.push(path);
  }
  return paths;
}

// ------------------------------------------------- frontmatter syntax check --
//
// ## Two parsers read these bytes, and they must not disagree
//
// The reader above is a minimal one, on purpose (see its comment). Publishing
// uses a different one: the shared @jiki.io/content-renderer, which is js-yaml.
// A file the minimal reader accepts and js-yaml rejects therefore validates
// clean and then blows up in publish, in an unrelated phase, on whichever locale
// happens to hold it. That is exactly what happened: one Hungarian guide carried
//
//     seo:
//       description: Az agentikus kódolás alapfogalmai kezdőknek magyarázva: mik ...
//
// The minimal reader splits on the FIRST colon and is happy. YAML reads the
// second `: ` as a second key on the same line and errors. The translation was
// fine; the quoting was not. Nothing between writing it and `publish.mjs` said a
// word.
//
// This is the shape of mistake translation makes far more often than English
// does, because a colon is ordinary punctuation in many languages where English
// would use a dash or a comma.
//
// So `frontmatterSyntaxIssues` reports every construct that is either invalid
// YAML or read DIFFERENTLY by the two parsers, and validate treats each as a
// blocking ERROR. It is dependency-free, like the rest of this file, so it runs
// with no node_modules at all; validate additionally cross-checks against the
// real js-yaml whenever the install is present, and scripts/test.mjs pins the two
// to the same verdict. The detector is the floor, not the authority.

/** Plain-scalar first characters YAML reads as markup rather than as text. */
const YAML_INDICATORS = ["|", ">", "&", "*", "!", "%", "@", "`", "}", "]", ","];

const truncate = (text) => (text.length > 60 ? `${text.slice(0, 57)}...` : text);

/**
 * Why a file's frontmatter is not valid (or not unambiguous) YAML, as messages.
 *
 * Each message names the field and says what to do about it, because the fix is
 * always the same shape and always trivial once you can see it: quote the value.
 * A file with no frontmatter at all returns nothing; that is a different
 * complaint, and checkProse's missing-stamp check already makes it.
 */
export function frontmatterSyntaxIssues(text) {
  const match = FRONTMATTER.exec(text);
  if (!match) return [];

  const issues = [];
  const block = match[1];

  for (const raw of block.split(/\r?\n/)) {
    if (raw.trim() === "---") {
      issues.push(
        'a "---" line inside the frontmatter: the block closed on the line above, so everything after it is body ' +
          "text and every field below is invisible to the renderer. Delete the stray fence."
      );
    }
    if (/^ *\t/.test(raw)) issues.push("a tab in the indentation. YAML forbids tabs there; use spaces.");
  }

  // A stack of open mappings, so a field can be named by its DOTTED path and a
  // duplicate key can be told from a repeated one. `seo.description` and
  // `summary.description` sit at the same indent and are not duplicates of each
  // other, so tracking by indent alone would invent an error on a perfectly
  // ordinary post. js-yaml rejects a real duplicate; the minimal reader silently
  // keeps the last one, which is the same divergence in a quieter form.
  const scopes = [{ indent: -1, keys: new Set(), prefix: "" }];
  let opener = "";

  for (const line of frontmatterLines(block)) {
    if (line.text === "---") continue; // already reported above

    while (scopes.length > 1 && line.indent < scopes.at(-1).indent) scopes.pop();
    if (line.indent > scopes.at(-1).indent) scopes.push({ indent: line.indent, keys: new Set(), prefix: opener });
    const scope = scopes.at(-1);

    if (line.text.startsWith("- ") || line.text === "-") {
      issues.push(...scalarIssues(line.text.replace(/^-\s*/, ""), scope.prefix ? `an item of "${scope.prefix}"` : "a list item"));
      continue;
    }

    const sep = line.text.indexOf(":");
    if (sep === -1) {
      issues.push(`"${truncate(line.text)}" is neither a "key: value" pair nor a "- " list item.`);
      continue;
    }

    const key = line.text.slice(0, sep).trim();
    const rest = line.text.slice(sep + 1).trim();
    const dotted = scope.prefix ? `${scope.prefix}.${key}` : key;
    opener = dotted;

    if (scope.keys.has(key)) issues.push(`"${dotted}" appears twice in the same block. YAML rejects a duplicated key.`);
    scope.keys.add(key);

    issues.push(...scalarIssues(rest, `"${dotted}"`));
  }

  return issues;
}

/** What is wrong with one scalar (or flow collection) written after a `key:` or a `- `. */
function scalarIssues(value, what) {
  if (value === "") return [];

  if (value.startsWith("[") || value.startsWith("{")) {
    return unclosed(value) ? [`${what}: a flow collection that is never closed.`] : [];
  }

  const first = value[0];
  if (first === '"' || first === "'") {
    if (closesQuote(value)) return [];
    return [`${what}: a quoted value whose closing ${first === '"' ? "double" : "single"} quote is missing.`];
  }

  const issues = [];

  if (YAML_INDICATORS.includes(first)) {
    issues.push(`${what}: an unquoted value starting with "${first}", which YAML reads as markup rather than as text. Wrap the value in double quotes.`);
  }

  // The one this was written for. `: ` inside a plain scalar starts a second
  // mapping pair, and a trailing `:` does the same thing with an empty value.
  if (/:\s/.test(value) || value.endsWith(":")) {
    issues.push(
      `${what}: an unquoted value containing a colon followed by a space, which YAML reads as a second key rather ` +
        "than as punctuation. Wrap the whole value in double quotes (escaping any double quote inside it)."
    );
  }

  if (/\s#/.test(value)) {
    issues.push(`${what}: an unquoted value containing " #", which YAML reads as the start of a comment. Wrap the value in double quotes.`);
  }

  return issues;
}

/** Whether a value that opens with a quote closes it, on that quote, at the very end. */
function closesQuote(value) {
  const quote = value[0];
  for (let i = 1; i < value.length; i += 1) {
    if (quote === '"' && value[i] === "\\") {
      i += 1;
      continue;
    }
    if (value[i] === quote) {
      // `''` inside a single-quoted scalar is an escaped apostrophe, not the end.
      if (quote === "'" && value[i + 1] === "'") {
        i += 1;
        continue;
      }
      return i === value.length - 1;
    }
  }
  return false;
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
 *
 * A NON-EMPTY ARRAY is a BRANCH: `tags: ["a", "b"]` flattens to `tags.0` and
 * `tags.1`, each an ordinary string leaf. That is the opposite of what
 * `frontmatterPaths` does with an array, and deliberately so, because the two
 * answer different questions. A post's `seo.keywords` is a free list whose length
 * is the translator's business, so descending into it would turn that freedom
 * into a parity error. A catalog array is a POSITIONAL, enumerated set (a
 * project's `tags`, one per English tag, in English's order), and everything a
 * catalog's machinery does assumes string leaves: the sentinel, per-key
 * staleness, per-key placeholder and tag checks, and the gap count that decides
 * whether a locale is production-ready.
 *
 * Treating an array as one opaque leaf breaks all of that at once, and the
 * dangerous half is silent rather than loud. `stubAgainst` refuses outright and
 * `checkCatalog` reports a wrong-type error, which are both fine. But publish's
 * own sentinel count compares each leaf to `�`, and an array is never equal to
 * it, so an entirely untranslated `tags` would contribute ZERO gaps and let the
 * locale publish as production-ready. Descending is what makes every one of those
 * mechanisms apply per element, with no per-type special case anywhere.
 *
 * An EMPTY array stays a leaf, exactly like an empty object: there is nothing to
 * descend into, and it is structure rather than a gap.
 */
export function flatten(tree, prefix = "", out = {}) {
  for (const [key, value] of Object.entries(tree)) {
    const dotted = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && Object.keys(value).length > 0) {
      flatten(value, dotted, out);
    } else {
      out[dotted] = value;
    }
  }
  return out;
}

/**
 * Every dotted path in a tree whose value is a NON-EMPTY ARRAY.
 *
 * The companion to `flatten`: flattening throws away the array/object
 * distinction (both become dotted paths), so rebuilding needs it handed back.
 * Deriving it from the SOURCE tree rather than guessing from key shape is what
 * makes `unflatten` exact. The guess ("all keys are 0..n-1, so it is an array")
 * is available and wrong: it would silently convert a catalog that legitimately
 * holds numeric string keys into an array, moving the published bytes and so the
 * artifact's hash, to a URL the front-end never asks for.
 *
 * Matches `flatten`'s descent rule exactly, empty arrays included, so the two
 * cannot disagree about what a branch is.
 */
export function arrayPaths(tree, prefix = "", out = new Set()) {
  for (const [key, value] of Object.entries(tree)) {
    const dotted = prefix ? `${prefix}.${key}` : key;
    if (!value || typeof value !== "object" || Object.keys(value).length === 0) continue;
    if (Array.isArray(value)) out.add(dotted);
    arrayPaths(value, dotted, out);
  }
  return out;
}

/**
 * Rebuild a nested catalog from a flat map, in the flat map's own key order.
 *
 * `arrays` is the set of dotted paths that must come back as ARRAYS rather than
 * objects, as produced by `arrayPaths` over the tree the flat map came from.
 * Without it `tags.0`/`tags.1` would rebuild as `{"0": …, "1": …}`, which is a
 * different published artifact from the one the front-end reads. Anything with no
 * arrays in it (which is every catalog in this repo bar project metadata) passes
 * an empty set and is unaffected.
 */
export function unflatten(flat, arrays = new Set()) {
  const out = {};
  for (const [dotted, value] of Object.entries(flat)) {
    const parts = dotted.split(".");
    let node = out;
    for (const [index, part] of parts.slice(0, -1).entries()) {
      node[part] ??= arrays.has(parts.slice(0, index + 1).join(".")) ? [] : {};
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
 * Dropping is right even though a key English does not have is legitimate while a
 * deploy is in flight (see "deploy overlap" in checks.mjs, where such a key is a
 * WARN rather than an error). Bringing a catalog to English's exact shape is what
 * this is FOR, and it only ever runs because someone ran `stub`: this is the tool
 * that ends an overlap, so an ahead-of-English key belongs to the pass that means
 * it and is added back the same way it was added the first time.
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
  // Rebuilt against ENGLISH's array shape, like everything else here: parity is
  // defined by English, so an array in English comes back as an array however the
  // target happened to hold it.
  return unflatten(out, arrayPaths(source));
}

/**
 * Translatable keys only. An empty container is structure and an `∅` key is
 * unreachable, so neither is a key anyone can fill and neither belongs in the
 * denominator. `inapplicable` is reported alongside rather than hidden.
 *
 * `english` scopes the count to the keys English actually defines. A catalog may
 * legitimately hold a key English does not have yet, or no longer has (see
 * "deploy overlap" in checks.mjs), and such a key is nobody's remaining work: it
 * belongs in neither half of a "how much is translated" fraction. Pass English
 * wherever it is to hand. Omit it and the tree's own keys are counted, which is
 * the right answer to the narrower question "what is left in THIS file".
 */
export function countSentinels(tree, { english = null } = {}) {
  const flat = flatten(tree);
  const inEnglish = english === null ? null : flatten(english);
  const values = Object.entries(flat)
    .filter(([key]) => inEnglish === null || key in inEnglish)
    .map(([, value]) => value)
    .filter((value) => !isEmptyContainer(value));
  const inapplicable = values.filter((value) => value === INAPPLICABLE).length;
  const stubbed = values.filter((value) => value === SENTINEL).length;
  const total = values.length - inapplicable;
  return { total, stubbed, translated: total - stubbed, inapplicable };
}

/**
 * One locale's catalog counted against ENGLISH's key set.
 *
 * The denominator is English, so a key English defines and the target does not
 * hold is `absent` and counts against the locale. Counting the target's own keys
 * instead makes a deleted key vanish from both halves of the fraction, which
 * reads as 100% precisely because the gap is total.
 *
 * `target` is null when the locale has no file at all, which is the same
 * question asked of every key at once.
 *
 * Both ways a key can be untranslated are counted separately, because they need
 * different work: `stubbed` is present holding `�` (translate it), `absent` is
 * not in the file at all (`stub` it, then translate it). `total` is their sum
 * plus `translated`.
 *
 * Outside the fraction: a key the target marks `∅`, and a key the target does
 * not hold that this locale can never reach. Neither is a key anyone can fill.
 * An unreachable key the target holds as `�` is NOT excluded: it is real
 * remaining work (marking it `∅`), and `validate --shippable` blocks on it.
 */
export function countAgainstEnglish(english, target, { locale }) {
  const flatEnglish = flatten(english);
  const flatTarget = target === null ? null : flatten(target);

  let translated = 0;
  let stubbed = 0;
  let absent = 0;
  let inapplicable = 0;

  for (const [key, source] of Object.entries(flatEnglish)) {
    if (isEmptyContainer(source)) continue;

    if (flatTarget === null || !(key in flatTarget)) {
      if (isUnreachablePluralKey(key, locale, flatEnglish)) inapplicable += 1;
      else absent += 1;
      continue;
    }

    const value = flatTarget[key];
    if (value === INAPPLICABLE) inapplicable += 1;
    else if (value === SENTINEL || isEmptyContainer(value)) stubbed += 1;
    else translated += 1;
  }

  return { total: translated + stubbed + absent, translated, stubbed, absent, inapplicable };
}
