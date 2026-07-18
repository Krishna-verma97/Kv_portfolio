import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import WelcomeScreen from "./WelcomeScreen";
import SuggestedQuestions from "./SuggestedQuestions";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";

export default function AIChat({
  isOpen,
  onClose,
  messages = [],
  input = "",
  setInput = () => {},
  onSend = () => {},
  isTyping = false,
}) {
    const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, isTyping]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="
            fixed
            bottom-24
            right-6
            z-[9998]

            w-[420px]
            max-w-[calc(100vw-2rem)]

            h-[620px]
            max-h-[80vh]

            overflow-hidden

            rounded-3xl

            border
            border-cyan-500/20

            bg-[#0b1120]/95

            backdrop-blur-2xl

            shadow-[0_0_60px_rgba(0,255,255,0.08)]

            flex
            flex-col
          "
        >
          <ChatHeader onClose={onClose} />

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {messages.length === 0 ? (
              <>
                <WelcomeScreen />

                <div className="mt-6">
                  <SuggestedQuestions
  onSelect={onSend}
/>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
  <ChatBubble
    key={index}
    message={message}
  />
))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <ChatInput
            input={input}
            setInput={setInput}
            onSend={onSend}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}