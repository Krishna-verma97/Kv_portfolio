function ImplementationBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {items?.map((item) => (
          <li key={item} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectImplementationDetails({ details }) {
  if (!details) return null;

  return (
    <section
      id="implementation"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Implementation details
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          The engineering implementation, folder layout, and reusable
          foundations used to build the project.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ImplementationBlock
          title="Folder structure"
          items={details.folderStructure}
        />
        <ImplementationBlock
          title="Important components"
          items={details.importantComponents}
        />
        <ImplementationBlock
          title="Reusable hooks"
          items={details.reusableHooks}
        />
        <ImplementationBlock title="Utilities" items={details.utilities} />
        <ImplementationBlock
          title="Configuration"
          items={details.configuration}
        />
      </div>
    </section>
  );
}
