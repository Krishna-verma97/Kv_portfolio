export default function CategoryBadge({ category }) {
  return (
    <span className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300">
      {category}
    </span>
  );
}
