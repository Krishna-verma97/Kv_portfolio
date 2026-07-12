import { getMarkdownHeadings } from "../utils/markdownHeadings";
import { tokenize, uniqueTokens } from "./tokenizer";

const toStringList = (value) =>
  Array.isArray(value) ? value.filter(Boolean).map(String) : [];

/**
 * Converts an article from Markdown, a CMS, or another provider into one stable
 * searchable document shape. Search-only token data is kept separate from UI data.
 */
export function createSearchDocument(article, tokenizerOptions) {
  const content = article.content ?? article.markdown ?? "";
  const headings = toStringList(article.headings).length
    ? toStringList(article.headings)
    : getMarkdownHeadings(content).map(({ text }) => text);
  const tags = toStringList(article.tags);
  const commands = toStringList(article.commands);
  const examples = toStringList(article.examples);
  const resources = toStringList(article.resources);
  const interviewQuestions = toStringList(article.interviewQuestions);
  const suppliedKeywords = toStringList(article.keywords);
  const keywords = uniqueTokens(
    [
      ...suppliedKeywords,
      ...tags,
      ...commands,
      ...examples,
      ...resources,
      ...interviewQuestions,
      article.category ?? "",
      ...headings,
    ].flatMap((value) => tokenize(value, tokenizerOptions)),
  );

  const document = {
    id: article.id ?? article.slug,
    slug: article.slug,
    title: article.title ?? "",
    description: article.description ?? "",
    category: article.category ?? "",
    tags,
    difficulty: article.difficulty ?? "",
    headings,
    commands,
    examples,
    resources,
    interviewQuestions,
    keywords,
    content,
    readingTime: article.readingTime ?? "",
    lastUpdated: article.lastUpdated ?? "",
    source: article.source ?? "local",
    url: article.url ?? `/${article.slug}`,
  };

  return {
    ...document,
    searchTokens: {
      title: tokenize(document.title, tokenizerOptions),
      description: tokenize(document.description, tokenizerOptions),
      category: tokenize(document.category, tokenizerOptions),
      tags: tokenize(document.tags.join(" "), tokenizerOptions),
      commands: tokenize(document.commands.join(" "), tokenizerOptions),
      examples: tokenize(document.examples.join(" "), tokenizerOptions),
      resources: tokenize(document.resources.join(" "), tokenizerOptions),
      interviewQuestions: tokenize(
        document.interviewQuestions.join(" "),
        tokenizerOptions,
      ),
      headings: tokenize(document.headings.join(" "), tokenizerOptions),
      keywords: tokenize(document.keywords.join(" "), tokenizerOptions),
      content: tokenize(document.content, tokenizerOptions),
    },
  };
}

/** Builds an immutable-style local index once; callers can safely reuse it for every query. */
export function buildSearchIndex(articles = [], tokenizerOptions) {
  const documents = articles.map((article) =>
    createSearchDocument(article, tokenizerOptions),
  );

  return {
    documents,
    bySlug: new Map(documents.map((document) => [document.slug, document])),
  };
}
