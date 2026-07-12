const normalizeValue = (value = "") => value.toLocaleLowerCase();

const getSharedTagCount = (firstTags = [], secondTags = []) => {
  const secondTagSet = new Set(secondTags.map(normalizeValue));
  return firstTags.filter((tag) => secondTagSet.has(normalizeValue(tag))).length;
};

export function getRelatedArticles(currentArticle, articles, limit = 4) {
  if (!currentArticle) return [];

  return articles
    .filter((article) => article.slug !== currentArticle.slug)
    .map((article) => {
      const sharedTagCount = getSharedTagCount(currentArticle.tags, article.tags);
      const categoryMatches = normalizeValue(article.category) === normalizeValue(currentArticle.category);
      const difficultyMatches = article.difficulty === currentArticle.difficulty;
      const score = (categoryMatches ? 4 : 0) + (difficultyMatches ? 2 : 0) + sharedTagCount;

      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score || first.article.title.localeCompare(second.article.title))
    .slice(0, limit)
    .map(({ article }) => article);
}
