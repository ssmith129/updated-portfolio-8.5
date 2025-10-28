import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Target,
  Zap,
  CheckCircle,
  Quote,
  AlertCircle,
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
  prefix = "",
  className,
  startAnimation,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className: string;
  startAnimation: boolean;
}) => {
  const animatedValue = useCountAnimation(value, 2000, startAnimation);
  const displayValue = Math.floor(animatedValue).toString();

  return (
    <div className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
};

export default function ComputisCaseStudy() {
  const [startMetricsAnimation, setStartMetricsAnimation] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartMetricsAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
            FinTech UX Case Study
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
            Computis: Turning CPAs from AI Skeptics to Power Users
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#9CA3AF] leading-relaxed tracking-tight max-w-5xl">
            Transforming a crypto tax backend into a transparent, audit-ready
            platform that enabled self-service workflows and secured 3
            enterprise partnerships in 6 months
          </p>
        </div>
      </header>

      {/* Hero Video/Image */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFB3] rounded-[16px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur"></div>
            {/* Hero Dashboard Interface - Placeholder: 1400x800px */}
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

      <div className="flex flex-col relative mt-5 text-center z-10 mb-12">
        <a
          href="https://computis.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D4FF] font-semibold underline text-lg hover:text-[#00FFB3] transition-colors duration-300"
        >
          View Live Prototype
        </a>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-20 relative z-10">
        {/* Project Details & Impact at a Glance */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Project Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-wide">
                  Role
                </h3>
                <p className="text-lg font-medium text-white">
                  Founding Lead Product Designer
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-wide">
                  Team
                </h3>
                <p className="text-lg font-medium text-white">
                  CTO, PM, 2 Engineers, Agency Partner
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-wide">
                  Duration
                </h3>
                <p className="text-lg font-medium text-white">10 months</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#888888] uppercase tracking-wide">
                  Tools
                </h3>
                <p className="text-lg font-medium text-white">
                  Figma, Miro, Notion, Jira, Mixpanel
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#00FFB3]/10 rounded-[20px] p-6 sm:p-8 border border-[#00D4FF]/20">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#00D4FF]" />
                Impact at a Glance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <AnimatedCounter
                    value={45}
                    prefix="↓ "
                    className="text-2xl sm:text-3xl font-bold text-[#00FFB3] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">CPA onboarding time</p>
                  <p className="text-xs text-[#666666] mt-1">2.5h → 1.4h</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    value={32}
                    prefix="→ "
                    className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">demo-to-conversion</p>
                  <p className="text-xs text-[#666666] mt-1">18% → 50%</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    value={85}
                    prefix="↓ "
                    className="text-2xl sm:text-3xl font-bold text-[#8B5CF6] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">
                    engineering dependency
                  </p>
                  <p className="text-xs text-[#666666] mt-1">94% → 9%</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    value={150}
                    prefix="→ "
                    className="text-2xl sm:text-3xl font-bold text-[#F59E0B] mb-1"
                    startAnimation={startMetricsAnimation}
                  />
                  <p className="text-sm text-[#888888]">anomaly detection</p>
                  <p className="text-xs text-[#666666] mt-1">
                    coverage increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Design Problem */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              The Design Problem Wasn't UX—It Was Trust
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[#00D4FF] mb-4">
                  The Business Context
                </h3>
                <p className="text-lg text-[#D1D5DB] leading-relaxed mb-4">
                  Computis had powerful crypto tax automation technology built
                  on Python scripts, but:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#D1D5DB]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>CPAs refused to adopt tools they couldn't audit</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#D1D5DB]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Sales demos required engineer-led terminal sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#D1D5DB]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Every client onboarding needed custom scripting</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#D1D5DB]">
                    <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Competitors (TaxBit, Cryptio) had polished UIs but lacked
                      CPA workflow depth
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#EF4444]/10 to-[#DC2626]/10 rounded-[16px] p-6 border-l-4 border-[#EF4444]">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-white italic mb-2">
                      "I don't trust black-box automation with IRS filings. Show
                      me the logic, or I'll do it manually."
                    </p>
                    <p className="text-sm text-[#888888]">
                      — Senior Tax Manager, Big 4 Firm
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#00FFB3] mb-4">
                  The Strategic Realization
                </h3>
                <p className="text-lg text-[#D1D5DB] leading-relaxed">
                  CPAs didn't need <em>simpler</em> software—they needed{" "}
                  <strong className="text-white">
                    transparency at the point of automation
                  </strong>
                  .
                </p>
              </div>

              {/* Before Workflow Diagram */}
              <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A]">
                <p className="text-sm text-[#888888] mb-3">
                  Before: Manual Workflow Pain Points
                </p>
                <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A] cursor-pointer hover:border-[#00D4FF]/50 transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F32e011aed35c4e49b427fb6d0d83bcd4?format=webp&width=800"
                    alt="Current Workflow: CPA Request Process showing pain points - 2.3 day wait, no visibility, and inability to explain results"
                    className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    onClick={() =>
                      setEnlargedImage(
                        "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F32e011aed35c4e49b427fb6d0d83bcd4",
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Research & Discovery
            </h2>

            <p className="text-lg text-[#D1D5DB] leading-relaxed mb-6">
              Over 10 weeks, I led foundational research:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#00D4FF]/10 rounded-[12px] p-4 border border-[#00D4FF]/20">
                <p className="text-white font-medium">
                  8 CPA + tax analyst interviews
                </p>
              </div>
              <div className="bg-[#00FFB3]/10 rounded-[12px] p-4 border border-[#00FFB3]/20">
                <p className="text-white font-medium">
                  6 workflow shadowing sessions
                </p>
              </div>
              <div className="bg-[#8B5CF6]/10 rounded-[12px] p-4 border border-[#8B5CF6]/20">
                <p className="text-white font-medium">
                  Competitive analysis (4 platforms)
                </p>
              </div>
              <div className="bg-[#F59E0B]/10 rounded-[12px] p-4 border border-[#F59E0B]/20">
                <p className="text-white font-medium">
                  4 usability testing cycles
                </p>
              </div>
            </div>

            {/* Research Synthesis */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mb-8">
              <p className="text-sm text-[#888888] mb-3">
                Research Synthesis & Affinity Wall
              </p>
              <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A] cursor-pointer hover:border-[#00D4FF]/50 transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F14db6ee5ab934ef0a8910734977277a5?format=webp&width=800"
                  alt="Research Synthesis: Computis CPA Workflow Study showing 127 insights from 8 CPA interviews + 6 shadowing sessions organized into 5 thematic clusters - Professional Liability, Engineering Dependency, Audit Requirements, Bulk Operations, and Trust & Control"
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F14db6ee5ab934ef0a8910734977277a5",
                    )
                  }
                />
              </div>
            </div>

            {/* Journey Map */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mb-8">
              <p className="text-sm text-[#888888] mb-3">
                Current State Journey Map
              </p>
              <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A] cursor-pointer hover:border-[#00D4FF]/50 transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff47bad46ce2d497b8980e075087e51ea?format=webp&width=800"
                  alt="Current State Journey Map showing 8 workflow steps from Client Intake to Report Generation, with pain points highlighted including manual data gathering, authentication delays, missing transaction data, complex edge cases, 2-3 day engineer wait times, low visibility during script execution, manual classification results verification, and CSV-only export requiring manual formatting"
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff47bad46ce2d497b8980e075087e51ea",
                    )
                  }
                />
              </div>
            </div>

            <h3 className="text-xl font-medium text-[#00D4FF] mb-6">
              Five Critical Insights
            </h3>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#00D4FF]">1.</span> Professional
                  Liability Trumps Efficiency
                </h4>
                <p className="text-[#D1D5DB] mb-2">
                  CPAs must defend every classification to the IRS. "Black-box"
                  AI creates legal risk.
                </p>
                <p className="text-sm text-[#00FFB3]">
                  <strong>Impact:</strong> Transparency became non-negotiable
                </p>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#00D4FF]">2.</span> Engineering
                  Dependency Blocks Scale
                </h4>
                <p className="text-[#D1D5DB] mb-2">
                  85% of CPA time spent on dev tickets. Average turnaround: 2.3
                  days.
                </p>
                <p className="text-sm text-[#00FFB3]">
                  <strong>Impact:</strong> Self-service became core value prop
                </p>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#00D4FF]">3.</span> Audit Trails Drive
                  Enterprise Sales
                </h4>
                <p className="text-[#D1D5DB] mb-2">
                  3/4 competitors lacked history. This became Computis's moat.
                </p>
                <p className="text-sm text-[#00FFB3]">
                  <strong>Impact:</strong> Audit drawer prioritized in MVP
                </p>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#00D4FF]">4.</span> Bulk Operations
                  Required
                </h4>
                <p className="text-[#D1D5DB] mb-2">
                  Manual: 12 min/transaction. Average client: 3,000+
                  transactions.
                </p>
                <p className="text-sm text-[#00FFB3]">
                  <strong>Impact:</strong> Rule builder with scale designed
                </p>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#00D4FF]">5.</span> Trust Through
                  Control
                </h4>
                <p className="text-[#D1D5DB] mb-2">
                  CPAs wanted assistance, not replacement. Override tested as
                  must-have.
                </p>
                <p className="text-sm text-[#00FFB3]">
                  <strong>Impact:</strong> Graduated autonomy system built
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Positioning */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Competitive Positioning
            </h2>

            <h3 className="text-xl font-medium text-[#00D4FF] mb-4">
              Market Gaps
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-[#D1D5DB]">
                <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <span>Consumer tools lack audit-grade compliance features</span>
              </li>
              <li className="flex items-start gap-3 text-[#D1D5DB]">
                <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <span>
                  Enterprise platforms use opaque AI that CPAs can't validate
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#D1D5DB]">
                <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <span>
                  No platforms designed for CPA-first workflows with client
                  management
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#D1D5DB]">
                <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <span>
                  Existing tools force reliance on engineering teams for rule
                  customization
                </span>
              </li>
            </ul>

            {/* Competitive Matrix */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mb-8">
              <p className="text-sm text-[#888888] mb-3">
                Competitive Analysis Matrix
              </p>
              <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A] cursor-pointer hover:border-[#00D4FF]/50 transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7657ed2bcdc34dad8eace29a2a908374?format=webp&width=800"
                  alt="Competitive Landscape Analysis comparing 5 crypto tax platforms (Computis, TaxBit, Cryptio, CoinTracker, Koinly) across key features including AI Explainability, Confidence Levels, One-Click Override, Real-Time Audit Trail, and CPA-First Design. Computis shows full support across all features while competitors have partial or no implementation"
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7657ed2bcdc34dad8eace29a2a908374",
                    )
                  }
                />
              </div>
            </div>

            <h3 className="text-xl font-medium text-[#00FFB3] mb-4">
              Strategic Differentiators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[12px] p-4 border border-[#00FFB3]/20">
                <CheckCircle className="w-5 h-5 text-[#00FFB3] mb-2" />
                <p className="text-white">
                  Only platform designed from ground up for CPA workflows
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[12px] p-4 border border-[#00FFB3]/20">
                <CheckCircle className="w-5 h-5 text-[#00FFB3] mb-2" />
                <p className="text-white">
                  Explainable AI with confidence chips and rationale tooltips
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[12px] p-4 border border-[#00FFB3]/20">
                <CheckCircle className="w-5 h-5 text-[#00FFB3] mb-2" />
                <p className="text-white">
                  Visual rule builder eliminating engineering dependencies
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[12px] p-4 border border-[#00FFB3]/20">
                <CheckCircle className="w-5 h-5 text-[#00FFB3] mb-2" />
                <p className="text-white">
                  Complete audit trail system for compliance validation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Design Process
            </h2>

            <p className="text-lg text-[#D1D5DB] leading-relaxed mb-6">
              I applied a{" "}
              <strong className="text-white">
                trust-first, professional-centered
              </strong>{" "}
              approach across 10 months:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#00D4FF] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">
                    Journey Mapping
                  </h4>
                  <p className="text-[#D1D5DB]">
                    Documented workflows for CPA, Analyst, Admin personas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#00FFB3] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">
                    Trust Framework
                  </h4>
                  <p className="text-[#D1D5DB]">
                    Established design principles: transparency &gt; efficiency,
                    augmentation &gt; automation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">
                    Rapid Prototyping
                  </h4>
                  <p className="text-[#D1D5DB]">
                    Sketches → wireframes → interactive prototypes with
                    continuous CPA validation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">
                    Design System
                  </h4>
                  <p className="text-[#D1D5DB]">
                    Built component library optimized for extended professional
                    use
                  </p>
                </div>
              </div>
            </div>

            {/* Design Process Evolution */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A]">
              <p className="text-sm text-[#888888] mb-3">
                Design Process Evolution
              </p>
              <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A] cursor-pointer hover:border-[#00D4FF]/50 transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F80d53d6a9a89470fad73bd3f5f5a294e?format=webp&width=800"
                  alt="Design Process Evolution showing progression from Low-Fi wireframes to Mid-Fi mockups to Hi-Fi final designs, demonstrating iterative refinement of the Computis dashboard interface with increasing detail and polish at each stage"
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F80d53d6a9a89470fad73bd3f5f5a294e",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution: Five Design Decisions */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1200">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Solution: Five Design Decisions
            </h2>

            <div className="space-y-12">
              {/* Decision 1: AI Confidence Chips */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">1.</span>
                  <h3 className="text-xl font-semibold text-white">
                    AI Confidence Chips + Override Control
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Challenge</p>
                    <p className="text-[#D1D5DB]">CPAs distrusted automation</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Solution</p>
                    <p className="text-[#D1D5DB]">
                      Confidence-level badges (High/Medium/Low) with hover
                      reasoning + one-click override
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Impact</p>
                    <p className="text-[#00FFB3] font-medium">
                      ↓70% false positives; → AI trust & adoption
                    </p>
                  </div>
                </div>
                {/* AI Confidence Tags Video */}
                <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    >
                      <source
                        src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F1722a6d109794969af99985a7fca6660?alt=media&token=7fa5119b-32c1-4ce6-8070-9f7e8c23fd25&apiKey=ba69a23156414a589de97341511272c9"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Decision 2: Inline Audit Trail */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00FFB3]">2.</span>
                  <h3 className="text-xl font-semibold text-white">
                    Inline Audit Trail Drawer
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Challenge</p>
                    <p className="text-[#D1D5DB]">No compliance visibility</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Solution</p>
                    <p className="text-[#D1D5DB]">
                      Persistent contextual audit log showing classification
                      history, rule changes, override rationale
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Impact</p>
                    <p className="text-[#00FFB3] font-medium">
                      ↓40% compliance tickets; enabled independent IRS audit
                      defense
                    </p>
                  </div>
                </div>
                {/* Inline Audit Drawer Video */}
                <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    >
                      <source
                        src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F328b2a22e9dc4482abc79aae2356f2a8?alt=media&token=4362e7d0-46ec-4c84-ab13-33ca66c1c387&apiKey=ba69a23156414a589de97341511272c9"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Decision 3: Visual Rule Builder */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#8B5CF6]">3.</span>
                  <h3 className="text-xl font-semibold text-white">
                    Visual Rule Builder (No-Code)
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Challenge</p>
                    <p className="text-[#D1D5DB]">Engineer dependency</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Solution</p>
                    <p className="text-[#D1D5DB]">
                      Drag-and-drop natural language rule builder with real-time
                      preview
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Impact</p>
                    <p className="text-[#00FFB3] font-medium">
                      ↓85% engineering reliance; →32% conversions
                    </p>
                  </div>
                </div>
                {/* Rule Builder Video */}
                <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    >
                      <source
                        src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fd51b7487f9ca480f8bc164b8b0480065?alt=media&token=beadcbfa-6a54-4c0e-abb8-1fcab07b08be&apiKey=ba69a23156414a589de97341511272c9"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Decision 4: Anomaly Detection */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#F59E0B]">4.</span>
                  <h3 className="text-xl font-semibold text-white">
                    Contextual Anomaly Detection
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Challenge</p>
                    <p className="text-[#D1D5DB]">Hidden FMV errors</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Solution</p>
                    <p className="text-[#D1D5DB]">
                      Inline color-coded flags (🔴 Critical, 🟡 Warning, 🟢 OK)
                      with hover tooltips
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Impact</p>
                    <p className="text-[#00FFB3] font-medium">
                      →150% anomaly detection; ↓ manual triage
                    </p>
                  </div>
                </div>
                {/* Data Anomaly Detection Video */}
                <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    >
                      <source
                        src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F683506136ed1452fb80126c837c4bcbc?alt=media&token=63897377-0463-4eae-80d5-6c4f67c27c3e&apiKey=ba69a23156414a589de97341511272c9"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Decision 5: Multi-Tenant Dashboard */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">5.</span>
                  <h3 className="text-xl font-semibold text-white">
                    Role-Based Multi-Tenant Dashboard
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Challenge</p>
                    <p className="text-[#D1D5DB]">
                      CPA firms manage 100+ clients
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Solution</p>
                    <p className="text-[#D1D5DB]">
                      Client-scoped views with role permissions
                      (CPA/Analyst/Admin)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#888888] mb-1">Impact</p>
                    <p className="text-[#00FFB3] font-medium">
                      Enabled portfolio-scale management
                    </p>
                  </div>
                </div>
                {/* Multi-Tenant View Video */}
                <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    >
                      <source
                        src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F9ff1d91497864bd9abac4c1b8e51096a?alt=media&token=3025286d-e0ea-40a5-baf8-50688395fcc2&apiKey=ba69a23156414a589de97341511272c9"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design System & Components */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Design System & Components
            </h2>

            <h3 className="text-xl font-medium text-[#00D4FF] mb-6">
              Key Components Built
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">Confidence Chip</h4>
                <p className="text-sm text-[#888888]">
                  3 states (High/Med/Low) with semantic colors
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">Audit Drawer</h4>
                <p className="text-sm text-[#888888]">
                  Persistent right-rail with timestamp timeline
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">
                  Rule Builder Card
                </h4>
                <p className="text-sm text-[#888888]">
                  Drag-drop interface with condition logic
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">Anomaly Flag</h4>
                <p className="text-sm text-[#888888]">
                  Inline severity indicator with tooltip
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">
                  Multi-Select Filter
                </h4>
                <p className="text-sm text-[#888888]">
                  Advanced transaction filtering
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">Data Table</h4>
                <p className="text-sm text-[#888888]">
                  Virtualized, sortable, with bulk actions
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">
                  Toast Notifications
                </h4>
                <p className="text-sm text-[#888888]">
                  Non-blocking feedback system
                </p>
              </div>
              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 border border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-1">Modal Patterns</h4>
                <p className="text-sm text-[#888888]">
                  Confirmation, info, destructive actions
                </p>
              </div>
            </div>

            {/* Design System Overview */}
            <div className="bg-[#1A1A1A] rounded-[16px] p-6 border border-[#2A2A2A]">
              <p className="text-sm text-[#888888] mb-3">
                Design System Overview
              </p>
              <div className="bg-[#0F0F0F] rounded-[12px] overflow-hidden border border-[#2A2A2A] cursor-pointer hover:border-[#00D4FF]/50 transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7505994af24545cea7638777279674a9?format=webp&width=800"
                  alt="Computis Design System showing comprehensive component library including Typography (Display Heading, Section Title, Subsection styles), Color Palette (Primary Blue, Accent Blue, Success Green, Secondary Green, Error Red, Warning Gold, Background, Text Secondary), Spacing System using 8px box base grid, and Component Library featuring Button, Dropdown, Input Field, Confidence Chip, Modal, Toast, Audit Drawer, and Table Row components"
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7505994af24545cea7638777279674a9",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Alignment */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1400">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Stakeholder Alignment: The Override Control Debate
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#EF4444]/10 to-[#DC2626]/10 rounded-[16px] p-6 border-l-4 border-[#EF4444]">
                <h3 className="text-lg font-medium text-[#EF4444] mb-3">
                  Conflict
                </h3>
                <p className="text-[#D1D5DB]">
                  CTO wanted full automation; CPAs demanded override control for
                  liability protection
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#00D4FF] mb-3">
                  My Approach
                </h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] font-bold">1.</span>
                    <span className="text-[#D1D5DB]">
                      Facilitated design workshop with CPA + CTO
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] font-bold">2.</span>
                    <span className="text-[#D1D5DB]">
                      Presented competitor data (40% G2 "black-box" complaints)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4FF] font-bold">3.</span>
                    <span className="text-[#D1D5DB]">
                      Proposed graduated autonomy: High confidence → Auto /
                      Medium → Review / Low → Manual
                    </span>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-[16px] p-6 border-l-4 border-[#00FFB3]">
                <h3 className="text-lg font-medium text-[#00FFB3] mb-3">
                  Outcome
                </h3>
                <p className="text-[#D1D5DB] mb-4">
                  CTO aligned after seeing market positioning demo. Override
                  control became product differentiator. Closed enterprise deal
                  after feature demo.
                </p>
                <div className="bg-[#1A1A1A]/60 rounded-[12px] p-4 flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#00FFB3] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-white italic mb-2">
                      "The first crypto tax tool I'd stake my license on."
                    </p>
                    <p className="text-sm text-[#888888]">— CPA Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Business Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Outcomes & Business Impact
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-[#00D4FF] mb-4">
                  Quantified Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-[#00FFB3]/10 to-transparent rounded-[12px] p-4 border border-[#00FFB3]/20">
                    <p className="text-2xl font-bold text-[#00FFB3] mb-1">
                      ↓45%
                    </p>
                    <p className="text-sm text-[#D1D5DB]">
                      CPA onboarding time (2.5h → 1.4h)
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#00D4FF]/10 to-transparent rounded-[12px] p-4 border border-[#00D4FF]/20">
                    <p className="text-2xl font-bold text-[#00D4FF] mb-1">
                      →32%
                    </p>
                    <p className="text-sm text-[#D1D5DB]">
                      demo-to-conversion rate (18% → 50%)
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-transparent rounded-[12px] p-4 border border-[#8B5CF6]/20">
                    <p className="text-2xl font-bold text-[#8B5CF6] mb-1">
                      ↓85%
                    </p>
                    <p className="text-sm text-[#D1D5DB]">
                      engineering dependency (94% → 9% of tasks)
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#F59E0B]/10 to-transparent rounded-[12px] p-4 border border-[#F59E0B]/20">
                    <p className="text-2xl font-bold text-[#F59E0B] mb-1">
                      →150%
                    </p>
                    <p className="text-sm text-[#D1D5DB]">
                      anomaly detection coverage
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#00FFB3]/10 to-transparent rounded-[12px] p-4 border border-[#00FFB3]/20">
                    <p className="text-2xl font-bold text-[#00FFB3] mb-1">
                      ↓40%
                    </p>
                    <p className="text-sm text-[#D1D5DB]">support tickets</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#00D4FF]/10 to-transparent rounded-[12px] p-4 border border-[#00D4FF]/20">
                    <p className="text-2xl font-bold text-[#00D4FF] mb-1">
                      Zero
                    </p>
                    <p className="text-sm text-[#D1D5DB]">
                      FMV disputes post-launch
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#00FFB3] mb-4">
                  Business Outcomes
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00FFB3] flex-shrink-0 mt-0.5" />
                    <p className="text-[#D1D5DB]">
                      Secured 3 enterprise CPA partnerships in 6 months
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00FFB3] flex-shrink-0 mt-0.5" />
                    <p className="text-[#D1D5DB]">
                      Scaled to DAOs, hedge funds, and multi-client firms
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00FFB3] flex-shrink-0 mt-0.5" />
                    <p className="text-[#D1D5DB]">
                      Reduced support overhead enabling leaner ops team
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00FFB3] flex-shrink-0 mt-0.5" />
                    <p className="text-[#D1D5DB]">
                      Transparency positioning drove competitive differentiation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[12px] p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-white italic mb-2">
                      "Your handoffs made us 10x faster. Edge case docs were
                      incredible."
                    </p>
                    <p className="text-sm text-[#888888]">— Engineering Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1600">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Key Learnings
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-transparent rounded-[16px] p-6 border-l-4 border-[#00D4FF]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  1. Trust is a UX Principle
                </h3>
                <p className="text-[#D1D5DB]">
                  Explainability drove adoption more than feature quantity.
                  Transparency converted skeptics into advocates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00FFB3]/10 to-transparent rounded-[16px] p-6 border-l-4 border-[#00FFB3]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  2. Systems &gt; Screens
                </h3>
                <p className="text-[#D1D5DB]">
                  Modular IA enabled scaling. Role-based architecture
                  future-proofed for growth across 100+ client portfolios.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-transparent rounded-[16px] p-6 border-l-4 border-[#8B5CF6]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  3. AI + Human Collaboration
                </h3>
                <p className="text-[#D1D5DB]">
                  Override control flipped AI from threat to tool. Confidence
                  indicators enabled informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#F59E0B]/10 to-transparent rounded-[16px] p-6 border-l-4 border-[#F59E0B]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  4. Design Drives Business
                </h3>
                <p className="text-[#D1D5DB]">
                  Self-service features reduced costs. Audit trails closed
                  enterprise deals and differentiated from competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I'd Do Differently */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] hover:border-[#00D4FF]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              What I'd Do Differently
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  1. Earlier Engineering Involvement
                </h3>
                <p className="text-[#D1D5DB]">
                  I involved developers at hi-fi stage. Starting at wireframes
                  would have caught technical constraints sooner.
                </p>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  2. More Structured Usability Testing
                </h3>
                <p className="text-[#D1D5DB]">
                  Ad-hoc testing worked but formal protocols (think-aloud, task
                  completion metrics) would have yielded richer data.
                </p>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-[16px] p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  3. Competitive Monitoring System
                </h3>
                <p className="text-[#D1D5DB]">
                  I analyzed competitors once. Ongoing tracking would have
                  revealed emerging patterns and feature gaps faster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedCaseStudies currentCaseStudyId="computis" />
      <Footer />

      {/* Image Enlargement Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            onClick={() => setEnlargedImage(null)}
            aria-label="Close enlarged image"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-[95vw] max-h-[95vh] overflow-auto">
            <img
              src={enlargedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
