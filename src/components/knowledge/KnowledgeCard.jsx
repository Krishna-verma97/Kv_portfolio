import { Clock3, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import DifficultyBadge from "./DifficultyBadge";
import Tag from "./Tag";
import { formatLastUpdated } from "../../utils/articleMetadata";

export default function KnowledgeCard({ article, index }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
      className="group flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-gray-700 dark:bg-gray-800/90 dark:hover:border-emerald-700"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
          {article.category}
        </p>
        <DifficultyBadge difficulty={article.difficulty} />
      </div>
      <h3 className="mt-2 font-heading text-2xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
        {article.title}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {article.description}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-200 pt-4 text-xs text-neutral-500 dark:border-gray-700 dark:text-neutral-400">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
          {article.readingTime}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5 text-emerald-600 dark:text-emerald-400" />
          {/* Updated {article.lastUpdated} */}
          Updated {formatLastUpdated(article.lastUpdated)}
        </span>
      </div>
     <div className="mt-4 flex flex-wrap gap-2">
  {article.tags.map((tag) => (
    <Tag key={tag} clickable={false}>
      {tag}
    </Tag>
  ))}
</div>
    </motion.article>
  );
}
