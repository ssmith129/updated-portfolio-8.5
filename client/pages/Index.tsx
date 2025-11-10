import { Link } from "react-router-dom";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      {/* Hero Section */}
      <main
        id="main-content"
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-20 xl:pt-[120px] xl:pb-[80px]"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-in fade-in-0 zoom-in-95 duration-1000 delay-500">
            <div className="relative group">
              <img
                src="/6796fa1806617a432bd2b97b-HeadshotPro_Original.PNG"
                alt="Sean Smith - Senior Product Designer headshot"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] group-hover:to-black/10 transition-all duration-500"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-1.3px] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-700">
              UX/Product Designer
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-normal text-[#131417] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] xl:tracking-[-0.28px] mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] transition-all duration-300 hover:text-[#2a2a2a] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-900">
              7+ years creating intuitive, scalable UX for complex SaaS
              platforms. I specialize in{" "}
              <Link
                to="/about"
                className="text-[#131417] hover:text-[#2a2a2a] underline underline-offset-4 decoration-2 hover:decoration-[#2a2a2a] transition-all duration-300"
                aria-label="Learn more about Sean's AI integration expertise"
              >
                AI-integrated systems
              </Link>{" "}
              that streamline workflows and drive decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-1100">
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#131417] text-white text-lg font-medium rounded-[25px] hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-opacity-50 touch-manipulation"
                aria-label="View Sean Smith's UX design case studies and portfolio projects"
              >
                View My Work
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#131417] text-[#131417] text-lg font-medium rounded-[25px] hover:bg-[#131417] hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-opacity-50 touch-manipulation"
                aria-label="Learn more about Sean Smith's background and experience"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Work Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Selected work from{" "}
            <Link
              to="/case-studies/computis-crypto-tax-engine"
              className="text-[#9FA0A3] hover:text-[#131417] underline underline-offset-2 decoration-1 transition-all duration-300"
              aria-label="View crypto platform design case study"
            >
              healthcare
            </Link>
            ,{" "}
            <Link
              to="/case-studies/moneyfarm-ai-powered-personal-finance"
              className="text-[#9FA0A3] hover:text-[#131417] underline underline-offset-2 decoration-1 transition-all duration-300"
              aria-label="View fintech platform design case study"
            >
              fintech
            </Link>
            , and{" "}
            <Link
              to="/case-studies"
              className="text-[#9FA0A3] hover:text-[#131417] underline underline-offset-2 decoration-1 transition-all duration-300"
              aria-label="View B2B SaaS design case studies"
            >
              B2B SaaS platforms
            </Link>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          {/* Computis Project */}
          <Link
            to="/case-studies/computis-crypto-tax-engine"
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-900 touch-manipulation w-full max-w-[600px] mx-auto"
            aria-label="View Computis crypto tax engine case study - enterprise SaaS platform for CPAs"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
                alt="Computis - Crypto Tax Engine Dashboard"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-2 transition-all duration-300">
                  Computis
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px]">
                  Crypto Tax Engine
                </p>
              </div>
            </div>
          </Link>

          {/* Symplify Project */}
          <Link
            to="/case-studies/symplify-hospital-management-system"
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-right-6 duration-1000 delay-1100 touch-manipulation w-full max-w-[600px] mx-auto"
            aria-label="View Symplify hospital management system case study - comprehensive healthcare platform"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F36b7682859c14dd1b07433f39f2c1c11?format=webp&width=800"
                alt="Symplify - Hospital Management System"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-2 transition-all duration-300">
                  Symplify
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px]">
                  Hospital Management System
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 text-base sm:text-lg font-medium text-[#131417] hover:text-[#2a2a2a] border-2 border-[#131417] hover:border-[#2a2a2a] px-6 py-3 rounded-[25px] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-opacity-50"
            aria-label="View all UX design case studies in Sean's portfolio"
          >
            <span>View All Projects</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-900">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              7+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              Years Experience
            </p>
          </div>

          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1100">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              50+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              Projects Delivered
            </p>
          </div>

          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1300">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              18+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              Awards & Mentions
            </p>
          </div>

          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1500">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              $18M+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              SaaS Revenue Impact
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white/50">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Design Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Specialized skills in creating intuitive experiences for complex
            systems.{" "}
            <Link
              to="/about"
              className="text-[#9FA0A3] hover:text-[#131417] underline underline-offset-2 decoration-1 transition-all duration-300"
              aria-label="Learn more about Sean's design approach and methodology"
            >
              Learn more about my approach
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-in fade-in-0 zoom-in-95 duration-1000 delay-900">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              AI-Powered Design
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              ML Integration, AI Workflows, Usability Enhancement
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-in fade-in-0 zoom-in-95 duration-1000 delay-1100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Design Systems
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Scalable component libraries and design tokens for consistency
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-in fade-in-0 zoom-in-95 duration-1000 delay-1300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Rapid Prototyping
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Interactive prototypes and production-ready designs in Figma and
              code
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
