"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-only Starfield component - replaces heavy tsparticles library
 * Uses pure CSS with radial gradients for a lightweight twinkling star effect
 * Saves ~200KB of JavaScript and eliminates continuous canvas rendering
 */
export const SparklesCore = ({
  className,
  background = "transparent",
}) => {
  return (
    <div
      className={cn("starfield", className)}
      style={{ background }}
      aria-hidden="true"
    />
  );
};

export default SparklesCore;
