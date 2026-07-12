import { useEffect, useMemo, useRef } from "react";
import mermaid from "mermaid";

const extractYouTubeId = (urlString) => {
  try {
    const url = new URL(urlString);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.slice(1);
    }

    if (url.searchParams.has("v")) {
      return url.searchParams.get("v");
    }

    if (url.pathname.includes("embed/")) {
      return url.pathname.split("embed/")[1];
    }
  } catch {
    return null;
  }

  return null;
};

const getTextContent = (node) => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  return node?.props?.children ? getTextContent(node.props.children) : "";
};

export default function MermaidDiagram({ type = "mermaid", code }) {
  const containerRef = useRef(null);
  const payload = useMemo(() => getTextContent(code).trim(), [code]);
  const diagramId = useMemo(
    () => `mermaid-diagram-${Math.random().toString(36).slice(2, 10)}`,
    [],
  );

  useEffect(() => {
    if (type !== "mermaid" || !containerRef.current || !payload) {
      return;
    }

    const renderMermaid = async () => {
      try {
        await mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          flowchart: { curve: "basis" },
          securityLevel: "strict",
        });

        const { svg } = await mermaid.render(diagramId, payload);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        if (containerRef.current) {
          containerRef.current.innerHTML = `<pre class=\"whitespace-pre-wrap rounded-xl bg-slate-950/90 p-4 text-sm text-rose-200\">${String(
            error,
          )}</pre>`;
        }
      }
    };

    renderMermaid();
  }, [type, payload, diagramId]);

  if (type === "youtube") {
    const videoId = extractYouTubeId(payload);
    const embedUrl = videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : payload;

    return (
      <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-black/80 shadow-sm">
        <div className="relative aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-black/80">
        <video controls className="w-full max-w-full bg-black">
          <source src={payload} type={`video/${payload.split(".").pop()}`} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="mermaid-wrapper mt-5 overflow-hidden rounded-3xl border border-gray-200 bg-slate-950/95 p-4 shadow-sm text-sm text-white">
      <div ref={containerRef} className="min-h-[240px]" />
    </div>
  );
}
