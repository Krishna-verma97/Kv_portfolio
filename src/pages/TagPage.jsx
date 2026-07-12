import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogArticles } from "../hooks/useBlogArticles";
import { useKnowledgeArticleSummaries } from "../hooks/useKnowledgeArticleSummaries";

export default function TagPage() {
  const { tag } = useParams();

  const { articles: blogs } = useBlogArticles();
  const knowledge = useKnowledgeArticleSummaries();

  const results = useMemo(() => {
    const normalized = tag.toLowerCase();

    return [
      ...knowledge
        .filter((a) =>
          a.tags.some((t) => t.toLowerCase() === normalized)
        )
        .map((a) => ({
          ...a,
          type: "Knowledge",
          url: `/knowledge/${a.slug}`,
        })),

      ...blogs
        .filter((a) =>
          a.tags.some((t) => t.toLowerCase() === normalized)
        )
        .map((a) => ({
          ...a,
          type: "Blog",
          url: `/blog/${a.slug}`,
        })),
    ];
  }, [blogs, knowledge, tag]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="text-4xl font-bold">
        #{tag}
      </h1>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        {results.length} article(s) found
      </p>

      <div className="mt-10 grid gap-6">

        {results.map((article) => (
          <Link
            key={`${article.type}-${article.slug}`}
            to={article.url}
            className="rounded-xl border p-6 transition hover:border-emerald-500"
          >
            <div className="mb-2 flex items-center gap-3">

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                {article.type}
              </span>

              <span className="text-sm text-gray-500">
                {article.category}
              </span>

            </div>

            <h2 className="text-2xl font-bold">
              {article.title}
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {article.description}
            </p>

          </Link>
        ))}

      </div>

    </section>
  );
}