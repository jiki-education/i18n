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

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT } from "./constants.mjs";

let cache = null;

function excluded() {
  if (cache) return cache;
  const file = path.join(REPO_ROOT, "corpus.json");
  if (!fs.existsSync(file)) return (cache = new Set());
  const { exclude = [] } = JSON.parse(fs.readFileSync(file, "utf8"));
  return (cache = new Set(exclude.map((entry) => `${entry.type}:${entry.slug ?? ""}`)));
}

/** Is this item declared out of the corpus? */
export function isExcluded(typeId, slug) {
  return excluded().has(`${typeId}:${slug ?? ""}`);
}

/** How many items of one type are declared out of the corpus. */
export function excludedCount(typeId) {
  let n = 0;
  for (const key of excluded()) if (key.startsWith(`${typeId}:`)) n += 1;
  return n;
}
