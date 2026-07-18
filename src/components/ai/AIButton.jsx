// import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Bot, X } from "lucide-react";

export default function AIButton({ isOpen, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Open Virtual Krishna"
      className="
      fixed
      bottom-3
      right-5
      md:bottom-[10px]
      lg:bottom-[10px]
      z-[9998]

      h-16
      w-16

      rounded-full

      border
      border-cyan-400/30

      bg-[#0f172a]/90

      backdrop-blur-xl

      shadow-[0_0_30px_rgba(34,211,238,0.20)]

      hover:border-cyan-400
      hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]

      transition-all
      duration-300

      overflow-hidden
      group
    "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0

        rounded-full

        bg-gradient-to-br
        from-cyan-500/10
        to-indigo-500/20

        group-hover:opacity-100
      "
      />

      {/* Pulse Ring */}
      <span
        className="
        absolute

        inset-0

        rounded-full

        border

        border-cyan-400/20

        animate-ping

        opacity-20
      "
      />

      {/* Icon */}
      <div
  className="
    relative
    flex
    items-center
    justify-center
    h-full
    w-full
  "
>
  {isOpen ? (
    <X
      className="
        h-7
        w-7
        text-cyan-300
      "
    />
  ) : (
    <Bot
      className="
        h-7
        w-7
        text-cyan-300
      "
    />
  )}
</div>
    </motion.button>
  );
}