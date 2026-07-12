// useHistory.js
// Why this file exists:
// Command history (the list of past inputs, plus the up/down cursor into that
// list) is state + behavior that's reused wherever arrow-key recall is needed.
// Isolating it from useTerminal.js keeps that hook from growing a second
// responsibility, and makes history independently testable.

import { useCallback, useRef, useState } from 'react';

export function useHistory() {
  const [entries, setEntries] = useState([]);
  // -1 means "not currently browsing history" (i.e. at the live input line).
  const cursorRef = useRef(-1);

  const push = useCallback((command) => {
    setEntries((prev) => [...prev, command]);
    cursorRef.current = -1;
  }, []);

  /**
   * Moves the cursor backward (older) or forward (newer) through history.
   * Returns the command string to show in the input, or null if there's
   * nothing further to browse.
   */
  const browse = useCallback(
    (direction) => {
      if (entries.length === 0) return null;

      if (direction === 'up') {
        const nextIndex =
          cursorRef.current === -1 ? entries.length - 1 : Math.max(0, cursorRef.current - 1);
        cursorRef.current = nextIndex;
        return entries[nextIndex];
      }

      // direction === 'down'
      if (cursorRef.current === -1) return null;
      const nextIndex = cursorRef.current + 1;
      if (nextIndex >= entries.length) {
        cursorRef.current = -1;
        return ''; // back to an empty live line
      }
      cursorRef.current = nextIndex;
      return entries[nextIndex];
    },
    [entries],
  );

  const resetCursor = useCallback(() => {
    cursorRef.current = -1;
  }, []);

  return { entries, push, browse, resetCursor };
}
