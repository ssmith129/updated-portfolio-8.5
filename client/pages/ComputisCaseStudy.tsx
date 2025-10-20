import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Users,
  TrendingUp,
  Activity,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Lightbulb,
  Shield,
  Zap,
  Eye,
  GitBranch,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";
import { VisualPlaceholder } from "../components/case-study/VisualPlaceholder";
import { MetricCard } from "../components/case-study/MetricCard";

export default function ComputisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(to right, #00D4FF 1px, transparent 1px),
          linear-gradient(to bottom, #00D4FF 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00FFB3]/5 rounded-full blur-[100px]"></div>

      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-base font-medium text-[#888888] leading-normal hover:text-[#00D4FF] transition-all duration-300 hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* PHASE 1: HERO & TL;DR */}
      <header className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-8 relative z-10">
        <div className="mb-8">
          <span className="inline-block bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] px-4 py-2 rounded-[20px] text-sm font-semibold tracking-tight mb-6">
            FinTech • AI Transparency • 2023
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
            Computis — Where CPAs Control the AI, Not the Other Way Around
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#9CA3AF] leading-relaxed tracking-tight max-w-5xl">
            How we transformed a black-box crypto-tax script into an explainable AI platform that cut onboarding time by 45% and closed three enterprise deals in six months.
          </p>
        </div>
      </header>

      {/* Hero Visual Placeholder */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 relative z-10">
        <VisualPlaceholder
          title="Hero Dashboard Overview"
          description="Annotated hero image showing AI confidence chips and audit trail drawer."
          dimensions="1200px × 675px (16:9)"
          aspectRatio="16:9"
          type="screenshot"
          altText="Computis dashboard interface with AI confidence indicators and inline audit drawer highlighted"
        />
      </div>

      {/* TL;DR Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-16 relative z-10">
        <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 border border-[#1A1A1A] shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-8">
            TL;DR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#FF4D4D]/10 rounded-[20px] p-6 border-l-4 border-[#FF4D4D]">
              <h3 className="text-lg font-semibold text-[#FF8888] mb-3">
                Before Computis
              </h3>
              <p className="text-base text-[#D1D5DB] leading-relaxed">
                CPAs waited hours for engineers to edit Python tax scripts.
              </p>
            </div>

            <div className="bg-[#00FFB3]/10 rounded-[20px] p-6 border-l-4 border-[#00FFB3]">
              <h3 className="text-lg font-semibold text-[#00FFB3] mb-3">
                After Computis
              </h3>
              <p className="text-base text-[#D1D5DB] leading-relaxed">
                They could design and audit AI logic themselves in 90 seconds — with traceable confidence and compliance built in.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              value="↓ 45%"
              label="CPA onboarding time"
              context="2.5h → 1.4h"
              color="green"
            />
            <MetricCard
              value="↓ 85%"
              label="Engineering dependency"
              color="blue"
            />
            <MetricCard
              value="3"
              label="Enterprise contracts in 6 months"
              color="yellow"
            />
            <MetricCard
              value="↓ 40%"
              label="Audit prep time"
              color="cyan"
            />
          </div>
        </div>
      </div>

      {/* PHASE 2: PROBLEM & OPPORTUNITY */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-20 relative z-10">
        <section id="problem">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
              Problem & Opportunity
            </h2>

            {/* The Challenge */}
            <div className="bg-[#FF4D4D]/5 rounded-[20px] p-8 border border-[#FF4D4D]/20 mb-10">
              <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-5 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                The Challenge
              </h3>
              <p className="text-lg text-[#D1D5DB] mb-6 leading-relaxed">
                Crypto tax workflows were opaque and engineer-dependent. CPAs feared AI mistakes they couldn't explain to clients or the IRS.
              </p>
            </div>

            {/* Before/After UI Comparison Placeholder */}
            <div className="mb-10">
              <VisualPlaceholder
                title="Before/After UI Comparison"
                description="Terminal script vs visual rule builder annotated to highlight trust and transparency gains."
                dimensions="1200px × 600px (2:1)"
                aspectRatio="2:1"
                type="image"
                altText="Split-screen comparison: left shows Python CLI terminal, right shows Computis visual dashboard with confidence indicators"
              />
            </div>

            {/* CPA Voice */}
            <div className="bg-[#1A1A1A]/50 rounded-[20px] p-8 border-l-4 border-[#FFD700] mb-10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="text-lg text-[#D1D5DB] italic leading-relaxed mb-4">
                    "It's 11 PM and an audit is tomorrow. Our engineer is out, and I can't fix a DeFi error. I just need to see why the AI made that call."
                  </p>
                  <div className="border-t border-[#2A2A2A] pt-3">
                    <p className="text-sm font-semibold text-[#9CA3AF]">
                      — Sarah K., CPA
                    </p>
                    <p className="text-xs text-[#6B7280]">Big 4 firm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity */}
            <div className="bg-[#00FFB3]/5 rounded-[20px] p-8 border border-[#00FFB3]/20">
              <h3 className="text-2xl font-semibold text-[#00FFB3] mb-5 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Opportunity
              </h3>
              <p className="text-lg text-[#D1D5DB] leading-relaxed">
                Redefine trust as the core product value: build AI that shows its work and gives professionals the final say.
              </p>
            </div>
          </div>
        </section>

        {/* PHASE 3: RESEARCH & INSIGHTS */}
        <section id="research">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
              Research & Insights
            </h2>

            {/* Approach */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Approach
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#0080FF]/10 rounded-[16px] p-4 text-center border border-[#0080FF]/20">
                  <p className="text-2xl font-bold text-[#00D4FF] mb-2">8</p>
                  <p className="text-xs text-[#9CA3AF]">CPA Interviews</p>
                </div>
                <div className="bg-[#00FFB3]/10 rounded-[16px] p-4 text-center border border-[#00FFB3]/20">
                  <p className="text-2xl font-bold text-[#00FFB3] mb-2">6</p>
                  <p className="text-xs text-[#9CA3AF]">Shadowing Sessions</p>
                </div>
                <div className="bg-[#FFD700]/10 rounded-[16px] p-4 text-center border border-[#FFD700]/20">
                  <p className="text-2xl font-bold text-[#FFD700] mb-2">14</p>
                  <p className="text-xs text-[#9CA3AF]">Total Participants</p>
                </div>
                <div className="bg-[#00D4FF]/10 rounded-[16px] p-4 text-center border border-[#00D4FF]/20">
                  <p className="text-2xl font-bold text-[#00D4FF] mb-2">3</p>
                  <p className="text-xs text-[#9CA3AF]">Competitor Audits</p>
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Key Findings
              </h3>
              <div className="space-y-4">
                <div className="bg-[#FF4D4D]/10 rounded-[16px] p-5 border-l-4 border-[#FF4D4D]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">1️⃣</span>
                    <p className="text-sm font-semibold text-[#FF8888]">
                      85% of time lost waiting for engineering edits
                    </p>
                  </div>
                </div>
                <div className="bg-[#FFD700]/10 rounded-[16px] p-5 border-l-4 border-[#FFD700]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">2️⃣</span>
                    <p className="text-sm font-semibold text-[#FFD700]">
                      CPAs rejected AI outputs without clear reasoning
                    </p>
                  </div>
                </div>
                <div className="bg-[#00FFB3]/10 rounded-[16px] p-5 border-l-4 border-[#00FFB3]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">3️⃣</span>
                    <p className="text-sm font-semibold text-[#00FFB3]">
                      "Explainability" ranked #1 purchase factor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Placeholders for Research */}
            <div className="space-y-8 mb-10">
              <VisualPlaceholder
                title="Participant Grid & Affinity Map"
                description="Shows CPA, Analyst, Admin roles + clustered themes of trust, latency, autonomy."
                dimensions="1200px × 800px (3:2)"
                aspectRatio="3:2"
                type="grid"
                altText="Research participant matrix showing 14 participants across 3 role types with affinity-mapped insights"
              />

              <VisualPlaceholder
                title="Journey Map (Current State)"
                description="47 steps, 6 handoffs, 2.5 hrs."
                dimensions="1200px × 800px (3:2)"
                aspectRatio="3:2"
                type="map"
                altText="Current-state journey map showing CPA workflow with 47 steps and 6 handoff points totaling 2.5 hours"
              />

              <VisualPlaceholder
                title="Journey Map (Future State)"
                description="12 steps, 0 handoffs, 1.4 hrs — illustrating onboarding compression."
                dimensions="1200px × 800px (3:2)"
                aspectRatio="3:2"
                type="map"
                altText="Future-state journey map showing optimized workflow with 12 steps, no handoffs, and 1.4 hour completion time"
              />
            </div>
          </div>
        </section>

        {/* PHASE 4: DESIGN PROCESS & METHODOLOGY */}
        <section id="process">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
              Design Process & Methodology
            </h2>

            <div className="bg-[#00D4FF]/5 rounded-[20px] p-6 mb-10 border-l-4 border-[#00D4FF]">
              <p className="text-base text-[#D1D5DB] leading-relaxed">
                We framed Computis as a <strong className="text-white">system of trust:</strong>
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-6 border border-[#0080FF]/20">
                <div className="w-10 h-10 bg-[#0080FF]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#0080FF]">1</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  User Journey Mapping
                </h3>
                <p className="text-sm text-[#9CA3AF]">
                  Identified hand-off breaks
                </p>
              </div>

              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-6 border border-[#00D4FF]/20">
                <div className="w-10 h-10 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#00D4FF]">2</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Information Architecture Design
                </h3>
                <p className="text-sm text-[#9CA3AF]">
                  Role-based views (CPA, Analyst, Admin)
                </p>
              </div>

              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-6 border border-[#00FFB3]/20">
                <div className="w-10 h-10 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#00FFB3]">3</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Trust Framework
                </h3>
                <p className="text-sm text-[#9CA3AF]">
                  Confidence chips + audit logs
                </p>
              </div>

              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-6 border border-[#FFD700]/20">
                <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#FFD700]">4</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Rapid Prototyping
                </h3>
                <p className="text-sm text-[#9CA3AF]">
                  4 rounds of feedback cycles
                </p>
              </div>

              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-6 border border-[#00D4FF]/20">
                <div className="w-10 h-10 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#00D4FF]">5</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Design System
                </h3>
                <p className="text-sm text-[#9CA3AF]">
                  Color tokens mapped to confidence levels
                </p>
              </div>
            </div>

            {/* Visual Placeholders */}
            <div className="space-y-8">
              <VisualPlaceholder
                title="Information Architecture Diagram"
                description="Sitemap showing Dashboard → Clients → Wallets → Transactions → Rules → Reports → Exports."
                dimensions="1200px × 675px (16:9)"
                aspectRatio="16:9"
                type="diagram"
                altText="Hierarchical IA of Computis modules with role permissions"
              />

              <VisualPlaceholder
                title="Design System Foundation"
                description="Color palette and type scale demonstrating WCAG AA contrast."
                dimensions="1200px × 800px (3:2)"
                aspectRatio="3:2"
                type="screenshot"
                altText="Design system documentation showing typography scale, color palette, and spacing tokens"
              />
            </div>
          </div>
        </section>

        {/* PHASE 5: KEY DESIGN DECISIONS */}
        <section id="decisions">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
              Key Design Decisions
            </h2>

            {/* Decision 1: Surfacing AI Confidence */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-8 border border-[#00D4FF]/20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    1. Surfacing AI Confidence
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-[#FF8888] mb-2">
                      The Problem
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      CPAs saw "95% confidence" and didn't trust it.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#FFD700] mb-2">
                      Discovery
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      Testing revealed: "I don't know <em>why</em> it's 95%."
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#00FFB3] mb-2">
                      Prototypes Tested
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4 border border-[#FF4D4D]/20">
                        <p className="text-sm font-medium text-white mb-1">
                          A. Numeric percent
                        </p>
                        <p className="text-xs text-[#FF8888]">❌ Ignored</p>
                      </div>
                      <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4 border border-[#FFD700]/20">
                        <p className="text-sm font-medium text-white mb-1">
                          B. Traffic light
                        </p>
                        <p className="text-xs text-[#FFD700]">⚠️ Ambiguous</p>
                      </div>
                      <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4 border border-[#00FFB3]/20">
                        <p className="text-sm font-medium text-white mb-1">
                          C. Confidence Chip + Tooltip
                        </p>
                        <p className="text-xs text-[#00FFB3]">✅ Adopted</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#00FFB3] mb-2">
                      Outcome
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed mb-2">
                      8/8 CPAs accepted high-confidence AI results without manual review.
                    </p>
                    <p className="text-sm text-[#9CA3AF]">
                      False positives dropped from 23 → 0 per month.
                    </p>
                  </div>
                </div>
              </div>

              <VisualPlaceholder
                title="3-Panel Prototype Comparison"
                description="Numeric vs traffic-light vs chip interface annotated with findings."
                dimensions="1200px × 400px (3:1)"
                aspectRatio="3:1"
                type="wireframe"
                altText="Three interface iterations showing evolution from numeric percentage to traffic light to confidence chip design"
              />
            </div>

            {/* Decision 2: Audit Trail Design */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-8 border border-[#00FFB3]/20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00FFB3]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    2. Audit Trail Design
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-[#FF8888] mb-2">
                      The Problem
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      IRS audits require defensible logic trails. CPAs needed line-by-line visibility into AI rules.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#00FFB3] mb-2">
                      Solution
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed mb-3">
                      Inline Audit Drawer showing:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5" />
                        Source transaction
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5" />
                        Applied rule pattern
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5" />
                        AI reasoning chain
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5" />
                        Human override record
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#00FFB3] mb-2">
                      Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#00FFB3]/10 rounded-[12px] p-4">
                        <p className="text-2xl font-bold text-[#00FFB3] mb-2">
                          5 days → 1.5 days
                        </p>
                        <p className="text-xs text-[#9CA3AF]">
                          Audit preparation time reduction
                        </p>
                      </div>
                      <div className="bg-[#00FFB3]/10 rounded-[12px] p-4">
                        <p className="text-2xl font-bold text-[#00FFB3] mb-2">
                          2 contracts
                        </p>
                        <p className="text-xs text-[#9CA3AF]">
                          Closed citing "audit-ready AI"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <VisualPlaceholder
                title="Audit Drawer Storyboard"
                description="Five frames from transaction to IRS report export."
                dimensions="1200px × 300px (4:1)"
                aspectRatio="4:1"
                type="storyboard"
                altText="Five-panel workflow showing transaction selection, rule application, AI reasoning, override capability, and export to IRS format"
              />
            </div>

            {/* Decision 3: Stakeholder Alignment */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#00D4FF]/10 rounded-[20px] p-8 border border-[#FFD700]/20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    3. Stakeholder Alignment (CTO vs CPA)
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-[#FF8888] mb-2">
                      Conflict
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      CTO pushed for full automation; CPAs demanded manual control.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#00FFB3] mb-2">
                      Resolution
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed mb-4">
                      Facilitated workshop → "Graduated Autonomy Framework":
                    </p>
                    <div className="space-y-3">
                      <div className="bg-[#00FFB3]/10 rounded-[12px] p-4 border-l-4 border-[#00FFB3]">
                        <p className="text-sm text-white">
                          <strong>High confidence:</strong> Auto approve (&lt; 2% error rate)
                        </p>
                      </div>
                      <div className="bg-[#FFD700]/10 rounded-[12px] p-4 border-l-4 border-[#FFD700]">
                        <p className="text-sm text-white">
                          <strong>Medium confidence:</strong> Flag for review
                        </p>
                      </div>
                      <div className="bg-[#FF4D4D]/10 rounded-[12px] p-4 border-l-4 border-[#FF4D4D]">
                        <p className="text-sm text-white">
                          <strong>Low confidence:</strong> Require manual approval
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFD700]/10 rounded-[16px] p-6">
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      <strong className="text-[#FFD700]">Result:</strong> Framework became core of enterprise pricing tier.
                    </p>
                  </div>
                </div>
              </div>

              <VisualPlaceholder
                title="Workshop Photo & Decision Matrix"
                description="Blurred faces; whiteboard showing autonomy ladder."
                dimensions="1000px × 667px (3:2)"
                aspectRatio="3:2"
                type="image"
                altText="Workshop documentation showing stakeholder collaboration and graduated autonomy framework on whiteboard"
              />
            </div>

            {/* Decision 4: Rule Builder Evolution */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#0080FF]/10 rounded-[20px] p-8 border border-[#00D4FF]/20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    4. Rule Builder Evolution
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#FF4D4D]/10 rounded-[16px] p-6 border-l-4 border-[#FF4D4D]">
                    <h4 className="text-base font-semibold text-[#FF8888] mb-3">
                      From
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      Hard-coded Python scripts
                    </p>
                  </div>

                  <div className="bg-[#00FFB3]/10 rounded-[16px] p-6 border-l-4 border-[#00FFB3]">
                    <h4 className="text-base font-semibold text-[#00FFB3] mb-3">
                      To
                    </h4>
                    <p className="text-base text-[#D1D5DB] leading-relaxed">
                      No-code visual rule blocks with natural-language support
                    </p>
                  </div>
                </div>
              </div>

              <VisualPlaceholder
                title="Wireframe Evolution Triptych"
                description="Sketch → Mid-fi → Hi-fi rule builder panorama."
                dimensions="1200px × 300px (4:1)"
                aspectRatio="4:1"
                type="wireframe"
                altText="Three-stage design evolution from sketches to mid-fidelity wireframes to high-fidelity interactive prototype"
              />
            </div>

            {/* Decision 5: Metrics Validation Dashboard */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-8 border border-[#00FFB3]/20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#00FFB3]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    5. Metrics Validation Dashboard
                  </h3>
                </div>

                <p className="text-base text-[#D1D5DB] leading-relaxed">
                  All quantitative outcomes were tracked and validated through Mixpanel and GA, ensuring credibility and data-driven decision making.
                </p>
              </div>

              <VisualPlaceholder
                title="Mixpanel Screenshot"
                description="Shows funnel drop from 2.5 hr → 1.4 hr onboarding time."
                dimensions="1200px × 675px (16:9)"
                aspectRatio="16:9"
                type="screenshot"
                altText="Mixpanel analytics dashboard showing user funnel with 45% reduction in onboarding time highlighted"
              />
            </div>
          </div>
        </section>

        {/* PHASE 6: OUTCOMES & IMPACT */}
        <section id="outcomes">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
              Outcomes & Impact
            </h2>

            {/* Quantitative */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Quantitative
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  value="↓ 45%"
                  label="CPA onboarding time"
                  context="2.5h → 1.4h"
                  validationSource="Mixpanel funnel analysis"
                  color="green"
                  icon={TrendingUp}
                />
                <MetricCard
                  value="↓ 85%"
                  label="Engineering dependency"
                  validationSource="Support ticket audit"
                  color="blue"
                  icon={Zap}
                />
                <MetricCard
                  value="↑ 3"
                  label="Enterprise contracts in 6 months"
                  validationSource="Sales data"
                  color="yellow"
                  icon={Target}
                />
                <MetricCard
                  value="↓ 40%"
                  label="Audit prep time"
                  validationSource="User interviews (n=8)"
                  color="cyan"
                  icon={Activity}
                />
              </div>
            </div>

            {/* Qualitative */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Qualitative
              </h3>
              <div className="space-y-6">
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-8 border-l-4 border-[#00FFB3]">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="text-lg text-[#D1D5DB] italic leading-relaxed mb-4">
                        "I defended a $2.3M tax position to the IRS with Computis' logs — and won without a tax attorney."
                      </p>
                      <div className="border-t border-[#2A2A2A] pt-3">
                        <p className="text-sm font-semibold text-[#9CA3AF]">
                          — Jennifer Huang, CPA
                        </p>
                        <p className="text-xs text-[#6B7280]">Managing Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Metrics Grid Placeholder */}
            <VisualPlaceholder
              title="Outcome Metrics Grid"
              description="Animated counters and quotes in three-column layout."
              dimensions="1200px × 400px (3:1)"
              aspectRatio="3:1"
              type="chart"
              altText="Interactive metrics dashboard showing key outcomes with animated numbers and stakeholder testimonials"
            />
          </div>
        </section>

        {/* PHASE 7: NEXT STEPS */}
        <section id="next-steps">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
              Next Steps
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#00D4FF]/10 rounded-[16px] p-6 border-l-4 border-[#00D4FF]">
                <div className="w-8 h-8 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-[#00D4FF]">1</span>
                </div>
                <p className="text-base text-[#D1D5DB] leading-relaxed">
                  Integrate LLM-assisted rule suggestions with human confirmation.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-[#00FFB3]/10 rounded-[16px] p-6 border-l-4 border-[#00FFB3]">
                <div className="w-8 h-8 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-[#00FFB3]">2</span>
                </div>
                <p className="text-base text-[#D1D5DB] leading-relaxed">
                  Expand design system to support audit template exports.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-[#FFD700]/10 rounded-[16px] p-6 border-l-4 border-[#FFD700]">
                <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-[#FFD700]">3</span>
                </div>
                <p className="text-base text-[#D1D5DB] leading-relaxed">
                  Add in-app explainability training for CPAs.
                </p>
              </div>
            </div>

            {/* Design Philosophy Callout */}
            <div className="mt-12 bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-8 border-l-4 border-[#0080FF]">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#00D4FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#00D4FF] mb-3">
                    Design Philosophy
                  </h3>
                  <p className="text-base text-[#D1D5DB] leading-relaxed italic">
                    "This designer understands systems, humans, and business — and can make all three work together."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <RelatedCaseStudies currentCaseStudy="computis" />
      </main>

      <Footer />
    </div>
  );
}
