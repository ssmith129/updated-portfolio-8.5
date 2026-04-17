import React, { useEffect, useState } from "react";

export interface StickySectionNavItem {
  href: string;
  label: string;
  group?: string;
}

interface StickySectionNavProps {
  items: StickySectionNavItem[];
  activeSection?: string;
  /** Scroll Y offset (px) at which the nav becomes fixed. Defaults to 300. */
  stickyThreshold?: number;
  /**
   * Visual variant.
   * - "symplify": pill links with blue active state (matches existing Symplify look)
   * - "computis": neutral pill links with accent hover (matches Computis look)
   */
  variant?: "symplify" | "computis";
}

export default function StickySectionNav({
  items,
  activeSection = "",
  stickyThreshold = 300,
  variant = "symplify",
}: StickySectionNavProps) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > stickyThreshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyThreshold]);

  // Reserve space when the nav becomes fixed so the page doesn't jump.
  return (
    <>
      <div
        className={`${
          isFixed
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-sym-divider"
            : "relative bg-white/80 backdrop-blur-md border-b border-sym-divider shadow-sm"
        } z-40 transition-all duration-300 hidden md:block`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Case study sections"
            className="flex items-center justify-center gap-1.5 overflow-x-auto py-1.5 scrollbar-hide
                       relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-gradient-to-r before:from-white/80 before:to-transparent before:z-10 before:pointer-events-none
                       after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-white/80 after:to-transparent after:z-10 after:pointer-events-none"
          >
            {items.map((item, i) => {
              const prev = items[i - 1];
              const showSeparator =
                prev && prev.group && item.group && prev.group !== item.group;
              const isActive = activeSection === item.href.replace("#", "");

              const baseClasses =
                "shrink-0 inline-flex items-center justify-center h-7 px-3 rounded-[4px] text-[12px] leading-none font-medium focus-visible:outline-none focus-visible:ring-2 transition-all duration-200 shadow-sm border";

              const variantClasses =
                variant === "computis"
                  ? isActive
                    ? "bg-precision-accent/10 text-precision-accent border-precision-accent/30 focus-visible:ring-precision-accent"
                    : "bg-white text-precision-text-secondary border-[#E3E8EF] hover:bg-precision-accent/10 hover:text-precision-accent hover:border-precision-accent/30 focus-visible:ring-precision-accent"
                  : isActive
                    ? "bg-sym-blue/10 text-sym-blue border-sym-blue/30 focus-visible:ring-sym-blue"
                    : "bg-white/80 text-sym-body border-sym-card-border hover:bg-sym-blue/10 hover:text-sym-blue hover:border-sym-blue/30 focus-visible:ring-sym-blue";

              return (
                <React.Fragment key={item.href}>
                  {showSeparator && (
                    <div className="w-px h-3 bg-sym-card-border flex-shrink-0" />
                  )}
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`${baseClasses} ${variantClasses}`}
                  >
                    {item.label}
                  </a>
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Spacer to prevent content jump when nav becomes fixed */}
      {isFixed && <div aria-hidden="true" className="hidden md:block h-[40px]" />}
    </>
  );
}
