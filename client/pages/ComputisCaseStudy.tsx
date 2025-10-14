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
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#888888] leading-normal tracking-[-0.18px] hover:text-[#00D4FF] transition-all duration-300 hover:scale-105 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="mb-8">
          <span className="inline-block bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] px-4 py-2 rounded-[20px] text-[14px] font-semibold tracking-[-0.14px] mb-6">
            FinTech UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-[110%] tracking-[-1.2px] mb-6">
            Computis — Redefining Trust in Crypto Tax Automation
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#888888] leading-[140%] tracking-[-0.24px] max-w-none md:whitespace-nowrap">
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
          className="text-[#00D4FF] font-semibold underline text-[20px] hover:text-[#00FFB3] transition-colors duration-300"
        >
          View Live Prototype
        </a>
      </div>

      {/* Summary Card */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 relative z-10">
        <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-6 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-xl sm:text-2xl font-medium text-white leading-[120%] tracking-[-0.24px] group-hover:text-[#00D4FF] transition-colors duration-300">
              TL;DR
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#888888] group-hover:text-[#00D4FF] transition-colors duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#888888] group-hover:text-[#00D4FF] transition-colors duration-300" />
            )}
          </button>

          {isSummaryExpanded && (
            <div
              id="summary-content"
              className="mt-6 animate-in fade-in-0 slide-in-from-top-4 duration-500"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-4">
                    From Backend Script to CPA-First Enterprise SaaS
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                        Role
                      </p>
                      <p className="text-base font-medium text-white">
                        Founding Lead Product Designer
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                        Platform
                      </p>
                      <p className="text-base font-medium text-white">
                        Web SaaS (Desktop-first, responsive)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                        Duration
                      </p>
                      <p className="text-base font-medium text-white">
                        10 months (Discovery → Beta Launch)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border border-[#00FFB3]/20">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    ✅ Impact at a Glance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#00FFB3] mb-1">
                        ↓ 45%
                      </p>
                      <p className="text-sm text-[#888888]">
                        CPA onboarding time
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#FFD700] mb-1">
                        ↑ 32%
                      </p>
                      <p className="text-sm text-[#888888]">
                        demo-to-conversion rate
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#00D4FF] mb-1">
                        ↓ 85%
                      </p>
                      <p className="text-sm text-[#888888]">
                        reliance on engineering teams
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#0080FF] mb-1">
                        ↑ 150%
                      </p>
                      <p className="text-sm text-[#888888]">
                        anomaly detection coverage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFD700]/5 rounded-[16px] p-6 border-l-4 border-[#FFD700]">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    🚀 Executive Overview
                  </h3>
                  <p className="text-base text-[#CCCCCC] leading-[150%]">
                    In early 2023, Computis CPAs spent 85% of their time waiting
                    for engineers to modify Python scripts for crypto
                    transaction classification. There were{" "}
                    <span className="font-medium text-white">
                      no audit trails
                    </span>
                    ,{" "}
                    <span className="font-medium text-white">
                      no explainability
                    </span>
                    , and{" "}
                    <span className="font-medium text-white">no autonomy</span>{" "}
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
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16 relative z-10">
        {/* Project Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 mt-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-[#00D4FF] cursor-pointer">
              Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                  Role
                </h3>
                <p className="text-lg font-medium text-white">
                  Founding Lead Product Designer
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                  Team
                </h3>
                <p className="text-lg font-medium text-white">
                  CTO, PM, 2 Engineers, Design Agency Partner
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                  Duration
                </h3>
                <p className="text-lg font-medium text-white">
                  10 months (Discovery → Beta Launch)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                  Platform
                </h3>
                <p className="text-lg font-medium text-white">
                  Web SaaS (Desktop-first, responsive)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-[0.5px]">
                  Tools
                </h3>
                <p className="text-lg font-medium text-white">
                  Figma, Miro, Notion, Jira, GA, Mixpanel
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6 border-l-4 border-[#00D4FF] mb-8">
              <h3 className="text-lg font-medium text-white mb-4">
                Objectives
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-1 flex-shrink-0" />
                  <span className="text-[#CCCCCC]">
                    Enable CPAs to self-serve without engineers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-1 flex-shrink-0" />
                  <span className="text-[#CCCCCC]">
                    Build audit-ready workflows with transparency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-1 flex-shrink-0" />
                  <span className="text-[#CCCCCC]">
                    Reduce compliance risk through explainable AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-1 flex-shrink-0" />
                  <span className="text-[#CCCCCC]">
                    Generate IRS 8949 and QuickBooks outputs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-1 flex-shrink-0" />
                  <span className="text-[#CCCCCC]">
                    Scale for DAOs, hedge funds, and enterprise CPA firms
                  </span>
                </li>
              </ul>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-[#00D4FF]/5 to-[#0080FF]/5 rounded-[20px] p-6 sm:p-8 border border-[#00D4FF]/20"
            >
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#00D4FF]" />
                Hero Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={45}
                    className="text-2xl sm:text-3xl font-bold text-[#00FFB3] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">
                    ↓ CPA onboarding time (2.5h → 1.4h)
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={32}
                    className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">
                    ↑ demo-to-conversion rate
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={85}
                    className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">
                    ↓ reliance on engineering teams
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={150}
                    className="text-2xl sm:text-3xl font-bold text-[#0080FF] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">
                    ↑ anomaly detection coverage
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-2xl sm:text-3xl font-bold text-[#00FFB3] mb-1 block">
                    ✓
                  </span>
                  <p className="text-sm text-[#888888]">
                    Secured enterprise CPA partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl hover:border-[#00D4FF]/30 transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              Problem & Opportunity
            </h2>

            <div className="bg-[#FF4D4D]/5 rounded-[20px] p-6 border border-[#FF4D4D]/20 mb-8 transition-all duration-300 hover:border-[#FF4D4D]/40 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-[#FF6B6B] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Problem
              </h3>
              <p className="text-lg text-[#CCCCCC] mb-4">
                CPAs faced opaque, engineer-dependent crypto classification
                tools that blocked scale and trust.
              </p>
              <h4 className="text-lg font-semibold text-[#FF8888] mb-3">
                Pain Points:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#CCCCCC]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2 flex-shrink-0"></span>
                  Manual Python scripts
                </li>
                <li className="flex items-start gap-3 text-[#CCCCCC]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2 flex-shrink-0"></span>
                  No audit trail for compliance
                </li>
                <li className="flex items-start gap-3 text-[#CCCCCC]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2 flex-shrink-0"></span>
                  CSV-only export workflows
                </li>
                <li className="flex items-start gap-3 text-[#CCCCCC]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2 flex-shrink-0"></span>
                  "Black-box" AI undermining trust
                </li>
                <li className="flex items-start gap-3 text-[#CCCCCC]">
                  <span className="w-2 h-2 bg-[#FF4D4D] rounded-full mt-2 flex-shrink-0"></span>
                  Frequent FMV reconciliation errors
                </li>
              </ul>
            </div>

            <div className="bg-[#00FFB3]/5 rounded-[20px] p-6 border border-[#00FFB3]/20 mb-8 transition-all duration-300 hover:border-[#00FFB3]/40 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-[#00FFB3] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Opportunity
              </h3>
              <p className="text-lg text-[#CCCCCC] mb-4">
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
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              Research & Insights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Methodology
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#CCCCCC]">
                      8 CPA + tax analyst interviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#CCCCCC]">
                      6 workflow shadowing sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#CCCCCC]">
                      Competitive teardown: TaxBit, Cryptio, CoinTracker,
                      ZenLedger
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#CCCCCC]">
                      4 usability test cycles
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#CCCCCC]">
                      Compliance workshops with tax attorneys
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#CCCCCC]">
                      Analytics review via Mixpanel + GA
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Key Insights
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#FF4D4D]/10 rounded-[16px] p-4 border-l-4 border-[#FF4D4D] transition-all duration-300 hover:bg-[#FF4D4D]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-[#FF8888] mb-1">
                      1. CPAs rejected black-box AI
                    </p>
                    <p className="text-sm text-[#CCCCCC]">
                      Transparency was non-negotiable for professional liability
                    </p>
                  </div>
                  <div className="bg-[#FFD700]/10 rounded-[16px] p-4 border-l-4 border-[#FFD700] transition-all duration-300 hover:bg-[#FFD700]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-[#FFD700] mb-1">
                      2. 85% time loss waiting for engineers
                    </p>
                    <p className="text-sm text-[#CCCCCC]">
                      CPAs needed autonomy to scale
                    </p>
                  </div>
                  <div className="bg-[#00D4FF]/10 rounded-[16px] p-4 border-l-4 border-[#00D4FF] transition-all duration-300 hover:bg-[#00D4FF]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-[#00D4FF] mb-1">
                      3. Auditability drives trust & sales
                    </p>
                    <p className="text-sm text-[#CCCCCC]">
                      Audit trails became a competitive differentiator
                    </p>
                  </div>
                  <div className="bg-[#00FFB3]/10 rounded-[16px] p-4 border-l-4 border-[#00FFB3] transition-all duration-300 hover:bg-[#00FFB3]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-[#00FFB3] mb-1">
                      4. Bulk rule-building = scale
                    </p>
                    <p className="text-sm text-[#CCCCCC]">
                      Manual classification couldn't support growth
                    </p>
                  </div>
                  <div className="bg-[#0080FF]/10 rounded-[16px] p-4 border-l-4 border-[#0080FF] transition-all duration-300 hover:bg-[#0080FF]/15 hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-[#0080FF] mb-1">
                      5. Explainable AI increased adoption
                    </p>
                    <p className="text-sm text-[#CCCCCC]">
                      Showing reasoning built professional confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business & Market Analysis */}
            <div className="mt-8 pt-8 border-t border-[#1A1A1A]">
              <h3 className="text-xl font-medium text-white mb-6">
                Business & Market Analysis
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Market Gaps */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    Market Gaps
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-4 border-l-4 border-[#888888] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#CCCCCC]">
                        Consumer tools lack audit-grade compliance features
                      </p>
                    </div>
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-4 border-l-4 border-[#888888] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#CCCCCC]">
                        Enterprise platforms use opaque AI that CPAs can't
                        validate
                      </p>
                    </div>
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-4 border-l-4 border-[#888888] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#CCCCCC]">
                        No CPA-first workflows with client management
                      </p>
                    </div>
                    <div className="bg-[#1A1A1A]/50 rounded-[16px] p-4 border-l-4 border-[#888888] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                      <p className="text-sm text-[#CCCCCC]">
                        Tools force reliance on engineering for rule
                        customization
                      </p>
                    </div>
                  </div>
                </div>

                {/* Computis Opportunity */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    Computis Opportunity
                  </h4>
                  <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#00FFB3]/20">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#CCCCCC]">
                          <span className="font-semibold text-white">
                            First CPA-first platform
                          </span>{" "}
                          with transparent, auditable workflows
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#CCCCCC]">
                          <span className="font-semibold text-white">
                            Explainable AI
                          </span>{" "}
                          with professional override control
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#CCCCCC]">
                          <span className="font-semibold text-white">
                            Modular infrastructure
                          </span>{" "}
                          for multi-client firms
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#CCCCCC]">
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

              <div className="bg-[#0080FF]/10 rounded-[16px] p-4 border-l-4 border-[#0080FF]">
                <p className="text-sm text-[#CCCCCC]">
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

        {/* Design Process & Methodology */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              Design Process & Methodology
            </h2>

            <div className="mb-8">
              <p className="text-lg text-[#CCCCCC] leading-[150%] mb-6">
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
                    <h3 className="text-lg font-semibold text-[#00D4FF] mb-2">
                      User Journey Mapping
                    </h3>
                    <p className="text-sm text-[#CCCCCC]">
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
                    <h3 className="text-lg font-semibold text-[#00FFB3] mb-2">
                      Information Architecture Design
                    </h3>
                    <p className="text-sm text-[#CCCCCC]">
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
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Trust Framework Development
                    </h3>
                    <p className="text-sm text-[#CCCCCC]">
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
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-2">
                      Rapid Prototyping
                    </h3>
                    <p className="text-sm text-[#CCCCCC]">
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
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Accessibility-First Design
                    </h3>
                    <p className="text-sm text-[#CCCCCC]">
                      Applied WCAG 2.1 AA standards from initial wireframes
                      through final implementation
                    </p>
                  </div>
                </div>
              </div>

              {/* Design System Creation */}
              <div className="bg-gradient-to-br from-[#888888]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#888888]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Design System Creation
                    </h3>
                    <p className="text-sm text-[#CCCCCC]">
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
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              System Architecture
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-white mb-6">
                Information Architecture
              </h3>
              <div className="bg-gradient-to-r from-[#1A1A1A]/50 to-[#252525]/50 rounded-[20px] p-6 border border-[#00D4FF]/20">
                <div className="flex flex-wrap items-center gap-3 text-center">
                  <span className="bg-[#0080FF]/20 text-[#00D4FF] px-4 py-2 rounded-lg font-medium border border-[#0080FF]/30">
                    Clients
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#888888]" />
                  <span className="bg-[#00FFB3]/20 text-[#00FFB3] px-4 py-2 rounded-lg font-medium border border-[#00FFB3]/30">
                    Wallets
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#888888]" />
                  <span className="bg-[#00D4FF]/20 text-[#00D4FF] px-4 py-2 rounded-lg font-medium border border-[#00D4FF]/30">
                    Transactions
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#888888]" />
                  <span className="bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-lg font-medium border border-[#FFD700]/30">
                    Rules
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#888888]" />
                  <span className="bg-[#FF8888]/20 text-[#FF8888] px-4 py-2 rounded-lg font-medium border border-[#FF8888]/30">
                    Reports
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#888888]" />
                  <span className="bg-[#00D4FF]/20 text-[#00D4FF] px-4 py-2 rounded-lg font-medium border border-[#00D4FF]/30">
                    Exports
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Role-Based Views
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#0080FF]/10 p-4 rounded-[16px] border-l-4 border-[#0080FF]">
                    <h4 className="font-medium text-[#00D4FF] mb-2">CPA</h4>
                    <p className="text-sm text-[#CCCCCC]">
                      Rules, audit logs, overrides
                    </p>
                  </div>
                  <div className="bg-[#00D4FF]/10 p-4 rounded-[16px] border-l-4 border-[#00D4FF]">
                    <h4 className="font-medium text-[#00D4FF] mb-2">Analyst</h4>
                    <p className="text-sm text-[#CCCCCC]">
                      Ingestion, anomalies
                    </p>
                  </div>
                  <div className="bg-[#00FFB3]/10 p-4 rounded-[16px] border-l-4 border-[#00FFB3]">
                    <h4 className="font-medium text-[#00FFB3] mb-2">Admin</h4>
                    <p className="text-sm text-[#CCCCCC]">
                      Multi-client operations
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#1A1A1A]/50 rounded-[20px] p-6">
                  <p className="text-[#CCCCCC] leading-[150%]">
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

        {/* Key Design Decisions */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              Key Design Decisions
            </h2>

            <div className="space-y-8">
              {/* 1. AI Confidence Chips */}
              <div className="bg-gradient-to-r from-[#0080FF]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border border-[#0080FF]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">1️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      AI Confidence Chips + Accept/Reject Controls
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          CPAs distrusted automation.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Confidence-level chips with hover rationale and
                          one-click override.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
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
              <div className="bg-gradient-to-r from-[#00FFB3]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border border-[#00FFB3]/20 transition-all duration-300 hover:border-[#00FFB3]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#00FFB3]">2️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Inline Audit Trail Drawer
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          No compliance visibility.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Persistent contextual audit trail.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
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
              <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#0080FF]/5 rounded-[20px] p-6 border border-[#00D4FF]/20 transition-all duration-300 hover:border-[#0080FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">3️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Visual Rule Builder (No-Code)
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          CPA dependency on engineers.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Drag-and-drop natural language builder with preview.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
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
              <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#FF8888]/5 rounded-[20px] p-6 border border-[#FFD700]/20 transition-all duration-300 hover:border-[#FF8888]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#FFD700]">4️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Contextual Anomaly Detection
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Hidden FMV errors.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Inline color-coded anomaly flags with hover tooltips.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
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
              <div className="bg-gradient-to-r from-[#888888]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border border-[#888888]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#888888]">5️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Multi-Tenant Architecture
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[#00D4FF] mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          CPA firms manage multiple clients.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00FFB3] mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Role-based multi-tenant dashboards.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#FFD700] mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-[#CCCCCC]">
                          Enabled 100+ portfolio management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] border border-[#888888]/10 self-center flex-none">
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

        {/* Stakeholder Alignment */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] text-white rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#00D4FF]/20 transition-all duration-300 hover:border-[#00D4FF]/40 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-6">
              Stakeholder Alignment: The Override Control Debate
            </h2>

            <div className="bg-[#0A0A0A]/50 rounded-[20px] p-6 mb-6 border border-[#FF8888]/20 transition-all duration-300 hover:bg-[#0A0A0A]/70 cursor-pointer">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#FFD700]" />
                Conflict
              </h3>
              <p className="text-lg leading-[150%] text-[#CCCCCC]">
                CTO wanted full automation; CPAs demanded override control for
                liability protection.
              </p>
            </div>

            <div className="bg-[#0A0A0A]/50 rounded-[20px] p-6 mb-6 border border-[#FFD700]/20 transition-all duration-300 hover:bg-[#0A0A0A]/70 cursor-pointer">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#FFD700]" />
                Approach
              </h3>
              <ul className="text-sm text-[#CCCCCC] space-y-2">
                <li>• Facilitated design workshop with CPA + CTO</li>
                <li>
                  • Presented competitor data (40% G2 "black-box" complaints)
                </li>
                <li>
                  • Proposed <em>graduated autonomy</em> system (High → Auto /
                  Med → Review / Low → Manual)
                </li>
              </ul>
            </div>

            <div className="bg-[#0A0A0A]/50 rounded-[20px] p-6 mb-6 border border-[#00FFB3]/20 transition-all duration-300 hover:bg-[#0A0A0A]/70 cursor-pointer">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00FFB3]" />
                Outcome
              </h3>
              <ul className="text-sm text-[#CCCCCC] space-y-2">
                <li>• CTO aligned after market positioning demo</li>
                <li>• Override control became a product differentiator</li>
                <li>• Closed enterprise client deal after demo</li>
              </ul>
            </div>

            <div className="bg-[#00FFB3]/5 rounded-[20px] p-6 border border-[#00FFB3]/30">
              <blockquote className="text-lg italic leading-[150%] text-[#CCCCCC]">
                "The first crypto tax tool I'd stake my license on."
              </blockquote>
              <cite className="text-sm text-[#888888] not-italic mt-2 block">
                — CPA
              </cite>
            </div>
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              📈 Outcomes & Impact
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00FFB3]/5 rounded-[16px] p-4 border border-[#00FFB3]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00FFB3]/40">
                <p className="text-2xl font-bold text-[#00FFB3] mb-1">↓45%</p>
                <p className="text-xs text-[#888888]">CPA onboarding</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 rounded-[16px] p-4 border border-[#FFD700]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FFD700]/40">
                <p className="text-2xl font-bold text-[#FFD700] mb-1">↑32%</p>
                <p className="text-xs text-[#888888]">conversion rate</p>
              </div>
              <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#00D4FF]/5 rounded-[16px] p-4 border border-[#00D4FF]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00D4FF]/40">
                <p className="text-2xl font-bold text-[#00D4FF] mb-1">↓85%</p>
                <p className="text-xs text-[#888888]">eng dependency</p>
              </div>
              <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#0080FF]/5 rounded-[16px] p-4 border border-[#0080FF]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#0080FF]/40">
                <p className="text-2xl font-bold text-[#0080FF] mb-1">↑150%</p>
                <p className="text-xs text-[#888888]">anomaly detection</p>
              </div>
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/5 rounded-[16px] p-4 border border-[#00FFB3]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00FFB3]/40">
                <p className="text-2xl font-bold text-[#00FFB3] mb-1">↓40%</p>
                <p className="text-xs text-[#888888]">support tickets</p>
              </div>
              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/5 rounded-[16px] p-4 border border-[#00FFB3]/20 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#00FFB3]/40">
                <p className="text-2xl font-bold text-[#00FFB3] mb-1">Zero</p>
                <p className="text-xs text-[#888888]">FMV disputes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0080FF]/5 rounded-[16px] p-5 border-l-4 border-[#0080FF]">
                <blockquote className="text-base italic text-[#CCCCCC]">
                  "First crypto tax tool actually designed for accountants."
                </blockquote>
                <cite className="text-sm text-[#888888] not-italic mt-2 block">
                  — CPA Client
                </cite>
              </div>
              <div className="bg-[#FFD700]/5 rounded-[16px] p-5 border-l-4 border-[#FFD700]">
                <blockquote className="text-base italic text-[#CCCCCC]">
                  "Your handoffs made us 10x faster. Edge case docs were
                  incredible."
                </blockquote>
                <cite className="text-sm text-[#888888] not-italic mt-2 block">
                  — Engineering Lead
                </cite>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1A1A1A]/50 to-[#252525]/50 rounded-[20px] p-6 border border-[#00D4FF]/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                Business Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#CCCCCC]">
                    3 enterprise deals in 6 months
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#CCCCCC]">
                    Scaled to DAOs & hedge funds
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#CCCCCC]">
                    Reduced support overhead
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FFB3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#CCCCCC]">
                    Improved retention via transparency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration & Handoff */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2200">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              🤝 Collaboration & Handoff
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#0080FF]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#00D4FF] flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-[#00D4FF]">
                    Documentation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-[#CCCCCC]">
                  <li>• Annotated Figma files</li>
                  <li>• Component library specs</li>
                  <li>• Accessibility checklist</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#00FFB3]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#00FFB3] flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-[#00FFB3]">
                    Quality Assurance
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-[#CCCCCC]">
                  <li>• QA test scenarios</li>
                  <li>• Accessibility validation</li>
                  <li>• Performance benchmarks</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#00D4FF]/10 rounded-[20px] p-6 border border-[#FFD700]/20 transition-all duration-300 hover:border-[#00D4FF]/40 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-[#FFD700]">
                    Knowledge Transfer
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-[#CCCCCC]">
                  <li>• Loom walkthroughs</li>
                  <li>• Weekly design-dev syncs</li>
                  <li>• Visual acceptance criteria</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              Key Learnings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#0080FF]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#0080FF] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-[#00D4FF] mb-3">
                  Trust is a UX Principle
                </h3>
                <p className="text-sm text-[#CCCCCC]">
                  Explainability drove adoption more than feature quantity.
                  Transparency converted skeptics into advocates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#00FFB3]/5 rounded-[20px] p-6 border-l-4 border-[#00D4FF] transition-all duration-300 hover:border-[#00FFB3] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-[#00FFB3] mb-3">
                  Systems &gt; Screens
                </h3>
                <p className="text-sm text-[#CCCCCC]">
                  Modular IA enabled scaling. Role-based architecture
                  future-proofed for growth.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00FFB3]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#00FFB3] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-white mb-3">
                  AI + Human Collaboration
                </h3>
                <p className="text-sm text-[#CCCCCC]">
                  Override control flipped AI from threat to tool. Confidence
                  indicators enabled informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#FFD700] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-[#FFD700] mb-3">
                  Design Drives Business
                </h3>
                <p className="text-sm text-[#CCCCCC]">
                  Self-service features reduced costs. Audit trails closed
                  enterprise deals and differentiated from competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2400">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-white leading-[120%] tracking-[-0.3px] mb-8">
              💭 Design Philosophy
            </h2>

            <div className="bg-gradient-to-r from-[#1A1A1A]/50 to-[#252525]/50 rounded-[20px] p-8 mb-6 border border-[#00D4FF]/20">
              <blockquote className="text-xl italic text-[#CCCCCC] leading-[150%] mb-4">
                "Design isn't what it looks like — it's whether a CPA can
                explain a tax report to a regulator without an engineer in the
                room."
              </blockquote>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-white mb-6">
                Core Tenets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#0080FF]/5 rounded-[20px] p-6 border-l-4 border-[#00D4FF] transition-all duration-300 hover:border-[#0080FF] hover:scale-[1.02]">
                  <h4 className="font-semibold text-lg text-[#00D4FF] mb-2">
                    Transparency over Efficiency
                  </h4>
                  <p className="text-sm text-[#CCCCCC]">
                    Speed matters, but professional defensibility matters more
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#00FFB3]/5 rounded-[20px] p-6 border-l-4 border-[#00D4FF] transition-all duration-300 hover:border-[#00FFB3] hover:scale-[1.02]">
                  <h4 className="font-semibold text-lg text-[#00FFB3] mb-2">
                    Augmentation over Automation
                  </h4>
                  <p className="text-sm text-[#CCCCCC]">
                    AI should empower expertise, not replace judgment
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#00FFB3]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#00FFB3] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                  <h4 className="font-semibold text-lg text-white mb-2">
                    Systems over Surfaces
                  </h4>
                  <p className="text-sm text-[#CCCCCC]">
                    Scalable architecture beats pixel-perfect polish
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#00D4FF]/5 rounded-[20px] p-6 border-l-4 border-[#FFD700] transition-all duration-300 hover:border-[#00D4FF] hover:scale-[1.02]">
                  <h4 className="font-semibold text-lg text-[#FFD700] mb-2">
                    Context over Complexity
                  </h4>
                  <p className="text-sm text-[#CCCCCC]">
                    Surface insights when they matter, hide complexity when they
                    don't
                  </p>
                </div>
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
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-[#0F0F0F] border border-[#888888]/30">
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
