import { BookOpen, LoaderCircle, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

import ArticleHeader from "../components/knowledge/ArticleHeader";
import ArticleBreadcrumb from "../components/knowledge/ArticleBreadcrumb";
import ArticleNavigation from "../components/knowledge/ArticleNavigation";
import RelatedArticles from "../components/knowledge/RelatedArticles";
import MarkdownRenderer from "../components/knowledge/MarkdownRenderer";
import StickyArticleHeader from "../components/knowledge/StickyArticleHeader";
import TableOfContents from "../components/knowledge/TableOfContents";
import BackToTopButton from "../components/knowledge/BackToTopButton";
import ReadingProgressBar from "../components/knowledge/ReadingProgressBar";

function ArticleState({ icon: Icon, title, description, backLink }) {
  return (
    <section className="w-full bg-white px-4 pb-12 pt-8 text-black dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-4xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center dark:border-gray-700 dark:bg-gray-800/70">
        <Icon className="mx-auto size-7 text-emerald-600 dark:text-emerald-400" />

        <h1 className="mt-3 text-2xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          {description}
        </p>

        <Link
          to={backLink}
          className="mt-5 inline-block font-semibold text-emerald-500"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
}

export default function ArticleLayout({
  article,
  headings,
  readingProgress,
  articleSummaries,
  articleRef,
  isLoading,
  error,
  notFoundError,
  backLink = "/knowledge",
  backTitle = "Knowledge Base",
}) {
  if (isLoading) {
    return (
      <ArticleState
        icon={LoaderCircle}
        title="Loading..."
        description="Preparing article..."
        backLink={backLink}
      />
    );
  }

  if (error instanceof notFoundError) {
    return (
      <ArticleState
        icon={BookOpen}
        title="Article Not Found"
        description="This article doesn't exist."
        backLink={backLink}
      />
    );
  }

  if (error) {
    return (
      <ArticleState
        icon={TriangleAlert}
        title="Something went wrong"
        description="Unable to load article."
        backLink={backLink}
      />
    );
  }

  return (
    <>
      <ReadingProgressBar progress={readingProgress} />

      <StickyArticleHeader article={article} />

      <article
        ref={articleRef}
        className="w-full bg-white px-4 pb-12 pt-8 text-black dark:bg-gray-900 dark:text-white"
      >
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6">

          <TableOfContents headings={headings} />

          <div className="max-w-4xl rounded-xl border border-gray-200 bg-gray-50/90 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/90 md:p-8">

           <ArticleBreadcrumb
  article={article}
  baseTitle={backTitle}
  baseLink={backLink}
/>

            <ArticleHeader
  article={article}
  variant={backLink === "/blog" ? "blog" : "knowledge"}
/>

            <MarkdownRenderer markdown={article.markdown} />

            <RelatedArticles
    article={article}
    articles={articleSummaries}
    type={backLink === "/blog" ? "blog" : "knowledge"}
/>
            <ArticleNavigation
    article={article}
    articles={articleSummaries}
    type={backLink === "/blog" ? "blog" : "knowledge"}
/>

          </div>

        </div>
      </article>

      <BackToTopButton />
    </>
  );
}