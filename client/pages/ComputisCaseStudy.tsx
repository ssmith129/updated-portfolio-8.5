import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Eye,
  Settings,
  AlertTriangle,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";
import VideoOverlay from "../components/VideoOverlay";
import { useIntersectionAnimation } from "../hooks/use-page-animations";

export default function ComputisCaseStudy() {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  // Use the animation hook for metrics animation
  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.3, "0px 0px -100px 0px");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF3C7] scroll-smooth relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 50%, #F59E0B 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, #3B82F6 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[120px]"></div>

      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#64748B] leading-normal tracking-[-0.18px] hover:text-[#F59E0B] transition-all duration-300 hover:scale-105 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="mb-8 flex flex-col lg:block">
          <span className="inline-block bg-gradient-to-r from-[#F59E0B] to-[#3B82F6] text-white px-4 py-2 rounded-[20px] text-[14px] font-semibold tracking-[-0.14px] mb-6">
            FinTech UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#0F172A] leading-[110%] tracking-[-1.2px] mb-6">
            Computis — Designing AI Features for Crypto Tax Automation
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#64748B] leading-[140%] tracking-[-0.24px] max-w-[800px] md:max-w-[952px] w-full text-center lg:text-left mx-auto md:pr-px">
            Leading the design of an AI-powered feature suite that augments CPA
            expertise while maintaining professional control
          </p>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-6 relative z-10">
        <nav
          aria-label="Case study sections"
          className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-2"
        >
          {[
            { href: "#tldr", label: "TL;DR" },
            { href: "#challenge", label: "Challenge" },
            { href: "#approach", label: "My Approach" },
            { href: "#solutions", label: "AI Solutions" },
            { href: "#stakeholder", label: "Stakeholder Alignment" },
            { href: "#results", label: "Results" },
            { href: "#learnings", label: "Key Learnings" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#475569] border border-[#E2E8F0] text-sm font-medium hover:bg-[#F59E0B]/10 hover:text-[#F59E0B] hover:border-[#F59E0B]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Summary Card */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600 border border-[#E2E8F0]">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-xl sm:text-2xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.24px] group-hover:text-[#F59E0B] transition-colors duration-300">
              Quick View
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#64748B] group-hover:text-[#F59E0B] transition-colors duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#64748B] group-hover:text-[#F59E0B] transition-colors duration-300" />
            )}
          </button>

          {isSummaryExpanded && (
            <div
              id="summary-content"
              className="mt-6 animate-in fade-in-0 slide-in-from-top-4 duration-500"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#0F172A] mb-4">
                    📌 TL;DR — Key Impact
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-[#1E293B]">
                    <li>
                      <span className="font-semibold text-[#10B981]">
                        ↓ 85% manual classification work
                      </span>{" "}
                      → CPAs review only flagged items
                    </li>
                    <li>
                      <span className="font-semibold text-[#3B82F6]">
                        ↑ 32% demo-to-conversion rate
                      </span>{" "}
                      → faster rule creation drove adoption
                    </li>
                    <li>
                      <span className="font-semibold text-[#8B5CF6]">
                        ↓ 45% CPA onboarding time
                      </span>{" "}
                      → from 2.5h to 1.4h
                    </li>
                    <li>
                      <span className="font-semibold text-[#F59E0B]">
                        ↑ 150% error detection rate
                      </span>{" "}
                      → issues caught before client delivery
                    </li>
                    <li>
                      <span className="font-semibold text-[#3B82F6]">
                        Trust-first AI patterns
                      </span>{" "}
                      → transparent, human-in-the-loop design
                    </li>
                  </ul>
                  <p className="mt-4 text-[#475569]">
                    <span className="font-semibold text-[#0F172A]">
                      My Role:
                    </span>{" "}
                    Founding Lead Product Designer → 0→1 AI feature design for
                    crypto tax automation
                  </p>
                </div>

                <div className="border-t border-[#E2E8F0]"></div>

                <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FED7AA] rounded-[16px] p-4 border-l-4 border-[#F59E0B]">
                  <p className="text-[#1E293B] italic leading-relaxed">
                    Computis transformed from a functional crypto tax platform
                    into an intelligent automation system — delivering
                    measurable time savings, safer workflows, and professional
                    control for CPAs.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main
        id="main-content"
        className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16 relative z-10"
      >
        {/* Impact At a Glance */}
        <section
          id="tldr"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 mt-12 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-[#F59E0B] cursor-pointer">
              📌 Impact At a Glance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Role
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Founding Lead Product Designer
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Duration
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">10 months</p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Platform
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Web SaaS (Desktop-first, responsive)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-6 border border-[#E2E8F0]">
              <p className="text-sm font-medium text-[#64748B] mb-4 uppercase tracking-[0.5px]">
                Tools & Team
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-base font-medium text-[#0F172A] mb-2">
                    Tools:
                  </p>
                  <p className="text-base text-[#1E293B]">
                    Figma, Miro, Notion, Jira, Mixpanel, GA
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium text-[#0F172A] mb-2">
                    Team:
                  </p>
                  <p className="text-base text-[#1E293B]">
                    CTO, PM, 2 ML Engineers, 2 Frontend Engineers, Design
                    Partner
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-[#FEF3C7] via-white to-[#DBEAFE] rounded-[20px] p-6 sm:p-8 border border-[#E2E8F0]"
            >
              <h3 className="text-xl font-medium text-[#0F172A] mb-6">
                Key Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-green-50 p-6 rounded-[25px] border-2 border-green-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                  <p className="text-sm font-medium text-green-700 mb-2">
                    CPA Onboarding Time
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                    ↓ 45%
                  </p>
                  <p className="text-sm text-green-600">2.5h → 1.4h</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-[25px] border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                  <p className="text-sm font-medium text-blue-700 mb-2">
                    Demo-to-Conversion
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    ↑ 32%
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-[25px] border-2 border-purple-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                  <p className="text-sm font-medium text-purple-700 mb-2">
                    Manual Classification Work
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-600">
                    ↓ 85%
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-[25px] border-2 border-orange-200 hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                  <p className="text-sm font-medium text-orange-700 mb-2">
                    Error Detection Rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                    ↑ 150%
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-[25px] border-2 border-indigo-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
                  <p className="text-sm font-medium text-indigo-700 mb-2">
                    Enterprise Deals
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
                    3
                  </p>
                  <p className="text-sm text-indigo-600">closed in 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section
          id="challenge"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              🎯 The Challenge
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  Computis had a solid, functional platform for crypto tax
                  management—but CPAs were still spending excessive time on
                  manual transaction classification. The existing UI handled
                  data well, but lacked intelligent automation features that
                  competitors were beginning to offer.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEE2E2] rounded-[20px] p-6 border-l-4 border-[#EF4444] transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-[#991B1B] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#DC2626]" />
                  Pain Points Identified
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Manual classification of thousands of transactions per
                      client
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      No automated anomaly detection for FMV discrepancies
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Repetitive rule creation for common transaction patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Limited visibility into classification decisions for audit
                      defense
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-[20px] p-6 border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-bold text-[#1E40AF] mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#3B82F6]" />
                  The Opportunity
                </h3>
                <p className="text-lg text-[#1E293B] leading-[150%]">
                  Design and implement AI-powered features that would automate
                  routine work while keeping CPAs in control—turning Computis
                  into a truly intelligent tax automation platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section
          id="approach"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              💡 My Approach
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  I led the design of Computis's AI feature suite, focusing on{" "}
                  <span className="font-semibold text-[#F59E0B]">
                    augmentation over automation
                  </span>
                  —ensuring AI enhanced CPA expertise rather than replacing
                  professional judgment.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-[20px] p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE]">
                <h3 className="text-xl font-medium text-[#0F172A] mb-4">
                  Research Foundation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      8 CPA interviews identifying automation opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      6 workflow shadowing sessions to map classification
                      patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      Competitive analysis of AI features (TaxBit, Cryptio,
                      CoinTracker)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      4 usability test cycles validating AI interaction patterns
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FED7AA] rounded-[20px] p-6 border-l-4 border-[#F59E0B]">
                <p className="text-sm font-medium text-[#92400E] mb-2">
                  🎯 Key Insight:
                </p>
                <p className="text-lg text-[#1E293B] leading-[150%] italic">
                  CPAs wanted AI to handle repetitive work, but needed
                  transparency and override control to maintain professional
                  liability standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Feature Design Solutions */}
        <section
          id="solutions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              ✨ AI Feature Design Solutions
            </h2>

            <div className="space-y-6">
              {/* Feature 1: AI-Powered Classification */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-[#F59E0B]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2">
                      AI-Powered Classification with Confidence Indicators
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="AI Classification confidence indicators demonstration video"
                  problem="Manual classification consumed 60%+ of CPA time."
                  solution="ML-driven auto-classification with visual confidence scores (High/Medium/Low) and one-click accept/reject controls."
                  impact="85% reduction in manual classification work; CPAs review only flagged items."
                />
              </div>

              {/* Feature 2: Intelligent Audit Trail */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-[#3B82F6]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2">
                      Intelligent Audit Trail System
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Intelligent Audit Trail System demonstration video"
                  problem="No visibility into how classifications were determined."
                  solution="AI-generated audit logs documenting classification rationale, rule triggers, and decision history."
                  impact="40% reduction in compliance preparation time; enabled self-service IRS audit defense."
                />
              </div>

              {/* Feature 3: Smart Rule Builder */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-[#10B981]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2">
                      Smart Rule Builder with Pattern Recognition
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Smart Rule Builder with Pattern Recognition demonstration video"
                  problem="CPAs repeatedly created similar rules for common scenarios."
                  solution="AI suggests rule templates based on transaction patterns; no-code builder with natural language preview."
                  impact="Rule creation time reduced from 15 minutes to 90 seconds; 32% increase in demo conversions."
                />
              </div>

              {/* Feature 4: Proactive Anomaly Detection */}
              <div className="bg-white rounded-[25px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-[#EF4444]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2">
                      Proactive Anomaly Detection Engine
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F3bbe062155dd44f39a551875b4c99ff9?alt=media&token=f768e0a7-6142-4898-9d89-b2f0c86f24e9&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Proactive Anomaly Detection Engine demonstration video"
                  problem="FMV errors and data inconsistencies discovered too late."
                  solution="ML-powered anomaly detection with inline color-coded flags and explanatory tooltips."
                  impact="150% increase in error detection; issues caught before client delivery."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Alignment */}
        <section
          id="stakeholder"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              🤝 Stakeholder Alignment
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E2E8F0]">
                <h3 className="text-xl font-medium text-[#0F172A] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Balancing Automation & Control
                </h3>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-4">
                  <span className="font-semibold text-[#0F172A]">
                    Challenge:
                  </span>{" "}
                  Engineering wanted maximum automation; CPAs required override
                  capabilities for liability protection.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-[20px] p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-[#DBEAFE]">
                <h3 className="text-xl font-medium text-[#0F172A] mb-4">
                  My Approach
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      Facilitated cross-functional workshop mapping trust
                      requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      Presented user research showing 40% of competitor
                      complaints cited "lack of control"
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-1.5 h-1.5 bg-[#64748B] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base leading-[150%]">
                      Designed graduated autonomy system: High confidence →
                      Auto-apply | Medium → Review queue | Low → Manual
                      required
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] rounded-[20px] p-6 border-l-4 border-[#10B981]">
                <h3 className="text-xl font-medium text-[#065F46] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  Outcome
                </h3>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-4">
                  The tiered confidence system became a key differentiator. One
                  enterprise prospect specifically cited "professional control"
                  as their deciding factor.
                </p>
                <blockquote className="bg-white/80 p-6 rounded-[20px] italic text-lg leading-[150%] border-l-4 border-[#10B981]">
                  <p className="text-[#047857]">
                    "Finally, AI that works *with* me instead of replacing my
                    judgment."
                  </p>
                  <cite className="block text-sm text-[#059669] mt-2 not-italic">
                    — CPA Beta User
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Business Impact */}
        <section
          id="results"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              📈 Results & Business Impact
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-[#E2E8F0]">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A]">
                      Enterprise Deals
                    </h3>
                  </div>
                  <p className="text-base text-[#475569]">
                    3 enterprise CPA firm deals closed within 6 months of AI
                    feature launch
                  </p>
                </div>

                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-[#E2E8F0]">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A]">
                      Compliance
                    </h3>
                  </div>
                  <p className="text-base text-[#475569]">
                    Zero FMV disputes reported post-implementation
                  </p>
                </div>

                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-[#E2E8F0]">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A]">
                      Platform Expansion
                    </h3>
                  </div>
                  <p className="text-base text-[#475569]">
                    Capabilities expanded to serve DAOs and hedge funds
                  </p>
                </div>

                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-[#E2E8F0]">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A]">
                      Key Differentiator
                    </h3>
                  </div>
                  <p className="text-base text-[#475569]">
                    AI features cited as primary differentiator in 78% of won
                    deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section
          id="learnings"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              💡 Key Learnings
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] p-6 rounded-[25px] border border-[#3B82F6]/20 transition-all duration-300 hover:border-[#3B82F6]/40 hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    Augmentation {">"} Automation
                  </h3>
                  <p className="text-base text-[#475569]">
                    CPAs adopted AI faster when they retained control
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] p-6 rounded-[25px] border border-[#8B5CF6]/20 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    Transparency Builds Trust
                  </h3>
                  <p className="text-base text-[#475569]">
                    Confidence scores and audit trails drove adoption
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] p-6 rounded-[25px] border border-[#10B981]/20 transition-all duration-300 hover:border-[#10B981]/40 hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    Pattern Recognition = Scale
                  </h3>
                  <p className="text-base text-[#475569]">
                    Smart suggestions multiplied CPA efficiency
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FED7AA] p-6 rounded-[25px] border border-[#F59E0B]/20 transition-all duration-300 hover:border-[#F59E0B]/40 hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    AI UX is Different
                  </h3>
                  <p className="text-base text-[#475569]">
                    Designing for probabilistic outputs requires new interaction
                    patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedCaseStudies currentCaseStudyId="computis" />
      <Footer />
    </div>
  );
}
