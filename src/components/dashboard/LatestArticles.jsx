import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import DashboardSection from "./DashboardSection";
import { useKnowledgeArticleSummaries } from "../../hooks/useKnowledgeArticleSummaries";
import { useBlogArticles } from "../../hooks/useBlogArticles";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  const knowledgeArticles = useKnowledgeArticleSummaries();
  const { articles: blogArticles } = useBlogArticles();

  const latestArticles = [
    ...knowledgeArticles.map((a) => ({
      ...a,
      source: "Knowledge",
    })),
    ...blogArticles.map((a) => ({
      ...a,
      source: "Blog",
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.lastUpdated || b.date) -
        new Date(a.lastUpdated || a.date)
    )
    .slice(0, 6);

  return (
    <DashboardSection
      icon={Newspaper}
      title="Latest Articles"
      subtitle="Fresh engineering notes, tutorials and blog posts."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {latestArticles.map((article) => (
          <ArticleCard
            key={`${article.source}-${article.slug}`}
            article={article}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          to="/knowledge"
          className="rounded-xl border border-emerald-500 px-5 py-3 font-medium transition hover:bg-emerald-500 hover:text-white"
        >
          Browse Knowledge →
        </Link>

        <Link
          to="/blog"
          className="rounded-xl border border-indigo-500 px-5 py-3 font-medium transition hover:bg-indigo-500 hover:text-white"
        >
          Read Blog →
        </Link>
      </div>
    </DashboardSection>
  );
}