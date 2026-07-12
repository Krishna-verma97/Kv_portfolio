function LessonCategory({ title, items }) {
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

export default function ProjectLessons({ lessons }) {
  if (!lessons) return null;

  return (
    <section
      id="lessons"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Lessons learned
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Key takeaways grouped by technical, architectural, performance, and
          team lessons.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <LessonCategory title="Technical" items={lessons.technical} />
        <LessonCategory title="Engineering" items={lessons.engineering} />
        <LessonCategory title="Performance" items={lessons.performance} />
        <LessonCategory title="Architecture" items={lessons.architecture} />
        <LessonCategory title="Team" items={lessons.team} />
      </div>
    </section>
  );
}
