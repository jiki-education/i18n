# Jiki i18n

Jiki's translated output, and the scripts that produce and publish it.

`locales/` holds nothing but target locales. English is authored beside the code that renders
it, and read from a checkout of that repo at `.source/<repo>`, which is gitignored and
ephemeral: the front-end for almost everything, `videos` for the English subtitle track. See
[ENGLISH-SOURCE.md](./ENGLISH-SOURCE.md) for that model, and [CLAUDE.md](./CLAUDE.md) for
everything else.

## Quick start

```bash
pnpm install                             # only the prose renderer needs it
pnpm source:checkout                     # fetch English (front-end main, shallow + sparse)
pnpm source:checkout --source=videos     # ...and the English subtitle track
pnpm source:checkout --source=api        # ...and the api copy coverage reports

node scripts/coverage.mjs                # what is translated, stale, missing
node scripts/validate.mjs all --no-stamp # the CI gate
node scripts/publish.mjs hu              # build the R2 artifacts into dist/
```

Already have a checkout? Point at it instead: `--source-repo=<path>`, or the repo's env
override (`JIKI_SOURCE_REPO`, `JIKI_VIDEOS_REPO`, `JIKI_API_REPO`). A sibling `../front-end`,
`../videos` or `../api` is found automatically.

`coverage` also reports the level milestone emails and the mailer / message YAML, which are
translated in the `api` repo because that copy has not been migrated here yet, so one run
answers "is this language complete?" for everything. It reads the api at `main`, reports and
never gates: with no api checkout those rows say so and nothing fails.

Adding an item to the corpus. There is no registry: an explicit `--type`/`--slug` resolves
against English directly, and the item is in the corpus from the moment a locale holds it.

```bash
node scripts/stub.mjs all --type=concept --slug=arrays   # sentinel-fill it everywhere
node scripts/validate.mjs hu --type=concept --slug=arrays --stamp   # check it and stamp it
```

Translating is not done from here. The `translator` repo owns the one translation engine and
runs the passes; this repo says what is out of date, checks the result, and ships it.

## How work arrives

Translation does not run in CI. A front-end PR marked ready for review opens an **issue here**
carrying the front-end SHA; the orchestrator in the `translator` repo picks it up, runs the passes
locally with whatever engine each language uses, pushes a branch whose commit carries an
`English-Ref: <repo>@<sha>` trailer, and closes the issue. Issues are the queue.

`validate` and `publish` stay in CI, because they gate what reaches R2 and must not depend on
anyone's laptop.

`node scripts/<name>.mjs --help` is not implemented; each script's header comment is its
documentation, and is the first thing to read before changing one.
