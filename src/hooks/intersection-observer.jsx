import { useEffect } from "react";
import { useActiveSection, useActiveSectionContext } from "@/context/active-section";

export function useSectionObserver(sectionId, sectionName) {
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    const sectionElement = document.getElementById(sectionId);

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [sectionId, sectionName, setActiveSection, timeOfLastClick]);
}
