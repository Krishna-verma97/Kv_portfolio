function SectionItem({ title, content }) {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </p>
      {Array.isArray(content) ? (
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {content.map((item) => (
            <li key={item} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {content}
        </p>
      )}
    </div>
  );
}

export default function ProjectArchitectureDetails({ architecture }) {
  if (!architecture) return null;

  const sections = [
    { title: "Support", content: architecture.support },
    {
      title: "Frontend architecture",
      content: architecture.frontendArchitecture,
    },
    {
      title: "Backend architecture",
      content: architecture.backendArchitecture,
    },
    { title: "Database flow", content: architecture.databaseFlow },
    { title: "Authentication flow", content: architecture.authenticationFlow },
    { title: "Deployment diagram", content: architecture.deploymentDiagram },
    { title: "API communication", content: architecture.apiCommunication },
  ];

  return (
    <section
      id="architecture"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Architecture visualization
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Structural overview of how the project is built and how subsystems
          interact.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {sections.map((section) => (
          <SectionItem
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </section>
  );
}
