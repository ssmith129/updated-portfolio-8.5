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
      const currentValue = easeOut * end;

      setCount(currentValue);

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
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  className: string;
  startAnimation: boolean;
  decimals?: number;
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
  const displayValue =
    decimals > 0
      ? animatedValue.toFixed(decimals)
      : Math.floor(animatedValue).toString();

  return (
    <div className={className}>
      {displayValue}
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
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] scroll-smooth relative overflow-hidden">
      {/* Subtle healthcare background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 50%, #3B82F6 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, #10B981 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[120px]"></div>

      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#64748B] leading-normal tracking-[-0.18px] hover:text-[#3B82F6] transition-all duration-300 hover:scale-105 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="mb-8 flex flex-col lg:block">
          <span className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white px-4 py-2 rounded-[20px] text-[14px] font-semibold tracking-[-0.14px] mb-6">
            Healthcare UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#0F172A] leading-[110%] tracking-[-1.2px] mb-6">
            Symplify – Hospital Management System
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#64748B] leading-[140%] tracking-[-0.24px] max-w-[800px] md:max-w-[952px] w-full text-center lg:text-left mx-auto md:pr-px">
            A unified, AI-enhanced clinical operating system for public health
            programs and hospital workflows
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="w-full aspect-[1.85] rounded-[16px] flex items-center justify-center border border-[#E2E8F0] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer group relative overflow-hidden"
          aria-label="Open Symplify platform preview"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="flex flex-col relative justify-center items-center my-5 py-8 px-5 z-10">
            <div className="flex flex-col relative justify-center items-center mt-5 py-8 px-5">
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-[12px] px-6 py-4 text-center cursor-pointer shadow-lg inline-block hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Live Platform
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Section Navigation - horizontal pills for quick access */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-6 relative z-10">
        <nav
          aria-label="Case study sections"
          className="flex items-center gap-2 md:gap-3 overflow-x-auto py-2"
        >
          {[
            { href: "#tldr", label: "TL;DR" },
            { href: "#context", label: "Challenge" },
            { href: "#solution", label: "Solution" },
            { href: "#why-it-matters", label: "Why It Matters" },
            { href: "#transformation", label: "Overview" },
            { href: "#problem", label: "Problem & Research" },
            { href: "#principles", label: "Market Analysis" },
            { href: "#research", label: "Design Process" },
            { href: "#journeys", label: "User Flows" },
            { href: "#workflow", label: "Key Decisions" },
            { href: "#final-solutions", label: "Final Solutions" },
            { href: "#impact", label: "Impact" },
            { href: "#learnings", label: "Learnings" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#475569] border border-[#E2E8F0] text-sm font-medium hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] hover:border-[#3B82F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Summary Card */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600 border border-[#E2E8F0]">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-xl sm:text-2xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.24px] group-hover:text-[#3B82F6] transition-colors duration-300">
              Quick View
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#64748B] group-hover:text-[#3B82F6] transition-colors duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#64748B] group-hover:text-[#3B82F6] transition-colors duration-300" />
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
                        ↓ 40% average scheduling time
                      </span>{" "}
                      → streamlined appointment management
                    </li>
                    <li>
                      <span className="font-semibold text-[#3B82F6]">
                        ↑ 2.3× triage efficiency
                      </span>{" "}
                      → faster message prioritization
                    </li>
                    <li>
                      <span className="font-semibold text-[#8B5CF6]">
                        ↑ 70% compliance pass rate
                      </span>{" "}
                      → improved regulatory adherence
                    </li>
                    <li>
                      <span className="font-semibold text-[#F59E0B]">
                        ↓ 20% admin overhead
                      </span>{" "}
                      → reduced documentation burden
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
                    Founding Product Designer → 0→1 platform design for
                    healthcare workflows under HIPAA constraints
                  </p>
                </div>

                <div className="border-t border-[#E2E8F0]"></div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#0F172A] mb-2">
                    🌟 Hero Visual
                  </h3>
                  <p className="text-sm text-[#64748B] mb-3" />
                  <ul className="list-disc pl-5 space-y-2 text-[#1E293B]">
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

                <div className="bg-gradient-to-r from-[#EFF6FF] to-[#ECFDF5] rounded-[16px] p-4 border-l-4 border-[#3B82F6]">
                  <p className="text-[#1E293B] italic leading-relaxed">
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
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16 relative z-10">
        {/* Executive Summary */}
        <section
          id="tldr"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 mt-12 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-[#3B82F6] cursor-pointer">
              📌 TL;DR
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Role
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Founding Product Designer
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Type
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  B2B SaaS – Healthcare / EHR
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Timeline
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Jan–Aug 2024
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Team
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Cross-functional squad (PM, engineers, clinical SMEs)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Tools
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Figma, Notion, Framer, Jira, ChatGPT
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#64748B] uppercase tracking-[0.5px]">
                  Company
                </h3>
                <p className="text-lg font-medium text-[#0F172A]">
                  Custom Data Processing Inc.
                </p>
              </div>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-[#EFF6FF] via-white to-[#ECFDF5] rounded-[20px] p-6 sm:p-8 border border-[#E2E8F0]"
            >
              <h3 className="text-xl font-medium text-[#0F172A] mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#3B82F6]" />
                Key Impact Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={40}
                    className="text-2xl sm:text-3xl font-bold text-[#10B981] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#64748B]">
                    ↓ average scheduling time
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={2.3}
                    decimals={1}
                    suffix="×"
                    className="text-2xl sm:text-3xl font-bold text-[#3B82F6] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#64748B]">↑ triage efficiency</p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={70}
                    className="text-2xl sm:text-3xl font-bold text-[#8B5CF6] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#64748B]">
                    ↑ compliance pass rate
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={20}
                    className="text-2xl sm:text-3xl font-bold text-[#F59E0B] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#64748B]">↓ admin overhead</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview & Objectives */}
        <section
          id="transformation"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-[#3B82F6] cursor-pointer">
              📌 Project Overview & Objectives
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  Symplify was designed to modernize fragmented hospital and
                  public health workflows into a{" "}
                  <span className="font-semibold text-[#3B82F6]">
                    single, AI-driven platform
                  </span>
                  . The initiative was a{" "}
                  <span className="font-semibold text-[#10B981]">
                    0 → 1 system redesign
                  </span>
                  , targeting inefficiencies in scheduling, communication, and
                  compliance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-[20px] p-6 border-l-4 border-[#3B82F6]">
                <h3 className="text-lg font-medium text-[#1E40AF] mb-4">
                  Business Objectives
                </h3>
                <ul className="space-y-2 text-[#1E293B]">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span>Reduce time spent on administrative workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span>Improve compliance and reduce missed tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span>Create trustable, explainable AI workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span>
                      Deliver a modular system extensible to state-level health
                      programs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Stakes */}
        <section
          id="context"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              🎯 Challenge
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  Hospitals and public health programs relied on{" "}
                  <span className="font-semibold text-[#DC2626]">
                    fragmented, outdated systems
                  </span>{" "}
                  — leading to missed appointments, compliance gaps, and staff
                  burnout.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEE2E2] rounded-[20px] p-6 border-l-4 border-[#EF4444]">
                <ul className="space-y-2 text-[#1E293B]">
                  <li>• HIPAA compliance required masking and audit logs</li>
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

        {/* Solution */}
        <section
          id="solution"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-850"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              💡 Solution
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  Designed{" "}
                  <span className="font-semibold text-[#3B82F6]">Symplify</span>
                  , an{" "}
                  <span className="font-semibold text-[#10B981]">
                    AI-enhanced, modular platform
                  </span>{" "}
                  with:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#3B82F6]">
                        Smart Inbox Triage
                      </span>{" "}
                      → Faster, explainable message prioritization
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#10B981]">
                        Smart Scheduling
                      </span>{" "}
                      → AI-assisted appointment management
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#8B5CF6] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#8B5CF6]">
                        Smart Notifications
                      </span>{" "}
                      → Reduced alert fatigue with clear priority tiers
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#F59E0B]">
                        Unified Email Integration
                      </span>{" "}
                      → Centralized communication
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section
          id="why-it-matters"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-875"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              🔑 Why It Matters
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  Symplify redefined hospital workflow UX:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#3B82F6]">
                        Trust-first AI patterns
                      </span>{" "}
                      (transparent, human-in-the-loop)
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#3B82F6]">
                        Scalable modular design system
                      </span>{" "}
                      for clinics and state agencies
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#3B82F6]">
                        Accessibility-first
                      </span>{" "}
                      (WCAG 2.1 AA compliant)
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-[20px] p-6 border-l-4 border-[#3B82F6]">
                <div className="text-center">
                  <div className="text-2xl mb-4">💡</div>
                  <p className="text-lg text-[#1E40AF] italic">
                    Visual Asset Suggestion: Quick KPI infographic (Before vs
                    After), paired with one hero dashboard screenshot for
                    immediate impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement & Research */}
        <section
          id="problem"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              Problem Statement & Research
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEE2E2] rounded-[20px] p-6 border-l-4 border-[#EF4444] transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-[#991B1B] mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#DC2626]" />
                  Core Problem
                </h3>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-4">
                  Hospitals and WIC programs were relying on{" "}
                  <span className="font-semibold text-[#DC2626]">
                    outdated, siloed tools
                  </span>
                  :
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Messages scattered across multiple channels</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Appointment scheduling required{" "}
                      <span className="font-semibold">
                        manual reconciliation
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Compliance notifications buried in dropdowns</span>
                  </li>
                </ul>
                <p className="text-lg text-[#1E293B] leading-[150%]">
                  The result:{" "}
                  <span className="font-semibold text-[#DC2626]">
                    missed appointments, delayed responses, and staff burnout
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-[20px] p-6 border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-bold text-[#1E40AF] mb-4">
                  Research Process
                </h3>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  I led a structured discovery process designed to capture{" "}
                  <span className="font-semibold text-[#3B82F6]">
                    quantitative task data
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#3B82F6]">
                    qualitative user sentiment
                  </span>
                  :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1E40AF]">
                          Contextual Inquiry
                        </h4>
                        <p className="text-sm text-[#475569]">
                          Shadowed 12 clinic admins and 6 nurses across 3
                          facilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1E40AF]">
                          Task Analysis
                        </h4>
                        <p className="text-sm text-[#475569]">
                          Logged over 3,000 daily tasks, identifying friction
                          points
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1E40AF]">
                          User Interviews
                        </h4>
                        <p className="text-sm text-[#475569]">
                          Structured interviews focusing on trust in technology
                          and AI perceptions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1E40AF]">
                          Usability Testing
                        </h4>
                        <p className="text-sm text-[#475569]">
                          3 iterative rounds validating navigation clarity and
                          AI interpretability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1E40AF]">
                          Stakeholder Workshops
                        </h4>
                        <p className="text-sm text-[#475569]">
                          Sessions with state agency leaders for regulatory
                          alignment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] rounded-[20px] p-6 border-l-4 border-[#10B981]">
                <h3 className="text-xl font-bold text-[#065F46] mb-4">
                  Key Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#065F46]">
                          60% of staff time lost
                        </p>
                        <p className="text-sm text-[#047857]">
                          to context switching across multiple systems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#065F46]">
                          40% of "urgent" messages were noise
                        </p>
                        <p className="text-sm text-[#047857]">
                          undermining trust in alerts
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#065F46]">
                          Staff wanted AI augmentation, not automation
                        </p>
                        <p className="text-sm text-[#047857]">
                          requiring transparency and control
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#065F46]">
                          High administrative burden
                        </p>
                        <p className="text-sm text-[#047857]">
                          caused compliance gaps and delayed patient care
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business & Market Analysis */}
        <section
          id="principles"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              📊 Business & Market Analysis
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg text-[#1E293B] leading-[150%] mb-6">
                  The healthcare IT market is dominated by{" "}
                  <span className="font-semibold text-[#475569]">
                    legacy EHR systems
                  </span>{" "}
                  (Epic, Cerner, Allscripts) designed for hospitals, not public
                  health programs or smaller clinics. These systems are:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Costly to implement and maintain</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Not optimized for staff-facing daily workflows</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1E293B]">
                    <span className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Slow to adopt modern UX and AI-driven enhancements
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-[20px] p-6 border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-bold text-[#1E40AF] mb-4">
                  Opportunity for Symplify
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-[#1E293B]">
                      Deliver a{" "}
                      <span className="font-semibold text-[#3B82F6]">
                        modular, cost-effective alternative
                      </span>{" "}
                      for public health agencies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-[#1E293B]">
                      Differentiate with{" "}
                      <span className="font-semibold text-[#3B82F6]">
                        AI-enhanced task efficiency
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-[#3B82F6]">
                        explainability
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-[#1E293B]">
                      Position as a{" "}
                      <span className="font-semibold text-[#3B82F6]">
                        scalable platform
                      </span>{" "}
                      bridging state agencies and local clinics
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172A] mb-6">
                  Competitor Analysis
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#E2E8F0]">
                        <th className="text-left p-4 font-medium text-[#0F172A] bg-[#F8FAFC]">
                          Feature / Platform
                        </th>
                        <th className="text-center p-4 font-medium text-[#64748B] bg-[#F8FAFC]">
                          Epic
                        </th>
                        <th className="text-center p-4 font-medium text-[#64748B] bg-[#F8FAFC]">
                          Cerner
                        </th>
                        <th className="text-center p-4 font-medium text-[#64748B] bg-[#F8FAFC]">
                          Allscripts
                        </th>
                        <th className="text-center p-4 font-medium text-[#64748B] bg-[#F8FAFC]">
                          ezEMRx
                        </th>
                        <th className="text-center p-4 font-medium text-[#3B82F6] bg-[#F8FAFC]">
                          Symplify
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#F1F5F9]">
                        <td className="p-4 text-[#1E293B]">
                          Cost & Scalability
                        </td>
                        <td className="text-center p-4 text-[#64748B]">$$$$</td>
                        <td className="text-center p-4 text-[#64748B]">$$$$</td>
                        <td className="text-center p-4 text-[#64748B]">$$$</td>
                        <td className="text-center p-4 text-[#64748B]">$$</td>
                        <td className="text-center p-4 font-semibold text-[#10B981]">
                          $ (modular)
                        </td>
                      </tr>
                      <tr className="border-b border-[#F1F5F9]">
                        <td className="p-4 text-[#1E293B]">
                          Usability (Staff-Facing)
                        </td>
                        <td className="text-center p-4 text-[#64748B]">Low</td>
                        <td className="text-center p-4 text-[#64748B]">
                          Medium
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Medium
                        </td>
                        <td className="text-center p-4 text-[#64748B]">Low</td>
                        <td className="text-center p-4 font-semibold text-[#10B981]">
                          High
                        </td>
                      </tr>
                      <tr className="border-b border-[#F1F5F9]">
                        <td className="p-4 text-[#1E293B]">AI Augmentation</td>
                        <td className="text-center p-4 text-[#64748B]">
                          Minimal
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Minimal
                        </td>
                        <td className="text-center p-4 text-[#64748B]">None</td>
                        <td className="text-center p-4 text-[#64748B]">None</td>
                        <td className="text-center p-4 font-semibold text-[#10B981]">
                          Smart Inbox, Notifications, Scheduling
                        </td>
                      </tr>
                      <tr className="border-b border-[#F1F5F9]">
                        <td className="p-4 text-[#1E293B]">
                          Accessibility (WCAG)
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Inconsistent
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Inconsistent
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Limited
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Limited
                        </td>
                        <td className="text-center p-4 font-semibold text-[#10B981]">
                          WCAG 2.1 AA Compliant
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#1E293B]">
                          Suitability for Public Health
                        </td>
                        <td className="text-center p-4 text-[#64748B]">Low</td>
                        <td className="text-center p-4 text-[#64748B]">Low</td>
                        <td className="text-center p-4 text-[#64748B]">
                          Medium
                        </td>
                        <td className="text-center p-4 text-[#64748B]">
                          Medium
                        </td>
                        <td className="text-center p-4 font-semibold text-[#10B981]">
                          High
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] rounded-[20px] p-6 border border-[#A7F3D0]">
                <h3 className="text-lg font-medium text-[#065F46] mb-4 flex items-center gap-2">
                  💡 Strategic Differentiators
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#047857]">
                      Designed{" "}
                      <strong className="text-[#065F46]">
                        from the ground up
                      </strong>{" "}
                      for public health and WIC workflows
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#047857]">
                      <strong className="text-[#065F46]">
                        AI-driven efficiency
                      </strong>{" "}
                      with explainable decision-making
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#047857]">
                      <strong className="text-[#065F46]">
                        Lower implementation cost
                      </strong>{" "}
                      via modular SaaS model
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#047857]">
                      Built-in{" "}
                      <strong className="text-[#065F46]">
                        compliance and accessibility standards
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Methodology */}
        <section
          id="research"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              🎨 Design Process & Methodology
            </h2>

            <details className="mb-10 group">
              <summary className="list-none inline-flex items-center gap-2 text-xl font-medium text-[#0F172A] mb-2 cursor-pointer select-none hover:text-[#3B82F6] transition-colors duration-300">
                Methods
                <ChevronDown className="w-4 h-4 text-[#64748B] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#E2E8F0]">
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Method
                      </th>
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Sample
                      </th>
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Duration
                      </th>
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Focus
                      </th>
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Bias Controls
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1E293B]">
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#EFF6FF] transition-colors duration-200">
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
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#ECFDF5] transition-colors duration-200">
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
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#F5F3FF] transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Diary study</td>
                      <td className="py-3 px-4">9 staff (mixed roles)</td>
                      <td className="py-3 px-4">2 wks</td>
                      <td className="py-3 px-4">
                        Daily frustrations + time sinks
                      </td>
                      <td className="py-3 px-4">Compared with baseline logs</td>
                    </tr>
                    <tr className="hover:bg-[#FEF3C7] transition-colors duration-200">
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
              <h3 className="text-xl font-medium text-[#0F172A] mb-6">
                Insights ��� Design Moves
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#E2E8F0]">
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Insight
                      </th>
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Design Move
                      </th>
                      <th className="text-left py-3 px-4 text-[#0F172A] font-semibold bg-[#F8FAFC]">
                        Expected Effect
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1E293B]">
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#EFF6FF] transition-colors duration-200">
                      <td className="py-3 px-4">
                        Inbox triage consumed ~5–8 hrs/wk per clinician
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#3B82F6]">
                        Smart AI Chat Inbox Triage
                      </td>
                      <td className="py-3 px-4">↓ triage time ~40%</td>
                    </tr>
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#ECFDF5] transition-colors duration-200">
                      <td className="py-3 px-4">
                        Nurses missed 18% of urgent handoffs
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#10B981]">
                        AI-driven notifications + unified inbox flags
                      </td>
                      <td className="py-3 px-4">↑ on-time follow-ups</td>
                    </tr>
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#F5F3FF] transition-colors duration-200">
                      <td className="py-3 px-4">
                        Admins used Excel for forecasting; lagging visibility
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#8B5CF6]">
                        Smart Unified Email + Notifications
                      </td>
                      <td className="py-3 px-4">↑ operational visibility</td>
                    </tr>
                    <tr className="border-b border-[#F1F5F9] hover:bg-[#FEF3C7] transition-colors duration-200">
                      <td className="py-3 px-4">
                        Doctors manually slotted patients → 10% no-shows
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#F59E0B]">
                        Smart Appointment Scheduling
                      </td>
                      <td className="py-3 px-4">↓ no-shows, ↑ throughput</td>
                    </tr>
                    <tr className="hover:bg-[#FFFBEB] transition-colors duration-200">
                      <td className="py-3 px-4">
                        Staff wary of "black box AI"
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#FBBF24]">
                        AI Transparency features
                      </td>
                      <td className="py-3 px-4">↑ adoption & trust</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] rounded-[20px] p-6 border border-[#A7F3D0] transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer">
              <h3 className="text-lg font-medium text-[#065F46] mb-4">
                Quotes
              </h3>
              <div className="space-y-3">
                <blockquote className="text-sm text-[#047857] italic border-l-2 border-[#10B981] pl-3">
                  "Half my inbox is reminders I don't need today — I just want
                  the urgent ones."
                  <cite className="block text-xs text-[#059669] mt-1 not-italic">
                    — MD, Clinic A
                  </cite>
                </blockquote>
                <blockquote className="text-sm text-[#047857] italic border-l-2 border-[#10B981] pl-3">
                  "When shifts overlap, I'm never sure if a message was handled
                  already."
                  <cite className="block text-xs text-[#059669] mt-1 not-italic">
                    — RN, Clinic B
                  </cite>
                </blockquote>
                <blockquote className="text-sm text-[#047857] italic border-l-2 border-[#10B981] pl-3">
                  <div style={{ width: "100%" }}>
                    "Forecasting is basically a guess until month close --then
                    it's too late."
                  </div>
                  <cite className="block text-xs text-[#059669] mt-1 not-italic">
                    — Admin, Clinic C
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* User Flows & Journey Mapping */}
        <section
          id="journeys"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1750"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-lg border border-[#E2E8F0]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] leading-[120%] tracking-[-0.3px] mb-8">
              User Flows &amp; Journey Mapping
            </h2>

            <div className="mb-10">
              <p className="text-lg text-[#1E293B] leading-[150%] mb-8">
                <span style={{ marginLeft: "1px", display: "inline-block" }}>
                  To connect our research insights directly to staff workflows,
                  we mapped out the
                </span>
                <span className="font-semibold text-[#3B82F6]">
                  daily journeys of three key roles
                </span>{" "}
                — Doctor, Nurse, and Admin. This role-based swimlane
                visualization reveals where delays, errors, and inefficiencies
                occurred <span className="font-semibold">before Symplify</span>,
                and how{" "}
                <span className="font-semibold text-[#10B981]">
                  AI interventions resolved them
                </span>
                .
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-medium text-[#0F172A] mb-8">
                Role-Based User Journey Map
              </h3>

              <div className="space-y-8">
                {/* Doctor Journey */}
                <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-[20px] p-6 border-l-4 border-[#3B82F6]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1E40AF]">
                      Doctor
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-[#1E40AF] mb-3">
                        Daily Workflow
                      </h5>
                      <ul className="space-y-2 text-[#475569]">
                        <li className="flex items-center gap-2">
                          <span className="text-[#DC2626] font-bold">❗</span>
                          Review inbox{" "}
                          <span className="text-sm italic">
                            (manual triage ~2m/item, high backlog)
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#DC2626] font-bold">❗</span>
                          Confirm appointments{" "}
                          <span className="text-sm italic">
                            (double entry in EHR + spreadsheets)
                          </span>
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-[#3B82F6] rounded-full flex-shrink-0 mt-2"></span>
                          Update patient chart
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-[#3B82F6] rounded-full flex-shrink-0 mt-2"></span>
                          Billing close
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-[#065F46] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        AI Intervention
                      </h5>
                      <ul className="space-y-2 text-[#047857]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#10B981] font-bold mt-1">
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
                          <span className="text-[#10B981] font-bold mt-1">
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
                <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] rounded-[20px] p-6 border-l-4 border-[#10B981]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#D1FAE5] rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#065F46]">
                      Nurse
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-[#065F46] mb-3">
                        Daily Workflow
                      </h5>
                      <ul className="space-y-2 text-[#047857]">
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-[#10B981] rounded-full flex-shrink-0 mt-2"></span>
                          Track vitals
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-[#10B981] rounded-full flex-shrink-0 mt-2"></span>
                          Update patient chart
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#DC2626] font-bold">❗</span>
                          Triage patient messages{" "}
                          <span className="text-sm italic">
                            (handoffs missed at shift change)
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#DC2626] font-bold">❗</span>
                          Handoff to doctor{" "}
                          <span className="text-sm italic">
                            (no clear ownership)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-[#065F46] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        AI Intervention
                      </h5>
                      <ul className="space-y-2 text-[#047857]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#10B981] font-bold mt-1">
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
                <div className="bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] rounded-[20px] p-6 border-l-4 border-[#8B5CF6]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#EDE9FE] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#6B21A8]">
                      Admin
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-[#6B21A8] mb-3">
                        Daily Workflow
                      </h5>
                      <ul className="space-y-2 text-[#7C3AED]">
                        <li className="flex items-center gap-2">
                          <span className="text-[#DC2626] font-bold">❗</span>
                          Manage staffing{" "}
                          <span className="text-sm italic">
                            (scheduling conflicts, no predictive insight)
                          </span>
                        </li>
                        <li className="flex items-start gap-2 justify-start">
                          <span className="w-2 h-2 bg-[#8B5CF6] rounded-full flex-shrink-0 mt-2"></span>
                          Monitor hospital operations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#DC2626] font-bold">❗</span>
                          Generate revenue reports{" "}
                          <span className="text-sm italic">
                            (monthly Excel exports, lagging visibility)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-[#065F46] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        AI Intervention
                      </h5>
                      <ul className="space-y-2 text-[#047857]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#10B981] font-bold mt-1">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold">
                              Revenue Forecasting Dashboard
                            </span>
                            <span className="block text-sm">
                              real-time visibility into operational metrics
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedCaseStudies currentCaseStudyId="symplify" />
      <Footer />
    </div>
  );
}
