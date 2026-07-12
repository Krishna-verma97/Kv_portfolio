import { useEffect, useMemo, useState } from "react";
import { BookOpen, RotateCcw } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { knowledgeCategories } from "../constants/knowledgeCategories";
import CategoryGrid from "../components/knowledge/CategoryGrid";
import HighlightText from "../components/knowledge/HighlightText";
import KnowledgeCard from "../components/knowledge/KnowledgeCard";
import KnowledgeHero from "../components/knowledge/KnowledgeHero";
import { useSearchContext } from "../contexts/SearchContext";
import { loadKnowledgeArticleSummaries } from "../utils/knowledgeContent";
import SEO from "../components/seo/SEO";
// import { Link } from "react-router-dom";

const createSearchText = (article) =>
  [article.title, article.category, article.description, ...article.tags]
    .join(" ")
    .toLocaleLowerCase();

const buildSearchSuggestions = (articles, query) => {
  const normalized = query.trim().toLocaleLowerCase();

  if (!normalized) return [];

  const matches = articles
    .flatMap((article) => [
      article.title,
      article.category,
      ...article.tags,
      ...(article.keywords ?? []),
    ])
    .filter((value) => value && value.toLocaleLowerCase().includes(normalized));

  return [...new Set(matches)].slice(0, 5);
};

function KnowledgeBaseContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { query, setQuery, results, loading, clearSearch } = useSearchContext();
  const [activeCategory, setActiveCategory] = useState("");
  const [activeDifficulty, setActiveDifficulty] = useState("");
  const [activeTag, setActiveTag] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlQuery = params.get("q") ?? "";
    if (urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [location.search, query, setQuery]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document
          .querySelector('input[aria-label="Search the knowledge base"]')
          ?.focus();
      }

      if (event.key === "Escape") {
        clearSearch();
        setActiveCategory("");
        setActiveDifficulty("");
        setActiveTag("");
        navigate("/knowledge", { replace: true });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [clearSearch, navigate]);

  const filteredArticles = useMemo(() => {
    const knowledgeResults = results.filter(
      (article) => article.source?.toLowerCase() === "knowledge",
    );
    const searchQuery = query.trim().toLocaleLowerCase();
    const searchResults = knowledgeResults;

    return searchResults.filter((article) => {
      const matchesCategory =
        !activeCategory || article.category === activeCategory;
      const matchesDifficulty =
        !activeDifficulty || article.difficulty === activeDifficulty;
      const matchesTag = !activeTag || article.tags.includes(activeTag);
      const matchesSearch =
        !searchQuery ||
        createSearchText(article).includes(searchQuery) ||
        article.title.toLocaleLowerCase().includes(searchQuery);

      return (
        matchesCategory && matchesDifficulty && matchesTag && matchesSearch
      );
    });
  }, [activeCategory, activeDifficulty, activeTag, query, results]);

  const suggestions = useMemo(
    () =>
      buildSearchSuggestions(
        results.filter((article) => article.source?.toLowerCase() === "knowledge"),
        query,
      ),
    [query, results],
  );
  const appliedFiltersCount = [
    activeCategory,
    activeDifficulty,
    activeTag,
  ].filter(Boolean).length;
  const statsText = `${results.filter((article) => article.source?.toLowerCase() === "knowledge").length} Articles • ${filteredArticles.length} Results • ${loading ? "Searching..." : "Search completed instantly"}`;

  const handleReset = () => {
    clearSearch();
    setActiveCategory("");
    setActiveDifficulty("");
    setActiveTag("");
    navigate("/knowledge", { replace: true });
  };


  return (
    <>
    <SEO
  title="Knowledge Base | Krishna Verma"
  description="Technical documentation, Linux, AWS, Docker, React, DevOps and programming articles."
/>
    <section className="w-full bg-white px-4 pb-12 pt-4 text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <KnowledgeHero
          query={query}
          onQueryChange={(value) => {
            setQuery(value);
            const params = new URLSearchParams(location.search);
            if (value) {
              params.set("q", value);
            } else {
              params.delete("q");
            }
            navigate(
              {
                pathname: location.pathname,
                search: params.toString() ? `?${params.toString()}` : "",
              },
              { replace: true },
            );
          }}
        />
        <CategoryGrid
          categories={knowledgeCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <section className="mt-4 rounded-xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-700 dark:bg-gray-800/80">
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <span className="font-semibold">Filters</span>
            <select
              value={activeDifficulty}
              onChange={(event) => setActiveDifficulty(event.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <option value="">All difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select
              value={activeTag}
              onChange={(event) => setActiveTag(event.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <option value="">All tags</option>
              {Array.from(
                new Set(results.flatMap((article) => article.tags ?? [])),
              )
                .sort()
                .map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
            </select>
            <button
              type="button"
              onClick={handleReset}
              className="ml-auto inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
            >
              <RotateCcw className="size-4" />
              Reset
            </button>
          </div>
        </section>

        {suggestions.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => {
                  setQuery(suggestion);
                  const params = new URLSearchParams(location.search);
                  params.set("q", suggestion);
                  navigate(
                    {
                      pathname: location.pathname,
                      search: `?${params.toString()}`,
                    },
                    { replace: true },
                  );
                }}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 shadow-sm hover:border-emerald-300 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}

        <section aria-labelledby="articles-heading" className="pt-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Engineering notes
              </p>
              <h2
                id="articles-heading"
                className="font-heading text-2xl font-bold text-gray-900 dark:text-white"
              >
                Knowledge articles
              </h2>
            </div>
            <div
              className="text-sm text-neutral-500 dark:text-neutral-400"
              aria-live="polite"
            >
              <p>{statsText}</p>
              {appliedFiltersCount ? (
                <p className="mt-1">
                  {appliedFiltersCount} filter
                  {appliedFiltersCount > 1 ? "s" : ""} applied
                </p>
              ) : null}
            </div>
          </div>

          {filteredArticles.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <Link
                  // key={article.id}
                  key={article.slug}
                  // to={`/knowledge/${article.id}`}
                  to={`/knowledge/${article.slug}`}
                  className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <KnowledgeCard
                    article={{
                      ...article,
                      title: (
                        <HighlightText
                          // key={`${article.id}-title`}
                          key={`${article.slug}-title`}
                          text={article.title}
                          query={query}
                          as="span"
                        />
                      ),
                      description: (
                        <HighlightText
                          // key={`${article.id}-description`}
                          key={`${article.slug}-description`}
                          text={article.description}
                          query={query}
                          as="p"
                        />
                      ),
                    }}
                    index={index}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center dark:border-gray-700 dark:bg-gray-800/70">
              <BookOpen className="mx-auto size-7 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mt-3 font-heading text-xl font-bold text-gray-900 dark:text-white">
                No articles found
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                Try another search term or clear the selected filters.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Reset search
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Blog CTA */}
<div className="mt-20 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 p-10 text-center">

  <h2 className="text-3xl font-bold">
    Want engineering stories & tutorials?
  </h2>

  <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    Beyond technical documentation, I regularly write about software engineering,
    MERN development, DevOps, AWS, career growth, and real-world experiences.
  </p>

  <Link
    to="/blog"
    className="mt-8 inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
  >
    📖 Visit Developer Blog →
  </Link>

</div>
    </section>
    </>
  );
}

export default function KnowledgeBase() {
  return <KnowledgeBaseContent />;
}
