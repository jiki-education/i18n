//
// kept-english — the terms one language has AGREED stay English, read from that
// language's glossary in the translator repo.
//
// ## Why this exists
//
// A translated page can carry a frontmatter value that is byte-identical to its
// English source for two opposite reasons: nobody translated it, or it is
// correctly the same word in both languages. `isUntranslatedFrontmatter` in
// checks.mjs can tell that the bytes match; it cannot tell which reason applies,
// which is why it only ever WARNs. Coverage has to do better than a warning,
// because it produces a NUMBER, and a number that permanently counts `Luhn` as
// outstanding is a number people learn to ignore.
//
// So the question is answered the way the translator repo answers the identical
// question for catalog values, in scripts/lib/english-identical.js: never by
// asking the party being checked, always by DERIVING it from something that
// outlives the run. Of the three sources that module uses, two are available
// here. Structure ("there is no word in this value to translate") is already
// handled inside `isUntranslatedFrontmatter`, whose 2+ letter test is the same
// rule. The exercise's own code does not apply to a page title. What is left is
// the third and only one involving a human:
//
//   THE LANGUAGE'S GLOSSARY. A row whose English column and target column hold
//   the same text is that language recording, once and with a native speaker,
//   that it keeps this term in English. It outranks any agent's opinion, and it
//   is written on the other side of the guard from the model being checked.
//
// Anything else identical to English is neither confirmed translated nor
// confirmed a gap, and coverage reports it as exactly that: `needs_review`. See
// the header of coverage.mjs for what the three buckets mean.
//
// ## The cross-repo read, and why it is allowed
//
// Glossaries live in the translator repo, and this repo must not depend on that
// one for translated CONTENT. This is not content: it is guidance, the same
// category as the guides that `translate.mjs` already reads from a translator
// checkout resolved by `--translator-repo=` or `JIKI_TRANSLATOR_REPO`. This
// module resolves it the same way, so a caller that already sets the variable
// needs to do nothing.
//
// The dependency is OPTIONAL and fails in the safe direction. With no translator
// checkout there are no exemptions, so every identical value lands in
// `needs_review` rather than in `done`: a run without the glossary can
// under-credit a locale, never over-credit one. That matters because coverage
// runs in CI, must never exit non-zero, and must never report a locale more
// finished than it is.
//
// NEVER runs git.
//

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

/**
 * The translator checkout to read glossaries from, or null if there is none.
 *
 * Resolved exactly as translate.mjs resolves it, and probed for the directory
 * that actually holds the glossaries so a path pointing at some other repo is
 * rejected rather than silently yielding zero terms.
 */
export function translatorRepo(explicit) {
  const candidates = [explicit, process.env.JIKI_TRANSLATOR_REPO, path.resolve(REPO_ROOT, "..", "translator")].filter(Boolean);
  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (fs.existsSync(path.join(resolved, "languages"))) return resolved;
  }
  return null;
}

/** `**bold**`, `_italic_` and backticks stripped; a glossary cell's plain text. */
function cellText(cell) {
  return cell
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .replace(/(^|\s)_([^_]+)_(?=\s|$)/g, "$1$2")
    .trim();
}

/** A cell may offer alternatives separated by " / "; each is its own candidate. */
function alternatives(cell) {
  return cellText(cell)
    .split(" / ")
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * The glossary files that make up one locale's effective glossary.
 *
 * A locale belongs to a family only if `languages/<family>/` actually EXISTS
 * (translator CLAUDE.md, "Language families"): `de` is not a family of one, and
 * `pt-BR` is one only because `languages/pt/` is there. A family locale's
 * effective glossary is the family's rows plus its own, concatenated, because a
 * term lives in exactly one of the two files and never in both.
 */
export function glossaryFiles(lang, repo) {
  if (!repo) return [];
  const files = [];
  const family = lang.includes("-") ? lang.slice(0, lang.indexOf("-")) : null;
  if (family && fs.existsSync(path.join(repo, "languages", family))) {
    files.push(path.join(repo, "languages", family, "glossary.md"));
  }
  files.push(path.join(repo, "languages", lang, "glossary.md"));
  return files.filter((file) => fs.existsSync(file));
}

/**
 * Every glossary row in one file whose English term and target rendering are the
 * same text, as the TARGET column's spelling.
 *
 * A row matches case-insensitively, because `| string | String | en |` is the
 * same decision as `| string | string | en |`. The terms come back LOWERCASED,
 * and callers must lowercase what they look up, for the same reason one step
 * further on: a glossary writes a term as it appears in prose (`scope`) and a
 * page title writes it as a heading (`Scope`), and those are the same decision
 * about the same word. Capitalisation is not what makes a title translated.
 *
 * The parenthetical disambiguation the English column often carries
 * ("input (to a function)") is not part of the term and comes off.
 *
 * Split out from `keptEnglishTerms` so it is testable without a checkout.
 */
export function keptEnglishTermsIn(markdown) {
  const terms = new Set();
  for (const line of markdown.split("\n")) {
    if (!line.trim().startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1);
    if (cells.length < 2) continue;
    if (/^-+$/.test(cells[0].trim())) continue; // the table's rule row
    const english = alternatives(cells[0]).map((term) => term.replace(/\s*\([^)]*\)\s*$/, "").trim());
    const target = alternatives(cells[1]);
    if (!english.length || !target.length) continue;
    for (const rendering of target) {
      if (english.some((term) => term.toLowerCase() === rendering.toLowerCase())) terms.add(rendering.toLowerCase());
    }
  }
  return terms;
}

// A fact about two files on disk, not about any one page, so a run over 33
// locales and 3000 items reads each glossary once. Safe to hold for the process
// because this module only ever reads.
const cache = new Map();

/**
 * The exact strings this language has agreed stay English. Empty when there is
 * no translator checkout, which is the safe direction: see the header.
 */
export function keptEnglishTerms(lang, explicitRepo) {
  if (!explicitRepo && cache.has(lang)) return cache.get(lang);

  const repo = translatorRepo(explicitRepo);
  const terms = new Set();
  for (const file of glossaryFiles(lang, repo)) {
    for (const term of keptEnglishTermsIn(fs.readFileSync(file, "utf8"))) terms.add(term);
  }

  if (!explicitRepo) cache.set(lang, terms);
  return terms;
}
