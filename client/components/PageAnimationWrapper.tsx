import { useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component that handles animation resets on page navigation
 * - Forces animation restart on route changes
 * - Prevents animation flicker on page loads
 * - Ensures consistent animation behavior
 */
export default function PageAnimationWrapper({ 
  children, 
  className = '' 
}: PageAnimationWrapperProps) {
  const location = useLocation();

  useEffect(() => {
    // Force reflow to restart animations
    const triggerReflow = () => {
      const elements = document.querySelectorAll('[class*="animate-in"]');
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        // Force animation restart by removing and re-adding animation classes
        const classes = htmlElement.className;
        htmlElement.className = classes.replace(/animate-in[^\\s]*/g, '');
        // Use requestAnimationFrame to ensure DOM has updated
        requestAnimationFrame(() => {
          htmlElement.className = classes;
        });
      });
    };

    // Small delay to ensure route has fully changed
    const timeoutId = setTimeout(triggerReflow, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return (
    <div className={`page-animation-wrapper ${className}`}>
      {children}
    </div>
  );
}
