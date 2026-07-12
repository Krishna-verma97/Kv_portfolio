// autocomplete.js
// Why this file exists:
// Autocomplete needs to match against command names AND aliases, then produce
// a single best "completion" plus a ranked suggestion list. That's matching
// logic, not UI logic — it belongs here, not in useAutocomplete.js (which just
// wires this into state) or SuggestionBox.jsx (which only renders).

/**
 * Returns commands whose name or any alias starts with `partial`.
 */
export function matchCommands(partial, commands) {
  const p = partial.toLowerCase();
  if (!p) return [];

  return commands.filter((cmd) => {
    if (cmd.name.startsWith(p)) return true;
    return (cmd.aliases ?? []).some((alias) => alias.startsWith(p));
  });
}

/**
 * Given a partial input and the matched commands, returns the string to
 * fill the input with on TAB — completes to the longest common prefix if
 * there are multiple matches, or the full name if there's exactly one.
 */
export function getTabCompletion(partial, matches) {
  if (matches.length === 0) return partial;
  if (matches.length === 1) return matches[0].name;

  const names = matches.map((m) => m.name);
  let prefix = names[0];
  names.slice(1).forEach((name) => {
    while (!name.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  });
  return prefix.length > partial.length ? prefix : partial;
}
