import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import {
  resetPageAnimations,
  initializePageAnimations,
  applyReducedMotion,
} from "../lib/animation-utils";

interface PageAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component that handles animation resets on page navigation
 * - Forces animation restart on route changes
 * - Prevents animation flicker on page loads
 * - Ensures consistent animation behavior
 * - Respects user motion preferences
 */
export default function PageAnimationWrapper({
  children,
  className = "",
}: PageAnimationWrapperProps) {
  const location = useLocation();

  // Initialize animations on mount
  useEffect(() => {
    initializePageAnimations();
  }, []);

  // Reset animations on route change
  useEffect(() => {
    // Small delay to ensure route has fully changed
    const timeoutId = setTimeout(() => {
      resetPageAnimations();
      applyReducedMotion(); // Reapply motion preferences
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  // Listen for motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionChange = () => {
      applyReducedMotion();
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className={`page-animation-wrapper ${className}`}>{children}</div>
  );
}
