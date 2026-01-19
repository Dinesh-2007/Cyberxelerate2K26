"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-only Moving Border Button - replaces Framer Motion useAnimationFrame
 * Uses CSS conic-gradient animation for smooth border effect
 * Eliminates per-frame JavaScript calculations
 */
export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "moving-border-container relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* Animated border using CSS conic-gradient */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), transparent 60%, #0ea5e9 80%, transparent 100%)`,
          animation: "gradientRotate 2s linear infinite",
        }}
      />
      
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-[1px] rounded-[inherit] opacity-80",
          borderClassName
        )}
        style={{
          background: "radial-gradient(circle at center, rgba(14, 165, 233, 0.4) 0%, transparent 70%)",
        }}
      />
      
      {/* Content */}
      <div
        className={cn(
          "moving-border-content relative flex items-center justify-center w-full h-full text-sm antialiased text-white rounded-[inherit]",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = Button;
