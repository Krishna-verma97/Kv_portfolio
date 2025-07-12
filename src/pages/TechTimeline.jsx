// src/pages/TechTimeline.jsx

import { motion } from "framer-motion";

const techTimeline = [
  {
    year: "2023",
    tech: "HTML, CSS, JavaScript",
    note: "Started my web dev journey with strong fundamentals.",
  },
  {
    year: "2024",
    tech: "React.js, Tailwind CSS",
    note: "Built multiple frontend projects & mastered UI/UX.",
  },
  {
    year: "2025",
    tech: "Firebase, Node.js",
    note: "Integrated backend & authentication with full-stack tools.",
  },
];

export default function TechTimeline() {
  return (
    <section
      className="w-full bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-4 flex justify-center items-center"
    >
      <div className="max-w-4xl w-full">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tech Stack Timeline
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-6 space-y-12">
          {techTimeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="absolute -left-[1.15rem] top-1 w-5 h-5 bg-emerald-600 rounded-full border-2 border-white dark:border-gray-900 shadow-md"></div>
              <h3 className="text-lg md:text-xl font-semibold font-heading">
                {item.year} —{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {item.tech}
                </span>
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 mt-1 font-body leading-relaxed">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

