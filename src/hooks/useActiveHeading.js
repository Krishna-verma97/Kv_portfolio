import { useEffect, useState } from "react";

export function useActiveHeading(headings) {
  const [activeHeadingId, setActiveHeadingId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length) {
      setActiveHeadingId("");
      return undefined;
    }

    const updateActiveHeading = () => {
      const currentHeading = headings.reduce((activeHeading, heading) => {
        const element = document.getElementById(heading.id);
        return element && element.getBoundingClientRect().top <= 155 ? heading : activeHeading;
      }, headings[0]);

      setActiveHeadingId(currentHeading.id);
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  return activeHeadingId;
}
