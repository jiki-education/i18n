// `.english-refs/<pr>.json`: which front-end commit a branch translates.
//
// A translation branch pins the English it was dispatched for, so it validates
// against a fixed tree and cannot go red because something merged next door
// while it was open. `main` has no pin and reads front-end `main`, knowingly.
//
// ONE FILE PER PR, never a shared list. A shared list conflicts whenever two
// translation branches are open at once, which is the exact situation this
// exists to survive. Separate files never touch.
//
// See ENGLISH-SOURCE.md.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { REPO_ROOT, fail } from "./constants.mjs";

export const REFS_DIR = path.join(REPO_ROOT, ".english-refs");

export const DEFAULT_REPO = "jiki-education/front-end";

const refFile = (pr) => path.join(REFS_DIR, `${pr}.json`);

/** Write the ref for one front-end PR. The translate workflow is the only writer. */
export function writeEnglishRef({ pr, sha, repo = DEFAULT_REPO }) {
  if (!pr) fail("an English ref needs the front-end PR number it came from");
  if (!/^[0-9a-f]{40}$/.test(sha ?? "")) fail(`an English ref needs a full 40-character SHA, got "${sha}"`);

  fs.mkdirSync(REFS_DIR, { recursive: true });
  const body = { repo, sha, pr: Number(pr), dispatchedAt: new Date().toISOString() };
  fs.writeFileSync(refFile(pr), `${JSON.stringify(body, null, 2)}\n`);
  return { file: refFile(pr), ...body };
}

/** Every ref currently on disk, newest PR first. */
export function listEnglishRefs() {
  if (!fs.existsSync(REFS_DIR)) return [];
  return fs
    .readdirSync(REFS_DIR)
    .filter((name) => name.endsWith(".json"))
    .map((name) => ({ file: path.join(REFS_DIR, name), ...JSON.parse(fs.readFileSync(path.join(REFS_DIR, name), "utf8")) }))
    .sort((a, b) => b.pr - a.pr);
}

/**
 * The ref THIS branch introduced, or null.
 *
 * Not "any ref on disk": `main` accumulates the refs of work that is dispatched
 * but not yet published, and a branch inheriting one of those must not be
 * pinned by it. The branch's own ref is the one ADDED relative to the merge
 * base, which is also why it is written in the same commit as the work.
 *
 * Zero added refs is a normal state, not an error: a scripts-only PR translates
 * nothing and reads front-end main like everything else. More than one is an
 * error, because two pins is no pin.
 */
export function branchEnglishRef(base) {
  if (!base) return null;

  let added;
  try {
    added = execFileSync("git", ["diff", "--name-only", "--diff-filter=A", `${base}...HEAD`, "--", ".english-refs"], {
      cwd: REPO_ROOT,
      encoding: "utf8"
    })
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.endsWith(".json"));
  } catch (error) {
    fail(`could not diff .english-refs against "${base}": ${error.message}`);
  }

  if (added.length === 0) return null;
  if (added.length > 1) {
    fail(
      `this branch adds ${added.length} English refs (${added.join(", ")}). ` +
        `A branch translates one dispatched commit; two pins is no pin.`
    );
  }

  const file = path.join(REPO_ROOT, added[0]);
  if (!fs.existsSync(file)) return null;
  return { file, ...JSON.parse(fs.readFileSync(file, "utf8")) };
}
