import { motion } from "framer-motion";
import {
  User,
  FolderKanban,
  BookOpen,
  GraduationCap,
  Wrench,
  Terminal,
} from "lucide-react";

const questions = [
  {
    icon: User,
    text: "Tell me about Krishna",
  },
  {
    icon: FolderKanban,
    text: "Show me your projects",
  },
  {
    icon: BookOpen,
    text: "Explore Engineering Knowledge",
  },
  {
    icon: GraduationCap,
    text: "Current Learning & Certifications",
  },
  {
    icon: Wrench,
    text: "Engineering Toolbox",
  },
  {
    icon: Terminal,
    text: "Open Terminal Mode",
  },
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="space-y-3">
      {questions.map(({ icon: Icon, text }, index) => (
        <motion.button
          key={text}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            scale: 1.02,
            x: 5,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={() => onSelect(text)}
          className="
            w-full

            rounded-2xl

            border
            border-cyan-500/15

            bg-slate-900/60

            px-4
            py-3

            transition-all
            duration-300

            hover:border-cyan-400/40
            hover:bg-slate-800

            text-left
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-xl

                bg-cyan-500/10

                text-cyan-400
              "
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {text}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Click to ask Virtual Krishna
              </p>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}