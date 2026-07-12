// TerminalLayout.jsx
// Why this file exists:
// Separates "the window frame" (fixed height, rounded corners, header-on-top-
// of-body composition) from TerminalPage.jsx, which is responsible for wiring
// state (via useTerminal) into that frame. This split means the frame itself
// could be reused for a different kind of console with different state.

import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

export default function TerminalLayout({
  theme,
  onToggleTheme,
  output,
  commands,
  onSubmit,
  onBrowseHistory,
  onResetHistory,
  // height = "36rem",
  // No default here anymore. If a `height` isn't passed in, we don't set an
  // inline height style at all — that lets the responsive height rules on
  // .kv-terminal (in terminal.css, one value per breakpoint) take over.
  // Inline styles always beat CSS/media queries, so leaving this undefined
  // is what makes the per-screen sizing possible.
  height,
}) {
  return (
    <div
  className="
    kv-terminal
    mx-auto
    flex
    w-full
    max-w-6xl
    flex-col
    rounded-2xl
    border
    shadow-2xl

    sm:w-[96%]
    md:w-[94%]
    lg:w-full
  "
      style={{
        ...(height ? { height } : {}),
        borderColor: "var(--term-border)",
      }}
      data-theme={theme}
    >
      <TerminalHeader
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <TerminalBody
        output={output}
        commands={commands}
        onSubmit={onSubmit}
        onBrowseHistory={onBrowseHistory}
        onResetHistory={onResetHistory}
      />
    </div>
  );
}

