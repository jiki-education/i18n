// Items declared OUT of the corpus, in corpus.json.
//
// One reader, because both sides of the comparison have to agree: the English
// tree an item is discovered in, and the locale trees a translation of it is
// enumerated from. An exclusion that applied to only one of them would report an
// item as translated-but-not-expected (or the reverse) rather than as absent,
// which is the confusion the file exists to remove.
//
// corpus.json itself says what an entry means and what it costs. Nothing here
// interprets the reason string: it is written for the next human, not parsed.
//
// ## An exclusion has a SCOPE
//
// Two scopes, because "not expected to be translated" turned out to have two
// sizes and one of them was wrong:
//
//   `item` (the default)  — the whole item is out. It stops counting towards
//                           completeness, and stops being validated and
//                           published. A translated file for it stays on disk,
//                           inert.
//   `body`                — only the item's BODY is out. Its translatable
//                           frontmatter (whatever the type declares: a title, a
//                           description) is still required, still counted and
//                           still published; the Markdown body is not required,
//                           not counted, and never published.
//
// `body` exists for a not-yet-live exercise. A title and a description are card
// copy: they surface in listings and on level pages, and they are two short
// strings. The teaching content behind an exercise nobody can reach is the
// expensive part, and it is the part worth deferring. Excluding the whole item
// took the card copy with it, which is what `body` fixes.
//
// A `body` scope only means anything for a type that has a body and declares
// translatable frontmatter. That pairing cannot be checked here (the registry
// imports this file, so this file cannot import the registry), so scripts/test.mjs
// asserts it against the real corpus.json instead: a `body` scope on a catalog
// would silently do nothing, which is the one failure mode worth a test.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, fail } from "./constants.mjs";

/** The whole item is out of the corpus. The default when an entry names no scope. */
export const SCOPE_ITEM = "item";
/** Only the body is out: the translatable frontmatter is still required. */
export const SCOPE_BODY = "body";

const SCOPES = [SCOPE_ITEM, SCOPE_BODY];

let cache = null;

function excluded() {
  if (cache) return cache;
  const file = path.join(REPO_ROOT, "corpus.json");
  if (!fs.existsSync(file)) return (cache = new Map());
  const { exclude = [] } = JSON.parse(fs.readFileSync(file, "utf8"));

  const map = new Map();
  for (const entry of exclude) {
    const scope = entry.scope ?? SCOPE_ITEM;
    if (!SCOPES.includes(scope)) {
      fail(`corpus.json: exclusion ${entry.type}/${entry.slug ?? ""} names scope "${scope}". Known: ${SCOPES.join(", ")}`);
    }
    map.set(`${entry.type}:${entry.slug ?? ""}`, scope);
  }
  return (cache = map);
}

/** The scope of one item's exclusion, or null when it is not excluded at all. */
export function exclusionScope(typeId, slug) {
  return excluded().get(`${typeId}:${slug ?? ""}`) ?? null;
}

/**
 * Is this item wholly out of the corpus?
 *
 * A `body`-scoped exclusion is deliberately NOT this: the item is still expected,
 * counted and validated, so every caller that asks "should I skip this item"
 * must keep seeing it. What its body is exempt from is asked separately, below.
 */
export function isExcluded(typeId, slug) {
  return exclusionScope(typeId, slug) === SCOPE_ITEM;
}

/** Is this item's BODY out of the corpus, its frontmatter still required? */
export function isBodyExcluded(typeId, slug) {
  return exclusionScope(typeId, slug) === SCOPE_BODY;
}

/** How many items of one type are wholly out of the corpus. */
export function excludedCount(typeId) {
  return countScoped(typeId, SCOPE_ITEM);
}

/** How many items of one type are in the corpus for their frontmatter alone. */
export function bodyExcludedCount(typeId) {
  return countScoped(typeId, SCOPE_BODY);
}

function countScoped(typeId, scope) {
  let n = 0;
  for (const [key, value] of excluded()) if (key.startsWith(`${typeId}:`) && value === scope) n += 1;
  return n;
}
