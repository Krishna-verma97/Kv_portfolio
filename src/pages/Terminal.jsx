import { useNavigate } from "react-router-dom";
import { TerminalPage } from "../terminal";

export default function Terminal() {
  const navigate = useNavigate();

  const handleNavigate = (slug, type) => {
    console.log(slug, type);

    switch (type) {
      case "page":
        navigate(`/${slug}`);
        break;

      case "project":
        navigate(`/projects/${slug}`);
        break;

      case "knowledge":
        navigate(`/knowledge/${slug}`);
        break;

      case "blog":
        navigate(`/blog/${slug}`);
        break;

      default:
        console.warn("Unknown navigation:", slug, type);
    }
  };

  return (
//     <section
//   className="bg-[#0f172a] px-5 py-5"
//   style={{
//     minHeight: "calc(100vh - 80px)", // adjust if navbar height differs
//   }}
// >
//   <TerminalPage
//     onNavigate={handleNavigate}
//     height="calc(100vh - 120px)"
//   />
// </section>

// NOTE: the parent route wrapper (Home.jsx) already reserves 80px of top
// padding for the fixed navbar on every page. This section only needs a
// small amount of its own breathing room on top of that — not another
// pt-24 — otherwise the navbar clearance gets applied twice and the
// terminal gets pushed way down the page (see the earlier double-gap bug).
<section
  className="
    bg-[#0f172a]

    pt-4
    pb-10

    px-3
    sm:px-5
    md:px-8
  "
>
  <TerminalPage
    onNavigate={handleNavigate}
    // No `height` passed here on purpose — TerminalLayout only sets an
    // inline height style when it receives one, otherwise it falls back to
    // the responsive height rules on .kv-terminal in terminal.css (a
    // different calc() per breakpoint, mobile/tablet/desktop).
  />
</section>
    // <section className="min-h-screen bg-[#0f172a]">
    //   <TerminalPage
    //     onNavigate={handleNavigate}
    //   />
    // </section>
  );
}