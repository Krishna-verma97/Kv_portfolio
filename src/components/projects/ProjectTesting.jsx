function TestingBlock({ title, items }) {
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

export default function ProjectTesting({ testing }) {
  if (!testing) return null;

  return (
    <section
      id="testing"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Testing
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Manual and future automated testing plans for the engineering
          platform.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <TestingBlock title="Manual testing" items={testing.manual} />
        <TestingBlock title="Future unit testing" items={testing.unit} />
        <TestingBlock
          title="Future integration testing"
          items={testing.integration}
        />
      </div>
    </section>
  );
}
