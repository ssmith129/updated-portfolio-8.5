import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";

export default function MoneyFarmCaseStudy() {
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
            MoneyFarm – AI-Powered Personal Finance Manager
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Transforming a fragmented budgeting experience into an AI-first
            personal finance platform that builds habits, reduces anxiety, and
            improves user confidence through behavioral nudges and transparent
            insights
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
                    Type
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    AI-Powered Personal Finance Platform
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col items-start justify-start flex-grow-0 h-auto">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Role
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    Lead Product Designer
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Company
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    Independent Project
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">
                    Duration
                  </p>
                  <p className="text-[18px] font-medium text-[#131417]">
                    10 weeks
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
                      Figma, Miro, Maze, Notion
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">
                      Team:
                    </p>
                    <p className="text-[16px] text-[#131417]">
                      PM, Engineers, AI Researcher
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  �� Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">↓ 45%</span>
                    <span className="text-[16px] text-[#131417]">
                      perceived effort to manage finances
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">↑ 92%</span>
                    <span className="text-[16px] text-[#131417]">
                      weekly engagement in MVP testing
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">↓ 75%</span>
                    <span className="text-[16px] text-[#131417]">
                      drop in user-reported anxiety around money
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">↑ 5/5</span>
                    <span className="text-[16px] text-[#131417]">
                      satisfaction on dashboard usability
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">📈</span>
                  <span className="text-[16px] text-[#131417]">
                    Designed for automated insights, gamified habits, and
                    goal-based financial coaching
                  </span>
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
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                MoneyFarm reimagines personal finance as a habit-building
                journey. Unlike traditional budgeting tools that feel cold or
                punitive, MoneyFarm uses explainable AI, behavioral psychology,
                and a warm visual design to help users develop better money
                habits over time.
              </p>
              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "It's not just a tracker—it's a coach that helps me *feel
                better* about my money."
              </blockquote>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                My Role
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Led product discovery and UX strategy
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Designed the full UX system: flows, UI, and component library
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Ran usability tests and onboarding iterations
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Collaborated with an AI researcher on explainability
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Delivered responsive handoff specs with dev-ready
                  documentation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Problem & Opportunity
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Pain Points:
                </h3>
                <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                          Problem
                        </th>
                        <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                          Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Users feel overwhelmed by money
                        </td>
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Avoidance, disengagement, and emotional burnout
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Budgeting tools feel punitive
                        </td>
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Reduced retention and frustration
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          No feedback on progress
                        </td>
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Users don't see value in small positive actions
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors duration-300">
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Generic advice
                        </td>
                        <td className="py-4 px-4 text-[16px] text-[#131417]">
                          Fails to motivate or build trust
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Design Opportunity:
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Build a platform that replaces guilt with growth—one that
                  nudges users toward smarter money decisions using clear
                  visuals, human-centered AI, and positive feedback loops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Timeline */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Process & Timeline
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                A structured 10-month design process focused on user-centered
                discovery, iterative design, and continuous validation to ensure
                MoneyFarm met real user needs.
              </p>

              {/* Timeline Visualization */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-6">
                  Project Timeline
                </h3>

                {/* Timeline Container */}
                <div className="space-y-4">
                  {/* Month Labels */}
                  <div className="flex justify-between text-[12px] font-medium text-[#9FA0A3] mb-2">
                    <span>Month 1</span>
                    <span>Month 2</span>
                    <span>Month 3</span>
                    <span>Month 4</span>
                    <span>Month 5</span>
                    <span>Month 6</span>
                    <span>Month 7</span>
                    <span>Month 8</span>
                    <span>Month 9</span>
                    <span>Month 10</span>
                  </div>

                  {/* Timeline Grid */}
                  <div className="relative h-[200px] bg-gray-50 rounded-lg p-4">
                    {/* Grid Lines */}
                    <div className="absolute inset-4 flex justify-between">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="w-px bg-gray-200 h-full" />
                      ))}
                    </div>

                    {/* Discovery Phase - Month 1 */}
                    <div className="absolute top-4 left-4 w-[8%] h-6 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-medium">
                        Discovery
                      </span>
                    </div>

                    {/* Define Phase - Month 2 */}
                    <div className="absolute top-12 left-[12%] w-[8%] h-6 bg-green-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-medium">
                        Define
                      </span>
                    </div>

                    {/* Design Phase - Months 3-6 */}
                    <div className="absolute top-20 left-[20%] w-[32%] h-6 bg-purple-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-[12px] font-medium">
                        Design
                      </span>
                    </div>

                    {/* Validate Phase - Months 5-7 */}
                    <div className="absolute top-28 left-[36%] w-[24%] h-6 bg-orange-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-[11px] font-medium">
                        Validate
                      </span>
                    </div>

                    {/* Delivery Phase - Months 7-10 */}
                    <div className="absolute top-36 left-[60%] w-[32%] h-6 bg-red-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-[12px] font-medium">
                        Delivery
                      </span>
                    </div>
                  </div>

                  {/* Phase Legend */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      <span className="text-[14px] text-[#131417]">
                        Discovery
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                      <span className="text-[14px] text-[#131417]">Define</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                      <span className="text-[14px] text-[#131417]">Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                      <span className="text-[14px] text-[#131417]">
                        Validate
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                      <span className="text-[14px] text-[#131417]">
                        Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-[15px] border border-blue-200 transition-all duration-300 hover:border-blue-300">
                  <h4 className="text-[16px] font-medium text-[#131417] mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                    Discovery
                  </h4>
                  <p className="text-[14px] text-[#131417]">
                    User interviews, market research, competitive analysis
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-[15px] border border-green-200 transition-all duration-300 hover:border-green-300">
                  <h4 className="text-[16px] font-medium text-[#131417] mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    Define
                  </h4>
                  <p className="text-[14px] text-[#131417]">
                    Problem definition, user personas, feature prioritization
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-[15px] border border-purple-200 transition-all duration-300 hover:border-purple-300">
                  <h4 className="text-[16px] font-medium text-[#131417] mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                    Design
                  </h4>
                  <p className="text-[14px] text-[#131417]">
                    Wireframing, prototyping, visual design, component library
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-[15px] border border-orange-200 transition-all duration-300 hover:border-orange-300">
                  <h4 className="text-[16px] font-medium text-[#131417] mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                    Validate
                  </h4>
                  <p className="text-[14px] text-[#131417]">
                    User testing, iterations, stakeholder feedback
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-[15px] border border-red-200 transition-all duration-300 hover:border-red-300 sm:col-span-2 lg:col-span-1">
                  <h4 className="text-[16px] font-medium text-[#131417] mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                    Delivery
                  </h4>
                  <p className="text-[14px] text-[#131417]">
                    Handoff documentation, developer collaboration, launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Research & Insights
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Methods Used:
                </h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    12 interviews across financial literacy levels
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    87-person survey on money habits and blockers
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Competitive analysis of Cleo, Copilot, Mint, YNAB, Monarch
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Key Insights:
                </h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Insight
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Design Response
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        "Budgeting apps make me feel guilty."
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Friendly tone, encouraging language, and
                        micro-celebrations
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        "Small changes don't feel impactful."
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Goal simulations that visualize long-term gains
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        "Tools don't understand how I earn/spend."
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Personalized AI tips based on behavior
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        "Money apps are hard to understand."
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Simplified UI and goal-based navigation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Market & Competitive Analysis
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">
                      Target Audience:
                    </h3>
                    <p className="text-[16px] text-[#131417]">
                      Young professionals and freelancers (ages 22–38) with
                      fluctuating income and moderate financial stress
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">
                      Trends:
                    </h3>
                    <ul className="space-y-1">
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Growing demand for financial automation and AI
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Decreasing engagement with spreadsheet-style dashboards
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        More users seeking emotionally intelligent tools
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                  Feature Comparison:
                </h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Feature
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        MoneyFarm
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Mint
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Copilot
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Monarch
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        AI-Powered Insights
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Habit Loop & Streak Tracking
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Visual Goal Simulations
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Non-Judgmental UX Tone
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">
                        ⚠️
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Gamified Engagement
                      </td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">
                        ✅
                      </td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* User Flows */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Flows
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                    Alicia (Early Career User):
                  </h3>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] mb-3">
                    <strong>Flow:</strong> Connect accounts → Set goal → Receive
                    AI insights → Build habit streak → Celebrate milestones
                  </p>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                    <strong>Needs:</strong> Empathetic onboarding, motivating
                    visualizations, and clear goal tracking
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">
                    Nico (Freelancer):
                  </h3>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] mb-3">
                    <strong>Flow:</strong> Track income → View monthly outlook →
                    Nudge savings → Receive daily reminders
                  </p>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                    <strong>Needs:</strong> Flexibility, daily check-ins,
                    behavior-based reminders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Concepts */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Design Concepts
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="text-green-600 text-[20px] mt-1">✅</span>
                  <div>
                    <strong>Gamified Habits</strong> — Weekly streaks, badges,
                    nudges
                  </div>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="text-green-600 text-[20px] mt-1">✅</span>
                  <div>
                    <strong>Explainable AI</strong> — Confidence levels and
                    rationale for tips
                  </div>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="text-green-600 text-[20px] mt-1">✅</span>
                  <div>
                    <strong>Simulation Previews</strong> — "Save $3/day =
                    $1,000/year" type visualizations
                  </div>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="text-green-600 text-[20px] mt-1">✅</span>
                  <div>
                    <strong>Mood-Aware UI</strong> — Soft gradients, dark mode,
                    encouraging messages
                  </div>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="text-green-600 text-[20px] mt-1">✅</span>
                  <div>
                    <strong>Non-Judgmental Language</strong> — No "you failed,"
                    only "here's how we can adjust"
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prototyping & System Design */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Prototyping & System Design
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  25+ annotated flows covering dashboard, goal setup, and
                  insights
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Figma component library with mobile and desktop variants
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Edge cases and error states defined in handoff docs
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Maze-tested onboarding and dashboard variants
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Design tokens for theming, spacing, and responsiveness
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Features & UI */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Core Features & UI
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Module
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Key Feature
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Unified Dashboard
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Shows net worth, spending categories, and savings goals
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Smart Goals
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        AI-suggested plans with automated transfers
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Insight Engine
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Personalized tips and breakdowns
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Habit Tracker
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Daily check-ins, progress streaks, positive nudges
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Goal Simulator
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Shows long-term impact of daily financial habits
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results & Impact
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Metric
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Baseline (Typical Tools)
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        With MoneyFarm
                      </th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Weekly Engagement
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        28%
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        92%
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">
                        ↑ 228%
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Reported Money Anxiety
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        7.3 / 10
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        3.2 / 10
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-blue-600">
                        ↓ 56%
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Onboarding Completion Rate
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        62%
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        88%
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-purple-600">
                        ↑ 42%
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Dashboard Clarity Score
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        3.4 / 5
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        5 / 5
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-orange-600">
                        ↑ 47%
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        Intent to Continue Use
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        45%
                      </td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">
                        87%
                      </td>
                      <td className="py-4 px-4 text-[16px] font-medium text-indigo-600">
                        ↑ 93%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "I actually *want* to open this app now. That's never happened
                  with my bank."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Final Takeaways */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Final Takeaways
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>
                    Behavioral finance needs coaching, not just tracking
                  </strong>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>AI should empower, not overwhelm</strong>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>
                    Design must reduce fear and friction in emotional domains
                    like money
                  </strong>
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  <strong>
                    Success is a platform that users *want* to return to—not
                    just one that works
                  </strong>
                </li>
              </ul>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "MoneyFarm didn't just redesign a UI—it reimagined how people
                *feel* about money."
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
