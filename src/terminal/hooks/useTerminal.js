// useTerminal.js
// Why this file exists:
// This is the single hook TerminalPage.jsx calls. It owns the output buffer
// and theme state, and composes the smaller hooks (useHistory, useCommands)
// plus utils/commandParser into one submit() function. Keeping this
// orchestration in a hook (not in TerminalPage.jsx itself) means the terminal's
// behavior is fully usable/testable without ever mounting a component.

import { useCallback, useState } from 'react';
import { parseCommand } from '../utils/commandParser';
import { formatEcho, formatPlain } from '../utils/terminalFormatter';
import { useHistory } from './useHistory';
import { useCommands } from './useCommands';

// const WELCOME_BLOCK = formatPlain(
//   'Engineering Console ready. Type "help" to see available commands, or "banner" for the logo.',
// );

const WELCOME_BLOCK = formatPlain(`
══════════════════════════════════════════════

Krishna CLI v1.0

Welcome, Krishna 👋

A command-line interface for exploring
this platform.

Available sections

• Dashboard
• Projects
• Knowledge Base
• Blog
• Toolbox
• Timeline
• Contact

Type "help" to view all available commands.

Tip:
Use TAB for autocomplete
Use ↑ ↓ for command history

══════════════════════════════════════════════
`);

/**
 * @param {object} options
 * @param {(slug: string, type: string) => void} [options.onNavigate] -
 *   Called when a command wants to navigate (e.g. `open docker-networking`).
 *   Left as a no-op by default so this module works fully standalone before
 *   real routing is wired in.
 */
export function useTerminal({ onNavigate } = {}) {
  const [output, setOutput] = useState([WELCOME_BLOCK]);
  const [theme, setTheme] = useState('dark');
  const history = useHistory();

  // const navigate = useCallback(
  //   (slug, type) => {
  //     if (onNavigate) onNavigate(slug, type);
  //   },
  //   [onNavigate],
  // );

  const clear = useCallback(() => setOutput([]), []);

  const { run, commands } = useCommands({
  setTheme,
  clear,
  getHistory: () => history.entries,
});

  const submitCommand = useCallback(
    (raw) => {
      const parsed = parseCommand(raw);
      if (!parsed) return;

      history.push(parsed.raw);
      const echoBlock = formatEcho(parsed.raw);
      const result = run(parsed);

      if (result === 'CLEAR') {
        setOutput([]);
        return;
      }

      setOutput((prev) => [...prev, echoBlock, ...result]);
    },
    [history, run],
  );

  return {
    output,
    theme,
    setTheme,
    submitCommand,
    historyBrowse: history.browse,
    resetHistoryCursor: history.resetCursor,
    commands,
  };
}
