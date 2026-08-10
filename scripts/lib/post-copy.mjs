// The post listing copy index: the translated half of every post's metadata.
//
// One object per locale, keyed by post type and then by slug, holding what a
// listing needs before it fetches any HTML: the title and excerpt it renders,
// the SEO block, the tags, the reading time, the hash of the body the entry
// points at, and the `summary` block for a post that authors one. The other
// half of the metadata (date, author, cover image,
// featured/listed/premium/order) is locale-invariant English config the
// front-end publishes once, and the two are merged at read time.
//
// It is built HERE, from a flat list of entries, rather than accumulated by the
// publish loop, so that the index is derived from the list of post types and
// there is no second list of "types that contribute copy" to fall out of step
// with the first. Two lists is how a type publishes a translated body and no
// listing copy: its links keep rendering English titles and excerpts in every
// locale, the page behind each one is translated, and nothing anywhere reports
// it, because an absent listing entry looks exactly like a locale that has not
// got to that post yet. A type that publishes a body publishes its listing
// copy, and the shape of this module is what makes that true by construction.

/**
 * Build one locale's post copy index.
 *
 * `typeIds` is every post type, in publish order; each gets a bucket whether or
 * not the locale holds anything of that type, so the artifact's shape does not
 * depend on how far a translation has got. `entries` is one record per published
 * post, in any order.
 *
 * Slugs are opaque strings and are used whole. A project episode's slug is two
 * parts ("<project>/<uuid>"), which is a key with a slash in it and nothing
 * more: no reader of this index splits a slug, and one that did would be asking
 * a question about paths of a structure that holds names.
 *
 * `summary` is carried for any post whose frontmatter HAS one, which is a rule
 * about the data rather than a list of types: only project episodes author one
 * today, and a second type that grows one is published without an edit here.
 * Branching on the type would be the second list this module exists not to
 * have. It is emitted only when present, rather than as an explicit null, so
 * the entries of a type that authors none keep the exact bytes they had.
 */
export function buildPostCopy(typeIds, entries) {
  const copy = Object.fromEntries(typeIds.map((typeId) => [typeId, {}]));

  for (const entry of entries) {
    // Loud rather than dropped. Silently skipping an entry whose type has no
    // bucket is how a whole content type's listing copy goes missing while
    // every check still passes.
    if (!copy[entry.typeId]) {
      throw new Error(`post copy: "${entry.typeId}" is not one of the post types (${typeIds.join(", ")}), slug ${entry.slug}`);
    }
    copy[entry.typeId][entry.slug] = {
      title: entry.data.title,
      excerpt: entry.data.excerpt ?? "",
      seo: entry.data.seo ?? { description: entry.data.excerpt ?? "", keywords: [] },
      tags: entry.data.tags ?? [],
      readingTime: entry.readingTime,
      contentHash: entry.contentHash,
      ...(entry.data.summary == null ? {} : { summary: entry.data.summary })
    };
  }

  // Sorted, so the bytes move only when the copy does.
  for (const typeId of typeIds) {
    copy[typeId] = Object.fromEntries(
      Object.keys(copy[typeId])
        .sort()
        .map((slug) => [slug, copy[typeId][slug]])
    );
  }

  return copy;
}
