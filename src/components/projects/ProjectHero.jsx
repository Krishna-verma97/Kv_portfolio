export default function ProjectHero({
  title,
  shortDescription,
  status,
  completed,
  difficulty,
  duration,
}) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800/90">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            {status}
          </p>
          <h1 className="mt-3 text-4xl font-heading font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700 dark:text-neutral-300">
            {shortDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 text-sm text-neutral-600 shadow-sm dark:bg-slate-900 dark:text-neutral-300 lg:w-[360px]">
          <div className="space-y-1 border-b border-gray-200 pb-3 dark:border-gray-700 lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
              Completed
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {completed}
            </p>
          </div>
          <div className="space-y-1 pt-3 lg:pt-0">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
              Duration
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {duration}
            </p>
          </div>
          <div className="space-y-1 rounded-b-3xl border-t border-gray-200 pt-3 dark:border-gray-700 lg:col-span-2 lg:border-t-0 lg:border-l lg:pt-0">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
              Difficulty
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {difficulty}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
