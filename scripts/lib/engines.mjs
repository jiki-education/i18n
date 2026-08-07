// Provider adapters for scripts/translate.mjs.
//
// Modelled on the translator repo's scripts/lib/engines.js and kept to the same
// contract, so a language can move between the two without either side caring:
//
//   call({ model, apiKey, system, prompt, json }) -> { text, usage }
//   usage = { input, cacheHit, cacheMiss, thinking, output, cost }
//
// The provider and model are NEVER hardcoded at a call site. They come from
// engines.json (repo default) or a `translationEngine` block on the locale, so
// moving a language to another provider or a newer model is a config edit, not a
// code change. Adding a provider is one entry in ENGINES and nothing else.
//
// API keys are read here and nowhere else. They are returned to the caller,
// never logged, and never written to any file.

import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, fail } from "./constants.mjs";

const MAX_ATTEMPTS = 5;
const BASE_BACKOFF_MS = 4000;
const REQUEST_TIMEOUT_MS = 900_000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Read one key from .env at the repo root. Returned, never logged. */
function envKey(name, engine) {
  if (process.env[name]) return process.env[name];
  const file = path.join(REPO_ROOT, ".env");
  if (!fs.existsSync(file)) fail(`${name} is not set and there is no .env at the repo root; the ${engine} engine needs it`);
  const match = new RegExp(`^${name}\\s*=\\s*(.*)$`, "m").exec(fs.readFileSync(file, "utf8"));
  if (!match) fail(`${name} is not set in .env, and the ${engine} engine needs it`);
  const value = match[1].trim().replace(/^["']|["']$/g, "");
  if (!value) fail(`${name} in .env is empty`);
  return value;
}

async function postJson(url, { headers, body, label }) {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
      });
    } catch (error) {
      if (attempt === MAX_ATTEMPTS) fail(`${label} request failed: ${error.message}`);
      await sleep(BASE_BACKOFF_MS * 2 ** (attempt - 1));
      continue;
    }

    if (response.ok) return response.json();

    // A 4xx that is not rate limiting will not get better by being sent again.
    if (response.status !== 429 && response.status < 500) {
      fail(`${label} returned HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
    }
    if (attempt === MAX_ATTEMPTS) fail(`${label} returned HTTP ${response.status} after ${MAX_ATTEMPTS} attempts`);
    await sleep(BASE_BACKOFF_MS * 2 ** (attempt - 1));
  }
}

const anthropic = {
  name: "anthropic",
  keyName: "ANTHROPIC_API_KEY",
  apiKey: () => envKey("ANTHROPIC_API_KEY", "anthropic"),
  usdPerInputToken: 5 / 1_000_000,
  usdPerOutputToken: 25 / 1_000_000,

  async call({ model, apiKey, system, prompt, json = false }) {
    const payload = await postJson("https://api.anthropic.com/v1/messages", {
      label: "anthropic",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
      body: {
        model,
        max_tokens: 16000,
        temperature: 0.3,
        // The invariant governance block is cached: it is byte-identical across
        // every locale and every item of a type, and a cache hit is billed at a
        // fraction of a miss. See "Prompt order is load-bearing" in translate.mjs.
        system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
        messages: [{ role: "user", content: json ? `${prompt}\n\nRespond with JSON only.` : prompt }]
      }
    });

    const text = (payload.content || [])
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");
    const usage = payload.usage || {};
    const input = usage.input_tokens || 0;
    const output = usage.output_tokens || 0;
    return {
      text,
      usage: {
        input,
        cacheHit: usage.cache_read_input_tokens || 0,
        cacheMiss: usage.cache_creation_input_tokens || 0,
        thinking: 0,
        output,
        cost: input * anthropic.usdPerInputToken + output * anthropic.usdPerOutputToken
      }
    };
  }
};

const openaiCompatible = (name, { url, keyName, usdIn, usdOut }) => ({
  name,
  keyName,
  apiKey: () => envKey(keyName, name),
  usdPerInputToken: usdIn,
  usdPerOutputToken: usdOut,

  async call({ model, apiKey, system, prompt, json = false }) {
    const payload = await postJson(url, {
      label: name,
      headers: { Authorization: `Bearer ${apiKey}` },
      body: {
        model,
        temperature: 0.3,
        ...(json ? { response_format: { type: "json_object" } } : {}),
        messages: [
          { role: "system", content: system },
          { role: "user", content: prompt }
        ]
      }
    });

    const usage = payload.usage || {};
    const input = usage.prompt_tokens || 0;
    const output = usage.completion_tokens || 0;
    return {
      text: payload.choices?.[0]?.message?.content ?? "",
      usage: {
        input,
        cacheHit: usage.prompt_tokens_details?.cached_tokens || 0,
        cacheMiss: input - (usage.prompt_tokens_details?.cached_tokens || 0),
        thinking: usage.completion_tokens_details?.reasoning_tokens || 0,
        output,
        cost: input * usdIn + output * usdOut
      }
    };
  }
});

export const ENGINES = {
  anthropic,
  openai: openaiCompatible("openai", {
    url: "https://api.openai.com/v1/chat/completions",
    keyName: "OPENAI_API_KEY",
    usdIn: 2.5 / 1_000_000,
    usdOut: 10 / 1_000_000
  }),
  deepseek: openaiCompatible("deepseek", {
    url: "https://api.deepseek.com/chat/completions",
    keyName: "DEEPSEEK_API_KEY",
    usdIn: 0.28 / 1_000_000,
    usdOut: 0.42 / 1_000_000
  })
};

/**
 * Resolve which engine and model to use, most specific first:
 * CLI flags, then the locale's own block, then the repo default in engines.json.
 */
export function resolveEngine({ engine, model, locale } = {}) {
  const config = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "engines.json"), "utf8"));
  const perLocale = config.byLocale?.[locale] || {};
  const chosen = engine || perLocale.engine || config.default.engine;
  const chosenModel = model || perLocale.model || config.default.model;

  const adapter = ENGINES[chosen];
  if (!adapter) fail(`unknown engine "${chosen}". Known: ${Object.keys(ENGINES).join(", ")}`);
  return { adapter, model: chosenModel };
}
