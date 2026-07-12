import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyCodeButton({ value }) {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimerRef = useRef();

  useEffect(() => () => clearTimeout(resetTimerRef.current), []);

  const handleCopy = async () => {
    if (!navigator.clipboard?.writeText) return;

    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? "Code copied" : "Copy code"}
      className="inline-flex min-h-8 items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold text-gray-300 transition-colors hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
    >
      {isCopied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
      <span>{isCopied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
