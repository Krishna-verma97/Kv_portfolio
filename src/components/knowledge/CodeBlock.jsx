import CopyCodeButton from "./CopyCodeButton";

const getLanguage = (className = "") => {
  const match = className.match(/language-([\w+-]+)/i);
  return match?.[1] ?? "text";
};

const formatLanguage = (language) => language
  .replace(/[-_]/g, " ")
  .toUpperCase();

const getCodeText = (node) => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getCodeText).join("");
  return node?.props?.children ? getCodeText(node.props.children) : "";
};

export default function CodeBlock({ children, className }) {
  const language = getLanguage(className);
  const code = typeof children === "string" ? children.replace(/\n$/, "") : children;
  const codeText = getCodeText(children);

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-700 bg-[#161b22] px-4 py-2">
        <span className="font-mono text-xs font-semibold tracking-wide text-gray-300">
          {formatLanguage(language)}
        </span>
        <CopyCodeButton value={codeText} />
      </div>
      <pre className="max-w-full overflow-x-auto p-4 text-sm leading-6 text-gray-100">
        <code className={`whitespace-pre-wrap font-mono ${className ?? ""}`}>{code}</code>
      </pre>
    </div>
  );
}
