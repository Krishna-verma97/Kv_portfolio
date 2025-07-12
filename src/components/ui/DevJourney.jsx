import { motion } from "framer-motion";

const journeyData = [
  {
    title: "🚀 Started Web Dev",
    date: "November 2024",
    desc: "Began my coding journey with HTML, CSS, and JavaScript. Built basic websites and learned the fundamentals.",
  },
  {
    title: "⚛️ Learned React & Tailwind",
    date: "Feb 2025",
    desc: "Dived into React and Tailwind CSS. Developed multiple responsive projects and explored animations.",
  },
  {
    title: "🧠 Mastered Firebase & API Integration",
    date: "April 2025",
    desc: "Integrated Firebase for backend services and worked with REST APIs to build full-stack features.",
  },
  {
    title: "💼 Portfolio & Real Projects",
    date: "Jul 2025",
    desc: "Designed and built this portfolio from scratch, showcasing all my skills, animated effects, and real projects.",
  },
];

export default function DevJourney() {
  return (
    <motion.section
      className="w-full pt-4 pb-8 sm:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-6">
          My Dev Journey
        </h2>

        <div className="space-y-6 pl-4 border-l-[1.5px] border-emerald-500 sm:border-none sm:pl-0">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-md rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-white/10 
                         bg-gradient-to-br from-white/70 via-cyan-50/60 to-purple-100/60 
                         dark:from-gray-800/60 dark:via-slate-900/60 dark:to-gray-700/60"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-base font-body text-gray-800 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
