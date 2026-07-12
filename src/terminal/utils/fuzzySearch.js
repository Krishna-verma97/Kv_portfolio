// fuzzySearch.js
// Why this file exists:
// Both the `search` command and the live SuggestionBox need "does this query
// loosely match this text" logic. Isolating it here means the matching algorithm
// can be swapped (e.g. for a real fuzzy library) without touching the command
// registry or any component.

/**
 * Scores how well `query` matches `text`.
 * Returns a number >= 0 (higher = better match) or -1 for no match.
 * Strategy: exact substring match scores highest; otherwise falls back to
 * subsequence matching (characters of query appear in order within text).
 */
export function fuzzyScore(query, text) {
  if (!query) return 0;
  const q = query.toLowerCase().trim();
  const t = text.toLowerCase();

  if (!q) return 0;

  if (t.includes(q)) {
    // Prefer matches near the start of the text.
    const index = t.indexOf(q);
    return 100 - index;
  }

  // Subsequence fallback.
  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti += 1) {
    if (t[ti] === q[qi]) qi += 1;
  }
  if (qi === q.length) return 10;

  return -1;
}

/**
 * Filters and ranks a list of items by a text-accessor function.
 */
export function fuzzySearchList(query, items, getText) {
  return items
    .map((item) => ({ item, score: fuzzyScore(query, getText(item)) }))
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}
