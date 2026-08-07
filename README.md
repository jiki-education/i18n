# Jiki i18n

Jiki's translated output, and the scripts that produce and publish it.

English is authored in the source repos and mirrored here read-only as `locales/source/`.
Everything else under `locales/` is translation. See [CLAUDE.md](./CLAUDE.md) for the full model.

## Quick start

No install step: the scripts are dependency-free Node ESM.

```bash
node scripts/sync-source.mjs --check     # is the English mirror still a mirror?
node scripts/coverage.mjs                # what is translated, stale, missing
node scripts/validate.mjs all --no-stamp # the CI gate
node scripts/publish.mjs hu              # build the R2 artifacts into dist/
```

Adding an item to the corpus:

```bash
node scripts/sync-source.mjs --type=concept --slug=arrays   # mirror the English
node scripts/stub.mjs all                                    # sentinel-fill new keys
node scripts/translate.mjs hu --mode=outdated                # translate what changed
```

`node scripts/<name>.mjs --help` is not implemented; each script's header comment is its
documentation, and is the first thing to read before changing one.
