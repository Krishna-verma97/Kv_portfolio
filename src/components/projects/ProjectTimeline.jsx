export default function ProjectTimeline({ timeline }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Timeline
        </h2>
      </div>
      <ol className="space-y-5">
        {timeline.map((item) => (
          <li
            key={item.stage}
            className="rounded-3xl border border-gray-200 bg-slate-50 p-6 dark:border-gray-700 dark:bg-slate-950/80"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {item.stage}
            </p>
            <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
