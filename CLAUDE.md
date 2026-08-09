# Jiki i18n - Agent Instructions

This repo holds **Jiki's translated output**, and the scripts that produce and publish it.

## What this repo is

- **The home of every non-English string Jiki ships.** App UI catalogs, concept pages, exercise
  instructions and message catalogs, video lesson and badge copy, video subtitles, in every target
  locale. There are no exceptions: if it is not English, it lives here.
- **The publisher of those translations to R2**, under the same content-hashed path convention
  the front-end already uses. Not every type has an R2 artifact: subtitles are served by Mux.
- **A consumer of English**, checked out from its source repo into `.source/<repo>/` whenever a
  script needs it. `locales/` holds nothing but target locales. See [ENGLISH-SOURCE.md](./ENGLISH-SOURCE.md).

## What this repo is not

- **Not the home of English.** English is authored in the source repos, beside the code that
  renders it. It arrives here one-way, and is never edited here.
- **Not the home of translation guidance.** Guides, glossaries, language style guides, forum and
  review workflow all live in the `translator` repo. Two copies of a glossary is two glossaries.
- **Not the publisher of English.** The front-end publishes its own English catalogs, atomically
  with its worker deploy. A script-level guard here makes that structural, not a convention.
- **Not the human review layer.** Native-speaker review and glossary governance are a second
  phase, and live in the `translator` repo when they land.

## The three-repo split

| Repo | Owns | Does not own |
|------|------|--------------|
| **source repos** (`front-end` monorepo: `app/`, `curriculum/`, `interpreters/`, `content/`; plus `videos` for the English subtitle track) | English strings, the code, publishing English to R2, which locales are actually **served** (`SUPPORTED_LOCALES`) | any translated string |
| **`i18n`** (this repo) | every translated string, the sync/translate/validate/publish scripts, publishing non-English to R2 | English, translation guidance, what is served |
| **`translator`** | translation guides, glossaries, per-language style guides, per-content-type how-tos, forum review workflow | any translated output, any code that ships |

The point of the split is that translation churn no longer generates front-end PRs. A translation
pass touches this repo and nothing else.

## Directory structure

Locale-first. Each locale mirrors the **source packages' own layout**, with two mechanical edits
and no other invention:

- the package's `src/` segment is dropped (`curriculum/src/concepts` becomes `curriculum/concepts`)
- the locale segment is hoisted to the top of the path
  (`curriculum/exercises/<slug>/instructions.md` becomes `locales/hu/curriculum/…`)

so mapping back to a source path is mechanical. A source path carries no locale at all: the source
repos hold English and nothing else, one file per item, so `sourceRepoPath` takes only a slug.

```
.source/front-end/                                 gitignored, ephemeral: English, checked out
.source/videos/                                    the same, for the English subtitle track
locales/
  hu/                                              one directory per target locale
    app/messages.json
    curriculum/
      concepts/using-functions/page.md
      exercises/bouncer-dress-code/instructions.md
      exercises/bouncer-dress-code/messages.json
      exercises/bouncer-dress-code/messages.meta.json    staleness stamp
      video-lessons/messages.json + messages.meta.json
      badges/messages.json + messages.meta.json
      levels/messages.json + messages.meta.json
      exercise-categories/maze/messages.json + messages.meta.json
    interpreters/javascript/messages.json + messages.meta.json
    content/posts/blog/<slug>/page.md
    videos/using-functions/subtitles.vtt           stamp is a NOTE line inside the file
```

- **The one place that mapping lives is `scripts/lib/content-types.mjs`.** Adding a content type is
  one entry there. Nothing else changes, in any script.
- **Item discovery is by what is on disk**, in both trees: `locales/hu/curriculum/concepts/x/page.md`
  translates `.source/front-end/curriculum/src/concepts/x/source.md`, and the mapping runs both ways.
  There is no registry to keep in step.

## English lives in a checkout, not here

Read [ENGLISH-SOURCE.md](./ENGLISH-SOURCE.md) first; this is the summary.

- **English is authored beside the code that renders it**, and is read from a checkout of that repo
  at `.source/<repo>/`. That directory is gitignored and ephemeral. Almost all of it is the
  front-end monorepo; video subtitles are the exception, authored in `videos` because they are cut
  from the rendered video.
- **`scripts/lib/english.mjs` is the only thing that resolves a path to English**, and its
  `SOURCE_REPOS` is the list of repos it resolves. A content type names its `sourceRepo` and
  defaults to the front-end. Order per repo: `--source-repo=`, that repo's env override
  (`JIKI_SOURCE_REPO`, `JIKI_VIDEOS_REPO`), `.source/<repo>`, a sibling checkout. Locally,
  `npm run source:checkout [-- --source=videos]` fetches one, shallow and sparse over the
  directories English lives in. In CI it is an `actions/checkout` step with the same destination.
- **On a PR, English is the commit the branch pins** with an `English-Ref: <repo>@<sha>` commit
  trailer. A translation branch validates against fixed English, so it cannot go red because
  something merged next door. **On `main` it is front-end `main`**, which floats, and publish stamps
  the SHA it used into `completeness.json`. A trailer rather than a committed file because the pin
  is only ever read on a PR, so a file would land on `main`, pin nothing, and need pruning, and two
  open translation branches would both be editing it.
- **There is no tracked corpus.** An item is in the working corpus when English exists for it and
  some target locale already holds a translation of it. Bringing a new item in is an explicit
  `--type`/`--slug`, which resolves against English directly. Exclusions are explicit, in
  `corpus.json`.
- **Completeness measures against a different number**: every item English exists for, read straight
  from the checkout. "Have you translated everything you started" is satisfiable by starting one
  thing.

## The two sentinels

There are two, and they mean different things. Both are defined once in
`scripts/lib/constants.mjs` and never written as a literal anywhere else.

| | means | who can fix it | publish |
| --- | --- | --- | --- |
| **`�`** U+FFFD, `SENTINEL` | not translated yet | a translator | refuses the catalog |
| **`∅`** U+2205, `INAPPLICABLE` | the key is unreachable in this language | nobody, ever | omits the key |

### `∅`, the inapplicable sentinel

- **It marks a key the language can never reach**, so no translator can ever fill it. It is not a
  gap and it is not progress. Every count treats it as outside the denominator.
- **The known case, and currently the only justified one, is an i18next plural category the locale
  has no rule for.** i18next computes ONE plural suffix and does ONE lookup: it never probes the
  other categories and it does not fall back to `_other`. Hungarian's ordinals are `one` and
  `other`, so `_ordinal_two` and `_ordinal_few` are dead by construction. English has four ordinal
  categories, Greek one, Hindi five.
- **English carries the union of plural keys across every supported locale**, holding `∅` itself
  wherever a category does not apply to English. A locale can only hold keys English has, so
  without the union a language needing a category English lacks (`fr` cardinal `many`, `sr` cardinal
  `few`, `it` ordinal `many`) would have nowhere to put it.
- **English's `∅` never propagates.** Reachability is asked per locale. A locale whose grammar does
  reach the key has a real gap there, so it gets `�` and keeps counting as untranslated. The
  English text to translate from is missing in that case, so filling it needs a native speaker
  rather than an engine.
- **`_zero` is reachable in EVERY language, whatever CLDR says**, because i18next special-cases it:
  `t(k, {count: 0})` renders `k_zero` in `fr` and in `ja` alike. It must never be marked `∅`.
  Cardinal only: `_ordinal_zero` is not special-cased. Deriving the reachable set from
  `Intl.PluralRules` alone once wiped 26 live strings.
- **`∅` must be justified or it becomes a way to silence a real gap.** `checkCatalog` accepts it
  only where the key is provably unreachable for that locale, English included, and errors
  everywhere else. It fails closed: with no locale to check against, every `∅` is an ERROR.
- **Reachability is derived, never tabulated.** `scripts/lib/plurals.mjs` asks `Intl.PluralRules`,
  whose CLDR data lives in the JS engine. There is no per-language table in this repo and there
  must never be one.
- **Publish omits `∅` keys from the artifact** rather than shipping the character. The client
  cannot look the key up, so an absent key and a present one are the same artifact minus the bytes.
  It therefore never blocks a publish: a locale must not be held back forever by a string nobody
  can write.

### `�`, the untranslated sentinel

- The sentinel is **`�` (U+FFFD REPLACEMENT CHARACTER)**, defined once as `SENTINEL` in
  `scripts/lib/constants.mjs` and never written as a literal anywhere else.
- **A catalog value that is exactly the sentinel is not yet translated.** Every other value is a
  real translation. It is a first-class state, not an error.
- **The filler is never the English string.** English-as-filler is indistinguishable from a
  translation that legitimately matches English, and once that ambiguity is in a file it cannot be
  undone.
- **It renders as a visible replacement glyph**, which is the intent on the review site and is
  exactly why a locale is not shippable until its count is zero. `publish` refuses any catalog
  containing one; `validate --shippable` is the gate; `coverage` is the running count.
- Prose has no sentinel state, but it has **three untranslated conventions**, none of which is a
  missing file, and `publish` refuses all three (see § "Untranslated prose").
- **The imported corpus predates that rule and carries both markers.** Catalogs that came across in
  the cutover include keys whose value is English verbatim, which is the state the old world used.
  Nothing here rewrites them: the ambiguity is already in the file and a translation that legitimately
  matches English is indistinguishable from a gap. `validate` counts them, as a heuristic WARN, so the size of the problem is visible without anything guessing at it.

## Staleness

- **Staleness reuses the `translator` repo's existing `en_md5` mechanism**, unchanged. There is no
  separate snapshot tree and no separate diff mechanism.
- **Prose** carries `en_md5` in its own frontmatter, the md5 of the entire English source file
  (frontmatter and body), matching `md5 -q`.
- **Catalogs** have no frontmatter, so they carry a **sibling `<name>.meta.json`**, which is the
  convention `translator` already uses (`translation.meta.json`). A sibling file is invisible to
  every key-parity guard and cache generator, all of which address the catalog by exact filename.
- **The stamp is written by `validate`, never by hand.** A hand-written stamp looks like a passed
  check and is not one, and models fabricate plausible hashes. `translate` explicitly strips any
  stamp a model emits before it reaches disk.
- **Catalog staleness is whole-file; app catalog staleness is per-key** via the sentinel. A whole-file
  hash cannot say which of 1300 keys moved.

## Scripts

All Node ESM (`.mjs`), and **dependency-free with one exception**: they run on a bare `node` with no
install step, except for prose rendering, which needs `@jiki.io/content-renderer`. That import is
lazy, so `translate`, `stub`, `validate`, `coverage` and `test` still need no
`node_modules` at all; only `publish` and `verify-renderer` do. `publish` loads it up front rather
than on first use, because the image resolver inside a post render has to be synchronous.
Shared helpers live in `scripts/lib/`.

| Script | What it does |
|--------|--------------|
| `source-checkout.mjs` | Fetches a source repo into `.source/<id>`, shallow and sparse, so local runs have English to read. `--source=<id>` picks which (`front-end` by default, `videos` for the English subtitle track). CI uses `actions/checkout` for the same job and the same destinations. |
| `source-checkout.mjs --resolve` | Prints the SHA this branch pins with an `English-Ref:` trailer, or `main`. CI uses it to point its `actions/checkout` step at the right English. |
| `translate.mjs` | LLM-backed translation of added and changed items. Modes `outdated` / `all` / `missing`, meaning exactly what they mean in `translator`. Hands off to `validate` when it finishes. |
| `stub.mjs` | Brings every catalog in the corpus to full key parity with English, sentinel-filling anything untranslated and `∅`-filling any plural key the language cannot reach. Existing values are reproduced byte for byte, and an empty object in English stays an empty object. An explicit `--type`/`--slug` seeds an item the corpus does not hold yet. |
| `validate.mjs` | Key parity, ICU validity, whitespace, placeholder and tag parity, prose frontmatter and structure counts, staleness, and the R2 key guard. Stamps on success. Exit 1 on any ERROR. |
| `publish.mjs` | Builds the content-hashed artifacts, their pointers and `dist/sync.sh`. Omits every `∅` key from the bytes it writes. Refuses any English R2 key, any catalog still holding a `�` sentinel, any prose that is untranslated by one of the three conventions, and any assembled artifact built from a partial corpus. No flag loosens any of that. `--out-dir=<path>` writes the same tree into a front-end checkout instead, for local dev. |
| `coverage.mjs` | Per-locale translated / stale / missing / sentinel counts, per content type, with `∅` keys reported outside the fraction. `--json` for machines. |
| `test.mjs` | The assertions guarding logic a mistake in would only surface on R2, above all the exercise family merge and its key order. Plain `node:assert`, no framework, non-zero exit on failure. `pnpm test`, and part of `pnpm check`. |
| `verify-renderer.mjs` | Proves this repo's prose pipeline and the front-end's produce identical bytes. Takes the front-end's OWN Markdown, renders it through this repo's publish path, and asserts the hash equals the filename the front-end's generator wrote, across the whole concept corpus. |

- **`validate` errors block; warnings never do.** Same split as `translator/scripts/check-translation`:
  ERROR checks are structural facts, WARN checks are heuristics over prose that produce false
  positives by design. Read a warning; never promote it to an error.
- **The provider is never hardcoded.** `engines.json` sets the default engine and model, with a
  `byLocale` override, mirroring `translator`'s per-language `translation_engine` block. `--engine`
  and `--model` override for one run. Adding a provider is one entry in `scripts/lib/engines.mjs`.
- **Prompt order is load-bearing.** The language-invariant guidance goes first so a provider's prompt
  cache can reuse the prefix across every locale and every item of a type. Anything language- or
  item-specific added to the front of the prompt throws that away.
- **One item, one call, no self-review.** The mechanical problems a review pass would catch are
  `validate`'s job, and the judgement ones do not survive a model grading its own output.

## R2 path conventions

The paths and the hash come from the front-end and must stay in lockstep with it
(`app/lib/assets-paths.ts` and `app/scripts/lib/cache-utils.js`). Every dimension is a directory,
the leaf is `{kind}-{hash}.{ext}`, and **the hash is the first 12 hex chars of the SHA-256 of the
exact bytes written**. For a catalog the content is `JSON.stringify(parsed)`, so source formatting
cannot move a hash. For a concept page it is the rendered HTML, so the renderer version can, which
is why it is pinned and recorded.

| Artifact | Path |
|---|---|
| App UI catalog | `/static/i18n/app/{locale}/messages-{hash}.json` |
| Curriculum copy (merged) | `/static/i18n/curriculum/{locale}/messages-{hash}.json` |
| Badges | `/static/i18n/badges/{locale}/messages-{hash}.json` |
| Exercise messages | `/static/i18n/exercises/{slug}/{locale}/messages-{hash}.json` |
| Levels | `/static/i18n/levels/{locale}/messages-{hash}.json` |
| Interpreters | `/static/i18n/interpreter/{language}/{locale}/messages-{hash}.json` |
| Concept pages | `/static/concepts/{slug}/{locale}/content-{hash}.html` |
| Concept copy (index half) | `/static/concepts/{locale}/copy-{hash}.json` |
| Post copy (index half) | `/static/content/copy/{locale}/copy-{hash}.json` |
| Exercise prose index | `/static/exercises/{locale}/index-{hash}.json` |
| Exercise instructions | `/static/exercises/{slug}/{locale}/prose-{hash}.json` |
| Posts (blog, articles, guides) | `/static/content/{kind}/{slug}/{locale}/content-{hash}.html` |
| Pointer (beside every artifact) | `.../current.json`, `{ "hash": "..." }` |

Bucket `s3://assets`, key prefix `static/`, uploaded with
`--cache-control 'public, max-age=31536000, immutable' --size-only` (every file is content-hashed,
so an upload is always an add, never a replace).

### The R2 key guard

- **Every R2 key goes through `assertPublishableKey()`**, on the way to disk and again on the way to
  the bucket. It throws `GuardViolation`, which aborts the run.
- **It is a hard fail, never a silent skip.** A publish that quietly dropped English would be
  indistinguishable from a successful one.
- **This replaces credential scoping, which cannot express the rule.** The key that must not be
  written (`static/i18n/app/en/...`) sits *inside* the prefix this repo legitimately writes
  (`static/i18n/app/`), so no bucket policy can separate them.
- **It is all that is left of a larger guard, deliberately.** There was a write guard over
  `locales/source/` and a divergence check keeping that mirror honest. With English outside this
  repo, publishing it from a directory walk is impossible rather than defended against. Synthesising
  an English KEY from a bad path template still is not, and that failure is silent, so this stays.
- **`validate` exercises it** rather than trusting it: it asserts the guard refuses every English
  spelling and still permits a legitimate key. A guard meant never to fire only stays honest if
  something makes it fire.

### Exercise families and the base catalog merge

`curriculum/src/exercise-categories/<family>/` holds the keys every exercise in a family shares
(`maze`, `draw`, `cityscape` and nine others), typically a base class's logic-error messages and its
describers. They are authored and translated once rather than copied into each member.

- **A family catalog is a merge input, never an artifact.** The front-end's
  `app/scripts/generate-exercise-cache.js` deep-merges a family's catalog into each member's emitted
  pack and emits nothing for the family itself, so the runtime dict a learner fetches is
  self-contained. `publish.mjs` does the same merge, which is why the `exercise-category` content
  type has no R2 entry and `exercise-messages` needs no second fetch.
- **Member keys win, objects merge, everything else replaces.** On a colliding leaf the exercise's
  own value wins. Nested objects merge recursively; arrays and scalars replace wholesale. A key in
  both keeps the **family's** position and a key only in the member is appended, because the artifact
  is `JSON.stringify` of the merged object and the filename is a hash of exactly those bytes, so
  insertion order moves URLs.
- **The published locale set is the union of both sides.** A member with no catalog of its own in a
  locale is still published, built from its family's; a member whose family has nothing in that
  locale publishes its own unchanged.
- **The merge itself lives in `scripts/lib/families.mjs`** as pure functions, so it is testable
  without disk. `publish.mjs` holds only the disk half.

#### The family map

An exercise's family is whichever `exercise-categories/<family>/` module its `.ts` files import, so
it is a fact about **code**, and code stays in the front-end.

- **`publish.mjs` reads it from the checkout** at the moment it needs it, with `deriveFamily()`. It
  used to be recorded in the sync manifest so that publish could run without a front-end checkout;
  publish has one now, and a derived answer cannot go stale.
- **It is derived over the corpus, not over all of English.** The union rule above publishes a family
  member from its family's base catalog even when the member has no catalog of its own, so a map
  covering every exercise in the front-end would publish a catalog for every member of every
  translated family, including exercises nobody has begun.
- **A standalone exercise derives an explicit `null`**, so "has no family" stays distinguishable from
  "not found".
- **An exercise this repo holds but the checkout has no directory for is a hard fail in `publish`**,
  never an unmerged publish. A catalog missing its inherited keys renders raw key names like
  `errors.hitWall` to a learner, and on R2 it would look exactly like a good one.

### Nothing partial ships, and there is no flag to say otherwise

Three artifacts are **assembled from a whole corpus** rather than copied from one file:

- **Curriculum copy**, one flat slug-keyed catalog per locale, merging every exercise's frontmatter
  `title`/`description` with the video lessons. Exercises and videos share one collision-free slug
  namespace; a collision is a hard error.
- **The app catalog**, the whole 1300-key tree.
- **The exercise prose index**, which names every exercise's prose artifact.

Any of them built from a partial corpus has entries missing, and on R2 that is indistinguishable
from a good one. All three are **skipped, loudly**, and the run carries on.

Skipping rather than aborting is deliberate: aborting would let one unfinished locale stop every
finished one from publishing, and on a merge-triggered publish it would turn `main` red on most
merges. **A run with nothing shippable exits 0** — a green no-op, not a failure.

What there is no way to do is publish one anyway. This used to be a matter of how `publish` was
invoked (`--allow-partial`, `--allow-incomplete`); it is now a property of the script, which is the
only place a rule like this survives. That mirrors the R2 key guard, which has never had an
override.

**Completeness is measured against the real English corpus, not the working corpus.** The working
corpus is what this repo has started, so measuring against it asks "have you translated everything
you started", which any locale satisfies by starting one exercise, and which passes most
convincingly exactly when the least has been done. The denominator is a directory listing of the
source checkouts: every item English exists for, whether or not anyone has looked at it.

### Untranslated prose

Prose has three untranslated conventions and `publish` classifies all three before emitting
anything. Each is skipped and counted, never published:

1. **The sentinel** (`�`). Machine-readable, handled on the catalog path.
2. **Copied English.** The body is byte-identical to English. Exact, and the most dangerous of the
   three: it satisfies every structural check trivially, carries a valid staleness stamp, and would
   publish as a perfectly healthy artifact serving English from a translated URL.
3. **A translation notice.** Fully translated frontmatter over a one-line body saying the page is
   not translated yet. Nothing in the file marks it as a placeholder.

The third has no marker of its own, so it is caught **corpus-wide** rather than per-file, by
`findRepeatedBodies`: group a locale's items by their translated body, and any group with more than
one member whose English bodies differ is untranslated, all of it. Two items whose English differs
cannot both have the same correct translation.

That is exact, not heuristic. It has no thresholds, knows no language, and needs no phrase list, so
it works on the first locale as well as the thirtieth. The alternatives — a per-locale list of
phrasings, or a length-and-structure score — are respectively stale on contact and only ever
approximately right. Its one blind spot is a notice used exactly **once** in a locale, which is
indistinguishable from a very short translation and is left alone.

### Prose publishing

**Concept pages are rendered here**, to `/static/concepts/{slug}/{locale}/content-{hash}.html`.

- **The renderer is a package both repos depend on**, `@jiki.io/content-renderer`. The front-end's
  `app/scripts/generate-concept-cache.js` renders English with it and `publish.mjs` renders
  translations with it, so there is one implementation of "Markdown to the bytes Jiki serves" and
  no way for two to drift. Reimplementing it here would be two renderers, and the drift would
  surface as a wrong-looking page rather than as an error.
- **The pinned version is the contract.** The filename IS the hash of the bytes, so HTML that
  differs by one character sits at a URL the front-end never asks for and the page simply does not
  appear. Both repos pin an exact version, never a range, and a rendering change is a version bump
  both sides take deliberately.
- **`publish` records the version it used** as `renderer` in `dist/manifest.json`, so a mismatch
  between the two publishers is a diff between two numbers after the fact, rather than something
  only reproducible by re-running both repos.
- **`verify-renderer` is the proof, and it is corpus-wide.** It does not compare this repo's
  Hungarian to the front-end's Hungarian: those are two revisions of a translation and differ
  whenever a pass has landed on one side only, which says nothing about the renderers. It feeds the
  front-end's own Markdown through this repo's pipeline and asserts the hash matches the filename
  the front-end wrote.
- **Only the Markdown body is rendered.** Frontmatter is metadata about the file and never reaches
  the HTML, which is why the zero-dependency frontmatter parser in `scripts/lib/files.mjs` is
  enough and the renderer package takes a body rather than a file.

**TODO: pin the published version.** `@jiki.io/content-renderer` has not been published to npm yet,
so `package.json` currently depends on it as `file:../front-end/content-renderer`, which resolves
against a sibling front-end checkout exactly as `resolveSourceRepo` does. Once it is on the
registry, replace that with the exact version (`"0.1.0"`, no caret): a range would let the renderer
move under a translation pass, which is the whole failure the version pin exists to prevent. There
is deliberately no lockfile committed yet, because one generated against a local path would record
that path; commit it with the version pin.

**Posts are rendered here too**, to `/static/content/{kind}/{slug}/{locale}/content-{hash}.html`
for `kind` in blog, articles and guides, using the renderer package's **second** pipeline,
`renderPost`. It differs from the concept one in ways that are load-bearing (footnotes, the stock
highlight.js grammars rather than Jiki's own, image fingerprinting), which is why the package
exports two configured renderers and neither repo configures Markdown itself. Project episodes are published on
exactly the same terms. Their `content/src/posts/projects/{project}/{uuid}/` layout gives them a
**two-part slug**, `"{project}/{uuid}"`, because the UUID is a namespacing device that stops episode
names colliding across projects, so the honest key is the namespace and the name together.
`content-types.mjs` expresses that with `slugDepth: 2`, which makes discovery walk two directory
levels and join them; nothing downstream special cases episodes.

Posts may reference `/images/...`, and the fingerprinted URL contains a hash of the image BYTES,
which live in the front-end's `content` package. `publish` **resolves** those, lazily and only when
a post actually references one, and never copies them: English references the same images, so the
front-end has already published every one at exactly that URL. A translation referencing an image
English does not is a hard error rather than a dead link.

**Exercise instructions ARE an artifact here**, which they could not be until recently. The
front-end used to cache them inside one `content-{hash}.json` per `(slug, locale, language)`
alongside that exercise's stub and solution — and stubs and solutions are code, which lives in the
front-end. It now splits them along their real keys, prose by `(slug, locale)` and code by
`(slug, language)`, so this repo publishes the prose half plus the per-locale prose index that names
it, and never touches the code half. The index carries `title`, `description` and `proseHash` per
exercise and deliberately **no code hashes**: an artifact one publisher owns must never need a fact
only the other knows.

The published bytes are the **prepared** body (trimmed, with `<define>`/`<literal>` stripped), via
the renderer package's `prepareInstructions`, so they are the bytes the front-end caches. `publish`
still also exports the authored file verbatim to `dist/export/` in the source repos' own layout, and
warns on any carrying authoring tags a translation should never have received.

**Category concepts are skipped.** A concept whose body is empty (`arrays-group`, `loops-group`, ...)
is a heading in the concept tree, not a page, and the front-end renders no HTML for it. The test is
the empty body rather than the `category` flag, which lives in a `config.json` this repo does not
mirror.

### Indexes are split: structure here, copy there

A listing index mixes two different things, and publishing it whole from either
repo makes the other one's half unreachable. So concepts and posts split exactly
as the exercise cache does:

- **Structure** is locale-invariant and front-end published. A concept's parent,
  order, category, child count, icon and exercise links; a post's date, author,
  cover image and featured/listed/premium/order flags. All of it comes from
  English `config.json` and none of it varies by language, so one object serves
  every locale.
- **Copy** is per locale and published here. A concept's title, description and
  content hash; a post's title, excerpt, seo, tags, reading time and content
  hash.

The front-end merges the two at read time and drops any entry a locale has no
copy for, rather than filling it in from English. That is what lets a locale
published from here appear in listings and carry SEO metadata with no front-end
build, which was the last thing that still required one.

**Search indexes are the exception, and it is not an oversight.** Their content
is entirely translated, but their MEMBERSHIP is structural: the articles index
contains only `listed` articles and `listed` comes from English config. An index
built here would either drop that filter or need a fact this repo does not hold,
so search stays front-end published. The BUILDER moved into
`@jiki.io/content-renderer` anyway, because a lunr index is a serialised
structure whose bytes depend on the lunr version, on field order and on boosts,
so if it ever does move the bytes are already contractual.

**Projects and testimonials stay front-end published too**, for a different
reason: they are per-locale but are not Markdown. A project's localized title,
description and tags are locale MAPS inside its own `config.json`, and
testimonials are a per-locale JSON file. Neither is in the corpus this repo
mirrors.

### Frontmatter parsing is part of the byte contract

`scripts/lib/files.mjs` has a minimal zero-dependency frontmatter reader, and it
is still correct for what it was written for: `en_md5` stamps and flat scalar
fields, read by scripts that must run with no `node_modules`.

It is NOT correct for anything that reaches a published artifact. The copy
artifacts carry `seo`, a nested mapping, and `tags`, a sequence, straight from
frontmatter into content-hashed bytes. A reader that returns those as raw
strings does not produce slightly-wrong metadata, it produces an artifact at a
hash the front-end never asks for. So `parseFrontmatter` lives in the renderer
package and both repos use it, on exactly the same terms as the renderers.

### Pointers: how a translation goes live without a front-end deploy

Beside every immutable artifact, `publish` writes a mutable **pointer** at a stable path,
`.../current.json` holding `{ "hash": "..." }`. The front-end resolves a non-English URL by reading
that pointer at runtime (`app/lib/i18n/catalogPointer.ts`), so publishing a translation is
rewriting one ~24-byte object rather than rebuilding and redeploying the worker.

**Each pointer object has exactly one writer.** This repo owns every non-English pointer; English
has none at all, because the front-end compiles its hash in and ships its artifacts atomically with
the deploy. The front-end does write non-English pointers into its **local** tree so `pnpm dev`
works without an `i18n` checkout, but excludes them from `static:upload`, so on R2 the single-writer
rule holds.

Artifacts sync immutably with `--size-only`; pointers are **copied**, never synced (`--size-only`
compares byte counts and one hash is exactly as long as another), with a short TTL plus a long
`stale-while-revalidate`. The artifact always lands before the pointer that names it.

`dist/manifest.json` is now a record for humans and CI — what a run published, which renderer
version produced the HTML, and which front-end commit English was read from — rather than a
hand-back the front-end needs in order to reach a locale.

`static/i18n/completeness.json` carries that same `english` block: `{ repo, sha }`. On a PR the SHA
is the pin; on `main` it is whatever front-end `main` was at that moment, and recording it is what
makes the float acceptable. It is `null` when the checkout has uncommitted changes to English, which
is a local-only state, rather than reporting a SHA that is not the truth.

### Building into a front-end checkout (`--out-dir`)

`node scripts/publish.mjs all --out-dir=<front-end>/app/public` writes the same tree, byte for byte,
into a local front-end instead of `dist/`. That is what the front-end's `pnpm dev` runs (via
`app/scripts/generate-i18n-content.js`) so a developer sees translated pages locally, produced by
this script rather than by a third pipeline.

With `--out-dir` the output directory is **not** wiped first (it is a tree the front-end's own
generators also write, and wiping it would delete every English artifact), and no `manifest.json`,
`sync.sh` or upload is produced. The final guard re-walk is also skipped: that tree is full of
English this repo did not write, and the guard's question is "did *this repo* write English", which
every key already answered at `emit()`.

## Relationship to the `translator` repo

- **`translator` is the brain; this repo is the hands.** It decides *how* to translate; this decides
  *what is out of date*, runs it, checks it, and ships it.
- **`translate.mjs` reads `translator`'s guidance from a checkout of it** and never copies it here:
  `global/rules.md`, `global/voice.md`, `global/translating.md`, `content-types/<type>.md`,
  `languages/<lang>/guide.md` and `glossary.md`, plus the family files where the locale belongs to a
  family. Point it with `--translator-repo=` or `JIKI_TRANSLATOR_REPO`.
- **Content type ids map to `translator`'s how-to filenames** in one table at the top of
  `translate.mjs`. `concept` is its `concept-pages`, `app-messages` is its `website-keys`, and both
  `video-lessons` and `badges` are its `curriculum-copy`.
- **`validate.mjs` mirrors `translator/scripts/check-translation`'s contract** (the ERROR/WARN split,
  `--no-stamp`, stamp-only-on-pass) rather than calling it. It cannot call it: that script's
  `CONTENT_TYPES` map addresses paths inside the front-end monorepo by construction, so it cannot be
  pointed at `locales/<locale>/`. If it is ever refactored to take a root, switch to calling it.
- **Modes mean the same thing in both repos.** `outdated` is missing or stale, `all` forces
  everything (use it after a glossary or guide change, which do not touch English and so are
  invisible to the stamps), `missing` fills catalog gaps only.

## House rules

- **No em dashes** in prose, here or in translated content. Use separate sentences, commas, or
  parentheses.
- **Never hand-write a staleness stamp.** `validate` writes them.
- **Never hand-assemble catalog JSON.** `stub` and `translate` write catalogs; both rebuild against
  `source` so key parity and order are structural rather than trusted.
- **Never fill an untranslated key with English.** The sentinel exists for that.
- **Never make a warning an error.** They are heuristics, and they false-positive on purpose.
