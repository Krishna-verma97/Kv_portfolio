import { Bot, Sparkles, FolderGit2, BookOpen, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col items-center text-center"
    >
      {/* AI Avatar */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          mb-5

          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-3xl

          border
          border-cyan-400/20

          bg-gradient-to-br
          from-cyan-500/20
          via-indigo-500/20
          to-purple-500/20

          shadow-[0_0_35px_rgba(34,211,238,0.20)]
        "
      >
        <Bot className="h-10 w-10 text-cyan-300" />
      </motion.div>

      {/* Heading */}
      <h1 className="text-2xl font-bold text-white">
        Hi, I'm Virtual Krishna
      </h1>

      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
        Your AI Engineering Assistant.
        <br />
        Explore Krishna Verma's engineering journey,
        projects, knowledge base and technical expertise.
      </p>

      {/* Feature Pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Feature icon={FolderGit2} text="Projects" />
        <Feature icon={BookOpen} text="Knowledge" />
        <Feature icon={Wrench} text="Toolbox" />
        <Feature icon={Sparkles} text="Dashboard" />
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
        Try asking...
      </p>
    </motion.div>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
        flex
        items-center
        gap-2

        rounded-full

        border
        border-cyan-400/15

        bg-slate-900/70

        px-4
        py-2

        text-xs
        text-slate-300

        transition-all
      "
    >
      <Icon className="h-4 w-4 text-cyan-400" />
      {text}
    </motion.div>
  );
}