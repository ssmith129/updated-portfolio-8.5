import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, TrendingUp, Users, Clock, Target, X, ZoomIn } from "lucide-react";
import { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";

export default function ComputisCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:scale-105 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8">
          <span className="inline-block bg-[#131417] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6 transition-all duration-300 hover:scale-105">
            Product Design Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] tracking-[-1.2px] mb-6 transition-all duration-500">
            Computis – Crypto Tax Engine
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-[800px] transition-all duration-300 hover:text-[#131417]">
            From Dev-Only Script to Scalable, CPA-First SaaS Platform
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16">

        {/* Executive Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
            className="w-full mt-5 aspect-[2.18] object-cover object-center min-h-5 min-w-5 overflow-hidden"
            alt="Executive Summary"
          />
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Executive Summary
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">Role</h3>
                <p className="text-lg font-medium text-[#131417]">Lead Product Designer</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">Company</h3>
                <p className="text-lg font-medium text-[#131417]">Computis Inc.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">Platform</h3>
                <p className="text-lg font-medium text-[#131417]">Web-based SaaS</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">Duration</h3>
                <p className="text-lg font-medium text-[#131417]">10 months</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">Team</h3>
                <p className="text-lg font-medium text-[#131417]">CTO, PM, 2 Engineers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">Tools</h3>
                <p className="text-lg font-medium text-[#131417]">Figma, Miro, Jira</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-[20px] p-6 sm:p-8">
              <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Key Impact Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">45%</div>
                  <p className="text-sm text-[#9FA0A3]">↓ CPA onboarding time</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">32%</div>
                  <p className="text-sm text-[#9FA0A3]">↑ demo-to-conversion rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">85%</div>
                  <p className="text-sm text-[#9FA0A3]">↓ engineering dependency</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">18%</div>
                  <p className="text-sm text-[#9FA0A3]">↓ bounce rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">150%</div>
                  <p className="text-sm text-[#9FA0A3]">↑ anomaly detection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Transformation */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            Before/After Transformation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-[20px] p-6 sm:p-8 border border-red-100">
              <h3 className="text-xl font-medium text-red-800 mb-4">Before: CLI-based Python Scripts</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  No UI, no audit trail
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  100% dev-dependent for every task
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Manual CSV formatting & classification
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 sm:p-8 border border-green-100">
              <h3 className="text-xl font-medium text-green-800 mb-4">After: Enterprise-Grade SaaS</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Modular, role-based dashboards
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  AI-enhanced classification with confidence badges
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  One-click IRS 8949 & QuickBooks exports
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Full audit traceability
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Problem & Opportunity
            </h2>
            
            <div className="space-y-8">
              <div className="bg-orange-50 rounded-[20px] p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-medium text-[#131417] mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Core Problem
                </h3>
                <p className="text-lg text-[#131417] leading-[150%]">
                  CPAs had zero autonomy in crypto tax workflows. Every classification, export, or audit scenario required engineering intervention, blocking scalability and eroding trust.
                </p>
              </div>

              <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-medium text-[#131417] mb-4">Opportunity</h3>
                <p className="text-lg text-[#131417] leading-[150%] mb-4">Build a CPA-first platform that:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                    Empowers accountants to classify, reconcile, and export without dev help
                  </li>
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                    Builds trust via transparency in AI logic
                  </li>
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                    Supports compliance through audit-first design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#131417] text-white rounded-[25px] p-8 sm:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-6">
              Design Principles & North Star
            </h2>
            
            <div className="bg-white/10 rounded-[20px] p-6 mb-8">
              <h3 className="text-xl font-medium mb-4">North Star</h3>
              <blockquote className="text-lg italic leading-[150%]">
                "Design a platform where a CPA can explain any audit report to a regulator — without needing a developer in the room."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-[16px] p-6">
                <h4 className="font-medium mb-2">Make Automation Explainable</h4>
                <p className="text-sm text-white/80">AI suggestions must surface logic, not hide it.</p>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6">
                <h4 className="font-medium mb-2">Design for Audit Clarity</h4>
                <p className="text-sm text-white/80">Every change traceable, export-ready, regulator-proof.</p>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6">
                <h4 className="font-medium mb-2">Empower Without Overwhelm</h4>
                <p className="text-sm text-white/80">Progressive disclosure for complex workflows.</p>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6">
                <h4 className="font-medium mb-2">Architect for Scale</h4>
                <p className="text-sm text-white/80">Modular IA for multi-client, multi-role workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Design Process
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-normal text-[#9013fe] mb-4 pb-4">Discovery → Define → Design → Validate → Deliver</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-[#131417] mb-2">Discovery</h4>
                <p className="text-[#4a4a4a]">1:1 CPA interviews, workflow shadowing, analytics review, competitive teardown (TaxBit, Cryptio, CoinTracker)</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 mt-6">
                <h4 className="font-semibold text-[#131417] mb-2">Define</h4>
                <p className="text-[#4a4a4a]">Personas, journey maps, service blueprints, modular IA (Clients → Wallets → Transactions → Rules → Reports → Exports)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6 mt-6">
                <h4 className="font-semibold text-[#131417] mb-2">Design</h4>
                <p className="text-[#4a4a4a]">30+ responsive screens, variant-driven component library, WCAG 2.1 AA compliance, AI + anomaly UI patterns</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 mt-6">
                <h4 className="font-semibold text-[#131417] mb-2">Validate</h4>
                <p className="text-[#4a4a4a]">Usability tests with CPAs & analysts, Maze heatmaps, microcopy refinements for trust-building</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6 mt-6">
                <h4 className="font-semibold text-[#131417] mb-2">Deliver</h4>
                <p className="text-[#4a4a4a]">Annotated Figma specs, dev story links in Jira, QA checklists, responsive testing, accessibility validation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Research & Insights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Research Methods</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Interviews with CPAs & Analysts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Shadowing ingestion/report flows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Mixpanel + GA usage drop-off audit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Teardowns: CoinTracker, TaxBit, Cryptio</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Key Insights</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-[16px] p-4 border-l-4 border-red-500">
                    <p className="text-sm font-medium text-red-800 mb-1">Trust Barrier</p>
                    <p className="text-sm text-red-700">CPAs distrust automation → Needed override tools</p>
                  </div>
                  <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500">
                    <p className="text-sm font-medium text-orange-800 mb-1">Error Overwhelm</p>
                    <p className="text-sm text-orange-700">Analysts overwhelmed by ingestion errors → Needed flags + diagnostics</p>
                  </div>
                  <div className="bg-yellow-50 rounded-[16px] p-4 border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-yellow-800 mb-1">Audit Anxiety</p>
                    <p className="text-sm text-yellow-700">No audit trail = lost trust</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-4">Feature Outcomes from Research</h3>
              <div className="flex flex-row justify-start gap-4 w-auto">
                <div className="flex items-start gap-3 w-auto">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">AI confidence tooltips + Accept/Reject</span>
                </div>
                <div className="flex items-start gap-3 w-auto">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">Rule logic builder</span>
                </div>
                <div className="flex items-center gap-3 w-auto justify-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">Smart wallet upload with schema preview</span>
                </div>
                <div className="flex items-start gap-3 w-auto">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">Audit trail drawer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            User Personas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* David (CPA) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">David</h3>
                  <p className="text-[#9FA0A3] font-medium">Senior CPA</p>
                  <p className="text-sm text-[#9FA0A3]">8+ years experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div style={{backgroundColor: '#fff7ed'}} className="p-4 rounded-[16px] border border-green-200">
                  <h4 className="text-sm font-medium text-green-800 mb-2">Needs</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Audit logs for compliance</li>
                    <li>• Rule overrides for edge cases</li>
                    <li>• QuickBooks export integration</li>
                  </ul>
                </div>

                <div style={{backgroundColor: '#fef2f2'}} className="p-4 rounded-[16px] border border-red-200">
                  <h4 className="text-sm font-medium text-red-800 mb-2">Pain Points</h4>
                  <p className="text-sm text-red-700">No visibility into classifications or logic - creates audit anxiety and compliance risk</p>
                </div>
              </div>
            </div>

            {/* Mya (Analyst) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">Mya</h3>
                  <p className="text-[#9FA0A3] font-medium">Operations Analyst</p>
                  <p className="text-sm text-[#9FA0A3]">3+ years experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div style={{backgroundColor: '#fff7ed'}} className="p-4 rounded-[16px] border border-green-200">
                  <h4 className="text-sm font-medium text-green-800 mb-2">Needs</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Diagnostics for quick error resolution</li>
                    <li>• Anomaly detection for quality assurance</li>
                    <li>• Tagging workflows for organization</li>
                  </ul>
                </div>

                <div style={{backgroundColor: '#fef2f2'}} className="p-4 rounded-[16px] border border-red-200">
                  <h4 className="text-sm font-medium text-red-800 mb-2">Pain Points</h4>
                  <p className="text-sm text-red-700">Manual fixes with no traceability, FMV gaps causing delays in processing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Mapping */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              User Journey Mapping
            </h2>

            <div className="space-y-12">
              {/* David's Journey */}
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">D</span>
                  </div>
                  David's CPA Workflow
                </h3>

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">1</div>
                      <p className="text-sm font-medium text-[#131417]">Upload</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">2</div>
                      <p className="text-sm font-medium text-[#131417]">Classify</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">3</div>
                      <p className="text-sm font-medium text-[#131417]">Review</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">4</div>
                      <p className="text-sm font-medium text-[#131417]">Export</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">5</div>
                      <p className="text-sm font-medium text-[#131417]">Audit</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-[16px] p-4 mt-6">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Tools Used</h4>
                  <p className="text-sm text-blue-700">Visual Rule Builder, AI override, IRS/QBO export, audit log per transaction</p>
                </div>
              </div>

              {/* Mya's Journey */}
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-600">M</span>
                  </div>
                  Mya's Analyst Workflow
                </h3>

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">1</div>
                      <p className="text-sm font-medium text-[#131417]">Ingest</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">2</div>
                      <p className="text-sm font-medium text-[#131417]">Review Anomalies</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">3</div>
                      <p className="text-sm font-medium text-[#131417]">Tag/Fix</p>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="flex-1 text-center">
                      <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">4</div>
                      <p className="text-sm font-medium text-[#131417]">Support Export</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-[16px] p-4 mt-6">
                  <h4 className="text-sm font-medium text-purple-800 mb-2">Tools Used</h4>
                  <p className="text-sm text-purple-700">Anomaly flags, comment trails, FMV dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Research */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Market Research
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Industry Trends</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-[16px] border border-orange-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium text-orange-800 mb-1">IRS Pressure Increasing</p>
                      <p className="text-sm text-orange-700">Regulatory scrutiny demanding better compliance tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-[16px] border border-blue-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium text-blue-800 mb-1">Multi-wallet Complexity Rising</p>
                      <p className="text-sm text-blue-700">Users managing 5+ wallets across different protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-[16px] border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium text-green-800 mb-1">Traceability Over Automation</p>
                      <p className="text-sm text-green-700">Firms need explainable processes, not black boxes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Competitive Landscape</h3>
                <div className="space-y-3">
                  <div className="text-sm text-[#9FA0A3] mb-4">
                    <strong className="text-[#131417]">Competitors Reviewed:</strong> Cryptio, TaxBit, CoinTracker, ZenLedger
                  </div>

                  <div className="bg-green-50 rounded-[16px] p-4 border border-green-200">
                    <h4 className="text-sm font-medium text-green-800 mb-3">Computis Differentiators</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Visual rule logic builder
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Fully embedded audit trail
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Role-based interfaces
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Explainable AI with confidence scores
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2500">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Competitive Feature Analysis
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-[#131417]">Feature</th>
                    <th className="text-center py-4 px-4 font-medium text-[#131417]">Computis</th>
                    <th className="text-center py-4 px-4 font-medium text-[#131417]">TaxBit</th>
                    <th className="text-center py-4 px-4 font-medium text-[#131417]">Cryptio</th>
                    <th className="text-center py-4 px-4 font-medium text-[#131417]">CoinTracker</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-[#131417]">CPA Rule Engine</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full">✗</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full">✗</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-[#131417]">AI Suggestions</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full">~</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full">~</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-[#131417]">Audit Logs</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full">~</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full">✗</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-[#131417]">QBO/IRS Export</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full">~</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">✓</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full">~</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-[#9FA0A3]">Full Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xs">~</span>
                  <span className="text-[#9FA0A3]">Partial Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">✗</span>
                  <span className="text-[#9FA0A3]">No Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2700">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            Key Features & Why They Mattered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-medium text-[#131417] mb-3">Smart Wallet Upload</h3>
                <p className="text-[#9FA0A3] text-sm mb-3">Error diagnostics & schema preview</p>
                <p className="text-sm text-green-600 font-medium">→ Reduced ingestion errors, freed analysts from manual triage</p>
                <div
                  className="relative group cursor-pointer mt-5"
                  onClick={() => setEnlargedImage({
                    src: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=2000",
                    alt: "Smart Wallet Upload"
                  })}
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4998981e281b4d759adf901106718cad"
                    className="w-full aspect-[1.17] object-contain object-center min-h-5 min-w-5 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    alt="Smart Wallet Upload"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-medium text-[#131417] mb-3">AI Suggestions + Override</h3>
                <p className="text-[#9FA0A3] text-sm mb-3">Confidence badges with tooltips</p>
                <p className="text-sm text-green-600 font-medium">→ Built trust, increased classification speed by 60%</p>
                <div
                  className="relative group cursor-pointer mt-5"
                  onClick={() => setEnlargedImage({
                    src: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=2000",
                    alt: "AI Suggestions + Override"
                  })}
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dad69805cd24aeb993d1a56bc1a6e4a"
                    className="w-full aspect-[1.1] object-contain object-center min-h-5 min-w-5 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    alt="AI Suggestions + Override"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-medium text-[#131417] mb-3">Visual Rule Builder</h3>
                <p className="text-[#9FA0A3] text-sm mb-3">Before/after previews & real-time error flags</p>
                <p className="text-sm text-green-600 font-medium">→ Enabled CPAs to self-manage classification logic</p>
                <div
                  className="relative group cursor-pointer mt-5"
                  onClick={() => setEnlargedImage({
                    src: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=2000",
                    alt: "Visual Rule Builder"
                  })}
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffe480aa1f3b241a3908740205edd8463"
                    className="w-full aspect-[0.65] object-contain object-center min-h-5 min-w-5 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    alt="Visual Rule Builder"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-medium text-[#131417] mb-3">FMV Dashboard & Anomaly Detection</h3>
                <p className="text-[#9FA0A3] text-sm mb-3">Severity flags & hover explanations</p>
                <p className="text-sm text-green-600 font-medium">→ Increased anomaly coverage by 150%</p>
                <div
                  className="relative group cursor-pointer mt-5"
                  onClick={() => setEnlargedImage({
                    src: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=2000",
                    alt: "FMV Dashboard & Anomaly Detection"
                  })}
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a0a927023a04ee2b83854cb505411a6"
                    className="w-full aspect-[0.74] object-contain object-center min-h-5 min-w-5 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    alt="FMV Dashboard & Anomaly Detection"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">Audit-Ready Exports</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">IRS 8949, QBO, CSV with embedded audit logs</p>
              <p className="text-sm text-green-600 font-medium">→ Cut reporting prep time by 45%</p>
              <div
                className="relative group cursor-pointer mt-5"
                onClick={() => setEnlargedImage({
                  src: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=2000",
                  alt: "Audit-Ready Exports"
                })}
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fe6129f7dd3c242c9889faf75ebd7d521"
                  className="w-full aspect-[0.78] object-contain object-center min-h-5 min-w-5 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  alt="Audit-Ready Exports"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-medium text-[#131417] mb-3">Role-Based Dashboards</h3>
                <p className="text-[#9FA0A3] text-sm mb-3">CPA, Analyst, Admin views with permissions</p>
                <p className="text-sm text-green-600 font-medium">→ Improved workflow clarity & security</p>
                <div
                  className="relative group cursor-pointer mt-5"
                  onClick={() => setEnlargedImage({
                    src: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=2000",
                    alt: "Role-Based Dashboards"
                  })}
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F95d27347e0e94edf84d1b7c5ec4c54cc"
                    className="w-full aspect-[0.72] object-contain object-center min-h-5 min-w-5 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    alt="Role-Based Dashboards"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embed Placeholder */}
        <div className="flex flex-col relative mt-12">
          <div
            className="p-5 text-center"
            dangerouslySetInnerHTML={{
              __html: '<div style="padding: 20px; text-align: center">(Choose an embed URL)<div>'
            }}
          />
        </div>

        {/* Results & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Results & Impact
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Quantitative Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-[#9FA0A3]">CPA onboarding time</span>
                    <span className="font-medium text-green-600">2.5hrs → 1.4hrs (↓45%)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-[#9FA0A3]">Demo conversion rate</span>
                    <span className="font-medium text-blue-600">↑32%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-[#9FA0A3]">Bounce rate</span>
                    <span className="font-medium text-purple-600">↓18%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-[#9FA0A3]">Manual dev dependency</span>
                    <span className="font-medium text-orange-600">100% → 15% (↓85%)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#9FA0A3]">Anomaly detection coverage</span>
                    <span className="font-medium text-red-600">↑150%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Qualitative Feedback</h3>
                <div className="space-y-4">
                  <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-[16px] italic">
                    "It finally feels like a product we can sell to institutions."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">— Product Owner</cite>
                  </blockquote>
                  
                  <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-[16px] italic">
                    "AI suggestions cut our triage work in half, and I still feel in control."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">— CPA Stakeholder</cite>
                  </blockquote>
                  
                  <blockquote className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-[16px] italic">
                    "The clarity of your design handoff made engineering 10x faster."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">— Lead Frontend Developer</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Reflections & Future Roadmap
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">What I Learned</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Trust is the UX currency in regulated fintech</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Explainable AI wins over "magic" AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Modular architecture is the key to scalability</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">Next Steps</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">AI-powered rule suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Granular permission tiers for large firms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">Deeper DeFi integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Related Case Studies */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <RelatedCaseStudies currentCaseStudyId="computis" />
      </section>

      <Footer />

      {/* Image Modal Overlay */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
              aria-label="Close enlarged image"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
