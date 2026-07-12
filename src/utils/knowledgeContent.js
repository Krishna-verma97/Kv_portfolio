import matter from "gray-matter";
import { getEstimatedReadingTime } from "./readingTime";
import { parseTagList } from "./articleMetadata";

const markdownModules = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
});

export class KnowledgeArticleNotFoundError extends Error {
  constructor(slug) {
    super(`No knowledge article exists for "${slug}".`);
    this.name = "KnowledgeArticleNotFoundError";
  }
}
          
const toTitle = (value) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const normalizeKnowledgeSlug = (slug = "") =>
  slug.replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/");

const getSlugFromPath = (path) =>
  path.replace(/^\.\.\/content\//, "").replace(/\.md$/, "");

export function parseMarkdownFrontmatter(source, slug) {
  const { data, content } = matter(source);
  const [categorySlug = "", articleSlug = ""] = slug.split("/");
  const markdown = content.trim();

  return {
    slug,
    category: data.category || toTitle(categorySlug),
    title: data.title || toTitle(articleSlug),
    description: data.description || "Engineering documentation.",
    readingTime: data.readingTime || getEstimatedReadingTime(markdown),
    difficulty: data.difficulty || "Beginner",
    tags: parseTagList(data.tags),
    // lastUpdated: data.lastUpdated || "",
    lastUpdated: data.lastUpdated
  ? data.lastUpdated instanceof Date
    ? data.lastUpdated.toISOString().split("T")[0]
    : String(data.lastUpdated)
  : "",
    author: data.author || "",
    markdown,
  };
}

export async function loadKnowledgeArticleSummaries() {
  return loadKnowledgeArticles();
}

/** Shared local content adapter; replace this function with a CMS adapter later if needed. */
export async function loadKnowledgeArticles() {
  return Promise.all(
    Object.entries(markdownModules).map(async ([path, loadModule]) => {
      const source = await loadModule();
      return parseMarkdownFrontmatter(source, getSlugFromPath(path));
    }),
  );
}

export async function loadKnowledgeArticle(slug) {
  const normalizedSlug = normalizeKnowledgeSlug(slug);
  const entry = Object.entries(markdownModules).find(
    ([path]) => getSlugFromPath(path) === normalizedSlug,
  );

  if (!entry) {
    throw new KnowledgeArticleNotFoundError(normalizedSlug);
  }

  const [, loadModule] = entry;
  const markdown = await loadModule();

  return parseMarkdownFrontmatter(markdown, normalizedSlug);
}
