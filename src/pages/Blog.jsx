import { useMemo, useState } from "react";
import BlogCategories from "../components/blog/BlogCategories";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import BlogCard from "../components/blog/BlogCard";
import { useBlogArticles } from "../hooks/useBlogArticles";
import SEO from "../components/seo/SEO";
import { Link } from "react-router-dom";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { articles, isLoading } = useBlogArticles();

  const featuredArticle = useMemo(
    () => articles.find((article) => article.featured),
    [articles]
  );

//   const latestArticles = useMemo(() => {
//     return articles.filter((article) => !article.featured);
//   }, [articles]);

const filteredArticles = useMemo(() => {
  let list = articles.filter((article) => !article.featured);

  if (activeCategory !== "all") {
    list = list.filter(
      (article) =>
        article.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  return list;
}, [articles, activeCategory]);

const categories = useMemo(() => {
  return [
    {
      id: "all",
      label: "All",
      count: articles.length,
    },

    {
      id: "career",
      label: "Career",
      count: articles.filter(
        (a) => a.category === "Career"
      ).length,
    },

    {
      id: "aws",
      label: "AWS",
      count: articles.filter(
        (a) => a.category === "AWS"
      ).length,
    },

    {
      id: "docker",
      label: "Docker",
      count: articles.filter(
        (a) => a.category === "Docker"
      ).length,
    },

    {
      id: "react",
      label: "React",
      count: articles.filter(
        (a) => a.category === "React"
      ).length,
    },

    {
      id: "linux",
      label: "Linux",
      count: articles.filter(
        (a) => a.category === "Linux"
      ).length,
    },
  ];
}, [articles]);

  return (
    <>
    <SEO
  title="Developer Blog | Krishna Verma"
  description="Engineering articles, tutorials, career experiences and development notes."
/>
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Developer Blog
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Articles, tutorials, engineering experiences and career notes.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10">
          <BlogCategories
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Featured Blog */}
        {!isLoading && featuredArticle && (
          <FeaturedBlog article={featuredArticle} />
        )}

        {/* Latest Articles */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Latest Articles
          </h2>

          {filteredArticles.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                More blog articles coming soon...
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <BlogCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          )}
        </section>

        {/* Knowledge Base CTA */}
<div className="mt-20 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 p-10 text-center">

  <h2 className="text-3xl font-bold">
    Looking for technical documentation?
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
    Explore my Knowledge Base for detailed notes on React, Docker, Linux,
    AWS, DevOps, Git, JavaScript, and software engineering concepts.
  </p>

  <Link
    to="/knowledge"
    className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
  >
    📚 Explore Knowledge Base →
  </Link>

</div>

      </div>
    </section>
    </>
  );
}