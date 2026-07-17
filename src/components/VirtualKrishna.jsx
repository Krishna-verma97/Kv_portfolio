import { useEffect } from "react";

export default function VirtualKrishna() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <elevenlabs-convai
      agent-id="agent_8201kxp85vgpef69jwvkwwkt45q8"
    ></elevenlabs-convai>
  );
}



{/* <elevenlabs-convai agent-id="agent_8201kxp85vgpef69jwvkwwkt45q8"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script> */}