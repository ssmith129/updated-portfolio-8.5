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
          {/* Hero Subtitle - Bridge between H1 and body */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#9CA3AF] leading-[1.4] tracking-tight max-w-5xl">
            Transforming an opaque backend script into an enterprise-grade,
            CPA-first AI SaaS platform
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFB3] rounded-[16px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur"></div>
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/f00556f27fc2ebd7151cac07d0c167922f7421e8/public/Dashboard.gif"
              alt="Computis Dashboard demo"
              className="relative w-full max-w-[1280px] h-auto rounded-[12px]"
              style={{
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.1)",
                overflow: "hidden",
                borderStyle: "hidden",
                borderWidth: 1,
                margin: "20px 0",
                backgroundColor: "#0F0F0F",
              }}
            />
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
              <a href="#problem" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Problem</a>
              <a href="#research" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Research</a>
              <a href="#process-deepdive" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Process</a>
              <a href="#design-system" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Design System</a>
              <a href="#solutions" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Solutions</a>
              <a href="#technical-collab" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Technical</a>
              <a href="#impact" className="text-sm font-medium text-[#9CA3AF] hover:text-[#00D4FF] whitespace-nowrap transition-colors">Impact</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Summary Card - ENHANCED */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 relative z-10">
        <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-6 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            {/* H2: Major Section Headers */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-[1.2] tracking-tight group-hover:text-[#00D4FF] transition-colors duration-300">
              TL;DR
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#00D4FF] transition-colors duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#00D4FF] transition-colors duration-300" />
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
                  <span className="font-bold">Portfolio Update (Jan 2025):</span> This enhanced version now includes in-depth design process documentation, design system showcase, and technical collaboration details.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a href="#process-deepdive" className="text-xs font-medium text-[#00D4FF] hover:underline">→ See Design Process</a>
                  <a href="#design-system" className="text-xs font-medium text-[#00D4FF] hover:underline">→ Explore Design System</a>
                  <a href="#technical-collab" className="text-xs font-medium text-[#00D4FF] hover:underline">→ View Technical Partnership</a>
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
                    <span className="font-semibold text-white">no autonomy</span>{" "}
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
        <section id="problem" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 cursor-pointer">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Problem & Opportunity
            </h2>

            <div className="bg-[#FF4D4D]/5 rounded-[20px] p-8 border border-[#FF4D4D]/20 mb-10 transition-all duration-300 hover:border-[#FF4D4D]/40 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-5 flex items-center gap-2 leading-[1.3]">
                <AlertTriangle className="w-6 h-6" />
                Problem
              </h3>
              <p className="text-lg text-[#D1D5DB] mb-6 leading-[1.7]">
                CPAs faced opaque, engineer-dependent crypto classification
                tools that blocked scale and trust.
              </p>
              <h4 className="text-lg font-semibold text-[#FF8888] mb-4 leading-[1.4]">
                Pain Points:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#D1D5DB]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-base leading-[1.7]">Manual Python scripts</span>
                </li>
                <li className="flex items-start gap-3 text-[#D1D5DB]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-base leading-[1.7]">No audit trail for compliance</span>
                </li>
                <li className="flex items-start gap-3 text-[#D1D5DB]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-base leading-[1.7]">CSV-only export workflows</span>
                </li>
                <li className="flex items-start gap-3 text-[#D1D5DB]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-base leading-[1.7]">"Black-box" AI undermining trust</span>
                </li>
                <li className="flex items-start gap-3 text-[#D1D5DB]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-base leading-[1.7]">Frequent FMV reconciliation errors</span>
                </li>
              </ul>
            </div>

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
        <section id="research" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Research & Insights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                  Methodology
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base text-[#D1D5DB] leading-[1.7]">
                      8 CPA + tax analyst interviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base text-[#D1D5DB] leading-[1.7]">
                      6 workflow shadowing sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base text-[#D1D5DB] leading-[1.7]">
                      Competitive teardown: TaxBit, Cryptio, CoinTracker,
                      ZenLedger
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base text-[#D1D5DB] leading-[1.7]">
                      4 usability test cycles
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base text-[#D1D5DB] leading-[1.7]">
                      Compliance workshops with tax attorneys
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-base text-[#D1D5DB] leading-[1.7]">
                      Analytics review via Mixpanel + GA
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6 leading-[1.3]">
                  Key Insights
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#FF4D4D]/10 rounded-[16px] p-5 border-l-4 border-[#FF4D4D] transition-all duration-300 hover:bg-[#FF4D4D]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-semibold text-[#FF8888] mb-2 leading-[1.4]">
                      1. CPAs rejected black-box AI
                    </p>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Transparency was non-negotiable for professional liability
                    </p>
                  </div>
                  <div className="bg-[#FFD700]/10 rounded-[16px] p-5 border-l-4 border-[#FFD700] transition-all duration-300 hover:bg-[#FFD700]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                      2. 85% time loss waiting for engineers
                    </p>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      CPAs needed autonomy to scale
                    </p>
                  </div>
                  <div className="bg-[#00D4FF]/10 rounded-[16px] p-5 border-l-4 border-[#00D4FF] transition-all duration-300 hover:bg-[#00D4FF]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                      3. Auditability drives trust & sales
                    </p>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Audit trails became a competitive differentiator
                    </p>
                  </div>
                  <div className="bg-[#00FFB3]/10 rounded-[16px] p-5 border-l-4 border-[#00FFB3] transition-all duration-300 hover:bg-[#00FFB3]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                      4. Bulk rule-building = scale
                    </p>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Manual classification couldn't support growth
                    </p>
                  </div>
                  <div className="bg-[#0080FF]/10 rounded-[16px] p-5 border-l-4 border-[#0080FF] transition-all duration-300 hover:bg-[#0080FF]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-semibold text-[#0080FF] mb-2 leading-[1.4]">
                      5. Explainable AI increased adoption
                    </p>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Showing reasoning built professional confidence
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
        <section id="process-deepdive" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <div className="flex items-center gap-3 mb-10">
              <Brain className="w-8 h-8 text-[#00D4FF]" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight">
                Design Process Deep Dive
              </h2>
            </div>

            <div className="bg-[#FFD700]/5 rounded-[20px] p-6 mb-10 border-l-4 border-[#FFD700]">
              <p className="text-base text-[#D1D5DB] leading-[1.7]">
                <strong className="text-white font-semibold">Process Philosophy:</strong> I don't start with solutions—I start with constraints.
                For Computis, the constraints were clear: CPAs need defensible decisions, engineers need
                scalable systems, and the business needs faster sales cycles. These constraints shaped
                every design decision.
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
                        <em>"I can't stake my license on something I can't explain to a client."</em> — CPA Interview
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
                        <em>"I need to change one rule and it takes 3 days."</em> — CPA Interview
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

            {/* Design Insight Callout */}
            <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border-l-4 border-[#0080FF]">
              <h4 className="text-base font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                💡 Design Insight
              </h4>
              <p className="text-sm text-[#D1D5DB] leading-[1.7]">
                Trust through transparency isn't just a principle—it's a measurable UX requirement. Every design decision was validated against the question: "Can a CPA defend this in an audit?"
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
                  <span className="text-2xl">🗺️</span>
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
                  <span className="text-2xl">🏗️</span>
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
                  <span className="text-2xl">🛡️</span>
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
                  <span className="text-2xl">⚡</span>
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
                  <span className="text-2xl">♿</span>
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
                  <span className="text-2xl">🎨</span>
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
                    <h4 className="font-semibold text-[#00D4FF] mb-2 leading-[1.4]">CPA</h4>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Rules, audit logs, overrides
                    </p>
                  </div>
                  <div className="bg-[#00D4FF]/10 p-5 rounded-[16px] border-l-4 border-[#00D4FF]">
                    <h4 className="font-semibold text-[#00D4FF] mb-2 leading-[1.4]">Analyst</h4>
                    <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                      Ingestion, anomalies
                    </p>
                  </div>
                  <div className="bg-[#00FFB3]/10 p-5 rounded-[16px] border-l-4 border-[#00FFB3]">
                    <h4 className="font-semibold text-[#00FFB3] mb-2 leading-[1.4]">Admin</h4>
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
        <section id="design-system" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <div className="flex items-center gap-3 mb-10">
              <Settings className="w-8 h-8 text-[#00D4FF]" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight">
                Design System: Building for Scale
              </h2>
            </div>

            <div className="bg-[#FFD700]/5 rounded-[20px] p-6 mb-10 border-l-4 border-[#FFD700]">
              <p className="text-base text-[#D1D5DB] leading-[1.7]">
                <strong className="text-white font-semibold">System Philosophy:</strong> A design system isn't just a component library—it's
                a shared language between design and engineering. For Computis, the system needed to
                support rapid feature development while maintaining trust through consistency.
              </p>
            </div>

            {/* System Principles */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-8 leading-[1.3]">Design Principles</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#0080FF]/20">
                  <h4 className="text-base font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                    1. Trust Through Clarity
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    Every component should reduce cognitive load and increase confidence.
                    No surprises, no hidden actions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00FFB3]/20">
                  <h4 className="text-base font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                    2. Professional-Grade Density
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    CPAs work with data-heavy interfaces. Optimize for information density
                    without sacrificing readability.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0080FF]/10 rounded-[16px] p-6 border border-[#00D4FF]/20">
                  <h4 className="text-base font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                    3. Dark-First for Extended Use
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    CPAs spend 4-6 hours/day in the platform. Dark theme reduces eye strain
                    and was preferred 3:1 in user research.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#FFD700]/20">
                  <h4 className="text-base font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                    4. Accessibility is Non-Negotiable
                  </h4>
                  <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                    WCAG 2.1 AA compliance from design through implementation. Enterprise
                    procurement requires it.
                  </p>
                </div>
              </div>
            </div>

            {/* Dark Theme Rationale */}
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] text-white rounded-[20px] p-6 mb-10 border border-[#00D4FF]/20">
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 leading-[1.4]">
                <Lightbulb className="w-5 h-5 text-[#FFD700]" />
                Dark Theme Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-[12px] p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-1">↓40%</p>
                  <p className="text-sm text-gray-300">Eye strain reduction</p>
                </div>
                <div className="bg-white/10 rounded-[12px] p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-1">75%</p>
                  <p className="text-sm text-gray-300">User preference for dark mode</p>
                </div>
                <div className="bg-white/10 rounded-[12px] p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-1">7:1</p>
                  <p className="text-sm text-gray-300">Contrast ratio (WCAG AAA)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Design Decisions - Continue with remaining sections using consistent typography... */}
        <section id="solutions" className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-10">
              Key Design Decisions
            </h2>

            <div className="space-y-10">
              {/* 1. AI Confidence Chips */}
              <div className="bg-gradient-to-r from-[#0080FF]/5 to-[#00D4FF]/5 rounded-[20px] p-8 border border-[#0080FF]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#00D4FF]">1️⃣</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-[1.3]">
                      AI Confidence Chips + Accept/Reject Controls
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-2 leading-[1.4]">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          CPAs distrusted automation.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-2 leading-[1.4]">
                          Solution:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          Confidence-level chips with hover rationale and
                          one-click override.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-2 leading-[1.4]">
                          Impact:
                        </p>
                        <p className="text-sm text-[#D1D5DB] leading-[1.6]">
                          ↓ 70% false positives; ↑ AI trust & adoption.
                        </p>
                      </div>
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

        {/* Due to length, I'll provide the complete file with all remaining sections following the same typography pattern in the next response */}