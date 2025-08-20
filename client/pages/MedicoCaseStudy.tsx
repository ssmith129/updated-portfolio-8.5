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
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";

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
  const [startMetricsAnimation, setStartMetricsAnimation] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !startMetricsAnimation) {
          setStartMetricsAnimation(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation a bit before element is fully visible
      },
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [startMetricsAnimation]);

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
            Medico – Hospital Management System
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-[800px]">
            Transforming siloed hospital workflows into a real-time, AI-driven
            clinical operations platform
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className="w-full aspect-[1.85] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer group"
        >
          <a
            href="https://medico-2ftf.vercel.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center cursor-pointer flex flex-col"
          >
            <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <p className="text-blue-600 font-medium">Medico Platform Preview</p>
            <p className="text-sm text-blue-400 mt-1">
              Click to view full interface
            </p>
          </a>
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
                  Lead UX/Product Designer
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Platform
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  SaaS Hospital Management (Web + Mobile)
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Duration
                </h3>
                <p className="text-lg font-medium text-[#131417]">12 months</p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Team
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  CTO, PM, 3 Engineers, Medical Advisor
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Users
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Clinic Admins, Doctors, Nurses
                </p>
              </div>
              <div className="space-y-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
                  Tools
                </h3>
                <p className="text-lg font-medium text-[#131417]">
                  Figma, Miro, Azure DevOps
                </p>
              </div>
            </div>

            <div
              ref={metricsRef}
              className="bg-gradient-to-r from-blue-50 to-green-50 rounded-[20px] p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Key Impact Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={38}
                    className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ admin time spent on scheduling
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={27}
                    className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↑ doctor-patient face time
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={22}
                    className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    ↓ delays in diagnosis workflows
                  </p>
                </div>
                <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <AnimatedCounter
                    value={83}
                    className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#9FA0A3]">
                    staff adoption preference
                  </p>
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
                  Multiple disconnected systems for EHR, HR, billing
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Manual scheduling & duplicate data entry
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  No mobile accessibility for doctors
                </li>
                <li className="flex items-start gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Delayed reporting and analytics
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 sm:p-8 border border-green-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                After: Unified AI-Driven Platform
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Consolidated workflows in one cloud-native hub
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  AI-driven staffing forecasts & revenue predictions
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Mobile-first accessibility for bedside care
                </li>
                <li className="flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  Real-time dashboards & audit traceability
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
                  Hospital staff lose efficiency in fragmented systems — admins
                  juggle reporting across HR, billing, and schedules while
                  doctors waste time navigating multiple interfaces, reducing
                  patient care quality.
                </p>
              </div>

              <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold text-[#131417] mb-4">
                  Opportunity
                </h3>
                <p className="text-lg text-[#131417] leading-[150%] mb-4">
                  Design a unified SaaS hub that:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                    Consolidates workflows into one intelligent platform
                  </li>
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                    Provides predictive AI for proactive healthcare management
                  </li>
                  <li className="flex items-start gap-3 text-[#131417]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                    Enables mobile-first care delivery
                  </li>
                </ul>
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
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Shadowing doctors and nurses during shifts
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Interviews with hospital administrators
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Analysis of Epic & Cerner workflow inefficiencies
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Time & motion studies of administrative tasks
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
                      Context Switching Fatigue
                    </p>
                    <p className="text-sm text-red-700">
                      Doctors waste 30+ minutes daily switching between systems
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-orange-800 mb-1">
                      Administrative Burden
                    </p>
                    <p className="text-sm text-orange-700">
                      60% of admin time lost to manual reporting & scheduling
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-[16px] p-4 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    <p className="text-sm font-medium text-yellow-800 mb-1">
                      Mobile Dependency
                    </p>
                    <p className="text-sm text-yellow-700">
                      72% of clinical decisions happen away from desktop
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200 transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer">
              <h3 className="text-lg font-medium text-green-800 mb-4">
                Feature Outcomes from Research
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">
                    AI-powered staffing optimizer with shift predictions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">
                    Mobile-first patient rounds dashboard
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">
                    Smart inbox with NLP-powered triage
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">
                    Predictive revenue & cost forecasting
                  </span>
                </div>
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
                    <li>• Quick patient data access at bedside</li>
                    <li>• AI diagnosis support tools</li>
                    <li>• Mobile-optimized interfaces</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    Fragmented systems requiring multiple logins and interfaces
                    during patient rounds
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
                    <li>• Automated scheduling & staffing</li>
                    <li>• Financial forecasting tools</li>
                    <li>• Compliance reporting automation</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    Manual report generation across multiple systems with no
                    predictive insights
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
                    <li>• Real-time patient status updates</li>
                    <li>• Task prioritization assistance</li>
                    <li>• Quick medication verification</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-[16px] border border-red-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">
                    Pain Points
                  </h4>
                  <p className="text-sm text-red-700">
                    Information silos causing delays in patient care
                    coordination
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
                AI Staffing Optimizer
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                ML-driven shift allocations & demand forecasting
              </p>
              <p className="text-sm text-green-600 font-medium">
                → Reduced manual scheduling time by 60%, improved coverage by
                25%
              </p>
              <div className="mt-5 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-600" />
                Mobile Patient Rounds
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                Touch-optimized, offline-ready bedside interface
              </p>
              <p className="text-sm text-green-600 font-medium">
                → Increased doctor-patient interaction time by 27%
              </p>
              <div className="mt-5 h-32 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Predictive Analytics Dashboard
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                Revenue forecasts & anomaly detection
              </p>
              <p className="text-sm text-green-600 font-medium">
                → Improved financial planning accuracy by 40%
              </p>
              <div className="mt-5 h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-medium text-[#131417] mb-3 transition-all duration-300 hover:text-blue-600 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-600" />
                Smart Inbox with NLP Triage
              </h3>
              <p className="text-[#9FA0A3] text-sm mb-3">
                AI-powered message prioritization & routing
              </p>
              <p className="text-sm text-green-600 font-medium">
                → Reduced communication delays by 35%, improved response times
              </p>
              <div className="mt-5 h-32 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
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
                      Admin scheduling time
                    </span>
                    <span className="font-medium text-green-600">↓38%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">Doctor-patient time</span>
                    <span className="font-medium text-blue-600">↑27%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">
                      Diagnosis workflow delays
                    </span>
                    <span className="font-medium text-purple-600">↓22%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">Staff adoption rate</span>
                    <span className="font-medium text-orange-600">83%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:rounded-lg cursor-pointer">
                    <span className="text-[#9FA0A3]">System response time</span>
                    <span className="font-medium text-red-600">↓45%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Qualitative Feedback
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "Finally, a system that thinks like we do. I can focus on
                    patients, not screens."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Dr. Sarah, Attending Physician
                    </cite>
                  </blockquote>

                  <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "The AI predictions help us stay ahead of staffing needs.
                    We're more proactive than reactive now."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Lisa, Hospital Administrator
                    </cite>
                  </blockquote>

                  <blockquote className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-[16px] italic transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                    "I wish every healthcare tech company designed with this
                    level of understanding."
                    <cite className="block text-sm text-[#9FA0A3] mt-2 not-italic">
                      — Chief Medical Officer
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
                      Healthcare UX requires deep empathy for life-critical
                      workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      AI should augment clinical judgment, never replace it
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Mobile-first design is essential for point-of-care
                      workflows
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#131417] mb-6">
                  Next Steps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      AI diagnosis support with medical imaging integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Patient sentiment analysis for care quality insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#131417]">
                      Expanded interoperability with legacy EHR systems
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
                <Heart className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Medico Platform Preview
                </h3>
                <p className="text-gray-600">
                  Comprehensive hospital management interface with AI-driven
                  insights
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
