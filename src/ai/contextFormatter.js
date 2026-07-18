export function formatContext(results) {
  return results.map((doc) => ({
    title: doc.title,
    source: doc.source,
    category: doc.category,
    description: doc.description,
    content: doc.content,
  }));
}