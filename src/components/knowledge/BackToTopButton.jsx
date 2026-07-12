import { ChevronUp } from "lucide-react";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";

export default function BackToTopButton({ threshold = 500 }) {
  const isVisible = useScrollThreshold(threshold);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-4 z-30 grid size-10 place-items-center rounded-full border border-gray-200 bg-white/95 text-emerald-600 shadow-lg backdrop-blur-md transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 dark:border-gray-700 dark:bg-gray-800/95 dark:text-emerald-400 dark:hover:bg-gray-700 sm:bottom-6 sm:right-6"
    >
      <ChevronUp className="size-5" />
    </button>
  );
}
