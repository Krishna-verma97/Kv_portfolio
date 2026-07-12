export default function ProjectLinks({ github, liveDemo }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Launch assets
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-left text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Code repository
          </p>
          <p className="mt-2">View source on GitHub</p>
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-left text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Live demo
          </p>
          <p className="mt-2">Open the running site</p>
        </a>
      </div>
    </section>
  );
}
