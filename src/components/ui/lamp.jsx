"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function LampDemo() {
  return (
    <LampContainer>
      <h1 className="mt-8 bg-transparent py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 dark:text-opacity-90 md:text-7xl animate-fade-up">
        Build lamps <br /> the right way
      </h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "lamp-container relative flex min-h-screen flex-col items-center justify-center backdrop-blur-sm w-full rounded-md z-0 text-gray-950 dark:text-gray-50 dark:text-opacity-90",
        isVisible && "is-visible",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center">
        {/* Left Gradient */}
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="lamp-gradient-left absolute inset-auto right-1/2 h-56 bg-gradient-conic from-cyan-400 via-transparent to-transparent dark:from-cyan-500 dark:via-gray-900 dark:to-transparent z-10 [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute left-0 bottom-0 h-40 w-full bg-gray-50 dark:bg-gray-900 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>

        {/* Right Gradient */}
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="lamp-gradient-right absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-cyan-400 dark:via-gray-900 dark:to-cyan-500 z-10 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute right-0 bottom-0 h-40 w-full bg-gray-50 dark:bg-gray-900 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>

        {/* Base Shadows */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-gray-50 dark:bg-gray-900 blur-2xl z-0" />
        <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md z-0" />

        {/* Glow Effects */}
        <div className="absolute z-10 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-400 dark:bg-cyan-500 opacity-50 blur-3xl" />
        <div className="lamp-glow absolute z-10 h-36 -translate-y-[6rem] rounded-full bg-cyan-500 dark:bg-cyan-400 blur-2xl" />
        <div className="lamp-line absolute z-10 h-0.5 -translate-y-[7rem] bg-cyan-400 dark:bg-cyan-300" />

        {/* Top Cover */}
        <div className="absolute z-10 h-44 w-full bg-gray-50 dark:bg-gray-900 -translate-y-[13rem]" />
      </div>

      {/* Content Area */}
      <div className="relative z-50 flex -translate-y-16 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
