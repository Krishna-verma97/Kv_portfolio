import { useEffect, useState } from "react";
import { loadKnowledgeArticleSummaries } from "../utils/knowledgeContent";

export function useKnowledgeArticleSummaries() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let isCurrentRequest = true;

    loadKnowledgeArticleSummaries().then((summaries) => {
      if (isCurrentRequest) setArticles(summaries);
    });

    return () => {
      isCurrentRequest = false;
    };
  }, []);

  return articles;
}
