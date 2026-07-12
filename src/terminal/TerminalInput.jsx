// TerminalInput.jsx
// Why this file exists:
// This is the only component that touches raw keyboard events. It composes
// useAutocomplete (for TAB + live suggestions) and the history browse function
// (for ↑/↓) but owns no business logic itself — every decision about what a
// command does lives in the registry, not here.

import { useEffect, useRef, useState } from 'react';
import Prompt from "./components/Prompt";
import Cursor from './components/Cursor';
import SuggestionBox from './components/SuggestionBox';
import { useAutocomplete } from './hooks/useAutocomplete';

export default function TerminalInput({ commands, onSubmit, onBrowseHistory, onResetHistory }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const { suggestions, completeWithTab } = useAutocomplete(value, commands);

  // Auto-focus on mount, and re-focus on any click within the terminal body.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value);
    setValue('');
    onResetHistory();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      setValue(completeWithTab());
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = onBrowseHistory('up');
      if (prev !== null) setValue(prev);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = onBrowseHistory('down');
      if (next !== null) setValue(next);
    }
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
  e.preventDefault();
  onSubmit("clear");
  return;
}
if (e.ctrlKey && e.key.toLowerCase() === "c") {
  e.preventDefault();
  setValue("");
  return;
}
if (e.key === "Escape") {
  e.preventDefault();
  setValue(value);
  inputRef.current?.blur();
  inputRef.current?.focus();
  return;
}
  };

  const handleSuggestionSelect = (name) => {
    setValue(`${name} `);
    inputRef.current?.focus();
  };

  return (
    <div>
      {suggestions.length > 0 && (
  <SuggestionBox
    suggestions={suggestions}
    onSelect={handleSuggestionSelect}
  />
)}
      <div
        // className="flex w-full items-center gap-2 rounded-xl px-4 py-3"
        className="
flex
w-full
items-center
gap-2

rounded-xl

px-3
py-2.5

sm:px-4
sm:py-3
"
        style={{
          background: 'var(--term-panel)',
          border: `1px solid ${focused ? "var(--term-link)" : "var(--term-border)"}`,
boxShadow: focused
  ? "0 0 0 2px rgba(59,130,246,.15)"
  : "none",
        }}
        onClick={() => inputRef.current?.focus()}
      >
        <Prompt compact />
        <div className="relative flex-1">
          <input
            ref={inputRef}
            value={value}
            placeholder="Type a command..."
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
            // className="w-full bg-transparent text-[15px] font-mono outline-none placeholder:text-gray-500"
            className="
w-full
bg-transparent

text-[14px]
sm:text-[15px]

font-mono
outline-none
placeholder:text-gray-500
"
            style={{
  color: "var(--term-text-bright)",
  caretColor: "var(--term-prompt)",
}}
          />
        </div>
        {/* {focused && <Cursor />} */}
      </div>
    </div>
  );
}
