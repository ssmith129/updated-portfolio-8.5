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

      {/* Case Study Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.3px]">
            ezEMRx – Redesigning EHR for Real-World Public Health
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417] px-4">
            Transforming Electronic Health Records for improved public health workflows and patient care management
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <figure className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <div className="relative bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-[1.01] aspect-video overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-green-500/5 to-teal-500/5 group-hover:from-blue-500/10 group-hover:via-green-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 text-center mb-2">
                ezEMRx Dashboard Interface
              </h3>
              <p className="text-sm sm:text-base text-gray-500 text-center max-w-md">
                Electronic Health Records system designed for public health workflows and patient management
              </p>
            </div>
            <img
              src="/api/placeholder/1920/1080"
              alt="ezEMRx Electronic Health Records dashboard interface showing patient management system, clinical workflows, and public health data visualization designed for healthcare providers"
              className="absolute inset-0 w-full h-full object-cover opacity-0"
              loading="eager"
              decoding="async"
              width="1920"
              height="1080"
            />
          </div>
          <figcaption className="text-sm text-gray-600 text-center mt-4 italic">
            ezEMRx dashboard interface showcasing streamlined EHR workflows for public health management
          </figcaption>
        </figure>

        {/* TL;DR Summary */}
        <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-300 hover:tracking-[-0.7px]">
            TL;DR Summary
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  The Challenge
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  Public health organizations struggled with outdated EHR systems that didn't support complex patient workflows, population health tracking, or real-time data sharing between departments.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  The Solution
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  Redesigned the entire EHR interface with focus on public health workflows, streamlined patient management, and integrated population health analytics to improve care coordination.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  Key Results
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">40% reduction in patient data entry time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">60% increase in workflow efficiency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">95% user satisfaction rating</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  Timeline & Role
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] mb-2 transition-all duration-300 hover:text-[#2a2a2a]">
                  <strong>Duration:</strong> 8 months (2023)
                </p>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  <strong>Role:</strong> Lead UX Designer, User Research, Prototyping
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey Grid */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            EHR Redesign Process
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
            {/* Research Phase */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Research
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">User interviews with healthcare providers</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Current system workflow analysis</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Legacy system pain points identification</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Competitive analysis of EHR solutions</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Design Phase */}
            <div className="bg-green-50 border-2 border-green-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Design
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">User-centered information architecture</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Wireframes for core workflows</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Visual design system creation</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">High-fidelity interactive prototypes</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Testing Phase */}
            <div className="bg-purple-50 border-2 border-purple-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Testing
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Usability testing with clinicians</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">A/B testing of critical flows</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Accessibility compliance testing</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Performance & workflow metrics</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Implementation Phase */}
            <div className="bg-orange-50 border-2 border-orange-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Implementation
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Phased rollout strategy</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Staff training programs</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Change management support</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Performance monitoring & optimization</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Results Phase */}
            <div className="bg-teal-50 border-2 border-teal-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Results
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">40% faster patient data entry</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">60% workflow efficiency increase</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">95% user satisfaction rating</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">30% reduction in training time</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[270px]"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2100">
            <span className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[44px] order-1 lg:order-2">
              <a
                href="https://www.behance.net/ssmit129"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Behance
              </a>
              <a
                href="https://github.com/ssmith129"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sean-smith-sf/"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                License
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
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