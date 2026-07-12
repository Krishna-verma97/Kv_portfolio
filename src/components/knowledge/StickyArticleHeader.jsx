import { BookOpen } from "lucide-react";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";

export default function StickyArticleHeader({
  article,
  threshold = 260,
}) {
  const isVisible = useScrollThreshold(threshold);

  if (!isVisible) return null;

  return (
    <div
      className="
fixed
left-0
right-0
top-[66px]
z-40
bg-gray-900/95
backdrop-blur-md
shadow-md
"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-12 items-center gap-2">

          <BookOpen className="size-4 shrink-0 text-emerald-400" />

          <span className="shrink-0 font-semibold text-purple-400">
            {article.category}
          </span>

          <span className="truncate font-medium text-white">
            {article.title}
          </span>

        </div>
      </div>
    </div>
  );
}