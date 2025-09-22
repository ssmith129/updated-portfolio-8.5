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
  Monitor,
  Tablet,
  Smartphone,
  PlayCircle,
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
export default function SymplifyAltCaseStudy() {
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
            Transforming siloed hospital workflows into a unified, AI-powered
            SaaS platform
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
            { href: "#metrics", label: "Key Metrics" },
            { href: "#context", label: "Context & Problem" },
            { href: "#research", label: "Research & Insights" },
            { href: "#wireframes", label: "Iteration" },
            { href: "#features", label: "Feature Deep-Dives" },
            { href: "#before-after", label: "Before vs After" },
            { href: "#responsive", label: "Responsive Views" },
            { href: "#interactions", label: "Micro-interactions" },
            { href: "#outcomes", label: "Outcomes" },
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
                    📌 TL;DR — Outcomes
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-[#131417]">
                    <li>
                      <span className="font-semibold">Inbox triage ↓ 42%</span>{" "}
                      → freed ~6.5 hrs/clinician/month
                    </li>
                    <li>
                      <span className="font-semibold">
                        On-time follow-ups ↑ 18%
                      </span>{" "}
                      → fewer SLA breaches, faster care delivery
                    </li>
                    <li>
                      <span className="font-semibold">
                        No-show rate ↓ 2.4 pts
                      </span>{" "}
                      → improved appointment utilization
                    </li>
                    <li>
                      <span className="font-semibold">
                        Admin overtime ↓ 4.4 hrs/wk
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
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-24">
        {/* TL;DR Section - Text Block Layout */}
        <section
          id="tldr"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-md transition-all duration-300 mt-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              📌 TL;DR
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-[0.8px]">
                    Role
                  </h3>
                  <p className="text-xl font-medium text-[#131417]">
                    Lead Product Designer
                  </p>
                  <p className="text-[#9FA0A3]">End-to-end design leadership</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-[0.8px]">
                    Timeline
                  </h3>
                  <p className="text-xl font-medium text-[#131417]">6 months</p>
                  <p className="text-[#9FA0A3]">Discovery through deployment</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-[0.8px]">
                    Team
                  </h3>
                  <p className="text-xl font-medium text-[#131417]">4 people</p>
                  <p className="text-[#9FA0A3]">PM, 2 engineers, designer</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-[20px] p-8">
                <h3 className="text-xl font-semibold text-[#131417] mb-4">
                  Challenge
                </h3>
                <p className="text-lg text-[#131417] leading-relaxed mb-4">
                  Hospital staff were drowning in fragmented systems, spending
                  5-8 hours per week on manual triage across EHRs, paper logs,
                  and Excel sheets. This operational overhead was causing delays
                  in patient care and increasing compliance risks.
                </p>
                <h3 className="text-xl font-semibold text-[#131417] mb-4">
                  Solution
                </h3>
                <p className="text-lg text-[#131417] leading-relaxed">
                  A unified, AI-powered platform that consolidates workflows
                  while preserving existing EHR investments. Smart triage,
                  predictive scheduling, and real-time insights reduced
                  administrative burden by 40%+ while improving patient
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Impact Metrics - Stat Grid Layout */}
        <section
          id="metrics"
          ref={metricsRef as React.RefObject<HTMLDivElement>}
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12 text-center">
              📊 Key Impact Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-[20px] transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter
                  value={42}
                  className="text-4xl font-bold text-green-600 mb-2"
                  startAnimation={startMetricsAnimation}
                />
                <h3 className="text-lg font-semibold text-[#131417] mb-2">
                  Faster Triage
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  Reduced from 2m15s to 1m18s per item
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-[20px] transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter
                  value={18}
                  className="text-4xl font-bold text-blue-600 mb-2"
                  startAnimation={startMetricsAnimation}
                />
                <h3 className="text-lg font-semibold text-[#131417] mb-2">
                  Better Follow-ups
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  On-time rate increased 72% → 85.3%
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-[20px] transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  -2.4pts
                </div>
                <h3 className="text-lg font-semibold text-[#131417] mb-2">
                  Lower No-shows
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  Improved from 9.8% to 7.4%
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-[20px] transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  -4.4hrs
                </div>
                <h3 className="text-lg font-semibold text-[#131417] mb-2">
                  Less Overtime
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  Admin overtime reduced per week
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-[20px] transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter
                  value={44}
                  className="text-4xl font-bold text-teal-600 mb-2"
                  startAnimation={startMetricsAnimation}
                />
                <h3 className="text-lg font-semibold text-[#131417] mb-2">
                  SLA Compliance
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  Breach risk down 14.2% → 7.9%
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-[20px] transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  92%
                </div>
                <h3 className="text-lg font-semibold text-[#131417] mb-2">
                  User Satisfaction
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  Staff would recommend to peers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Problem - 2 Column Layout */}
        <section
          id="context"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              🔍 Context & Problem
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#131417] mb-4">
                    The Challenge
                  </h3>
                  <p className="text-lg text-[#131417] leading-relaxed mb-6">
                    Mid-sized hospitals were struggling with an{" "}
                    <strong>operational tax</strong> from managing three
                    disconnected systems that created inefficiencies, errors,
                    and compliance risks.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-[12px] border-l-4 border-red-400">
                      <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800">Doctors</h4>
                        <p className="text-red-700">
                          Appointment scheduling trapped inside legacy EHRs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-[12px] border-l-4 border-orange-400">
                      <Activity className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-800">
                          Nurses
                        </h4>
                        <p className="text-orange-700">
                          Paper logs and shift notes causing handoff errors
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-[12px] border-l-4 border-yellow-400">
                      <Users className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">
                          Administrators
                        </h4>
                        <p className="text-yellow-700">
                          Excel-based revenue forecasting with month-long delays
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-[16px] p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Key Constraints
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>
                      • HIPAA compliance required for all patient data handling
                    </li>
                    <li>• Legacy EHRs couldn't be replaced, only extended</li>
                    <li>
                      • Staffing shortages meant new tools had to reduce
                      workload
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-[16px] p-6">
                  <h4 className="font-semibold text-[#131417] mb-4">
                    Impact on Operations
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-red-600">~1,200</span>
                      <p className="text-gray-600">messages/month</p>
                    </div>
                    <div>
                      <span className="font-medium text-red-600">2m15s</span>
                      <p className="text-gray-600">avg triage time</p>
                    </div>
                    <div>
                      <span className="font-medium text-red-600">14%</span>
                      <p className="text-gray-600">SLA breaches</p>
                    </div>
                    <div>
                      <span className="font-medium text-red-600">12+hrs</span>
                      <p className="text-gray-600">admin overtime/week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights - 2 Column Layout */}
        <section
          id="research"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              🧪 Research & Insights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#131417] mb-6">
                    Research Methods
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-[12px] border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800">
                        User Interviews
                      </h4>
                      <p className="text-blue-700 text-sm">
                        14 staff across 3 roles • 2 weeks
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-[12px] border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800">
                        Contextual Inquiry
                      </h4>
                      <p className="text-green-700 text-sm">
                        11 live clinic sessions • 3 days
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-[12px] border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800">
                        Workflow Audits
                      </h4>
                      <p className="text-purple-700 text-sm">
                        1,200 inbox items analyzed • 4 weeks
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#131417] mb-4">
                    Key Insights
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-[#131417]">
                        Staff spent 5-8 hours/week on manual triage
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-[#131417]">
                        18% of urgent handoffs were missed during shifts
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-[#131417]">
                        Excel forecasting lagged by weeks, preventing proactive
                        decisions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-[#131417]">
                        Staff were skeptical of "black box" AI solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-[16px] p-6">
                  <h4 className="font-semibold text-green-800 mb-4">
                    User Quotes
                  </h4>
                  <div className="space-y-4">
                    <blockquote className="text-sm text-green-700 italic border-l-2 border-green-400 pl-3">
                      "Half my inbox is reminders I don't need today — I just
                      want the urgent ones."
                      <cite className="block text-xs text-green-600 mt-1 not-italic">
                        — MD, Clinic A
                      </cite>
                    </blockquote>

                    <blockquote className="text-sm text-green-700 italic border-l-2 border-green-400 pl-3">
                      "When shifts overlap, I'm never sure if a message was
                      handled already."
                      <cite className="block text-xs text-green-600 mt-1 not-italic">
                        — RN, Clinic B
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iteration / Wireframes - 3 Column Layout */}
        <section
          id="wireframes"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              🔄 Iteration & Wireframes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
                    <p className="text-gray-500 text-sm font-medium">
                      Lo-fi Wireframes
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#131417] mb-2">
                    Initial Concepts
                  </h3>
                  <p className="text-sm text-[#9FA0A3]">
                    Basic layout & information architecture
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() =>
                    setEnlargedImage({
                      src:
                        "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F00168d90a81e4a8ab610cb1a95f87244?format=webp&width=1600",
                      alt: "Mid-fi wireframes: Symplify dashboard overview",
                    })
                  }
                  aria-label="Open mid‑fi wireframes full size"
                  className="group rounded-[16px] overflow-hidden border border-gray-200 shadow-sm w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-zoom-in"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F00168d90a81e4a8ab610cb1a95f87244?format=webp&width=800"
                    alt="Mid-fi wireframes: Symplify dashboard overview"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
                <div className="text-center">
                  <h3 className="font-semibold text-[#131417] mb-2">
                    Refined Interactions
                  </h3>
                  <p className="text-sm text-[#9FA0A3]">
                    User flows & component behavior
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-400 rounded mx-auto mb-2"></div>
                    <p className="text-gray-500 text-sm font-medium">
                      Hi-fi Designs
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#131417] mb-2">
                    Final Designs
                  </h3>
                  <p className="text-sm text-[#9FA0A3]">
                    Pixel-perfect & development-ready
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-[20px] p-8">
              <h3 className="text-xl font-semibold text-[#131417] mb-4">
                Design Evolution
              </h3>
              <p className="text-[#131417] leading-relaxed">
                Through rapid prototyping and user testing, we evolved from
                basic inbox concepts to an intelligent, AI-powered triage
                system. Each iteration incorporated clinical staff feedback and
                addressed real-world workflow constraints.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Deep-Dives - Repeatable Section Layout */}
        <section
          id="features"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1200"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              🎯 Feature Deep-Dives
            </h2>

            <div className="space-y-16">
              {/* Feature 1 - AI Inbox Triage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-[12px] flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#131417]">
                        AI Inbox Triage
                      </h3>
                      <p className="text-[#9FA0A3]">
                        Intelligent message prioritization
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-[16px] p-6">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-blue-600">
                        42%
                      </span>
                      <p className="text-sm text-blue-700">
                        faster triage time
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-[#131417] leading-relaxed">
                    Our AI system analyzes message content, patient history, and
                    urgency indicators to automatically prioritize inbox items.
                    Staff see the most critical items first, with transparent
                    "why ranked" explanations to build trust.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Clinical risk assessment
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        SLA urgency scoring
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Explainable AI decisions
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">
                      AI Triage Interface
                    </p>
                    <p className="text-sm text-gray-400">
                      Smart prioritization screenshot
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Smart Scheduling */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300 lg:order-1">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Smart Scheduler</p>
                    <p className="text-sm text-gray-400">
                      Predictive appointment slotting
                    </p>
                  </div>
                </div>

                <div className="space-y-6 lg:order-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-[12px] flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#131417]">
                        Smart Scheduling
                      </h3>
                      <p className="text-[#9FA0A3]">
                        Predictive appointment optimization
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-[16px] p-6">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-green-600">
                        2.4pts
                      </span>
                      <p className="text-sm text-green-700">
                        lower no-show rate
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-[#131417] leading-relaxed">
                    Machine learning algorithms analyze patient patterns,
                    appointment history, and external factors to predict
                    no-shows and optimize scheduling. Smart slotting reduces
                    gaps while improving appointment utilization.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        No-show prediction modeling
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Optimal time slot recommendations
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Automated waitlist management
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 - Unified Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-[12px] flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#131417]">
                        Unified Dashboard
                      </h3>
                      <p className="text-[#9FA0A3]">
                        Real-time operational insights
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-[16px] p-6">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-purple-600">
                        4.4hrs
                      </span>
                      <p className="text-sm text-purple-700">
                        less admin overtime per week
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-[#131417] leading-relaxed">
                    Role-based dashboards provide real-time visibility into
                    operations, replacing manual Excel tracking with automated
                    insights. Administrators get predictive forecasting while
                    clinical staff see actionable notifications.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Real-time operational metrics
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Predictive revenue forecasting
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#131417]">
                        Role-specific customization
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">
                      Operations Dashboard
                    </p>
                    <p className="text-sm text-gray-400">
                      Real-time metrics & insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before vs After - Comparison Layout */}
        <section
          id="before-after"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              ⚖️ Before vs After
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-[20px] p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <X className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-bold text-red-800">
                    Before: Fragmented Chaos
                  </h3>
                </div>

                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span>Doctors trapped in legacy EHR interfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span>Nurses managing paper logs and sticky notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span>Admins drowning in Excel spreadsheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span>2m15s average triage time per message</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span>14% of messages breached SLA timelines</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-[20px] p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-bold text-green-800">
                    After: Unified Intelligence
                  </h3>
                </div>

                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>AI-powered inbox triage with risk scoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Unified digital handoffs with clear ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Real-time forecasting with predictive insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>1m18s average triage time (42% improvement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>7.9% SLA breach rate (44% improvement)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Views - Staggered Row Layout */}
        <section
          id="responsive"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1400"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              📱 Responsive Views
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gray-100 rounded-[20px] flex items-center justify-center border-2 border-dashed border-gray-300 p-8">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Desktop View</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#131417] mb-2">
                    Desktop Dashboard
                  </h3>
                  <p className="text-sm text-[#9FA0A3]">
                    Full-featured admin interface with multi-panel layouts
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300 p-6">
                  <div className="text-center">
                    <Tablet className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">Tablet View</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#131417] mb-2">
                    Tablet Interface
                  </h3>
                  <p className="text-sm text-[#9FA0A3]">
                    Optimized for bedside use and patient rounds
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-[2/3] bg-gray-100 rounded-[12px] flex items-center justify-center border-2 border-dashed border-gray-300 p-4">
                  <div className="text-center">
                    <Smartphone className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium text-sm">
                      Mobile View
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#131417] mb-2">
                    Mobile App
                  </h3>
                  <p className="text-sm text-[#9FA0A3]">
                    Critical notifications and quick actions on-the-go
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-[20px] p-8">
              <h3 className="text-xl font-semibold text-[#131417] mb-4">
                Mobile-First Approach
              </h3>
              <p className="text-[#131417] leading-relaxed">
                Given the mobile nature of healthcare work, we prioritized
                critical functions for point-of-care access. The progressive
                enhancement ensures full functionality on desktop while
                maintaining usability on mobile devices.
              </p>
            </div>
          </div>
        </section>

        {/* Micro-interactions - Media Blocks Layout */}
        <section
          id="interactions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1600"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              ✨ Micro-interactions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">
                      Priority Animation
                    </p>
                    <p className="text-sm text-gray-400">
                      Smart triage in action
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#131417] mb-2">
                    Smart Triage Animation
                  </h3>
                  <p className="text-[#9FA0A3] text-sm">
                    Messages slide into priority order with subtle color coding
                    and urgency indicators.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Handoff Flow</p>
                    <p className="text-sm text-gray-400">
                      Seamless task transfers
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#131417] mb-2">
                    Handoff Transitions
                  </h3>
                  <p className="text-[#9FA0A3] text-sm">
                    Smooth animations guide users through task handoffs with
                    clear ownership indicators.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Loading States</p>
                    <p className="text-sm text-gray-400">
                      Intelligent feedback
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#131417] mb-2">
                    AI Processing States
                  </h3>
                  <p className="text-[#9FA0A3] text-sm">
                    Progressive loading indicators show AI analysis progress
                    with contextual explanations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-[16px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">
                      Success Feedback
                    </p>
                    <p className="text-sm text-gray-400">
                      Satisfying completions
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#131417] mb-2">
                    Completion Animations
                  </h3>
                  <p className="text-[#9FA0A3] text-sm">
                    Delightful success states reinforce positive actions and
                    build user confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-purple-50 rounded-[20px] p-8">
              <h3 className="text-xl font-semibold text-[#131417] mb-4">
                Design Philosophy
              </h3>
              <p className="text-[#131417] leading-relaxed">
                Every interaction was designed to reduce cognitive load while
                providing clear feedback. Animations serve functional
                purposes—guiding attention, indicating system status, and
                building trust in AI-driven decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes & Next Steps - Text Block Layout */}
        <section
          id="outcomes"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700"
        >
          <div className="bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-12">
              🎯 Outcomes & Next Steps
            </h2>

            <div className="space-y-12">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-[#131417] mb-6">
                  Project Impact
                </h3>
                <p className="text-lg text-[#131417] leading-relaxed mb-8">
                  The Symplify platform successfully transformed hospital
                  operations across our pilot clinics, demonstrating measurable
                  improvements in efficiency, compliance, and staff
                  satisfaction. The 6-month controlled deployment provided
                  strong validation for scaling the solution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-green-50 rounded-[20px] p-8">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">
                      Quantitative Results
                    </h4>
                    <ul className="space-y-3 text-green-700">
                      <li>• 42% reduction in average triage time</li>
                      <li>• 18% improvement in on-time follow-ups</li>
                      <li>• 2.4 point decrease in patient no-shows</li>
                      <li>• 4.4 hours less admin overtime per week</li>
                      <li>• 44% reduction in SLA breach risk</li>
                      <li>• 92% staff satisfaction score</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-[20px] p-8">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">
                      Qualitative Feedback
                    </h4>
                    <ul className="space-y-3 text-blue-700">
                      <li>• Reduced stress from information overload</li>
                      <li>
                        • Increased confidence in prioritization decisions
                      </li>
                      <li>• Better work-life balance from reduced overtime</li>
                      <li>• Improved job satisfaction scores</li>
                      <li>• Enhanced patient care quality metrics</li>
                      <li>• Stronger compliance confidence</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#131417] mb-6">
                  Lessons Learned
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-[16px] p-6 border-l-4 border-orange-400">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        AI Transparency is Critical
                      </h4>
                      <p className="text-orange-700 text-sm">
                        Staff adoption increased dramatically when we added "why
                        ranked" explanations and override capabilities to AI
                        decisions.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-[16px] p-6 border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 mb-2">
                        Gradual Rollout Works
                      </h4>
                      <p className="text-purple-700 text-sm">
                        Phased deployment allowed us to address concerns and
                        build confidence before full implementation.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-teal-50 rounded-[16px] p-6 border-l-4 border-teal-400">
                      <h4 className="font-semibold text-teal-800 mb-2">
                        Role-Specific Design Matters
                      </h4>
                      <p className="text-teal-700 text-sm">
                        Customizing interfaces for doctors, nurses, and
                        administrators significantly improved adoption and
                        satisfaction.
                      </p>
                    </div>

                    <div className="bg-indigo-50 rounded-[16px] p-6 border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-800 mb-2">
                        Integration is Everything
                      </h4>
                      <p className="text-indigo-700 text-sm">
                        Success depended on seamless EHR integration rather than
                        requiring staff to learn entirely new systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#131417] mb-6">
                  Next Steps & Roadmap
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-[20px]">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-[#131417] mb-2">
                        Scale Deployment
                      </h4>
                      <p className="text-sm text-[#9FA0A3]">
                        Roll out to 15+ additional hospital systems
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-[20px]">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-[#131417] mb-2">
                        Enhanced AI
                      </h4>
                      <p className="text-sm text-[#9FA0A3]">
                        Predictive analytics and advanced automation
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-[20px]">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-[#131417] mb-2">
                        Patient Portal
                      </h4>
                      <p className="text-sm text-[#9FA0A3]">
                        Direct patient engagement features
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-[20px] p-8">
                    <h4 className="text-xl font-semibold text-[#131417] mb-4">
                      Looking Forward
                    </h4>
                    <p className="text-[#131417] leading-relaxed">
                      The success of Symplify has opened opportunities for
                      deeper healthcare AI integration. We're exploring
                      predictive patient risk modeling, automated care plan
                      suggestions, and real-time quality improvement analytics.
                      The goal remains the same: empowering healthcare
                      professionals to focus on patient care while technology
                      handles operational complexity.
                    </p>
                  </div>
                </div>
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
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <a
                href="https://symplify-preview.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
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
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
