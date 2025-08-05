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
          <div className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            MoneyFarm Case Study
          </div>
        </div>
      </nav>

      {/* Case Study Content */}
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <span className="inline-flex px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-green-200">
              Fintech • AI • Personal Finance • Mobile App
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-2.88px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-2px]">
            MoneyFarm – AI-Powered Personal Finance Manager
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] lg:max-w-[800px] transition-all duration-300 hover:text-[#131417]">
            Designing an intelligent personal finance app that uses AI to provide personalized investment advice, automate savings, and simplify wealth management for everyday users.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <figure className="relative w-full max-w-[1200px] mx-auto group">
            <div className="relative aspect-video bg-gradient-to-br from-green-50 via-blue-50 to-green-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-green-100">
              <img
                src="/api/placeholder/1920/1080"
                alt="MoneyFarm AI-powered personal finance manager dashboard showing investment recommendations and automated savings features"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                width={1920}
                height={1080}
                loading="eager"
                decoding="async"
              />
              
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 sm:p-6 md:p-8 shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <figcaption className="text-center mt-4 sm:mt-6 text-sm sm:text-base text-[#9FA0A3] transition-all duration-300 hover:text-[#131417]">
              MoneyFarm dashboard interface showcasing AI-powered financial insights and automated wealth management
            </figcaption>
          </figure>
        </div>

        {/* TL;DR Summary */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              TL;DR Summary
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    The Challenge
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    Personal finance management is overwhelming for most users, with complex investment options, unclear saving strategies, and lack of personalized guidance leading to poor financial decisions.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    The Solution
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    AI-powered personal finance platform that provides intelligent investment recommendations, automated savings optimization, spending insights, and personalized financial coaching in an intuitive mobile-first interface.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    The Impact
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    85% increase in user savings rate, 60% improvement in investment portfolio performance, 40% reduction in financial stress levels, and 200% increase in financial goal achievement.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <span className="bg-[#131417] text-white px-3 sm:px-4 py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↑ 85% Savings Rate
                </span>
                <span className="bg-[#131417] text-white px-3 sm:px-4 py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↑ 60% Portfolio Performance
                </span>
                <span className="bg-[#131417] text-white px-3 sm:px-4 py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↓ 40% Financial Stress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Project Overview
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] mb-6 sm:mb-8 md:mb-10 transition-all duration-300 hover:text-[#2a2a2a]">
              MoneyFarm addresses the complexity and intimidation factor of personal finance management by leveraging AI to provide personalized, actionable financial guidance. The platform combines automated investing, smart savings optimization, and educational resources to make wealth building accessible to users regardless of their financial expertise level.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-6 sm:pl-8 md:pl-10 bg-green-50 py-4 sm:py-6 md:py-8 rounded-r-lg">
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] italic transition-all duration-300 hover:text-[#2a2a2a]">
                "We're democratizing wealth management by making sophisticated financial strategies accessible to everyone."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Key Features */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
              AI-Powered Financial Features
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
              Intelligent features that simplify complex financial decisions and automate wealth building
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-1300">
              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Smart Investment Recommendations
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      AI analyzes user's financial profile, risk tolerance, and goals to provide personalized investment recommendations with clear explanations and projected outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Automated Savings Optimization
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      Machine learning algorithms identify optimal savings opportunities by analyzing spending patterns and automatically transferring funds to high-yield accounts during ideal market conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-in fade-in-0 slide-in-from-right-6 duration-1000 delay-1500">
              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-purple-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Intelligent Spending Analytics
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      Advanced analytics engine categorizes expenses, identifies spending patterns, and provides actionable insights to optimize budgets and increase savings potential through behavioral nudges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-orange-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Personalized Financial Coaching
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      AI-powered coaching system provides personalized financial education, goal-setting guidance, and milestone celebrations to keep users motivated and on track toward their financial objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
              MoneyFarm Tech Stack
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
              Cutting-edge technologies powering the MoneyFarm personal finance platform
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              React Native
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              TensorFlow
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Python
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              PostgreSQL
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Plaid API
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              AWS
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Stripe
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Redis
            </span>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
              MoneyFarm Financial Impact
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
                Measurable improvements in user financial health and wealth-building success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              
              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-2100">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  85%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Increase in Savings Rate
                </p>
              </div>

              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-2300">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  60%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Portfolio Performance Boost
                </p>
              </div>

              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-2500">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  40%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Reduction in Financial Stress
                </p>
              </div>

              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-2700">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  200%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Goal Achievement Rate
                </p>
              </div>
            </div>

            <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2900">
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[800px] mx-auto transition-all duration-300 hover:text-[#2a2a2a]">
                "MoneyFarm has completely transformed how I think about money. The AI recommendations are spot-on, and I'm finally confident about my financial future."
              </p>
              <div className="mt-4 sm:mt-6 md:mt-8">
                <p className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] transition-all duration-300 hover:text-[#131417]">
                  Sarah Johnson, Early User
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-3100">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-1.8px]">
              Interested in Fintech UX?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
              <Link
                to="/case-studies"
                className="bg-[#131417] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] text-base sm:text-lg md:text-xl lg:text-[20px] font-medium tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105 hover:tracking-[-0.3px] min-h-[44px] flex items-center touch-manipulation"
              >
                View More Case Studies
              </Link>
              
              <Link
                to="/about"
                className="border border-[#131417] text-[#131417] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] text-base sm:text-lg md:text-xl lg:text-[20px] font-medium tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105 hover:tracking-[-0.3px] min-h-[44px] flex items-center touch-manipulation"
              >
                Learn About My Process
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-3500">
            <span className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
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