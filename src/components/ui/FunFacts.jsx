import { motion } from "framer-motion";

const facts = [
  {
    icon: "🎷",
    title: "Music(Click Me😊🫵)",
    desc: "Listening to lofi beats while coding is my productivity hack.",
    link: "https://youtu.be/b-K4oDRk04M?si=wug9UY0etrBSuF89",
  },
  {
    icon: "🎮",
    title: "Gaming Enthusiast",
    desc: "Love exploring open-world RPGs and tech-based strategy games.",
    link: "https://ff.garena.com/en",
  },
  {
    icon: "📚",
    title: "Learning Obsessed",
    desc: "Always learning something new – from DevOps to cloud!",
  },
  {
    icon: "💡",
    title: "Creative Thinker",
    desc: "Enjoy turning problems into simple, elegant UI solutions.",
  },
  {
    icon: "🧘‍♂️",
    title: "Mindful Coder",
    desc: "I meditate daily to improve focus, clarity, and calmness.",
    desktopOnly: true,
  },
];

export default function FunFacts() {
  return (
    <motion.section
      className="w-full sm:pb-0 px-2 sm:px-4 pt-0 pb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-6">
          Fun Facts & Interests
        </h2>

       <div className="space-y-6 lg:space-y-8 pl-4 border-l-[1.5px] border-emerald-500 sm:border-none sm:pl-0 mb-0 pb-0">
        {facts.map((fact, index) => {
            const content = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-start gap-4 p-4 rounded-2xl backdrop-blur-md 
                  bg-gradient-to-br from-white/70 via-cyan-50/60 to-purple-100/60 
                  dark:from-gray-800/60 dark:via-slate-900/60 dark:to-gray-700/60 
                  border border-gray-200 dark:border-white/10 
                  ${fact.desktopOnly ? "hidden lg:flex" : "flex"}`}
              >
                <motion.span
                  className="text-3xl"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.2,
                  }}
                >
                  {fact.icon}
                </motion.span>

                <div>
                  <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-1">
                    {fact.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {fact.desc}
                  </p>
                </div>
              </motion.div>
            );

            return index < 2 && fact.link ? (
              <a
                key={index}
                href={fact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
