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
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
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
      <header className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8">
          <span className="inline-block bg-[#f59e0b] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6">
            FinTech UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] tracking-[-1.2px] mb-6">
            Computis — Redefining Trust in Crypto Tax Automation
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-none md:whitespace-nowrap">
            Transforming an opaque backend script into an enterprise-grade,
            CPA-first AI SaaS platform
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/ssmith129/portfolio-website/f00556f27fc2ebd7151cac07d0c167922f7421e8/public/Dashboard.gif"
            alt="Computis Dashboard demo"
            className="w-full max-w-[1280px] h-auto rounded-[12px]"
            style={{
              boxShadow: "1px 1px 3px 0 rgba(151, 151, 151, 0.3)",
              overflow: "hidden",
              borderStyle: "hidden",
              borderWidth: 1,
              margin: "20px 0",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col relative mt-5 text-center">
        <a
          href="https://computis.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#131417] font-semibold underline text-[20px]"
        >
          View Live Prototype
        </a>
      </div>

      {/* Summary Card */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mt-8">
        <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-xl sm:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.24px] group-hover:text-amber-600 transition-colors duration-300">
              TL;DR
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#9FA0A3] group-hover:text-amber-600 transition-colors duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#9FA0A3] group-hover:text-amber-600 transition-colors duration-300" />
            )}
          </button>

          {isSummaryExpanded && (
            <div
              id="summary-content"
              className="mt-6 animate-in fade-in-0 slide-in-from-top-4 duration-500"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-4">
                    From Backend Script to CPA-First Enterprise SaaS
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Role
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        Founding Lead Product Designer
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Platform
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        Web SaaS (Desktop-first, responsive)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Duration
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        10 months (Discovery �� Beta Launch)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-[16px] p-6">
                  <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                    ✅ Impact at a Glance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600 mb-1">
                        ↓ 45%
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        CPA onboarding time
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-amber-600 mb-1">
                        ↑ 32%
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        demo-to-conversion rate
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600 mb-1">
                        ↓ 85%
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        reliance on engineering teams
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-blue-600 mb-1">
                        ↑ 150%
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        anomaly detection coverage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-[16px] p-6 border-l-4 border-amber-500">
                  <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                    🚀 Executive Overview
                  </h3>
                  <p className="text-base text-[#131417] leading-[150%]">
                    In early 2023, Computis CPAs spent 85% of their time waiting
                    for engineers to modify Python scripts for crypto
                    transaction classification. There were{" "}
                    <span className="font-medium">no audit trails</span>,{" "}
                    <span className="font-medium">no explainability</span>, and{" "}
                    <span className="font-medium">no autonomy</span> for
                    professionals. By October 2023, CPAs could build custom
                    classification rules in under 90 seconds without writing
                    code. This transformation turned AI opacity into
                    transparency—
                    <span className="font-semibold">
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
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16">
        {/* Project Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 mt-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-amber-600 cursor-pointer">
              Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Role
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Founding Lead Product Designer
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Team
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  CTO, PM, 2 Engineers, Design Agency Partner
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Duration
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  10 months (Discovery ����� Beta Launch)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Platform
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Web SaaS (Desktop-first, responsive)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Tools
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Figma, Miro, Notion, Jira, GA, Mixpanel
                </p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-[20px] p-6 border-l-4 border-slate-600 mb-8">
              <h3 className="text-lg font-medium text-[#131417] mb-4">
                Objectives
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-[#131417]">
                    Enable CPAs to self-serve without engineers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-[#131417]">
                    Build audit-ready workflows with transparency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-[#131417]">
                    Reduce compliance risk through explainable AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-[#131417]">
                    Generate IRS 8949 and QuickBooks outputs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-[#131417]">
                    Scale for DAOs, hedge funds, and enterprise CPA firms
                  </span>
                </li>
              </ul>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-[20px] p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-600" />
                Hero Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={45}
                    className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ CPA onboarding time (2.5h → 1.4h)
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={32}
                    className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↑ demo-to-conversion rate
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={85}
                    className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ reliance on engineering teams
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={150}
                    className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↑ anomaly detection coverage
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 block">
                    ✓
                  </span>
                  <p className="text-sm text-[#9FA0A3]">
                    Secured enterprise CPA partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Problem & Opportunity
            </h2>

            <div className="bg-red-50 rounded-[20px] p-6 border border-red-100 mb-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Problem
              </h3>
              <p className="text-lg text-red-700 mb-4">
                CPAs faced opaque, engineer-dependent crypto classification
                tools that blocked scale and trust.
              </p>
              <h4 className="text-lg font-semibold text-red-800 mb-3">
                Pain Points:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Manual Python scripts
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  No audit trail for compliance
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  CSV-only export workflows
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  "Black-box" AI undermining trust
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Frequent FMV reconciliation errors
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 border border-green-100 mb-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Opportunity
              </h3>
              <p className="text-lg text-green-700 mb-4">
                Build a{" "}
                <span className="font-semibold">
                  CPA-first explainable AI platform
                </span>{" "}
                with audit trails, rule-building, and scalable transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Research & Insights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Methodology
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      8 CPA + tax analyst interviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      6 workflow shadowing sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Competitive teardown: TaxBit, Cryptio, CoinTracker,
                      ZenLedger
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      4 usability test cycles
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Compliance workshops with tax attorneys
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Analytics review via Mixpanel + GA
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Key Insights
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-[16px] p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-red-800 mb-1">
                      1. CPAs rejected black-box AI
                    </p>
                    <p className="text-sm text-red-700">
                      Transparency was non-negotiable for professional liability
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-orange-800 mb-1">
                      2. 85% time loss waiting for engineers
                    </p>
                    <p className="text-sm text-orange-700">
                      CPAs needed autonomy to scale
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-[16px] p-4 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-yellow-800 mb-1">
                      3. Auditability drives trust & sales
                    </p>
                    <p className="text-sm text-yellow-700">
                      Audit trails became a competitive differentiator
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-[16px] p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-green-800 mb-1">
                      4. Bulk rule-building = scale
                    </p>
                    <p className="text-sm text-green-700">
                      Manual classification couldn't support growth
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-[16px] p-4 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-blue-800 mb-1">
                      5. Explainable AI increased adoption
                    </p>
                    <p className="text-sm text-blue-700">
                      Showing reasoning built professional confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Methodology */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Design Process & Methodology
            </h2>

            <div className="mb-8">
              <p className="text-lg text-[#131417] leading-[150%] mb-6">
                I applied a{" "}
                <span className="font-semibold text-amber-600">
                  professional-centered, trust-first design approach
                </span>{" "}
                throughout the project lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Journey Mapping */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[20px] p-6 border border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      User Journey Mapping
                    </h3>
                    <p className="text-sm text-blue-800">
                      Documented complete workflows for CPA, Ops Analyst, and
                      Admin personas across client lifecycle
                    </p>
                  </div>
                </div>
              </div>

              {/* Information Architecture Design */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-[20px] p-6 border border-purple-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      Information Architecture Design
                    </h3>
                    <p className="text-sm text-purple-800">
                      Structured modular IA supporting Clients → Wallets →
                      Transactions → Rules → Reports flow
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Framework Development */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] p-6 border border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Trust Framework Development
                    </h3>
                    <p className="text-sm text-green-800">
                      Established design principles prioritizing transparency,
                      explainability, and professional control
                    </p>
                  </div>
                </div>
              </div>

              {/* Rapid Prototyping */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[20px] p-6 border border-amber-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">
                      Rapid Prototyping
                    </h3>
                    <p className="text-sm text-amber-800">
                      Iterated from sketches → wireframes → interactive
                      prototypes with continuous CPA validation
                    </p>
                  </div>
                </div>
              </div>

              {/* Accessibility-First Design */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[20px] p-6 border border-pink-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">♿</span>
                  <div>
                    <h3 className="text-lg font-semibold text-pink-900 mb-2">
                      Accessibility-First Design
                    </h3>
                    <p className="text-sm text-pink-800">
                      Applied WCAG 2.1 AA standards from initial wireframes
                      through final implementation
                    </p>
                  </div>
                </div>
              </div>

              {/* Design System Creation */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-[20px] p-6 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Design System Creation
                    </h3>
                    <p className="text-sm text-slate-800">
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
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              System Architecture
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Information Architecture
              </h3>
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-[20px] p-6 border border-slate-200">
                <div className="flex flex-wrap items-center gap-3 text-center">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                    Clients
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                    Wallets
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium">
                    Transactions
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-medium">
                    Rules
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">
                    Reports
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium">
                    Exports
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Role-Based Views
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-[16px] border-l-4 border-blue-500">
                    <h4 className="font-medium text-blue-800 mb-2">CPA</h4>
                    <p className="text-sm text-blue-700">
                      Rules, audit logs, overrides
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-[16px] border-l-4 border-purple-500">
                    <h4 className="font-medium text-purple-800 mb-2">
                      Analyst
                    </h4>
                    <p className="text-sm text-purple-700">
                      Ingestion, anomalies
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-[16px] border-l-4 border-green-500">
                    <h4 className="font-medium text-green-800 mb-2">Admin</h4>
                    <p className="text-sm text-green-700">
                      Multi-client operations
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-slate-100 rounded-[20px] p-6">
                  <p className="text-[#131417] leading-[150%]">
                    I led IA restructuring to ensure{" "}
                    <span className="font-semibold">
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
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Key Design Decisions
            </h2>

            <div className="space-y-8">
              {/* 1. AI Confidence Chips */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[20px] p-6 border border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-blue-600">1️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#131417] mb-2">
                      AI Confidence Chips + Accept/Reject Controls
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-blue-700">
                          CPAs distrusted automation.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800 mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-green-700">
                          Confidence-level chips with hover rationale and
                          one-click override.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-amber-700">
                          ↓ 70% false positives; ↑ AI trust & adoption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-[12px] border border-blue-100 self-center flex-none">
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
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-[20px] p-6 border border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-green-600">2️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#131417] mb-2">
                      Inline Audit Trail Drawer
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-blue-700">
                          No compliance visibility.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800 mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-green-700">
                          Persistent contextual audit trail.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-amber-700">
                          ↓ 40% compliance tickets; enabled independent IRS
                          audit defense.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-[12px] border border-green-100 self-center flex-none">
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
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-[20px] p-6 border border-purple-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-purple-600">3️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#131417] mb-2">
                      Visual Rule Builder (No-Code)
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-blue-700">
                          CPA dependency on engineers.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800 mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-green-700">
                          Drag-and-drop natural language builder with preview.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-amber-700">
                          ↓ 85% engineering reliance; ��� 32% conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-[12px] border border-purple-100 self-center flex-none">
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
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-[20px] p-6 border border-orange-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-orange-600">4️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#131417] mb-2">
                      Contextual Anomaly Detection
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-blue-700">
                          Hidden FMV errors.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800 mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-green-700">
                          Inline color-coded anomaly flags with hover tooltips.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-amber-700">
                          ↑ 150% anomaly detection; ↓ manual triage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-[12px] border border-orange-100 self-center flex-none">
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
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-[20px] p-6 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-slate-600">5️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#131417] mb-2">
                      Multi-Tenant Architecture
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">
                          Challenge:
                        </p>
                        <p className="text-sm text-blue-700">
                          CPA firms manage multiple clients.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800 mb-1">
                          Solution:
                        </p>
                        <p className="text-sm text-green-700">
                          Role-based multi-tenant dashboards.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">
                          Impact:
                        </p>
                        <p className="text-sm text-amber-700">
                          Enabled 100+ portfolio management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-[12px] border border-slate-100 self-center flex-none">
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
          <div className="bg-gradient-to-br from-[#131417] to-slate-800 text-white rounded-[25px] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-6">
              Stakeholder Alignment: The Override Control Debate
            </h2>

            <div className="bg-white/10 rounded-[20px] p-6 mb-6 transition-all duration-300 hover:bg-white/20 cursor-pointer">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Conflict
              </h3>
              <p className="text-lg leading-[150%]">
                CTO wanted full automation; CPAs demanded override control for
                liability protection.
              </p>
            </div>

            <div className="bg-white/10 rounded-[20px] p-6 mb-6 transition-all duration-300 hover:bg-white/20 cursor-pointer">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Approach
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
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

            <div className="bg-white/10 rounded-[20px] p-6 mb-6 transition-all duration-300 hover:bg-white/20 cursor-pointer">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Outcome
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>�� CTO aligned after market positioning demo</li>
                <li>• Override control became a product differentiator</li>
                <li>• Closed enterprise client deal after demo</li>
              </ul>
            </div>

            <div className="bg-green-800/20 rounded-[20px] p-6 border border-green-500/30">
              <blockquote className="text-lg italic leading-[150%]">
                "The first crypto tax tool I'd stake my license on."
              </blockquote>
              <cite className="text-sm text-gray-400 not-italic mt-2 block">
                — CPA
              </cite>
            </div>
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              📈 Outcomes & Impact
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-[16px] p-4 border border-green-200 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <p className="text-2xl font-bold text-green-600 mb-1">↓45%</p>
                <p className="text-xs text-green-800">CPA onboarding</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-[16px] p-4 border border-amber-200 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <p className="text-2xl font-bold text-amber-600 mb-1">↑32%</p>
                <p className="text-xs text-amber-800">conversion rate</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[16px] p-4 border border-purple-200 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <p className="text-2xl font-bold text-purple-600 mb-1">↓85%</p>
                <p className="text-xs text-purple-800">eng dependency</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[16px] p-4 border border-blue-200 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <p className="text-2xl font-bold text-blue-600 mb-1">↑150%</p>
                <p className="text-xs text-blue-800">anomaly detection</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-[16px] p-4 border border-teal-200 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <p className="text-2xl font-bold text-teal-600 mb-1">↓40%</p>
                <p className="text-xs text-teal-800">support tickets</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-[16px] p-4 border border-emerald-200 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <p className="text-2xl font-bold text-emerald-600 mb-1">Zero</p>
                <p className="text-xs text-emerald-800">FMV disputes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-[16px] p-5 border-l-4 border-blue-500">
                <blockquote className="text-base italic text-blue-800">
                  "First crypto tax tool actually designed for accountants."
                </blockquote>
                <cite className="text-sm text-blue-600 not-italic mt-2 block">
                  — CPA Client
                </cite>
              </div>
              <div className="bg-amber-50 rounded-[16px] p-5 border-l-4 border-amber-500">
                <blockquote className="text-base italic text-amber-800">
                  "Your handoffs made us 10x faster. Edge case docs were
                  incredible."
                </blockquote>
                <cite className="text-sm text-amber-600 not-italic mt-2 block">
                  — Engineering Lead
                </cite>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-[20px] p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-[#131417] mb-4">
                Business Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    3 enterprise deals in 6 months
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    Scaled to DAOs & hedge funds
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    Reduced support overhead
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    Improved retention via transparency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration & Handoff */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2200">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              🤝 Collaboration & Handoff
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[20px] p-6 border border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Documentation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Annotated Figma files</li>
                  <li>• Component library specs</li>
                  <li>• Accessibility checklist</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] p-6 border border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-green-900">
                    Quality Assurance
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• QA test scenarios</li>
                  <li>• Accessibility validation</li>
                  <li>• Performance benchmarks</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-[20px] p-6 border border-purple-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-purple-900">
                    Knowledge Transfer
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-purple-800">
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
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Key Learnings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[20px] p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Trust is a UX Principle
                </h3>
                <p className="text-sm text-blue-800">
                  Explainability drove adoption more than feature quantity.
                  Transparency converted skeptics into advocates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-[20px] p-6 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-purple-900 mb-3">
                  Systems &gt; Screens
                </h3>
                <p className="text-sm text-purple-800">
                  Modular IA enabled scaling. Role-based architecture
                  future-proofed for growth.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-[20px] p-6 border-l-4 border-green-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-green-900 mb-3">
                  AI + Human Collaboration
                </h3>
                <p className="text-sm text-green-800">
                  Override control flipped AI from threat to tool. Confidence
                  indicators enabled informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-[20px] p-6 border-l-4 border-amber-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  Design Drives Business
                </h3>
                <p className="text-sm text-amber-800">
                  Self-service features reduced costs. Audit trails closed
                  enterprise deals and differentiated from competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2400">
          <div className="bg-gradient-to-br from-[#131417] to-slate-800 text-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-8">
              💭 Design Philosophy
            </h2>

            <div className="bg-white/10 rounded-[20px] p-8 mb-6 backdrop-blur-sm">
              <blockquote className="text-xl italic leading-[150%] mb-4">
                "Design isn't what it looks like — it's whether a CPA can
                explain a tax report to a regulator without an engineer in the
                room."
              </blockquote>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium mb-6">Core Tenets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-[20px] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer">
                  <h4 className="font-semibold text-lg mb-2">
                    Transparency over Efficiency
                  </h4>
                  <p className="text-sm text-gray-300">
                    Speed matters, but professional defensibility matters more
                  </p>
                </div>
                <div className="bg-white/10 rounded-[20px] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer">
                  <h4 className="font-semibold text-lg mb-2">
                    Augmentation over Automation
                  </h4>
                  <p className="text-sm text-gray-300">
                    AI should empower expertise, not replace judgment
                  </p>
                </div>
                <div className="bg-white/10 rounded-[20px] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer">
                  <h4 className="font-semibold text-lg mb-2">
                    Systems over Surfaces
                  </h4>
                  <p className="text-sm text-gray-300">
                    Beautiful interfaces fail without sound information
                    architecture
                  </p>
                </div>
                <div className="bg-white/10 rounded-[20px] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer">
                  <h4 className="font-semibold text-lg mb-2">
                    Trust through Control
                  </h4>
                  <p className="text-sm text-gray-300">
                    Professionals need agency, not just accuracy
                  </p>
                </div>
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

      {/* Website Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-3">
                <Coins className="w-6 h-6 text-amber-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Computis Platform
                  </h3>
                  <p className="text-sm text-gray-600">computis.netlify.app</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://computis.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open in new tab
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 transition-all duration-200"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <iframe
              src="https://computis.netlify.app"
              className="w-full h-full border-0"
              title="Computis Platform Preview"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

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
            <div className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white flex items-center justify-center p-8">
              <div className="text-center">
                <Coins className="w-24 h-24 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Computis Platform Preview
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade crypto tax automation platform with
                  audit-ready transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GIF Modal Dialog */}
      <Dialog open={isGifModalOpen} onOpenChange={setIsGifModalOpen}>
        <DialogContent
          className="max-w-[95vw] w-auto h-auto p-0 border-0 bg-transparent"
          aria-describedby="gif-modal-description"
        >
          <DialogTitle className="sr-only">
            AI Confidence Chips + Accept/Reject Controls Demo
          </DialogTitle>
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e"
              alt="AI Confidence Chips + Accept/Reject Controls - Full Size Demo"
              className="max-w-[1440px] max-h-[904px] w-auto h-auto object-contain rounded-lg"
              style={{
                maxWidth: "min(1440px, 95vw)",
                maxHeight: "min(904px, 95vh)",
              }}
            />
            <span id="gif-modal-description" className="sr-only">
              Full size demonstration of AI Confidence Chips and Accept/Reject
              Controls interface. Press Escape or click outside to close.
            </span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Inline Audit Trail Drawer Modal Dialog */}
      <Dialog
        open={isAuditDrawerModalOpen}
        onOpenChange={setIsAuditDrawerModalOpen}
      >
        <DialogContent
          className="max-w-[95vw] w-auto h-auto p-0 border-0 bg-transparent"
          aria-describedby="audit-drawer-modal-description"
        >
          <DialogTitle className="sr-only">
            Inline Audit Trail Drawer Demo
          </DialogTitle>
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Inline%20Audit%20Drawer.gif"
              alt="Inline Audit Trail Drawer - Full Size Demo"
              className="max-w-[1440px] max-h-[904px] w-auto h-auto object-contain rounded-lg"
              style={{
                maxWidth: "min(1440px, 95vw)",
                maxHeight: "min(904px, 95vh)",
              }}
            />
            <span id="audit-drawer-modal-description" className="sr-only">
              Full size demonstration of Inline Audit Trail Drawer interface.
              Press Escape or click outside to close.
            </span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Visual Rule Builder Modal Dialog */}
      <Dialog
        open={isRuleBuilderModalOpen}
        onOpenChange={setIsRuleBuilderModalOpen}
      >
        <DialogContent
          className="max-w-[95vw] w-auto h-auto p-0 border-0 bg-transparent"
          aria-describedby="rule-builder-modal-description"
        >
          <DialogTitle className="sr-only">
            Visual Rule Builder (No-Code) Demo
          </DialogTitle>
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Rule%20Builder.gif"
              alt="Visual Rule Builder (No-Code) - Full Size Demo"
              className="max-w-[1440px] max-h-[904px] w-auto h-auto object-contain rounded-lg"
              style={{
                maxWidth: "min(1440px, 95vw)",
                maxHeight: "min(904px, 95vh)",
              }}
            />
            <span id="rule-builder-modal-description" className="sr-only">
              Full size demonstration of Visual Rule Builder (No-Code)
              interface. Press Escape or click outside to close.
            </span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contextual Anomaly Detection Modal Dialog */}
      <Dialog
        open={isAnomalyDetectionModalOpen}
        onOpenChange={setIsAnomalyDetectionModalOpen}
      >
        <DialogContent
          className="max-w-[95vw] w-auto h-auto p-0 border-0 bg-transparent"
          aria-describedby="anomaly-detection-modal-description"
        >
          <DialogTitle className="sr-only">
            Contextual Anomaly Detection Demo
          </DialogTitle>
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Data%20Anomaly%20Detection.gif"
              alt="Contextual Anomaly Detection - Full Size Demo"
              className="max-w-[1440px] max-h-[904px] w-auto h-auto object-contain rounded-lg"
              style={{
                maxWidth: "min(1440px, 95vw)",
                maxHeight: "min(904px, 95vh)",
              }}
            />
            <span id="anomaly-detection-modal-description" className="sr-only">
              Full size demonstration of Contextual Anomaly Detection interface.
              Press Escape or click outside to close.
            </span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Multi-Tenant Architecture Modal Dialog */}
      <Dialog
        open={isMultiTenantModalOpen}
        onOpenChange={setIsMultiTenantModalOpen}
      >
        <DialogContent
          className="max-w-[95vw] w-auto h-auto p-0 border-0 bg-transparent"
          aria-describedby="multi-tenant-modal-description"
        >
          <DialogTitle className="sr-only">
            Multi-Tenant Architecture Demo
          </DialogTitle>
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Client%20Based%20Roles.gif"
              alt="Multi-Tenant Architecture - Full Size Demo"
              className="max-w-[1440px] max-h-[904px] w-auto h-auto object-contain rounded-lg"
              style={{
                maxWidth: "min(1440px, 95vw)",
                maxHeight: "min(904px, 95vh)",
              }}
            />
            <span id="multi-tenant-modal-description" className="sr-only">
              Full size demonstration of Multi-Tenant Architecture interface.
              Press Escape or click outside to close.
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
