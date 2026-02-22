import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to manage page animations and fix refresh/navigation issues
 * - Resets animations on route changes
 * - Handles animation state properly
 * - Provides intersection observer for scroll-triggered animations
 */
export function usePageAnimations() {
  const location = useLocation();
  const [animationsReady, setAnimationsReady] = useState(true);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();

  // Reset animations on route change
  useEffect(() => {
    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    // Temporarily disable animations during route change
    setAnimationsReady(false);

    // Re-enable animations after a brief delay
    animationTimeoutRef.current = setTimeout(() => {
      setAnimationsReady(true);
    }, 150);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  return { animationsReady };
}

/**
 * Hook for intersection observer animations
 * - Prevents animations from running until element is in view
 * - Handles cleanup properly
 */
export function useIntersectionAnimation(
  threshold: number = 0.1,
  rootMargin: string = "0px 0px -50px 0px",
) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasAnimated]);

  // Reset on route changes via location
  const location = useLocation();
  useEffect(() => {
    setIsVisible(false);
    setHasAnimated(false);
  }, [location.pathname]);

  return { elementRef, isVisible, hasAnimated };
}

/**
 * Hook for staggered animations with proper timing
 * - Manages animation delays for multiple elements
 * - Prevents animations from running until page is ready
 */
export function useStaggeredAnimations(
  baseDelay: number = 300,
  increment: number = 200,
) {
  const { animationsReady } = usePageAnimations();
  const [animationStates, setAnimationStates] = useState<boolean[]>([]);

  const getAnimationDelay = (index: number) => {
    return animationsReady ? baseDelay + index * increment : 0;
  };

  const getAnimationClass = (index: number, baseClasses: string = "") => {
    if (!animationsReady) {
      return baseClasses;
    }

    return `${baseClasses} animate-in fade-in-0 slide-in-from-bottom-6 duration-1000`;
  };

  return {
    animationsReady,
    getAnimationDelay,
    getAnimationClass,
  };
}
