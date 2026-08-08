// Exercise families, and the merge that makes a published exercise catalog
// self-contained.
//
// An exercise may belong to an exercise FAMILY (an exercise-category: `maze`,
// `draw`, `cityscape` and nine others). The family's catalog holds the strings
// every member shares, typically a base class's logicError messages and its
// describers, authored and translated once rather than copied into each member.
//
// The front-end's app/scripts/generate-exercise-cache.js deep-merges a family's
// catalog into each member's emitted pack, so the shared strings are duplicated
// only in build output and the runtime dict a learner's browser fetches is
// self-contained. A family catalog is therefore a MERGE INPUT and never an
// artifact of its own, which is why the `exercise-category` content type has no
// R2 path.
//
// publish.mjs performs the same merge, and its output is byte-identical to the
// front-end's, filename included: the artifact is JSON.stringify of the merged
// object and the R2 filename is a hash of exactly those bytes, so key insertion
// order is load-bearing. Everything here exists to reproduce it.
//
// Which family an exercise belongs to is a fact about its TypeScript, not its
// copy, so it cannot be derived here. publish.mjs reads it from the front-end
// checkout; these functions take it as data.

/**
 * Deep-merge two catalogs; keys in `override` win on collision.
 *
 * A faithful port of deepMerge() in the front-end's generator, key insertion
 * order included: a key present in both keeps the BASE's position, and a key
 * only in the override is appended in the override's own order. Objects merge
 * recursively; anything else, arrays included, is replaced wholesale.
 */
export function deepMerge(base, override) {
  const out = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const existing = out[key];
    const bothObjects =
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      existing !== null &&
      typeof existing === "object" &&
      !Array.isArray(existing);
    out[key] = bothObjects ? deepMerge(existing, value) : value;
  }
  return out;
}

/**
 * Every exercise catalog to publish for one locale, already merged.
 *
 * - `families` maps every corpus exercise slug to its family, or null when it is
 *   standalone.
 * - `own` maps slug to the exercise's own catalog for this locale, for the
 *   exercises that have one.
 * - `baseFor(family)` returns the family's catalog for this locale, or null.
 *
 * The locale set published is the UNION of the two sides, matching the
 * front-end: an exercise with no catalog of its own in a locale still gets one
 * built from its family's, and an exercise whose family has nothing in that
 * locale publishes its own unchanged. Results come back sorted by slug so a run
 * is reproducible.
 */
export function mergeExerciseCatalogs({ families, own, baseFor }) {
  const slugs = new Set(own.keys());
  for (const [slug, family] of Object.entries(families)) {
    if (family && baseFor(family)) slugs.add(slug);
  }

  return [...slugs].sort().map((slug) => {
    const family = families[slug];
    const base = (family && baseFor(family)) || {};
    return { slug, catalog: deepMerge(base, own.get(slug) ?? {}) };
  });
}
