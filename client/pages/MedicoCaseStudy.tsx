import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function MedicoCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[50px] p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
          <Link
            to="/"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 pb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8">
          <span className="inline-block bg-[#131417] text-white px-4 py-2 rounded-[25px] text-[14px] font-medium tracking-[-0.14px] mb-6 transition-all duration-300 hover:scale-105">
            UX Case Study
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium text-[#131417] leading-[120%] tracking-[-1.44px] mb-6 transition-all duration-500 hover:tracking-[-1.2px]">
            Medico – Hospital Management System
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Transforming siloed hospital workflows into a real-time, mobile-first clinical operations platform
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-24 space-y-24">
        {/* TL;DR Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                TL;DR Summary
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Role</p>
                  <p className="text-[18px] font-medium text-[#131417]">Lead Product Designer</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Company</p>
                  <p className="text-[18px] font-medium text-[#131417]">Confidential Healthcare Client</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Platform</p>
                  <p className="text-[18px] font-medium text-[#131417]">Web & Mobile SaaS</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Duration</p>
                  <p className="text-[18px] font-medium text-[#131417]">6 months</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[14px] font-medium text-[#9FA0A3] mb-4">Tools & Team</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Tools:</p>
                    <p className="text-[16px] text-[#131417]">Figma, Miro, Jira, Notion</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Team:</p>
                    <p className="text-[16px] text-[#131417]">PM, 2 Engineers, QA Analyst, Medical Stakeholders</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">✅ Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">↓ 60%</span>
                    <span className="text-[16px] text-[#131417]">manual recordkeeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">↑ 40%</span>
                    <span className="text-[16px] text-[#131417]">faster emergency response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">↓ 50%</span>
                    <span className="text-[16px] text-[#131417]">time spent scheduling and tracking patients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">↑ 90%</span>
                    <span className="text-[16px] text-[#131417]">staff satisfaction with mobile experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Project Overview
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">❗ The Problem</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Medico was a legacy desktop-only system relying on paper workflows, siloed records, and fragmented emergency handling. There was no centralized data visibility or mobile access for nurses or doctors on the move.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🎯 The Opportunity</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Hospitals needed a modern, secure, and mobile-first HMS to empower staff in real-time—especially for critical events like emergency triage and patient handoffs.
                </p>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "How might we reimagine outdated hospital workflows into a real-time, multi-role platform that improves care quality and staff coordination across devices?"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Strategic Design Goals */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Strategic Design Goals
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Mobile-first operations</strong> for nurses and on-the-go staff
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Real-time emergency handling</strong> with alerts and status routing
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Unified patient data access</strong> across departments and devices
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Modular, role-based UI</strong> with secure access controls
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* My Role & Responsibilities */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                My Role & Responsibilities
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <p className="text-[18px] font-medium text-[#131417] mb-4">Title: Lead Product Designer</p>
                <p className="text-[16px] font-normal text-[#131417] mb-4">Scope: Product strategy, end-to-end UX/UI, dev handoff, mobile optimization</p>
              </div>

              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Mapped cross-role workflows (doctors, nurses, admins)
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Designed mobile-first and responsive interfaces
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Delivered modular UI system with role-based layouts
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Created interaction specs, states, and QA-ready redlines
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Facilitated user validation and stakeholder demos
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Problem & Opportunity
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Initial State</h3>
                <table className="w-full min-w-[500px]">
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Paper-based records and scheduling</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No mobile access or notifications</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Emergency workflows managed via phone/email</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No unified view of patients across roles</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Real Problem Faced</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  Staff couldn't access or act on critical patient data fast enough—especially in emergency or mobile scenarios.
                </p>
                <p className="text-[16px] font-medium text-[#131417] mb-2">Resolution:</p>
                <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                  We redesigned Medico to support fully responsive, role-based workflows with centralized dashboards, real-time alerts, and structured patient records accessible from any device.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Design Process
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-3">1. Discovery</h3>
                  <ul className="space-y-2">
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Shadowed nurses, admins, ER teams
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Interviewed stakeholders and reviewed SOPs
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Assessed emergency, triage, and scheduling gaps
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-3">2. Define</h3>
                  <ul className="space-y-2">
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Personas and user journeys across departments
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Information architecture spanning dashboards, modules, records
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-[25px] border border-purple-200 transition-all duration-300 hover:border-purple-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-3">3. Design</h3>
                  <ul className="space-y-2">
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Created 20+ mobile & desktop UI screens
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Designed component library (WCAG 2.1 AA, mobile-first)
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Included emergency states, scheduling tags, error alerts
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-[25px] border border-orange-200 transition-all duration-300 hover:border-orange-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-3">4. Validate</h3>
                  <ul className="space-y-2">
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Usability tests with nurses and admins
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Focused on tap targets, color coding, mobile flow speed
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-[25px] border border-teal-200 transition-all duration-300 hover:border-teal-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-3">5. Deliver</h3>
                  <ul className="space-y-2">
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Specs, redlines, QA iterations
                    </li>
                    <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                      Integrated feedback loops and mobile bug tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Timeline
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Phase</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Duration</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Activities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Discovery</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Month 1</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">User research, SOP reviews, emergency shadowing</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Define</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Month 2</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Personas, IA, role-based dashboards</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Design</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Months 3–4</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Wireframes, responsive layouts, design system</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Validate</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Month 5</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Mobile testing, feedback integration</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Delivery</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Month 6</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">QA-ready assets, stakeholder demos, dev syncs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Research & Insights
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Methods</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    On-site workflow shadowing
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Cross-role interviews (nurses, ER, admins)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Review of emergency SOPs and scheduling logs
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Real-time access matters:</strong> Staff must act fast—especially in emergencies
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Mobile is essential:</strong> Nurses need bedside-friendly UI
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Scheduling is high-friction:</strong> Too many taps, no bulk actions
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Patient data is scattered:</strong> Context switching delays treatment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Personas
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">👩‍⚕️ Sam – ER Nurse</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Goals:</p>
                      <p className="text-[16px] text-[#131417]">Respond to emergencies quickly, update patient statuses</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Pain Points:</p>
                      <p className="text-[16px] text-[#131417]">No mobile alerts, confusing emergency protocols</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Needs:</p>
                      <p className="text-[16px] text-[#131417]">Real-time forms, color-coded priority alerts, bedside access</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">👨‍⚕️ Dr. Rosa – Hospital Physician</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Goals:</p>
                      <p className="text-[16px] text-[#131417]">Access full patient history, schedule follow-ups</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Pain Points:</p>
                      <p className="text-[16px] text-[#131417]">Data split across systems, no quick lookup</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Needs:</p>
                      <p className="text-[16px] text-[#131417]">Unified patient view, search, note-taking tools</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-[25px] border border-purple-200 transition-all duration-300 hover:border-purple-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">👩‍💼 Mia – Admin Coordinator</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Goals:</p>
                      <p className="text-[16px] text-[#131417]">Manage appointments, billing, and resource allocation</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Pain Points:</p>
                      <p className="text-[16px] text-[#131417]">Paper tracking, no cross-team visibility</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">Needs:</p>
                      <p className="text-[16px] text-[#131417]">Bulk scheduling, real-time expense tracking, reporting exports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Map */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Journey Map
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Sam's Emergency Flow</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Stage</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">UX Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Alert</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Push notification + triage dashboard</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Triage</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">One-tap priority tagging + form entry</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Assign</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Doctor routing + status confirmation</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Update</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Patient profile auto-updates + alert logs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Mia's Appointment Flow</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Stage</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">UX Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Schedule</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Calendar filters + bulk confirm</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Track</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Visual appointment statuses by patient</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Report</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Expense/export dashboards with filters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Competitive Analysis
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Feature</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Medico</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Competitor A</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Emergency Workflow Engine</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠️</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Mobile-first Responsive Design</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠️</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Unified Patient Profile</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠️</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Role-Based Dashboards</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠️</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Real-Time Alerts & Routing</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features & Innovations */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Core Features & Innovations
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Emergency Triage Flow:</strong> Color-coded mobile alerts + priority forms
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Unified Patient Profiles:</strong> History, prescriptions, lab results
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Mobile Scheduling UI:</strong> Calendar view, filters, multi-action bulk tool
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Admin Dashboard:</strong> Billing reports, export features, appointment logs
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Cross-Device Support:</strong> Seamless access via desktop, tablet, and mobile
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results & Impact
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Quantitative Gains</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Metric</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Manual Recordkeeping Errors</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">↓ 60%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Emergency Response Time</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-blue-600">↑ 40%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Staff Satisfaction (Mobile)</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-orange-600">↑ 90%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Scheduling Time per Session</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-purple-600">↓ 50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Final Reflections */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Final Reflections
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">What I Learned</h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Speed is safety:</strong> Emergency UX must prioritize real-time action
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Mobile is not a nice-to-have—it's essential</strong> for clinical tools
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Unified design systems reduce fragmentation across teams</strong>
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Healthcare UX requires empathy, precision, and clear feedback loops</strong>
                  </li>
                </ul>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "Designing Medico showed me that every second we save in UX is a second earned in patient care."
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3500">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px]">
          {/* Footer Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 lg:mb-[270px] gap-4 sm:gap-0">
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              Portfolio 2023 - 2024
            </span>
            <span className="text-[20px] font-semibold leading-[20px] tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] hover:scale-105">
              Sean Smith
            </span>
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-center sm:text-right transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              37.7749° N, 122.4194° W
            </span>
          </div>

          {/* Get in Touch */}
          <div className="text-center mb-16 lg:mb-[270px]">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px] transition-all duration-300 hover:text-white">
              Have a nice project?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-medium leading-[72px] tracking-[-0.72px] transition-all duration-500 hover:tracking-[-0.5px] hover:scale-105 cursor-pointer">
              Get in Touch
            </h2>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[44px] order-1 lg:order-2">
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Behance
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Dribble
              </a>
            </div>

            <div className="flex gap-4 sm:gap-8 lg:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                License
              </a>
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
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