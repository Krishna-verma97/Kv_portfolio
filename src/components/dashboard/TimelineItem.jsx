import {
  CheckCircle2,
  Clock3,
  Circle,
} from "lucide-react";

export default function TimelineItem({ item, last }) {
  const icon =
    item.status === "completed" ? (
      <CheckCircle2 className="text-green-500" size={22} />
    ) : item.status === "current" ? (
      <Clock3 className="text-yellow-500" size={22} />
    ) : (
      <Circle className="text-gray-400" size={22} />
    );

  return (
    <div className="relative flex gap-5">

      <div className="flex flex-col items-center">

        {icon}

        {!last && (
          <div className="mt-2 h-16 w-[2px] bg-gray-300 dark:bg-gray-700" />
        )}

      </div>

      <div className="pb-8">

        <p className="text-sm text-emerald-500">
          {item.year}
        </p>

        <h3 className="font-semibold text-lg">
          {item.title}
        </h3>

      </div>

    </div>
  );
}