import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Lightbulb,
  ListChecks,
  Search,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { knowledgeTopics } from "../data/knowledgeBase";

const detailSections = [
  { key: "concepts", title: "Concepts", icon: ListChecks },
  { key: "snippets", title: "Code Snippets", icon: Code2 },
  { key: "notes", title: "Notes", icon: FileText },
  { key: "bestPractices", title: "Best Practices", icon: Sparkles },
  { key: "mistakes", title: "Common Mistakes", icon: TriangleAlert },
  { key: "interviewQuestions", title: "Interview Questions", icon: Lightbulb },
  { key: "resources", title: "Resources", icon: ExternalLink },
];

export default function KnowledgeBase() {
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState(knowledgeTopics[0].slug);

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return knowledgeTopics;

    return knowledgeTopics.filter((topic) => {
      const searchableText = [
        topic.title,
        topic.summary,
        topic.status,
        ...topic.concepts,
        ...topic.snippets,
        ...topic.notes,
        ...topic.bestPractices,
        ...topic.mistakes,
        ...topic.interviewQuestions,
        ...topic.resources,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  const activeTopic =
    knowledgeTopics.find((topic) => topic.slug === activeSlug) ||
    filteredTopics[0] ||
    knowledgeTopics[0];

  return (
    <section className="w-full pt-4 pb-12 px-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-sm font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm backdrop-blur-md">
            <BookOpen size={18} />
            Engineering Knowledge Base
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-heading text-emerald-600 dark:text-emerald-400">
            Docs for what I build and learn
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-body">
            A structured learning system for engineering fundamentals, cloud,
            DevOps, frontend, backend, AI, interviews, and production thinking.
          </p>
        </motion.div>

        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics, concepts, commands, mistakes..."
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/90 dark:bg-gray-800/90 py-3 pl-11 pr-4 text-sm outline-none backdrop-blur-md transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
          <motion.aside
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {filteredTopics.map((topic, index) => (
              <button
                key={topic.slug}
                type="button"
                onClick={() => setActiveSlug(topic.slug)}
                className={`group text-left rounded-xl border p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/20 ${
                  activeTopic.slug === topic.slug
                    ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                    : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {topic.status}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold font-heading text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {topic.title}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                  {topic.summary}
                </p>
              </button>
            ))}
          </motion.aside>

          <motion.article
            key={activeTopic.slug}
            className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-200/10 to-purple-200/20 dark:via-emerald-800/10 dark:to-purple-800/20 pointer-events-none" />
            <div className="relative p-5 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {activeTopic.status}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-emerald-600 dark:text-emerald-400">
                    {activeTopic.title}
                  </h3>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {activeTopic.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <ImageIcon size={18} className="text-emerald-500" />
                  Visual notes ready
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {detailSections.map(({ key, title, icon: Icon }) => (
                  <div
                    key={key}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={18} className="text-emerald-600 dark:text-emerald-400" />
                      <h4 className="font-semibold font-heading text-gray-900 dark:text-white">
                        {title}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {activeTopic[key].map((item) => (
                        <li
                          key={item}
                          className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                        >
                          <span className="mr-2 text-emerald-600 dark:text-emerald-400">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
