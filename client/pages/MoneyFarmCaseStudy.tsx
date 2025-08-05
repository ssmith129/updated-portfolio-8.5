import { Link } from "react-router-dom";

export default function MoneyFarmCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px]">
            Sean Smith
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
            37.7749° N, 122.4194° W
          </p>
        </div>

        <div className="bg-white rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] flex items-center flex-wrap gap-1 w-full sm:w-auto justify-center">
          <Link
            to="/"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-colors"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-colors"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[120px]">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-4 sm:mb-6 md:mb-8">
            MoneyFarm
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] xl:tracking-[-0.28px] max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto">
            AI-Powered Personal Finance Manager
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <figure className="w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] shadow-lg hover:shadow-xl transition-all duration-500 group">
            <img
              src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="MoneyFarm AI-Powered Personal Finance Manager Dashboard Interface"
              className="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-105"
              width={1920}
              height={1080}
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/20 transition-all duration-500"></div>
          </div>
          <figcaption className="text-center text-sm text-[#9FA0A3] mt-4 px-4">
            MoneyFarm's AI-powered dashboard interface showcasing intelligent financial insights and personalized recommendations
          </figcaption>
        </figure>
      </div>

      {/* TL;DR Summary */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-sm">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-6 sm:mb-8 md:mb-10">
            TL;DR Summary
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4">
                The Challenge
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px]">
                Personal finance management tools were complex, intimidating, and failed to provide actionable insights. Users struggled with scattered financial data, unclear spending patterns, and lack of personalized guidance for achieving their financial goals.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4">
                The Solution
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px]">
                Created an AI-powered personal finance platform that automatically categorizes transactions, provides intelligent insights, and delivers personalized financial recommendations. The interface transforms complex financial data into clear, actionable guidance through intuitive visualizations and natural language explanations.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4">
                Key Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-[#F5F5F5] rounded-[12px] sm:rounded-[15px] p-4 sm:p-6">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#131417] mb-2">
                    73%
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FA0A3]">
                    Increase in user financial goal achievement
                  </p>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] sm:rounded-[15px] p-4 sm:p-6">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#131417] mb-2">
                    4.2x
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FA0A3]">
                    Higher engagement vs. traditional finance apps
                  </p>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] sm:rounded-[15px] p-4 sm:p-6">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#131417] mb-2">
                    92%
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FA0A3]">
                    User satisfaction with AI recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-6 sm:mb-8">
            Project Overview
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  My Role
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  Lead Product Designer responsible for UX research, interface design, and AI interaction patterns. Collaborated with data scientists and engineers to create intuitive AI-powered financial experiences.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  Timeline
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  8 months from concept to launch (2023)
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  Team
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  Product Designer (me), 2 Engineers, 1 Data Scientist, 1 Product Manager
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  Key Features Designed
                </h3>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  <li>• AI-powered transaction categorization</li>
                  <li>• Intelligent spending insights dashboard</li>
                  <li>• Personalized financial goal tracking</li>
                  <li>• Smart budgeting recommendations</li>
                  <li>• Natural language financial advisor chat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="https://github.com/ssmith129" className="hover:text-gray-300 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sean-smith-sf/" className="hover:text-gray-300 transition-colors">
                LinkedIn
              </a>
              <a href="https://www.behance.net/ssmit129" className="hover:text-gray-300 transition-colors">
                Behance
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Sean Smith. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}