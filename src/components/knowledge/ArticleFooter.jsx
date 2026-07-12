import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleFooter() {
  return (
    <footer className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
      <Link
        to="/knowledge"
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
      >
        <ArrowLeft className="size-4" />
        Back to Knowledge Base
      </Link>
    </footer>
  );
}
