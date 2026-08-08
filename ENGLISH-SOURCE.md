# Where English comes from

English is not stored in this repo. It is checked out from the front-end into
`.source/front-end/`, which is gitignored and ephemeral, and `locales/` holds
nothing but target locales.

Every script that needs English reads it from there. Nothing here writes it, and
nothing here can: there is no English directory under `locales/` to write to.

## Which English

Two cases, deliberately different.

**On a pull request**, the exact front-end commit the work was dispatched for,
recorded in `.english-refs/<pr>.json`. A translation branch validates against
fixed English, so it cannot go red because something merged next door while the
branch was open.

**On `main`**, front-end `main`. This floats, knowingly. A publish stamps the
front-end SHA it actually used into `completeness.json`, so attribution stays
recoverable after the fact.

## The ref file

`.english-refs/<pr>.json` holds the dispatching repo, the SHA, and the front-end
PR number it came from. `<pr>` is the **front-end** PR, because that is the unit
of work being translated.

One file per PR, never a shared list. A shared list conflicts whenever two
translation branches are open at once, which is precisely the situation this
scheme exists to survive. Separate files never touch.

The translate workflow writes the file as part of creating the branch, so the
ref lands in the same commit as the work it describes. Two writers could
disagree about which SHA a branch is for; one writer cannot.

A ref file is removed once the English it pins has reached front-end `main` and
has been published from here. What is left in `.english-refs/` on `main` is
therefore outstanding translation work. An abandoned front-end PR leaves its file
behind for as long as it is abandoned, which is how orphaned work becomes
visible.

## Two questions, two mechanisms

These get confused because both sound like "what is missing", and they are not
the same question.

**What work does one PR create?** A three-dot diff of the English between the
merge base and the dispatched SHA: `git diff --name-only <base>...<sha>`. The
merge base rather than `main`, because a branch that has been open a while would
otherwise sweep in every unrelated English change that landed since it forked,
and claim them as its own work. This replaces the tracked-item list the sync
manifest used to carry, and it catches for free the case the manifest could not
see: an item whose English changed *after* it was translated.

**Is a locale complete?** A full comparison of `locales/<locale>/` against
`.source/`. That is what `completeness.json` already answers, and it is
unchanged apart from where English is read from.

## The corpus

There is no tracked-item registry any more. The corpus is derived by comparing
the two trees: an item is in the corpus when English exists for it in `.source/`
**and** at least one target locale already holds a translation of it.

That is what the old `sync-source --discover --only-translated` recorded, except
that it is now recomputed rather than remembered, so it cannot fall out of step
with the files.

Bringing a new item into the corpus is a deliberate act: pass `--type` and
`--slug` to `stub` or `translate`, which resolve the item from English directly
rather than from the corpus, and the item is in the corpus from the moment the
first locale holds a file for it.

Exclusions are explicit, in `corpus.json`. An item listed there is dropped from
the derived corpus whatever is on disk, and the reason is written beside it.

`completeness.json`'s denominator is a different number and stays a different
number: it is the size of the **real** English corpus, every item English exists
for, read straight from `.source/`. Measuring completeness against the corpus
would ask "have you translated everything you have started", which any locale can
satisfy by starting one thing.

## What this deletes

- `locales/source/`, the mirror.
- The divergence guard, and the `files` hash map in the sync manifest that fed
  it. There is nothing left to diverge.
- `sync-source.mjs`. Its syncing role is gone; its other roles (the tracked
  corpus, the corpus sizes, the exercise family map) are all derived from
  `.source/` now, so there is nothing left for it to record.
- Namespace slicing. A catalog imported as a slice made key parity a comparison
  against a subset of English, which is a quieter failure than the disk saving
  was worth. Nothing used it.
- `assertWritablePath()` and the mirror-clean assertions. With English outside
  `locales/`, publishing English is structurally impossible rather than defended
  against.

One assertion survives: `assertPublishableKey()`. A bad path template could still
synthesise an `en` or `source` segment from somewhere other than a directory
walk, and that failure would be silent on R2.

## What it costs

A front-end checkout in every validate and publish run, where today they need
nothing. The front-end is large, so it is a shallow, sparse checkout of the four
directories English lives in, not a clone.

Local runs need English too. `scripts/lib/english.mjs` resolves it from, in
order: `--source-repo=`, `JIKI_SOURCE_REPO`, `.source/front-end`, and a sibling
`../front-end` checkout. When it finds none it says so and says how to get one
(`npm run source:checkout`), rather than reporting a missing file.
