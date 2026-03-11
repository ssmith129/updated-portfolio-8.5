import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";

export default function CaseStudies() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.5px]">
            Case Studies
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto transition-all duration-300 hover:text-[#131417] px-4">
            Explore detailed breakdowns of my design process, challenges, and
            solutions across various projects.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 justify-items-center max-w-[1200px] mx-auto">
          {/* Computis Case Study */}
          <Link
            to="/case-studies/computis-crypto-tax-engine"
            className="group relative animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-700 w-full max-w-[600px]"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
              alt="Computis - Crypto Tax Engine"
              className="w-full aspect-square object-cover rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
              <div className="text-center text-white transform transition-all duration-500">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-1 sm:mb-2 tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px]">
                  Computis
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-normal opacity-90 tracking-[-0.15px] sm:tracking-[-0.2px]">
                  Crypto Tax Engine
                </p>
                <div className="mt-1 sm:mt-2 text-xs font-medium opacity-75">
                  Click to view case study →
                </div>
              </div>
            </div>
          </Link>

          {/* Symplify Case Study */}
          <Link
            to="/case-studies/symplify-hospital-management-system"
            className="group relative animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-900 w-full max-w-[600px]"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fd7cb2f4478da4f3cb93988612843c887"
              alt="Symplify - Hospital Management System"
              className="w-full aspect-square object-cover rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
              <div className="text-center text-white transform transition-all duration-500">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-1 sm:mb-2 tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px]">
                  Symplify
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-normal opacity-90 tracking-[-0.15px] sm:tracking-[-0.2px]">
                  Hospital Management System
                </p>
                <div className="mt-1 sm:mt-2 text-xs font-medium opacity-75">
                  Click to view case study →
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      <div className="fixed bottom-20 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative pointer-events-none">
          <button
            onClick={scrollToTop}
            className={`absolute right-4 sm:right-8 lg:right-12 p-4 rounded-full bg-[#131417] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-offset-2 pointer-events-auto ${
              showScrollTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16 pointer-events-none"
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
