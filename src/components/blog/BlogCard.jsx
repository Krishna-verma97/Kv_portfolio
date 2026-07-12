import {
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">

      {/* Cover Placeholder */}

      {/* <div className="h-48 overflow-hidden bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 transition duration-500 group-hover:scale-[1.02]" /> */}
      <div className="h-48 overflow-hidden">
  {article.cover ? (
    <img
      src={article.cover}
      alt={article.title}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
    />
  ) : (
    <div className="h-full w-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-500/20" />
  )}
</div>

      <div className="p-6">

        <div className="mb-4 flex items-center justify-between">

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            {article.category}
          </span>

          <span className="text-xs text-gray-500">
            {article.difficulty}
          </span>

        </div>

        <h3 className="line-clamp-2 text-2xl font-bold transition-colors group-hover:text-emerald-600 dark:text-white">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {article.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">

          <span className="inline-flex items-center gap-1">
            <Clock3 size={14} />
            {article.readingTime}
          </span>

          <span className="inline-flex items-center gap-1">
            <CalendarDays size={14} />
            {article.lastUpdated}
          </span>

        </div>

        <Link
          to={`/blog/${article.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3 dark:text-emerald-400"
        >
          Read Article

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

      </div>

    </article>
  );
}