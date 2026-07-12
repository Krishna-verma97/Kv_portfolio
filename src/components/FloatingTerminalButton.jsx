import { Terminal } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FloatingTerminalButton({
  variant = "hero",
}) {
  
  
  const buttonSize =
  variant === "hero"
    ? "h-10 w-10 md:h-14 md:w-14"
    : "h-9 w-9";
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  useEffect(() => {
  if (variant !== "hero") return;

  const handleScroll = () => {
    setVisible(window.scrollY < 180);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [variant]);

  if (location.pathname === "/terminal") return null;

  return (
   <div
  className={`group fixed z-[9999] transition-all duration-500 ease-out
    ${
      variant === "hero"
  ? `fixed
      top-20
      left-4

      md:top-auto
      md:left-auto
      md:bottom-10
      md:right-10

      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`
  : "flex items-center"
    }`}
>

      <button
        onClick={() => navigate("/terminal")}
        aria-label="Open Terminal"
        title="Open Terminal"
        className={`${buttonSize}
flex
items-center
justify-center
rounded-full
border

${
  variant === "hero"
    ? `
      border-indigo-500/40
      bg-gradient-to-br
    from-indigo-500/30
    to-pink-500/30
      from-indigo-500/20
      to-pink-500/20
      text-pink-300

      hover:from-indigo-500
      hover:to-pink-500
      hover:text-white
      hover:border-pink-400
      hover:shadow-[0_0_22px_rgba(236,72,153,0.45)]
    `
    : `
      border-cyan-400/30
      bg-[#0f172a]/90
      text-cyan-400

      hover:bg-cyan-500/10
      hover:border-cyan-400
      hover:text-cyan-300
      hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]
    `
}

shadow-2xl
backdrop-blur-md
transition-all
duration-300
hover:scale-110
`}
>
      <Terminal className="h-5 w-5 md:h-6 md:w-6 transition-all duration-300" />
      </button>

      {/* Tooltip */}
      {variant === "hero" && (
  <div
  className="
    hidden md:flex
    items-center
    pointer-events-none

    absolute
    right-full
    mr-3
    top-1/2
    -translate-y-1/2

    whitespace-nowrap

    rounded-lg
    bg-[#111827]

    px-3
    py-2

    text-sm
    text-cyan-300

    opacity-0
    translate-x-2

    shadow-xl

    transition-all
    duration-300

    group-hover:opacity-100
    group-hover:translate-x-0
  "
>
    ⚡ Website in CLI Mode
  </div>
)}
    </div>
  );
}