const DEFAULT_WORDS_PER_MINUTE = 200;

const toPlainText = (markdown = "") => markdown
  .replace(/```[\s\S]*?```/g, "")
  .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/[`#>*_|~-]/g, " ");

export function getEstimatedReadingTime(markdown, wordsPerMinute = DEFAULT_WORDS_PER_MINUTE) {
  const wordCount = toPlainText(markdown).trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return `${minutes} min read`;
}
