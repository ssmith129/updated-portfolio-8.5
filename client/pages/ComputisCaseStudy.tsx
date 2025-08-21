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
  Coins,
  FileText,
  Search,
  Settings,
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

export default function ComputisCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

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
          <span className="inline-block bg-[#f59e0b] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6">
            FinTech UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] tracking-[-1.2px] mb-6">
            Computis – Crypto Tax Engine
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-[800px]">
            Transforming a backend script into an enterprise-grade, CPA-first SaaS platform
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full aspect-[1.85] bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center border border-amber-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer group">
          <div className="text-center cursor-pointer flex flex-col">
            <Coins className="w-16 h-16 text-amber-600 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <p className="text-amber-600 font-medium">Computis Platform Preview</p>
            <p className="text-sm text-amber-400 mt-1">
              Crypto tax automation platform
            </p>
          </div>
        </div>
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
                    From command-line script to CPA-first enterprise SaaS
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
                        Platform
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        Web SaaS (Desktop-first)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                        Duration
                      </p>
                      <p className="text-base font-medium text-[#131417]">
                        10 months
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
                      <p className="text-xl font-bold text-green-600 mb-1">↓ 45%</p>
                      <p className="text-sm text-[#9FA0A3]">CPA onboarding time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-amber-600 mb-1">↑ 32%</p>
                      <p className="text-sm text-[#9FA0A3]">demo-to-conversion</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600 mb-1">↓ 85%</p>
                      <p className="text-sm text-[#9FA0A3]">reliance on engineers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-blue-600 mb-1">↑</p>
                      <p className="text-sm text-[#9FA0A3]">enterprise positioning</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-[16px] p-6 border-l-4 border-amber-500">
                  <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
                    🚀 Executive Context
                  </h3>
                  <p className="text-base text-[#131417] leading-[150%]">
                    We weren't just designing a UI. We were re-architecting trust in crypto tax compliance by transforming a Python command-line script into a{" "}
                    <span className="font-medium">CPA-first enterprise platform</span> that combined automation with transparency.
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
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-amber-600 cursor-pointer">
              Executive Context
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Role
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Lead Product Designer (Founding Designer)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Company
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Computis Inc.
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Platform
                </h3>
                <p className="text-lg font-medium text-[#131417]">Web SaaS (Desktop-first, responsive)</p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Duration
                </h3>
                <p className="text-lg font-medium text-[#131417]">10 months</p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Team
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  CTO, PM, 2 Engineers, Selecto Agency
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Tools
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Figma, Miro, Jira, Webflow, Notion, GA
                </p>
              </div>
            </div>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-[20px] p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-600" />
                Key Impact Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={45}
                    className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ CPA onboarding time
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
                    ↓ reliance on engineers
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 block">✓</span>
                  <p className="text-sm text-[#9FA0A3]">
                    enterprise CPA firm partnerships
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 rounded-[20px] p-6 border-l-4 border-slate-600">
              <h3 className="text-lg font-medium text-[#131417] mb-4">Mission Statement</h3>
              <blockquote className="text-lg italic text-[#131417] leading-[150%]">
                "Reposition Computis as a CPA-first enterprise platform that combined automation with transparency — so accountants could trust, adopt, and advocate for it."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Problem & Opportunity
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 rounded-[20px] p-6 border border-red-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Initial State
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    No UI or dashboard
                  </li>
                  <li className="flex items-start gap-3 text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Manual classification via hardcoded scripts
                  </li>
                  <li className="flex items-start gap-3 text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    No audit trail or version control
                  </li>
                  <li className="flex items-start gap-3 text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    CSV-only outputs
                  </li>
                  <li className="flex items-start gap-3 text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    High reliance on developers
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-[20px] p-6 border border-green-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Opportunity
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Empower CPAs to act independently
                  </li>
                  <li className="flex items-start gap-3 text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Build audit-first design with traceability
                  </li>
                  <li className="flex items-start gap-3 text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Reduce manual classification with explainable AI
                  </li>
                  <li className="flex items-start gap-3 text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Generate IRS 8949 + QuickBooks-ready exports
                  </li>
                  <li className="flex items-start gap-3 text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Scale for DAOs, hedge funds, and multi-client firms
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 rounded-[20px] p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-[#131417] mb-4">Core Design Principle</h3>
              <p className="text-lg text-[#131417] leading-[150%] mb-4">
                <span className="font-semibold">Transparency &gt; Automation.</span>
              </p>
              <p className="text-[#131417]">
                Automation had to <em>support human expertise</em>, not replace it.
              </p>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Research → Insights → Design
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Methods
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      1:1 CPA + analyst interviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Workflow shadowing of ingestion → tagging → reporting
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Usage audits (GA, Mixpanel)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Competitor teardown (TaxBit, Cryptio, CoinTracker, ZenLedger)
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
                      Distrust of automation
                    </p>
                    <p className="text-sm text-red-700">
                      AI needed to show reasoning + allow override
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-orange-800 mb-1">
                      No audit trail
                    </p>
                    <p className="text-sm text-orange-700">
                      Compliance workflows broken
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-[16px] p-4 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-yellow-800 mb-1">
                      FMV reconciliation error-prone
                    </p>
                    <p className="text-sm text-yellow-700">
                      Needed anomaly dashboards
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-[16px] p-4 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-blue-800 mb-1">
                      High manual effort
                    </p>
                    <p className="text-sm text-blue-700">
                      Bulk actions & rule builder essential
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8 transition-all duration-300 hover:text-amber-600 cursor-pointer">
            Personas & Journeys
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* David (CPA) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">
                    David
                  </h3>
                  <p className="text-[#9FA0A3] font-medium">
                    CPA
                  </p>
                  <p className="text-sm text-[#9FA0A3]">15+ years experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-[16px] border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">
                    Needs
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Rule builder with transparency</li>
                    <li>• Audit logs for compliance</li>
                    <li>• QuickBooks-ready exports</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    Overreliance on engineers, no classification transparency
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-[16px] border border-blue-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">
                    Journey
                  </h4>
                  <p className="text-sm text-blue-700">
                    Upload → Classify → Review → Export → Audit
                  </p>
                </div>
              </div>
            </div>

            {/* Mya (Ops Analyst) Persona */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#131417] mb-1">
                    Mya
                  </h3>
                  <p className="text-[#9FA0A3] font-medium">
                    Ops Analyst
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
                    <li>• Anomaly detection for FMV errors</li>
                    <li>• Bulk tagging capabilities</li>
                    <li>• Ingestion validation tools</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    FMV errors, no bulk triage, no edit history
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-[16px] border border-purple-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-purple-800 mb-2">
                    Journey
                  </h4>
                  <p className="text-sm text-purple-700">
                    Ingest → Review → Classify → Export
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              System Architecture & UX
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#131417] mb-6">
                Modular Information Architecture
              </h3>
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-[20px] p-6 border border-slate-200">
                <div className="flex flex-wrap items-center gap-3 text-center">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">Clients</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">Wallets</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium">Transactions</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-medium">Rules</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">Reports</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium">Exports</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Role-Specific Views
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-[16px] border-l-4 border-blue-500">
                    <h4 className="font-medium text-blue-800 mb-2">CPA</h4>
                    <p className="text-sm text-blue-700">Rule builder, audit logs, overrides</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-[16px] border-l-4 border-purple-500">
                    <h4 className="font-medium text-purple-800 mb-2">Analyst</h4>
                    <p className="text-sm text-purple-700">Ingestion review, anomaly resolution, tagging</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-[16px] border-l-4 border-green-500">
                    <h4 className="font-medium text-green-800 mb-2">Admin</h4>
                    <p className="text-sm text-green-700">Multi-client management, permissions, activity logs</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Key UX Patterns
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>AI Confidence Chips:</strong> Accept/Reject + rationale tooltip
                    </span>
                  </div>
                  <div className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>Audit Trail Drawer:</strong> Inline logging, export-ready
                    </span>
                  </div>
                  <div className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>Anomaly Flags:</strong> Color-coded, hover explainers
                    </span>
                  </div>
                  <div className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>Rule Builder:</strong> Drag/drop logic with before/after preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Competitive Analysis
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-medium text-[#131417]">Feature</th>
                    <th className="text-center p-4 font-medium text-amber-600">Computis</th>
                    <th className="text-center p-4 font-medium text-[#9FA0A3]">TaxBit</th>
                    <th className="text-center p-4 font-medium text-[#9FA0A3]">Cryptio</th>
                    <th className="text-center p-4 font-medium text-[#9FA0A3]">CoinTracker</th>
                    <th className="text-center p-4 font-medium text-[#9FA0A3]">ZenLedger</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[#131417]">Rule Engine</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[#131417]">AI + Override</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[#131417]">Audit Trail</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[#131417]">QuickBooks Export</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#131417]">FMV Dashboard</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-4"><span className="text-amber-500">⚠️</span></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center p-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-4 flex items-center gap-2">
                💡 Key Differentiators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-green-700">
                    Only platform with CPA-first visual rule builder
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-green-700">
                    Audit-ready architecture with version logs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-green-700">
                    Explainable AI with confidence badges
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-green-700">
                    Scalable modular system
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration & Handoff */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <div className="bg-[#131417] text-white rounded-[25px] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-6">
              Collaboration & Handoff
            </h2>

            <div className="bg-white/10 rounded-[20px] p-6 mb-8 transition-all duration-300 hover:bg-white/20 cursor-pointer">
              <h3 className="text-xl font-medium mb-4">At Staff Level Impact</h3>
              <p className="text-lg leading-[150%] mb-4">
                At Staff level, I wasn't just designing — I was <strong>reducing ambiguity for engineering</strong>:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-[16px] p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Design Specifications
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Annotated Figma specs with edge cases</li>
                  <li>• QA checklists for audit workflows</li>
                  <li>• Accessibility validation (WCAG AA, Axe, Lighthouse)</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-[16px] p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Communication
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Loom walkthroughs for each module</li>
                  <li>• Async threads in Slack to keep velocity high</li>
                  <li>• Regular design review sessions</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-800/20 rounded-[20px] p-6 border border-green-500/30">
              <blockquote className="text-lg italic leading-[150%] mb-4">
                "The clarity of your design handoffs made engineering 10x faster."
              </blockquote>
              <cite className="text-sm text-gray-400 not-italic">
                — Lead Frontend Developer
              </cite>
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
                    <span className="text-[#9FA0A3]">
                      CPA onboarding time
                    </span>
                    <span className="font-medium text-green-600">↓45% (2.5h → 1.4h)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">Demo conversions</span>
                    <span className="font-medium text-amber-600">↑32%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">
                      Reliance on engineers
                    </span>
                    <span className="font-medium text-purple-600">↓85%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">Anomaly detection coverage</span>
                    <span className="font-medium text-blue-600">↑150%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Qualitative Feedback
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "First crypto tax tool purpose-built for accountants."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — CPA Client
                    </cite>
                  </blockquote>

                  <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "Clients say the dashboard helped them trust our process."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Business Development Lead
                    </cite>
                  </blockquote>

                  <blockquote className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "I feel in control with AI suggestions."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Operations Analyst
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-[20px] p-6 border border-green-200">
              <h3 className="text-lg font-medium text-[#131417] mb-4">
                Business Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    Enabled enterprise CPA firm sales
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    Reduced dev support tickets, enabling scale
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-[#131417]">
                    Differentiated Computis from opaque competitors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Reflections
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Key Learnings
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>Trust is a UX principle:</strong> surfacing AI logic built credibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>System design &gt; screens:</strong> modular IA unlocked scalability
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>AI + Human collaboration:</strong> override control flipped skepticism into adoption
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      <strong>Design → Business linkage:</strong> every UX choice tied to churn reduction, higher conversions, and fewer support costs
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Design Philosophy
                </h3>
                <div className="bg-amber-50 rounded-[20px] p-6 border-l-4 border-amber-500">
                  <blockquote className="text-lg italic text-[#131417] leading-[150%] mb-4">
                    "Design isn't what it looks like — it's how a CPA explains a tax report to a regulator without an engineer in the room."
                  </blockquote>
                </div>

                <div className="mt-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-[16px] p-6 text-center">
                  <h4 className="text-lg font-medium text-[#131417] mb-2">Platform Tagline</h4>
                  <p className="text-xl font-bold text-amber-700">
                    "Transparency. Control. Trust."
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
                  Enterprise-grade crypto tax automation platform with audit-ready transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
