import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle, TrendingUp, Users, Clock, Target } from "lucide-react";
import { SkipLink } from "../components/Navigation";
import Breadcrumbs, { generateBreadcrumbs } from "../components/Breadcrumbs";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";

export default function ComputisCaseStudy() {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />

      {/* Breadcrumbs and Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 space-y-4 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
        <Breadcrumbs items={breadcrumbs} className="mb-4" />
        
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
              <h3 className="text-xl font-medium text-[#131417] mb-4">Framework: Discovery → Define → Design → Validate → Deliver</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-medium text-[#131417] mb-2">Discovery</h4>
                <p className="text-[#9FA0A3]">1:1 CPA interviews, workflow shadowing, analytics review, competitive teardown (TaxBit, Cryptio, CoinTracker)</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-medium text-[#131417] mb-2">Define</h4>
                <p className="text-[#9FA0A3]">Personas, journey maps, service blueprints, modular IA (Clients → Wallets → Transactions → Rules → Reports → Exports)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-medium text-[#131417] mb-2">Design</h4>
                <p className="text-[#9FA0A3]">30+ responsive screens, variant-driven component library, WCAG 2.1 AA compliance, AI + anomaly UI patterns</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-medium text-[#131417] mb-2">Validate</h4>
                <p className="text-[#9FA0A3]">Usability tests with CPAs & analysts, Maze heatmaps, microcopy refinements for trust-building</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="font-medium text-[#131417] mb-2">Deliver</h4>
                <p className="text-[#9FA0A3]">Annotated Figma specs, dev story links in Jira, QA checklists, responsive testing, accessibility validation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            Key Features & Why They Mattered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">Smart Wallet Upload</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">Error diagnostics & schema preview</p>
              <p className="text-sm text-green-600 font-medium">→ Reduced ingestion errors, freed analysts from manual triage</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">AI Suggestions + Override</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">Confidence badges with tooltips</p>
              <p className="text-sm text-green-600 font-medium">→ Built trust, increased classification speed by 60%</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">Visual Rule Builder</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">Before/after previews & real-time error flags</p>
              <p className="text-sm text-green-600 font-medium">→ Enabled CPAs to self-manage classification logic</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">FMV Dashboard & Anomaly Detection</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">Severity flags & hover explanations</p>
              <p className="text-sm text-green-600 font-medium">→ Increased anomaly coverage by 150%</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">Audit-Ready Exports</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">IRS 8949, QBO, CSV with embedded audit logs</p>
              <p className="text-sm text-green-600 font-medium">→ Cut reporting prep time by 45%</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-medium text-[#131417] mb-3">Role-Based Dashboards</h3>
              <p className="text-[#9FA0A3] text-sm mb-3">CPA, Analyst, Admin views with permissions</p>
              <p className="text-sm text-green-600 font-medium">→ Improved workflow clarity & security</p>
            </div>
          </div>
        </section>

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
    </div>
  );
}
