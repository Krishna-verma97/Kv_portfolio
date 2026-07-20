import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

export default function ChatBubble({ message }) {
  const isUser = message.role === "user";

  // console.log(message.sources);
  console.table(message.sources);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
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
      )}

      {/* Message */}
      <div
        className={`
          max-w-[80%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-7
          break-words
          ${
            isUser
              ? `
                bg-cyan-500
                text-slate-950
                rounded-br-md
              `
              : `
                bg-slate-800/90
                border
                border-cyan-500/10
                text-slate-200
                rounded-bl-md
              `
          }
        `}
      >
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        </div>

        {!isUser && message.sources?.length > 0 && (
          <div className="mt-3 border-t border-cyan-500/10 pt-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Sources
            </p>

            <div className="flex flex-wrap gap-2">
              {message.sources.map((source) => (
                // <span
                //   key={source.title}
                //   className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-[11px] text-cyan-300"
                // >
                //   {source.title}
                  
                // </span>
                <Link
  key={source.title}
  to={source.url}
  className="
    rounded-full
    border
    border-cyan-500/20
    bg-cyan-500/5
    px-3
    py-1
    text-[11px]
    text-cyan-300
    transition
    hover:bg-cyan-500/10
    hover:border-cyan-400
  "
>
  {source.title}
</Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-cyan-500
            text-slate-950
          "
        >
          <User className="h-5 w-5" />
        </div>
      )}
    </motion.div>
  );
}