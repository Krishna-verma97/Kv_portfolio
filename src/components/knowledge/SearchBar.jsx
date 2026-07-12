import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <Search
        aria-hidden="true"
        className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-emerald-600 dark:text-emerald-400"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search topics, categories, tags, or concepts..."
        aria-label="Search the knowledge base"
        className="w-full rounded-xl border border-gray-200 bg-white/90 py-3.5 pl-12 pr-12 text-sm text-gray-900 shadow-sm outline-none backdrop-blur-md transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 dark:border-gray-700 dark:bg-gray-800/90 dark:text-white dark:placeholder:text-gray-500"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-emerald-400"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
