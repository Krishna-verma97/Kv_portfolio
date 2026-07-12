import { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";

import ArticleLayout from "../layouts/ArticleLayout";

import { useKnowledgeArticle } from "../hooks/useKnowledgeArticle";
import { useKnowledgeArticleSummaries } from "../hooks/useKnowledgeArticleSummaries";
import { useReadingProgress } from "../hooks/useReadingProgress";

import { KnowledgeArticleNotFoundError } from "../utils/knowledgeContent";
import { getMarkdownHeadings } from "../utils/markdownHeadings";
import SEO from "../components/seo/SEO";

export default function KnowledgeArticle() {
  const params = useParams();
  const slug = params.slug ?? params["*"];

  const { article, error, isLoading } = useKnowledgeArticle(slug);

  const articleSummaries = useKnowledgeArticleSummaries();

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
  title={`${article?.title ?? "Knowledge"} | Krishna Verma`}
  description={article?.description}
  keywords={article?.tags?.join(", ")}
  type="article"
/>
    <ArticleLayout
      article={article}
      headings={headings}
      readingProgress={readingProgress}
      articleSummaries={articleSummaries}
      articleRef={articleRef}
      isLoading={isLoading}
      error={error}
      notFoundError={KnowledgeArticleNotFoundError}
      backLink="/knowledge"
      backTitle="Knowledge Base"
    />
    </>
  );
}