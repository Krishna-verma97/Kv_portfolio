import ArticleMetadata from "./ArticleMetadata";
import ArticleShare from "../article/ArticleShare";

export default function ArticleHeader({
  article,
  variant = "knowledge",
}) {
  const titleClass =
    variant === "blog"
      ? "text-gray-900 dark:text-white"
      : "text-emerald-600 dark:text-emerald-400";

  return (
    <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
      <h1
        className={`font-heading text-4xl font-bold md:text-5xl ${titleClass}`}
      >
        {article.title}
      </h1>

      <p className="mt-3 max-w-3xl leading-relaxed text-neutral-700 dark:text-neutral-300">
        {article.description}
      </p>

      {/* <ArticleMetadata article={article} /> */}
      {variant === "blog" && article.cover && (
  <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
    <img
      src={article.cover}
      alt={article.title}
      className="h-[320px] w-full object-cover"
      loading="lazy"
    />
  </div>
  
)}
{variant === "blog" && <ArticleShare />}

<ArticleMetadata article={article} />
    </header>
  );
}