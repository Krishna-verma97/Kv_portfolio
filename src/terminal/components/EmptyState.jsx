// EmptyState.jsx
// Why this file exists:
// A dedicated empty state gives first-time users a clear invitation to act
// (per the content guidance: "an empty screen is an invitation to act") without
// TerminalOutput needing a conditional branch mixed into its render loop.

export default function EmptyState() {
  return (
    <div className="py-8 text-center text-gray-500">

      <h2 className="mb-3 text-2xl font-bold text-emerald-400">
        KV Engineering Platform
      </h2>

      <p>Engineering Console</p>

      <p className="mt-5">
        Type <span className="text-emerald-400">help</span> to get started.
      </p>

      <p className="mt-2">
        Press <span className="text-emerald-400">TAB</span> for autocomplete.
      </p>

      <p className="mt-2">
        Use <span className="text-emerald-400">↑ ↓</span> to browse history.
      </p>

    </div>
  );
}
