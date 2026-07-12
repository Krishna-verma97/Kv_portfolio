import { Link } from "react-router-dom";
import { CalendarDays, Clock3, ArrowUpRight } from "lucide-react";

export default function ArticleCard({ article }) {
  const sourceColor =
    article.source === "Knowledge"
      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
      : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300";

  return (
    <Link
      to={article.url}
      className="
      group
      flex
      flex-col
      rounded-2xl
      border
      border-gray-200
      dark:border-gray-700
      bg-white
      dark:bg-gray-900
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-emerald-500
      hover:shadow-xl
      hover:shadow-emerald-500/10
      "
    >
      <div className="flex items-center justify-between">

        <span className={`rounded-full px-3 py-1 text-xs font-medium ${sourceColor}`}>
          {article.source}
        </span>

        <ArrowUpRight
          size={18}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {article.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {article.category}
      </p>

      <p className="mt-4 flex-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
        {article.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-xs text-gray-500">

        <span className="inline-flex items-center gap-1">
          <Clock3 size={14} />
          {article.readingTime}
        </span>

        <span className="inline-flex items-center gap-1">
          <CalendarDays size={14} />
          {article.lastUpdated || article.date}
        </span>

      </div>

      <div className="mt-6 font-medium text-emerald-500">
        Read Article →
      </div>

    </Link>
  );
}