// Prompt.jsx
// Why this file exists:
// The "user@kv-platform:~$" prompt string is shown in two places — before the
// live input, and before each echoed past command. Isolating it here means
// changing the prompt format (username, path, symbol) happens in one file.

// export default function Prompt() {
//   return (
//     <span className="select-none whitespace-nowrap font-mono">
//       <span style={{ color: "var(--term-info)" }}>krishna</span>
//       <span style={{ color: "var(--term-text-dim)" }}>@</span>
//       <span style={{ color: "var(--term-accent)" }}>kv-platform</span>
//       <span style={{ color: "var(--term-text-dim)" }}>:</span>
//       <span style={{ color: "var(--term-link)" }}>~</span>
//       <span
//         style={{
//           color: "var(--term-prompt)",
//           fontWeight: 700,
//           marginLeft: "6px",
//         }}
//       >
//         $
//       </span>
//     </span>
//   );
// }

// Prompt.jsx
// Why this file exists:
// The "user@kv-platform:~$" prompt string is shown in two places — before the
// live input, and before each echoed past command. Isolating it here means
// changing the prompt format (username, path, symbol) happens in one file.

export default function Prompt({ compact = false }) {
  return (
    <span className="select-none whitespace-nowrap font-mono">
      <span className={compact ? "hidden sm:inline" : ""}>
        <span style={{ color: "var(--term-info)" }}>krishna</span>
        <span style={{ color: "var(--term-text-dim)" }}>@</span>
        <span style={{ color: "var(--term-accent)" }}>kv-platform</span>
        <span style={{ color: "var(--term-text-dim)" }}>:</span>
        <span style={{ color: "var(--term-link)" }}>~</span>
      </span>
      <span
        className={compact ? "ml-0 sm:ml-1.5" : "ml-1.5"}
        style={{ color: "var(--term-prompt)", fontWeight: 700 }}
      >
        $
      </span>
    </span>
  );
}