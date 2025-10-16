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
  Settings,
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

      // Easing function for smooth animation
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

export default function ComputisCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGifModalOpen, setIsGifModalOpen] = useState(false);
  const [isAuditDrawerModalOpen, setIsAuditDrawerModalOpen] = useState(false);
  const [isRuleBuilderModalOpen, setIsRuleBuilderModalOpen] = useState(false);
  const [isAnomalyDetectionModalOpen, setIsAnomalyDetectionModalOpen] =
    useState(false);
  const [isMultiTenantModalOpen, setIsMultiTenantModalOpen] = useState(false);

  // Use the new animation hook for metrics animation
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
          className="inline-flex items-center gap-2 text-base font-medium text-[#888888] leading-normal hover:text-[#00D4FF] transition-all duration-300 hover:scale-105 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="mb-8">
          <span className="inline-block bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] px-4 py-2 rounded-[20px] text-sm font-semibold tracking-tight mb-6">
            FinTech UX Case Study • 12 min read
          </span>
          {/* H1: Case Study Title - Largest, most prominent */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
            Computis — Redefining Trust in Crypto Tax Automation
          </h1>
          {/* Hero Hook - Compelling value statement */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#9CA3AF] leading-[1.4] tracking-tight max-w-5xl">
            How I transformed crypto tax automation by making AI transparent and trustworthy for 47 CPA firms
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

      {/* Sticky Table of Contents */}
      <div className="sticky top-20 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A] py-3 mt-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto">
            <nav className="flex gap-4 sm:gap-6">
              <a
                href="#problem"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Problem
              </a>
              <a
                href="#research"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Research
              </a>
              <a
                href="#process-deepdive"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Process
              </a>
              <a
                href="#design-system"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Design System
              </a>
              <a
                href="#solutions"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Solutions
              </a>
              <a
                href="#technical-collab"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Technical
              </a>
              <a
                href="#impact"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors"
              >
                Impact
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Summary Card - ENHANCED - Always Visible Metrics */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 relative z-10">
        <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-6 sm:p-8 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          {/* H2: Major Section Headers */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-[1.2] tracking-tight mb-8">
            Impact at a Glance
          </h2>

          {/* Project Metadata - Always Visible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4">
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">Role</p>
              <p className="text-base font-medium text-white leading-[1.6]">Founding Lead Product Designer</p>
            </div>
            <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4">
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">Platform</p>
              <p className="text-base font-medium text-white leading-[1.6]">Web SaaS (Desktop-first, responsive)</p>
            </div>
            <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4">
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">Duration</p>
              <p className="text-base font-medium text-white leading-[1.6]">10 months (Discovery → Beta Launch)</p>
            </div>
          </div>

          {/* Metrics Grid - Always Visible */}
          <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 sm:p-8 border border-[#00FFB3]/20 mb-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 leading-[1.3]">
              <Activity className="w-6 h-6 text-[#00FFB3]" />
              Key Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-4xl sm:text-5xl font-bold text-[#00FFB3] mb-3">↓ 45%</p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-[1.6]">
                  CPA onboarding time<br />
                  <span className="text-xs text-[#9CA3AF]">(2.5h → 1.4h)</span>
                </p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-3">↑ 32%</p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-[1.6]">
                  Demo-to-conversion<br />
                  <span className="text-xs text-[#9CA3AF]">rate increase</span>
                </p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-4xl sm:text-5xl font-bold text-[#00D4FF] mb-3">↓ 85%</p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-[1.6]">
                  Reliance on<br />
                  <span className="text-xs text-[#9CA3AF]">engineering teams</span>
                </p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-4xl sm:text-5xl font-bold text-[#0080FF] mb-3">↑ 150%</p>
                <p className="text-sm font-medium text-[#D1D5DB] leading-[1.6]">
                  Anomaly detection<br />
                  <span className="text-xs text-[#9CA3AF]">coverage increase</span>
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Executive Summary */}
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-center gap-2 text-sm font-medium text-[#00D4FF] hover:text-[#00FFB3] transition-colors"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            {isSummaryExpanded ? 'Hide' : 'Read'} Executive Summary
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
              {/* Portfolio Update Callout - NEW */}
              <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[16px] p-5 mb-8 border-l-4 border-[#0080FF]">
                <p className="text-sm font-semibold text-[#00D4FF] mb-2">
                  <span className="font-bold">
                    Portfolio Update (Jan 2025):
                  </span>{" "}
                  This enhanced version now includes in-depth design process
                  documentation, design system showcase, and technical
                  collaboration details.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="#process-deepdive"
                    className="text-xs font-medium text-[#00D4FF] hover:underline"
                  >
                    → See Design Process
                  </a>
                  <a
                    href="#design-system"
                    className="text-xs font-medium text-[#00D4FF] hover:underline"
                  >
                    → Explore Design System
                  </a>
                  <a
                    href="#technical-collab"
                    className="text-xs font-medium text-[#00D4FF] hover:underline"
                  >
                    → View Technical Partnership
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  {/* H3: Subsection Headers */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 leading-[1.3] tracking-tight">
                    From Backend Script to CPA-First Enterprise SaaS
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-2">
                      {/* Label style - Small, uppercase, tracked */}
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                        Role
                      </p>
                      {/* Body text - Medium size, medium weight */}
                      <p className="text-base font-medium text-white leading-[1.6]">
                        Founding Lead Product Designer
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                        Platform
                      </p>
                      <p className="text-base font-medium text-white leading-[1.6]">
                        Web SaaS (Desktop-first, responsive)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                        Duration
                      </p>
                      <p className="text-base font-medium text-white leading-[1.6]">
                        10 months (Discovery → Beta Launch)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00FFB3]/20">
                  <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2 leading-[1.3]">
                    ✅ Impact at a Glance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      {/* Metric value - Large, bold, color */}
                      <p className="text-3xl font-bold text-[#00FFB3] mb-2">
                        ↓ 45%
                      </p>
                      {/* Metric label - Small, secondary color */}
                      <p className="text-sm font-medium text-[#9CA3AF]">
                        CPA onboarding time
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#FFD700] mb-2">
                        ↑ 32%
                      </p>
                      <p className="text-sm font-medium text-[#9CA3AF]">
                        demo-to-conversion rate
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#00D4FF] mb-2">
                        ↓ 85%
                      </p>
                      <p className="text-sm font-medium text-[#9CA3AF]">
                        reliance on engineering teams
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#0080FF] mb-2">
                        ↑ 150%
                      </p>
                      <p className="text-sm font-medium text-[#9CA3AF]">
                        anomaly detection coverage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFD700]/5 rounded-[16px] p-6 border-l-4 border-[#FFD700]">
                  <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2 leading-[1.3]">
                    🚀 Executive Overview
                  </h3>
                  {/* Body text - 16px base, good line height, secondary color */}
                  <p className="text-base text-[#D1D5DB] leading-[1.7]">
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
        {/* Project Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 mt-12">
            {/* H2: Major Section Headers */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10 transition-all duration-300 hover:text-[#00D4FF] cursor-pointer">
              Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Role
                </h3>
                <p className="text-lg font-medium text-white leading-[1.6]">
                  Founding Lead Product Designer
                </p>
              </div>
              <div className="space-y-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Team
                </h3>
                <p className="text-lg font-medium text-white leading-[1.6]">
                  CTO, PM, 2 Engineers, Design Agency Partner
                </p>
              </div>
              <div className="space-y-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Duration
                </h3>
                <p className="text-lg font-medium text-white leading-[1.6]">
                  10 months (Discovery → Beta Launch)
                </p>
              </div>
              <div className="space-y-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Platform
                </h3>
                <p className="text-lg font-medium text-white leading-[1.6]">
                  Web SaaS (Desktop-first, responsive)
                </p>
              </div>
              <div className="space-y-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Tools
                </h3>
                <p className="text-lg font-medium text-white leading-[1.6]">
                  Figma, Miro, Notion, Jira, GA, Mixpanel
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A]/50 rounded-[20px] p-8 border-l-4 border-[#00D4FF] mb-10">
              <h3 className="text-xl font-semibold text-white mb-5 leading-[1.3]">
                Objectives
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-base text-[#D1D5DB] leading-[1.7]">
                    Enable CPAs to self-serve without engineers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-base text-[#D1D5DB] leading-[1.7]">
                    Build audit-ready workflows with transparency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-base text-[#D1D5DB] leading-[1.7]">
                    Reduce compliance risk through explainable AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-base text-[#D1D5DB] leading-[1.7]">
                    Generate IRS 8949 and QuickBooks outputs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-base text-[#D1D5DB] leading-[1.7]">
                    Scale for DAOs, hedge funds, and enterprise CPA firms
                  </span>
                </li>
              </ul>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-[#00D4FF]/5 to-[#0080FF]/5 rounded-[20px] p-8 sm:p-10 border border-[#00D4FF]/20"
            >
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2 leading-[1.3]">
                <Activity className="w-6 h-6 text-[#00D4FF]" />
                Hero Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={45}
                    className="text-4xl sm:text-5xl font-bold text-[#00FFB3] mb-3"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm font-medium text-[#9CA3AF] leading-[1.6]">
                    ↓ CPA onboarding time (2.5h → 1.4h)
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={32}
                    className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-3"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm font-medium text-[#9CA3AF] leading-[1.6]">
                    ↑ demo-to-conversion rate
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={85}
                    className="text-4xl sm:text-5xl font-bold text-[#00D4FF] mb-3"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm font-medium text-[#9CA3AF] leading-[1.6]">
                    ↓ reliance on engineering teams
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={150}
                    className="text-4xl sm:text-5xl font-bold text-[#0080FF] mb-3"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm font-medium text-[#9CA3AF] leading-[1.6]">
                    ↑ anomaly detection coverage
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-4xl sm:text-5xl font-bold text-[#00FFB3] mb-3 block">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-[#9CA3AF] leading-[1.6]">
                    Secured enterprise CPA partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section
          id="problem"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900"
        >
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 cursor-pointer">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Problem & Opportunity
            </h2>

            <div className="bg-[#FF4D4D]/5 rounded-[20px] p-8 border border-[#FF4D4D]/20 mb-10 transition-all duration-300 hover:border-[#FF4D4D]/40 hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-5 flex items-center gap-2 leading-[1.3]">
                <AlertTriangle className="w-6 h-6" />
                The Problem: Opacity & Dependency
              </h3>
              <p className="text-lg text-[#D1D5DB] mb-6 leading-[1.7]">
                CPAs faced opaque, engineer-dependent crypto classification tools that blocked scale and trust. The existing workflow was unsustainable.
              </p>

              <div className="bg-[#1A1A1A]/50 rounded-[16px] p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#FF8888] mb-4 leading-[1.4]">
                  The Reality: What We Observed
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#FF4D4D]/10 rounded-[12px] p-4 border-l-4 border-[#FF4D4D]">
                    <p className="text-sm font-semibold text-[#FF8888] mb-2">❌ Manual Python Scripts</p>
                    <p className="text-xs text-[#D1D5DB] leading-[1.6]">
                      CPAs spent 85% of time waiting for engineers to modify backend code
                    </p>
                  </div>
                  <div className="bg-[#FF4D4D]/10 rounded-[12px] p-4 border-l-4 border-[#FF4D4D]">
                    <p className="text-sm font-semibold text-[#FF8888] mb-2">❌ No Audit Trail</p>
                    <p className="text-xs text-[#D1D5DB] leading-[1.6]">
                      Zero compliance visibility - couldn't defend decisions to IRS
                    </p>
                  </div>
                  <div className="bg-[#FF4D4D]/10 rounded-[12px] p-4 border-l-4 border-[#FF4D4D]">
                    <p className="text-sm font-semibold text-[#FF8888] mb-2">❌ Black-Box AI</p>
                    <p className="text-xs text-[#D1D5DB] leading-[1.6]">
                      No explanation for categorizations - impossible to explain to clients
                    </p>
                  </div>
                  <div className="bg-[#FF4D4D]/10 rounded-[12px] p-4 border-l-4 border-[#FF4D4D]">
                    <p className="text-sm font-semibold text-[#FF8888] mb-2">❌ CSV-Only Exports</p>
                    <p className="text-xs text-[#D1D5DB] leading-[1.6]">
                      18-29 hours per client with manual data wrangling
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#2A2A2A]/30 rounded-[12px] p-5 border border-[#FF4D4D]/20">
                <p className="text-sm text-[#FF8888] font-semibold mb-2">📉 The Cost of Opacity</p>
                <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                  In shadowing sessions, we observed CPAs spending <strong className="text-white">18-29 hours per client</strong> on workflows that should take 4-6 hours. The bottleneck? Waiting for engineers to modify Python scripts for every edge case.
                </p>
              </div>
            </div>

            {/* Visual Evidence from Technical Design Doc */}
            <ProblemEvidenceContainer />

            <div className="bg-[#00FFB3]/5 rounded-[20px] p-8 border border-[#00FFB3]/20 mb-10 transition-all duration-300 hover:border-[#00FFB3]/40 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-2xl font-semibold text-[#00FFB3] mb-5 flex items-center gap-2 leading-[1.3]">
                <Target className="w-6 h-6" />
                Opportunity
              </h3>
              <p className="text-lg text-[#D1D5DB] mb-4 leading-[1.7]">
                Build a{" "}
                <span className="font-semibold text-white">
                  CPA-first explainable AI platform
                </span>{" "}
                with audit trails, rule-building, and scalable transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section
          id="research"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100"
        >
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Research & Insights
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                Research Methodology
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#0080FF]/10 rounded-[16px] p-4 text-center border border-[#0080FF]/20">
                  <p className="text-3xl font-bold text-[#00D4FF] mb-2">8</p>
                  <p className="text-xs text-[#9CA3AF]">CPA Interviews</p>
                </div>
                <div className="bg-[#00FFB3]/10 rounded-[16px] p-4 text-center border border-[#00FFB3]/20">
                  <p className="text-3xl font-bold text-[#00FFB3] mb-2">6</p>
                  <p className="text-xs text-[#9CA3AF]">Shadowing Sessions</p>
                </div>
                <div className="bg-[#FFD700]/10 rounded-[16px] p-4 text-center border border-[#FFD700]/20">
                  <p className="text-3xl font-bold text-[#FFD700] mb-2">17</p>
                  <p className="text-xs text-[#9CA3AF]">Usability Tests</p>
                </div>
                <div className="bg-[#00D4FF]/10 rounded-[16px] p-4 text-center border border-[#00D4FF]/20">
                  <p className="text-3xl font-bold text-[#00D4FF] mb-2">14</p>
                  <p className="text-xs text-[#9CA3AF]">Total Participants</p>
                </div>
              </div>
            </div>

            {/* User Interview Quotes */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                What Users Told Us
              </h3>
              <p className="text-base text-[#9CA3AF] mb-8 leading-[1.7]">
                Direct feedback from 8 CPA interviews revealed critical pain points in existing crypto tax workflows.
              </p>

              <div className="space-y-6">
                {/* Quote 1 */}
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6 border-l-4 border-[#FF4D4D]">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="text-base text-[#D1D5DB] italic leading-[1.7] mb-4">
                        "I spend more time explaining to clients why the numbers changed than I do actually doing the work. Every adjustment requires a 30-minute explanation because they don't trust the 'magic' behind it."
                      </p>
                      <div className="border-t border-[#2A2A2A] pt-3">
                        <p className="text-sm font-semibold text-[#9CA3AF]">— Senior Tax Manager</p>
                        <p className="text-xs text-[#6B7280]">Big 4 Accounting Firm</p>
                        <p className="text-xs text-[#6B7280] italic mt-1">CPA with 12 years crypto tax experience</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote 2 */}
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6 border-l-4 border-[#FFD700]">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="text-base text-[#D1D5DB] italic leading-[1.7] mb-4">
                        "I can't use a tool I can't explain to the IRS. When they audit my clients, I need to show exactly how every number was calculated. 'The AI did it' isn't an answer."
                      </p>
                      <div className="border-t border-[#2A2A2A] pt-3">
                        <p className="text-sm font-semibold text-[#9CA3AF]">— Partner</p>
                        <p className="text-xs text-[#6B7280]">Mid-Market CPA Firm</p>
                        <p className="text-xs text-[#6B7280] italic mt-1">Specializes in cryptocurrency taxation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote 3 */}
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6 border-l-4 border-[#00D4FF]">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="text-base text-[#D1D5DB] italic leading-[1.7] mb-4">
                        "Our workflow is Excel → Python script → Excel → Manual check → Excel again. I've become a data babysitter instead of a strategic advisor. My MBA isn't being used to copy-paste between spreadsheets."
                      </p>
                      <div className="border-t border-[#2A2A2A] pt-3">
                        <p className="text-sm font-semibold text-[#9CA3AF]">— Tax Analyst</p>
                        <p className="text-xs text-[#6B7280]">Fortune 500 In-House</p>
                        <p className="text-xs text-[#6B7280] italic mt-1">Former engineer turned accountant</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote 4 */}
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6 border-l-4 border-[#00FFB3]">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="text-base text-[#D1D5DB] italic leading-[1.7] mb-4">
                        "If you could show me WHY the AI categorized something the way it did, and let ME make the final call when I disagree, I'd pay double what I'm paying now. I need augmentation, not replacement."
                      </p>
                      <div className="border-t border-[#2A2A2A] pt-3">
                        <p className="text-sm font-semibold text-[#9CA3AF]">— Founder</p>
                        <p className="text-xs text-[#6B7280]">Boutique Crypto Tax Consultancy</p>
                        <p className="text-xs text-[#6B7280] italic mt-1">Former IRS examiner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div></div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                  Key Insights
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#FF4D4D]/10 rounded-[16px] p-5 border-l-4 border-[#FF4D4D] transition-all duration-300 hover:bg-[#FF4D4D]/15 hover:scale-[1.02] cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-[#FF8888] leading-[1.4]">
                        Manual Python Scripts
                      </p>
                      <span className="text-xs font-bold text-[#FF4D4D] bg-[#FF4D4D]/20 px-3 py-1 rounded-full">
                        95% Critical
                      </span>
                    </div>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      CPAs spent 85% of time waiting for engineers
                    </p>
                  </div>
                  <div className="bg-[#FF6B6B]/10 rounded-[16px] p-5 border-l-4 border-[#FF6B6B] transition-all duration-300 hover:bg-[#FF6B6B]/15 hover:scale-[1.02] cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-[#FF8888] leading-[1.4]">
                        No Audit Trail for Compliance
                      </p>
                      <span className="text-xs font-bold text-[#FF6B6B] bg-[#FF6B6B]/20 px-3 py-1 rounded-full">
                        90% Regulatory Risk
                      </span>
                    </div>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      No IRS-defensible documentation
                    </p>
                  </div>
                  <div className="bg-[#FFD700]/10 rounded-[16px] p-5 border-l-4 border-[#FFD700] transition-all duration-300 hover:bg-[#FFD700]/15 hover:scale-[1.02] cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-[#FFD700] leading-[1.4]">
                        Black-Box AI Undermining Trust
                      </p>
                      <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/20 px-3 py-1 rounded-full">
                        85% Trust Issue
                      </span>
                    </div>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Can't explain to clients/IRS
                    </p>
                  </div>
                  <div className="bg-[#00D4FF]/10 rounded-[16px] p-5 border-l-4 border-[#00D4FF] transition-all duration-300 hover:bg-[#00D4FF]/15 hover:scale-[1.02] cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-[#00D4FF] leading-[1.4]">
                        CSV-Only Export Workflows
                      </p>
                      <span className="text-xs font-bold text-[#00D4FF] bg-[#00D4FF]/20 px-3 py-1 rounded-full">
                        75% Time-Consuming
                      </span>
                    </div>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Manual data wrangling across platforms
                    </p>
                  </div>
                  <div className="bg-[#00FFB3]/10 rounded-[16px] p-5 border-l-4 border-[#00FFB3] transition-all duration-300 hover:bg-[#00FFB3]/15 hover:scale-[1.02] cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-[#00FFB3] leading-[1.4]">
                        Frequent FMV Reconciliation Errors
                      </p>
                      <span className="text-xs font-bold text-[#00FFB3] bg-[#00FFB3]/20 px-3 py-1 rounded-full">
                        70% Manual Fixes
                      </span>
                    </div>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      High error rate in categorization
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Analysis Matrix */}
            <div className="mt-12 pt-10 border-t border-[#1A1A1A]">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                Competitive Landscape Analysis
              </h3>
              <p className="text-base text-[#9CA3AF] mb-8 leading-[1.7]">
                We analyzed 5 leading crypto tax platforms to identify gaps in AI transparency and CPA workflow support.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-[#1A1A1A]/50 rounded-[16px] overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0080FF]/20 to-[#00D4FF]/20 border-b border-[#2A2A2A]">
                      <th className="text-left p-4 text-sm font-semibold text-white">Feature</th>
                      <th className="text-center p-4 text-sm font-bold text-[#00D4FF] bg-[#00D4FF]/10">Computis</th>
                      <th className="text-center p-4 text-sm font-semibold text-[#9CA3AF]">TaxBit</th>
                      <th className="text-center p-4 text-sm font-semibold text-[#9CA3AF]">Cryptio</th>
                      <th className="text-center p-4 text-sm font-semibold text-[#9CA3AF]">CoinTracker</th>
                      <th className="text-center p-4 text-sm font-semibold text-[#9CA3AF]">Koinly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="p-4 text-sm text-[#D1D5DB]">AI Explainability</td>
                      <td className="text-center p-4 bg-[#00D4FF]/5"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="p-4 text-sm text-[#D1D5DB]">Confidence Levels</td>
                      <td className="text-center p-4 bg-[#00D4FF]/5"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="p-4 text-sm text-[#D1D5DB]">One-Click Override</td>
                      <td className="text-center p-4 bg-[#00D4FF]/5"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-xs text-[#FFD700] italic">Partial</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-xs text-[#FFD700] italic">Partial</span></td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="p-4 text-sm text-[#D1D5DB]">Real-Time Audit Trail</td>
                      <td className="text-center p-4 bg-[#00D4FF]/5"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-xs text-[#FFD700] italic">Partial</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="p-4 text-sm text-[#D1D5DB]">CPA-First Design</td>
                      <td className="text-center p-4 bg-[#00D4FF]/5"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-xs text-[#FFD700] italic">Partial</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#00FFB3]">✅</span></td>
                      <td className="text-center p-4"><span className="text-2xl text-[#FF4D4D]">❌</span></td>
                      <td className="text-center p-4"><span className="text-xs text-[#FFD700] italic">Partial</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#FFD700]/10 rounded-[16px] p-6 border-l-4 border-[#FFD700]">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="text-sm font-semibold text-[#FFD700] mb-2">KEY DIFFERENTIATOR</p>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6] mb-3">
                      We're the only platform that makes AI transparent and puts CPAs in control, not clients.
                    </p>
                    <p className="text-xs text-[#9CA3AF]">
                      <strong className="text-white">Target User:</strong> B2B (CPA firms serving clients) &bull;
                      <strong className="text-white ml-2">Competitors:</strong> B2C (Clients self-managing taxes)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business & Market Analysis */}
            <div className="mt-12 pt-10 border-t border-[#1A1A1A]">
              <h3 className="text-xl font-semibold text-white mb-8 leading-[1.3]">
                Business & Market Analysis
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Market Gaps */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2 leading-[1.4]">
                    <span className="text-lg">📊</span>
                    Market Gaps
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border-l-4 border-[#6B7280] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        Consumer tools lack audit-grade compliance features
                      </p>
                    </div>
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border-l-4 border-[#6B7280] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        Enterprise platforms use opaque AI that CPAs can't
                        validate
                      </p>
                    </div>
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border-l-4 border-[#6B7280] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        No CPA-first workflows with client management
                      </p>
                    </div>
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border-l-4 border-[#6B7280] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        Tools force reliance on engineering for rule
                        customization
                      </p>
                    </div>
                  </div>
                </div>

                {/* Computis Opportunity */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2 leading-[1.4]">
                    <span className="text-lg">🎯</span>
                    Computis Opportunity
                  </h4>
                  <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#00FFB3]/20">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#D1D5DB] leading-[1.6]">
                          <span className="font-semibold text-white">
                            First CPA-first platform
                          </span>{" "}
                          with transparent, auditable workflows
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#D1D5DB] leading-[1.6]">
                          <span className="font-semibold text-white">
                            Explainable AI
                          </span>{" "}
                          with professional override control
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#D1D5DB] leading-[1.6]">
                          <span className="font-semibold text-white">
                            Modular infrastructure
                          </span>{" "}
                          for multi-client firms
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#D1D5DB] leading-[1.6]">
                          <span className="font-semibold text-white">
                            Audit-ready exports
                          </span>{" "}
                          competitors lack
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#0080FF]/10 rounded-[16px] p-5 border-l-4 border-[#0080FF]">
                <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                  <span className="font-semibold text-white">
                    Market Positioning:
                  </span>{" "}
                  Dominate the CPA segment (CoinTracker, Koinly target
                  consumers; TaxBit, Cryptio serve enterprises) by delivering
                  professional-grade explainability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Design Process Deep Dive */}
        <section
          id="process-deepdive"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300"
        >
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <div className="flex items-center gap-3 mb-10">
              <Brain className="w-8 h-8 text-[#00D4FF]" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight">
                Design Process Deep Dive
              </h2>
            </div>

            <div className="bg-[#FFD700]/5 rounded-[20px] p-6 mb-10 border-l-4 border-[#FFD700]">
              <p className="text-base text-[#D1D5DB] leading-[1.7]">
                <strong className="text-white font-semibold">
                  Process Philosophy:
                </strong>{" "}
                I don't start with solutions—I start with constraints. For
                Computis, the constraints were clear: CPAs need defensible
                decisions, engineers need scalable systems, and the business
                needs faster sales cycles. These constraints shaped every design
                decision.
              </p>
            </div>

            {/* From Insights to Concepts */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-8 leading-[1.3]">
                From Insights to Concepts
              </h3>

              <div className="space-y-8">
                {/* Insight → Concept Pair 1 */}
                <div className="bg-gradient-to-r from-[#1A1A1A]/50 to-[#252525]/50 rounded-[20px] p-6 border border-[#00D4FF]/20">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                    {/* Research Insight */}
                    <div className="bg-[#FF4D4D]/10 rounded-[16px] p-5 border-l-4 border-[#FF4D4D]">
                      <p className="text-xs font-bold text-[#FF8888] uppercase tracking-wider mb-2">
                        Research Insight #1
                      </p>
                      <p className="text-base font-semibold text-white mb-3 leading-[1.4]">
                        "CPAs rejected black-box AI"
                      </p>
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        <em>
                          "I can't stake my license on something I can't explain
                          to a client."
                        </em>{" "}
                        — CPA Interview
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="w-8 h-8 text-[#6B7280] hidden md:block" />

                    {/* Design Concept */}
                    <div className="bg-[#00FFB3]/10 rounded-[16px] p-5 border-l-4 border-[#00FFB3]">
                      <p className="text-xs font-bold text-[#00FFB3] uppercase tracking-wider mb-2">
                        Design Concept
                      </p>
                      <p className="text-base font-semibold text-white mb-3 leading-[1.4]">
                        AI Confidence Chips + Override Controls
                      </p>
                      <ul className="text-sm text-[#D1D5DB] space-y-1 leading-[1.6]">
                        <li>• Surfaces AI reasoning (transparency)</li>
                        <li>• Gives CPAs veto power (control)</li>
                        <li>• Reduces professional liability (trust)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Insight → Concept Pair 2 */}
                <div className="bg-gradient-to-r from-[#1A1A1A]/50 to-[#252525]/50 rounded-[20px] p-6 border border-[#00D4FF]/20">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                    <div className="bg-[#FF4D4D]/10 rounded-[16px] p-5 border-l-4 border-[#FF4D4D]">
                      <p className="text-xs font-bold text-[#FF8888] uppercase tracking-wider mb-2">
                        Research Insight #2
                      </p>
                      <p className="text-base font-semibold text-white mb-3 leading-[1.4]">
                        "85% time waiting for engineers"
                      </p>
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        <em>
                          "I need to change one rule and it takes 3 days."
                        </em>{" "}
                        — CPA Interview
                      </p>
                    </div>

                    <ChevronRight className="w-8 h-8 text-[#6B7280] hidden md:block" />

                    <div className="bg-[#00FFB3]/10 rounded-[16px] p-5 border-l-4 border-[#00FFB3]">
                      <p className="text-xs font-bold text-[#00FFB3] uppercase tracking-wider mb-2">
                        Design Concept
                      </p>
                      <p className="text-base font-semibold text-white mb-3 leading-[1.4]">
                        Visual Rule Builder (No-Code)
                      </p>
                      <ul className="text-sm text-[#D1D5DB] space-y-1 leading-[1.6]">
                        <li>• Natural language interface (approachability)</li>
                        <li>• Preview before apply (confidence)</li>
                        <li>• Bulk rule creation (scale)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Evolution Timeline */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-8 leading-[1.3]">
                Design Evolution: From Concept to Production
              </h3>
              <p className="text-base text-[#9CA3AF] mb-8 leading-[1.7]">
                Here's how the most critical feature—automated classification rules—evolved from initial sketches to the final shipped product.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Stage 1 */}
                <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border border-[#0080FF]/20 hover:border-[#0080FF]/40 transition-all">
                  <div className="w-10 h-10 bg-[#0080FF]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-[#0080FF]">1</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-[1.4]">
                    Initial Exploration
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mb-3 leading-[1.6]">
                    Quick sketches to explore interaction patterns for rule creation
                  </p>
                  <div className="bg-[#0080FF]/10 rounded-lg p-3">
                    <p className="text-xs text-[#00D4FF] italic">
                      Key question: How do we make AI suggestions transparent without overwhelming users?
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all">
                  <div className="w-10 h-10 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-[#00D4FF]">2</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-[1.4]">
                    Wireframe Testing
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mb-3 leading-[1.6]">
                    Tested with 3 CPAs to validate mental model
                  </p>
                  <div className="bg-[#00D4FF]/10 rounded-lg p-3">
                    <p className="text-xs text-[#00D4FF] italic">
                      Learning: Users wanted to see ALL classification options upfront, not progressive disclosure
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border border-[#00FFB3]/20 hover:border-[#00FFB3]/40 transition-all">
                  <div className="w-10 h-10 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-[#00FFB3]">3</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-[1.4]">
                    High-Fidelity Prototype
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mb-3 leading-[1.6]">
                    Tested with 5 users for usability validation
                  </p>
                  <div className="bg-[#00FFB3]/10 rounded-lg p-3">
                    <p className="text-xs text-[#00FFB3] italic">
                      Finding: Confidence percentages alone weren't enough—added color-coded chips for at-a-glance scanning
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="bg-[#1A1A1A]/50 rounded-[16px] p-5 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-[#FFD700]">4</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-[1.4]">
                    Production Release
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mb-3 leading-[1.6]">
                    Shipped with 98% design-dev fidelity
                  </p>
                  <div className="bg-[#FFD700]/10 rounded-lg p-3">
                    <p className="text-xs text-[#FFD700] italic">
                      Result: 89% task completion rate vs. 34% with old workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Insight Callout */}
            <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border-l-4 border-[#0080FF]">
              <h4 className="text-base font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                💡 Design Insight
              </h4>
              <p className="text-sm text-[#D1D5DB] leading-[1.7]">
                Trust through transparency isn't just a principle—it's a
                measurable UX requirement. Every design decision was validated
                against the question: "Can a CPA defend this in an audit?"
              </p>
            </div>
          </div>
        </section>

        {/* Design Process & Methodology */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Design Process & Methodology
            </h2>

            <div className="mb-10">
              <p className="text-lg text-[#D1D5DB] leading-[1.7] mb-8">
                I applied a{" "}
                <span className="font-semibold text-[#00D4FF]">
                  professional-centered, trust-first design approach
                </span>{" "}
                throughout the project lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Journey Mapping */}
              <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#0080FF]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                      User Journey Mapping
                    </h3>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Documented complete workflows for CPA, Ops Analyst, and
                      Admin personas across client lifecycle
                    </p>
                  </div>
                </div>
              </div>

              {/* Information Architecture Design */}
              <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#00FFB3]/10 rounded-[20px] p-6 border border-[#00D4FF]/20 transition-all duration-300 hover:border-[#00FFB3]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                      Information Architecture Design
                    </h3>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Structured modular IA supporting Clients → Wallets →
                      Transactions → Rules → Reports flow
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Framework Development */}
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#00FFB3]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-[1.4]">
                      Trust Framework Development
                    </h3>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Established design principles prioritizing transparency,
                      explainability, and professional control
                    </p>
                  </div>
                </div>
              </div>

              {/* Rapid Prototyping */}
              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#FFD700]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                      Rapid Prototyping
                    </h3>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Iterated from sketches → wireframes → interactive
                      prototypes with continuous CPA validation
                    </p>
                  </div>
                </div>
              </div>

              {/* Accessibility-First Design */}
              <div className="bg-gradient-to-br from-[#FF8888]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#FF8888]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-[1.4]">
                      Accessibility-First Design
                    </h3>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Applied WCAG 2.1 AA standards from initial wireframes
                      through final implementation
                    </p>
                  </div>
                </div>
              </div>

              {/* Design System Creation */}
              <div className="bg-gradient-to-br from-[#6B7280]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#6B7280]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-[1.4]">
                      Design System Creation
                    </h3>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Built comprehensive component library with dark theme
                      optimized for extended professional use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              System Architecture
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                Information Architecture
              </h3>
              <div className="bg-gradient-to-r from-[#1A1A1A]/50 to-[#252525]/50 rounded-[20px] p-6 border border-[#00D4FF]/20">
                <div className="flex flex-wrap items-center gap-3 text-center">
                  <span className="bg-[#0080FF]/20 text-[#00D4FF] px-4 py-2 rounded-lg font-medium border border-[#0080FF]/30">
                    Clients
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#6B7280]" />
                  <span className="bg-[#00FFB3]/20 text-[#00FFB3] px-4 py-2 rounded-lg font-medium border border-[#00FFB3]/30">
                    Wallets
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#6B7280]" />
                  <span className="bg-[#00D4FF]/20 text-[#00D4FF] px-4 py-2 rounded-lg font-medium border border-[#00D4FF]/30">
                    Transactions
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#6B7280]" />
                  <span className="bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-lg font-medium border border-[#FFD700]/30">
                    Rules
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#6B7280]" />
                  <span className="bg-[#FF8888]/20 text-[#FF8888] px-4 py-2 rounded-lg font-medium border border-[#FF8888]/30">
                    Reports
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#6B7280]" />
                  <span className="bg-[#00D4FF]/20 text-[#00D4FF] px-4 py-2 rounded-lg font-medium border border-[#00D4FF]/30">
                    Exports
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                  Role-Based Views
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#0080FF]/10 p-5 rounded-[16px] border-l-4 border-[#0080FF]">
                    <h4 className="font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                      CPA
                    </h4>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Rules, audit logs, overrides
                    </p>
                  </div>
                  <div className="bg-[#00D4FF]/10 p-5 rounded-[16px] border-l-4 border-[#00D4FF]">
                    <h4 className="font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                      Analyst
                    </h4>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Ingestion, anomalies
                    </p>
                  </div>
                  <div className="bg-[#00FFB3]/10 p-5 rounded-[16px] border-l-4 border-[#00FFB3]">
                    <h4 className="font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                      Admin
                    </h4>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Multi-client operations
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6">
                  <p className="text-base text-[#D1D5DB] leading-[1.7]">
                    I led IA restructuring to ensure{" "}
                    <span className="font-semibold text-white">
                      scalable, modular architecture
                    </span>
                    , enabling easy jurisdiction and asset expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Design System Showcase */}
        <section
          id="design-system"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
        >
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <div className="flex items-center gap-3 mb-10">
              <Settings className="w-8 h-8 text-[#00D4FF]" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight">
                Design System: Building for Scale
              </h2>
            </div>

            <div className="bg-[#FFD700]/5 rounded-[20px] p-6 mb-10 border-l-4 border-[#FFD700]">
              <p className="text-base text-[#D1D5DB] leading-[1.7]">
                <strong className="text-white font-semibold">
                  System Philosophy:
                </strong>{" "}
                A design system isn't just a component library—it's a shared
                language between design and engineering. For Computis, the
                system needed to support rapid feature development while
                maintaining trust through consistency.
              </p>
            </div>

            {/* System Principles */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-8 leading-[1.3]">
                Design Principles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#0080FF]/20">
                  <h4 className="text-base font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                    1. Trust Through Clarity
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    Every component should reduce cognitive load and increase
                    confidence. No surprises, no hidden actions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00FFB3]/20">
                  <h4 className="text-base font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                    2. Professional-Grade Density
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    CPAs work with data-heavy interfaces. Optimize for
                    information density without sacrificing readability.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0080FF]/10 rounded-[16px] p-6 border border-[#00D4FF]/20">
                  <h4 className="text-base font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                    3. Dark-First for Extended Use
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    CPAs spend 4-6 hours/day in the platform. Dark theme reduces
                    eye strain and was preferred 3:1 in user research.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#FFD700]/20">
                  <h4 className="text-base font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                    4. Accessibility is Non-Negotiable
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    WCAG 2.1 AA compliance from design through implementation.
                    Enterprise procurement requires it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Design Decisions - Continue with remaining sections using consistent typography... */}
        <section
          id="solutions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700"
        >
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Key Design Decisions
            </h2>

            <div className="space-y-10">
              {/* 1. AI Confidence Chips - Before/After Comparison */}
              <div className="bg-gradient-to-r from-[#0080FF]/5 to-[#00D4FF]/5 rounded-[20px] p-8 border border-[#0080FF]/20 transition-all duration-300 hover:border-[#00D4FF]/40">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#00D4FF]">1️⃣</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-[1.3]">
                      AI-Powered Classification with Confidence Levels
                    </h3>

                    {/* Before/After Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* BEFORE Panel */}
                      <div className="bg-[#1A1A1A]/60 rounded-[16px] p-5 border border-[#FF4D4D]/30">
                        <span className="inline-block text-xs font-bold text-[#FF4D4D] bg-[#FF4D4D]/20 px-3 py-1 rounded-full mb-4">
                          BEFORE
                        </span>
                        <div className="space-y-3">
                          <p className="text-sm text-[#D1D5DB] leading-[1.6] mb-3">
                            <strong className="text-[#FF8888]">Challenge:</strong> CPAs distrusted automation because previous tools provided categorizations without explanation.
                          </p>
                          <div className="space-y-2">
                            <p className="text-xs text-[#FF8888] flex items-start gap-2">
                              <span>❌</span>
                              <span>No explanation for AI decisions</span>
                            </p>
                            <p className="text-xs text-[#FF8888] flex items-start gap-2">
                              <span>❌</span>
                              <span>Users manually verified every item</span>
                            </p>
                            <p className="text-xs text-[#FF8888] flex items-start gap-2">
                              <span>❌</span>
                              <span>85% of time spent on verification</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* AFTER Panel */}
                      <div className="bg-[#1A1A1A]/60 rounded-[16px] p-5 border border-[#00FFB3]/30">
                        <span className="inline-block text-xs font-bold text-[#00FFB3] bg-[#00FFB3]/20 px-3 py-1 rounded-full mb-4">
                          AFTER
                        </span>
                        <div className="space-y-3">
                          <p className="text-sm text-[#D1D5DB] leading-[1.6] mb-3">
                            <strong className="text-[#00FFB3]">Solution:</strong> Color-coded confidence chips (High/Medium/Low) with hover explanations showing AI rationale.
                          </p>
                          <div className="space-y-2">
                            <p className="text-xs text-[#00FFB3] flex items-start gap-2">
                              <span>✅</span>
                              <span>AI confidence levels visible</span>
                            </p>
                            <p className="text-xs text-[#00FFB3] flex items-start gap-2">
                              <span>✅</span>
                              <span>Explanations on hover</span>
                            </p>
                            <p className="text-xs text-[#00FFB3] flex items-start gap-2">
                              <span>✅</span>
                              <span>70% reduction in false positives</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[12px] p-4 border-l-4 border-[#00D4FF]">
                      <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                        <strong className="text-[#FFD700]">Impact:</strong> Reduced manual verification from <strong className="text-white">85% of transactions to 12%</strong>, saving CPAs an average of <strong className="text-white">6.5 hours per client</strong>. Trust score increased from 6.2/10 to 8.9/10.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] border border-[#00D4FF]/10 self-center flex-none">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e"
                      srcSet="https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=100 100w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=200 200w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=400 400w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=800 800w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=1200 1200w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=1600 1600w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e?width=2000 2000w, https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e"
                      className="w-full aspect-[1.59] min-w-[20px] min-h-[20px] overflow-hidden rounded-lg object-contain object-center cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setIsGifModalOpen(true)}
                      alt="AI Confidence Chips + Accept/Reject Controls demo"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsGifModalOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 2. Inline Audit Trail Drawer */}
              <div className="bg-gradient-to-r from-[#00FFB3]/5 to-[#00D4FF]/5 rounded-[20px] p-8 border border-[#00FFB3]/20 transition-all duration-300 hover:border-[#00FFB3]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#00FFB3]">2️⃣</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-[1.3]">
                      Inline Audit Trail Drawer
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          No compliance visibility.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                          Solution:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Persistent contextual audit trail.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                          Impact:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          ↓ 40% compliance tickets; enabled independent IRS
                          audit defense.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] border border-[#00FFB3]/10 self-center flex-none">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <img
                      loading="lazy"
                      src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Inline%20Audit%20Drawer.gif"
                      alt="Inline Audit Trail Drawer demo"
                      className="w-full aspect-[1.59] min-w-[20px] min-h-[20px] overflow-hidden rounded-lg object-contain object-center cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setIsAuditDrawerModalOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsAuditDrawerModalOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* BeforeAfterComparison Component Example from Technical Design Doc */}
              <BeforeAfterComparison
                featureName="Real-Time Audit Trail System"
                painPoints={[
                  "No visibility into AI decision-making process",
                  "CPAs couldn't defend categorizations to auditors",
                  "Manual documentation required 2-3 hours per client"
                ]}
                improvements={[
                  "Complete audit trail with timestamps and reasoning",
                  "One-click export for IRS audits",
                  "Automatic documentation generation"
                ]}
                impactStatement="Reduced compliance preparation time from 2-3 hours to 15 minutes per client. Enabled CPAs to independently defend tax positions during IRS audits, resulting in 40% fewer compliance tickets."
              />

              {/* 3. Visual Rule Builder */}
              <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#0080FF]/5 rounded-[20px] p-8 border border-[#00D4FF]/20 transition-all duration-300 hover:border-[#0080FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#00D4FF]">3️⃣</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-[1.3]">
                      Visual Rule Builder (No-Code)
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          CPA dependency on engineers.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                          Solution:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Drag-and-drop natural language builder with preview.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                          Impact:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          ↓ 85% engineering reliance; ↑ 32% conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] border border-[#00D4FF]/10 self-center flex-none">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <img
                      loading="lazy"
                      src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Rule%20Builder.gif"
                      alt="Visual Rule Builder (No-Code) demo"
                      className="w-full aspect-[1.59] min-w-[20px] min-h-[20px] overflow-hidden rounded-lg object-contain object-center cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setIsRuleBuilderModalOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsRuleBuilderModalOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* BeforeAfterComparison for Rule Builder */}
              <BeforeAfterComparison
                featureName="No-Code Rule Builder Interface"
                painPoints={[
                  "Engineers needed for every custom rule modification",
                  "2-3 week delay for simple classification changes",
                  "CPAs couldn't experiment or iterate on rules"
                ]}
                improvements={[
                  "Drag-and-drop visual rule builder for CPAs",
                  "Real-time preview with sample transactions",
                  "Rules deployed in under 90 seconds"
                ]}
                impactStatement="Eliminated 85% of engineering dependencies for rule creation. CPAs can now build and test custom classification rules in under 90 seconds vs. waiting 2-3 weeks for engineering support. This led to 32% increase in demo-to-conversion rates."
              />

              {/* 4. Contextual Anomaly Detection */}
              <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#FF8888]/5 rounded-[20px] p-8 border border-[#FFD700]/20 transition-all duration-300 hover:border-[#FF8888]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#FFD700]">4️⃣</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-[1.3]">
                      Contextual Anomaly Detection
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Hidden FMV errors.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                          Solution:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Inline color-coded anomaly flags with hover tooltips.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                          Impact:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          ↑ 150% anomaly detection; ↓ manual triage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] border border-[#FFD700]/10 self-center flex-none">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <img
                      loading="lazy"
                      src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Data%20Anomaly%20Detection.gif"
                      alt="Contextual Anomaly Detection demo"
                      className="w-full aspect-[1.59] min-w-[20px] min-h-[20px] overflow-hidden rounded-lg object-contain object-center cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setIsAnomalyDetectionModalOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsAnomalyDetectionModalOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 5. Multi-Tenant Architecture */}
              <div className="bg-gradient-to-r from-[#6B7280]/5 to-[#00D4FF]/5 rounded-[20px] p-8 border border-[#6B7280]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#6B7280]">5️⃣</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-[1.3]">
                      Multi-Tenant Architecture
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          CPA firms manage multiple clients.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                          Solution:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Role-based multi-tenant dashboards.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                          Impact:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Enabled 100+ portfolio management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] border border-[#6B7280]/10 self-center flex-none">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <img
                      loading="lazy"
                      src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Client%20Based%20Roles.gif"
                      alt="Multi-Tenant Architecture demo"
                      className="w-full aspect-[1.59] min-w-[20px] min-h-[20px] overflow-hidden rounded-lg object-contain object-center cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setIsMultiTenantModalOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsMultiTenantModalOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Technical Collaboration & Partnership */}
        <section
          id="technical-collab"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] text-white rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#00D4FF]/20 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-8 h-8 text-[#00D4FF]" />
              <h2 className="text-3xl sm:text-4xl font-semibold leading-[1.2] tracking-tight">
                Technical Collaboration
              </h2>
            </div>

            {/* Engineering Testimonial */}
            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 mb-10 border border-[#00FFB3]/30">
              <blockquote className="text-lg italic mb-3 leading-[1.5]">
                "You sat with us during implementation, debugged CSS together,
                and proposed performance optimizations. You think like an
                engineer who happens to be excellent at design."
              </blockquote>
              <cite className="text-sm text-gray-300 not-italic">
                — Senior Frontend Engineer, Computis
              </cite>
            </div>

            {/* Key Contributions - Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {/* Contribution 1 */}
              <div className="bg-white/10 rounded-[20px] p-6 backdrop-blur-sm border border-white/20 hover:border-[#00D4FF]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0080FF]/20 rounded-lg flex items-center justify-center border border-[#0080FF]/30">
                    <Activity className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <h4 className="text-lg font-semibold leading-[1.3]">
                    Real-Time Rule Preview
                  </h4>
                </div>

                <p className="text-sm text-gray-400 mb-4 leading-[1.6]">
                  Partnered with backend to design debounced API endpoint for
                  instant preview
                </p>

                <div className="space-y-3">
                  <div className="bg-[#0080FF]/10 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[#00D4FF] mb-1">
                      Solution
                    </p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• 300ms debounced calls</li>
                      <li>• Count-only endpoint</li>
                      <li>• Client-side caching</li>
                    </ul>
                  </div>
                  <div className="bg-[#00FFB3]/10 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[#00FFB3] mb-1">
                      Impact
                    </p>
                    <p className="text-xs text-gray-300">
                      ↓ 85% server load • ↓ 40% rule creation time
                    </p>
                  </div>
                </div>
              </div>

              {/* Contribution 2 */}
              <div className="bg-white/10 rounded-[20px] p-6 backdrop-blur-sm border border-white/20 hover:border-[#00FFB3]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center border border-[#00FFB3]/30">
                    <Shield className="w-5 h-5 text-[#00FFB3]" />
                  </div>
                  <h4 className="text-lg font-semibold leading-[1.3]">
                    Accessibility CI/CD
                  </h4>
                </div>

                <p className="text-sm text-gray-400 mb-4 leading-[1.6]">
                  Integrated automated testing into pipeline with DevOps team
                </p>

                <div className="space-y-3">
                  <div className="bg-[#00FFB3]/10 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[#00FFB3] mb-1">
                      Solution
                    </p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• axe-core on every PR</li>
                      <li>• Lighthouse CI ≥95 score</li>
                      <li>• Playwright keyboard tests</li>
                    </ul>
                  </div>
                  <div className="bg-[#0080FF]/10 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[#0080FF] mb-1">
                      Impact
                    </p>
                    <p className="text-xs text-gray-300">
                      Zero regressions post-launch • WCAG compliant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-[16px] p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-[#00D4FF]" />
                  <h5 className="text-sm font-semibold text-[#00D4FF]">
                    Documentation
                  </h5>
                </div>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Annotated Figma files</li>
                  <li>• Component specs</li>
                  <li>• Edge case docs</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-[16px] p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-[#FFD700]" />
                  <h5 className="text-sm font-semibold text-[#FFD700]">
                    Pair Sessions
                  </h5>
                </div>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Debug CSS together</li>
                  <li>• Performance reviews</li>
                  <li>• Code prototypes</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-[16px] p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-[#00FFB3]" />
                  <h5 className="text-sm font-semibold text-[#00FFB3]">
                    Communication
                  </h5>
                </div>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Loom walkthroughs</li>
                  <li>�� Weekly syncs</li>
                  <li>• Async via Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Impact - ENHANCED */}
        <section
          id="impact"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100"
        >
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              📈 Outcomes & Impact
            </h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00FFB3]/5 rounded-[16px] p-4 border border-[#00FFB3]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00FFB3]/40">
                <p className="text-3xl font-bold text-[#00FFB3] mb-2">↓45%</p>
                <p className="text-xs font-medium text-[#9CA3AF] leading-[1.6]">
                  CPA onboarding
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 rounded-[16px] p-4 border border-[#FFD700]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FFD700]/40">
                <p className="text-3xl font-bold text-[#FFD700] mb-2">↑32%</p>
                <p className="text-xs font-medium text-[#9CA3AF] leading-[1.6]">
                  conversion rate
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#00D4FF]/5 rounded-[16px] p-4 border border-[#00D4FF]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00D4FF]/40">
                <p className="text-3xl font-bold text-[#00D4FF] mb-2">↓85%</p>
                <p className="text-xs font-medium text-[#9CA3AF] leading-[1.6]">
                  eng dependency
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#0080FF]/5 rounded-[16px] p-4 border border-[#0080FF]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#0080FF]/40">
                <p className="text-3xl font-bold text-[#0080FF] mb-2">↑150%</p>
                <p className="text-xs font-medium text-[#9CA3AF] leading-[1.6]">
                  anomaly detection
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/5 rounded-[16px] p-4 border border-[#00FFB3]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00FFB3]/40">
                <p className="text-3xl font-bold text-[#00FFB3] mb-2">↓40%</p>
                <p className="text-xs font-medium text-[#9CA3AF] leading-[1.6]">
                  support tickets
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/5 rounded-[16px] p-4 border border-[#00FFB3]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00FFB3]/40">
                <p className="text-3xl font-bold text-[#00FFB3] mb-2">Zero</p>
                <p className="text-xs font-medium text-[#9CA3AF] leading-[1.6]">
                  FMV disputes
                </p>
              </div>
            </div>

            {/* Key Insights - Redesigned */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                Key Insights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Insight 1 */}
                <div className="bg-white/5 rounded-[16px] p-5 border border-white/10 hover:border-[#0080FF]/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#0080FF]/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#0080FF]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#0080FF]">
                      Bulk Operations
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">
                    73% adopted bulk rules in week 1
                  </p>
                  <p className="text-xs text-gray-500">
                    "Power user" feature became primary workflow
                  </p>
                </div>

                {/* Insight 2 */}
                <div className="bg-white/5 rounded-[16px] p-5 border border-white/10 hover:border-[#00FFB3]/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#00FFB3]/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-[#00FFB3]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#00FFB3]">
                      Dark Mode
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">
                    75% defaulted to dark theme
                  </p>
                  <p className="text-xs text-gray-500">
                    Investment in dark-first design validated
                  </p>
                </div>

                {/* Insight 3 */}
                <div className="bg-white/5 rounded-[16px] p-5 border border-white/10 hover:border-[#FFD700]/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#FFD700]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#FFD700]">
                      Audit Trail
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">
                    Closed 3 enterprise deals
                  </p>
                  <p className="text-xs text-gray-500">
                    Competitive moat for compliance teams
                  </p>
                </div>
              </div>
            </div>

            {/* User Testimonials */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                What Users Say
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#0080FF]/20">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">💬</span>
                    <blockquote className="text-base italic text-[#D1D5DB] leading-[1.7]">
                      "This is the first crypto tax tool that actually makes sense to a CPA. The confidence levels and override controls give me the transparency I need."
                    </blockquote>
                  </div>
                  <cite className="text-sm text-[#9CA3AF] not-italic font-medium">
                    — Senior Tax Manager, Regional CPA Firm
                  </cite>
                </div>
                <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#FFD700]/20">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">🚀</span>
                    <blockquote className="text-base italic text-[#D1D5DB] leading-[1.7]">
                      "Your handoffs made us 10x faster. The annotated Figma files and edge case documentation were incredible. Best design-to-dev process I've seen."
                    </blockquote>
                  </div>
                  <cite className="text-sm text-[#9CA3AF] not-italic font-medium">
                    — Senior Frontend Engineer, Computis
                  </cite>
                </div>
              </div>
            </div>

            {/* Business ROI */}
            <div className="bg-gradient-to-r from-[#00FFB3]/5 to-[#00D4FF]/5 rounded-[20px] p-8 border border-[#00FFB3]/20">
              <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3] flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#00FFB3]" />
                Business Value & ROI
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4">
                  <p className="text-2xl font-bold text-[#00FFB3] mb-2">↓ $47K</p>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    Avg. support cost per quarter (40% reduction)
                  </p>
                </div>
                <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4">
                  <p className="text-2xl font-bold text-[#FFD700] mb-2">↑ 32%</p>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    Demo-to-conversion rate improvement
                  </p>
                </div>
                <div className="bg-[#1A1A1A]/50 rounded-[12px] p-4">
                  <p className="text-2xl font-bold text-[#00D4FF] mb-2">3</p>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    Enterprise deals closed in 6 months
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
                <p className="text-sm text-[#D1D5DB] leading-[1.7]">
                  <strong className="text-white">Strategic Impact:</strong> Audit trail feature became the #1 competitive differentiator, enabling Computis to position as the only <em>"enterprise-grade, audit-ready"</em> crypto tax platform. This moat attracted CPA firms managing $500M+ in client assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
          <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[25px] p-8 sm:p-10 lg:p-12 border-2 border-[#00D4FF]/30 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-[1.2]">
                The Transformation
              </h2>
              <p className="text-xl text-[#9CA3AF] leading-[1.5] max-w-3xl mx-auto">
                From opaque Python scripts to transparent, CPA-first enterprise platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before State */}
              <div className="bg-[#1A1A1A]/60 rounded-[20px] p-6 border-l-4 border-[#FF4D4D]">
                <h3 className="text-lg font-bold text-[#FF8888] mb-4 flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  Before
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • 85% of CPA time spent waiting for engineers
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • Zero AI transparency or explainability
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • No audit trails for IRS compliance
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • 18-29 hours per client processing time
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • Manual Python script modifications required
                  </li>
                </ul>
              </div>

              {/* After State */}
              <div className="bg-[#1A1A1A]/60 rounded-[20px] p-6 border-l-4 border-[#00FFB3]">
                <h3 className="text-lg font-bold text-[#00FFB3] mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  After
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • CPAs build custom rules in <strong className="text-white">under 90 seconds</strong>
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • AI confidence levels + full explainability
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • Real-time audit trail for all decisions
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • 10-14 hours per client (45% faster)
                  </li>
                  <li className="text-sm text-[#D1D5DB] leading-[1.6]">
                    • No-code visual rule builder for CPAs
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
              <p className="text-center text-lg text-[#D1D5DB] leading-[1.7]">
                <strong className="text-[#00D4FF]">Core Achievement:</strong> Transformed AI opacity into transparency—reframing <strong className="text-white">trust as Computis's competitive moat</strong> and enabling CPAs to serve <strong className="text-white">32% more clients</strong> without additional staff.
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Key Learnings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#0080FF]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#0080FF] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-[#00D4FF] mb-3 leading-[1.4]">
                  Trust is a UX Principle
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                  Explainability drove adoption more than feature quantity.
                  Transparency converted skeptics into advocates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#00FFB3]/5 rounded-[20px] p-6 border-l-4 border-[#00D4FF] transition-all duration-300 hover:border-[#00FFB3] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-[#00FFB3] mb-3 leading-[1.4]">
                  Systems &gt; Screens
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                  Modular IA enabled scaling. Role-based architecture
                  future-proofed for growth.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00FFB3]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#00FFB3] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-white mb-3 leading-[1.4]">
                  AI + Human Collaboration
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                  Override control flipped AI from threat to tool. Confidence
                  indicators enabled informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#FFD700] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-[#FFD700] mb-3 leading-[1.4]">
                  Design Drives Business
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                  Self-service features reduced costs. Audit trails closed
                  enterprise deals and differentiated from competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Modals */}
      <Dialog open={isGifModalOpen} onOpenChange={setIsGifModalOpen}>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-[#0F0F0F] border border-[#00D4FF]/30">
          <DialogTitle className="sr-only">
            AI Confidence Chips + Accept/Reject Controls - Enlarged View
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e"
              alt="AI Confidence Chips + Accept/Reject Controls - Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAuditDrawerModalOpen}
        onOpenChange={setIsAuditDrawerModalOpen}
      >
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-[#0F0F0F] border border-[#00FFB3]/30">
          <DialogTitle className="sr-only">
            Inline Audit Trail Drawer - Enlarged View
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Inline%20Audit%20Drawer.gif"
              alt="Inline Audit Trail Drawer - Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isRuleBuilderModalOpen}
        onOpenChange={setIsRuleBuilderModalOpen}
      >
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-[#0F0F0F] border border-[#00D4FF]/30">
          <DialogTitle className="sr-only">
            Visual Rule Builder (No-Code) - Enlarged View
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Rule%20Builder.gif"
              alt="Visual Rule Builder (No-Code) - Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAnomalyDetectionModalOpen}
        onOpenChange={setIsAnomalyDetectionModalOpen}
      >
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-[#0F0F0F] border border-[#FFD700]/30">
          <DialogTitle className="sr-only">
            Contextual Anomaly Detection - Enlarged View
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Data%20Anomaly%20Detection.gif"
              alt="Contextual Anomaly Detection - Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isMultiTenantModalOpen}
        onOpenChange={setIsMultiTenantModalOpen}
      >
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-[#0F0F0F] border border-[#6B7280]/30">
          <DialogTitle className="sr-only">
            Multi-Tenant Architecture - Enlarged View
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Client%20Based%20Roles.gif"
              alt="Multi-Tenant Architecture - Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      <RelatedCaseStudies currentCaseStudy="computis" />
      <Footer />
    </div>
  );
}
