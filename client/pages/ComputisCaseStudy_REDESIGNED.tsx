import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Users,
  Calendar,
  TrendingUp,
  Brain,
  Shield,
  Zap,
  Activity,
  CheckCircle,
  Clock,
  ZoomIn,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Coins,
  FileText,
  Search,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";
import { useIntersectionAnimation } from "../hooks/use-page-animations";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import ProblemEvidenceContainer from "../components/case-study/ProblemEvidenceContainer";
import BeforeAfterComparison from "../components/case-study/BeforeAfterComparison";
import DesignEvolutionShowcase from "../components/case-study/DesignEvolutionShowcase";

// Custom hook for counting animation
const useCountAnimation = (
  end: number,
  duration: number = 2000,
  startAnimation: boolean = false,
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  return count;
};

// Animated Counter Component
const AnimatedCounter = ({
  value,
  suffix = "%",
  className,
  startAnimation,
}: {
  value: number;
  suffix?: string;
  className: string;
  startAnimation: boolean;
}) => {
  const animatedValue = useCountAnimation(value, 2000, startAnimation);

  return (
    <div className={className}>
      {animatedValue}
      {suffix}
    </div>
  );
};

// MetricCard Component - NEW
interface MetricCardProps {
  metric: string;
  baseline: string;
  result: string;
  method: string;
  tasks?: string;
  validation: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
}

const MetricCard = ({
  metric,
  baseline,
  result,
  method,
  tasks,
  validation,
  bgColor,
  borderColor,
  icon,
}: MetricCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 border-l-4 ${borderColor}`}>
      <div className="flex items-start gap-3 mb-4">
        {icon}
        <p className="text-2xl font-bold mb-2">{metric}</p>
      </div>
      <div className="space-y-1 text-sm">
        <p>
          <strong>Baseline:</strong> {baseline}
        </p>
        <p>
          <strong>Result:</strong> {result}
        </p>
        <p>
          <strong>Method:</strong> {method}
        </p>
        {tasks && (
          <p>
            <strong>Tasks:</strong> {tasks}
          </p>
        )}
        <p>
          <strong>Validated:</strong> {validation}
        </p>
      </div>
    </div>
  );
};

export default function ComputisCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [allInsightsExpanded, setAllInsightsExpanded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGifModalOpen, setIsGifModalOpen] = useState(false);
  const [isAuditDrawerModalOpen, setIsAuditDrawerModalOpen] = useState(false);
  const [isRuleBuilderModalOpen, setIsRuleBuilderModalOpen] = useState(false);
  const [isAnomalyDetectionModalOpen, setIsAnomalyDetectionModalOpen] =
    useState(false);
  const [isMultiTenantModalOpen, setIsMultiTenantModalOpen] = useState(false);

  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.5, "0px 0px -50px 0px");

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle geometric background pattern */}
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

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00FFB3]/5 rounded-full blur-[100px]"></div>

      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-base font-medium text-[#6B7280] leading-normal hover:text-[#00D4FF] transition-all duration-300 hover:scale-105 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* PHASE 1: IMPROVED HERO SECTION */}
      <header className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="mb-8">
          {/* Kicker Badge */}
          <span className="inline-block bg-[#f59e0b] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6">
            FinTech • AI Transparency • 2023
          </span>

          {/* NEW PUNCHY HEADLINE - From Action Plan */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-[110%] tracking-[-1.2px] mb-6 max-w-[75ch]">
            CPAs Control the AI, Not the Other Way Around
          </h1>

          {/* RESULTS-DRIVEN SUBTITLE - From Action Plan */}
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#6B7280] leading-[140%] tracking-[-0.24px] max-w-[75ch]">
            How explainable AI design turned skeptical accountants into
            advocates—and closed 3 enterprise deals in 6 months
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFB3] rounded-[16px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full max-w-[3600px] h-auto rounded-[12px]"
              style={{
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.1)",
                overflow: "hidden",
                borderStyle: "hidden",
                borderWidth: 1,
                margin: "20px 0",
                backgroundColor: "#0F0F0F",
              }}
            >
              <source
                src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F9a2e2391639b42419ffe2ced602cd628?alt=media&token=8fcf21ed-2a10-4b16-b64a-bdaaf9144962&apiKey=ba69a23156414a589de97341511272c9"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative mt-5 text-center z-10">
        <a
          href="https://computis.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D4FF] font-semibold underline text-lg hover:text-[#00FFB3] transition-colors duration-300"
        >
          View Live Prototype
        </a>
      </div>

      {/* PHASE 1: COMPRESSED TL;DR SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 relative z-10">
        <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-6 sm:p-8 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300">
          {/* Transformation Story - COMPRESSED */}
          <div className="mb-6 max-w-[75ch]">
            <p className="text-base text-white leading-relaxed mb-2">
              <strong>Before:</strong> CPAs waited 2.5 hours for engineers to
              modify Python scripts for crypto classification.
            </p>
            <p className="text-base text-white leading-relaxed">
              <strong>After:</strong> CPAs built custom rules in 90 seconds
              without code—turning AI opacity into transparency.
            </p>
          </div>

          {/* Impact Metrics Grid - ALWAYS VISIBLE */}
          <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 sm:p-8 border border-[#00FFB3]/20 mb-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 leading-tight">
              <Activity className="w-6 h-6 text-[#00FFB3]" />
              Impact at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-3xl sm:text-4xl font-bold text-[#00FFB3] mb-3">
                  ↓ 45%
                </p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-normal">
                  CPA onboarding time
                  <br />
                  <span className="text-xs text-[#6B7280]">(2.5h → 1.4h)</span>
                </p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-3">
                  ↑ 32%
                </p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-normal">
                  Demo-to-conversion
                  <br />
                  <span className="text-xs text-[#6B7280]">rate increase</span>
                </p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-3xl sm:text-4xl font-bold text-[#00D4FF] mb-3">
                  ↓ 85%
                </p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-normal">
                  Reliance on
                  <br />
                  <span className="text-xs text-[#6B7280]">
                    engineering teams
                  </span>
                </p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-3xl sm:text-4xl font-bold text-[#0080FF] mb-3">
                  ↑ 150%
                </p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-normal">
                  Anomaly detection
                  <br />
                  <span className="text-xs text-[#6B7280]">
                    coverage increase
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Executive Summary */}
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-center gap-2 text-base font-semibold text-[#00D4FF] hover:text-[#00FFB3] transition-colors"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            {isSummaryExpanded ? "Hide" : "Read"} Executive Summary
            {isSummaryExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {isSummaryExpanded && (
            <div
              id="summary-content"
              className="mt-8 animate-in fade-in-0 slide-in-from-top-4 duration-500"
            >
              <div className="space-y-6">
                <div className="bg-[#FFD700]/5 rounded-[16px] p-6 border-l-4 border-[#FFD700]">
                  <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2 leading-tight">
                    🚀 Executive Overview
                  </h3>
                  <p className="text-base text-[#D1D5DB] leading-relaxed max-w-[75ch]">
                    In early 2023, Computis CPAs spent 85% of their time waiting
                    for engineers to modify Python scripts for crypto
                    transaction classification. There were{" "}
                    <span className="font-semibold text-white">
                      no audit trails
                    </span>
                    ,{" "}
                    <span className="font-semibold text-white">
                      no explainability
                    </span>
                    , and{" "}
                    <span className="font-semibold text-white">
                      no autonomy
                    </span>{" "}
                    for professionals. By October 2023, CPAs could build custom
                    classification rules in under 90 seconds without writing
                    code. This transformation turned AI opacity into
                    transparency—
                    <span className="font-semibold text-[#00D4FF]">
                      reframing trust as Computis's competitive moat
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-20 relative z-10">
        {/* PHASE 1: IMPROVED PROBLEM SECTION - VISUAL CARD PATTERN */}
        <section className="mt-16">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8 max-w-[75ch]">
              Problem & Opportunity
            </h2>

            {/* Problem Card */}
            <div className="bg-red-50/10 rounded-[20px] p-6 border-l-4 border-red-500 mb-6">
              <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                The Problem
              </h3>
              <p className="text-base text-[#D1D5DB] mb-4 max-w-[75ch] leading-relaxed">
                CPAs spent 85% of their time waiting for engineers to modify
                backend scripts. No audit trails. No explainability. No
                autonomy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div className="flex items-start gap-2 text-sm text-red-300">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Manual Python scripts (engineer-dependent)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-red-300">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>No audit trail for IRS defense</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-red-300">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Black-box AI (liability risk)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-red-300">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Frequent FMV reconciliation errors</span>
                </div>
              </div>
            </div>

            {/* Opportunity Card */}
            <div className="bg-green-50/10 rounded-[20px] p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                The Opportunity
              </h3>
              <p className="text-base text-[#D1D5DB] max-w-[75ch] leading-relaxed">
                Build a{" "}
                <strong className="text-white">
                  CPA-first explainable AI platform
                </strong>{" "}
                with audit trails, no-code rule-building, and transparency as a
                competitive moat.
              </p>
            </div>
          </div>
        </section>

        {/* PLACEHOLDER: Visual Assets Section */}
        <section className="mt-16">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">
              User Journey Transformation
            </h2>

            {/* PLACEHOLDER: Journey Map - Before */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-100/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                  BEFORE
                </span>
                <h3 className="text-xl font-medium text-white">
                  CPA Journey — Current State (Manual + Engineer-Dependent)
                </h3>
              </div>
              <div className="bg-[#1A1A1A]/50 border-2 border-dashed border-[#6B7280] rounded-lg p-12 text-center">
                <p className="text-[#6B7280] text-sm mb-2">
                  📊 VISUAL ASSET PLACEHOLDER
                </p>
                <p className="text-white font-semibold mb-2">
                  Journey Map — Current State
                </p>
                <p className="text-[#9CA3AF] text-xs max-w-[50ch] mx-auto">
                  Dimensions: 1400px × 900px | Format: WebP
                  <br />
                  Shows 5 stages: Receive Data → Request Classification → Wait
                  for Engineering → Review + Adjust → Export for Filing
                  <br />
                  Highlights: 85% time waiting, no audit trail, 2.5h total time,
                  black-box AI
                </p>
              </div>
            </div>

            {/* PLACEHOLDER: Journey Map - After */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  AFTER
                </span>
                <h3 className="text-xl font-medium text-white">
                  CPA Journey — Future State (Self-Service + AI-Assisted)
                </h3>
              </div>
              <div className="bg-[#1A1A1A]/50 border-2 border-dashed border-[#6B7280] rounded-lg p-12 text-center">
                <p className="text-[#6B7280] text-sm mb-2">
                  📊 VISUAL ASSET PLACEHOLDER
                </p>
                <p className="text-white font-semibold mb-2">
                  Journey Map — Future State
                </p>
                <p className="text-[#9CA3AF] text-xs max-w-[50ch] mx-auto">
                  Dimensions: 1400px × 900px | Format: WebP
                  <br />
                  Shows 5 stages: Import Wallets → Build Rules → Review AI
                  Classifications → Override + Annotate → Export (IRS 8949 +
                  QuickBooks)
                  <br />
                  Improvements: Self-service, visual rule builder, 45% time
                  reduction (1.4h total), confidence chips
                </p>
              </div>
            </div>

            {/* Journey Impact */}
            <div className="bg-amber-50/10 rounded-lg p-6 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-400 mb-2">
                Journey Impact
              </h4>
              <ul className="space-y-1 text-sm text-amber-200/80">
                <li>• Eliminated 85% engineering dependency</li>
                <li>• Reduced onboarding from 2.5h to 1.4h (45% faster)</li>
                <li>• Added audit trail at every step (compliance)</li>
                <li>• Improved CPA confidence through explainability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PLACEHOLDER: Information Architecture Diagram */}
        <section className="mt-16">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">
              Information Architecture
            </h2>

            <div className="bg-[#1A1A1A]/50 border-2 border-dashed border-[#6B7280] rounded-lg p-12 text-center mb-6">
              <p className="text-[#6B7280] text-sm mb-2">
                🗂️ VISUAL ASSET PLACEHOLDER
              </p>
              <p className="text-white font-semibold mb-2">
                IA Sitemap Diagram
              </p>
              <p className="text-[#9CA3AF] text-xs max-w-[60ch] mx-auto">
                Dimensions: 1400px × 1000px | Format: WebP
                <br />
                Modular hierarchy: Dashboard → Clients → Wallets → Transactions
                → Rules → Reports
                <br />
                Shows role-based permission layers (CPA, Analyst, Admin) with
                color-coded badges
                <br />
                Annotations: Self-service entry point, audit trail at every
                level, modular structure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50/10 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-400 mb-2">
                  Modular Design
                </h4>
                <p className="text-sm text-blue-200/80">
                  Each level is independently scalable for new jurisdictions and
                  assets
                </p>
              </div>
              <div className="bg-purple-50/10 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-400 mb-2">
                  Role-Based Views
                </h4>
                <p className="text-sm text-purple-200/80">
                  CPAs, Analysts, and Admins see only relevant sections
                </p>
              </div>
              <div className="bg-green-50/10 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-400 mb-2">
                  Audit Trail
                </h4>
                <p className="text-sm text-green-200/80">
                  Accessible contextually at every level for compliance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHASE 1: METRICS WITH VALIDATION CONTEXT */}
        <section className="mt-16">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">
              Outcomes & Impact
            </h2>

            <p className="text-base text-[#6B7280] mb-8 max-w-[75ch] leading-relaxed">
              All metrics were tracked using a combination of Mixpanel funnels,
              Google Analytics events, Jira ticket analysis, and recorded
              usability sessions over a 10-month period (Oct 2022 - Aug 2023).
            </p>

            {/* PLACEHOLDER: Metrics Dashboard */}
            <div className="bg-[#1A1A1A]/50 border-2 border-dashed border-[#6B7280] rounded-lg p-12 text-center mb-8">
              <p className="text-[#6B7280] text-sm mb-2">
                📈 VISUAL ASSET PLACEHOLDER
              </p>
              <p className="text-white font-semibold mb-2">
                Metrics Validation Dashboard
              </p>
              <p className="text-[#9CA3AF] text-xs max-w-[60ch] mx-auto">
                Dimensions: 1400px × 700px | Format: WebP
                <br />
                Shows 3 key metrics with validation methodology:
                <br />
                • CPA onboarding time (line chart declining 2.5h to 1.4h)
                <br />
                • Demo-to-conversion rate (bar chart showing 32% increase)
                <br />• Engineering dependency (pie chart showing 85% to 12%
                reduction)
              </p>
            </div>

            {/* Metric Cards with Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <MetricCard
                metric="↓45% CPA Onboarding Time"
                baseline="2.5h average (Oct 2022, n=6 CPAs)"
                result="1.4h average (Aug 2023, n=6 CPAs)"
                method="Task analysis (Wallet → Rule → Export)"
                validation="Mixpanel funnel + 8 recorded sessions"
                bgColor="bg-green-50/10"
                borderColor="border-green-500"
                icon={<TrendingUp className="w-5 h-5 text-green-400" />}
              />

              <MetricCard
                metric="↑32% Demo-to-Conversion Rate"
                baseline="22% (Q1 2023, n=24 demos)"
                result="29% (Q3 2023, n=23 demos)"
                method="A/B test (explainability features)"
                validation="HubSpot + manual analysis"
                bgColor="bg-amber-50/10"
                borderColor="border-amber-500"
                icon={<Target className="w-5 h-5 text-amber-400" />}
              />

              <MetricCard
                metric="↓85% Engineering Dependency"
                baseline="85% tasks needed engineer"
                result="12% tasks needed engineer"
                method="200 requests over 6 months"
                validation="Jira ticket analysis"
                bgColor="bg-purple-50/10"
                borderColor="border-purple-500"
                icon={<Zap className="w-5 h-5 text-purple-400" />}
              />

              <MetricCard
                metric="↑150% Anomaly Detection Coverage"
                baseline="35% FMV errors caught"
                result="88% FMV errors caught"
                method="Retrospective audit of 500 transactions"
                validation="Internal audit + CPA feedback"
                bgColor="bg-blue-50/10"
                borderColor="border-blue-500"
                icon={<Activity className="w-5 h-5 text-blue-400" />}
              />
            </div>

            {/* Business Impact */}
            <div className="bg-[#1A1A1A]/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Business Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Closed 3 enterprise deals in 6 months ($450K+ ARR)
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Reduced support tickets by 40%</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Scaled to DAOs, hedge funds, and 50+ CPA firms</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#D1D5DB]">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Zero FMV disputes post-launch (down from 8 in beta)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder for rest of sections - TO BE CONTINUED IN NEXT PHASES */}
        <section className="mt-16">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#FFD700]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              🚧 Phase 2-3 Content In Progress
            </h3>
            <p className="text-[#9CA3AF] mb-4 max-w-[75ch]">
              The following sections are being redesigned according to the
              action plan:
            </p>
            <ul className="space-y-2 text-sm text-[#D1D5DB]">
              <li>
                • <strong>Research & Insights</strong> - Visual hierarchy
                improvements, affinity maps
              </li>
              <li>
                • <strong>Key Design Decisions</strong> - Complete rewrite with
                alternatives & rationale pattern
              </li>
              <li>
                • <strong>Wireframe Evolution</strong> - Lo-fi → Mid-fi → Hi-fi
                progression
              </li>
              <li>
                • <strong>Competitive Analysis Matrix</strong> - Enhanced with
                visual differentiation
              </li>
              <li>
                • <strong>Design System Showcase</strong> - Component library
                and principles
              </li>
              <li>
                • <strong>Persona Cards</strong> - 3 detailed user personas
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentCaseStudy="computis" />

      {/* Footer */}
      <Footer />

      {/* Image Modal */}
      {enlargedImage && (
        <Dialog
          open={!!enlargedImage}
          onOpenChange={() => setEnlargedImage(null)}
        >
          <DialogOverlay className="fixed inset-0 bg-black/90 z-50" />
          <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <DialogTitle className="sr-only">{enlargedImage.alt}</DialogTitle>
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setEnlargedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#00D4FF] transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={enlargedImage.src}
                alt={enlargedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
