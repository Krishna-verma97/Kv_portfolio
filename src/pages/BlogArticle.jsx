import { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";

import ArticleLayout from "../layouts/ArticleLayout";

import { useBlogArticle } from "../hooks/useBlogArticle";
import { useBlogArticles } from "../hooks/useBlogArticles";
import { useReadingProgress } from "../hooks/useReadingProgress";

import { KnowledgeArticleNotFoundError } from "../utils/knowledgeContent";
import { getMarkdownHeadings } from "../utils/markdownHeadings";
import SEO from "../components/seo/SEO";

export default function BlogArticle() {
  const params = useParams();
  const slug = params.slug ?? params["*"];

  const { article, error, isLoading } = useBlogArticle(slug);
  const { articles } = useBlogArticles();

  const articleRef = useRef(null);

  const readingProgress = useReadingProgress(
    articleRef,
    Boolean(article)
  );

  const headings = useMemo(
    () => getMarkdownHeadings(article?.markdown),
    [article?.markdown]
  );

  return (
    <>
    <SEO
  title={`${article?.title ?? "Blog"} | Krishna Verma`}
  description={article?.description}
  keywords={article?.tags?.join(", ")}
  image={article?.cover || "/og-image.png"}
  type="article"
/>
    <ArticleLayout
      article={article}
      headings={headings}
      readingProgress={readingProgress}
      articleSummaries={articles}
      articleRef={articleRef}
      isLoading={isLoading}
      error={error}
      notFoundError={KnowledgeArticleNotFoundError}
      backLink="/blog"
      backTitle="Blog"
    />
    </>
  );
}