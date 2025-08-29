import { Link } from "react-router-dom";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 max-w-none">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 justify-items-center">
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
              src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef"
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

          {/* ezEMRx Case Study */}
          <Link
            to="/case-studies/ezemrx-redesigning-ehr"
            className="group relative animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-1100 w-full max-w-[600px]"
          >
            <img
              src="/ipad.png"
              alt="ezEMRx - EHR for Public Health"
              className="w-full aspect-square object-cover rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
              <div className="text-center text-white transform transition-all duration-500">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-1 sm:mb-2 tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px]">
                  ezEMRx
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-normal opacity-90 tracking-[-0.15px] sm:tracking-[-0.2px]">
                  EHR for Public Health
                </p>
                <div className="mt-1 sm:mt-2 text-xs font-medium opacity-75">
                  Click to view case study →
                </div>
              </div>
            </div>
          </Link>

          {/* MoneyFarm Case Study */}
          <Link
            to="/case-studies/moneyfarm-ai-powered-personal-finance"
            className="group relative animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-1300 w-full max-w-[600px]"
          >
            <img
              src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="MoneyFarm - AI-Powered Personal Finance Manager"
              className="w-full aspect-square object-cover rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
              <div className="text-center text-white transform transition-all duration-500">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-1 sm:mb-2 tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px]">
                  MoneyFarm
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-normal opacity-90 tracking-[-0.15px] sm:tracking-[-0.2px]">
                  AI-Powered Personal Finance Manager
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
    </div>
  );
}
