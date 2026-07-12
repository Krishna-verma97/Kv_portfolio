// Cursor.jsx
// Why this file exists:
// The blinking cursor is a single visual concern reused in exactly one place
// (TerminalInput) but kept separate so it stays trivial to test/replace (e.g.
// swapping block cursor for a bar cursor) without touching input logic.

export default function Cursor() {
  return <span className="kv-cursor" aria-hidden="true" />;
}
