import { normalizeText } from "../utils/normalizeText";

/**
 * Tokenizes text for local indexing. `stopWords` is intentionally configurable
 * so language-aware filtering can be introduced without changing callers.
 */
export function tokenize(value, { stopWords = [] } = {}) {
  const ignoredTokens = new Set(stopWords.map(normalizeText));
  const normalizedValue = normalizeText(value);

  if (!normalizedValue) return [];

  return normalizedValue.split(" ").filter((token) => !ignoredTokens.has(token));
}

export const uniqueTokens = (tokens) => [...new Set(tokens)];
