import { Link } from "react-router-dom";

export default function EzEMRxCaseStudy() {
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
            ezEMRx – Redesigning EHR for Real-World Public Health
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
            Transforming electronic health records for community health centers serving underserved populations. Designed an intuitive EHR system that streamlined patient management workflows and improved care delivery efficiency by 40%.
          </p>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
        <figure className="relative w-full">
          <div className="relative bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] border-2 border-dashed border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg group">
            <div className="aspect-video flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
              {/* Medical Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 md:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Placeholder Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 text-center leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] transition-all duration-300">
                ezEMRx Dashboard Hero Image
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9FA0A3] text-center max-w-lg leading-relaxed tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                EHR interface showing patient management dashboard and clinical workflow optimization
              </p>
            </div>
            
            {/* Placeholder Image */}
            <img 
              src="/api/placeholder/1920/1080" 
              alt="ezEMRx EHR Dashboard - Electronic health records interface showing patient management system, clinical workflows, appointment scheduling, and medical data visualization for community health centers"
              className="absolute inset-0 w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] opacity-0"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
          </div>
          
          <figcaption className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#9FA0A3] text-center italic leading-relaxed tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
            ezEMRx EHR system dashboard showing streamlined patient management and clinical workflows
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
                  Community health centers struggled with outdated EHR systems that hindered patient care delivery, created workflow inefficiencies, and failed to meet the unique needs of underserved populations.
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
                  Designed a comprehensive EHR system tailored for public health settings, focusing on streamlined patient workflows, integrated care coordination, and accessibility features for diverse patient populations.
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
                  40% improvement in care delivery efficiency, 35% reduction in documentation time, and enhanced patient satisfaction scores across participating health centers.
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
            Patient Care Workflow
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[800px] transition-all duration-300 hover:text-[#131417]">
            A streamlined workflow that reduces administrative burden while improving patient care quality and provider efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-items-center">
          {/* Patient Check-in */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-blue-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Patient Registration
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
                      Quick patient intake with insurance verification and medical history updates
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
                      Comfortable
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
                      Language barriers and complex forms for diverse patient populations
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
                      Multilingual kiosk interface with staff assistance
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
                      Multi-language support with visual aids and simplified forms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Assessment */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-orange-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Clinical Assessment
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
                      Provider conducts examination using structured templates and clinical decision support
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-yellow-500 text-sm sm:text-base">😐</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Emotion
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] transition-all duration-300 hover:text-[#131417]">
                      Focused
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
                      Complex medical histories and time constraints during patient visits
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
                      Tablet-based clinical forms with voice-to-text capabilities
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
                      Smart templates with predictive text and clinical alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Planning */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-green-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Treatment Planning
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
                      Create care plans with medication management and follow-up scheduling
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
                      Coordinating care across multiple providers and social services
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
                      Integrated care coordination platform with referral tracking
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
                      Automated care coordination with community health resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-purple-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Documentation
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
                      Complete visit notes with billing codes and quality measures
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
                      Satisfied
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 text-sm sm:text-base">●</span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#131417] leading-normal tracking-[-0.15px] sm:tracking-[-0.18px] transition-all duration-300 hover:tracking-[-0.12px]">
                      Pain Point
                    </p>
                    <p className="text-xs sm:text-sm md:test-base font-normal text-[#9FA0A3] leading-normal tracking-[-0.12px] sm:tracking-[-0.15px] line-clamp-3 transition-all duration-300 hover:text-[#131417]">
                      Time-consuming documentation requirements and billing complexity
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
                      Voice-enabled documentation with auto-coding assistance
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
                      AI-powered documentation and automated quality reporting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow-up Care */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:bg-teal-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.3px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.25px]">
              Follow-up Care
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
                      Schedule follow-ups with automated patient outreach and reminders
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
                      Delighted
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
                      Patient no-shows and limited community resource connections
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
                      Patient portal with telehealth capabilities and community resources
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
                      Integrated social services referrals and transportation assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:px-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
        <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-sm hover:shadow-md transition-all duration-300">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-6 sm:mb-8 md:mb-10 transition-all duration-300 hover:tracking-[-0.4px]">
            Impact & Results
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1300">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                40%
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Improved Care Delivery Efficiency
              </p>
            </div>

            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1500">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                35%
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Reduction in Documentation Time
              </p>
            </div>

            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1700">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                85%
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Provider Satisfaction Rate
              </p>
            </div>

            <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1900">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
                25K+
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
                Patients Served Annually
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