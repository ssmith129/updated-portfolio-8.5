import { Link } from "react-router-dom";

export default function MedicoCaseStudy() {
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
            Medico – Hospital Management System
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417] px-4">
            Comprehensive hospital management platform streamlining patient care, staff workflows, and administrative operations across multiple healthcare facilities.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {["Healthcare Management", "Enterprise UX", "Workflow Optimization", "Staff Coordination", "Patient Care", "Administrative Tools"].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <figure className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <div className="relative bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-[1.01] aspect-video overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-pink-500/5 to-purple-500/5 group-hover:from-red-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 text-center mb-2">
                Medico Hospital Dashboard
              </h3>
              <p className="text-sm sm:text-base text-gray-500 text-center max-w-md">
                Comprehensive hospital management system with patient tracking, staff coordination, and administrative tools
              </p>
            </div>
          </div>
          <figcaption className="text-sm text-gray-600 text-center mt-4 italic">
            Medico dashboard interface designed for comprehensive hospital management and patient care coordination
          </figcaption>
        </figure>

        {/* TL;DR Summary */}
        <section className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            TL;DR Summary
          </h2>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            <div className="text-center p-4 sm:p-6 bg-red-50 rounded-[12px] sm:rounded-[16px] border border-red-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-2">↓50%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Admin Workload</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-[12px] sm:rounded-[16px] border border-green-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">↑35%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Patient Flow</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-[12px] sm:rounded-[16px] border border-purple-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-2">90%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Staff Adoption</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-[12px] sm:rounded-[16px] border border-orange-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-2">↑25%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Operational Efficiency</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  The Challenge
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  Hospitals needed a unified system to manage patient records, staff scheduling, resource allocation, billing, and administrative tasks across multiple departments and locations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  The Solution
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  Developed a comprehensive hospital management platform with integrated patient tracking, staff coordination, inventory management, and real-time analytics for operational efficiency.
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
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">50% reduction in administrative workload</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">35% improvement in patient flow</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">90% staff adoption rate</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-3 sm:mb-4 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                  Timeline & Role
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] mb-2 transition-all duration-300 hover:text-[#2a2a2a]">
                  <strong>Duration:</strong> 12 months (2022-2023)
                </p>
                <p className="text-base sm:text-lg md:text-[20px] text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                  <strong>Role:</strong> Senior UX Designer, System Architecture, User Research
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Management Workflow */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Hospital Management Workflow
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
            {/* Patient Registration */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Registration
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Patient intake and demographics</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Insurance verification</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Medical history collection</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Appointment scheduling</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Clinical Care */}
            <div className="bg-green-50 border-2 border-green-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Clinical Care
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Diagnosis and treatment plans</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Lab orders and results</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Medication management</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Progress notes and documentation</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Resource Management */}
            <div className="bg-purple-50 border-2 border-purple-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Resources
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Room and bed management</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Staff scheduling</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Equipment tracking</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Inventory management</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Billing & Finance */}
            <div className="bg-orange-50 border-2 border-orange-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Billing
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Automated billing generation</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Insurance claim processing</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Financial reporting</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Payment processing & tracking</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-teal-50 border-2 border-teal-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Analytics
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Real-time operational metrics</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Performance dashboards</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Quality improvement tracking</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">Regulatory compliance reports</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Integration & Coordination */}
            <div className="bg-indigo-50 border-2 border-indigo-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col touch-manipulation md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500 rounded-full mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] font-medium text-[#131417] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] flex-shrink-0">
                Integration
              </h3>
              
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">EHR system connections</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">Cloud-based data sync</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-2">HIPAA compliance monitoring</span>
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-[#131417] leading-relaxed">
                    <span className="line-clamp-3">API integrations and data exchange</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Key Features & Innovations
          </h2>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* Patient Management Dashboard */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Unified Patient Management Dashboard</h3>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <div className="text-sm font-medium text-blue-700 mb-2">Current Patients</div>
                    <div className="text-2xl font-bold text-[#131417]">247</div>
                    <div className="text-xs text-green-600">↑12% from yesterday</div>
                  </div>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <div className="text-sm font-medium text-blue-700 mb-2">Available Beds</div>
                    <div className="text-2xl font-bold text-[#131417]">23</div>
                    <div className="text-xs text-orange-600">Critical: ICU (2)</div>
                  </div>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <div className="text-sm font-medium text-blue-700 mb-2">Staff on Duty</div>
                    <div className="text-2xl font-bold text-[#131417]">84</div>
                    <div className="text-xs text-blue-600">Next shift: 6 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Coordination System */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Real-Time Staff Coordination</h3>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white border border-green-200 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Dr. Sarah Chen - Emergency</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-green-200 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium">Nurse Mike Johnson - ICU</span>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">In Surgery</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-green-200 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Dr. Alex Kim - Cardiology</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">With Patient</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Optimization */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Smart Resource Optimization</h3>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">Equipment Status</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>MRI Machine #1</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Available</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>CT Scanner #2</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Maintenance</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>X-Ray Room A</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Use</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">Supply Levels</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Surgical Masks</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">92% Stock</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>IV Bags</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Low: 15%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Blood Pressure Cuffs</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">85% Stock</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Results & Impact
          </h2>

          {/* Stakeholder Quote */}
          <div className="bg-red-50 border border-red-200 rounded-[16px] p-6 sm:p-8 md:p-10 relative mb-8 sm:mb-12">
            <div className="absolute top-4 left-6 text-4xl text-red-300">"</div>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-[#131417] leading-[150%] italic text-center mb-6 pt-4">
              "Medico transformed our hospital operations. We've never had such clear visibility into our resources and patient flow. Staff morale has improved significantly."
            </blockquote>
            <div className="text-center">
              <div className="font-medium text-[#131417]">Dr. Robert Martinez</div>
              <div className="text-sm text-[#9FA0A3]">Chief Medical Officer, General Hospital</div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6 text-center">Performance Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-3">50%</div>
                <div className="font-medium text-[#131417] mb-2">Reduction in</div>
                <div className="text-sm text-[#9FA0A3]">Administrative Tasks</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-3">35%</div>
                <div className="font-medium text-[#131417] mb-2">Improvement in</div>
                <div className="text-sm text-[#9FA0A3]">Patient Flow Efficiency</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-3">90%</div>
                <div className="font-medium text-[#131417] mb-2">Staff</div>
                <div className="text-sm text-[#9FA0A3]">Adoption Rate</div>
              </div>
            </div>
          </div>
        </section>
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