import { motion } from "framer-motion";
import DevJourney from "../components/ui/DevJourney";
import FunFacts from "../components/ui/FunFacts";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-2 py-10 bg-white dark:bg-gray-900 flex items-start justify-center"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6">
        {/* 🔹 Left Column: About Me + Dev Journey */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          {/* About Me Card */}
          <motion.div
            className="w-full px-4 sm:px-6 py-8 rounded-3xl shadow-xl backdrop-blur-md
              bg-gradient-to-br from-white/70 via-cyan-50/60 to-purple-100/60 
              dark:from-gray-800/60 dark:via-slate-900/60 dark:to-gray-700/60 
              border border-gray-200 dark:border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed font-body text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I’m Krishna, a passionate and curious software developer who’s on a
              journey to master modern web technologies.{" "}
              <span className="underline decoration-2 decoration-primary text-black dark:text-white font-medium">
                I’m currently focused on frontend development with React and Tailwind CSS while also learning backend integration using Firebase.
              </span>{" "}
              My goal is to build scalable and visually impressive applications,
              continuously improve my skills, and grow into a full-stack developer
              with cloud and DevOps capabilities.
            </motion.p>
          </motion.div>

          {/* ✅ Dev Journey Section – With mobile vertical line only */}
          <div className="relative">
            <div className="relative z-10 sm:px-4 sm:py-6 sm:rounded-3xl sm:shadow-xl sm:backdrop-blur-md
              sm:bg-gradient-to-br sm:from-white/70 sm:via-cyan-50/60 sm:to-purple-100/60 
              sm:dark:from-gray-800/60 sm:dark:via-slate-900/60 sm:dark:to-gray-700/60 
              sm:border sm:border-gray-200 sm:dark:border-white/10
              px-0">
              <DevJourney />
            </div>
          </div>
        </div>

        {/* 🔹 Fun Facts Section – Now aligned with DevJourney only on Desktop */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="relative flex-1 h-full">
            <div className="relative z-10 h-full sm:px-4 sm:py-6 sm:rounded-3xl sm:shadow-xl sm:backdrop-blur-md
              sm:bg-gradient-to-br sm:from-white/70 sm:via-cyan-50/60 sm:to-purple-100/60 
              sm:dark:from-gray-800/60 sm:dark:via-slate-900/60 sm:dark:to-gray-700/60 
              sm:border sm:border-gray-200 sm:dark:border-white/10
              px-0">
              <FunFacts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
