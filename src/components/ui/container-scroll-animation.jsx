"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * CSS-only Container Scroll Animation
 * Replaces Framer Motion useScroll/useTransform with Intersection Observer
 * Uses CSS transitions triggered by scroll position
 */
export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    
    // Debounced resize handler
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn(
        "scroll-card-container h-[60rem] flex items-center justify-center relative p-2 md:p-20 pt-52 md:pt-64",
        isVisible && "is-visible"
      )}
    >
      <div
        className="mt-30 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header titleComponent={titleComponent} isVisible={isVisible} />
        <Card isVisible={isVisible} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent, isVisible }) => {
  return (
    <div
      className={cn(
        "scroll-header div max-w-5xl mx-auto text-center transition-transform duration-700 ease-out",
        isVisible && "is-visible"
      )}
      style={{
        transform: isVisible ? "translateY(-100px)" : "translateY(0)",
      }}
    >
      {titleComponent}
    </div>
  );
};

export const Card = ({ children, isVisible, isMobile }) => {
  const scale = isMobile ? (isVisible ? 0.9 : 0.7) : (isVisible ? 1 : 1.05);
  const rotateX = isVisible ? 0 : 20;

  return (
    <div
      className="scroll-card max-w-md -mt-12 mx-auto sm:h-[30rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl dark:shadow-[0_0_#0000001a,0_2px_5px_#0000001a,0_9px_9px_#0000001a,0_21px_12px_#0000001a,0_37px_15px_#0000001a,0_58px_16px_#0000001a] transition-transform duration-700 ease-out"
      style={{
        transform: `rotateX(${rotateX}deg) scale(${scale})`,
        transformOrigin: "center bottom",
      }}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </div>
  );
};
