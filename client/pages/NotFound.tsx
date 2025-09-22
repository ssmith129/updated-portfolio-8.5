import { useEffect } from "react";
import Navigation, { SkipLink } from "../components/Navigation";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

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
    </div>
  );
};

export default NotFound;
