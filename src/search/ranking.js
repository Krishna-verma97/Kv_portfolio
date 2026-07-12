import { SEARCH_CONFIG } from "../constants/searchConfig";
import { normalizeText } from "../utils/normalizeText";

const getMatchedTokenCount = (fieldTokens, queryTokens) => {
  const fieldTokenSet = new Set(fieldTokens);
  return queryTokens.filter((token) => fieldTokenSet.has(token)).length;
};

/**
 * Default deterministic ranker. A future AI or hosted-search ranker can replace
 * this function while preserving the search engine's public interface.
 */
export function rankSearchResults(documents, queryTokens, query, config = SEARCH_CONFIG) {
  const normalizedQuery = normalizeText(query);

  return documents
    .map((document) => {
      const score = Object.entries(config.fieldWeights).reduce((total, [field, weight]) => {
        const matches = getMatchedTokenCount(document.searchTokens[field], queryTokens);
        const exactPhraseBonus = normalizedQuery && normalizeText(document[field] ?? "").includes(normalizedQuery)
          ? weight
          : 0;

        return total + (matches * weight) + exactPhraseBonus;
      }, 0);

      return { document, score };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score || first.document.title.localeCompare(second.document.title));
}
