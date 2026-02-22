/**
 * Animation utility functions to handle page refresh and navigation issues
 */

/**
 * Reset all animations on the page
 * Useful for page refreshes and route changes
 */
export function resetPageAnimations(): void {
  const animatedElements = document.querySelectorAll('[class*="animate-in"]');

  animatedElements.forEach((element) => {
    const htmlElement = element as HTMLElement;

    // Simply reset animation by triggering a reflow
    // Remove animation classes temporarily
    htmlElement.style.animation = "none";

    // Force reflow to reset the animation
    htmlElement.offsetHeight;

    // Re-enable animations
    htmlElement.style.animation = "";
  });
}

/**
 * Add staggered animation delays to elements
 * @param selector - CSS selector for elements to animate
 * @param baseDelay - Base delay in milliseconds
 * @param increment - Delay increment between elements
 */
export function addStaggeredDelays(
  selector: string,
  baseDelay: number = 300,
  increment: number = 200,
): void {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    const htmlElement = element as HTMLElement;
    const delay = baseDelay + index * increment;
    htmlElement.style.animationDelay = `${delay}ms`;
  });
}

/**
 * Check if animations should be reduced based on user preferences
 */
export function shouldReduceMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Apply reduced motion settings to animations
 */
export function applyReducedMotion(): void {
  if (!shouldReduceMotion()) return;

  const animatedElements = document.querySelectorAll('[class*="animate-in"]');

  animatedElements.forEach((element) => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.animationDuration = "0.01ms";
    htmlElement.style.animationDelay = "0s";
    htmlElement.style.transitionDuration = "0.01ms";
  });
}

/**
 * Ensure animations are properly initialized on page load
 */
export function initializePageAnimations(): void {
  // Apply reduced motion if needed
  applyReducedMotion();
}
