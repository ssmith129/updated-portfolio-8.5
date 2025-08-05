import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ComputisCaseStudy() {
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
            Computis – Crypto Tax Engine
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Transforming a backend crypto tax script into an enterprise-grade, CPA-first SaaS platform
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
                  <p className="text-[18px] font-medium text-[#131417]">Computis Inc.</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Type</p>
                  <p className="text-[18px] font-medium text-[#131417]">Crypto Tax Automation – B2B Enterprise SaaS</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Duration</p>
                  <p className="text-[18px] font-medium text-[#131417]">10 months</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[14px] font-medium text-[#9FA0A3] mb-4">Tools & Team</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Tools:</p>
                    <p className="text-[16px] text-[#131417]">Figma, Miro, Jira, Notion, Webflow, GA</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Team:</p>
                    <p className="text-[16px] text-[#131417]">CTO, PM, 2 Engineers, Selecto (Design/Dev Agency)</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">✅ Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">↓ 45%</span>
                    <span className="text-[16px] text-[#131417]">CPA onboarding time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">↑ 32%</span>
                    <span className="text-[16px] text-[#131417]">demo-to-conversion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">↓ 85%</span>
                    <span className="text-[16px] text-[#131417]">reliance on engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">↑ 150%</span>
                    <span className="text-[16px] text-[#131417]">anomaly detection coverage</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">📄 6</span>
                  <span className="text-[16px] text-[#131417]">core modules launched with full audit trail UX</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Context & Overview
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                When I joined, Computis was a Python script tool that required devs to manually ingest crypto data and produce IRS forms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                  <p className="text-[18px] font-medium text-[#131417] mb-2">📉 Before:</p>
                  <p className="text-[16px] text-[#131417]">No UI, no classification logic for CPAs, and no audit-ready visibility.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <p className="text-[18px] font-medium text-[#131417] mb-2">📈 Opportunity:</p>
                  <p className="text-[16px] text-[#131417]">The IRS crackdown on crypto made demand for transparent tax tooling skyrocket.</p>
                </div>
              </div>
              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "We weren't just building a UI — we were replacing engineering dependence with user trust."
              </blockquote>
            </div>
          </div>
        </section>

        {/* My Role & Responsibilities */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                My Role & Responsibilities
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <p className="text-[18px] font-medium text-[#131417] mb-4">Title: Lead Product Designer</p>
                <p className="text-[16px] font-medium text-[#131417] mb-3">Scope:</p>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    UX Strategy & Product Direction
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Stakeholder Interviews (CPAs, Analysts, CTO)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Design System Architecture (WCAG 2.1 AA)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Full UI Design: 30+ Screens + Edge Cases
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Developer Handoff + QA Workflows
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[18px] font-medium text-[#131417] mb-3">🤝 Cross-functional Coordination:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Held async Figma walkthroughs per module
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Wrote detailed component behavior annotations
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Created handoff bundles linked to Jira epics
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Ran weekly QA validation alongside engineers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Problem Statement & Opportunity
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Initial State</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Pain Point</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No UI</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CPAs couldn't self-serve</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Hardcoded rules</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Engineers had to triage all data</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No audit trail</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">IRS compliance risk</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No FMV diagnostics</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Frequent data mismatches</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CSV-only exports</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Manual work for QBO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🔁 Reframed Opportunity:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  This wasn't just a UI problem — it was a control handoff problem.
                </p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  We needed to shift trust from developers to CPAs by exposing logic, version history, and override control.
                </p>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[16px] font-medium text-[#9FA0A3] mb-2">🎯 Design North Star:</p>
                "Enable any CPA to confidently explain their crypto tax report to a regulator — without needing a developer."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Research & Insights
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Methods Used:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    1:1 interviews with CPAs and Ops Analysts
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Workflow shadowing of ingestion → audit exports
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    GA + Mixpanel analysis
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Competitor UX teardown (TaxBit, Cryptio, CoinTracker)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">💡 Key Insights:</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Insight</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Design Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CPAs distrust automation</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Add AI confidence badges + override tools</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Analysts lack upload diagnostics</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Build ingestion preview + error flagging</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Teams want visibility</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Enable audit logs and tagging workflows</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">FMV reconciliation is manual</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Create anomaly dashboards and severity indicators</td>
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
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">Target Segments:</h3>
                    <ul className="space-y-1">
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        CPA Firms & Crypto Accounting Pros
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        DAO Treasurers
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Crypto Hedge Funds
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Exchanges & Aggregators
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">Trend Signals:</h3>
                    <ul className="space-y-1">
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        IRS scrutiny is increasing
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        CPAs want override logic — not hidden AI
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Bulk data ingestion is a bottleneck
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Competitive Matrix:</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Feature</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Computis</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">TaxBit</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Cryptio</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">CoinTracker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Rule Engine</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">AI Confidence Scores</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Audit Logs</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Bulk Tagging</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">QuickBooks Exports</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🧠 Differentiator:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Computis was the only platform with a drag-and-drop rule engine, AI transparency, audit logs, and FMV dashboards — all built into a modular, white-labeled interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Flows & Journey Mapping */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Flows & Journey Mapping
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="space-y-16 lg:space-y-20">
                {/* Persona Cards */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#131417] mb-8 lg:mb-12">User Personas</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* David - CPA Persona */}
                    <div className="bg-white p-8 lg:p-10 rounded-[25px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] group">
                      <div className="flex items-center gap-6 mb-8">
                        {/* Professional Avatar */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-[#131417] mb-1">David</h4>
                          <p className="text-[#9FA0A3] text-lg font-medium">Senior CPA</p>
                          <p className="text-[#666] text-sm mt-1">8+ years experience</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {/* Goals */}
                        <div className="bg-blue-50 p-6 rounded-[20px] border border-blue-100">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-[#131417]">Primary Goals</h5>
                          </div>
                          <ul className="text-sm text-[#555] space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              Efficient transaction processing for 50+ crypto clients
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              Ensure 100% compliance with evolving tax regulations
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              Reduce manual categorization by 80%
                            </li>
                          </ul>
                        </div>
                        
                        {/* Pain Points */}
                        <div className="bg-red-50 p-6 rounded-[20px] border border-red-100">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-[#131417]">Key Pain Points</h5>
                          </div>
                          <ul className="text-sm text-[#555] space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              Manual categorization takes 4+ hours per client
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              Time-consuming compliance reviews and audits
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              Complex crypto tax regulation changes
                            </li>
                          </ul>
                        </div>
                        
                        {/* Key Needs */}
                        <div className="bg-green-50 p-6 rounded-[20px] border border-green-100">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-[#131417]">Essential Needs</h5>
                          </div>
                          <ul className="text-sm text-[#555] space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Drag-and-drop rule builder</strong> for custom categorization
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Bulk processing capabilities</strong> for large datasets
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Real-time compliance validation</strong> with tax rules
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Mya - Analyst Persona */}
                    <div className="bg-white p-8 lg:p-10 rounded-[25px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] group">
                      <div className="flex items-center gap-6 mb-8">
                        {/* Professional Avatar */}
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-[#131417] mb-1">Mya</h4>
                          <p className="text-[#9FA0A3] text-lg font-medium">Senior Data Analyst</p>
                          <p className="text-[#666] text-sm mt-1">5+ years fintech experience</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {/* Goals */}
                        <div className="bg-purple-50 p-6 rounded-[20px] border border-purple-100">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-[#131417]">Analytical Goals</h5>
                          </div>
                          <ul className="text-sm text-[#555] space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              Generate accurate financial reports within SLA
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              Maintain 99.9% data accuracy across platforms
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              Streamline reporting workflows by 60%
                            </li>
                          </ul>
                        </div>
                        
                        {/* Pain Points */}
                        <div className="bg-orange-50 p-6 rounded-[20px] border border-orange-100">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-[#131417]">Key Pain Points</h5>
                          </div>
                          <ul className="text-sm text-[#555] space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                              Data inconsistencies across 8+ platforms
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                              Complex workflows requiring manual oversight
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                              Limited real-time collaboration capabilities
                            </li>
                          </ul>
                        </div>
                        
                        {/* Key Needs */}
                        <div className="bg-teal-50 p-6 rounded-[20px] border border-teal-100">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-[#131417]">Essential Needs</h5>
                          </div>
                          <ul className="text-sm text-[#555] space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Advanced filtering options</strong> with saved queries
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Real-time collaboration tools</strong> for team workflows
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Automated report generation</strong> with custom templates
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Journey Map */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#131417] mb-8 lg:mb-12">User Journey Map</h3>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 rounded-[30px] border border-gray-200">
                    {/* Journey Flow Header */}
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-[#131417]">Complete Crypto Tax Processing Journey</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Journey Stages Flow */}
                    <div className="relative">
                      {/* Connection Line */}
                      <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-yellow-400 via-green-400 via-purple-400 to-orange-400 rounded-full opacity-30 hidden lg:block"></div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                        {[
                          { 
                            stage: 'Upload', 
                            color: 'from-blue-500 to-blue-600',
                            bgColor: 'bg-blue-50',
                            borderColor: 'border-blue-200',
                            icon: (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            ),
                            action: 'Import CSV/API data from exchanges',
                            emotion: '😰 Cautious',
                            pain: 'File format compatibility issues',
                            touchpoint: 'Drag & drop interface',
                            opportunity: 'Auto-detect file formats'
                          },
                          { 
                            stage: 'Classify', 
                            color: 'from-yellow-500 to-yellow-600',
                            bgColor: 'bg-yellow-50',
                            borderColor: 'border-yellow-200',
                            icon: (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                            ),
                            action: 'Auto-categorize transactions using ML',
                            emotion: '🤔 Focused',
                            pain: 'Complex DeFi transaction rules',
                            touchpoint: 'Smart categorization engine',
                            opportunity: 'Learning from user corrections'
                          },
                          { 
                            stage: 'Review', 
                            color: 'from-green-500 to-green-600',
                            bgColor: 'bg-green-50',
                            borderColor: 'border-green-200',
                            icon: (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ),
                            action: 'Validate accuracy with bulk editing',
                            emotion: '😌 Confident',
                            pain: 'Time-consuming manual reviews',
                            touchpoint: 'Review dashboard',
                            opportunity: 'Smart exception highlighting'
                          },
                          { 
                            stage: 'Export', 
                            color: 'from-purple-500 to-purple-600',
                            bgColor: 'bg-purple-50',
                            borderColor: 'border-purple-200',
                            icon: (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            ),
                            action: 'Generate tax forms and reports',   
                            emotion: '😊 Satisfied',
                            pain: 'Limited output format options',
                            touchpoint: 'Export wizard',
                            opportunity: 'Custom report templates'
                          },
                          { 
                            stage: 'Audit', 
                            color: 'from-orange-500 to-orange-600',
                            bgColor: 'bg-orange-50',
                            borderColor: 'border-orange-200',
                            icon: (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                            ),
                            action: 'Final compliance verification',
                            emotion: '😅 Relieved',
                            pain: 'Regulatory complexity and changes',
                            touchpoint: 'Audit trail system',
                            opportunity: 'Proactive compliance alerts'
                          }
                        ].map((item, index) => (
                          <div key={index} className="relative group">
                            {/* Stage Card */}
                            <div className={`${item.bgColor} ${item.borderColor} border-2 p-6 lg:p-8 rounded-[25px] hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl`}>
                              {/* Stage Header */}
                              <div className="text-center mb-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                  {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#131417] mb-2">{item.stage}</h4>
                                <div className="w-8 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto opacity-50"></div>
                              </div>
                              
                              {/* Stage Details */}
                              <div className="space-y-4 text-sm">
                                {/* User Action */}
                                <div className="bg-white/80 p-4 rounded-[15px] border border-white/50">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#131417] mb-1">User Action</p>
                                      <p className="text-[#666]">{item.action}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Emotion */}
                                <div className="bg-white/80 p-4 rounded-[15px] border border-white/50">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#131417] mb-1">Emotion</p>
                                      <p className="text-[#666]">{item.emotion}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Pain Point */}
                                <div className="bg-red-50/80 p-4 rounded-[15px] border border-red-100/50">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#131417] mb-1">Pain Point</p>
                                      <p className="text-[#666]">{item.pain}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Touchpoint */}
                                <div className="bg-blue-50/80 p-4 rounded-[15px] border border-blue-100/50">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#131417] mb-1">Touchpoint</p>
                                      <p className="text-[#666]">{item.touchpoint}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Opportunity */}
                                <div className="bg-green-50/80 p-4 rounded-[15px] border border-green-100/50">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#131417] mb-1">Opportunity</p>
                                      <p className="text-[#666]">{item.opportunity}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Arrow Connector (Desktop only) */}
                            {index < 4 && (
                              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                <div className="w-8 h-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Journey Insights */}
                    <div className="mt-12 pt-8 border-t border-gray-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-[20px] border border-gray-200 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#131417] mb-2">Time Saved</h4>
                          <p className="text-2xl font-bold text-blue-600 mb-1">85%</p>
                          <p className="text-sm text-[#666]">Reduction in processing time</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-[20px] border border-gray-200 text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#131417] mb-2">Accuracy</h4>
                          <p className="text-2xl font-bold text-green-600 mb-1">99.7%</p>
                          <p className="text-sm text-[#666]">Classification accuracy rate</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-[20px] border border-gray-200 text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#131417] mb-2">User Satisfaction</h4>
                          <p className="text-2xl font-bold text-purple-600 mb-1">4.8/5</p>
                          <p className="text-sm text-[#666]">Average user rating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🔍 UX Frictions Solved:</h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Lack of feedback → Introduced step-based upload & status chips
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    No version control → Inline audit trail
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Manual classification → AI + Bulk rules
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    No ingestion diagnostics → Schema validation preview
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ideation & Concepting */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Ideation & Concepting
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Design Concepts Explored:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Glass-box AI interface (vs. black-box)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Rule preview sandbox with before/after logic
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Tooltip-on-hover for explainability
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Status indicators for classification trust
                  </li>
                </ul>
              </div>

              <div className="bg-[#131417] text-white p-8 rounded-[25px] transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-white mb-4">💡 Design Principles:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Trust = Transparency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Control {'>'} Automation</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Progressive Disclosure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wireframes & Prototyping */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Wireframes & Prototyping
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Low–Mid Fidelity wireframes for all 6 modules
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Component-driven UI with atomic architecture
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Edge case flows (FMV missing, duplicate txs, empty uploads)
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Prototypes tested via Maze + moderated sessions
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">✅ Design System:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Based on Ant Design 5.0
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    WCAG 2.1 AA compliant
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Responsive 1440px grid + tokenized variables
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Designs & Outcome */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Final Designs & Outcome
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🧩 Core Modules:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  Clients → Wallets → Transactions → Rules → Reports → Exports
                </p>
                
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🚀 Core Features Delivered:</h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Smart Upload Mapping + Error Flagging
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Visual Rule Builder + Sandbox
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    AI Confidence Chips + Override UI
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    FMV Dashboard + Anomaly Detection
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Audit-Ready Exports (IRS 8949, QBO, CSV)
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-[25px] border border-purple-200 transition-all duration-300 hover:border-purple-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">Classification Grid</h4>
                  <p className="text-[16px] text-[#131417]">w/ AI confidence</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-[25px] border border-orange-200 transition-all duration-300 hover:border-orange-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">Rule Builder</h4>
                  <p className="text-[16px] text-[#131417]">Drag-Drop UI</p>
                </div>
                <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">FMV Dashboard</h4>
                  <p className="text-[16px] text-[#131417]">w/ Red-Yellow-Gray Flags</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-[25px] border border-teal-200 transition-all duration-300 hover:border-teal-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">Audit Log</h4>
                  <p className="text-[16px] text-[#131417]">Timeline Drawer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results, Learnings & Next Steps */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results, Learnings & Next Steps
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">📊 Outcomes:</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Metric</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Before</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">After</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CPA Onboarding Time</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">2.5h</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">1.4h</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">↓ 45%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Bounce Rate</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">26%</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">8%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">↓ 18%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Demo Conversions</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">–</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">↑ 32%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-blue-600">↑</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Dev Dependency</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">100%</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">15%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-purple-600">↓ 85%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Anomaly Coverage</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Baseline</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">↑ 150%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-orange-600">↑</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="text-[20px] font-medium text-[#131417]">💬 Stakeholder Feedback:</h3>
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "Finally feels like a product we can sell to institutions."
                </blockquote>
                <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "AI helped us work faster — without giving up control."
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">📍 What I'd Improve:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Build deeper permission tiers
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Layer on LLM-backed transaction labeling
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Expand multi-entity white-label dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
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

          <div className="group bg-white/80 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            {/* Screenshot overlay that appears on hover */}
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
              <img 
                src="/Transactions Grid.png" 
                alt="Classification Grid Interface"
                className="w-[90%] h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
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

          <div className="group bg-white/60 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
              <img 
                src="/Rule Builder.png" 
                alt="Rule Builder Interface"
                className="w-[90%] h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

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

              <div className="group bg-white/20 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
                  <img 
                    src="/Audit Trail Drawer.png" 
                    alt="Audit Log Timeline Interface"
                    className="w-[90%] h-[90%] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>

              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                Terms of Use
              </a>
            </div>
          </div>

          <div className="group bg-white/40 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
              <img 
                src="/Homepage Dashboard.png" 
                alt="FMV Dashboard Interface"
                className="w-[90%] h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}