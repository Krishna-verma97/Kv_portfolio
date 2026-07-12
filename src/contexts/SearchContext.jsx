// import { createContext, useMemo } from "react";
import { createContext, useContext, useMemo } from "react";
import { useSearch } from "../hooks/useSearch";
import { createLocalSearchAdapter } from "../search/adapters";
import { loadSearchSources } from "../search/searchSources";

const SearchContext = createContext(null);

/**
 * Shared global search provider. It builds the local index once and exposes a
 * reusable search state contract for pages, global palette, and future AI.
 */
export function SearchProvider({ children }) {
  const { query, setQuery, results, loading, clearSearch } = useSearch({
    loadArticles: loadSearchSources,
    createEngine: createLocalSearchAdapter,
  });

  const value = useMemo(
    () => ({
      query,
      setQuery,
      results,
      loading,
      clearSearch,
    }),
    [loading, query, results, clearSearch],
  );


if (results.length) {
  console.log(results[0]);
}

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }

  return context;
}

export default SearchContext;
