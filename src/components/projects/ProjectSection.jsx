export default function ProjectSection({ title, children }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </section>
  );
}
