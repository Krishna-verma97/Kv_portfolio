// SuggestionBox.jsx

import { getCategoryMeta } from "../data/commandCategories";

export default function SuggestionBox({ suggestions, onSelect }) {
  if (!suggestions?.length) return null;

  return (
    <div
      className="mb-2 rounded-lg border overflow-hidden"
      style={{
        background: "var(--term-panel)",
        borderColor: "var(--term-border)",
      }}
      role="listbox"
      aria-label="Command suggestions"
    >
      {suggestions.map((cmd) => {
        const meta = getCategoryMeta(cmd.category);

        return (
          <button
            key={cmd.name}
            type="button"
            role="option"
            onClick={() => onSelect(cmd.name)}
            className="
              flex
              w-full
              items-center
              justify-between
              px-4
              py-2
              text-left
              transition-colors
              hover:bg-white/5
            "
          >
            <div className="flex flex-col">

              <span
                className="font-mono font-semibold"
                style={{
                  color: `var(${meta.colorVar})`,
                }}
              >
                {cmd.name}
              </span>

              <span className="text-xs text-gray-400">
                {meta.label}
              </span>

            </div>

            <span className="text-xs text-gray-500 max-w-[220px] text-right">
              {cmd.description}
            </span>

          </button>
        );
      })}
    </div>
  );
}