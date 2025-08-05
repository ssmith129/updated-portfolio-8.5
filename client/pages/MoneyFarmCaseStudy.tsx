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
          <Link
            to="/case-studies"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-[150px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[160px]">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-normal text-[#131417] leading-[150%] sm:leading-[160%] md:leading-[170%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.8px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-0.6px]">
            MoneyFarm – AI-Powered Personal Finance Manager
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
            Revolutionizing personal finance management through AI-driven insights and automated budgeting. Designed an intelligent platform that helps users achieve financial goals through personalized recommendations and smart spending analysis.
          </p>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
        <figure className="relative w-full">
          <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] border-2 border-dashed border-green-200 hover:border-green-300 transition-all duration-500 hover:shadow-lg group">
            <div className="aspect-video flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
              {/* Finance Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-green-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 md:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-green-600">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Placeholder Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 text-center leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] transition-all duration-300">
                MoneyFarm Dashboard Hero Image
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9FA0A3] text-center max-w-lg leading-relaxed tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Personal finance dashboard showing AI-powered insights, budget tracking, and investment recommendations
              </p>
            </div>
            
            {/* Placeholder Image */}
            <img 
              src="/api/placeholder/1920/1080" 
              alt="MoneyFarm Personal Finance Dashboard - AI-powered financial management interface showing budget tracking, spending analysis, investment recommendations, and automated savings goals with intelligent insights"
              className="absolute inset-0 w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] opacity-0"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
          </div>
          
          <figcaption className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#9FA0A3] text-center italic leading-relaxed tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
            MoneyFarm AI-powered personal finance dashboard with intelligent budgeting and investment insights
          </figcaption>
        </figure>
      </div>

      {/* TL;DR Summary */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
        <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-sm hover:shadow-md transition-all duration-300">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-6 sm:mb-8 md:mb-10 transition-all duration-300 hover:tracking-[-0.4px]">
            TL;DR Summary
          </h2>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
              <div className="w-full sm:w-[200px] flex-shrink-0">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                  Challenge
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  Users struggled with fragmented financial tools, lack of personalized insights, and difficulty achieving long-term financial goals due to complex budgeting processes and reactive money management approaches.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
              <div className="w-full sm:w-[200px] flex-shrink-0">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                  Solution
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  Designed an AI-powered personal finance platform that provides intelligent budgeting, automated savings recommendations, investment insights, and proactive financial coaching through machine learning algorithms.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
              <div className="w-full sm:w-[200px] flex-shrink-0">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                  Impact
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  65% increase in user savings rate, 45% improvement in budget adherence, and 80% user retention rate with users achieving financial goals 3x faster than traditional methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Journey Workflow Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-4 sm:mb-6 md:mb-8 transition-all duration-300 hover:tracking-[-0.4px]">
            Financial Management Workflow
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[800px] transition-all duration-300 hover:text-[#131417]">
            An intelligent system that automates financial planning while providing personalized insights to help users build wealth and achieve their financial objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-items-center">
          {/* Account Setup */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-blue-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Account Setup
            </h3>
            
            <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">✏️</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      User Action
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Connect bank accounts and set financial goals with security verification
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">😊</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Emotion
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] transition-all duration-300 hover:text-[#131417]">
                      Optimistic
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 text-sm sm:text-base">●</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Pain Point
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Security concerns and complexity of financial data aggregation
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">📱</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Touchpoint
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Secure onboarding flow with bank-grade encryption
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">⭐</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Opportunity
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      One-click account linking with transparent security measures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-orange-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              AI Analysis
            </h3>
            
            <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">✏️</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      User Action
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      System analyzes spending patterns and generates personalized insights
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-yellow-500 text-sm sm:text-base">🤔</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Emotion
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] transition-all duration-300 hover:text-[#131417]">
                      Curious
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 text-sm sm:text-base">●</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Pain Point
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Overwhelming data and difficulty understanding financial patterns
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">📱</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Touchpoint
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Interactive dashboard with visual spending analytics
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">⭐</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Opportunity
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Simplified insights with actionable recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Creation */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-green-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Smart Budgeting
            </h3>
            
            <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">✏️</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      User Action
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Create automated budgets with AI-suggested allocations and limits
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">😊</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Emotion
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] transition-all duration-300 hover:text-[#131417]">
                      Confident
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 text-sm sm:text-base">●</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Pain Point
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Traditional budgeting tools are rigid and don't adapt to lifestyle changes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">📱</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Touchpoint
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Dynamic budget interface with smart category suggestions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">⭐</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Opportunity
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Adaptive budgets that learn and adjust to user behavior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Insights */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-purple-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Investment Insights
            </h3>
            
            <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">✏️</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      User Action
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Receive personalized investment recommendations based on risk profile
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">😍</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Emotion
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] transition-all duration-300 hover:text-[#131417]">
                      Excited
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 text-sm sm:text-base">●</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Pain Point
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Complex investment options and fear of making wrong decisions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">📱</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Touchpoint
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Educational investment platform with risk assessment tools
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">⭐</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Opportunity
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      AI-powered portfolio optimization with clear explanations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goal Tracking */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-teal-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Goal Achievement
            </h3>
            
            <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">✏️</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      User Action
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Track progress toward financial goals with automated milestone celebrations
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">😍</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Emotion
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] transition-all duration-300 hover:text-[#131417]">
                      Accomplished
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 text-sm sm:text-base">●</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Pain Point
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Lack of motivation and difficulty seeing long-term progress
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-500 text-sm sm:text-base">📱</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Touchpoint
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-2 transition-all duration-300 hover:text-[#131417]">
                      Gamified progress tracking with achievement rewards
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-sm sm:text-base">⭐</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Opportunity
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Social sharing and community challenges for motivation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
        <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-sm hover:shadow-md transition-all duration-300">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-6 sm:mb-8 md:mb-10 transition-all duration-300 hover:tracking-[-0.4px]">
            Impact & Results
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1300">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                65%
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Increase in User Savings Rate
              </p>
            </div>

            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1500">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                45%
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Improvement in Budget Adherence
              </p>
            </div>

            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1700">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                80%
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                User Retention Rate
              </p>
            </div>

            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1900">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                3x
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Faster Goal Achievement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[270px]"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2300">
            <span className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              <span className="font-normal">37.7749° N, 122.4194° W</span>
            </span>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[44px] order-1 lg:order-2">
              <a
                href="https://www.behance.net/ssmit129"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] min-h-[44px] flex items-center touch-manipulation"
              >
                Behance
              </a>
              <a
                href="https://github.com/ssmith129"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] min-h-[44px] flex items-center touch-manipulation"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sean-smith-sf/"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] min-h-[44px] flex items-center touch-manipulation"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center touch-manipulation"
              >
                License
              </a>
              <a
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center touch-manipulation"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}