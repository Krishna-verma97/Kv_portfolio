import { useEffect, useState } from "react";
import { loadBlogArticle } from "../utils/blogContent";

export function useBlogArticle(slug) {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await loadBlogArticle(slug);

        if (!ignore) {
          setArticle(data);
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
  }, [slug]);

  return {
    article,
    isLoading,
    error,
  };
}