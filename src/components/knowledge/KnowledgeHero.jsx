import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function KnowledgeHero({ query, onQueryChange }) {
  return (
    <motion.section
      className="py-8 text-center md:py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-4 py-2 text-sm font-semibold text-emerald-600 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80 dark:text-emerald-400">
        <BookOpen className="size-[18px]" />
        Engineering Knowledge Base
      </div>
      <h1 className="mt-4 font-heading text-4xl font-bold text-emerald-600 dark:text-emerald-400 md:text-5xl">
        Docs for what I build and learn
      </h1>
      <p className="mx-auto mt-3 max-w-3xl font-body text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
        Practical notes for engineering fundamentals, cloud, DevOps, software
        development, and thoughtful system design.
      </p>
      <div className="mt-6">
        <SearchBar value={query} onChange={onQueryChange} />
      </div>
    </motion.section>
  );
}
