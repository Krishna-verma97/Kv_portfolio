export default function ProjectRoadmap({ roadmap }) {
  if (!roadmap) return null;

  return (
    <section
      id="roadmap"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Future roadmap
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Planned features, limitations, refactor work, and technical debt to
          address.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roadmap.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-950"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
