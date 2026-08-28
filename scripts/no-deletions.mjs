#!/usr/bin/env node
//
// no-deletions — refuse a change to locales/ that removes a file or a key.
//
// Usage:
//   node scripts/no-deletions.mjs [--base=<ref>] [--head=<ref>]
//
// Defaults: base `origin/main`, head `HEAD`. Both are git refs; the working tree
// is never read, so run it after committing (or against the branch CI sees).
//
// ## Why deletions are refused
//
// Translation runs AHEAD of English merging: a front-end PR opens an issue, the
// pass translates that PR's English, and the PR merges only once every
// production locale is complete for its tree. The front-end checks that by
// running this repo's publisher against the PR's own checkout, and it runs the
// same check on main before every deploy.
//
// That only works if this repo is a SUPERSET of the English on front-end main
// AND on every open front-end PR at once. A pass that rewrites a catalog to
// match a PR, dropping the keys the PR renamed away, makes main incomplete the
// moment it lands: every other PR goes red and production cannot deploy until
// that one PR merges. That happened, with the lunchbox rewrite. Excess is never
// an error here (a key English no longer defines is simply unused), so the
// cheap rule that keeps everything green is: add and update, never delete.
//
// ## The escape hatch
//
// Some removals are right: a locale being retired, a file created at a wrong
// path, a key that was never English. Put an `Allow-Deletions: <why>` trailer on
// a commit in the range and the removals are listed but do not fail. The reason
// is in the commit for whoever reads the history.

import path from "node:path";
import { execFileSync } from "node:child_process";
import { REPO_ROOT } from "./lib/constants.mjs";

function git(args, cwd = REPO_ROOT) {
  return execFileSync("git", args, { cwd, encoding: "utf8" });
}

/** Dotted paths of every leaf in a catalog, so nested removals are named exactly. */
export function flattenKeys(value, prefix = "") {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    return [prefix];
  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

/** Keys present in `base` that `head` no longer holds. */
export function missingKeys(base, head) {
  const kept = new Set(flattenKeys(head));
  return flattenKeys(base).filter((key) => !kept.has(key));
}

function readJsonAt(ref, file, cwd) {
  try {
    return JSON.parse(git(["show", `${ref}:${file}`], cwd));
  } catch {
    return null;
  }
}

/**
 * Every removal between two refs under locales/: deleted files, the old path of
 * a rename, and keys dropped from a catalog that still exists. Stamp files
 * (`*.meta.json`) are skipped: they are regenerated, not authored.
 */
export function findDeletions(base, head, { cwd = REPO_ROOT } = {}) {
  const deletions = [];
  const status = git(
    ["diff", "--name-status", "-M", base, head, "--", "locales/"],
    cwd,
  );

  for (const line of status.split("\n").filter(Boolean)) {
    const [code, ...paths] = line.split("\t");
    const kind = code[0];
    const file = paths[0];

    if (kind === "D") {
      deletions.push({ file, what: "file removed" });
    } else if (kind === "R") {
      deletions.push({ file, what: `file moved to ${paths[1]}` });
    } else if (
      kind === "M" &&
      file.endsWith(".json") &&
      !file.endsWith(".meta.json")
    ) {
      const before = readJsonAt(base, file, cwd);
      const after = readJsonAt(head, file, cwd);
      if (before === null || after === null) continue;
      for (const key of missingKeys(before, after))
        deletions.push({ file, what: `key removed: ${key}` });
    }
  }
  return deletions;
}

function allowedBy(base, head) {
  const trailers = git([
    "log",
    "--format=%(trailers:key=Allow-Deletions,valueonly)",
    `${base}..${head}`,
  ]);
  return trailers
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === new URL(import.meta.url).pathname;
if (isMain) {
  const args = Object.fromEntries(
    process.argv.slice(2).map((arg) => {
      const [key, value] = arg.replace(/^--/, "").split("=");
      return [key, value ?? true];
    }),
  );
  const base = args.base ?? "origin/main";
  const head = args.head ?? "HEAD";

  const deletions = findDeletions(base, head);
  if (deletions.length === 0) {
    console.log(
      `no-deletions: nothing removed under locales/ between ${base} and ${head}.`,
    );
    process.exit(0);
  }

  const allowed = allowedBy(base, head);
  console.log(
    `no-deletions: ${deletions.length} removal(s) under locales/ between ${base} and ${head}:`,
  );
  for (const { file, what } of deletions) console.log(`  ${file}: ${what}`);

  if (allowed.length > 0) {
    console.log(`\nAllowed by Allow-Deletions trailer: ${allowed.join("; ")}`);
    process.exit(0);
  }

  console.error(
    `\nTranslation adds and updates; it never deletes. This repo has to hold every key front-end\n` +
      `main defines AND every key each open front-end PR defines, because the front-end checks a\n` +
      `PR (and main, before deploying) against what is here. A key English no longer uses is\n` +
      `harmless; a key it still uses, removed here, blocks every other PR and the deploy.\n\n` +
      `Put the file or key back. If the removal is right (a retired locale, a wrong path, a key that\n` +
      `was never English), say why in an \`Allow-Deletions: <reason>\` trailer on the commit.\n`,
  );
  process.exit(1);
}
