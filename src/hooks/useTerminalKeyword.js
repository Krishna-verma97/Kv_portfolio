import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useTerminalKeyword() {
  const navigate = useNavigate();

  useEffect(() => {
    let buffer = "";

    const handleKeyDown = (e) => {
      // Ignore typing inside inputs/textareas/contenteditable
      const tag = e.target.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      if (e.key.length === 1) {
        buffer += e.key.toLowerCase();

        if (buffer.length > 20) {
          buffer = buffer.slice(-20);
        }

        if (buffer.includes("terminal")) {
          buffer = "";
          navigate("/terminal");
        }
      }

      if (e.key === "Escape") {
        buffer = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
}