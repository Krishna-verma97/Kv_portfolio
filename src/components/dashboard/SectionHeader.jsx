export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}) {
  return (
    <div className="mb-6 flex items-start gap-4">

      <div className="rounded-xl bg-emerald-500/10 p-3">
        <Icon
          size={24}
          className="text-emerald-500"
        />
      </div>

      <div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>

      </div>

    </div>
  );
}