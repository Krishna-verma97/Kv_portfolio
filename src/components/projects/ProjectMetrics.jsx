export default function ProjectMetrics({ metrics }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-slate-50 p-8 dark:border-gray-700 dark:bg-slate-950/80">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Key metrics
        </h2>
      </div>
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900"
          >
            <dt className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {metric.label}
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
