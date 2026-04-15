import { useEffect, ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  resetPageAnimations,
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
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Reset animations on route change only
  useEffect(() => {
    // Clear any existing timeout to prevent multiple resets
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Small delay to ensure route has fully changed
    timeoutRef.current = setTimeout(() => {
      resetPageAnimations();
      applyReducedMotion();
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [location.pathname]);

  // One-time setup for motion preferences
  useEffect(() => {
    applyReducedMotion();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => applyReducedMotion();

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  return (
    <div className={`page-animation-wrapper ${className}`}>{children}</div>
  );
}
