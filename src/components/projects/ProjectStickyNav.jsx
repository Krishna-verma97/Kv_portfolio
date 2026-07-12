import { useEffect, useMemo, useState } from "react";

const sections = [
  { id: "metrics", label: "Metrics" },
  { id: "architecture", label: "Architecture" },
  { id: "implementation", label: "Implementation" },
  { id: "challenges", label: "Challenges" },
  { id: "lessons", label: "Lessons" },
  { id: "performance", label: "Performance" },
  { id: "testing", label: "Testing" },
  { id: "roadmap", label: "Roadmap" },
  { id: "resources", label: "Resources" },
];

export default function ProjectStickyNav() {
  const [active, setActive] = useState(sections[0].id);

  const navItems = useMemo(() => sections, []);

  useEffect(() => {
    const handleScroll = () => {
      const nextActive = sections.reduce((current, section) => {
        const element = document.getElementById(section.id);
        if (!element) return current;

        const top = element.getBoundingClientRect().top;
        return top <= 120 ? section.id : current;
      }, sections[0].id);

      setActive(nextActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[100px] space-y-4 rounded-3xl border border-gray-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-gray-700 dark:bg-slate-900/90">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
        Jump to
      </p>
      <div className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block rounded-3xl px-4 py-3 text-sm transition ${
              active === item.id
                ? "bg-emerald-500 text-white"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
