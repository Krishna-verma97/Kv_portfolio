export default function ToolChip({ tool }) {
  const Icon = tool.icon;

  return (
    <div
      className="
      group
      rounded-2xl
      border
      border-gray-200
      dark:border-gray-700
      bg-white
      dark:bg-gray-900
      p-5
      text-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-emerald-500
      hover:shadow-lg
      hover:shadow-emerald-500/10
      "
    >
      <div className="mb-3 flex justify-center">
        <Icon
          size={34}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="font-semibold">
        {tool.name}
      </h3>

      <p className="mt-1 text-xs text-gray-500">
        {tool.category}
      </p>
    </div>
  );
}