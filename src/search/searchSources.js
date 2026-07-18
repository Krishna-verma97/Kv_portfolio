import { PROJECT_SEARCH_DOCUMENTS } from "../data/projects";
import { loadKnowledgeArticles } from "../utils/knowledgeContent";
import { loadBlogArticles } from "../utils/blogContent";
import { AI_SEARCH_DOCUMENTS } from "../data/ai";

export async function loadSearchSources() {
  const [knowledgeArticles, blogArticles] = await Promise.all([
    loadKnowledgeArticles(),
    loadBlogArticles(),
  ]);

  return [
    ...AI_SEARCH_DOCUMENTS,
    ...PROJECT_SEARCH_DOCUMENTS,

    ...knowledgeArticles.map((article) => ({
      ...article,
      source: "Knowledge",
      url: `/knowledge/${article.slug}`,
    })),

    ...blogArticles.map((article) => ({
      ...article,
      source: "Blog",
      url: `/blog/${article.slug}`,
    })),
  ];
}