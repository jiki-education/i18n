// Which i18next plural keys a locale can ever reach.
//
// i18next resolves a plural by computing ONE suffix and doing ONE lookup. It
// never probes the other categories and it does not fall back to `_other` when
// the computed key is absent (a missing reachable key renders the raw key name).
// So a key whose category the locale has no rule for is dead by construction: no
// count reaches it, and no translator can ever fill it. That is the state the
// `∅` sentinel marks, as against `�`, which means "nobody has translated this
// yet".
//
// Everything here is derived from Intl.PluralRules, whose CLDR data lives in the
// JS engine, plus the one place i18next deliberately diverges from CLDR. There is
// no per-language table in this repo and there must never be one.
//
// Verified behaviourally against i18next 25.10.10 (front-end/interpreters) across
// en, fr, ja, hu, el, hi, ru, ar, pl, ko, zh-CN, zh-TW, pt-BR, uk, fa, he, nl, it.

const CATEGORIES = new Set(["zero", "one", "two", "few", "many", "other"]);

const PLURAL_KEY = /^(.*?)(_ordinal)?_(zero|one|two|few|many|other)$/;

/** Split "flowerCount_ordinal_two" into { base, ordinal, category }, or null. */
export function parsePluralKey(key) {
  const match = PLURAL_KEY.exec(key);
  if (!match) return null;
  return { base: match[1], ordinal: match[2] !== undefined, category: match[3] };
}

const cache = new Map();

/**
 * The plural categories `locale` can reach, or null when it is not a locale
 * Intl has CLDR data for.
 *
 * Null rather than a guess: `new Intl.PluralRules("xx")` silently falls back to
 * the runtime default locale, and answering an unknown locale with English's
 * rules would mark keys dead that are not.
 */
export function reachableCategories(locale, { ordinal = false } = {}) {
  const key = `${locale}|${ordinal}`;
  if (cache.has(key)) return cache.get(key);

  let categories = null;
  if (Intl.PluralRules.supportedLocalesOf(locale).length > 0) {
    categories = new Set(new Intl.PluralRules(locale, { type: ordinal ? "ordinal" : "cardinal" }).resolvedOptions().pluralCategories);
    // i18next honours `_zero` for count === 0 in EVERY language, independently of
    // CLDR. `t(k, {count: 0})` renders `k_zero` in fr (categories one/many/other)
    // and in ja (category other alone), even though getSuffix reports `_one` and
    // `_other` there. So `_zero` is always reachable and must never be marked
    // inapplicable. Do not "simplify" this into the Intl set.
    //
    // CARDINAL ONLY. The special case does not apply to ordinals: with every
    // `_ordinal_*` key present, `t(k, {count: 0, ordinal: true})` renders
    // `_ordinal_other` in every locale tested, so `_ordinal_zero` stays governed
    // by CLDR and is unreachable wherever CLDR omits it.
    if (!ordinal) categories.add("zero");
  }

  cache.set(key, categories);
  return categories;
}

/**
 * True when `key` is a plural key of `flatEnglish` whose category `locale` can
 * never reach.
 *
 * Fails closed in three ways, because a false positive here blanks a real
 * translation:
 *
 *   - the sibling `_other` must exist in English. i18next requires `_other` for
 *     a plural, so a key that merely ENDS in a category word (`step_one`) has no
 *     sibling and is never touched.
 *   - `_other` itself is reachable everywhere and is never inapplicable.
 *   - an unknown locale, or an unknown category, answers false.
 */
export function isUnreachablePluralKey(key, locale, flatEnglish) {
  const parsed = parsePluralKey(key);
  if (!parsed || parsed.category === "other" || !CATEGORIES.has(parsed.category)) return false;

  const sibling = `${parsed.base}${parsed.ordinal ? "_ordinal" : ""}_other`;
  if (!(sibling in flatEnglish)) return false;

  const reachable = reachableCategories(locale, { ordinal: parsed.ordinal });
  return reachable !== null && !reachable.has(parsed.category);
}
