import { BLOG_CATEGORIES } from "../../data/blogCategories";

export default function BlogCategories({
    categories,
    activeCategory,
    onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-emerald-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-emerald-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {category.label}

{category.count > 0 && (
    <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
        {category.count}
    </span>
)}
        </button>
      ))}
    </div>
  );
}