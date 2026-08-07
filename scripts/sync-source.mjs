#!/usr/bin/env node
//
// sync-source — mirror English from the source repos into locales/source/.
//
// Usage:
//   node scripts/sync-source.mjs [--source-repo=<path>] [--type=<id>] [--slug=<slug>]
//                                [--discover] [--only-translated] [--check] [--force]
//
// Examples:
//   node scripts/sync-source.mjs                       # sync everything already tracked
//   node scripts/sync-source.mjs --type=concept --slug=arrays   # add / refresh one item
//   node scripts/sync-source.mjs --discover            # track every item English exists for
//   node scripts/sync-source.mjs --check               # verify only, write nothing
//
// ## One-way, always
//
// English is authored in the front-end monorepo, beside the code that renders it.
// This script reads from there and writes here. It NEVER writes to the source
// repo, and nothing else in this repo ever reads from it: every other script
// reads locales/source/, so a translate or publish run cannot depend on a
// front-end checkout being present.
//
// ## The divergence guard
//
// A mirror is only worth having if it is provably a mirror. Every sync records
// the md5 of each file it wrote into locales/source/.manifest.json, and every
// later run compares those back before writing anything. A file that has been
// hand-edited here is a HARD FAIL, not an auto-repair: overwriting it would
// destroy the only evidence that someone tried to author English in the wrong
// repo, and the fix (make the change in the front-end) is not something this
// script can do. `--force` overwrites deliberately, once you have looked.
//
// The manifest doubles as the item registry: an item is tracked here once it has
// been synced once, so a bare `sync-source` refreshes exactly the corpus this
// repo has imported and never silently pulls in the whole 1300-exercise tree.
//
// ## The family map
//
// The manifest also records which exercise-category each imported exercise
// belongs to. That is a fact about the exercise's TypeScript, not its copy, so
// it can only be read from the front-end, and this is the one script that reads
// the front-end. Recording it here is what keeps publish.mjs runnable in CI with
// no front-end checkout while still merging family base catalogs exactly as the
// front-end's generator does.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SOURCE_LOCALE, TARGET_LOCALES, fail } from "./lib/constants.mjs";
import {
  CONTENT_TYPE_IDS,
  contentType,
  deriveFamily,
  discoverItems,
  localPath,
  resolveSourceRepo,
  sourceRepoPath
} from "./lib/content-types.mjs";
import { md5File, readText } from "./lib/files.mjs";
import { GuardViolation, assertMirrorClean, guardedWrite } from "./lib/guard.mjs";
import { parseArgs } from "./lib/args.mjs";

const MANIFEST = path.join(REPO_ROOT, "locales", SOURCE_LOCALE, ".manifest.json");

function readManifest() {
  if (!fs.existsSync(MANIFEST)) return { files: {}, items: [], families: {} };
  return { families: {}, ...JSON.parse(readText(MANIFEST)) };
}

/** Keep only the named top-level namespaces of a JSON catalog, in their source order. */
function sliceNamespaces(text, namespaces, from) {
  const parsed = JSON.parse(text);
  const out = {};
  for (const namespace of namespaces) {
    if (!(namespace in parsed)) fail(`namespace "${namespace}" is not in ${from}`);
    out[namespace] = parsed[namespace];
  }
  return `${JSON.stringify(out, null, 2)}\n`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const sourceRepo = resolveSourceRepo(args.flags["source-repo"]);
  const manifest = readManifest();

  if (!args.flags.force) {
    try {
      assertMirrorClean(manifest, md5File);
    } catch (error) {
      if (!(error instanceof GuardViolation)) throw error;
      fail(error.message);
    }
  }

  if (args.flags.check) {
    console.log(`locales/${SOURCE_LOCALE}/ is clean: ${Object.keys(manifest.files).length} mirrored files match.`);
    return;
  }

  // The set to sync: an explicit --type/--slug adds or refreshes one item,
  // otherwise refresh everything the manifest already tracks.
  let items;
  if (args.flags.discover) {
    // Widen the tracked corpus to every item English exists for, rather than one
    // invocation per item. `--type` narrows the discovery to a single type.
    const typeIds = args.flags.type ? [args.flags.type] : CONTENT_TYPE_IDS;
    items = typeIds.flatMap((typeId) => discoverItems(sourceRepo, typeId));

    // The corpus this repo carries is the corpus it has translations for, not
    // every English item that exists. Mirroring the whole 1300-exercise tree
    // would bury the items someone is actually working on under thousands of
    // pages nobody has started, and coverage would read as one enormous gap.
    if (args.flags["only-translated"]) {
      items = items.filter((item) =>
        TARGET_LOCALES.some((locale) => fs.existsSync(sourceRepoPath(sourceRepo, item.type, locale, item.slug)))
      );
    }
    if (items.length === 0) fail(`--discover found no English items in ${sourceRepo}`);
  } else if (args.flags.type) {
    const type = contentType(args.flags.type);
    if (type.slugged && !args.flags.slug) fail(`--type=${args.flags.type} needs --slug`);
    items = [{ type: args.flags.type, slug: args.flags.slug ?? null }];
  } else {
    items = manifest.items;
    if (items.length === 0) {
      fail(
        `nothing tracked yet. Seed an item first, e.g.\n` +
          `  node scripts/sync-source.mjs --type=concept --slug=arrays\n` +
          `Known types: ${CONTENT_TYPE_IDS.join(", ")}`
      );
    }
  }

  const files = { ...manifest.files };
  const tracked = new Map(manifest.items.map((item) => [`${item.type}:${item.slug ?? ""}`, item]));

  // The exercise-to-family map. An exercise's family is whichever
  // `exercise-categories/<family>/` module its `.ts` files import, so it is a
  // fact about code that only exists in the front-end. Capturing it here is what
  // lets publish.mjs merge the family's base catalog into a member exercise's
  // catalog without a front-end checkout, which CI does not have. A standalone
  // exercise is recorded as an explicit null, so "scanned, no family" and "never
  // scanned" stay distinguishable and publish can hard-fail on the second.
  const families = { ...manifest.families };
  let written = 0;
  let unchanged = 0;

  for (const item of items) {
    const from = sourceRepoPath(sourceRepo, item.type, SOURCE_LOCALE, item.slug);
    if (!fs.existsSync(from)) {
      fail(`no English source at ${path.relative(sourceRepo, from)} in ${sourceRepo}`);
    }
    const to = localPath(item.type, SOURCE_LOCALE, item.slug);
    const relative = path.relative(path.join(REPO_ROOT, "locales", SOURCE_LOCALE), to);

    // A catalog may be imported as a NAMESPACE SLICE rather than whole, so this
    // repo can carry a demonstrable corpus of the 1300-key app catalog without
    // taking all of it. The slice is recorded in the manifest, so every later
    // refresh stays scoped to the same namespaces rather than silently widening.
    const namespaces = item.namespaces ?? (typeof args.flags.namespaces === "string" ? args.flags.namespaces.split(",") : null);
    const content = namespaces ? sliceNamespaces(readText(from), namespaces, from) : readText(from);

    const existed = fs.existsSync(to);
    if (existed && readText(to) === content) {
      unchanged += 1;
    } else {
      guardedWrite(to, content, { syncingSource: true });
      written += 1;
      console.log(`  ${existed ? "updated" : "added"}    ${relative}${namespaces ? ` (namespaces: ${namespaces.join(", ")})` : ""}`);
    }

    files[relative] = md5File(to);
    tracked.set(`${item.type}:${item.slug ?? ""}`, {
      type: item.type,
      slug: item.slug ?? null,
      ...(namespaces ? { namespaces } : {})
    });

    if (contentType(item.type).exerciseScoped) {
      families[item.slug] = deriveFamily(sourceRepo, item.slug);
    }
  }

  const next = {
    $comment:
      "Written by scripts/sync-source.mjs. `files` is the md5 of every mirrored English file, " +
      "used by the divergence guard; `items` is the corpus this repo has imported; `families` maps " +
      "each imported exercise to its exercise-category base, or null when it has none. Do not hand-edit.",
    syncedFrom: path.basename(sourceRepo),
    syncedAt: new Date().toISOString(),
    items: [...tracked.values()].sort((a, b) => `${a.type}${a.slug}`.localeCompare(`${b.type}${b.slug}`)),
    families: Object.fromEntries(Object.entries(families).sort(([a], [b]) => a.localeCompare(b))),
    files: Object.fromEntries(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)))
  };
  guardedWrite(MANIFEST, `${JSON.stringify(next, null, 2)}\n`, { syncingSource: true });

  console.log(`\nsync-source: ${written} written, ${unchanged} unchanged, ${next.items.length} items tracked.`);
}

main();
