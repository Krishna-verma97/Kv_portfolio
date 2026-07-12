import { motion } from "framer-motion";

export default function CategoryGrid({ categories, activeCategory, onSelect }) {
  return (
    <section aria-labelledby="categories-heading" className="py-6 md:py-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">Browse by topic</p>
          <h2 id="categories-heading" className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
            Categories
          </h2>
        </div>
        {activeCategory && (
          <button
            type="button"
            onClick={() => onSelect("")}
            className="text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => {
          const isActive = activeCategory === category;
          return (
            <motion.button
              key={category}
              type="button"
              onClick={() => onSelect(isActive ? "" : category)}
              aria-pressed={isActive}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.25) }}
              className={`rounded-xl border p-4 text-left text-sm font-semibold shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/20 ${
                isActive
                  ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:border-emerald-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-emerald-700"
              }`}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
