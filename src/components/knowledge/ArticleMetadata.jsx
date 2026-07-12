import { CalendarDays, Clock3, UserRound } from "lucide-react";
import { formatLastUpdated } from "../../utils/articleMetadata";
import CategoryBadge from "./CategoryBadge";
import DifficultyBadge from "./DifficultyBadge";
import Tag from "./Tag";

export default function ArticleMetadata({ article }) {
  return (
    <div className="mt-5 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <CategoryBadge category={article.category} />
        <DifficultyBadge difficulty={article.difficulty} />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
        {article.lastUpdated && (
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-emerald-600 dark:text-emerald-400" />
            📅 Updated {formatLastUpdated(article.lastUpdated)}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="size-4 text-emerald-600 dark:text-emerald-400" />
          📖 {article.readingTime}
        </span>
        {article.author && (
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="size-4 text-emerald-600 dark:text-emerald-400" />
            ✍ {article.author}
          </span>
        )}
      </div>
      {article.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Tags</span>
          {article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      )}
    </div>
  );
}
