"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={cn("pin-container relative group/pin cursor-pointer", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: isHovered 
              ? "translate(-50%,-50%) rotateX(40deg) scale(0.8)"
              : "translate(-50%,-50%) rotateX(0deg) scale(1)",
          }}
          className="pin-card absolute left-1/2 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white dark:bg-black border border-gray-300 dark:border-white/[0.1] group-hover/pin:border-gray-400 dark:group-hover/pin:border-white/[0.2] transition-all duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} isHovered={isHovered} />
    </Link>
  );
};

export const PinPerspective = ({ title, isHovered }) => {
  return (
    <div 
      className={cn(
        "pin-perspective pointer-events-none w-96 h-80 flex items-center justify-center z-[60] transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <span className="relative flex space-x-2 items-center z-10 rounded-full bg-gray-200 dark:bg-zinc-950 py-0.5 px-4 ring-1 ring-gray-300 dark:ring-white/10">
            <span className="relative z-20 text-black dark:text-white text-xs font-medium inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </span>
        </div>

        {/* Perspective effect with CSS-only pulse rings */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {/* CSS-only pulse rings - no infinite JS animations */}
          <div className="pulse-ring" />
          <div className="pulse-ring" />
          <div className="pulse-ring" />
        </div>
      </div>

      {/* Pin line effects */}
      <div 
        className={cn(
          "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px blur-[2px] transition-all duration-500",
          isHovered ? "h-40" : "h-20"
        )}
      />
      <div 
        className={cn(
          "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px transition-all duration-500",
          isHovered ? "h-40" : "h-20"
        )}
      />
      <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
      <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
    </div>
  );
};
