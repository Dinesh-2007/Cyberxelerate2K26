import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 50, startDelay = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    
    const typeText = () => {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        setIsComplete(true);
      }
    };

    if (displayedText.length === 0) {
      // Initial delay before starting
      timeout = setTimeout(typeText, startDelay);
    } else {
      typeText();
    }

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed, startDelay]);

  return { displayedText, isComplete };
};
