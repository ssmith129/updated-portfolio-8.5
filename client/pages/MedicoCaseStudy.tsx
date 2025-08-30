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
  const animatedValue = useCountAnimation(value, 2000, startAnimation);

  return (
    <div className={className}>
      {animatedValue}
      {suffix}
    </div>
  );
};

export default function MedicoCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Use the new animation hook for metrics animation
  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.5, "0px 0px -50px 0px");

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
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
        <div className="mb-8">
          <span className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6">
            Healthcare UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] tracking-[-1.2px] mb-6">
            Symplify – Hospital Management System
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-[800px]">
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
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="flex flex-col relative justify-center items-center my-5 py-8 px-5">
            <div className="flex flex-col relative justify-center items-center mt-5 py-8 px-5">
              <button className="bg-black text-white rounded px-6 py-4 text-center cursor-pointer shadow-lg">
                View Live Platform
              </button>
            </div>
          </div>
        </button>
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
              Summary
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
                    📌 TL;DR — Outcomes & Why It Matters
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Role
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        Lead Product Designer
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Scope
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        0→1 SaaS platform
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Constraints
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        HIPAA, legacy EHRs, 10-week delivery
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-[16px] p-6">
                  <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                    🚑 Key Outcomes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600 mb-1">
                        ↓ 42%
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        inbox triage time
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-blue-600 mb-1">
                        ↑ 18%
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        on-time follow-ups
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600 mb-1">
                        ↓ 2.4pts
                      </p>
                      <p className="text-sm text-[#9FA0A3]">no-show rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-orange-600 mb-1">
                        - 4.4hrs
                      </p>
                      <p className="text-sm text-[#9FA0A3]">
                        admin overtime/week
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-[16px] p-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                    💡 Why It Matters
                  </h3>
                  <p className="text-base text-[#131417] leading-[150%]">
                    Mid-sized clinics faced an{" "}
                    <span className="font-medium">operational tax</span> from
                    juggling three disconnected systems. Clinics were losing{" "}
                    <span className="font-medium">
                      5-8 hours per week per clinician
                    </span>{" "}
                    to inbox triage across fragmented tools. Symplify
                    consolidated these workflows into one adaptive, AI-assisted
                    platform — delivering{" "}
                    <span className="font-medium">
                      measurable time savings, safer workflows, and future-ready
                      compliance
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
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16">
        {/* Executive Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 mt-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-blue-600 cursor-pointer">
              Executive Summary
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
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Transformation */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
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
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Problem & Opportunity
            </h2>

            <div className="space-y-8">
              <div className="bg-orange-50 rounded-[20px] p-6 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-[#131417] mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Core Problem
                </h3>
                <p className="text-lg text-[#131417] leading-[150%]">
                  Clinics faced an{" "}
                  <span className="font-medium">operational tax</span> from
                  juggling three disconnected systems. Clinics were losing{" "}
                  <span className="font-medium">
                    5–8 hours per week per clinician
                  </span>{" "}
                  to inbox triage across fragmented tools (EHR, spreadsheets,
                  sticky notes). Missed handoffs risked HIPAA violations and
                  delayed care. Forecasting was manual and lagging, making
                  proactive staffing impossible.
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
                    <li className="flex items-start gap-3 text-[#131417]">
                      <span className="text-red-500">❌</span>
                      Did <span className="font-medium">not</span> replace full
                      EHR stack — only layered workflows on top
                    </li>
                    <li className="flex items-start gap-3 text-[#131417]">
                      <span className="text-red-500">❌</span>
                      Did <span className="font-medium">not</span> rebuild
                      billing — focused only on forecasting dashboards
                    </li>
                    <li className="flex items-start gap-3 text-[#131417]">
                      <span className="text-red-500">❌</span>
                      Did <span className="font-medium">not</span> tackle
                      patient-facing portals in v1 — prioritized staff workflows
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
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
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Research & Insights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Research Methods
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-[#131417] font-medium">
                          Method
                        </th>
                        <th className="text-left py-2 text-[#131417] font-medium">
                          Sample
                        </th>
                        <th className="text-left py-2 text-[#131417] font-medium">
                          Duration
                        </th>
                        <th className="text-left py-2 text-[#131417] font-medium">
                          Focus
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#131417]">
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Interviews</td>
                        <td className="py-2">14 staff (5 MD, 6 RN, 3 Admin)</td>
                        <td className="py-2">2 wks</td>
                        <td className="py-2">
                          Pain points in triage, scheduling, forecasting
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Contextual inquiry</td>
                        <td className="py-2">11 live clinic sessions</td>
                        <td className="py-2">3 days</td>
                        <td className="py-2">
                          Task handoffs, interruptions, downtime
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Diary study</td>
                        <td className="py-2">9 staff (mixed roles)</td>
                        <td className="py-2">2 wks</td>
                        <td className="py-2">
                          Daily frustrations + time sinks
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Workflow audits</td>
                        <td className="py-2">1,200 inbox items, 150 appts</td>
                        <td className="py-2">4 wks</td>
                        <td className="py-2">
                          Handling time, delay %, no-show rate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Key Insights
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-[16px] p-4 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-blue-800 mb-1">
                      Inbox Triage = ~5–8 hrs/wk per clinician
                    </p>
                    <p className="text-sm text-blue-700">
                      → <span className="font-medium">AI Inbox Triage</span>{" "}
                      (SLA + risk sorting)
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-orange-800 mb-1">
                      Nurses missed 18% of urgent handoffs
                    </p>
                    <p className="text-sm text-orange-700">
                      →{" "}
                      <span className="font-medium">
                        Unified inbox + handoff flags
                      </span>
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-[16px] p-4 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-purple-800 mb-1">
                      Admins reliant on Excel; monthly lag
                    </p>
                    <p className="text-sm text-purple-700">
                      →{" "}
                      <span className="font-medium">
                        Real-time forecasting dashboard
                      </span>
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-[16px] p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-green-800 mb-1">
                      Staff wary of "black box AI"
                    </p>
                    <p className="text-sm text-green-700">
                      →{" "}
                      <span className="font-medium">
                        Confidence badges + override toggles
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer">
              <h3 className="text-lg font-medium text-green-800 mb-4">
                Key Quotes from Research
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
                  "Forecasting is basically a guess until month close — then
                  it's too late."
                  <cite className="block text-xs text-green-600 mt-1 not-italic">
                    — Admin, Clinic C
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
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

        {/* Key Features */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
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
                → Improved response times and reduced missed communications
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

        {/* Results & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Results & Impact
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Quantitative Results
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">Avg triage time/item</span>
                    <span className="font-medium text-green-600">
                      ↓42% (2m15s → 1m18s)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">On-time follow-ups</span>
                    <span className="font-medium text-blue-600">
                      ↑18% (72% → 85.3%)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">No-show rate</span>
                    <span className="font-medium text-purple-600">
                      ↓2.4pts (9.8% → 7.4%)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">
                      Admin overtime hrs/wk
                    </span>
                    <span className="font-medium text-orange-600">
                      ↓4.4hrs (12.5 → 8.1)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">
                      Clinician override of AI
                    </span>
                    <span className="font-medium text-green-600">
                      11% (below guardrail)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium text-[#131417] mb-4">
                    Measurement Framework
                  </h3>
                  <p className="text-sm text-[#131417] mb-3">
                    Pilot across{" "}
                    <span className="font-medium">
                      3 clinics, n=65 staff, 6 weeks
                    </span>
                  </p>
                  <p className="text-sm text-[#131417]">
                    Guardrails: ≤10% false positives, override &lt;15%, fairness
                    audits
                  </p>
                </div>

                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Key Learnings
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "Trust &gt; Automation: Explainability (chips, overrides)
                    was as critical as model accuracy."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Key Learning
                    </cite>
                  </blockquote>

                  <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "Role-based design &gt; one-size-fits-all: Doctors, nurses,
                    and admins each needed tailored dashboards."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Design Insight
                    </cite>
                  </blockquote>

                  <blockquote className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "Systems thinking: Success hinged not just on UI polish, but
                    on data flows, HIPAA boundaries, and auditability."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Architectural Learning
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Reflections & Future Roadmap
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  What I Learned
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">
                        Trust &gt; Automation:
                      </span>{" "}
                      Explainability (chips, overrides) was as critical as model
                      accuracy
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">
                        Role-based design &gt; one-size-fits-all:
                      </span>{" "}
                      Doctors, nurses, and admins each needed tailored
                      dashboards
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">Systems thinking:</span>{" "}
                      Success hinged not just on UI polish, but on data flows,
                      HIPAA boundaries, and auditability
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  What I'd Do Next
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">
                        Predictive Staffing Optimization
                      </span>{" "}
                      → AI shift planning to cut overtime 15–20%
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">HL7/FHIR Integration</span>{" "}
                      → expand interoperability across EHR vendors
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">Sentiment Analysis</span> →
                      real-time patient feedback loops
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <span className="font-medium">Scenario Planning</span> →
                      financial what-if models for hospital admins
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Related Case Studies */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <RelatedCaseStudies currentCaseStudyId="medico" />
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
