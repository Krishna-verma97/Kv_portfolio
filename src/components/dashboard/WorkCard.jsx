import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Layers3,
  CircleDot,
} from "lucide-react";

export default function WorkCard({ work }) {
  return (
    <Link
      to={work.link}
      className="
        group
        flex
        flex-col
        rounded-2xl
        border
        border-gray-200
        dark:border-gray-700
        bg-white
        dark:bg-gray-900
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-500
        hover:shadow-xl
        hover:shadow-emerald-500/10
      "
    >
      {/* Top */}

      <div className="flex items-center justify-between">

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium

            ${
              work.status === "Active"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
            }
          `}
        >
          ● {work.status}
        </span>

        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-bold">
        {work.title}
      </h3>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        {work.type}
      </p>

      {/* Version + Updated */}

      <div className="mt-5 flex flex-wrap gap-3 text-sm">

        <span className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1">

          <Layers3 size={14} />

          {work.version}

        </span>

        <span className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1">

          <CalendarDays size={14} />

          {work.updated}

        </span>

      </div>

      {/* Tech */}

      <div className="mt-5 flex flex-wrap gap-2">

        {/* {work.tech.map((item) => ( */}
        {Array.isArray(work.tech) &&
  work.tech.map((item) => (
          <span
            key={item}
            className="
              rounded-md
              bg-emerald-50
              dark:bg-emerald-900/20
              px-2
              py-1
              text-xs
              text-emerald-700
              dark:text-emerald-300
            "
          >
            {item}
          </span>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-auto pt-6">

        <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500">

          <CircleDot size={16} />

          View Case Study

        </span>

      </div>

    </Link>
  );
}