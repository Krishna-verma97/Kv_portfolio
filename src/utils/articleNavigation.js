export function getArticleNavigation(currentArticle, articles) {
  const orderedArticles = [...articles].sort((first, second) => first.slug.localeCompare(second.slug));
  const currentIndex = orderedArticles.findIndex((article) => article.slug === currentArticle?.slug);

  if (currentIndex === -1) {
    return { previousArticle: null, nextArticle: null };
  }

  return {
    previousArticle: orderedArticles[currentIndex - 1] ?? null,
    nextArticle: orderedArticles[currentIndex + 1] ?? null,
  };
}
