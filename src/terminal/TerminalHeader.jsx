// TerminalHeader.jsx
// Why this file exists:
// The header (window chrome) is a purely presentational strip that never
// touches command state. Keeping it separate from TerminalBody means the
// "chrome" of the console can be restyled or replaced (e.g. real window
// controls in an Electron shell) without touching output/input logic.

export default function TerminalHeader({
  title = "KV Engineering Console",
  theme,
  onToggleTheme,
}) {
  return (
    <div
      // className="relative flex h-12 items-center justify-between px-5"
      // Was: relative + flex + justify-between + an absolutely-centered title.
      // The title had no width limit, so on narrow screens it wrapped to a
      // second line and sat on top of the traffic-light dots / theme button.
      // A 3-column grid (auto / 1fr / auto) reserves real space for the
      // title column, so it can never overlap its neighbors — it just
      // truncates with an ellipsis instead.
      className="
relative
grid
grid-cols-[auto_1fr_auto]

h-11
sm:h-12

items-center

gap-2
px-3
sm:px-5
"
      style={{
        background: "var(--term-header)",
        borderBottom: "1px solid var(--term-border)",
        boxShadow:"inset 0 -1px 0 rgba(255,255,255,.06)",
      }}
    >
      {/* macOS Buttons */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56] sm:h-3.5 sm:w-3.5" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e] sm:h-3.5 sm:w-3.5" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f] sm:h-3.5 sm:w-3.5" />
      </div>

      {/* Center Title */}
      <div className="flex min-w-0 justify-center px-1">
        <span
          // className="text-sm font-semibold tracking-wide"
          className="
truncate
text-xs
sm:text-sm

font-semibold
tracking-wide
"
          style={{ color: "var(--term-text-dim)" }}
        >
          {title}
        </span>
      </div>

      {/* Theme */}
      <button
        type="button"
        onClick={onToggleTheme}
        // className="rounded-lg border px-3 py-1.5 text-sm transition hover:opacity-80"
        className="
shrink-0
whitespace-nowrap
rounded-lg
border

px-2
py-1
text-xs

sm:px-3
sm:py-1.5
sm:text-sm

transition
hover:opacity-80
"
        style={{
          borderColor: "var(--term-border)",
          color: "var(--term-text-dim)",
        }}
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}