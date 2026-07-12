function PerformanceRow({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {items.map((item) => (
          <li key={item} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectPerformance({ performance }) {
  if (!performance) return null;

  return (
    <section
      id="performance"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Performance
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Performance improvements, lazy loading, memoization, and bundle
          optimizations.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <PerformanceRow title="Optimization" items={performance.optimization} />
        <PerformanceRow title="Lazy loading" items={performance.lazyLoading} />
        <PerformanceRow title="Memoization" items={performance.memoization} />
        <PerformanceRow title="Bundle size" items={performance.bundleSize} />
        <PerformanceRow
          title="Code splitting"
          items={performance.codeSplitting}
        />
        <PerformanceRow
          title="Responsive improvements"
          items={performance.responsiveImprovements}
        />
      </div>
    </section>
  );
}
