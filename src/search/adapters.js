import { createSearchEngine } from "./searchEngine";

/**
 * Search adapter interface contract for future providers.
 * Only the local adapter is implemented now, but the contract stays reusable.
 */
export function createLocalSearchAdapter(index, options) {
  return createSearchEngine(index, options);
}

export function createAlgoliaSearchAdapter() {
  return {
    search() {
      return [];
    },
  };
}

export function createMeilisearchSearchAdapter() {
  return {
    search() {
      return [];
    },
  };
}

export function createElasticSearchAdapter() {
  return {
    search() {
      return [];
    },
  };
}

export function createOpenSearchAdapter() {
  return {
    search() {
      return [];
    },
  };
}

export function createVectorSearchAdapter() {
  return {
    search() {
      return [];
    },
  };
}
