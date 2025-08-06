import { Link } from "react-router-dom";

export default function MoneyFarmCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center">
          <Link
            to="/"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Home
          </Link>
          <div className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            Case Studies
          </div>
          <Link
            to="/about"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Hero Image Placeholder */}
      <figure className="w-full max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
        <div className="relative aspect-video w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <img 
            src="https://via.placeholder.com/1920x1080/f3f4f6/9ca3af?text=Hero+Image+Placeholder" 
            alt="MoneyFarm - AI-Powered Personal Finance Hero Image" 
            className="w-full h-full object-cover opacity-0"
            onLoad={(e) => e.target.style.opacity = '1'}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">Hero Image Placeholder</h3>
              <p className="text-sm text-gray-500">1920 × 1080 recommended</p>
            </div>
          </div>
        </div>
      </figure>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.3px]">
            MoneyFarm - AI-Powered Personal Finance
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[600px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Revolutionizing personal finance management through intelligent AI-driven insights and automation.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            This case study showcases the design of MoneyFarm, an AI-powered personal finance platform that 
            helps users make smarter financial decisions through automated analysis and personalized recommendations.
          </p>
          
          <h2>Challenge</h2>
          <p>
            Personal finance management remains complex for most users, with scattered financial data across 
            multiple platforms and a lack of actionable insights. Users needed a centralized solution that 
            could provide intelligent recommendations based on their unique financial situations.
          </p>
          
          <h2>Solution</h2>
          <p>
            I designed an intuitive dashboard that aggregates financial data from multiple sources and presents 
            AI-generated insights in an easily digestible format. The interface emphasizes visual data representation 
            and provides clear, actionable recommendations for improving financial health.
          </p>
          
          <h2>Results</h2>
          <ul>
            <li>70% improvement in user financial goal achievement</li>
            <li>45% increase in user engagement with financial planning tools</li>
            <li>55% reduction in time spent on manual financial tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}