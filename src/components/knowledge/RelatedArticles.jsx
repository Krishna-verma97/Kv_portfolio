import { useMemo } from "react";
import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { getRelatedArticles } from "../../utils/relatedArticles";
import DifficultyBadge from "./DifficultyBadge";

export default function RelatedArticles({
  article,
  articles,
  limit = 3,
  type = "knowledge",
}) {
  const relatedArticles = useMemo(() => {
    const related = getRelatedArticles(article, articles, limit);

    return related.filter((item) => item.slug !== article.slug);
  }, [article, articles, limit]);

  if (relatedArticles.length === 0) {
    return null;
  }

  const baseRoute = type === "blog" ? "/blog" : "/knowledge";

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="mt-10 border-t border-gray-200 pt-7 dark:border-gray-700"
    >
      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
        {type === "blog" ? "Continue Reading" : "Continue Learning"}
      </p>

      <h2
        id="related-articles-heading"
        className="mt-1 font-heading text-2xl font-bold text-gray-900 dark:text-white"
      >
        Related {type === "blog" ? "Blogs" : "Articles"}
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {relatedArticles.map((relatedArticle) => (
          <Link
            key={relatedArticle.slug}
            to={`${baseRoute}/${relatedArticle.slug}`}
            className="group rounded-xl border border-gray-200 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/60 dark:hover:border-emerald-700"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                {relatedArticle.category}
              </p>

              <DifficultyBadge difficulty={relatedArticle.difficulty} />
            </div>

            <h3 className="mt-2 font-heading text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
              {relatedArticle.title}
            </h3>

            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <Clock3 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              {relatedArticle.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}