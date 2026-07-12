const difficultyStyles = {
  Beginner: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
  Intermediate: "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300",
  Advanced: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
};

export default function DifficultyBadge({ difficulty }) {
  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${difficultyStyles[difficulty]}`}>
      {difficulty}
    </span>
  );
}
