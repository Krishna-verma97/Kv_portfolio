export default function ProjectSpecs({ specs }) {
  if (!specs) return null;

  const rows = [
    { label: "LOC", value: specs.loc },
    { label: "Duration", value: specs.duration },
    { label: "Git commits", value: specs.gitCommits },
    { label: "Version", value: specs.version },
    { label: "Modules", value: specs.modules },
    { label: "Screens", value: specs.screens },
  ];

  return (
    <section
      id="metrics"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Project metrics
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Quantitative engineering details for the project.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map(
          (row) =>
            row.value && (
              <div
                key={row.label}
                className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-950"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  {row.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                  {row.value}
                </p>
              </div>
            ),
        )}
        {specs.technologies?.length ? (
          <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-950">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Technologies
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {specs.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
