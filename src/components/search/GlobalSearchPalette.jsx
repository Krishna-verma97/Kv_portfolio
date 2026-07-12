import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useSearchContext } from "../../contexts/SearchContext";
import HighlightText from "../knowledge/HighlightText";
import { SEARCH_CONFIG } from "../../constants/searchConfig";

const DEFAULT_PLACEHOLDER = "Search everything...";

function getAutocompleteSuggestions(results, query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) return [];

  const terms = results
    .flatMap((result) => [
      result.category,
      ...(result.tags ?? []),
      ...(result.headings ?? []),
    ])
    .filter(Boolean)
    .map((term) => String(term).toLowerCase())
    .filter((term) => term.includes(normalized));

  return [...new Set(terms)].slice(0, 5);
}

export default function GlobalSearchPalette({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { query, setQuery, results, loading, clearSearch } = useSearchContext();
  const [activeIndex, setActiveIndex] = useState(0);

  const suggestions = useMemo(
    () => getAutocompleteSuggestions(results, query),
    [query, results],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) => Math.min(current + 1, results.length - 1));
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) => Math.max(current - 1, 0));
      }

      if (event.key === "Enter" && results[activeIndex]) {
        const selected = results[activeIndex];
        onClose();
        clearSearch();
        navigate(selected.url ?? selected.slug ?? "/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isOpen, navigate, onClose, results, clearSearch]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) => Math.min(current + 1, results.length - 1));
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) => Math.max(current - 1, 0));
      }

      if (event.key === "Enter" && results[activeIndex]) {
        const selected = results[activeIndex];
        onClose();
        clearSearch();
        navigate(selected.url ?? selected.slug ?? "/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isOpen, navigate, onClose, results, clearSearch]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-black/20 dark:border-gray-700 dark:bg-slate-900">
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-slate-800">
          <Search className="size-5 text-emerald-600" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={DEFAULT_PLACEHOLDER}
            aria-label="Global search"
            className="w-full bg-transparent text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        {loading ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-neutral-600 dark:border-gray-700 dark:bg-slate-800 dark:text-neutral-300">
            Indexing search data...
          </div>
        ) : (
          <div className="space-y-4">
            {suggestions.length ? (
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 text-sm dark:border-gray-700 dark:bg-slate-800">
                <p className="mb-2 font-semibold text-neutral-700 dark:text-neutral-200">
                  Suggestions
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setQuery(suggestion)}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-neutral-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-gray-700 dark:bg-slate-900 dark:text-neutral-300"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {results.length ? (
              results.slice(0, 10).map((result, index) => (
                <button
                  key={result.id}
                  type="button"
                  onClick={() => {
                    onClose();
                    clearSearch();
                    navigate(result.url ?? result.slug ?? "/");
                  }}
                  className={`w-full rounded-3xl border p-4 text-left transition-all duration-150 ${
                    index === activeIndex
                      ? "border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-500/10"
                      : "border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">

  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
    {result.source}
  </span>

  <span className="text-xs text-neutral-500 dark:text-neutral-400">
    {result.category}
  </span>

</div>
                    {result.difficulty ? (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600 dark:bg-gray-800 dark:text-neutral-300">
                        {result.difficulty}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                    <HighlightText
                      text={result.title}
                      query={query}
                      as="span"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    <HighlightText
                      text={result.description || result.content.slice(0, 140)}
                      query={query}
                      as="span"
                    />
                  </p>
                  {result.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                      {result.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 px-2 py-1 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </button>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-neutral-600 dark:border-gray-700 dark:bg-slate-800 dark:text-neutral-300">
                No results matched your search.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
