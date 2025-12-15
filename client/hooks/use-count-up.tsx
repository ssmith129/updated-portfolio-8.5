import { useEffect, useState } from "react";

/**
 * Hook for counting up animations
 * - Smoothly animates numbers from 0 to target value
 * - Supports decimal values
 * - Triggers when `shouldStart` is true
 * - Supports optional delay before animation starts
 */
export function useCountUp(
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false,
  delay: number = 0,
  decimals: number = 0,
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;

    const startAnimation = () => {
      setHasStarted(true);
      const startTime = Date.now();
      const startValue = 0;

      // Easing function for smooth animation
      const easeOutQuart = (t: number): number => {
        return 1 - Math.pow(1 - t, 4);
      };

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeOutQuart(progress);
        const current = startValue + (end - startValue) * easedProgress;

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    };

    if (delay > 0) {
      const timeoutId = setTimeout(startAnimation, delay);
      return () => clearTimeout(timeoutId);
    } else {
      startAnimation();
    }
  }, [shouldStart, end, duration, delay, hasStarted]);

  return decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
}
