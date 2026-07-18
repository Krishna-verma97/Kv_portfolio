import { Bot, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatHeader({ onClose }) {
  return (
    <div
      className="
      flex
      items-center
      justify-between

      border-b
      border-cyan-500/15

      px-5
      py-4

      bg-[#111827]/90
      backdrop-blur-xl
    "
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-cyan-500/20
          to-indigo-500/20

          border
          border-cyan-400/20
        "
        >
          <Bot className="h-6 w-6 text-cyan-300" />
        </motion.div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-white">
              Virtual Krishna
            </h2>

            <Sparkles className="h-4 w-4 text-cyan-400" />
          </div>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-xs text-slate-400">
              Engineering AI Assistant
            </span>
          </div>
        </div>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="
        rounded-xl

        p-2

        text-slate-400

        transition

        hover:bg-slate-800
        hover:text-white
      "
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}