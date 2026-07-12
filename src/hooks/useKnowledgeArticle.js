import { useEffect, useState } from "react";
import { loadKnowledgeArticle } from "../utils/knowledgeContent";

export function useKnowledgeArticle(slug) {
  const [state, setState] = useState({ article: null, error: null, isLoading: true });

  useEffect(() => {
    let isCurrentRequest = true;

    setState({ article: null, error: null, isLoading: true });

    loadKnowledgeArticle(slug)
      .then((article) => {
        if (isCurrentRequest) setState({ article, error: null, isLoading: false });
      })
      .catch((error) => {
        if (isCurrentRequest) setState({ article: null, error, isLoading: false });
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [slug]);

  return state;
}
