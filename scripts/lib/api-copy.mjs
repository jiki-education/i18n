// Coverage over the translated copy that lives in the api repo.
//
// Two bodies of user-facing copy are authored AND translated in the Rails api
// repo rather than here: the level milestone emails (seed JSON) and the mailer /
// message YAML. Neither has been migrated to this repo yet. That is a known gap
// awaiting a migration, not the design, and until it closes "is this language
// complete?" cannot be answered from `locales/` alone. So coverage reads them
// across the repo boundary and reports them as two more rows.
//
// REPORTING ONLY, and only from coverage.mjs. validate, publish, stub and
// translate own `locales/` and know nothing about the api; the api's own test
// suite is what guards its seeds and its locale parity. Nothing here writes
// anything, and nothing here can fail a run: a missing or unreadable api
// checkout produces a row that says so, never an exit code.
//
// The two content types are defined in the translator repo:
// `content-types/api-emails.md` and `content-types/level-milestones.md`.

import { execFileSync } from "node:child_process";
import { SENTINEL } from "./constants.mjs";
import { englishRepo, sourceRepoSpec } from "./english.mjs";

/** The rows this module contributes to coverage, in report order. */
export const API_ROW_IDS = ["api-emails", "api-level-milestones"];

/** Paths inside the api repo. One place knows the layout, as everywhere else here. */
const CURRICULUM = "db/seeds/curriculum.json";
const LEVEL_TRANSLATIONS = "db/seeds/level_translations";
const LOCALE_DIRS = ["config/locales", "config/locales/mailers"];
const I18N_INITIALIZER = "config/initializers/i18n.rb";

/**
 * The refs that mean "api main", in preference order.
 *
 * The api repo is read at main and never at whatever the working tree is on. A
 * local api checkout is usually on a feature branch, and a feature branch is a
 * proposal: reading it reports copy that does not exist yet, or misses copy that
 * does. `origin/main` first because a local `main` can be behind it; both are
 * present in the checkouts this resolves (a sibling clone, `.source/api` from
 * source-checkout.mjs, or an actions/checkout step). A checkout with neither ref
 * is reported as unreadable rather than read from its working tree.
 */
const MAIN_REFS = ["origin/main", "main"];

// ------------------------------------------------------------ reading main --

function git(dir, args) {
  return execFileSync("git", args, { cwd: dir, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
}

/**
 * The api checkout and the ref that is main in it, or a reason there is none.
 *
 * Resolution is the ordinary one (`JIKI_API_REPO`, `.source/api`, a sibling
 * checkout), except that failing to find one is a normal state here: this repo
 * translates nothing in the api, so plenty of clones have no api beside them.
 */
let resolved;
export function apiMain() {
  if (resolved) return resolved;

  const dir = englishRepo("api", undefined, { optional: true });
  if (!dir) {
    const { env, sibling } = sourceRepoSpec("api");
    resolved = { unavailable: `no api checkout (looked at ${env}, .source/api, ../${sibling})` };
    return resolved;
  }

  for (const ref of MAIN_REFS) {
    try {
      const sha = git(dir, ["rev-parse", "--verify", `${ref}^{commit}`]).trim();
      resolved = { dir, ref, sha };
      return resolved;
    } catch {
      // Try the next spelling of main.
    }
  }

  resolved = { unavailable: `${dir} has no ${MAIN_REFS.join(" or ")} ref, and api copy is only ever read at main` };
  return resolved;
}

const blobs = new Map();

/** One file's contents at api main, or null when main does not have it. */
function readAtMain(api, file) {
  const key = `${api.sha}:${file}`;
  if (blobs.has(key)) return blobs.get(key);
  let content = null;
  try {
    content = git(api.dir, ["show", `${api.sha}:${file}`]);
  } catch {
    content = null;
  }
  blobs.set(key, content);
  return content;
}

const listings = new Map();

/** The file names directly inside one directory at api main. */
function listAtMain(api, dir) {
  const key = `${api.sha}:${dir}`;
  if (listings.has(key)) return listings.get(key);

  let names = [];
  try {
    names = git(api.dir, ["ls-tree", "--name-only", api.sha, `${dir}/`])
      .split("\n")
      .filter(Boolean)
      .map((entry) => entry.slice(dir.length + 1))
      .filter((name) => name && !name.includes("/"));
  } catch {
    names = [];
  }
  listings.set(key, names);
  return names;
}

// ------------------------------------------------------ the locale spelling --

/**
 * Rails' spelling of a locale, and whether Rails knows it at all.
 *
 * Rails names its own locales in `config/initializers/i18n.rb`, so that list is
 * read rather than guessed: a locale directory here matches a Rails locale when
 * the two agree case-insensitively with `_` and `-` treated alike, and the api
 * file is then named with RAILS' spelling. `pt-pt` here and `pt-PT` there is one
 * locale; today the two lists happen to agree exactly, and this is what keeps
 * that a fact rather than an assumption.
 *
 * A locale Rails has never heard of (`fi`, `he`, `th` at the time of writing) is
 * still reported, as missing, under its own spelling: there is English copy and
 * no translation of it, which is the truth. The row carries a note saying the
 * locale is not in Rails' list, because that is what has to change first.
 */
export function railsLocale(locale, known) {
  const normalise = (value) => value.toLowerCase().replace(/_/g, "-");
  const match = known.find((candidate) => normalise(candidate) === normalise(locale));
  return { locale: match ?? locale, knownToRails: Boolean(match) };
}

/** Every locale Rails is configured for, production and work-in-progress alike. */
export function railsKnownLocales(initializer) {
  if (!initializer) return [];
  return ["PRODUCTION_LOCALES", "WIP_LOCALES"].flatMap((constant) => {
    const match = new RegExp(`${constant}\\s*=\\s*%w\\[([^\\]]*)\\]`).exec(initializer);
    return match ? match[1].split(/\s+/).filter(Boolean) : [];
  });
}

// -------------------------------------------------------------- the YAML ----

/**
 * Every leaf key of a Rails locale file, as `dotted.path` -> value, with the
 * top-level locale key stripped so two locales' key sets compare directly.
 *
 * Dependency-free, like the frontmatter reader in files.mjs and for the same
 * reason: `scripts/` runs on a bare node. It handles exactly what these files
 * are, which is nested maps of scalars and `|` block scalars. It is a key
 * counter, not a YAML implementation: a construct it does not know (a sequence,
 * an anchor) is skipped rather than guessed at, so it can undercount a file that
 * grows one and can never invent a key that is not there.
 */
export function localeFileLeaves(text) {
  const leaves = new Map();
  if (!text) return leaves;

  const lines = text.split("\n");
  const stack = [];
  let root = null;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    i += 1;
    if (!line.trim() || /^\s*#/.test(line)) continue;

    const match = /^(\s*)"?([A-Za-z0-9_.:\-]+?)"?\s*:(\s.*|)$/.exec(line);
    if (!match) continue;

    const indent = match[1].length;
    const key = match[2];
    const rest = match[3].trim();

    while (stack.length > 0 && stack[stack.length - 1].indent >= indent) stack.pop();
    if (indent === 0) root ??= key;

    const dotted = [...stack.map((entry) => entry.key), key].join(".");

    if (rest === "" || rest.startsWith("#")) {
      stack.push({ indent, key });
      continue;
    }

    if (/^[|>][-+]?\d*$/.test(rest)) {
      const body = [];
      while (i < lines.length && (lines[i].trim() === "" || lines[i].search(/\S/) > indent)) {
        body.push(lines[i]);
        i += 1;
      }
      leaves.set(dotted, body.join("\n").trim());
      continue;
    }

    leaves.set(dotted, unquote(rest));
  }

  const prefix = root ? `${root}.` : "";
  return new Map([...leaves].map(([key, value]) => [key.startsWith(prefix) ? key.slice(prefix.length) : key, value]));
}

function unquote(value) {
  const match = /^(["'])([\s\S]*)\1$/.exec(value);
  return match ? match[2] : value;
}

/** Translated, by the only test coverage makes anywhere: present, non-empty, not the sentinel. */
const isDone = (value) => typeof value === "string" && value.trim() !== "" && value.trim() !== SENTINEL;

// ------------------------------------------------------------- the two rows --

function emptyRow(type, unit, note) {
  return { type, unit, total: 0, done: 0, stale: 0, missing: 0, inapplicable: 0, note };
}

/**
 * Mailer and message YAML: `<name>.en.yml` -> `<name>.<rails-locale>.yml`, in
 * `config/locales/` and `config/locales/mailers/`, counted in keys.
 *
 * The corpus is the English files, exactly as it is for every other row: a
 * translated file with no English counterpart (`activerecord.hu.yml`, whose
 * English ships with rails-i18n) has no denominator and is not counted. Bare
 * `en.yml` is skipped too: it is Rails' own default file, it does not follow the
 * `<name>.en.yml` convention the translated files use, and so it names no target.
 */
function emailsRow(api, rails) {
  let total = 0;
  let done = 0;
  let missing = 0;

  for (const dir of LOCALE_DIRS) {
    const names = listAtMain(api, dir);
    for (const name of names) {
      if (!name.endsWith(".en.yml")) continue;
      const targetName = name.replace(/\.en\.yml$/, `.${rails.locale}.yml`);
      const english = localeFileLeaves(readAtMain(api, `${dir}/${name}`));
      const target = names.includes(targetName) ? localeFileLeaves(readAtMain(api, `${dir}/${targetName}`)) : new Map();

      total += english.size;
      for (const key of english.keys()) {
        if (isDone(target.get(key))) done += 1;
        else missing += 1;
      }
    }
  }

  return { type: "api-emails", unit: "keys", total, done, stale: 0, missing, inapplicable: 0 };
}

/**
 * Level milestone emails: `curriculum.json`'s levels -> one entry per level in
 * `level_translations/<rails-locale>.json`, counted in emails.
 *
 * One level is one email and both of its fields have to be there, so a level
 * with a subject and no body is not done. English is the level list itself,
 * which is why a locale file holding an entry no level matches adds nothing here
 * (it is a hard error in the api's own seed loader, which is where it belongs).
 *
 * An entry identifies its level by `level_uuid` or by `slug`. Both are read
 * because the api uses both: matching on either is the same question asked twice
 * and costs nothing, and coverage reporting a locale as empty because the api
 * changed which identifier it writes would be a false reading.
 */
function milestonesRow(api, rails) {
  const curriculum = readAtMain(api, CURRICULUM);
  if (!curriculum) return emptyRow("api-level-milestones", "emails", `${CURRICULUM} is not in the api checkout at main`);

  let levels;
  try {
    levels = JSON.parse(curriculum).levels ?? [];
  } catch {
    return emptyRow("api-level-milestones", "emails", `${CURRICULUM} at api main is not valid JSON`);
  }

  const english = levels.filter((level) => isDone(level.milestone_email_subject) && isDone(level.milestone_email_content_markdown));

  const file = `${rails.locale}.json`;
  let entries = [];
  try {
    entries = listAtMain(api, LEVEL_TRANSLATIONS).includes(file) ? JSON.parse(readAtMain(api, `${LEVEL_TRANSLATIONS}/${file}`) ?? "[]") : [];
  } catch {
    entries = [];
  }
  const byId = new Map();
  for (const entry of Array.isArray(entries) ? entries : []) {
    for (const id of [entry?.level_uuid, entry?.slug]) if (id) byId.set(id, entry);
  }

  let done = 0;
  for (const level of english) {
    const entry = byId.get(level.uuid) ?? byId.get(level.slug);
    if (entry && isDone(entry.milestone_email_subject) && isDone(entry.milestone_email_content_markdown)) done += 1;
  }

  return {
    type: "api-level-milestones",
    unit: "emails",
    total: english.length,
    done,
    stale: 0,
    missing: english.length - done,
    inapplicable: 0
  };
}

/**
 * The api rows for one locale.
 *
 * Never throws and never exits. Every failure mode (no checkout, no main ref, a
 * file the checkout does not have) becomes a row with a note and a total of 0,
 * which reads as "not measured" rather than as either done or missing.
 */
export function apiCoverageFor(locale, rowIds = API_ROW_IDS) {
  const api = apiMain();
  if (api.unavailable) return rowIds.map((id) => emptyRow(id, id === "api-emails" ? "keys" : "emails", api.unavailable));

  const known = railsKnownLocales(readAtMain(api, I18N_INITIALIZER));
  const rails = railsLocale(locale, known);
  const note = rails.knownToRails ? undefined : `"${locale}" is not in Rails' locale list (${I18N_INITIALIZER}), so the api cannot serve it yet`;

  const rows = { "api-emails": () => emailsRow(api, rails), "api-level-milestones": () => milestonesRow(api, rails) };
  return rowIds.map((id) => ({ ...rows[id](), note: note ?? undefined }));
}

/** One line naming where the api rows were read from, for the report header. */
export function apiSourceLine() {
  const api = apiMain();
  return api.unavailable ? `api: ${api.unavailable}` : `api: ${api.dir} at ${api.ref} (${api.sha.slice(0, 8)})`;
}
