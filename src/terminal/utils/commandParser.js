// commandParser.js
// Why this file exists:
// Turning a raw string like `open   docker-networking --verbose` into a
// structured { name, args, flags, raw } shape is pure text parsing with no
// dependency on React or the command registry. Isolating it keeps useCommands
// focused on *execution*, not string wrangling, and makes the parser trivially
// unit-testable on its own.

/**
 * Splits a raw command line into whitespace-separated tokens, respecting
 * simple quoted segments ("like this") so multi-word args survive.
 */
function tokenize(raw) {
  const tokens = [];
  const regex = /"([^"]*)"|'([^']*)'|(\S+)/g;
  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(raw)) !== null) {
    tokens.push(match[1] ?? match[2] ?? match[3]);
  }
  return tokens;
}

/**
 * Parses a raw input line into a structured command.
 * @param {string} raw - the exact text the user typed
 * @returns {{ name: string, args: string[], flags: Set<string>, raw: string } | null}
 */
export function parseCommand(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const tokens = tokenize(trimmed);
  const [name, ...rest] = tokens;

  const flags = new Set();
  const args = [];
  rest.forEach((token) => {
    if (token.startsWith('--')) {
      flags.add(token.slice(2));
    } else {
      args.push(token);
    }
  });

  return {
    name: name.toLowerCase(),
    args,
    flags,
    raw: trimmed,
  };
}
