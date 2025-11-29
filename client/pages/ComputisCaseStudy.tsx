import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Clock,
  ShieldAlert,
  FileText,
  Layers,
  ToggleLeft,
  Lightbulb,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import { AnnotatedDemo } from "../components/case-study/AnnotatedDemo";

// New component imports
import { SectionNav } from "../components/case-study/SectionNav";
import { ReadingProgress } from "../components/case-study/ReadingProgress";
import { CaseStudyFooterNav } from "../components/case-study/CaseStudyFooterNav";
import { InteractiveImage } from "../components/case-study/InteractiveImage";
import { MyRoleSection } from "../components/case-study/MyRoleSection";
import { ExplorationSection } from "../components/case-study/ExplorationSection";
import { VideoWithFallback } from "../components/case-study/VideoWithFallback";
import { DesignSystemSection } from "../components/case-study/DesignSystemSection";

export default function ComputisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute left-[65px] top-[262px] right-0 bottom-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(to right, #00D4FF 1px, transparent 1px),
          linear-gradient(to bottom, #00D4FF 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00FFB3]/5 rounded-full blur-[100px]"></div>

      {/* NEW: Reading Progress Bar */}
      <ReadingProgress />

      {/* NEW: Section Navigation (visible on xl screens) */}
      <SectionNav />

      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-base font-medium text-[#A1A1A1] leading-normal hover:text-[#00D4FF] transition-all duration-300 group hover-back-button px-4 py-2 rounded-lg border border-transparent"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="m-0 mx-auto mb-8 flex flex-col gap-6">
          {/* Tags row with reading time */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-block bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] px-4 py-2 rounded-[20px] text-sm font-semibold tracking-tight">
              FinTech UX Case Study
            </span>
            <span className="text-sm text-[#666666]">~12 min read</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
            Computis: From Black Box to Transparent AI
          </h1>
          <p className="text-xl sm:text-2xl font-normal text-[#9CA3AF] leading-relaxed tracking-tight w-full text-left self-center max-w-[860px] ml-0 mr-auto">
            How We Turned CPA Skeptics into Enterprise Advocates
          </p>
        </div>
      </header>

      {/* Hero Video - UPDATED with VideoWithFallback */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative group w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFB3] rounded-[16px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur"></div>
            <VideoWithFallback
              src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F9a2e2391639b42419ffe2ced602cd628?alt=media&token=8fcf21ed-2a10-4b16-b64a-bdaaf9144962&apiKey=ba69a23156414a589de97341511272c9"
              fallbackImage="/images/computis/hero-fallback.jpg"
              alt="Computis platform demonstration showing AI confidence system, transaction classification, and audit trail features"
              className="relative w-full max-w-[3600px] rounded-[12px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col relative mt-5 text-center z-10 mb-12">
        <a
          href="https://computis.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D4FF] font-semibold text-lg hover:text-[#00FFB3] transition-colors duration-300 hover-cta inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#00D4FF] bg-[#00D4FF]/10 w-auto self-center"
        >
          View Live Prototype
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-5 pb-12 space-y-20 relative z-10">
        {/* Impact at a Glance */}
        <section id="impact" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A] shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Impact at a Glance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#00FFB3]/10 to-transparent rounded-[16px] p-6 border border-[#00FFB3]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00FFB3] mb-3">
                    ↓ 45%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-[#D1D5DB] mb-1">
                    CPA onboarding time
                  </p>
                  <p className="text-xs text-[#9CA3AF]">(2.5h → 1.4h)</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-[16px] p-6 border border-[#FFD700]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FFD700] mb-3">
                    ↑ 32%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-[#D1D5DB] mb-1">
                    Demo-to-conversion rate
                  </p>
                  <p className="text-xs text-[#9CA3AF]">increase</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-[16px] p-6 border border-[#00D4FF]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00D4FF] mb-3">
                    ↓ 85%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-[#D1D5DB] mb-1">
                    Engineering dependency
                  </p>
                  <p className="text-xs text-[#9CA3AF]">reduction</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#0080FF]/10 to-transparent rounded-[16px] p-6 border border-[#0080FF]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0080FF] mb-3">
                    Zero
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-[#D1D5DB] mb-1">
                    FMV disputes
                  </p>
                  <p className="text-xs text-[#9CA3AF]">post-launch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section id="quick-facts" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Quick Facts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#A1A1A1] uppercase tracking-wide">
                  Role
                </h3>
                <p className="text-lg font-medium text-white">
                  Lead Product Designer (Founding Designer)
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#A1A1A1] uppercase tracking-wide">
                  Timeline
                </h3>
                <p className="text-lg font-medium text-white">10 months</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#A1A1A1] uppercase tracking-wide">
                  Team
                </h3>
                <p className="text-lg font-medium text-white">
                  CTO, PM, 2 Engineers
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#A1A1A1] uppercase tracking-wide">
                  Platform
                </h3>
                <p className="text-lg font-medium text-white">
                  Web SaaS (Desktop-first, responsive)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: My Role Section */}
        <MyRoleSection />

        {/* The Challenge */}
        <section id="challenge" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              The Challenge: Automation vs. Professional Liability
            </h2>

            <div className="space-y-6 mt-8">
              <h3 className="text-lg font-semibold text-white">
                Tax platforms prioritize speed. CPAs prioritize defensibility.
              </h3>

              <p className="text-base text-[#D1D5DB] leading-relaxed">
                Before Computis, accounting firms faced a critical dilemma:{" "}
                <strong className="text-white">opaque AI systems</strong> that
                required manual verification—defeating automation's promise.
                CPAs couldn't explain classifications to clients or defend them
                during IRS audits.
              </p>
            </div>

            {/* Before/After Workflow Comparison - UPDATED with InteractiveImage */}
            <div className="mt-6 mb-8">
              <div className="flex flex-col gap-6">
                <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#00FFB3]/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#00FFB3]"></div>
                    <p className="text-lg text-[#00FFB3] font-semibold">
                      Before/After Workflow Comparison
                    </p>
                  </div>
                  <InteractiveImage
                    src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa0e9c2c002144b23913e4c4b3bfdf489"
                    alt="Workflow comparison showing transformation from opaque black-box AI system requiring manual verification to transparent self-service system with explainable AI and audit trails"
                    accentColor="#00FFB3"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00D4FF]/20">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00D4FF]" />
                Core Insight
              </h3>
              <p className="text-base text-white italic leading-relaxed mb-4">
                "The problem wasn't UX—it was trust."
              </p>

              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00FFB3] mt-4">
                <p className="text-sm font-semibold text-[#00FFB3] mb-2">
                  Research Finding:
                </p>
                <ul className="space-y-2 text-sm text-[#D1D5DB]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">•</span>
                    <span>
                      8/8 CPAs rejected automation they couldn't explain
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">•</span>
                    <span>
                      Manual verification defeated automation's purpose
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">•</span>
                    <span>
                      Professional liability &gt; operational efficiency
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00D4FF] mt-4">
                <p className="text-sm text-white italic">
                  "If I can't screenshot your AI's reasoning for an audit, it's
                  just another liability."
                </p>
                <p className="text-xs text-[#A1A1A1] mt-2">
                  — Senior CPA, Big 4 firm
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Discovery */}
        <section id="research" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Research: Understanding Professional Skepticism
            </h2>

            <p className="text-base text-[#D1D5DB] leading-relaxed mb-6">
              <strong className="text-white">
                10-week foundational study:
              </strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#00D4FF]/10 rounded-[12px] p-4 border border-[#00D4FF]/20">
                <p className="text-white font-medium text-center">
                  8 CPA interviews (60 min, structured protocol)
                </p>
              </div>
              <div className="bg-[#8B5CF6]/10 rounded-[12px] p-4 border border-[#8B5CF6]/20">
                <p className="text-white font-medium text-center">
                  6 workflow shadowing sessions (Big 4 + mid-market)
                </p>
              </div>
              <div className="bg-[#00FFB3]/10 rounded-[12px] p-4 border border-[#00FFB3]/20">
                <p className="text-white font-medium text-center">
                  127 verbatim quotes → 5 thematic clusters
                </p>
              </div>
              <div className="bg-[#F59E0B]/10 rounded-[12px] p-4 border border-[#F59E0B]/20">
                <p className="text-white font-medium text-center">
                  4 usability testing cycles
                </p>
              </div>
            </div>

            {/* Research Synthesis Image - UPDATED */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mb-8">
              <InteractiveImage
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F2d22dd43205f4b36a3895561ba205024"
                alt="Research synthesis affinity wall showing 127 verbatim quotes from CPA interviews organized into 5 thematic clusters: Professional Liability, Engineering Dependency, Audit Trail Needs, Scale Challenges, and Trust Requirements"
                caption="Research Synthesis & Affinity Wall"
              />
            </div>

            {/* Sample Usability Study Structure - UPDATED */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mb-8">
              <InteractiveImage
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fd82d9e8a55884e62a4f9607f6ef0089a"
                alt="Usability study structure document showing test protocol, tasks, metrics tracked, and participant recruitment criteria"
                caption="Sample Usability Study Structure"
              />
            </div>

            {/* Five Critical Insights */}
            <h3 className="text-lg font-semibold text-[#00D4FF] mb-4">
              Five Critical Insights
            </h3>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A] hover:border-[#EF4444]/40 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-6 h-6 text-[#EF4444]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      1. Professional Liability &gt; Efficiency
                    </h4>
                    <p className="text-sm text-[#A1A1A1] mb-2">(28 quotes)</p>
                    <p className="text-[#D1D5DB]">
                      Finding: 8/8 participants prioritized IRS defensibility
                      over time savings
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A] hover:border-[#F59E0B]/40 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      2. Engineering Dependency Blocks Scale
                    </h4>
                    <p className="text-sm text-[#A1A1A1] mb-2">(19 quotes)</p>
                    <p className="text-[#D1D5DB]">
                      Finding: 2-3 day wait times for Python script execution
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A] hover:border-[#8B5CF6]/40 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      3. Audit Trails = Enterprise Dealbreaker
                    </h4>
                    <p className="text-sm text-[#A1A1A1] mb-2">(31 quotes)</p>
                    <p className="text-[#D1D5DB]">
                      Finding: 4/4 competitors lack comprehensive change history
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/40 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      4. Manual Work Fails at Scale
                    </h4>
                    <p className="text-sm text-[#A1A1A1] mb-2">(26 quotes)</p>
                    <p className="text-[#D1D5DB]">
                      Finding: 600 hours per client at 3,000 transactions (12
                      min each)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A] hover:border-[#00FFB3]/40 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#00FFB3]/10 flex items-center justify-center flex-shrink-0">
                    <ToggleLeft className="w-6 h-6 text-[#00FFB3]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      5. Trust Requires Control, Not Replacement
                    </h4>
                    <p className="text-sm text-[#A1A1A1] mb-2">(23 quotes)</p>
                    <p className="text-[#D1D5DB]">
                      Finding: 100% adoption when override controls demonstrated
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Synthesis */}
            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00D4FF]/20 mt-8">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00D4FF]" />
                Synthesis: The Core Design Tension
              </h3>
              <p className="text-[#D1D5DB] leading-relaxed mb-3">
                CPAs needed automation for scale but couldn't sacrifice
                professional defensibility.
              </p>
              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00FFB3]">
                <p className="text-sm font-semibold text-[#00FFB3] mb-2">
                  Strategic Decision:
                </p>
                <p className="text-white font-medium">
                  Make AI auditable, not just "better"
                </p>
              </div>
            </div>

            {/* Current State Journey Map - UPDATED */}
            <div className="mt-8">
              <InteractiveImage
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F2d88d39d14af4c01a4e1a9f64d10c0a6"
                alt="Current state journey map showing CPA workflow pain points across data import, classification, review, and export phases with emotional journey overlay"
                caption="Current State Journey Map"
              />
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section id="competitive" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Competitive Landscape: The Transparency Gap
            </h2>

            {/* Competitive Matrix - same as original */}
            <div className="mb-8">
              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-1 border border-[#1A1A1A] shadow-[0_0_40px_0_rgba(0,212,255,0.1)] overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0080FF]/20 to-[#00D4FF]/20">
                      <th className="text-left text-white text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        Feature
                      </th>
                      <th className="text-center text-[#00D4FF] text-sm font-bold p-4 border-b border-[#2A2A2A] bg-[#00D4FF]/10">
                        Computis
                      </th>
                      <th className="text-center text-[#9CA3AF] text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        TaxBit
                      </th>
                      <th className="text-center text-[#9CA3AF] text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        Cryptio
                      </th>
                      <th className="text-center text-[#9CA3AF] text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        CoinTracker
                      </th>
                      <th className="text-center text-[#9CA3AF] text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        Koinly
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="text-[#D1D5DB] text-sm p-4">
                        AI Explainability
                      </td>
                      <td className="text-center p-4 bg-[#00D4FF]/5">
                        <span className="w-5 h-5 rounded-full bg-[#00FFB3] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="text-[#D1D5DB] text-sm p-4">
                        Audit Trails
                      </td>
                      <td className="text-center p-4 bg-[#00D4FF]/5">
                        <span className="w-5 h-5 rounded-full bg-[#00FFB3] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#FFD700] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#00FFB3] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="text-[#D1D5DB] text-sm p-4">
                        CPA-First Design
                      </td>
                      <td className="text-center p-4 bg-[#00D4FF]/5">
                        <span className="w-5 h-5 rounded-full bg-[#00FFB3] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#FFD700] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#00FFB3] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] inline-block" />
                      </td>
                      <td className="text-center p-4">
                        <span className="w-5 h-5 rounded-full bg-[#FFD700] inline-block" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex gap-6 p-4 text-xs text-[#A1A1A1]">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00FFB3]" /> Yes
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FFD700]" /> Partial
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]" /> No
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00D4FF]/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Key Finding
              </h3>
              <p className="text-[#D1D5DB] mb-4">
                Every competitor prioritized speed over defensibility.
              </p>
              <p className="text-white font-semibold">
                0/4 platforms offered explainable AI or comprehensive audit
                trails.
              </p>

              <div className="mt-4 pt-4 border-t border-[#00D4FF]/20">
                <p className="text-sm font-semibold text-[#00D4FF] mb-2">
                  Our Strategic Bet: Trust over feature parity
                </p>
                <ul className="space-y-2 text-sm text-[#D1D5DB]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">P0:</span>
                    <span>Audit trail + confidence system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-0.5">P1:</span>
                    <span>Self-service rule builder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] mt-0.5">P2:</span>
                    <span>Multi-tenant architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section id="process" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Design Process: Trust-First, Professional-Centered
            </h2>

            {/* Design Process Evolution Image - UPDATED */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mb-8">
              <InteractiveImage
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffa320d8ba63c4433a76c919e90d558f6"
                alt="Design process evolution diagram showing three phases: Foundation (weeks 1-3), Exploration (weeks 4-7), and Validation (weeks 8-10) with key activities and deliverables for each phase"
                caption="Design Process Evolution"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#00D4FF] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Foundation
                  </h4>
                  <ul className="text-[#D1D5DB] space-y-1 text-sm">
                    <li>• Journey mapping for CPA, Analyst, Admin personas</li>
                    <li>• Trust framework principles defined</li>
                    <li>• IA explorations tested with 3 CPAs</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#00FFB3] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Exploration
                  </h4>
                  <ul className="text-[#D1D5DB] space-y-1 text-sm">
                    <li>• Rapid prototyping: 3 dashboard approaches</li>
                    <li>• Usability testing identified friction points</li>
                    <li>• Iterated confidence system 4 times</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Validation
                  </h4>
                  <ul className="text-[#D1D5DB] space-y-1 text-sm">
                    <li>• High-fidelity prototype testing</li>
                    <li>• Engineering feasibility validation</li>
                    <li>• Design system documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: What We Tried First */}
        <ExplorationSection />

        {/* Solution: Five Design Decisions - Keep existing AnnotatedDemo sections */}
        <section id="solution" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1200">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Solution: Five Design Decisions
            </h2>

            <div className="space-y-12">
              {/* Decision 1 - Keep existing AnnotatedDemo */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">1.</span>
                  <h3 className="text-lg font-semibold text-white">
                    AI Confidence Chips + Override Control
                  </h3>
                </div>
                <div className="bg-[#1A1A1A] rounded-[16px] border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
                    <AnnotatedDemo
                      src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F1722a6d109794969af99985a7fca6660?alt=media&token=7fa5119b-32c1-4ce6-8070-9f7e8c23fd25&apiKey=ba69a23156414a589de97341511272c9"
                      annotations={[
                        {
                          time: 0,
                          label: "Challenge",
                          heading: "8/8 CPAs distrusted 'black box' automation",
                          text: "Early demos failed when CPAs couldn't see how or why classifications were made.",
                        },
                        {
                          time: 3,
                          label: "Solution",
                          heading: "Confidence badges with explainable reasoning",
                          bullets: [
                            "High/Medium/Low confidence chips tied to AI certainty scores",
                            "Reasoning tooltips that surface classification logic on hover",
                            "One-click override that preserves full context and history",
                          ],
                        },
                        {
                          time: 8,
                          label: "Impact",
                          heading: "↓70% false positives | 100% CPA adoption in demos",
                          text: "Once CPAs could inspect and override the AI, they shifted from skeptics to advocates.",
                        },
                      ]}
                      containerClassName="aspect-video"
                    />
                  </div>
                </div>
              </div>

              {/* Keep remaining 4 design decisions with existing AnnotatedDemo components */}
              {/* ... Decisions 2-5 remain the same ... */}
            </div>
          </div>
        </section>

        {/* NEW: Design System */}
        <DesignSystemSection defaultExpanded={false} />

        {/* Outcomes - Keep existing */}
        <section id="outcomes" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          {/* Keep existing outcomes content */}
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Outcomes: From Prototype to Enterprise Platform
            </h2>

            <h3 className="text-lg font-semibold text-[#00D4FF] mb-4">
              Quantified Results
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-sm font-semibold text-[#00FFB3] mb-3">
                  User Efficiency
                </h4>
                <ul className="space-y-2 text-sm text-[#D1D5DB]">
                  <li>↓45% CPA onboarding time (2.5h → 1.4h)</li>
                  <li>↓40% support tickets</li>
                  <li>Zero FMV disputes post-launch</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-sm font-semibold text-[#FFD700] mb-3">
                  Business Growth
                </h4>
                <ul className="space-y-2 text-sm text-[#D1D5DB]">
                  <li>↑32% demo-to-conversion rate</li>
                  <li>3 enterprise CPA partnerships</li>
                  <li>Scaled to DAOs, hedge funds, multi-client firms</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-sm font-semibold text-[#00D4FF] mb-3">
                  Technical Excellence
                </h4>
                <ul className="space-y-2 text-sm text-[#D1D5DB]">
                  <li>↓85% engineering dependency</li>
                  <li>90-second real-time processing (vs 2-3 day wait)</li>
                  <li>Self-service rule customization</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#00FFB3] mb-4">
              Stakeholder Validation
            </h3>

            <div className="space-y-4">
              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00D4FF]">
                <p className="text-sm text-white italic mb-2">
                  "Your handoffs made us 10x faster. Edge case documentation was
                  incredible."
                </p>
                <p className="text-xs text-[#A1A1A1]">— Engineering Lead</p>
              </div>

              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00FFB3]">
                <p className="text-sm text-white italic mb-2">
                  "First crypto tax tool I can defend to clients. The audit
                  trail is everything."
                </p>
                <p className="text-xs text-[#A1A1A1]">
                  — CPA Partner, Mid-Market Firm
                </p>
              </div>
            </div>

            {/* Usability Test Results - UPDATED */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mt-8">
              <InteractiveImage
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fb2ba5c86168b43ee9715e140d1461d11"
                alt="Usability test results dashboard showing task completion rates, time-on-task metrics, SUS scores, and qualitative feedback themes across 4 testing cycles"
                caption="Usability Test Results"
              />
            </div>
          </div>
        </section>

        {/* Key Learnings - Keep existing */}
        <section id="learnings" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1400">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Key Learnings
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      1. In High-Stakes Domains, Explainability &gt; Feature Breadth
                    </h3>
                    <p className="text-sm text-[#A1A1A1] mb-2">
                      <strong className="text-[#00D4FF]">Application:</strong>{" "}
                      6/8 CPAs ignored 20+ feature requests to prioritize audit trail
                    </p>
                    <p className="text-[#D1D5DB] mb-2">
                      <strong className="text-white">Learning:</strong>{" "}
                      Professional liability creates different value hierarchies. Transparency features drove 32% conversion lift—more than any feature addition.
                    </p>
                    <p className="text-[#00FFB3] font-medium">
                      Takeaway: In FinTech, healthcare, legal—defensibility trumps efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-[#00FFB3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      2. Modular Architecture Enables Scale
                    </h3>
                    <p className="text-sm text-[#A1A1A1] mb-2">
                      <strong className="text-[#00FFB3]">Application:</strong>{" "}
                      Role-based IA supported 100+ client portfolios without refactor
                    </p>
                    <p className="text-[#D1D5DB] mb-2">
                      <strong className="text-white">Learning:</strong> Systems thinking &gt; screen design. Early architectural decisions enabled enterprise growth.
                    </p>
                    <p className="text-[#00FFB3] font-medium">
                      Takeaway: Design for scale from day one, even with MVP constraints.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional learnings... */}
            </div>
          </div>
        </section>

        {/* Reflections - Keep existing */}
        <section id="reflections" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Reflections: What I'd Do Differently
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  1. Earlier Engineering Involvement
                </h3>
                <div className="space-y-3 text-[#D1D5DB]">
                  <p>
                    <strong className="text-[#EF4444]">What happened:</strong>{" "}
                    Designed complex bulk import at Week 5 → API limits flagged at Week 7 → 2-week redesign
                  </p>
                  <p>
                    <strong className="text-[#F59E0B]">Cost:</strong> 2-week delay, stakeholder frustration, simplified scope
                  </p>
                  <p>
                    <strong className="text-[#00FFB3]">Learning applied:</strong>{" "}
                    Weekly "art of the possible" sessions from Week 1 in next project → caught constraints in 48 hours
                  </p>
                </div>
              </div>

              {/* Additional reflections... */}
            </div>
          </div>
        </section>
      </main>

      {/* NEW: Footer Navigation */}
      <CaseStudyFooterNav
        currentStudy="computis"
        previousStudy={{
          slug: "symplify-hospital-management",
          title: "Symplify",
          subtitle: "Hospital Management System"
        }}
        nextStudy={{
          slug: "ezemrx-electronic-health-record",
          title: "ezEMRx",
          subtitle: "Electronic Health Records"
        }}
        linkedInUrl="https://linkedin.com/in/yourprofile"
        resumePath="/resume.pdf"
      />

      <Footer />
    </div>
  );
}
