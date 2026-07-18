import { SendHorizonal } from "lucide-react";
import { useRef } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({
  input,
  setInput,
  onSend,
}) {
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);

    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);

    e.target.style.height = "48px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="
      border-t
      border-cyan-500/15

      bg-[#111827]/90

      p-4
    "
    >
      <div
        className="
        flex
        items-end
        gap-3

        rounded-2xl

        border
        border-cyan-500/20

        bg-slate-900/80

        px-3
        py-3

        transition-all

        focus-within:border-cyan-400
        focus-within:shadow-[0_0_18px_rgba(34,211,238,0.15)]
      "
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask Virtual Krishna anything..."
          className="
            max-h-40
            min-h-[48px]
            flex-1
            resize-none
            overflow-y-auto

            bg-transparent

            text-sm
            text-white

            placeholder:text-slate-500

            outline-none
          "
        />

        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            transition-all

            ${
              input.trim()
                ? `
                  bg-cyan-500
                  text-black

                  hover:scale-105
                  hover:bg-cyan-400
                `
                : `
                  cursor-not-allowed

                  bg-slate-800
                  text-slate-600
                `
            }
          `}
        >
          {/* <SendHorizonal className="h-5 w-5" /> */}
          <SendHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div
        className="
        mt-2

        flex
        justify-between

        px-1

        text-[11px]
        text-slate-500
      "
      >
        <span>Enter ↵ to send</span>

        <span>Shift + Enter for new line</span>
      </div>
    </div>
  );
}