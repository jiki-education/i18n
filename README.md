# Jiki i18n

Jiki's translated output, and the scripts that produce and publish it.

`locales/` holds nothing but target locales. English is authored in the front-end and read
from a checkout of it at `.source/front-end`, which is gitignored and ephemeral. See
[ENGLISH-SOURCE.md](./ENGLISH-SOURCE.md) for that model, and [CLAUDE.md](./CLAUDE.md) for
everything else.

## Quick start

```bash
npm install                              # only the prose renderer needs it
npm run source:checkout                  # fetch English (front-end main, shallow + sparse)

node scripts/coverage.mjs                # what is translated, stale, missing
node scripts/validate.mjs all --no-stamp # the CI gate
node scripts/publish.mjs hu              # build the R2 artifacts into dist/
```

Already have a front-end checkout? Point at it instead: `--source-repo=<path>`, or
`JIKI_SOURCE_REPO=<path>`. A sibling `../front-end` is found automatically.

Adding an item to the corpus. There is no registry: an explicit `--type`/`--slug` resolves
against English directly, and the item is in the corpus from the moment a locale holds it.

```bash
node scripts/stub.mjs all --type=concept --slug=arrays   # sentinel-fill it everywhere
node scripts/translate.mjs hu --mode=outdated            # translate what changed
```

Outstanding translation work, one file per dispatching front-end PR:

```bash
node scripts/english-ref.mjs list
```

`node scripts/<name>.mjs --help` is not implemented; each script's header comment is its
documentation, and is the first thing to read before changing one.
