import { useCallback, useEffect, useMemo, useState } from "react";
import { buildSearchIndex } from "../search/indexer";
import { createLocalSearchAdapter } from "../search/adapters";
import { loadKnowledgeArticles } from "../utils/knowledgeContent";

const indexCache = new Map();

const getCachedIndex = (loadArticles) => {
  if (!indexCache.has(loadArticles)) {
    indexCache.set(
      loadArticles,
      loadArticles().then((articles) => buildSearchIndex(articles))
    );
  }

  return indexCache.get(loadArticles);
};

/**
 * UI-agnostic search hook.
 * It builds the search index once and reuses it.
 */
export function useSearch({
  loadArticles = loadKnowledgeArticles,
  createEngine = createLocalSearchAdapter,
} = {}) {
  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCurrentRequest = true;

    setLoading(true);

    getCachedIndex(loadArticles)
      .then((index) => {
        if (!isCurrentRequest) return;

        setEngine(createEngine(index));
      })
      .catch((err) => {
        console.error("SEARCH INIT ERROR:", err);

        if (!isCurrentRequest) return;

        setEngine(null);
      })
      .finally(() => {
        if (!isCurrentRequest) return;

        setLoading(false);
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [createEngine, loadArticles]);

  const results = useMemo(() => {
    if (!engine) return [];

    return engine.search(query);
  }, [engine, query]);

  const clearSearch = useCallback(() => {
    setQuery("");
  }, []);

  return {
    query,
    setQuery,
    results,
    loading,
    clearSearch,
  };
}