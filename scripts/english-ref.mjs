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
    // A ref is done when its front-end PR has MERGED: the English it pins is on
    // front-end main, which is what main publishes anyway. A PR that is still
    // open, or was closed unmerged, keeps its file, which is how translation
    // work orphaned by an abandoned front-end PR stays visible.
    //
    // Asked of the GitHub API rather than of git, because the checkout here is
    // shallow by design and `merge-base --is-ancestor` has no history to walk.
    let pruned = 0;
    for (const ref of listEnglishRefs()) {
      const state = pullRequestState(ref);
      if (state !== "MERGED") {
        console.log(`  keep   ${ref.pr}  front-end PR is ${state}`);
        continue;
      }
      fs.rmSync(ref.file);
      pruned += 1;
      console.log(`  pruned ${ref.pr}  front-end PR has merged`);
    }
    console.log(`\nenglish-ref: ${pruned} ref(s) pruned.`);
    return;
  }

  fail("usage: node scripts/english-ref.mjs <write|resolve|list|prune> [...]");
}

/**
 * The state of the front-end PR a ref came from, as GitHub sees it.
 *
 * Anything this cannot answer (a manual dispatch with no PR, no token, an API
 * hiccup) is reported as UNKNOWN and keeps the ref. Losing a ref is worse than
 * keeping a stale one: one is a silent hole in the list of outstanding work, the
 * other is a line to read.
 */
function pullRequestState(ref) {
  if (!/^[0-9]+$/.test(String(ref.pr))) return "not a pull request";
  try {
    const out = execFileSync("gh", ["pr", "view", String(ref.pr), "--repo", ref.repo, "--json", "state", "--jq", ".state"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    return out || "UNKNOWN";
  } catch {
    return "UNKNOWN";
  }
}

main();
