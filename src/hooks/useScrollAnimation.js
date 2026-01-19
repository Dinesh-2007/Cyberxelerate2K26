"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Lightweight Intersection Observer hook for scroll-triggered animations
 * Replaces Framer Motion's whileInView with pure CSS class toggling
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin, default "0px"
 * @param {boolean} options.once - Only trigger once, default true
 * @param {boolean} options.disabled - Disable animations (for reduced motion), default false
 * @returns {Object} - { ref, isVisible }
 */
export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  disabled = false,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (disabled || (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasTriggered.current) return;
          setIsVisible(true);
          hasTriggered.current = true;
          
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, disabled]);

  return { ref, isVisible };
}

/**
 * Hook for multiple elements with staggered animations
 * 
 * @param {number} count - Number of elements
 * @param {Object} options - Same options as useScrollAnimation
 * @returns {Array} - Array of { ref, isVisible } objects
 */
export function useScrollAnimationGroup(count, options = {}) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const refs = useRef([]);
  const hasTriggered = useRef(new Set());

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)));
      return;
    }

    const observers = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasTriggered.current.has(index)) {
            hasTriggered.current.add(index);
            // Stagger the visibility
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * 100);
            
            if (options.once !== false) {
              observer.unobserve(element);
            }
          }
        },
        { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || "0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count, options.threshold, options.rootMargin, options.once]);

  const setRef = useCallback((index) => (el) => {
    refs.current[index] = el;
  }, []);

  return {
    setRef,
    isVisible: (index) => visibleItems.has(index),
  };
}

/**
 * Simple hook to detect if reduced motion is preferred
 * @returns {boolean}
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);
    
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Debounced scroll position hook (for scroll-linked animations)
 * @param {number} delay - Debounce delay in ms, default 10
 * @returns {number} - Current scroll progress (0-1)
 */
export function useScrollProgress(delay = 10) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
        setProgress(Math.min(1, Math.max(0, scrollProgress)));
        timeoutId = null;
      }, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return progress;
}

export default useScrollAnimation;
