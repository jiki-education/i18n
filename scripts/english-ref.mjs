#!/usr/bin/env node
//
// english-ref — read and write `.english-refs/<pr>.json`, the front-end commit a
// translation branch is pinned to.
//
// Usage:
//   node scripts/english-ref.mjs write --pr=<n> --sha=<sha> [--repo=<owner/name>]
//   node scripts/english-ref.mjs resolve [--base=<ref>]      # prints the SHA, or "main"
//   node scripts/english-ref.mjs list                        # outstanding work
//   node scripts/english-ref.mjs prune                       # drop refs whose English has landed
//
// The translate workflow writes; CI resolves; the publish workflow prunes. See
// ENGLISH-SOURCE.md.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { REPO_ROOT, fail } from "./lib/constants.mjs";
import { englishRepo } from "./lib/english.mjs";
import { branchEnglishRef, listEnglishRefs, writeEnglishRef } from "./lib/english-ref.mjs";
import { parseArgs } from "./lib/args.mjs";

function main() {
  const args = parseArgs(process.argv.slice(2));
  const command = args.positional[0];

  if (command === "write") {
    const written = writeEnglishRef({ pr: args.flags.pr, sha: args.flags.sha, repo: args.flags.repo || undefined });
    console.log(`${path.relative(REPO_ROOT, written.file)}: ${written.repo}@${written.sha} (front-end PR #${written.pr})`);
    return;
  }

  if (command === "resolve") {
    // Prints exactly one word, for a workflow to capture. "main" when nothing is
    // pinned, which is the main-branch case and every non-translation PR.
    const pinned = branchEnglishRef(args.flags.base || process.env.GITHUB_BASE_REF_FULL || "origin/main");
    console.log(pinned ? pinned.sha : "main");
    return;
  }

  if (command === "list") {
    const refs = listEnglishRefs();
    if (refs.length === 0) {
      console.log("No outstanding translation work.");
      return;
    }
    for (const ref of refs) console.log(`  #${ref.pr}  ${ref.repo}@${ref.sha}  dispatched ${ref.dispatchedAt}`);
    console.log(`\n${refs.length} outstanding front-end PR(s) awaiting translation.`);
    return;
  }

  if (command === "prune") {
    // A ref is done once the English it pins is an ancestor of front-end main:
    // the front-end PR merged, and main now publishes that English anyway. A ref
    // whose SHA never becomes an ancestor is an ABANDONED front-end PR, and it
    // stays here, which is how orphaned translation work stays visible.
    const repo = englishRepo();
    let pruned = 0;
    for (const ref of listEnglishRefs()) {
      if (!isAncestorOfMain(repo, ref.sha)) {
        console.log(`  keep   #${ref.pr}  ${ref.sha} is not on front-end main yet`);
        continue;
      }
      fs.rmSync(ref.file);
      pruned += 1;
      console.log(`  pruned #${ref.pr}  ${ref.sha} has landed on front-end main`);
    }
    console.log(`\nenglish-ref: ${pruned} ref(s) pruned.`);
    return;
  }

  fail("usage: node scripts/english-ref.mjs <write|resolve|list|prune> [...]");
}

/**
 * Is this commit on front-end main?
 *
 * The checkout is shallow, so `merge-base --is-ancestor` has no history to walk.
 * Unknown is treated as "not landed", which keeps the ref rather than deleting
 * the record of outstanding work on a shallow clone. Losing a ref is worse than
 * keeping a stale one: one is a silent hole in the outstanding list, the other
 * is a line to read.
 */
function isAncestorOfMain(repo, sha) {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", sha, "origin/main"], { cwd: repo, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

main();
