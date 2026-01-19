"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-black/20 hover:bg-black/10 transition-all duration-300 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-hidden p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      
      {/* Animated gradient border using CSS */}
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-50"
        )}
        style={{
          background: hovered
            ? "radial-gradient(75% 180% at 50% 50%, #3275F8 0%, transparent 100%)"
            : "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, transparent 100%)",
          filter: "blur(2px)",
        }}
      />
      
      {/* Inner background */}
      <div className="bg-black absolute z-1 inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

