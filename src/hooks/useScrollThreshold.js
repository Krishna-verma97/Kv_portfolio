import { useEffect, useState } from "react";

export function useScrollThreshold(threshold) {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false);

  useEffect(() => {
    const updateThresholdState = () => setHasPassedThreshold(window.scrollY > threshold);

    updateThresholdState();
    window.addEventListener("scroll", updateThresholdState, { passive: true });

    return () => window.removeEventListener("scroll", updateThresholdState);
  }, [threshold]);

  return hasPassedThreshold;
}
