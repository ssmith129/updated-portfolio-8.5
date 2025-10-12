import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";

export default function EzEMRxCaseStudy() {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 pb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8">
          <span className="inline-block bg-[#131417] text-white px-4 py-2 rounded-[25px] text-[14px] font-medium tracking-[-0.14px] mb-6 transition-all duration-300 hover:scale-105">
            UX Case Study
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium text-[#131417] leading-[120%] tracking-[-1.44px] mb-6 transition-all duration-500 hover:tracking-[-1.2px]">
            ezEMRx – Redesigning EHR for Real-World Public Health
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Transforming a legacy EHR system into an AI-augmented platform for
            compliance, collaboration, and efficiency
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-24 space-y-24">
        {/* TL;DR Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                TL;DR Summary
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex flex-row flex-wrap gap-6">
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Platform
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    Web-based EHR SaaS
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col items-start justify-start flex-grow-0 h-auto">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Role
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    Lead UX/Product Designer
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Company
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    Custom Data Processing Inc.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Duration
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    12 months
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[14px] font-medium text-[#9FA0A3] mb-4">
                  Tools & Team
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">
                      Tools:
                    </p>
                    <p className="text-[16px] text-[#131417]">
                      Figma, Miro, Jira, Confluence, Zoom, Google Forms
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">
                      Team:
                    </p>
                    <p className="text-[16px] text-[#131417]">
                      PM, AI Strategist, Engineering Lead, Clinical QA, UX
                      Researcher
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  ✅ Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">↓ 20%</span>
                    <span className="text-[16px] text-[#131417]">
                      average daily documentation time
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">↑ 70%</span>
                    <span className="text-[16px] text-[#131417]">
                      compliance checklist pass rate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">↑ 2.3×</span>
                    <span className="text-[16px] text-[#131417]">
                      collaborative notes per patient
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">↓ 35%</span>
                    <span className="text-[16px] text-[#131417]">
                      referral generation time
                    </span>
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
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  ❗ The Problem
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  ezEMRx served public health departments, immunization clinics,
                  and WIC programs — but its outdated interface, inconsistent
                  documentation workflows, and lack of mobile optimization led
                  to clinician burnout and audit anxiety.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  🎯 The Opportunity
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  As public health demands grew (WIC modernization, pandemic
                  response, integrated care), there was a clear need for an
                  intelligent, user-friendly platform that minimized manual
                  overhead and increased compliance readiness.
                </p>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "How might we reduce documentation fatigue while building trust
                in AI-assisted compliance and referrals for real-world public
                health?"
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
                  <strong>Empower clinicians</strong> with auto-suggestions and
                  override control
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Simplify compliance</strong> with real-time,
                  color-coded audits
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Unify workflows</strong> with cross-role collaborative
                  notes
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Streamline referrals</strong> using AI-based logic and
                  historical outcomes
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
                <p className="text-[18px] font-medium text-[#131417] mb-4">
                  Title: Lead UX/Product Designer
                </p>
                <p className="text-[16px] font-normal text-[#131417] mb-4">
                  Scope: UX strategy, information architecture, full UI design,
                  and dev handoff
                </p>
              </div>

              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Led stakeholder workshops and contextual interviews across 3
                  states
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Re-architected platform IA and user flows
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Designed 40+ responsive screens for 3 user roles
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Built design system with accessibility tokens and
                  documentation
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Delivered QA specs, accessibility reports, and redline assets
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
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Initial State
                </h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Complex, repetitive charting for every patient type
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    No referral suggestion logic — prone to misrouting
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Manual compliance reviews before audits
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Siloed case notes with no version history
                  </li>
                </ul>
              </div>

              {/* EHR Screenshot Container */}
              <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-in fade-in-0 zoom-in-95 duration-1000 delay-700">
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white border border-gray-200"
                  onClick={() => setIsImageEnlarged(true)}
                >
                  <img
                    src="/old_2.png"
                    alt="Original EHR interface showing complex navigation, outdated design patterns, and inefficient data entry workflows that healthcare professionals struggled with daily"
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Overlay with zoom indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4">
                      <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-[#131417]" />
                    </div>
                  </div>

                  {/* Visual indicator text */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white/90 backdrop-blur-sm text-[#131417] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-sm sm:text-base text-[#9FA0A3] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] mt-4 text-center transition-all duration-300 hover:text-[#131417]">
                  Original EHR interface showing complex navigation and outdated
                  design patterns
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Real Problem Faced
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  Clinicians struggled with decision fatigue from duplicative
                  forms, while administrators lacked real-time oversight into
                  audit readiness. AI was distrusted unless its logic was made
                  transparent.
                </p>
                <p className="text-[16px] font-medium text-[#131417] mb-2">
                  Resolution:
                </p>
                <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                  We introduced smart charting with AI-assist fields, confidence
                  badges, and hover-to-explain tooltips. A collapsible
                  compliance drawer tracked real-time audit flags, and
                  collaborative case notes gave admins context without
                  interrupting care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
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
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Phase
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Duration
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Activities
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Discovery
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Month 1–2
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Interviews, usability audit, workflow analysis
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Define
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Month 2–3
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Personas, journey mapping, IA schema
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Design
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Months 3–6
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        High-fidelity UI design, prototyping, accessibility
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Validate
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Months 5–7
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Multi-site usability testing, iterative updates
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Delivery
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Months 7–12
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Dev handoff, QA support, training & rollout assets
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Research & Insights
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Research Methods
                </h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    1:1 interviews (WIC & public health clinic staff)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Observation of live patient sessions
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Survey feedback from 4 different public health agency types
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Legacy system analytics (field usage, form abandonment)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Key Insights
                </h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Documentation fatigue</strong> was driven by
                    duplicated inputs and low discoverability
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Referrals often failed</strong> due to lack of
                    real-time decision support
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Compliance concerns</strong> increased anxiety
                    during audits
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Collaboration needed context</strong>, not just
                    shared access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Personas
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                    👩 Claire – WIC Clinician
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">
                        Goals:
                      </p>
                      <p className="text-[16px] text-[#131417]">
                        Reduce charting effort, ensure WIC compliance
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">
                        Pain Points:
                      </p>
                      <p className="text-[16px] text-[#131417]">
                        Repetitive data entry, confusing audit logic
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">
                        Needs:
                      </p>
                      <p className="text-[16px] text-[#131417]">
                        Smart charting, AI explainability, single-patient
                        timeline
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                    👨 Mark – Program Administrator
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">
                        Goals:
                      </p>
                      <p className="text-[16px] text-[#131417]">
                        Track compliance across clinics, manage quality
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">
                        Pain Points:
                      </p>
                      <p className="text-[16px] text-[#131417]">
                        Blind spots into clinic activity, no version control
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#131417] mb-1">
                        Needs:
                      </p>
                      <p className="text-[16px] text-[#131417]">
                        Case note visibility, compliance dashboards, referral
                        analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Map */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Journey Map
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Claire's Daily Flow
                </h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Stage
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        UX Opportunity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Patient Visit
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        AI-assist + confidence indicators
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Charting
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Auto-prefill + inline explainability
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Referrals
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Suggested routing based on success rates
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Audit Check
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Real-time compliance checklist
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Follow-up
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Access to shared threaded case notes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Mark's Admin Flow
                </h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Stage
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        UX Opportunity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Oversight
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Dashboard of clinic activities
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Audit Prep
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Checklist history + red flag logs
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Case Review
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Note versions + staff comment trail
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
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
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Feature
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        ezEMRx (New)
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Legacy EHR
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Competitors
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Smart Charting
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        AI Referral Suggestions
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Real-Time Compliance Checks
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Threaded Case Notes
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        →
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Role-Specific Dashboards
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Key Differentiators:
                </h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Inline AI with explainability, not automation-only
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Real-time audit tools designed for field staff
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Patient-first timeline spanning charting, visits, and
                    referrals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features & Innovations */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
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
                  <strong>Smart Charting:</strong> Auto-suggest fields with
                  badge-level confidence
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>AI Referral Builder:</strong> Suggests destinations
                  based on logic + overrides
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Real-Time Compliance Drawer:</strong> Checklist with
                  flag severity + notes
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Threaded Case Notes:</strong> Comments, history, and
                  role-based visibility
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>Patient Timeline:</strong> Chronological summary with
                  inline preview
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results & Impact
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Metrics
                </h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Metric
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Documentation Time
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">
                        ↓ 20%
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Compliance Pass Rate
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-blue-600">
                        ↑ 70%
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Case Notes per Patient
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-purple-600">
                        ↑ 2.3×
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Referral Time
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-orange-600">
                        ↓ 35%
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        AI Transparency Clarity
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-indigo-600">
                        92% positive user feedback
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="text-[20px] font-medium text-[#131417]">
                  Qualitative Feedback
                </h3>
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "The referral suggestions saved me so much time — I finally
                  trust it."
                  <br />
                  <span className="text-[14px] font-medium text-[#9FA0A3] not-italic">
                    – WIC Clinician
                  </span>
                </blockquote>
                <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "Audit prep doesn't feel like a fire drill anymore."
                  <br />
                  <span className="text-[14px] font-medium text-[#9FA0A3] not-italic">
                    – Program Director
                  </span>
                </blockquote>
                <blockquote className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "I know what the AI is doing — and I can overrule it."
                  <br />
                  <span className="text-[14px] font-medium text-[#9FA0A3] not-italic">
                    – Public Health Nurse
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Final Reflections */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Final Reflections
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  What I Learned
                </h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Design earns trust:</strong> Audit-ready design is
                    about transparency, not control
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>AI ≠ automation:</strong> Users want augmentation
                    with override
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Simplicity scales:</strong> Reusable flows help
                    serve multiple programs
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    <strong>Clinician time is precious:</strong> Microcopy and
                    layout save minutes that matter
                  </li>
                </ul>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "Design isn't just what it looks like — it's how a clinician
                trusts an EHR to document care, reduce audits, and get referrals
                right."
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      {/* Image Enlargement Modal */}
      {isImageEnlarged && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-0 duration-300">
          <div className="relative max-w-7xl max-h-full overflow-auto animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setIsImageEnlarged(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-[#131417] rounded-full p-2 transition-all duration-300 hover:scale-110"
              aria-label="Close enlarged image"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src="/old_2.png"
              alt="Original EHR interface showing complex navigation, outdated design patterns, and inefficient data entry workflows that healthcare professionals struggled with daily"
              className="max-w-full max-h-full object-contain rounded-[12px] shadow-2xl"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="bg-white/90 backdrop-blur-sm text-[#131417] px-4 py-2 rounded-full text-sm font-medium">
                Original EHR interface - Click outside to close
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsImageEnlarged(false)}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
