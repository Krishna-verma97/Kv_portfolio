// useAutocomplete.js
// Why this file exists:
// The input needs two related-but-distinct behaviors: a live suggestion list
// (as-you-type) and a TAB-triggered completion. Both depend on the same
// matching primitives in utils/autocomplete.js, so this hook is the single
// place that turns "current input value" into "what should the UI offer".

import { useMemo } from 'react';
import { matchCommands, getTabCompletion } from '../utils/autocomplete';

export function useAutocomplete(inputValue, commands) {
  const firstToken = inputValue.trim().split(/\s+/)[0] ?? '';

  const suggestions = useMemo(() => {
    if (!firstToken || inputValue.includes(' ')) return [];
    return matchCommands(firstToken, commands).slice(0, 6);
  }, [firstToken, inputValue, commands]);

  const completeWithTab = () => {
    if (!firstToken || suggestions.length === 0) return inputValue;
    const completion = getTabCompletion(firstToken, suggestions);
    return inputValue.replace(firstToken, completion);
  };

  return { suggestions, completeWithTab };
}
