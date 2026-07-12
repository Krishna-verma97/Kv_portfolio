import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getArticleNavigation } from "../../utils/articleNavigation";

function ArticleNavigationLink({ article, direction, baseRoute }) {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ArrowLeft : ArrowRight;

  return (
    <Link
      to={`${baseRoute}/${article.slug}`}
      className={`group flex min-w-0 max-w-full items-center gap-3 rounded-xl border border-gray-200 bg-white/70 p-3 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/60 dark:hover:border-emerald-700 ${
        isPrevious ? "text-left" : "ml-auto text-right"
      }`}
    >
      {isPrevious && (
        <Icon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
      )}

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold text-purple-600 dark:text-purple-400">
          {isPrevious ? "Previous Article" : "Next Article"}
        </span>

        <span className="mt-1 block truncate font-heading text-base font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {article.title}
        </span>
      </span>

      {!isPrevious && (
        <Icon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
      )}
    </Link>
  );
}

export default function ArticleNavigation({
  article,
  articles,
  type = "knowledge",
}) {
  if (!articles || articles.length <= 1) {
    return null;
  }

  const { previousArticle, nextArticle } = getArticleNavigation(
    article,
    articles
  );

  const baseRoute = type === "blog" ? "/blog" : "/knowledge";
  const backLabel = type === "blog" ? "Back to Blog" : "Back to Knowledge Base";

  return (
    <footer className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-700">

      <Link
        to={baseRoute}
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
      >
        <ArrowLeft className="size-4" />
        {backLabel}
      </Link>

      {(previousArticle || nextArticle) && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">

          {previousArticle ? (
            <ArticleNavigationLink
              article={previousArticle}
              direction="previous"
              baseRoute={baseRoute}
            />
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextArticle && (
            <ArticleNavigationLink
              article={nextArticle}
              direction="next"
              baseRoute={baseRoute}
            />
          )}

        </div>
      )}

    </footer>
  );
}