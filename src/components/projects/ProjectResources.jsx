export default function ProjectResources({ resources }) {
  if (!resources?.length) return null;

  return (
    <section
      id="resources"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Resources
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Useful links for the repository, live demo, documentation, and related
          projects.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <a
            key={resource.label}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-900"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {resource.label}
            </p>
            <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
              {resource.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
