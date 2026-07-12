import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedBlog({ article }) {
  if (!article) return null;

  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-indigo-500/10 p-8 backdrop-blur-sm shadow-lg">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 text-emerald-500 dark:text-emerald-400">
          <Star className="h-5 w-5 fill-current" />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Featured
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {article.title}
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
          {article.description}
        </p>

        {/* Metadata */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
          <span>📖 {article.readingTime}</span>
          <span>🏷️ {article.category}</span>
          <span>📅 {article.lastUpdated}</span>

          {article.author && (
            <span>👤 {article.author}</span>
          )}
        </div>

        {/* Button */}
        <Link
          to={`/blog/${article.slug}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:scale-105"
        >
          Read Article
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}