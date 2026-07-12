import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleBreadcrumb({
  article,
  baseTitle = "Knowledge Base",
  baseLink = "/knowledge",
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 overflow-hidden text-sm">
      <ol className="flex min-w-0 items-center gap-1.5 text-neutral-500 dark:text-neutral-400">

        <li className="shrink-0">
          <Link
            to={baseLink}
            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            {baseTitle}
          </Link>
        </li>

        <ChevronRight
          aria-hidden="true"
          className="size-3.5 shrink-0"
        />

        <li className="min-w-0 shrink truncate">
          {article.category}
        </li>

        <ChevronRight
          aria-hidden="true"
          className="size-3.5 shrink-0"
        />

        <li
          aria-current="page"
          className="min-w-0 flex-1 truncate font-medium text-gray-800 dark:text-gray-200"
        >
          {article.title}
        </li>

      </ol>
    </nav>
  );
}