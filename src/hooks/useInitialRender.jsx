import { useState, useEffect } from "react";

export function useInitialRender(duration = 1000) {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialRender(false), duration);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [duration]);

  return isInitialRender;
}
