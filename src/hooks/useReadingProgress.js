import { useEffect, useState } from "react";

export function useReadingProgress(contentRef, enabled) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled || !contentRef.current) {
      setProgress(0);
      return undefined;
    }

    const updateProgress = () => {
      const content = contentRef.current;
      if (!content) return;

      const contentTop = content.getBoundingClientRect().top + window.scrollY;
      const scrollableDistance = Math.max(content.offsetHeight - window.innerHeight, 1);
      const currentPosition = window.scrollY - contentTop;
      const nextProgress = Math.min(100, Math.max(0, (currentPosition / scrollableDistance) * 100));

      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [contentRef, enabled]);

  return progress;
}
