import { useState, useEffect } from "react";
import Navigation, { SkipLink } from "../components/Navigation";
import { useLocation, Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

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

      <div className="flex items-center justify-center min-h-[calc(100vh-140px)] px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#131417]">
            404
          </h1>
          <p className="text-lg sm:text-xl text-[#9FA0A3] mb-6 sm:mb-8">
            Oops! Page not found
          </p>
          <Link
            to="/"
            className="text-[#131417] hover:text-[#2a2a2a] underline text-base sm:text-lg transition-colors duration-200 font-medium"
          >
            Return to Home
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
};

export default NotFound;
