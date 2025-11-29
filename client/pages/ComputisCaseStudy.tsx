import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Eye, Settings, AlertTriangle, Lightbulb, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";

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
            FinTech UX Case Study
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium text-[#131417] leading-[120%] tracking-[-1.44px] mb-6 transition-all duration-500 hover:tracking-[-1.2px]">
            Computis — Designing AI Features for Crypto Tax Automation
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Leading the design of an AI-powered feature suite that augments CPA expertise while maintaining professional control
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-24 space-y-24">
        {/* Impact At a Glance */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Impact At a Glance
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Role</p>
                  <p className="text-[18px] font-medium text-[#131417]">Founding Lead Product Designer</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Duration</p>
                  <p className="text-[18px] font-medium text-[#131417]">10 months</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Platform</p>
                  <p className="text-[18px] font-medium text-[#131417]">Web SaaS (Desktop-first, responsive)</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[14px] font-medium text-[#9FA0A3] mb-4">Tools & Team</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Tools:</p>
                    <p className="text-[16px] text-[#131417]">Figma, Miro, Notion, Jira, Mixpanel, GA</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Team:</p>
                    <p className="text-[16px] text-[#131417]">CTO, PM, 2 ML Engineers, 2 Frontend Engineers, Design Partner</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[20px] font-medium text-[#131417]">Key Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="bg-green-50 p-6 rounded-[25px] border-2 border-green-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                    <p className="text-[14px] font-medium text-green-700 mb-2">CPA Onboarding Time</p>
                    <p className="text-[28px] font-bold text-green-600 mb-1">↓ 45%</p>
                    <p className="text-[14px] text-green-600">2.5h → 1.4h</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-[25px] border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                    <p className="text-[14px] font-medium text-blue-700 mb-2">Demo-to-Conversion</p>
                    <p className="text-[28px] font-bold text-blue-600">↑ 32%</p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-[25px] border-2 border-purple-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                    <p className="text-[14px] font-medium text-purple-700 mb-2">Manual Classification Work</p>
                    <p className="text-[28px] font-bold text-purple-600">↓ 85%</p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-[25px] border-2 border-orange-200 hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                    <p className="text-[14px] font-medium text-orange-700 mb-2">Error Detection Rate</p>
                    <p className="text-[28px] font-bold text-orange-600">↑ 150%</p>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-[25px] border-2 border-indigo-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                    <p className="text-[14px] font-medium text-indigo-700 mb-2">Enterprise Deals</p>
                    <p className="text-[28px] font-bold text-indigo-600">3</p>
                    <p className="text-[14px] text-indigo-600">closed in 6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                The Challenge
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                Computis had a solid, functional platform for crypto tax management—but CPAs were still spending excessive time on manual transaction classification. The existing UI handled data well, but lacked intelligent automation features that competitors were beginning to offer.
              </p>
              
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Pain Points Identified
                </h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    Manual classification of thousands of transactions per client
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    No automated anomaly detection for FMV discrepancies
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    Repetitive rule creation for common transaction patterns
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                    Limited visibility into classification decisions for audit defense
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  The Opportunity
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Design and implement AI-powered features that would automate routine work while keeping CPAs in control—turning Computis into a truly intelligent tax automation platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                My Approach
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                I led the design of Computis's AI feature suite, focusing on <strong>augmentation over automation</strong>—ensuring AI enhanced CPA expertise rather than replacing professional judgment.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Research Foundation</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    8 CPA interviews identifying automation opportunities
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    6 workflow shadowing sessions to map classification patterns
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Competitive analysis of AI features (TaxBit, Cryptio, CoinTracker)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    4 usability test cycles validating AI interaction patterns
                  </li>
                </ul>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[16px] font-medium text-[#9FA0A3] mb-2">🎯 Key Insight:</p>
                CPAs wanted AI to handle repetitive work, but needed transparency and override control to maintain professional liability standards.
              </blockquote>
            </div>
          </div>
        </section>

        {/* AI Feature Design Solutions */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                AI Feature Design Solutions
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              {/* Feature 1: AI-Powered Classification */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-amber-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold text-[#131417] mb-2">AI-Powered Classification with Confidence Indicators</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-[15px] border border-red-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Problem</p>
                    <p className="text-[16px] text-[#555]">Manual classification consumed 60%+ of CPA time.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-[15px] border border-blue-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Solution</p>
                    <p className="text-[16px] text-[#555]">ML-driven auto-classification with visual confidence scores (High/Medium/Low) and one-click accept/reject controls.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-[15px] border border-green-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Impact</p>
                    <p className="text-[16px] text-[#555]">85% reduction in manual classification work; CPAs review only flagged items.</p>
                  </div>
                </div>
              </div>

              {/* Feature 2: Intelligent Audit Trail */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-amber-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold text-[#131417] mb-2">Intelligent Audit Trail System</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-[15px] border border-red-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Problem</p>
                    <p className="text-[16px] text-[#555]">No visibility into how classifications were determined.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-[15px] border border-blue-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Solution</p>
                    <p className="text-[16px] text-[#555]">AI-generated audit logs documenting classification rationale, rule triggers, and decision history.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-[15px] border border-green-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Impact</p>
                    <p className="text-[16px] text-[#555]">40% reduction in compliance preparation time; enabled self-service IRS audit defense.</p>
                  </div>
                </div>
              </div>

              {/* Feature 3: Smart Rule Builder */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-amber-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold text-[#131417] mb-2">Smart Rule Builder with Pattern Recognition</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-[15px] border border-red-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Problem</p>
                    <p className="text-[16px] text-[#555]">CPAs repeatedly created similar rules for common scenarios.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-[15px] border border-blue-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Solution</p>
                    <p className="text-[16px] text-[#555]">AI suggests rule templates based on transaction patterns; no-code builder with natural language preview.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-[15px] border border-green-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Impact</p>
                    <p className="text-[16px] text-[#555]">Rule creation time reduced from 15 minutes to 90 seconds; 32% increase in demo conversions.</p>
                  </div>
                </div>
              </div>

              {/* Feature 4: Proactive Anomaly Detection */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-amber-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold text-[#131417] mb-2">Proactive Anomaly Detection Engine</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-[15px] border border-red-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Problem</p>
                    <p className="text-[16px] text-[#555]">FMV errors and data inconsistencies discovered too late.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-[15px] border border-blue-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Solution</p>
                    <p className="text-[16px] text-[#555]">ML-powered anomaly detection with inline color-coded flags and explanatory tooltips.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-[15px] border border-green-100">
                    <p className="text-[14px] font-semibold text-[#131417] mb-1">Impact</p>
                    <p className="text-[16px] text-[#555]">150% increase in error detection; issues caught before client delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Alignment */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Stakeholder Alignment
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Balancing Automation & Control
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  <strong>Challenge:</strong> Engineering wanted maximum automation; CPAs required override capabilities for liability protection.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">My Approach</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Facilitated cross-functional workshop mapping trust requirements
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Presented user research showing 40% of competitor complaints cited "lack of control"
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Designed graduated autonomy system: High confidence → Auto-apply | Medium → Review queue | Low → Manual required
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Outcome
                </h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  The tiered confidence system became a key differentiator. One enterprise prospect specifically cited "professional control" as their deciding factor.
                </p>
                <blockquote className="bg-white/80 p-6 rounded-[20px] italic text-[18px] leading-[150%] tracking-[-0.18px] border-l-4 border-green-500">
                  "Finally, AI that works *with* me instead of replacing my judgment." — CPA Beta User
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Business Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results & Business Impact
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-[20px] font-semibold text-[#131417]">Enterprise Deals</h3>
                  </div>
                  <p className="text-[16px] text-[#555]">3 enterprise CPA firm deals closed within 6 months of AI feature launch</p>
                </div>

                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-[20px] font-semibold text-[#131417]">Compliance</h3>
                  </div>
                  <p className="text-[16px] text-[#555]">Zero FMV disputes reported post-implementation</p>
                </div>

                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <h3 className="text-[20px] font-semibold text-[#131417]">Platform Expansion</h3>
                  </div>
                  <p className="text-[16px] text-[#555]">Capabilities expanded to serve DAOs and hedge funds</p>
                </div>

                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <h3 className="text-[20px] font-semibold text-[#131417]">Key Differentiator</h3>
                  </div>
                  <p className="text-[16px] text-[#555]">AI features cited as primary differentiator in 78% of won deals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Key Learnings
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[18px] font-semibold text-[#131417] mb-3">Augmentation {'>'} Automation</h3>
                  <p className="text-[16px] text-[#555]">CPAs adopted AI faster when they retained control</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-[25px] border border-purple-200 transition-all duration-300 hover:border-purple-300 hover:scale-[1.02]">
                  <h3 className="text-[18px] font-semibold text-[#131417] mb-3">Transparency Builds Trust</h3>
                  <p className="text-[16px] text-[#555]">Confidence scores and audit trails drove adoption</p>
                </div>

                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[18px] font-semibold text-[#131417] mb-3">Pattern Recognition = Scale</h3>
                  <p className="text-[16px] text-[#555]">Smart suggestions multiplied CPA efficiency</p>
                </div>

                <div className="bg-amber-50 p-6 rounded-[25px] border border-amber-200 transition-all duration-300 hover:border-amber-300 hover:scale-[1.02]">
                  <h3 className="text-[18px] font-semibold text-[#131417] mb-3">AI UX is Different</h3>
                  <p className="text-[16px] text-[#555]">Designing for probabilistic outputs requires new interaction patterns</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px]">
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

          <div className="group bg-white/80 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer relative overflow-hidden mb-16 lg:mb-[270px]">
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
              <img 
                src="/Transactions Grid.png" 
                alt="Classification Grid Interface"
                className="w-[90%] h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center mb-16 lg:mb-[270px]">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px] transition-all duration-300 hover:text-white">
              Have a nice project?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-medium leading-[72px] tracking-[-0.72px] transition-all duration-500 hover:tracking-[-0.5px] hover:scale-105 cursor-pointer">
              Get in Touch
            </h2>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer relative overflow-hidden mb-16 lg:mb-[270px]">
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
        </div>
      </footer>
    </div>
  );
}
