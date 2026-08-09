#!/usr/bin/env node
//
// source-checkout — fetch a source repo into .source/<id>, so the scripts here
// have English to read.
//
// Usage:
//   node scripts/source-checkout.mjs [--source=<id>] [--ref=<sha|branch>] [--repo=<owner/name>]
//                                    [--from-english-ref] [--base=<ref>] [--force]
//   node scripts/source-checkout.mjs --resolve [--base=<ref>]
//
// Examples:
//   node scripts/source-checkout.mjs                      # front-end main
//   node scripts/source-checkout.mjs --source=videos      # the subtitle source
//   node scripts/source-checkout.mjs --ref=<sha>          # one exact commit
//   node scripts/source-checkout.mjs --from-english-ref --base=origin/main
//                                                         # whatever this branch pins
//   node scripts/source-checkout.mjs --resolve --base=origin/main
//                                                         # print that ref, check out nothing
//
// ## --source
//
// Which repo English is being fetched from. `front-end` (the default) is where
// almost all of it is authored; `videos` holds the English subtitles, because
// they are cut from the rendered video. `api` is not English at all: it holds
// copy that is translated there because it has not been migrated here yet, and
// only coverage reads it. scripts/lib/english.mjs holds the list. The
// `English-Ref:` pin names a front-end commit, so `--from-english-ref` is
// meaningful only for that one.
//
// ## --resolve
//
// Prints one word and exits: the SHA this branch pins with an `English-Ref:`
// commit trailer, or `main` when it pins nothing. CI uses that to point
// actions/checkout, which handles credentials for a private repo better than
// this script can. Same question, two answers, one implementation.
//
// ## Shallow and sparse, never a clone
//
// The front-end is a large monorepo and English is four directories of it. This
// fetches one commit with no history and checks out only those four, which is
// seconds rather than minutes and is the same shape the CI checkout step uses.
//
// ## In CI this is not what runs
//
// The workflows use actions/checkout with `path: .source/<id>`, because it
// already handles credentials for a private repo. This is the LOCAL story, and
// the two agree on one thing that matters: where the checkout lands.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fail } from "./lib/constants.mjs";
import { DEFAULT_SOURCE_REPO, checkoutDir, sourceRepoSpec } from "./lib/english.mjs";
import { DEFAULT_REPO, branchEnglishRef } from "./lib/english-ref.mjs";
import { parseArgs } from "./lib/args.mjs";

const git = (args, cwd) => execFileSync("git", args, { cwd, stdio: ["ignore", "pipe", "inherit"], encoding: "utf8" }).trim();

function main() {
  const args = parseArgs(process.argv.slice(2));
  const sourceId = args.flags.source || DEFAULT_SOURCE_REPO;
  const spec = sourceRepoSpec(sourceId);
  const CHECKOUT_DIR = checkoutDir(sourceId);

  /** Only the directories English is authored in. Everything else is code. */
  const SPARSE_PATHS = spec.dirs;
  const repo = args.flags.repo || (sourceId === DEFAULT_SOURCE_REPO ? DEFAULT_REPO : spec.remote);

  if (args.flags.resolve) {
    const pinned = branchEnglishRef(typeof args.flags.base === "string" ? args.flags.base : "origin/main");
    console.log(pinned ? pinned.sha : "main");
    return;
  }

  let ref = args.flags.ref;
  if (args.flags["from-english-ref"]) {
    if (sourceId !== DEFAULT_SOURCE_REPO) fail(`--from-english-ref names a front-end commit, so it cannot pin ${sourceId}.`);
    const pinned = branchEnglishRef(args.flags.base || "origin/main");
    if (pinned) {
      ref = pinned.sha;
      console.log(`English-Ref trailer pins ${pinned.repo}@${pinned.sha}.`);
    } else {
      console.log("No English-Ref trailer on this branch. Reading English from front-end main.");
    }
  }
  ref ||= "main";

  if (fs.existsSync(CHECKOUT_DIR) && !args.flags.force) {
    const head = git(["rev-parse", "HEAD"], CHECKOUT_DIR);
    console.log(`${CHECKOUT_DIR} already exists at ${head}. Re-run with --force to replace it.`);
    return;
  }
  if (fs.existsSync(CHECKOUT_DIR)) fs.rmSync(CHECKOUT_DIR, { recursive: true });

  const url = (sourceId === DEFAULT_SOURCE_REPO && process.env.JIKI_SOURCE_REMOTE) || `https://github.com/${repo}.git`;
  fs.mkdirSync(CHECKOUT_DIR, { recursive: true });

  try {
    git(["init", "--quiet"], CHECKOUT_DIR);
    git(["remote", "add", "origin", url], CHECKOUT_DIR);
    git(["sparse-checkout", "init", "--cone"], CHECKOUT_DIR);
    git(["sparse-checkout", "set", ...SPARSE_PATHS], CHECKOUT_DIR);
    git(["fetch", "--depth=1", "--filter=blob:none", "origin", ref], CHECKOUT_DIR);
    git(["checkout", "--quiet", "FETCH_HEAD"], CHECKOUT_DIR);
  } catch (error) {
    fail(`could not check out ${repo}@${ref} into ${CHECKOUT_DIR}: ${error.message}`);
  }

  console.log(`Checked out ${repo}@${git(["rev-parse", "HEAD"], CHECKOUT_DIR)} into ${path.relative(process.cwd(), CHECKOUT_DIR)}.`);
}

main();
