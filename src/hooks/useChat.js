import { useState } from "react";
import { getAIResponse } from "../ai/aiService";
import { clearConversation } from "../ai/memory";

export default function useChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const sendMessage = async (text) => {
    const message = text.trim();

    if (!message) return;

    // User Message
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: message,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    // Version 1 Demo Response
    // This will be replaced by Gemini in Version 2.
//     const response = await getAIResponse(message);

// const aiMessage = {
//     id: Date.now() + 1,
//     role: "assistant",
//     content: response,
//     createdAt: new Date(),
// };

// setMessages((prev) => [...prev, aiMessage]);

const response = await getAIResponse(message);

setMessages((prev) => [
  ...prev,
  {
    id: Date.now() + 1,
    role: "assistant",
    content: response.reply,
    sources: [
      ...new Map(
        response.context.map((doc) => [doc.title, doc])
      ).values(),
    ],
    createdAt: new Date(),
  },
]);

setIsTyping(false);
  };

  const clearChat = () => {
    setMessages([]);
    clearConversation();
setMessages([]);
  };

  return {
    isOpen,
    toggleChat,
    closeChat,

    messages,

    input,
    setInput,

    isTyping,

    sendMessage,

    clearChat,
  };
}