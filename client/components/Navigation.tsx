import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
  description: string;
  ariaLabel: string;
}

const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Sean Smith's UX/Product Designer Portfolio",
    ariaLabel: "Go to homepage - Sean Smith's portfolio",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "UX Design Projects & Case Studies",
    ariaLabel: "View UX design case studies and project portfolio",
  },
  {
    label: "About",
    href: "/about",
    description: "About Sean Smith - UX Designer",
    ariaLabel: "Learn about Sean Smith's background and experience",
  },
];

export default function Navigation({ className = "" }: NavigationProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCurrentPage = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect if we're on a dark-themed page (Computis case study)
  const isDarkPage = location.pathname.includes("/computis");

  // Detect if we're on a healthcare-themed page (Symplify case study)
  const isHealthcarePage = location.pathname.includes("/symplify");

  return (
    <nav
      className={`flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo/Brand */}
      <div className="flex flex-col">
        <Link
          to="/"
          className="group"
          aria-label="Sean Smith - UX/Product Designer - Go to homepage"
        >
          <h1
            className={`text-lg sm:text-xl md:text-2xl lg:text-xl font-medium leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] ${
              isDarkPage
                ? "text-white group-hover:text-[#00D4FF]"
                : isHealthcarePage
                  ? "text-[#0F172A] group-hover:text-[#3B82F6]"
                  : "text-[#131417] group-hover:text-[#2a2a2a]"
            }`}
          >
            Sean Smith
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-base font-medium leading-normal tracking-[-0.16px] transition-colors duration-300 ${
              isDarkPage
                ? "text-[#888888] hover:text-[#CCCCCC]"
                : isHealthcarePage
                  ? "text-[#64748B] hover:text-[#3B82F6]"
                  : "text-[#9FA0A3] hover:text-[#131417]"
            }`}
          >
            San Francisco, CA
          </p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] items-center flex-wrap gap-1 transition-all duration-300 hover:scale-[1.02] touch-manipulation ${
          isDarkPage
            ? "bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#00D4FF]/20 shadow-xl hover:border-[#00D4FF]/40"
            : isHealthcarePage
              ? "bg-white/90 backdrop-blur-sm border border-[#E2E8F0] shadow-lg hover:shadow-xl"
              : "bg-white shadow-sm hover:shadow-md"
        }`}
      >
        {navigationItems.map((item) => {
          const current = isCurrentPage(item.href);

          return current ? (
            <div
              key={item.href}
              className={`px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:scale-105 ${
                isDarkPage
                  ? "bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] hover:from-[#00FFB3] hover:to-[#00D4FF]"
                  : isHealthcarePage
                    ? "bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white hover:from-[#2563EB] hover:to-[#059669]"
                    : "bg-[#131417] text-white hover:bg-[#2a2a2a]"
              }`}
              aria-current="page"
              title={item.description}
            >
              {item.label}
            </div>
          ) : (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                isDarkPage
                  ? "text-[#CCCCCC] hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] focus:ring-[#00D4FF]"
                  : isHealthcarePage
                    ? "text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] focus:ring-[#3B82F6]"
                    : "text-[#131417] hover:bg-gray-50 focus:ring-[#131417]"
              }`}
              aria-label={item.ariaLabel}
              title={item.description}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 shadow-lg rounded-b-[20px] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        } ${
          isDarkPage
            ? "bg-[#1A1A1A]/95 backdrop-blur-xl border border-[#00D4FF]/20"
            : isHealthcarePage
              ? "bg-white/95 backdrop-blur-xl border border-[#E2E8F0]"
              : "bg-white"
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="px-4 py-6 space-y-3">
          {navigationItems.map((item) => {
            const current = isCurrentPage(item.href);

            return current ? (
              <div
                key={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-[20px] text-center ${
                  isDarkPage
                    ? "text-[#0A0A0A] bg-gradient-to-r from-[#00D4FF] to-[#0080FF]"
                    : isHealthcarePage
                      ? "text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981]"
                      : "text-white bg-[#131417]"
                }`}
                aria-current="page"
                title={item.description}
              >
                {item.label}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-[20px] transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  isDarkPage
                    ? "text-[#CCCCCC] hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] focus:ring-[#00D4FF]"
                    : isHealthcarePage
                      ? "text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] focus:ring-[#3B82F6]"
                      : "text-[#131417] hover:bg-gray-50 focus:ring-[#131417]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={item.ariaLabel}
                title={item.description}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

// Skip link component for accessibility
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#131417] text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      Skip to main content
    </a>
  );
}
