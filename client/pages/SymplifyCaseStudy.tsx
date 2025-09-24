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
  Heart,
  Activity,
  CheckCircle,
  Clock,
  ZoomIn,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";
import { useIntersectionAnimation } from "../hooks/use-page-animations";

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
  const [fallbackTimer, setFallbackTimer] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [shouldAnimate, setShouldAnimate] = useState(startAnimation);

  // Fallback timer to ensure animation starts even if intersection observer fails
  useEffect(() => {
    if (!startAnimation && !fallbackTimer) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
      setFallbackTimer(timer);
    } else if (startAnimation) {
      setShouldAnimate(true);
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        setFallbackTimer(null);
      }
    }

    return () => {
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
      }
    };
  }, [startAnimation, fallbackTimer]);

  const animatedValue = useCountAnimation(value, 2000, shouldAnimate);

  return (
    <div className={className}>
      {animatedValue}
      {suffix}
    </div>
  );
};

/**
 * Symplify Case Study page
 *
 * Interaction and motion design guidelines:
 * - All major sections use scroll-triggered entrance animations (animate-in, fade-in-0, slide-in-*)
 * - Metrics counters animate only when scrolled into view via useIntersectionAnimation
 * - Hover and focus-visible states on cards and buttons provide microinteractions (scale, shadow, color)
 * - Modals for live preview and images trap focus and are dismissible via overlay
 *
 * Responsive notes:
 * - Layout targets: sm ≥ 640px, md ≥ 768px, lg ≥ 1024px, xl ≥ 1280px
 * - Grids collapse to single-column on small screens and expand progressively
 * - Horizontal section navigation is scrollable on mobile and pinned as a bar on larger breakpoints
 */
export default function SymplifyCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Use the new animation hook for metrics animation
  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.3, "0px 0px -100px 0px");

  return (
    <div className="min-h-screen bg-[#F5F5F5] scroll-smooth">
      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
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
      <header className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8 flex flex-col lg:block">
          <span className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6">
            Healthcare UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] tracking-[-1.2px] mb-6">
            Symplify – Hospital Management System
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-[800px] md:max-w-[952px] w-full text-center lg:text-left mx-auto md:pr-px">
            A unified, AI-enhanced clinical operating system for public health programs and hospital workflows
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="w-full aspect-[1.85] rounded-lg flex items-center justify-center border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer group"
          aria-label="Open Symplify platform preview"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col relative justify-center items-center my-5 py-8 px-5">
            <div className="flex flex-col relative justify-center items-center mt-5 py-8 px-5">
              <span className="bg-black text-white rounded px-6 py-4 text-center cursor-pointer shadow-lg inline-block">
                View Live Platform
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Section Navigation - horizontal pills for quick access */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 mt-6">
        <nav
          aria-label="Case study sections"
          className="flex items-center gap-2 md:gap-3 overflow-x-auto py-2"
        >
          {[
            { href: "#tldr", label: "TL;DR" },
            { href: "#context", label: "Context" },
            { href: "#transformation", label: "Before/After" },
            { href: "#problem", label: "Problem" },
            { href: "#principles", label: "Principles" },
            { href: "#research", label: "Research" },
            { href: "#workflow", label: "Workflow" },
            { href: "#personas", label: "Personas" },
            { href: "#journeys", label: "Journeys" },
            { href: "#decisions", label: "Decisions" },
            { href: "#features", label: "Features" },
            { href: "#impact", label: "Impact" },
            { href: "#learnings", label: "Learnings" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-2 rounded-full bg-white text-[#131417] border border-gray-200 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Summary Card */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 mt-8">
        <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-xl sm:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.24px] group-hover:text-blue-600 transition-colors duration-300">
              Quick View
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#9FA0A3] group-hover:text-blue-600 transition-colors duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#9FA0A3] group-hover:text-blue-600 transition-colors duration-300" />
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
                    📌 TL;DR — Key Impact
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-[#131417]">
                    <li>
                      <span className="font-semibold">↓ 40% average scheduling time</span>{" "}
                      → streamlined appointment management
                    </li>
                    <li>
                      <span className="font-semibold">
                        ↑ 2.3× triage efficiency
                      </span>{" "}
                      → faster message prioritization
                    </li>
                    <li>
                      <span className="font-semibold">
                        ↑ 70% compliance pass rate
                      </span>{" "}
                      → improved regulatory adherence
                    </li>
                    <li>
                      <span className="font-semibold">
                        Admin overtime ��� 4.4 hrs/wk
                      </span>{" "}
                      → reduced staffing costs
                    </li>
                    <li>
                      <span className="font-semibold">
                        SLA breach risk ↓ 44%
                      </span>{" "}
                      → safer, more compliant workflows
                    </li>
                  </ul>
                  <p className="mt-4 text-[#131417]">
                    <span className="font-semibold">My Role:</span> Lead Product
                    Designer → led 0→1 platform design under HIPAA + legacy EHR
                    constraints
                  </p>
                </div>

                <div className="border-t border-gray-200"></div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-2">
                    🌟 Hero Visual
                  </h3>
                  <p className="text-sm text-[#9FA0A3] mb-3" />
                  <ul className="list-disc pl-5 space-y-2 text-[#131417]">
                    <li>
                      <span className="font-semibold">Before:</span> Doctors in
                      EHR, nurses in paper logs, admins in Excel — siloed, slow,
                      error-prone
                    </li>
                    <li>
                      <span className="font-semibold">After:</span> Unified
                      Symplify Hub — role-specific dashboards with AI chat inbox
                      triage, predictive scheduling, smart notifications, and
                      AI-enhanced email
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-[12px] p-4 border-l-4 border-blue-500">
                  <p className="text-[#131417] italic">
                    Symplify reframed hospital operations from fragmented
                    workflows into one adaptive, AI-assisted platform —
                    delivering measurable time savings, safer workflows, and
                    future-ready compliance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16">
        {/* Executive Summary */}
        <section
          id="tldr"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 mt-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-blue-600 cursor-pointer">
              📌 TL;DR
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Role
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Lead Product Designer
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Scope
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  0→1 SaaS platform
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Constraints
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  HIPAA, legacy EHRs, 10-week delivery
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Baseline
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  ~1,200 patient messages/month
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Users
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Doctors, nurses, admins
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Method
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Controlled pilot (3 clinics, 65 staff, 6 weeks)
                </p>
              </div>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-blue-50 to-green-50 rounded-[20px] p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Key Impact Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={42}
                    className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ inbox triage time (2m15s → 1m18s)
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={18}
                    className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↑ on-time follow-ups (72% → 85.3%)
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                    −2.4pts
                  </div>
                  <p className="text-sm text-[#9FA0A3]">
                    no-show rate (9.8% → 7.4%)
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                    −4.4hrs
                  </div>
                  <p className="text-sm text-[#9FA0A3]">admin overtime/week</p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={44}
                    className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ SLA breach risk (14.2% → 7.9%)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Stakes */}
        <section
          id="context"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              🔍 Context & Stakes
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#131417] leading-[150%] mb-6">
                  Mid-sized clinics faced an{" "}
                  <span className="font-semibold">operational tax</span> from
                  juggling three disconnected systems:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Doctors → appointment scheduling inside EHRs</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Nurses → paper logs + shift notes</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Admins → Excel sheets for revenue forecasting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-medium text-[#131417] mb-4">
                  <span className="font-semibold">Operational baseline:</span>
                </h3>
                <ul className="space-y-2 text-[#131417]">
                  <li>• ~1,200 patient messages/month</li>
                  <li>•&nbsp;Avg triage time: 2m15s/item</li>
                  <li>• SLA breaches: 14% of messages delayed &gt;24h</li>
                  <li>• No-show rate: ~10%</li>
                  <li>• Admin overtime: 12+ hrs/wk</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-[20px] p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-medium text-[#131417] mb-4">
                  <span className="font-semibold">Constraints:</span>
                </h3>
                <ul className="space-y-2 text-[#131417]">
                  <li>��� HIPAA compliance required masking and audit logs</li>
                  <li>• Legacy EHRs couldn't be replaced, only extended</li>
                  <li>
                    • Staffing shortages → adoption needed to reduce workload,
                    not add to it
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Transformation */}
        <section
          id="transformation"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-blue-600 cursor-pointer">
            Before/After Transformation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-[20px] p-6 sm:p-8 border border-red-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <X className="w-5 h-5" />
                Before: Fragmented Systems
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Doctors → appointment scheduling inside EHRs
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Nurses → paper logs + shift notes
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Admins → Excel sheets for revenue forecasting
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Avg triage time: 2m15s/item, 14% of messages delayed &gt;24h
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 sm:p-8 border border-green-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                After: Unified Role-Specific Platform
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  AI Inbox Triage (SLA + risk sorting)
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Unified inbox + handoff flags
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Real-time forecasting dashboard
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Smart Scheduling (predictive slotting)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section
          id="problem"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              🧠 Problem & Opportunity
            </h2>

            <div className="space-y-8">
              <div className="bg-orange-50 rounded-[20px] p-6 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-[#131417] mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Core Problem
                </h3>
                <p className="text-lg text-[#131417] leading-[150%]">
                  <span className="font-semibold">The Problem:</span>
                  <br />
                  Clinics were losing&nbsp;
                  <span className="font-medium">
                    5–8 hours per week per clinician
                  </span>
                  &nbsp;to inbox triage across fragmented tools (EHR,
                  spreadsheets, sticky notes). Missed handoffs risked HIPAA
                  violations and delayed care. Forecasting was manual and
                  lagging, making proactive staffing impossible.
                </p>
              </div>

              <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-[#131417] mb-4">
                  Opportunity
                </h3>
                <p className="text-lg text-[#131417] leading-[150%] mb-4">
                  <span className="font-medium">
                    How might we consolidate triage, scheduling, and forecasting
                    into a single, explainable workflow — reducing staff burden
                    while protecting compliance?
                  </span>
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-[#131417] mb-2">
                    Non-Goals (Deliberate Trade-offs):
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-[#131417]">
                      ❌&nbsp; Did <span className="font-extrabold">not</span>{" "}
                      replace full EHR stack — only layered workflows on top
                    </li>
                    <li className="text-[#131417]">
                      ❌&nbsp; Did <span className="font-extrabold">not</span>{" "}
                      rebuild billing — focused only on forecasting dashboards
                    </li>
                    <li className="text-[#131417]">
                      ❌&nbsp;&nbsp;Did{" "}
                      <span className="font-extrabold">not</span> tackle
                      patient-facing portals in v1 — prioritized staff workflows
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section
          id="principles"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300"
        >
          <div className="bg-[#131417] text-white rounded-[25px] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-6">
              Design Principles
            </h2>

            <div className="bg-white/10 rounded-[20px] p-6 mb-8 transition-all duration-300 hover:bg-white/20 cursor-pointer">
              <h3 className="text-xl font-medium mb-4">North Star</h3>
              <blockquote className="text-lg italic leading-[150%]">
                "Design a platform where medical staff can focus on patient
                care, not system navigation — making technology invisible while
                healthcare outcomes visible."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-[16px] p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Patient-Centric Design
                </h4>
                <p className="text-sm text-gray-400 italic">
                  Every interface decision optimizes for patient care quality.
                </p>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Intelligent Assistance
                </h4>
                <p className="text-sm text-gray-400 italic">
                  AI augments clinical decisions without replacing judgment.
                </p>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Compliance by Design
                </h4>
                <p className="text-sm text-gray-400 italic">
                  HIPAA compliance and audit trails built into every workflow.
                </p>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Mobile-First Care
                </h4>
                <p className="text-sm text-gray-400 italic">
                  Critical functions accessible at the point of care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section
          id="research"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              🧪 Research & Insights
            </h2>

            <details className="mb-10 group">
              <summary className="list-none inline-flex items-center gap-2 text-xl font-medium text-[#131417] mb-2 cursor-pointer select-none">
                Methods
                <ChevronDown className="w-4 h-4 text-[#9FA0A3] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Method
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Sample
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Duration
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Focus
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Bias Controls
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#131417]">
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Interviews</td>
                      <td className="py-3 px-4">
                        14 staff (5 MD, 6 RN, 3 Admin)
                      </td>
                      <td className="py-3 px-4">2 wks</td>
                      <td className="py-3 px-4">
                        Pain points in triage, scheduling, forecasting
                      </td>
                      <td className="py-3 px-4">
                        Balanced roles, avoided leading questions
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-green-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">
                        Contextual inquiry
                      </td>
                      <td className="py-3 px-4">11 live clinic sessions</td>
                      <td className="py-3 px-4">3 days</td>
                      <td className="py-3 px-4">
                        Task handoffs, interruptions, downtime
                      </td>
                      <td className="py-3 px-4">
                        Observed at different times of day
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Diary study</td>
                      <td className="py-3 px-4">9 staff (mixed roles)</td>
                      <td className="py-3 px-4">2 wks</td>
                      <td className="py-3 px-4">
                        Daily frustrations + time sinks
                      </td>
                      <td className="py-3 px-4">Compared with baseline logs</td>
                    </tr>
                    <tr className="hover:bg-orange-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Workflow audits</td>
                      <td className="py-3 px-4">
                        1,200 inbox items, 150 appts
                      </td>
                      <td className="py-3 px-4">4 wks</td>
                      <td className="py-3 px-4">
                        Handling time, delay %, no-show rate
                      </td>
                      <td className="py-3 px-4">Controlled for seasonality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>

            <div className="mb-10">
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Insights → Design Moves
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Insight
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Design Move
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Expected Effect
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#131417]">
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4">
                        Inbox triage consumed ~5–8 hrs/wk per clinician
                      </td>
                      <td className="py-3 px-4 font-semibold text-blue-600">
                        Smart AI Chat Inbox Triage
                      </td>
                      <td className="py-3 px-4">↓ triage time ~40%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-green-50 transition-colors duration-200">
                      <td className="py-3 px-4">
                        Nurses missed 18% of urgent handoffs
                      </td>
                      <td className="py-3 px-4 font-semibold text-green-600">
                        AI-driven notifications + unified inbox flags
                      </td>
                      <td className="py-3 px-4">↑ on-time follow-ups</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200">
                      <td className="py-3 px-4">
                        Admins used Excel for forecasting; lagging visibility
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        Smart Unified Email + Notifications
                      </td>
                      <td className="py-3 px-4">↑ operational visibility</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200">
                      <td className="py-3 px-4">
                        Doctors manually slotted patients → 10% no-shows
                      </td>
                      <td className="py-3 px-4 font-semibold text-orange-600">
                        Smart Appointment Scheduling
                      </td>
                      <td className="py-3 px-4">↓ no-shows, ↑ throughput</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors duration-200">
                      <td className="py-3 px-4">
                        Staff wary of "black box AI"
                      </td>
                      <td className="py-3 px-4 font-semibold text-yellow-600">
                        AI Transparency features
                      </td>
                      <td className="py-3 px-4">↑ adoption & trust</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer">
              <h3 className="text-lg font-medium text-green-800 mb-4">
                Quotes
              </h3>
              <div className="space-y-3">
                <blockquote className="text-sm text-green-700 italic border-l-2 border-green-400 pl-3">
                  "Half my inbox is reminders I don't need today — I just want
                  the urgent ones."
                  <cite className="block text-xs text-green-600 mt-1 not-italic">
                    — MD, Clinic A
                  </cite>
                </blockquote>
                <blockquote className="text-sm text-green-700 italic border-l-2 border-green-400 pl-3">
                  "When shifts overlap, I'm never sure if a message was handled
                  already."
                  <cite className="block text-xs text-green-600 mt-1 not-italic">
                    — RN, Clinic B
                  </cite>
                </blockquote>
                <blockquote className="text-sm text-green-700 italic border-l-2 border-green-400 pl-3">
                  <div style={{ width: "100%" }}>
                    "Forecasting is basically a guess until month close --then
                    it's too late."
                  </div>
                  <cite className="block text-xs text-green-600 mt-1 not-italic">
                    — Admin, Clinic C
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* System & Workflow */}
        <section
          id="workflow"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1600"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              🛠 System & Workflow
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Service Blueprint
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50 rounded-tl-lg">
                        Role
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Actions
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Supporting Systems
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Bottlenecks (Before)
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50 rounded-tr-lg">
                        Symplify Intervention
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#131417]">
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium text-blue-600">
                        Doctor
                      </td>
                      <td className="py-3 px-4">
                        Review inbox → Confirm appts → Update chart
                      </td>
                      <td className="py-3 px-4">EHR, spreadsheets</td>
                      <td className="py-3 px-4 text-red-600">
                        2m triage/item, duplicate entries
                      </td>
                      <td className="py-3 px-4 font-semibold text-green-600">
                        AI triage + Smart Scheduling
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-green-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium text-green-600">
                        Nurse
                      </td>
                      <td className="py-3 px-4">
                        Track vitals → Triage msgs → Shift handoff
                      </td>
                      <td className="py-3 px-4">Paper logs, EHR</td>
                      <td className="py-3 px-4 text-red-600">
                        Missed urgent handoffs
                      </td>
                      <td className="py-3 px-4 font-semibold text-green-600">
                        Unified inbox + flags
                      </td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium text-purple-600">
                        Admin
                      </td>
                      <td className="py-3 px-4">
                        Manage staffing → Generate reports
                      </td>
                      <td className="py-3 px-4">Excel, exports</td>
                      <td className="py-3 px-4 text-red-600">
                        Forecasts updated monthly
                      </td>
                      <td className="py-3 px-4 font-semibold text-green-600">
                        Real-time forecasting dashboards
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Architecture Overview
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-[16px] p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Inputs</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Patient data (EHR via FHIR APIs)</li>
                      <li>• Appt History</li>
                      <li>• Billing exports</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-[16px] p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Processing
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• AI modules (triage, scheduling, forecasting)</li>
                      <li>• Model versioning & logging</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-[16px] p-4 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      Outputs
                    </h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Role-based dashboards</li>
                      <li>��� Alerts</li>
                      <li>• Forecast reports</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Security
                    </h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>
                        • PHI boundary maintained (only metadata pulled into
                        Symplify)
                      </li>
                      <li>• Role + Org-unit RBAC</li>
                      <li>• TLS in transit, AES-256 at rest</li>
                      <li>• Immutable audit logs for AI actions + overrides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section
          id="personas"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-blue-600 cursor-pointer">
            User Personas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Dr. Sarah (Physician) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">
                    Dr. Sarah
                  </h3>
                  <p className="text-[#9FA0A3] font-medium">
                    Attending Physician
                  </p>
                  <p className="text-sm text-[#9FA0A3]">8+ years experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-[16px] border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">
                    Needs
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Review inbox → Confirm appts</li>
                    <li>• Update chart efficiently</li>
                    <li>• AI-assisted decision support</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    2m triage/item, duplicate entries across multiple systems
                  </p>
                </div>
              </div>
            </div>

            {/* Lisa (Administrator) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">
                    Lisa
                  </h3>
                  <p className="text-[#9FA0A3] font-medium">
                    Hospital Administrator
                  </p>
                  <p className="text-sm text-[#9FA0A3]">12+ years experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-[16px] border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">
                    Needs
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Manage staffing → Generate reports</li>
                    <li>• Monitor revenue dashboard in real-time</li>
                    <li>• Oversee forecasting and operations</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    Forecasts updated monthly via Excel exports — lagging
                    insights
                  </p>
                </div>
              </div>
            </div>

            {/* Mike (Nurse) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">
                    Mike
                  </h3>
                  <p className="text-[#9FA0A3] font-medium">Registered Nurse</p>
                  <p className="text-sm text-[#9FA0A3]">5+ years experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-[16px] border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">
                    Needs
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Track vitals → Triage msgs</li>
                    <li>• Shift handoff coordination</li>
                    <li>• Monitor care continuity</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    Missed urgent handoffs due to paper logs and fragmented
                    systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Flows & Journey Mapping */}
        <section
          id="journeys"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1750"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              🛤️ User Flows &amp; Journey Mapping
            </h2>

            <div className="mb-10">
              <p className="text-lg text-[#131417] leading-[150%] mb-8">
                <span style={{ marginLeft: "1px", display: "inline-block" }}>
                  To connect our research insights directly to staff workflows,
                  we mapped out the
                </span>
                <span className="font-semibold">
                  daily journeys of three key roles
                </span>{" "}
                — Doctor, Nurse, and Admin. This role-based swimlane
                visualization reveals where delays, errors, and inefficiencies
                occurred <span className="font-semibold">before Symplify</span>,
                and how{" "}
                <span className="font-semibold">
                  AI interventions resolved them
                </span>
                .
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-medium text-[#131417] mb-8">
                Role-Based User Journey Map
              </h3>

              <div className="space-y-8">
                {/* Doctor Journey */}
                <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-800">
                      Doctor
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-800 mb-3">
                        Daily Workflow
                      </h5>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-bold">❗</span>
                          Review inbox{" "}
                          <span className="text-sm italic">
                            (manual triage ~2m/item, high backlog)
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-bold">❗</span>
                          Confirm appointments{" "}
                          <span className="text-sm italic">
                            (double entry in EHR + spreadsheets)
                          </span>
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                          Update patient chart
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                          Billing close
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        AI Intervention
                      </h5>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold mt-1">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold">
                              AI Inbox Triage
                            </span>
                            <span className="block text-sm">
                              sorts by clinical risk + SLA urgency
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold mt-1">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold">
                              Smart Scheduling
                            </span>
                            <span className="block text-sm">
                              predicts no-shows, optimizes appointment slots
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nurse Journey */}
                <div className="bg-green-50 rounded-[20px] p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-800">
                      Nurse
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-800 mb-3">
                        Daily Workflow
                      </h5>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></span>
                          Track vitals
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></span>
                          Update patient chart
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-bold">❗</span>
                          Triage patient messages{" "}
                          <span className="text-sm italic">
                            (handoffs missed at shift change)
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-bold">❗</span>
                          Handoff to doctor{" "}
                          <span className="text-sm italic">
                            (no clear ownership)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        AI Intervention
                      </h5>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold mt-1">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold">
                              Unified Inbox + Handoff Flags
                            </span>
                            <span className="block text-sm">
                              ensure urgent items are surfaced, ownership is
                              visible
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Admin Journey */}
                <div className="bg-purple-50 rounded-[20px] p-6 border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-purple-800">
                      Admin
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-purple-800 mb-3">
                        Daily Workflow
                      </h5>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-bold">❗</span>
                          Manage staffing{" "}
                          <span className="text-sm italic">
                            (scheduling conflicts, no predictive insight)
                          </span>
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></span>
                          Monitor hospital operations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-bold">❗</span>
                          Generate revenue reports{" "}
                          <span className="text-sm italic">
                            (monthly Excel exports, lagging visibility)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        AI Intervention
                      </h5>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold mt-1">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold">
                              Revenue Forecasting Dashboard
                            </span>
                            <span className="block text-sm">
                              real-time projections from intake + billing
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold mt-1">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold">
                              Staffing Optimization (planned)
                            </span>
                            <span className="block text-sm">
                              predict demand and reduce overtime
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Impact
              </h3>
              <p className="text-base text-[#131417] leading-[150%]">
                This mapping shows how{" "}
                <span className="font-semibold">
                  &nbsp;insight-driven interventions&nbsp;
                </span>{" "}
                translated into measurable outcomes: faster triage, fewer missed
                follow-ups, reduced overtime, and more accurate forecasting.
              </p>
            </div>
          </div>
        </section>

        {/* Key Design Decisions Matrix */}
        <section
          id="decisions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1800"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-blue-600 cursor-pointer">
            🔑 Key Design Decisions
          </h2>

          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="mb-6">
              <p className="text-lg text-[#9FA0A3] leading-[150%]">
                Critical design choices that shaped the platform — showing not
                just what we chose, but why.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-[#131417] bg-gray-50 rounded-tl-lg">
                      Decision
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-[#131417] bg-gray-50">
                      Options
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-[#131417] bg-gray-50">
                      Trade-offs
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-[#131417] bg-gray-50">
                      Final Choice
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-[#131417] bg-gray-50 rounded-tr-lg">
                      Risk & Mitigation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-[#131417]">
                      Inbox prioritization
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Last-in; Manual flags; Risk+SLA score
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Simplicity vs consistency vs impact
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-blue-600">
                      Risk+SLA scoring
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Added "why ranked" chips + overrides
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-green-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-[#131417]">
                      Scheduling
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Manual; Historical only; Historical+provider patterns
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Simplicity vs accuracy
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-green-600">
                      Historical+provider patterns
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Monthly backtests; alert on drift
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-[#131417]">
                      Forecasting
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Monthly Excel; Daily batch; Real-time
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Lag vs integration effort
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-purple-600">
                      Real-time dashboard
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      API fallback to daily export
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-[#131417]">
                      Permissions
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Global; Role; Role+Org
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Speed vs safety
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-orange-600">
                      Role+Org
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Provisioning checklist; quarterly audits
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-[#131417]">
                      AI transparency
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Opaque; Confidence only; Confidence+Why+Override
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Speed vs trust vs complexity
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-yellow-600">
                      Confidence+Why+Override
                    </td>
                    <td className="py-4 px-4 text-sm text-[#9FA0A3]">
                      Concise chips, inline tooltips
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                🎯 Decision Philosophy
              </h3>
              <p className="text-base text-[#131417] leading-[150%]">
                Each choice balanced{" "}
                <span className="font-medium">user needs</span>,{" "}
                <span className="font-medium">technical constraints</span>, and{" "}
                <span className="font-medium">regulatory requirements</span>. We
                prioritized explainability and user trust over pure automation,
                ensuring clinical staff remained in control while gaining AI
                assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section
          id="features"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            Key Features & Why They Mattered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                Unified Dashboards
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                Role-specific dashboards with prioritized tasks and unified
                workflow
              </p>
              <p className="text-sm text-green-600 font-medium">
                → Reduced friction and anticipates hospital needs
              </p>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=100 100w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=200 200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=400 400w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=800 800w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=1200 1200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=1600 1600w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=2000 2000w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9"
                className="w-full mt-5 object-cover object-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                style={{
                  aspectRatio: "1.11",
                  minHeight: "20px",
                  minWidth: "20px",
                }}
                alt="Unified Dashboards feature"
                onClick={() =>
                  setEnlargedImage({
                    src: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F42a7d3688ec04a07ac0dc0cb852c383b?alt=media&token=a098fd98-1ce2-4855-8abd-7a96f6005743&apiKey=ba69a23156414a589de97341511272c9&width=1200",
                    alt: "Unified Dashboards feature - Role-specific panels that prioritize daily tasks",
                  })
                }
              />
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-600" />
                Smart Notifications
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                AI-powered scoring ranks tasks by priority with risk detection
              </p>
              <p className="text-sm text-green-600 font-medium">
                →&nbsp;Improved response times and reduced missed communications
              </p>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=100 100w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=200 200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=400 400w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=800 800w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=1200 1200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=1600 1600w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=2000 2000w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9"
                className="w-full mt-5 object-cover object-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                style={{
                  aspectRatio: "1.47",
                  minHeight: "20px",
                  minWidth: "20px",
                }}
                alt="Smart Notifications feature"
                onClick={() =>
                  setEnlargedImage({
                    src: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F14eb05775f1b4c92a0b1bb99bdf65f49?alt=media&token=061dc40f-6a5b-4e10-bef4-d76fb03cd97a&apiKey=ba69a23156414a589de97341511272c9&width=1200",
                    alt: "Smart Notifications feature - AI-powered scoring ranks tasks by priority with risk detection",
                  })
                }
              />
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Smart Scheduling
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                AI with confidence badges predicts optimal appointment slots
              </p>
              <p className="text-sm text-green-600 font-medium">
                → ↓ 2.4pts no-show rate and improved throughput
              </p>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=100 100w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=200 200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=400 400w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=800 800w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=1200 1200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=1600 1600w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=2000 2000w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9"
                className="w-full mt-5 object-cover object-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                style={{
                  aspectRatio: "1.42",
                  minHeight: "20px",
                  minWidth: "20px",
                }}
                alt="Smart Scheduling feature"
                onClick={() =>
                  setEnlargedImage({
                    src: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd3f21a158fd34a568584df8d9587ae0d?alt=media&token=e90724bf-45b5-4848-a37d-bb5206016426&apiKey=ba69a23156414a589de97341511272c9&width=1200",
                    alt: "Smart Scheduling feature - AI analyzes historical data to recommend optimal scheduling blocks",
                  })
                }
              />
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-600" />
                AI Inbox Triage
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                SLA + risk scoring with explainable AI recommendations
              </p>
              <p className="text-sm text-green-600 font-medium">
                → ↓ 42% inbox triage time (2m15s → 1m18s)
              </p>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=100 100w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=200 200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=400 400w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=800 800w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=1200 1200w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=1600 1600w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=2000 2000w, https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9"
                className="w-full mt-5 object-cover object-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                style={{
                  aspectRatio: "1.57",
                  minHeight: "20px",
                  minWidth: "20px",
                }}
                alt="AI Inbox Triage feature"
                onClick={() =>
                  setEnlargedImage({
                    src: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fb0713de322e84b419c4239c526783626?alt=media&token=4ad66451-dcaf-497b-8e8e-5703c19141b3&apiKey=ba69a23156414a589de97341511272c9&width=1200",
                    alt: "AI Inbox Triage feature - Auto-sorts patient communications by urgency, flagging critical follow-ups",
                  })
                }
              />
            </div>
          </div>
        </section>

        {/* Validation & Impact */}
        <section
          id="impact"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              📈 Validation & Impact
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Measurement Framework
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                <ul className="text-base text-[#131417] space-y-2">
                  <li>
                    •&nbsp;Pilot across&nbsp;
                    <span className="font-semibold">
                      3 clinics, n=65 staff, 6 weeks
                    </span>
                  </li>
                  <li>• Baselines pulled from logs + payroll</li>
                  <li>
                    • Guardrails: ≤10% false positives, override &lt;15%,
                    fairness audits
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Scorecard
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50 rounded-tl-lg">
                        KPI
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Baseline
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Post-Launch
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50">
                        Delta
                      </th>
                      <th className="text-left py-3 px-4 text-[#131417] font-semibold bg-gray-50 rounded-tr-lg">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#131417]">
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">
                        Avg triage time/item
                      </td>
                      <td className="py-3 px-4">2m15s</td>
                      <td className="py-3 px-4">1m18s</td>
                      <td className="py-3 px-4 font-semibold text-green-600">
                        ↓42%
                      </td>
                      <td className="py-3 px-4 text-sm text-[#9FA0A3]">
                        n=1,200 items
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-green-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">
                        On-time follow-ups
                      </td>
                      <td className="py-3 px-4">72%</td>
                      <td className="py-3 px-4">85.3%</td>
                      <td className="py-3 px-4 font-semibold text-blue-600">
                        ↑18%
                      </td>
                      <td className="py-3 px-4 text-sm text-[#9FA0A3]">
                        SLA adherence
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">No-show rate</td>
                      <td className="py-3 px-4">9.8%</td>
                      <td className="py-3 px-4">7.4%</td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        ↓2.4 pts
                      </td>
                      <td className="py-3 px-4 text-sm text-[#9FA0A3]">
                        Seasonal variance
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">
                        Admin overtime hrs/wk
                      </td>
                      <td className="py-3 px-4">12.5</td>
                      <td className="py-3 px-4">8.1</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">
                        ↓4.4 hrs
                      </td>
                      <td className="py-3 px-4 text-sm text-[#9FA0A3]">
                        Payroll data
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-yellow-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">SLA breach risk</td>
                      <td className="py-3 px-4">14.2%</td>
                      <td className="py-3 px-4">7.9%</td>
                      <td className="py-3 px-4 font-semibold text-red-600">
                        ↓44%
                      </td>
                      <td className="py-3 px-4 text-sm text-[#9FA0A3]">
                        Rule engine flags
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">
                        Clinician override of AI
                      </td>
                      <td className="py-3 px-4">—</td>
                      <td className="py-3 px-4">11%</td>
                      <td className="py-3 px-4">—</td>
                      <td className="py-3 px-4 text-sm text-[#9FA0A3]">
                        Below guardrail (&lt;15%)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  What Worked vs What Didn't
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-[16px] p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-3">
                      ✅&nbsp;What Worked
                    </h4>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• SLA breaches halved, overtime reduced ~35%</li>
                      <li>• Backlog cleared 2× faster</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-[16px] p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-3">
                      ❌ What Didn't
                    </h4>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li>• Weekend call volumes unchanged (outside scope)</li>
                      <li>
                        • Some admins still reverted to Excel → training needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Iteration Backlog
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-[16px] p-4 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-blue-800 mb-1">
                      Staffing Optimization
                    </p>
                    <p className="text-sm text-blue-700">
                      Extend scheduling AI into{" "}
                      <span className="font-medium">staffing optimization</span>{" "}
                      (shift prediction → cut overtime)
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-[16px] p-4 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-purple-800 mb-1">
                      What-if Scenarios
                    </p>
                    <p className="text-sm text-purple-700">
                      Add{" "}
                      <span className="font-medium">"what-if" scenarios</span>{" "}
                      in forecasting dashboards
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-[16px] p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-green-800 mb-1">
                      Adoption Nudges
                    </p>
                    <p className="text-sm text-green-700">
                      <span className="font-medium">Adoption nudges</span> →
                      inline tooltips + confidence indicators to reduce Excel
                      fallback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings & Reflections */}
        <section
          id="learnings"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              📚 Learnings & Reflections
            </h2>

            <div className="mb-12">
              <ul className="space-y-6">
                <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                  <span className="text-lg text-[#131417] leading-[150%]">
                    <span className="font-semibold">
                      Trust &gt; Automation:&nbsp;
                    </span>
                    Explainability (chips, overrides) was as critical as model
                    accuracy.
                  </span>
                </li>
                <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></span>
                  <span className="text-lg text-[#131417] leading-[150%]">
                    <span className="font-semibold">
                      Role-based design &gt; one-size-fits-all:
                    </span>
                    &nbsp;Doctors, nurses, and admins each needed tailored
                    dashboards.
                  </span>
                </li>
                <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                  <span className="text-lg text-[#131417] leading-[150%]">
                    <span className="font-semibold">Systems thinking:</span>
                    &nbsp;Success hinged not just on UI polish, but on&nbsp;
                    <span className="font-semibold">
                      data flows, HIPAA boundaries, and auditability.
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
                🚀 What I'd Do Next
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Predictive Staffing Optimization
                      </h4>
                      <p className="text-blue-700 text-sm">
                        → AI shift planning to cut overtime 15–20%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-[20px] p-6 border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">
                        HL7/FHIR Integration
                      </h4>
                      <p className="text-green-700 text-sm">
                        <span
                          style={{
                            color: "rgb(29, 78, 216)",
                            backgroundColor: "rgb(239, 246, 255)",
                          }}
                        >
                          →
                        </span>
                        &nbsp;expand interoperability across EHR vendors
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-[20px] p-6 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">
                        Sentiment Analysis
                      </h4>
                      <p className="text-purple-700 text-sm">
                        → real-time patient feedback loops
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-[20px] p-6 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">
                        Scenario Planning
                      </h4>
                      <p className="text-orange-700 text-sm">
                        → financial what-if models for hospital admins
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-[20px] p-8 border border-blue-200 text-center">
                <p className="text-lg text-[#131417] leading-[150%] font-medium">
                  <span className="font-semibold">
                    Symplify reframed hospital operations from three disjointed
                    systems into one adaptive, AI-assisted platform — measurable
                    time savings, safer workflows, and future-ready compliance.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Related Case Studies */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <RelatedCaseStudies currentCaseStudyId="symplify" />
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
                <Heart className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Symplify Platform
                  </h3>
                  <p className="text-sm text-gray-600">
                    symplify-preview.vercel.app
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://symplify-preview.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
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
              src="https://symplify-preview.vercel.app/"
              className="w-full h-full border-0"
              title="Symplify Platform Preview"
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
            <div className="max-w-full max-h-full">
              <img
                src={enlargedImage.src}
                alt={enlargedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">{enlargedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
