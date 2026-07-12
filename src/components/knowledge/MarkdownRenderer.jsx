import ReactMarkdown from "react-markdown";
import { Children, cloneElement, isValidElement, useMemo } from "react";
import { Link } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import {
  createUniqueHeadingId,
  getNodeText,
} from "../../utils/markdownHeadings";
import CodeBlock from "./CodeBlock";
import MermaidDiagram from "./MermaidDiagram";

function getCodeElementProps(children) {
  const codeElement = Array.isArray(children) ? children[0] : children;

  return {
    className: codeElement?.props?.className,
    children: codeElement?.props?.children,
  };
}

const headingStyles = {
  1: "mt-8 font-heading text-3xl font-bold text-gray-900 dark:text-white",
  2: "mt-8 font-heading text-2xl font-bold text-emerald-600 dark:text-emerald-400",
  3: "mt-6 font-heading text-xl font-bold text-gray-900 dark:text-white",
  4: "mt-5 text-base font-semibold text-gray-900 dark:text-white",
  5: "mt-5 text-sm font-semibold text-gray-900 dark:text-white",
  6: "mt-5 text-sm font-semibold text-neutral-700 dark:text-neutral-300",
};

const createHeadingRenderer =
  (level, usedHeadingIds) =>
  ({ children }) => {
    const Heading = `h${level}`;
    const id = createUniqueHeadingId(getNodeText(children), usedHeadingIds);

    return (
      <Heading id={id} className={`${headingStyles[level]} scroll-mt-36`}>
        <a
          href={`#${id}`}
          className="group inline-flex items-center gap-2 text-inherit no-underline"
        >
          <span>{children}</span>
          <span className="opacity-0 transition-opacity group-hover:opacity-100 text-sm text-neutral-400 dark:text-neutral-500">
            #
          </span>
        </a>
      </Heading>
    );
  };

const getAdmonitionData = (children) => {
  const rawText = getNodeText(children).trim();
  const match = rawText.match(/^[\s\n]*\[!(NOTE|TIP|WARNING|DANGER)\][\s\n]*/i);

  if (!match) return null;

  return {
    type: match[1].toLowerCase(),
    marker: match[0],
  };
};

const stripAdmonitionMarker = (node, marker) => {
  if (typeof node === "string") {
    return node.startsWith(marker) ? node.slice(marker.length) : node;
  }

  if (Array.isArray(node)) {
    return node.map((child) => stripAdmonitionMarker(child, marker));
  }

  if (isValidElement(node)) {
    return cloneElement(node, {
      ...node.props,
      children: stripAdmonitionMarker(node.props.children, marker),
    });
  }

  return node;
};

const createProseComponents = () => {
  const usedHeadingIds = new Map();

  return {
    h1: createHeadingRenderer(1, usedHeadingIds),
    h2: createHeadingRenderer(2, usedHeadingIds),
    h3: createHeadingRenderer(3, usedHeadingIds),
    h4: createHeadingRenderer(4, usedHeadingIds),
    h5: createHeadingRenderer(5, usedHeadingIds),
    h6: createHeadingRenderer(6, usedHeadingIds),
    p: ({ children }) => (
      <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700 marker:text-emerald-600 dark:text-neutral-300 dark:marker:text-emerald-400">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-neutral-700 marker:text-emerald-600 dark:text-neutral-300 dark:marker:text-emerald-400">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1 leading-relaxed">{children}</li>,
    a: ({ href, children }) => {
      if (!href) {
        return <>{children}</>;
      }

      const isYoutube = /(youtube\.com\/watch\?v=|youtu\.be\/)/i.test(href);
      const isVideo = /\.(mp4|webm|ogg)$/i.test(href);
      const isAnchor = href.startsWith("#");
      const isInternal = href.startsWith("/");

      if (isYoutube) {
        return <MermaidDiagram type="youtube" code={href} />;
      }

      if (isVideo) {
        return (
          <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-black/80">
            <video controls className="w-full max-w-full bg-black">
              <source src={href} type={`video/${href.split(".").pop()}`} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }

      if (isInternal) {
        return (
          <Link
            to={href}
            className="font-medium text-emerald-600 underline decoration-emerald-400/60 underline-offset-4 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            {children}
          </Link>
        );
      }

      if (isAnchor) {
        return (
          <a
            href={href}
            className="font-medium text-emerald-600 underline decoration-emerald-400/60 underline-offset-4 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            {children}
          </a>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-emerald-600 underline decoration-emerald-400/60 underline-offset-4 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          {children}
        </a>
      );
    },
    blockquote: ({ children }) => {
      const admonition = getAdmonitionData(children);

      if (!admonition) {
        return (
          <blockquote className="mt-5 border-l-4 border-emerald-500 bg-emerald-50/70 py-3 pl-4 italic text-neutral-700 dark:bg-emerald-950/20 dark:text-neutral-300">
            {children}
          </blockquote>
        );
      }

      const config = {
        note: {
          label: "Note",
          classes: "border-emerald-300 bg-emerald-50/70 dark:bg-emerald-950/20",
        },
        tip: {
          label: "Tip",
          classes: "border-cyan-300 bg-cyan-50/70 dark:bg-cyan-950/20",
        },
        warning: {
          label: "Warning",
          classes: "border-amber-300 bg-amber-50/70 dark:bg-amber-950/20",
        },
        danger: {
          label: "Danger",
          classes: "border-rose-300 bg-rose-50/70 dark:bg-rose-950/20",
        },
      };

      const style = config[admonition.type] ?? config.note;

      return (
        <div
          className={`mt-5 overflow-hidden rounded-2xl border-l-4 border-gray-300 p-4 text-sm ${style.classes}`}
        >
          <p className="mb-3 font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-200">
            {style.label}
          </p>
          <div>{stripAdmonitionMarker(children, admonition.marker)}</div>
        </div>
      );
    },
    hr: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="mt-5 max-w-full rounded-lg border border-gray-200 shadow-sm dark:border-gray-700"
      />
    ),
    table: ({ children }) => (
      <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="w-full min-w-full border-collapse text-left text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-100 text-gray-900 dark:bg-gray-700/70 dark:text-white">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="border border-gray-200 px-3 py-2 font-semibold dark:border-gray-700">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-200 px-3 py-2 text-neutral-700 dark:border-gray-700 dark:text-neutral-300">
        {children}
      </td>
    ),
    pre: ({ children }) => {
      const codeProps = getCodeElementProps(children);
      const language = codeProps.className
        ?.replace("language-", "")
        .toLowerCase();

      if (language === "mermaid" || language === "mmd") {
        return <MermaidDiagram type="mermaid" code={codeProps.children} />;
      }

      return <CodeBlock {...codeProps} />;
    },
    code: ({ className, children }) => {
      const isBlock = Boolean(className?.includes("language-"));

      if (isBlock) {
        return (
          <code className={className}>
            {String(children).replace(/\n$/, "")}
          </code>
        );
      }

      return (
        <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[0.85em] text-purple-700 dark:bg-gray-700 dark:text-purple-300">
          {children}
        </code>
      );
    },
  };
};

export default function MarkdownRenderer({ markdown }) {
  const proseComponents = useMemo(() => createProseComponents(), [markdown]);

  return (
    <div className="markdown-content mt-8 text-sm">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={proseComponents}
      >
        {markdown ||
          "## Content coming soon\n\nThis article is being prepared."}
      </ReactMarkdown>
    </div>
  );
}
