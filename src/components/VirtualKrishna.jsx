import { useEffect } from "react";

import AIButton from "./ai/AIButton";
import AIChat from "./ai/AIChat";

import useChat from "../hooks/useChat";

export default function VirtualKrishna() {
  const chat = useChat();

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "https://unpkg.com/@elevenlabs/convai-widget-embed";

  //   script.async = true;
  //   script.type = "text/javascript";

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

//   useEffect(() => {
//   const existing = document.querySelector(
//     'script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]'
//   );

//   if (existing) return;

//   const script = document.createElement("script");

//   script.src =
//     "https://unpkg.com/@elevenlabs/convai-widget-embed";

//   script.async = true;
//   script.type = "text/javascript";

//   document.body.appendChild(script);
// }, []);

  return (
    <>
      {/* Custom AI */}
      <AIButton
        isOpen={chat.isOpen}
        onClick={chat.toggleChat}
      />

      <AIChat
        isOpen={chat.isOpen}
        onClose={chat.closeChat}
        messages={chat.messages}
        input={chat.input}
        setInput={chat.setInput}
        onSend={chat.sendMessage}
        isTyping={chat.isTyping}
      />

      {/* Existing ElevenLabs
      <elevenlabs-convai
        agent-id="agent_8201kxp85vgpef69jwvkwwkt45q8"
      ></elevenlabs-convai> */}
    </>
  );
}