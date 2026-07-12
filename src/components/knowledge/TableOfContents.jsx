import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { useActiveHeading } from "../../hooks/useActiveHeading";

function TocLinks({ headings, activeHeadingId, onNavigate }) {
  return (
    <nav aria-label="Table of contents" className="space-y-1">
      {headings.map((heading) => (
        <button
          key={heading.id}
          type="button"
          onClick={() => onNavigate(heading.id)}
          aria-current={activeHeadingId === heading.id ? "location" : undefined}
          style={{ paddingLeft: `${Math.max(0, heading.level - 1) * 8}px` }}
          className={`block w-full truncate rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
            activeHeadingId === heading.id
              ? "bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
              : "text-neutral-600 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          {heading.text}
        </button>
      ))}
    </nav>
  );
}

export default function TableOfContents({ headings }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeHeadingId = useActiveHeading(headings);

  if (!headings.length) return null;

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <section className="mb-5 rounded-xl border border-gray-200 bg-gray-50/90 p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800/90 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          <span className="inline-flex items-center gap-2"><List className="size-4 text-emerald-600 dark:text-emerald-400" />On this page</span>
          <ChevronDown className={`size-4 text-emerald-600 transition-transform dark:text-emerald-400 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && <div className="mt-3 border-t border-gray-200 pt-2 dark:border-gray-700"><TocLinks headings={headings} activeHeadingId={activeHeadingId} onNavigate={handleNavigate} /></div>}
      </section>

      <aside className="hidden self-start lg:sticky lg:top-[132px] lg:block lg:max-h-[calc(100vh-150px)] lg:overflow-y-auto">
        <div className="rounded-xl border border-gray-200 bg-gray-50/90 p-4 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/90">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white"><List className="size-4 text-emerald-600 dark:text-emerald-400" />On this page</p>
          <TocLinks headings={headings} activeHeadingId={activeHeadingId} onNavigate={handleNavigate} />
        </div>
      </aside>
    </>
  );
}
