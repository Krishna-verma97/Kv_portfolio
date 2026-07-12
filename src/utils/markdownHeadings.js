const stripInlineMarkdown = (value) => value
  .replace(/`([^`]+)`/g, "$1")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/[~*_]/g, "")
  .trim();

export const getNodeText = (node) => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  return node?.props?.children ? getNodeText(node.props.children) : "";
};

export const createHeadingId = (text) => stripInlineMarkdown(text)
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .trim()
  .replace(/[\s-]+/g, "-") || "section";

export const createUniqueHeadingId = (text, usedIds) => {
  const baseId = createHeadingId(text);
  const occurrence = usedIds.get(baseId) ?? 0;
  usedIds.set(baseId, occurrence + 1);

  return occurrence ? `${baseId}-${occurrence + 1}` : baseId;
};

export function getMarkdownHeadings(markdown = "") {
  const usedIds = new Map();
  let isCodeBlock = false;

  return markdown.split(/\r?\n/).reduce((headings, line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      isCodeBlock = !isCodeBlock;
      return headings;
    }

    if (isCodeBlock) return headings;

    const match = line.match(/^(#{1,6})\s+(.+?)(?:\s+#+)?\s*$/);
    if (!match) return headings;

    const text = stripInlineMarkdown(match[2]);
    headings.push({
      id: createUniqueHeadingId(text, usedIds),
      level: match[1].length,
      text,
    });

    return headings;
  }, []);
}
