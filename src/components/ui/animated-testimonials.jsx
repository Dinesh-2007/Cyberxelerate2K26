"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-only Animated Testimonials
 * Replaces Framer Motion AnimatePresence with CSS transitions
 * Eliminates word-by-word blur animation for better performance
 */
export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const getRandomRotation = (index) => {
    const rotations = [-8, 5, -5, 8, -3, 6, -6, 3];
    return rotations[index % rotations.length];
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Image Stack */}
        <div>
          <div className="relative h-80 w-full">
            {testimonials.map((testimonial, index) => {
              const isActive = index === active;
              const rotation = isActive ? 0 : getRandomRotation(index);
              
              return (
                <div
                  key={testimonial.src}
                  className={cn(
                    "testimonial-image absolute inset-0 origin-bottom",
                    isActive ? "active" : "inactive"
                  )}
                  style={{
                    "--rotate": `${rotation}deg`,
                    transform: isActive 
                      ? "scale(1) rotate(0deg)" 
                      : `scale(0.95) rotate(${rotation}deg)`,
                    opacity: isActive ? 1 : 0.7,
                    zIndex: isActive ? 999 : testimonials.length - index,
                  }}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between flex-col py-4">
          <div
            key={active}
            className="testimonial-content entering"
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button disabled:opacity-50"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button disabled:opacity-50"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
