import { Link } from "react-router-dom";

export default function ComputisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px]">
            Sean Smith
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
            San Francisco, CA
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
            Computis
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] xl:tracking-[-0.28px] max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto">
            Crypto Tax Engine
          </p>
        </div>

        {/* Hero Image */}
        <figure className="w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] shadow-lg hover:shadow-xl transition-all duration-500 group">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
              alt="Computis Crypto Tax Engine Dashboard Interface"
              className="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-105"
              width={1920}
              height={1080}
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/20 transition-all duration-500"></div>
          </div>
          <figcaption className="text-center text-sm text-[#9FA0A3] mt-4 px-4">
            Computis crypto tax automation platform dashboard showcasing transaction analysis and tax reporting features
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
                Crypto tax compliance was complex, time-consuming, and error-prone. Accountants and traders struggled with manual transaction categorization, unclear tax rules, and fragmented data across multiple exchanges and wallets.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4">
                The Solution
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px]">
                Created an automated crypto tax engine that streamlines transaction import, applies intelligent categorization rules, and generates compliant tax reports. The platform transforms complex blockchain data into clear, actionable tax insights for professionals and institutions.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4">
                Key Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-[#F5F5F5] rounded-[12px] sm:rounded-[15px] p-4 sm:p-6">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#131417] mb-2">
                    45%
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FA0A3]">
                    Reduction in onboarding time
                  </p>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] sm:rounded-[15px] p-4 sm:p-6">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#131417] mb-2">
                    32%
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FA0A3]">
                    Increase in conversion rate
                  </p>
                </div>
                <div className="bg-[#F5F5F5] rounded-[12px] sm:rounded-[15px] p-4 sm:p-6">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#131417] mb-2">
                    85%
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FA0A3]">
                    Reduction in developer reliance
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
                  Senior Product Designer responsible for end-to-end UX design, user research, and design system development. Led design for crypto tax automation workflows and self-serve onboarding experiences.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  Timeline
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  18 months from concept to production launch (2023-Present)
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  Team
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  Product Designer (me), 3 Engineers, 1 Tax Expert, 1 Product Manager, 1 Founder
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-tight mb-3 sm:mb-4">
                  Key Features Designed
                </h3>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.6em]">
                  <li>• Automated transaction import and categorization</li>
                  <li>• AI-powered tax rule engine</li>
                  <li>• Self-serve onboarding workflows</li>
                  <li>• Professional tax reporting dashboard</li>
                  <li>• Multi-jurisdiction compliance tools</li>
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