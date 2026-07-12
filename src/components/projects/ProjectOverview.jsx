export default function ProjectOverview({ problemStatement, overview }) {
  return (
    <section className="space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Project overview
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
          Engineering story
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            The challenge
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
            {problemStatement}
          </p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Why it matters
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
            {overview}
          </p>
        </article>
      </div>
    </section>
  );
}
