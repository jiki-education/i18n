# Jiki i18n - Agent Instructions

This repo holds **Jiki's translated output**, and the scripts that produce and publish it.

## What this repo is

- **The home of every non-English string Jiki ships.** App UI catalogs, concept pages, exercise
  instructions and message catalogs, video lesson and badge copy, in every target locale.
- **The publisher of those translations to R2**, under the same content-hashed path convention
  the front-end already uses.
- **A read-only mirror of the English those translations are made from**, under `locales/source/`.

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
| **source repos** (`front-end` monorepo: `app/`, `curriculum/`, `interpreters/`, `content/`) | English strings, the code, publishing English to R2, which locales are actually **served** (`SUPPORTED_LOCALES`) | any translated string |
| **`i18n`** (this repo) | every translated string, the sync/translate/validate/publish scripts, publishing non-English to R2 | English, translation guidance, what is served |
| **`translator`** | translation guides, glossaries, per-language style guides, per-content-type how-tos, forum review workflow | any translated output, any code that ships |

The point of the split is that translation churn no longer generates front-end PRs. A translation
pass touches this repo and nothing else.

## Directory structure

Locale-first. Each locale mirrors the **source packages' own layout**, with two mechanical edits
and no other invention:

- the package's `src/` segment is dropped (`curriculum/src/concepts` becomes `curriculum/concepts`)
- the locale segment is hoisted to the top and removed from within the path
  (`.../instructions/hu.md` becomes `locales/hu/.../instructions.md`)

so mapping back to a source path is mechanical.

```
locales/
  source/                                          READ-ONLY mirror of English
    .manifest.json                                 md5 of every mirrored file, the tracked corpus,
                                                   and each exercise's family
    app/messages.json                              <- app/messages/en.json
    curriculum/
      concepts/<slug>/page.md                      <- curriculum/src/concepts/<slug>/source.md
      exercises/<slug>/instructions.md             <- .../exercises/<slug>/instructions/source.md
      exercises/<slug>/messages.json               <- .../exercises/<slug>/locales/en/translation.json
      video-lessons/messages.json                  <- .../video-lessons/locales/en/translation.json
      badges/messages.json                         <- .../badges/locales/en/translation.json
      levels/messages.json                         <- .../levels/locales/en/translation.json
      exercise-categories/<family>/messages.json   <- .../exercise-categories/<family>/locales/en/translation.json
    interpreters/
      <language>/messages.json                     <- interpreters/src/<language>/locales/en/translation.json
  hu/                                              one directory per target locale, same shape
    app/messages.json
    curriculum/
      concepts/using-functions/page.md
      exercises/bouncer-dress-code/instructions.md
      exercises/bouncer-dress-code/messages.json
      exercises/bouncer-dress-code/messages.meta.json    staleness stamp
      video-lessons/messages.json + messages.meta.json
      badges/messages.json + messages.meta.json
      levels/messages.json + messages.meta.json
      exercise-categories/draw/messages.json + messages.meta.json
    interpreters/javascript/messages.json + messages.meta.json
```

- **The one place that mapping lives is `scripts/lib/content-types.mjs`.** Adding a content type is
  one entry there. Nothing else changes, in any script.
- **Item discovery is by what is on disk**, walked from `locales/source/`, so English defines the
  corpus the same way it defines key parity. There is no registry to keep in step.

## `locales/source/` is read-only

- **English is authored in the front-end monorepo**, beside the code that renders it. That does not
  change.
- **`scripts/sync-source.mjs` is the only writer of that tree.** It opts out of the guard with an
  explicit `{ syncingSource: true }`, which is greppable: if that flag appears in any other file,
  the guard has been routed around.
- **Every other write goes through `guardedWrite()`**, which throws `GuardViolation` on anything
  under `locales/source/` or anywhere outside this repo.
- **A hand-edit is a hard failure, never an auto-repair.** Every sync records the md5 of what it
  wrote; every later run compares them back. Overwriting a diverged file would destroy the only
  evidence that someone tried to author English in the wrong place, and the real fix (make the
  change in the front-end) is not something a script can do. `--force` exists for once you have
  looked.
- **Nothing but `sync-source` reads the front-end.** Every other script reads `locales/source/`, so
  translate, validate and publish do not need a front-end checkout at all.

## The untranslated sentinel

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
- Prose has no sentinel state: a Markdown page is either translated or absent.
- **The imported corpus predates that rule and carries both markers.** Catalogs that came across in
  the cutover include keys whose value is English verbatim, which is the state the old world used.
  Nothing here rewrites them: the ambiguity is already in the file and a translation that legitimately
  matches English is indistinguishable from a gap. `verify-import` and `validate` both count them, as
  a heuristic WARN, so the size of the problem is visible without anything guessing at it.

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

All Node ESM (`.mjs`), all **dependency-free**: they run on a bare `node` with no install step.
Shared helpers live in `scripts/lib/`.

| Script | What it does |
|--------|--------------|
| `sync-source.mjs` | Pulls English from the source repos into `locales/source/`, one-way. Hard-fails if the mirror has been hand-edited. `--check` verifies without writing. `--namespaces=a,b` imports a catalog as a slice. `--discover` widens the tracked corpus to every item English exists for, and `--only-translated` narrows that to items some locale already has a translation of. Also records each imported exercise's family, which only the front-end knows. |
| `import-existing.mjs` | **Cutover only.** Lifts translations that still live in the source repos into `locales/<locale>/`. Deliberately separate from `sync-source`, so "did this come from the source repo or from a pass?" stays answerable. |
| `translate.mjs` | LLM-backed translation of added and changed items. Modes `outdated` / `all` / `missing`, meaning exactly what they mean in `translator`. Hands off to `validate` when it finishes. |
| `stub.mjs` | Brings every catalog to full key parity with `source`, sentinel-filling anything untranslated. Existing values are reproduced byte for byte. |
| `validate.mjs` | Key parity, ICU validity, whitespace, placeholder and tag parity, prose frontmatter and structure counts, staleness, and the English write guard. Stamps on success. Exit 1 on any ERROR. |
| `publish.mjs` | Builds the content-hashed artifacts and `dist/sync.sh`. Refuses any English R2 key, and any catalog still holding a sentinel. |
| `coverage.mjs` | Per-locale translated / stale / missing / sentinel counts, per content type. `--json` for machines. |
| `test.mjs` | The assertions guarding logic a mistake in would only surface on R2, above all the exercise family merge and its key order. Plain `node:assert`, no framework, non-zero exit on failure. `pnpm test`, and part of `pnpm check`. |
| `verify-import.mjs` | Proves an import is complete and lossless against a source repo checkout: every translation present, byte-for-byte identical, every file under `locales/<target>/` mapping back to a tracked item, no English locale directory. Also counts both untranslated markers without judging either. |

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
exact bytes written**, where the content is `JSON.stringify(parsed)` so source formatting cannot
move a hash.

| Artifact | Path |
|---|---|
| App UI catalog | `/static/i18n/app/{locale}/messages-{hash}.json` |
| Curriculum copy (merged) | `/static/i18n/curriculum/{locale}/messages-{hash}.json` |
| Badges | `/static/i18n/badges/{locale}/messages-{hash}.json` |
| Exercise messages | `/static/i18n/exercises/{slug}/{locale}/messages-{hash}.json` |
| Levels | `/static/i18n/levels/{locale}/messages-{hash}.json` |
| Interpreters | `/static/i18n/interpreter/{language}/{locale}/messages-{hash}.json` |
| Concept pages | `/static/concepts/{slug}/{locale}/content-{hash}.html` |

Bucket `s3://assets`, key prefix `static/`, uploaded with
`--cache-control 'public, max-age=31536000, immutable' --size-only` (every file is content-hashed,
so an upload is always an add, never a replace).

### The English write guard

- **Every write goes through `assertWritablePath()`; every R2 key goes through
  `assertPublishableKey()`.** Both throw `GuardViolation`, which aborts the run.
- **It is a hard fail, never a silent skip.** A publish that quietly dropped English would be
  indistinguishable from a successful one.
- **This replaces credential scoping, which cannot express the rule.** The key that must not be
  written (`static/i18n/app/en/...`) sits *inside* the prefix this repo legitimately writes
  (`static/i18n/app/`), so no bucket policy can separate them.
- **`validate` exercises the guard** rather than trusting it: it asserts the guard refuses every
  English spelling and still permits a legitimate key. A guard meant never to fire only stays
  honest if something makes it fire.

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
it is a fact about **code**, and code stays in the front-end. It cannot be derived at publish time,
because publishing runs in CI here with no front-end checkout.

- **`sync-source.mjs` captures it** and records it as a `families` block in
  `locales/source/.manifest.json`, beside `items` and `files`. The manifest is already the registry
  of what English this repo has imported, and the family is a fact about that English's source, so it
  belongs in the same record rather than in a second file that could drift from it.
- **A standalone exercise is recorded as an explicit `null`**, so "scanned, has no family" stays
  distinguishable from "never scanned".
- **An exercise with no record at all is a hard fail in `publish`**, never an unmerged publish. A
  catalog missing its inherited keys renders raw key names like `errors.hitWall` to a learner, and on
  R2 it would look exactly like a good one.

### Two artifacts are assembled, not copied

- **Curriculum copy** is one flat slug-keyed catalog per locale, merging every exercise's
  frontmatter `title`/`description` with the video lessons. Exercises and videos share one
  collision-free slug namespace; a collision is a hard error.
- **The app catalog** is the whole 1300-key tree.

Publishing either from a partial corpus would serve a catalog with keys missing, so `publish`
refuses unless `--allow-partial` is passed. That is the expected state while this repo carries a
seed corpus.

### Prose publishing

Concept pages and exercise instructions are served as rendered **HTML**, produced by the curriculum
renderer. `publish` writes them into `dist/export/` in the source repos' own layout so that renderer
can consume them unchanged. Rendering Markdown to the front-end's exact HTML from here is not yet
implemented; doing it in two places would be two renderers.

### Handing hashes back

The front-end resolves a catalog URL from a hash it holds at **build** time
(`lib/generated/*-hashes.ts`), so a locale published from here is unreachable until the front-end
learns its hashes. `publish` writes `dist/manifest.json`, and the workflow dispatches it back to the
front-end.

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
