export default function DashboardSection({
icon: Icon,
title,
subtitle,
children
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">

      <div className="mb-6">

        <div className="flex items-center gap-3">

    {Icon && (
        <Icon
            size={26}
            className="text-emerald-500"
        />
    )}

    <h2 className="text-2xl font-bold">
        {title}
    </h2>

</div>

        {subtitle && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}

      </div>

      {children}

    </section>
  );
}