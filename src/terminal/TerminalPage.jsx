// TerminalPage.jsx
// Why this file exists:
// This is the ONE component external apps import. It wires useTerminal (state
// + behavior) into TerminalLayout (presentation), and forwards an onNavigate
// prop so a host app can later connect real React Router navigation without
// this module needing to know Router exists. Nothing else in this package
// should be imported directly by consumers — this is the public surface.

import './styles/terminal.css';
import { useTerminal } from './hooks/useTerminal';
import TerminalLayout from './TerminalLayout';

/**
 * @param {object} props
 * @param {(slug: string, type: string) => void} [props.onNavigate] -
 *   Called when a command (open, project, home, etc) wants to navigate.
 *   Wire this to react-router's `navigate()` in the host app.
 * @param {string} [props.height] - CSS height for the terminal window.
 */
export default function TerminalPage({ onNavigate, height }) {
  const {
    output,
    theme,
    setTheme,
    submitCommand,
    historyBrowse,
    resetHistoryCursor,
    commands,
  } = useTerminal({ onNavigate });

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <TerminalLayout
      theme={theme}
      onToggleTheme={toggleTheme}
      output={output}
      commands={commands}
      onSubmit={submitCommand}
      onBrowseHistory={historyBrowse}
      onResetHistory={resetHistoryCursor}
      height={height}
    />
  );
}
