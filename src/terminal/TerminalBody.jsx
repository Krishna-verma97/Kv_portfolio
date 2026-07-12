// TerminalBody.jsx
// Why this file exists:
// Scroll management (auto-scroll to bottom on new output) is a layout concern
// distinct from both "what output looks like" (TerminalOutput) and "how input
// is captured" (TerminalInput). This component owns the scroll container ref
// and the effect that keeps it pinned to the latest line.

import { useEffect, useRef } from 'react';
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';
import EmptyState from "./components/EmptyState";

export default function TerminalBody({
  output,
  commands,
  onSubmit,
  onBrowseHistory,
  onResetHistory,
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Smooth scroll to bottom whenever new output is appended.
    // el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    el.scrollTo({
  top: el.scrollHeight,
  behavior: output.length < 3 ? "auto" : "smooth",
});
  }, [output]);

  return (
    <div className="flex h-full flex-col">
      <div
        ref={scrollRef}
        // className="kv-terminal-body flex-1 overflow-y-auto px-3 py-3"
        // className="kv-terminal-body flex-1 overflow-y-auto px-8 pt-8 pb-6"
        className="
kv-terminal-body
flex-1
overflow-y-auto

px-4
pt-4
pb-5

sm:px-5
sm:pt-5

md:px-8
md:pt-8
md:pb-6
"
        style={{ background: 'var(--term-bg)' }}
      >
        {/* <TerminalOutput blocks={output} /> */}
        {output.length === 0 ? (
  <EmptyState />
) : (
  <TerminalOutput blocks={output} />
)}
      </div>

    <div
className="
mx-3
mt-3
mb-4

sm:mx-4

md:mx-5
md:mb-6
"
  style={{
    borderTop: "1px solid var(--term-border)",
    background: "transparent",
    flexShrink: 0,
  }}
>
        <TerminalInput
          commands={commands}
          onSubmit={onSubmit}
          onBrowseHistory={onBrowseHistory}
          onResetHistory={onResetHistory}
        />
      </div>
    </div>
  );
}
