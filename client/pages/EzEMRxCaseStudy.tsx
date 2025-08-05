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
              UX Case Study • Healthcare • Public Health • AI • EHR
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] xl:tracking-[-2.88px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-2px]">
            ezEMRx – Public Health EHR Platform
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] lg:max-w-[800px] transition-all duration-300 hover:text-[#131417]">
            Transforming a legacy EHR into an AI-augmented platform that boosts efficiency, compliance, and collaboration for clinics and health agencies
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <figure className="relative w-full max-w-[1200px] mx-auto group">
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-blue-100">
              <img
                src="/api/placeholder/1920/1080"
                alt="ezEMRx public health EHR platform dashboard showing AI-powered patient management and clinical workflow interfaces"
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
              ezEMRx platform interface showcasing AI-powered patient management and clinical workflows
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
                    Project Details
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    <p><strong>Role:</strong> Lead UX/Product Designer</p>
                    <p><strong>Company:</strong> Custom Data Processing Inc.</p>
                    <p><strong>Type:</strong> Public Health EHR – Enterprise SaaS</p>
                    <p><strong>Duration:</strong> 9 months</p>
                    <p><strong>Tools:</strong> Figma, Miro, Jira, Notion, Confluence</p>
                    <p><strong>Team:</strong> PM, AI Strategist, 3 Engineers, Clinical Informatics Lead</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    ✅ Outcomes
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    <p>↓ 20% clinician documentation time</p>
                    <p>↑ 70% compliance checklist pass rate</p>
                    <p>↑ 130% shared case-notes volume</p>
                    <p>↓ 35% referral processing time</p>
                    <p>📄 5 modules launched with end-to-end audit trails</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] leading-tight tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.4px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.3px]">
                    Key Innovation
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                    AI-augmented, role-based platform that streamlines charting, audits, referrals, and collaboration in one unified interface for public health clinics and agencies.
                  </p>
                </div>
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
              ezEMRx was a legacy EHR used by WIC clinics, immunization sites, and local health departments—plagued by manual data entry, siloed notes, and compliance bottlenecks. We reimagined it as an AI-augmented, role-based platform that streamlines charting, audits, referrals, and collaboration in one unified interface.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 sm:pl-8 md:pl-10 bg-blue-50 py-4 sm:py-6 md:py-8 rounded-r-lg">
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] italic transition-all duration-300 hover:text-[#2a2a2a]">
                "We weren't just updating forms—we were embedding trust and efficiency into every workflow."
              </p>
            </blockquote>
          </div>
        </div>

        {/* My Role */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              My Role
            </h2>
            
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                Defined UX strategy, information architecture, and AI explainability flow
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                Designed low- to high-fidelity screens and interactive AI prototypes in Figma
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                Facilitated stakeholder workshops and multisite usability tests
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                Built WCAG-compliant design system; delivered annotated redlines and QA specs
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                Led dev handoff and iterative QA collaboration
              </li>
            </ul>
          </div>
        </div>

        {/* Problem & Opportunity */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Problem & Opportunity
            </h2>
            
            <div className="overflow-x-auto mb-6 sm:mb-8 md:mb-10">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Problem</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Manual, repetitive charting</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">↑ documentation time & error risk</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">No automated compliance checks</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Audit anxiety & regulatory risk</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Siloed case notes</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Poor cross-team collaboration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Complex referral workflows</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Delayed patient care and follow-up</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 sm:p-8 md:p-10 rounded-lg">
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
                <strong>Design Opportunity:</strong> Create an AI-powered EHR that automates charting, simplifies compliance, and fosters seamless collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Research & Insights */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Research & Insights
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Methods:
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                    1:1 interviews with clinicians & program admins
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                    Workflow shadowing across five clinics
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                    Analytics review (GA, Mixpanel)
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                    Prototype testing via Maze
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Insights → Features:
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Insight</th>
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Design Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Charting fatigue from redundant forms</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Smart Charting: AI pre-fill with confidence badges</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Manual compliance audits</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">One-click audit drawer with color-coded checklist</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Notes siloed by department</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Collaborative case notes with threading & versioning</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Referral ambiguity</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Smart Referral Routing with contextual suggestions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market & Competitor Analysis */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Market & Competitor Analysis
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div>
                <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] mb-4 sm:mb-6 transition-all duration-300 hover:text-[#2a2a2a]">
                  <strong>Users:</strong> Clinicians, Program Administrators, Public Health Agencies
                </p>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Trends:
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                    Shift toward interoperable, digital records
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                    Rising demand for AI-driven efficiency
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                    Increased regulatory and audit pressures
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Competitive Differentiator:
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Feature</th>
                        <th className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-[#131417]">ezEMRx (New)</th>
                        <th className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-[#131417]">Legacy EHR</th>
                        <th className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-[#131417]">Other Solutions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">AI Smart Charting</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">✅</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">⚠</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Real-Time Compliance Audit</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">✅</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">⚠</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Collaborative Case Notes</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">✅</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">⚠</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Smart Referral Routing</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">✅</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Patient Timeline Overview</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">✅</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Flows */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              User Flows
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="bg-blue-50 p-6 sm:p-8 md:p-10 rounded-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Claire (Clinician):
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] mb-4 transition-all duration-300 hover:text-[#2a2a2a]">
                  Intake → Smart Charting → Compliance Audit → Referral Routing → Case Notes → Patient Timeline
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                  → Needs AI pre-fill, real-time audit checks, and clear referral guidance.
                </p>
              </div>

              <div className="bg-green-50 p-6 sm:p-8 md:p-10 rounded-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Mark (Program Admin):
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] mb-4 transition-all duration-300 hover:text-[#2a2a2a]">
                  Dashboard → Audit Overview → Notes Review → Reporting
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                  → Needs high-level compliance insights and collaboration oversight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Concepts */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Design Concepts
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  AI-augmented charting with hover-to-explain confidence badges
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  Transparent referral routing using patient context filters
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  Color-coded audit drawer for instant compliance feedback
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  Threaded, taggable case notes for real-time team collaboration
                </li>
              </ul>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 sm:p-8 md:p-10 rounded-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#131417] leading-tight tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.48px] mb-4 sm:mb-6 transition-all duration-300 hover:tracking-[-0.3px]">
                  Design Principles:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] transition-all duration-300 hover:scale-105">
                      Clarity > Clutter
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] transition-all duration-300 hover:scale-105">
                      Trust through Transparency
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-[#131417] transition-all duration-300 hover:scale-105">
                      Efficiency with AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prototyping & System Design */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Prototyping & System Design
            </h2>
            
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                5 modules & 25+ wireframes covering desktop and tablet
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                Figma component library with WCAG 2.1 AA tokens
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                12-column responsive grid for desktop & tablet
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                Interactive prototypes tested with 30 clinicians via Maze
              </li>
            </ul>
          </div>
        </div>

        {/* Core Features & UI */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2500">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Core Features & UI
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Module</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Key Feature</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg font-medium text-[#131417]">Smart Charting</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">AI pre-fill fields with confidence badges & explain tooltips</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg font-medium text-[#131417]">Compliance Audit</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Real-time color-coded checklist drawer & PDF export</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg font-medium text-[#131417]">Collaborative Case Notes</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Threaded notes with tags, version history, and approval workflows</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg font-medium text-[#131417]">Smart Referral Routing</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Contextual suggestions based on condition, coverage, and location</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg font-medium text-[#131417]">Patient Timeline Overview</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#9FA0A3]">Unified feed of visits, labs, immunizations, and notes for context</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2700">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Results & Impact
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base md:text-lg font-medium text-[#131417]">Metric</th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-[#131417]">Before</th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-[#131417]">After</th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-[#131417]">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Documentation Time</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">45 min/patient</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">36 min/patient</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-green-600">↓ 20%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Compliance Pass Rate</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">50%</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">85%</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-green-600">↑ 70%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Case-Notes Shared Volume</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">1 share/note</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">2.3 shares/note</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-green-600">↑ 130%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base md:text-lg text-[#131417]">Referral Processing Time</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">20 hrs/week</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg text-[#9FA0A3]">13 hrs/week</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm sm:text-base md:text-lg font-medium text-green-600">↓ 35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                <blockquote className="border-l-4 border-blue-500 pl-6 sm:pl-8 bg-blue-50 py-4 sm:py-6 rounded-r-lg">
                  <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] italic transition-all duration-300 hover:text-[#2a2a2a]">
                    "ezEMRx feels intuitive—it knows what I need before I do."
                  </p>
                </blockquote>

                <blockquote className="border-l-4 border-green-500 pl-6 sm:pl-8 bg-green-50 py-4 sm:py-6 rounded-r-lg">
                  <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] italic transition-all duration-300 hover:text-[#2a2a2a]">
                    "The audit drawer saved me hours each week."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Final Takeaways */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2900">
          <div className="bg-white rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
              Final Takeaways
            </h2>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.22px] transition-all duration-300 hover:text-[#2a2a2a]">
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  AI transparency builds clinician trust
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  Modular architecture scales across diverse agencies
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  Human-in-the-loop automation reduces manual burden
                </li>
              </ul>

              <blockquote className="border-l-4 border-purple-500 pl-6 sm:pl-8 md:pl-10 bg-purple-50 py-6 sm:py-8 md:py-10 rounded-r-lg">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#131417] leading-[150%] tracking-[-0.18px] sm:tracking-[-0.2px] md:tracking-[-0.28px] italic transition-all duration-300 hover:text-[#2a2a2a]">
                  "Design is about empowering users, not replacing them."
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-3100">
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