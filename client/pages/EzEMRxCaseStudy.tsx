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
          <div className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            ezEMRx Case Study
          </div>
        </div>
      </nav>

      {/* Case Study Content */}
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <span className="inline-flex px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-blue-200">
              Healthcare • EHR Platform
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-2.88px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-2px]">
            ezEMRx – Redesigning EHR for Real-World Public Health
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] lg:max-w-[800px] transition-all duration-300 hover:text-[#131417]">
            Transforming electronic health records for public health agencies with streamlined workflows, better patient data management, and intuitive clinical interfaces.
          </p>
        </div>

        {/* Hero Image Placeholder - Added before TL;DR Summary */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <figure className="relative w-full max-w-[1200px] mx-auto group">
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-blue-100">
              <img
                src="/api/placeholder/1920/1080"
                alt="ezEMRx EHR dashboard showing patient management interface, clinical workflows, and public health data visualization"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                width={1920}
                height={1080}
                loading="eager"
                decoding="async"
              />
              
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 sm:p-6 md:p-8 shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <figcaption className="text-center mt-4 sm:mt-6 text-sm sm:text-base text-[#9FA0A3] transition-all duration-300 hover:text-[#131417]">
              ezEMRx dashboard interface showcasing streamlined patient management and clinical workflows
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
                    Public health agencies struggling with outdated EHR systems that hindered patient care, required extensive training, and created data silos between departments.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    The Solution
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    Complete UX redesign focusing on intuitive workflows, streamlined patient data entry, integrated clinical tools, and responsive design for mobile healthcare delivery.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    The Impact
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    60% reduction in data entry time, 45% faster patient processing, improved clinical decision-making, and enhanced interoperability across health departments.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <span className="bg-[#131417] text-white px-3 sm:px-4 py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↓ 60% Data Entry Time
                </span>
                <span className="bg-[#131417] text-white px-3 sm:px-4 py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↑ 45% Processing Speed
                </span>
                <span className="bg-[#131417] text-white px-3 sm:px-4 py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↑ 70% User Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey Workflow */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
              Clinical Workflow Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
              Streamlining patient care from initial registration through clinical documentation and treatment planning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-items-center">
            
            {/* Patient Registration */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px] xl:max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-700">
              <div className="bg-blue-500 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.3px]">
                Patient Registration
              </h3>
              
              <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#131417] leading-tight tracking-[-0.14px] sm:tracking-[-0.16px] line-clamp-2">
                      Streamlined patient intake with auto-populated demographics
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Simplified
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Duplicate entry prevention
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Mobile-first intake forms
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Insurance verification automation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Assessment */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px] xl:max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
              <div className="bg-green-500 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.3px]">
                Clinical Assessment
              </h3>
              
              <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#131417] leading-tight tracking-[-0.14px] sm:tracking-[-0.16px] line-clamp-2">
                      Guided clinical workflows with smart templates
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Confident
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Missing vital signs alerts
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Integrated vitals monitoring
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Care plan recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px] xl:max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation animate-in fade-in-0 slide-in-from-top-8 duration-1000 delay-1100">
              <div className="bg-purple-500 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.3px]">
                Documentation
              </h3>
              
              <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#131417] leading-tight tracking-[-0.14px] sm:tracking-[-0.16px] line-clamp-2">
                      Voice-to-text clinical notes with smart formatting
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Satisfied
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Time-consuming manual entry
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Template-based documentation
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Auto-save and recovery features
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Coordination */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px] xl:max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-1300">
              <div className="bg-orange-500 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-1.5-2.6M9 20h5V7a3 3 0 00-3-3H7a3 3 0 00-3 3v13h5zM9 7a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3v-3a3 3 0 00-3-3H9z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.3px]">
                Care Coordination
              </h3>
              
              <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#131417] leading-tight tracking-[-0.14px] sm:tracking-[-0.16px] line-clamp-2">
                      Seamless referral management across departments
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Delighted
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Fragmented care communication
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Real-time team messaging
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Automated follow-up scheduling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Reporting */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px] xl:max-w-[280px] min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-1500">
              <div className="bg-indigo-500 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 hover:tracking-[-0.3px]">
                Quality Reporting
              </h3>
              
              <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#131417] leading-tight tracking-[-0.14px] sm:tracking-[-0.16px] line-clamp-2">
                      Real-time quality metrics and compliance tracking
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Relieved
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Manual report compilation
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#131417] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-2">
                      Automated dashboard generation
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm font-normal text-[#9FA0A3] leading-tight tracking-[-0.12px] sm:tracking-[-0.14px] line-clamp-3">
                      Regulatory compliance alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Improvements */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
              Key Healthcare UX Improvements
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
              Design solutions that transformed clinical workflows and improved patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-1300">
              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Streamlined Clinical Workflows
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      Redesigned patient intake, assessment, and documentation processes to reduce clicks by 40% and eliminate redundant data entry. Implemented smart templates and context-aware forms that adapt to patient conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Enhanced Data Security & Privacy
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      Implemented HIPAA-compliant design patterns with role-based access controls, audit trails, and secure patient data handling. Created clear privacy indicators and user permissions management.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Mobile-First Clinical Experience
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      Designed responsive interfaces optimized for tablets and mobile devices used in field healthcare. Implemented offline capabilities and touch-friendly interactions for clinical staff working in various environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-orange-100 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                      Integrated Analytics & Reporting
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                      Built comprehensive dashboards for population health monitoring, quality metrics tracking, and regulatory compliance reporting. Automated data visualization and alert systems for proactive healthcare management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
              Healthcare Technology Stack
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
              Modern tools and frameworks used to build the ezEMRx healthcare platform
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              React Native
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Node.js
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              PostgreSQL
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              AWS Healthcare
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              FHIR API
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              HL7 Integration
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Redis Cache
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
              Elasticsearch
            </span>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.8px]">
                Healthcare Impact Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] max-w-[600px] lg:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
                Measurable improvements in clinical efficiency and patient care quality
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              
              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-1700">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  60%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Reduction in Data Entry Time
                </p>
              </div>

              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-1900">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  45%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Faster Patient Processing
                </p>
              </div>

              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-2100">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  70%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Increase in User Satisfaction
                </p>
              </div>

              <div className="text-center animate-in fade-in-0 zoom-in-95 duration-1000 delay-2300">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#131417] leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-3.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                  85%
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] lg:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  Reduction in Training Time
                </p>
              </div>
            </div>

            <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2500">
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[800px] mx-auto transition-all duration-300 hover:text-[#2a2a2a]">
                "The ezEMRx redesign transformed our clinical workflows and significantly improved both staff efficiency and patient care quality. Our providers can now focus more on patient care instead of fighting with the system."
              </p>
              <div className="mt-4 sm:mt-6 md:mt-8">
                <p className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] transition-all duration-300 hover:text-[#131417]">
                  Dr. Sarah Chen, Chief Medical Officer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2.4px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-1.8px]">
              Interested in Healthcare UX?
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
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2300">
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
              <span className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] min-h-[44px] flex items-center">
                37.7749° N, 122.4194° W
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}