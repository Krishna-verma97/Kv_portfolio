// useCommands.js
// Why this file exists:
// This hook is the bridge between "a parsed command" and "the registry". It
// builds the ctx object every command's execute() expects, handles the
// not-found case, and wraps registry execution in one place so useTerminal.js
// doesn't need to know registry internals (findCommand, ctx shape, etc).

import { useCallback } from 'react';
import { terminalCommands, findCommand } from '../data/terminalCommands';
import { formatError } from '../utils/terminalFormatter';
import { fuzzySearchList } from '../utils/fuzzySearch';

export function useCommands({ navigate, setTheme, clear, getHistory }) {
  const run = useCallback(
    (parsed) => {
      const command = findCommand(parsed.name);

      if (!command) {
        const suggestions = fuzzySearchList(parsed.name, terminalCommands, (c) => c.name).slice(0, 3);
        const hint = suggestions.length
          ? ` Did you mean: ${suggestions.map((c) => c.name).join(', ')}?`
          : ' Type "help" to see available commands.';
        return [formatError(`Command not found: "${parsed.name}".${hint}`)];
      }

      const ctx = {
  args: parsed.args,
  flags: parsed.flags,
  raw: parsed.raw,
  setTheme,
  clear,
  getHistory,
};

      return command.execute(ctx, terminalCommands);
    },
    [navigate, setTheme, clear, getHistory],
  );

  return { run, commands: terminalCommands };
}
