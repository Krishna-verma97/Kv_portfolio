import matter from "gray-matter";
import { getEstimatedReadingTime } from "./readingTime";
import { parseTagList } from "./articleMetadata";

const markdownModules = import.meta.glob("../content/blog/**/*.md", {
  query: "?raw",
  import: "default",
});

export class BlogArticleNotFoundError extends Error {
  constructor(slug) {
    super(`No blog article exists for "${slug}".`);
    this.name = "BlogArticleNotFoundError";
  }
}

const toTitle = (value) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const normalizeBlogSlug = (slug = "") =>
  slug.replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/");

const getSlugFromPath = (path) =>
  path
    .replace(/^\.\.\/content\/blog\//, "")
    .replace(/\.md$/, "");

export function parseMarkdownFrontmatter(source, slug) {
  const { data, content } = matter(source);
  const [categorySlug = "", articleSlug = ""] = slug.split("/");
  const markdown = content.trim();

  return {
    slug,
    category: data.category || toTitle(categorySlug),
    title: data.title || toTitle(articleSlug),
    description: data.description || "",
    featured: data.featured ?? false,
    cover: data.cover || "",
    readingTime:
      data.readingTime || getEstimatedReadingTime(markdown),
    difficulty: data.difficulty || "",
    tags: parseTagList(data.tags),
    lastUpdated: data.lastUpdated
      ? data.lastUpdated instanceof Date
        ? data.lastUpdated.toISOString().split("T")[0]
        : String(data.lastUpdated)
      : "",
    author: data.author || "",
    markdown,
  };
}

export async function loadBlogArticleSummaries() {
  return loadBlogArticles();
}

/**
 * Shared local content adapter.
 * Can later be replaced with CMS/API.
 */
export async function loadBlogArticles() {
  return Promise.all(
    Object.entries(markdownModules).map(async ([path, loadModule]) => {
      const source = await loadModule();
      return parseMarkdownFrontmatter(source, getSlugFromPath(path));
    })
  );
}

export async function loadBlogArticle(slug) {
  const normalizedSlug = normalizeBlogSlug(slug);

  const entry = Object.entries(markdownModules).find(
    ([path]) => getSlugFromPath(path) === normalizedSlug
  );

  if (!entry) {
    throw new BlogArticleNotFoundError(normalizedSlug);
  }

  const [, loadModule] = entry;
  const markdown = await loadModule();

  return parseMarkdownFrontmatter(markdown, normalizedSlug);
}