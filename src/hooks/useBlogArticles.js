import { useEffect, useState } from "react";
import { loadBlogArticles } from "../utils/blogContent";

export function useBlogArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await loadBlogArticles();

        if (!ignore) {
          setArticles(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    articles,
    isLoading,
    error,
  };
}