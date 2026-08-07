// Minimal argv parsing shared by every script: `--flag`, `--key=value`, and
// bare positionals. Deliberately tiny; nothing here needs a CLI framework.

export function parseArgs(argv) {
  const flags = {};
  const positional = [];

  for (const arg of argv) {
    if (arg.startsWith("--")) {
      const [key, ...rest] = arg.slice(2).split("=");
      flags[key] = rest.length > 0 ? rest.join("=") : true;
    } else {
      positional.push(arg);
    }
  }

  return { flags, positional };
}
