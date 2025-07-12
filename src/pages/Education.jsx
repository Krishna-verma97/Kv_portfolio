import { motion } from "framer-motion";
import gpm from "../assets/gpmau.png";
import gpb from "../assets/gyanballia.png";
import mpz from "../assets/mpsazamgarh-logo.png";

const educationData = [
  {
    img: {gpm},
    title: "Government Polytechnic Mau",
    description: "Diploma In Computer Science And Engineering",
    year: "2022 - 2025",
    link: "https://gpmau.com/",
  },
  {
    img: {gpb},
    title: "Gyan Peethiks Sr. Sec. School",
    description: "Higher/Senior Secondary School (Intermediate)",
    year: "2019 - 2021",
    link: "https://gyanpeethika.com/",
  },
  {
    img: {mpz},
    title: "Modern Public School",
    description: "Secondary School (High School)",
    year: "2017 - 2019",
    link: "http://www.mpsazamgarh.in/",
  },
];

const techTimeline = [
  {
    year: "2024",
    tech: "HTML, CSS, JavaScript",
    note: "Started my web dev journey with strong fundamentals.",
  },
  {
    year: "2025",
    tech: "React.js, Tailwind CSS",
    note: "Built multiple frontend projects & mastered UI/UX.",
  },
  {
    year: "2025",
    tech: "Firebase, Node.js",
    note: "Integrated backend & authentication with full-stack tools.",
  },
];

export default function Education() {
  return (
    <section className="pt-8 pb-20 px-4 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center gap-16">
      
      {/* 🎓 Education Section Card */}
      <div className="max-w-5xl w-full px-4 py-8 rounded-3xl shadow-xl backdrop-blur-md
        bg-gradient-to-br from-white/70 via-cyan-50/60 to-purple-100/60 
        dark:from-gray-800/60 dark:via-slate-900/60 dark:to-gray-700/60 
        border border-gray-200 dark:border-white/10">
        
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Education
        </motion.h2>

        <div className="relative pl-6 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="absolute -left-[1.8rem] top-5 w-5 h-5 bg-emerald-600 rounded-full border-2 border-white dark:border-gray-900 shadow-md"></div>

              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:bg-emerald-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <img
                  src={edu.img}
                  alt={edu.title}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold font-heading text-emerald-600 dark:text-emerald-400">
                    {edu.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-400 mt-1 font-body leading-relaxed">
                    {edu.description}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1 font-body">
                    {edu.year}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🧠 Tech Stack Timeline Card */}
      <div className="max-w-5xl w-full px-4 py-8 rounded-3xl shadow-xl backdrop-blur-md
        bg-gradient-to-br from-white/70 via-cyan-50/60 to-purple-100/60 
        dark:from-gray-800/60 dark:via-slate-900/60 dark:to-gray-700/60 
        border border-gray-200 dark:border-white/10">
        
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tech Stack Timeline
        </motion.h2>

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
