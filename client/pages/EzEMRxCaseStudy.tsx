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
            Transforming a legacy EHR system into an AI-augmented platform for compliance, collaboration, and efficiency across public health agencies.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {["UX Case Study", "Healthcare", "AI", "EHR", "Public Health", "Enterprise SaaS"].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <div className="relative bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-[1.01] aspect-video overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-green-500/5 to-teal-500/5 group-hover:from-blue-500/10 group-hover:via-green-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 text-center mb-2">
                ezEMRx AI-Augmented Dashboard
              </h3>
              <p className="text-sm sm:text-base text-gray-500 text-center max-w-md">
                Electronic Health Records system with AI-powered insights, compliance automation, and public health workflow optimization
              </p>
            </div>
          </div>
          <figcaption className="text-sm text-gray-600 text-center mt-4 italic">
            ezEMRx dashboard showcasing AI-augmented EHR workflows for public health compliance and efficiency
          </figcaption>
        </figure>

        {/* TL;DR Summary */}
        <section className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            TL;DR Summary
          </h2>
          
          {/* Key Metrics Infographic */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-[12px] sm:rounded-[16px] border border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">↓65%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Documentation Time</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-[12px] sm:rounded-[16px] border border-green-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">↑90%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Compliance Rate</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-[12px] sm:rounded-[16px] border border-purple-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-2">↑85%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">User Satisfaction</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-[12px] sm:rounded-[16px] border border-orange-200 hover:shadow-md transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-2">↓40%</div>
              <p className="text-sm sm:text-base text-[#131417] font-medium">Training Time</p>
            </div>
          </div>

          {/* Team Roles Badge Layout */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-4 sm:mb-6 text-center">Team & Roles</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { role: "Lead UX Designer", color: "bg-blue-500" },
                { role: "AI Strategist", color: "bg-purple-500" },
                { role: "Product Manager", color: "bg-green-500" },
                { role: "Frontend Engineer", color: "bg-orange-500" },
                { role: "Healthcare SME", color: "bg-red-500" },
                { role: "Compliance Lead", color: "bg-teal-500" }
              ].map((item) => (
                <div key={item.role} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 hover:shadow-sm transition-all duration-300">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm font-medium text-[#131417]">{item.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Icons Grid */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-4 sm:mb-6">Design Tools</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { name: "Figma", icon: "🎨" },
                { name: "Jira", icon: "📋" },
                { name: "Miro", icon: "🧠" },
                { name: "Confluence", icon: "📝" },
                { name: "Axure", icon: "⚡" },
                { name: "Lighthouse", icon: "🏮" }
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-all duration-300 min-w-[80px]">
                  <span className="text-2xl mb-2">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-[#131417]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Project Overview
          </h2>

          {/* Side-by-side Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
            <div className="bg-red-50 border border-red-200 rounded-[16px] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-medium text-red-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                Legacy EHR System
              </h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-red-100">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-1">
                    <span>Patient: John Doe</span>
                    <span className="text-red-600">⚠️ Incomplete</span>
                  </div>
                  <div className="text-xs text-gray-500">Last updated: 3 days ago</div>
                  <div className="text-xs text-gray-500">Status: Pending review</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Manual data entry prone to errors</li>
                <li>• No compliance automation</li>
                <li>• Fragmented user interface</li>
                <li>• Limited collaboration features</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-[16px] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-medium text-green-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                ezEMRx Redesign
              </h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-green-100">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-1">
                    <span>Patient: John Doe</span>
                    <span className="text-green-600 flex items-center gap-1">
                      ✓ AI Verified
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">98%</span>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Auto-updated: 2 min ago
                  </div>
                  <div className="text-xs text-green-600">Status: Compliant & Current</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• AI-powered smart data entry</li>
                <li>• Automated compliance checking</li>
                <li>• Unified intuitive interface</li>
                <li>• Real-time collaboration tools</li>
              </ul>
            </div>
          </div>

          {/* Problem vs Opportunity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border-l-4 border-red-500 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-4 text-red-600">❌ The Problem</h3>
              <p className="text-base text-[#131417] leading-[150%] mb-4">
                Public health agencies struggled with outdated EHR systems that hindered compliance, collaboration, and data accuracy across multiple departments and jurisdictions.
              </p>
              <ul className="space-y-2 text-sm text-[#131417]">
                <li>• Manual compliance reporting taking 8+ hours weekly</li>
                <li>• Data silos preventing inter-agency collaboration</li>
                <li>• 40% error rate in manual data entry</li>
                <li>• Staff spending 60% of time on administrative tasks</li>
              </ul>
            </div>

            <div className="bg-white rounded-[16px] p-6 sm:p-8 border-l-4 border-green-500 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-4 text-green-600">💡 The Opportunity</h3>
              <p className="text-base text-[#131417] leading-[150%] mb-4">
                Leverage AI and modern UX design to create an intelligent EHR that automates compliance, enhances collaboration, and puts clinicians back in control of patient care.
              </p>
              <ul className="space-y-2 text-sm text-[#131417]">
                <li>• AI-automated compliance checking and reporting</li>
                <li>• Seamless data sharing across agencies</li>
                <li>• Smart data validation reducing errors by 90%</li>
                <li>• Streamlined workflows focusing on patient care</li>
              </ul>
            </div>
          </div>

          {/* Stakeholder Quote */}
          <div className="bg-blue-50 border border-blue-200 rounded-[16px] p-6 sm:p-8 md:p-10 relative">
            <div className="absolute top-4 left-6 text-4xl text-blue-300">"</div>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-[#131417] leading-[150%] italic text-center mb-6 pt-4">
              "ezEMRx transformed our public health workflows. What used to take our team hours for compliance reporting now happens automatically. We can finally focus on patient care instead of paperwork."
            </blockquote>
            <div className="text-center">
              <div className="font-medium text-[#131417]">Dr. Sarah Chen</div>
              <div className="text-sm text-[#9FA0A3]">Director of Public Health Operations, SF Department of Health</div>
            </div>
          </div>
        </section>

        {/* Strategic Design Goals */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Strategic Design Goals
          </h2>

          {/* Four-Icon Goal Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center p-6 sm:p-8 bg-white rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-2">Empower</h3>
              <p className="text-sm text-[#9FA0A3]">Give clinicians AI-powered insights for better decision making</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-2">Simplify</h3>
              <p className="text-sm text-[#9FA0A3]">Reduce complexity through intelligent automation and intuitive design</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-2">Unify</h3>
              <p className="text-sm text-[#9FA0A3]">Connect departments and agencies through seamless data sharing</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-2">Streamline</h3>
              <p className="text-sm text-[#9FA0A3]">Optimize workflows to maximize time spent on patient care</p>
            </div>
          </div>

          {/* Sticky-note Style Objectives */}
          <div className="bg-yellow-50 rounded-[16px] p-6 sm:p-8 border border-yellow-200">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6 text-center">Key Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Reduce documentation burden by 60%+",
                "Achieve 95%+ compliance automation",
                "Enable real-time inter-agency collaboration",
                "Implement explainable AI for clinical decisions",
                "Streamline public health reporting workflows",
                "Create mobile-first responsive design"
              ].map((objective, index) => (
                <div
                  key={index}
                  className="bg-yellow-200 p-4 rounded-lg shadow-sm transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-md"
                  style={{ transform: `rotate(${(index % 3 - 1) * 2}deg)` }}
                >
                  <p className="text-sm font-medium text-yellow-900">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Role & Responsibilities */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            My Role & Responsibilities
          </h2>

          {/* Swimlane Timeline */}
          <div className="bg-white rounded-[16px] p-6 sm:p-8 md:p-10 shadow-sm mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6 text-center">Design Lifecycle Timeline</h3>
            <div className="space-y-6">
              {[
                { phase: "Discovery", duration: "Weeks 1-3", deliverables: ["User research", "Stakeholder interviews", "Current state analysis"] },
                { phase: "Define", duration: "Weeks 4-6", deliverables: ["Persona development", "Journey mapping", "Requirements gathering"] },
                { phase: "Design", duration: "Weeks 7-12", deliverables: ["Wireframes", "Prototypes", "Design system"] },
                { phase: "Validate", duration: "Weeks 13-16", deliverables: ["Usability testing", "Accessibility audit", "Stakeholder review"] },
                { phase: "Deliver", duration: "Weeks 17-20", deliverables: ["Developer handoff", "QA support", "Launch preparation"] }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-300">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-sm font-medium text-blue-600">{item.duration}</div>
                    <div className="text-lg font-medium text-[#131417]">{item.phase}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-functional Team Diagram */}
          <div className="bg-gray-50 rounded-[16px] p-6 sm:p-8 md:p-10">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6 text-center">Cross-Functional Collaboration</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">UX</span>
                </div>
                <div className="font-medium">Design Lead</div>
              </div>
              
              <div className="hidden md:block text-2xl text-gray-400">↔</div>
              
              <div className="text-center p-4 bg-purple-100 rounded-lg">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div className="font-medium">AI Strategy</div>
              </div>
              
              <div className="hidden md:block text-2xl text-gray-400">↔</div>
              
              <div className="text-center p-4 bg-green-100 rounded-lg">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">ENG</span>
                </div>
                <div className="font-medium">Engineering</div>
              </div>
              
              <div className="hidden md:block text-2xl text-gray-400">↔</div>
              
              <div className="text-center p-4 bg-orange-100 rounded-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">PM</span>
                </div>
                <div className="font-medium">Product</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity Deep Dive */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Problem & Opportunity Analysis
          </h2>

          {/* Legacy UI Screenshot with Annotations */}
          <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Legacy System Pain Points</h3>
            <div className="relative bg-gray-100 rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                🚩 Critical Issues
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Outdated interface causing user frustration</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-200 rounded">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Manual compliance checks taking hours</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Data silos preventing collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Explainability Tooltip Mockup */}
          <div className="bg-blue-50 rounded-[16px] p-6 sm:p-8 border border-blue-200">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">AI Explainability Features</h3>
            <div className="relative">
              <div className="bg-white rounded-lg p-4 border border-blue-200 inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">AI Confidence:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">98%</span>
                </div>
                <div className="text-xs text-gray-600 mb-2">Source Logic:</div>
                <ul className="text-xs space-y-1">
                  <li>• Patient history matches diagnosis criteria (95%)</li>
                  <li>• Symptoms align with clinical guidelines (99%)</li>
                  <li>• Lab results support recommendation (97%)</li>
                </ul>
              </div>
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b border-r border-blue-200 transform rotate-45"></div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Design Process
          </h2>

          {/* 5-Stage Process Flowchart */}
          <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
              {[
                { stage: "Discovery", icon: "🔍", color: "bg-blue-500" },
                { stage: "Define", icon: "📝", color: "bg-green-500" },
                { stage: "Design", icon: "🎨", color: "bg-purple-500" },
                { stage: "Validate", icon: "✅", color: "bg-orange-500" },
                { stage: "Deliver", icon: "🚀", color: "bg-red-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-3 text-2xl`}>
                    {item.icon}
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#131417]">{item.stage}</span>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 -right-8 text-gray-400 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            User Personas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Claire - Clinician Persona */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm border border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">CL</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">Claire</h3>
                  <p className="text-base text-blue-600 font-medium">Public Health Clinician</p>
                  <p className="text-sm text-[#9FA0A3]">8 years experience • SF Department of Health</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#131417] mb-2">Goals</h4>
                  <ul className="text-sm space-y-1 text-[#131417]">
                    <li>• Spend more time with patients, less on documentation</li>
                    <li>• Ensure accurate and compliant records</li>
                    <li>• Collaborate effectively with other agencies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-[#131417] mb-2">Pain Points</h4>
                  <ul className="text-sm space-y-1 text-red-600">
                    <li>• Repetitive data entry across multiple systems</li>
                    <li>• Confusing compliance requirements</li>
                    <li>• Slow system response times</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-[#131417] mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Legacy EHR", "Excel", "Email", "Phone"].map((tool) => (
                      <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mark - Admin Persona */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm border border-green-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">MK</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">Mark</h3>
                  <p className="text-base text-green-600 font-medium">Health Data Administrator</p>
                  <p className="text-sm text-[#9FA0A3]">12 years experience • Multi-agency coordination</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#131417] mb-2">Goals</h4>
                  <ul className="text-sm space-y-1 text-[#131417]">
                    <li>• Ensure data quality and compliance across agencies</li>
                    <li>• Generate accurate reports for stakeholders</li>
                    <li>• Support clinicians with efficient workflows</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-[#131417] mb-2">Pain Points</h4>
                  <ul className="text-sm space-y-1 text-red-600">
                    <li>• Manual auditing of patient records</li>
                    <li>• Inconsistent data across departments</li>
                    <li>• Time-consuming compliance reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-[#131417] mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Admin Portal", "Excel", "SQL Queries", "Audit Tools"].map((tool) => (
                      <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features & Innovations */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Core Features & Innovations
          </h2>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* Smart Charting UI */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Smart Charting with AI Assistance</h3>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    AI Suggested
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ Validated
                  </span>
                  <button className="bg-white border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-50 transition-colors">
                    Override
                  </button>
                </div>
                <div className="text-sm text-[#131417]">
                  <strong>Diagnosis:</strong> Type 2 Diabetes Mellitus (E11.9)
                  <div className="text-xs text-blue-600 mt-1">
                    Confidence: 94% based on symptoms, labs, and patient history
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Drawer */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Automated Compliance Monitoring</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                    <span className="text-sm font-medium">HIPAA Documentation</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">✓ Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                    <span className="text-sm font-medium">CDC Reporting Requirements</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">✓ Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <span className="text-sm font-medium">State Immunization Data</span>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">⚠ Review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Timeline */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6">Interactive Patient Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                <div className="space-y-4 pl-12">
                  {[
                    { date: "Today", event: "Annual checkup completed", type: "visit" },
                    { date: "2 weeks ago", event: "Lab results reviewed", type: "lab" },
                    { date: "1 month ago", event: "Prescription updated", type: "medication" },
                    { date: "3 months ago", event: "Specialist referral", type: "referral" }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[50px] w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{index + 1}</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-[#131417]">{item.event}</span>
                          <span className="text-xs text-[#9FA0A3]">{item.date}</span>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Results & Impact
          </h2>

          {/* Before/After KPI Chart */}
          <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-6 text-center">Performance Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-red-600 mb-4">Before (Legacy System)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Documentation Time</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gray-200 rounded-full">
                        <div className="w-16 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-red-600">8 hrs/week</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Compliance Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gray-200 rounded-full">
                        <div className="w-14 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-red-600">70%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Satisfaction</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gray-200 rounded-full">
                        <div className="w-12 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-red-600">60%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-green-600 mb-4">After (ezEMRx)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Documentation Time</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gray-200 rounded-full">
                        <div className="w-6 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-green-600">2.8 hrs/week</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Compliance Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gray-200 rounded-full">
                        <div className="w-[90%] h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-green-600">96%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Satisfaction</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-3 bg-gray-200 rounded-full">
                        <div className="w-[85%] h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-green-600">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Quote Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-[16px] p-6">
              <div className="text-3xl text-blue-300 mb-4">"</div>
              <p className="text-base text-[#131417] italic mb-4">
                "The AI suggestions save me so much time. I can focus on my patients instead of fighting with the system."
              </p>
              <div className="font-medium text-blue-600">Dr. Maria Rodriguez</div>
              <div className="text-sm text-[#9FA0A3]">Family Medicine Clinician</div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-[16px] p-6">
              <div className="text-3xl text-green-300 mb-4">"</div>
              <p className="text-base text-[#131417] italic mb-4">
                "Compliance reporting went from a full day to 30 minutes. The automation is incredible."
              </p>
              <div className="font-medium text-green-600">James Liu</div>
              <div className="text-sm text-[#9FA0A3]">Health Data Administrator</div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-[16px] p-6 md:col-span-2 lg:col-span-1">
              <div className="text-3xl text-purple-300 mb-4">"</div>
              <p className="text-base text-[#131417] italic mb-4">
                "The quality improvement in our data is remarkable. Everything is more accurate and timely."
              </p>
              <div className="font-medium text-purple-600">Susan Park</div>
              <div className="text-sm text-[#9FA0A3]">QA Director</div>
            </div>
          </div>
        </section>

        {/* Developer Handoff & QA */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Developer Handoff & QA
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Figma Handoff */}
            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-blue-200">
              <h3 className="font-medium text-[#131417] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Figma Specifications
              </h3>
              <div className="space-y-3 text-sm">
                <div>• Component library with 47 reusable elements</div>
                <div>• Interaction annotations for all micro-transitions</div>
                <div>• Responsive breakpoint documentation</div>
                <div>• Color tokens and typography scale</div>
              </div>
            </div>

            {/* Accessibility Report */}
            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-green-200">
              <h3 className="font-medium text-[#131417] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Accessibility Score
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lighthouse</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">98/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Axe Core</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">0 issues</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">WCAG 2.1 AA</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">✓ Compliant</span>
                </div>
              </div>
            </div>

            {/* Pipeline Diagram */}
            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-purple-200">
              <h3 className="font-medium text-[#131417] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                Delivery Pipeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Design → QA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">QA → Staging</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Staging → Production</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Reflections */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-300 hover:tracking-[-0.7px]">
            Final Reflections
          </h2>

          {/* 4-Quadrant Retrospective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-green-50 border border-green-200 rounded-[16px] p-6 sm:p-8">
              <h3 className="font-medium text-green-700 mb-4 flex items-center gap-2">
                ✅ What Worked
              </h3>
              <ul className="space-y-2 text-sm text-[#131417]">
                <li>• AI integration exceeded user expectations</li>
                <li>• Cross-functional collaboration was seamless</li>
                <li>• User research drove all major design decisions</li>
                <li>• Iterative testing prevented major issues</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-[16px] p-6 sm:p-8">
              <h3 className="font-medium text-blue-700 mb-4 flex items-center gap-2">
                🔄 What I'd Improve
              </h3>
              <ul className="space-y-2 text-sm text-[#131417]">
                <li>• More extensive mobile testing earlier</li>
                <li>• Additional stakeholder alignment sessions</li>
                <li>• Broader user persona validation</li>
                <li>• Enhanced onboarding flow design</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-[16px] p-6 sm:p-8">
              <h3 className="font-medium text-purple-700 mb-4 flex items-center gap-2">
                🎓 What I Learned
              </h3>
              <ul className="space-y-2 text-sm text-[#131417]">
                <li>• Healthcare compliance is incredibly complex</li>
                <li>• AI explainability is crucial for user trust</li>
                <li>• Public health workflows vary significantly</li>
                <li>• Change management is as important as design</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-[16px] p-6 sm:p-8">
              <h3 className="font-medium text-orange-700 mb-4 flex items-center gap-2">
                😮 What Surprised Me
              </h3>
              <ul className="space-y-2 text-sm text-[#131417]">
                <li>• Users adapted to AI features faster than expected</li>
                <li>• Mobile usage was higher than anticipated</li>
                <li>• Compliance automation had biggest impact</li>
                <li>• Cross-agency collaboration became primary use case</li>
              </ul>
            </div>
          </div>

          {/* Final Quote Block */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-[16px] p-8 sm:p-12 text-white text-center">
            <div className="text-4xl mb-6">"</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-normal leading-[150%] italic mb-6">
              This project reinforced my belief that great UX design isn't just about making things beautiful—it's about making complex systems feel simple and empowering users to do their best work.
            </blockquote>
            <div className="font-medium text-xl">Sean Smith</div>
            <div className="text-blue-100">Lead UX Designer, ezEMRx Project</div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[270px]"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-3100">
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