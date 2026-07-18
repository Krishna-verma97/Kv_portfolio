import { SEARCH_CONFIG } from "../constants/searchConfig";
import { rankSearchResults } from "./ranking";
import { tokenize } from "./tokenizer";

const toSearchResult = ({ document, score }) => {
  const { searchTokens, ...article } = document;
  return { ...article, score };
};
 
/**
 * Local engine adapter. Its `search` contract can be mirrored by Algolia,
 * Meilisearch, Elastic, or vector-search adapters without changing UI code.
 */
export function createSearchEngine(index, { config = SEARCH_CONFIG, ranker = rankSearchResults } = {}) {
  return {
    search(query = "") {
      const queryTokens = tokenize(query, { stopWords: config.stopWords });

      if (!queryTokens.length) {
        return index.documents.map(({ searchTokens, ...article }) => ({ ...article, score: 0 }));
      }

      return ranker(index.documents, queryTokens, query, config).map(toSearchResult);
    },
  };
}
