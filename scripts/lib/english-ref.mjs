// Which front-end commit an i18n branch is translating.
//
// A translation branch has to validate against FIXED English, or it goes red
// because something merged next door while it was open. So the branch has to
// say which commit it was made against, and CI has to be able to read that.
//
// It says so in a commit trailer:
//
//   English-Ref: jiki-education/front-end@<40-char sha>
//
// A trailer rather than a committed file, because a file needs a lifecycle and
// this needs none. The pin is only ever read on a PR, between the merge base and
// the branch head. On `main` there is no pin at all: publish reads front-end
// `main` and records the SHA it used. So a file would land on `main` after every
// merge, pin nothing, and need something to come along and delete it. Two open
// branches would also both be editing it.
//
// A trailer has none of that. It lives in the commit object rather than the
// tree, so two branches can never conflict over it, it lands in the same commit
// as the work it describes by construction, it is visible in review, and once
// merged it is inert history rather than a file somebody has to prune.
//
// What is OUTSTANDING is a different question, and it is not answered here any
// more. Issues in this repo are the queue: a front-end PR opens one, and the
// orchestrator that picks it up closes it. See ENGLISH-SOURCE.md.

import { execFileSync } from "node:child_process";
import { REPO_ROOT, fail } from "./constants.mjs";

export const DEFAULT_REPO = "jiki-education/front-end";

/** `English-Ref: <owner>/<repo>@<sha>`, or just `<sha>`. */
const TRAILER = /^English-Ref:[ \t]*(?:([^@\s]+)@)?([0-9a-f]{40})[ \t]*$/im;

/** Format the trailer to append to a translation commit message. */
export function englishRefTrailer({ sha, repo = DEFAULT_REPO }) {
  if (!/^[0-9a-f]{40}$/.test(sha ?? "")) {
    fail(`an English ref needs a full 40-character SHA, got "${sha}". A branch name would not pin anything.`);
  }
  return `English-Ref: ${repo}@${sha}`;
}

/**
 * The English this branch is pinned to, or null.
 *
 * Read from the newest commit between the merge base and HEAD that carries the
 * trailer. Newest wins because a branch that has been re-pointed at fresher
 * English says so by committing again, and the last thing said is the current
 * answer.
 *
 * No trailer is a normal state, not an error: a scripts-only PR translates
 * nothing, and reads front-end main like `main` does.
 */
export function branchEnglishRef(base) {
  if (!base) return null;

  let log;
  try {
    log = execFileSync("git", ["log", "--format=%B%x00", `${base}..HEAD`], {
      cwd: REPO_ROOT,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024
    });
  } catch (error) {
    fail(`could not read commits between "${base}" and HEAD: ${error.message}`);
  }

  for (const message of log.split("\0")) {
    const match = TRAILER.exec(message);
    if (match) return { repo: match[1] || DEFAULT_REPO, sha: match[2] };
  }
  return null;
}
