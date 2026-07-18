import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex items-end gap-3"
    >
      {/* AI Avatar */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-xl

          border
          border-cyan-500/20

          bg-gradient-to-br
          from-cyan-500/20
          to-indigo-500/20
        "
      >
        <Bot className="h-5 w-5 text-cyan-300" />
      </div>

      {/* Bubble */}
      <div
        className="
          rounded-2xl
          rounded-bl-md

          border
          border-cyan-500/10

          bg-slate-800/90

          px-4
          py-3
        "
      >
        <div className="flex items-center gap-2">
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Virtual Krishna is thinking...
        </p>
      </div>
    </motion.div>
  );
}

function Dot({ delay }) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        delay,
      }}
      className="
        h-2.5
        w-2.5
        rounded-full
        bg-cyan-400
      "
    />
  );
}