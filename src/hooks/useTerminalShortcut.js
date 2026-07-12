import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useTerminalShortcut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        navigate("/terminal");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
}