import { useState } from "react";
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
  Terminal,
  Clock,
  ShieldAlert,
  Shield,
  Unlink,
  FileText,
  Layers,
  ToggleLeft,
  Lightbulb,
  Award,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import { useVideoAutoplayOnVisible } from "../hooks/use-video-autoplay";
import { AnnotatedDemo } from "../components/case-study/AnnotatedDemo";

export default function ComputisCaseStudy() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  // Video autoplay refs with 40% visibility threshold
  const heroVideoRef = useVideoAutoplayOnVisible(0.4);

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute left-[65px] top-[262px] right-0 bottom-0 opacity-[0.03]"
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

      {/* Image Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#00D4FF] transition-colors"
            onClick={() => setEnlargedImage(null)}
            aria-label="Close enlarged image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={enlargedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-base font-medium text-[#888888] leading-normal hover:text-[#00D4FF] transition-all duration-300 group hover-back-button px-4 py-2 rounded-lg border border-transparent"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="m-0 mx-auto mb-8 flex flex-col gap-6">
          <span className="inline-block bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] px-4 py-2 rounded-2xl text-sm font-semibold tracking-tight mb-6 w-auto self-start">
            FinTech UX Case Study
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
            Computis: From Black Box to Transparent AI
          </h1>
          <p className="text-xl sm:text-2xl font-normal text-gray-400 leading-relaxed tracking-tight w-full text-left self-center max-w-[860px] ml-0 mr-auto">
            How We Turned CPA Skeptics into Enterprise Advocates
          </p>
        </div>
      </header>

      {/* Hero Video */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFB3] rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur"></div>
            <video
              ref={heroVideoRef}
              loop
              muted
              playsInline
              className="relative w-full max-w-[3600px] h-auto rounded-lg"
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
          className="text-[#00D4FF] font-semibold text-lg hover:text-[#00FFB3] transition-colors duration-300 hover-cta inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#00D4FF] bg-[#00D4FF]/10 w-auto self-center"
        >
          View Live Prototype
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-5 space-y-[14px] relative z-10">
        {/* Impact at a Glance */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl p-12 pb-0 border border-[#1A1A1A] shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white pb-5 mb-5">
              Impact at a Glance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#00FFB3]/10 to-transparent rounded-xl p-6 border border-[#00FFB3]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00FFB3] mb-3">
                    ↓ 45%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    CPA onboarding time
                  </p>
                  <p className="text-xs text-gray-400">(2.5h → 1.4h)</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl p-6 border border-[#FFD700]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FFD700] mb-3">
                    ↑ 32%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    Demo-to-conversion rate
                  </p>
                  <p className="text-xs text-gray-400">increase</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-xl p-6 border border-[#00D4FF]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00D4FF] mb-3">
                    ↓ 85%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    Engineering dependency
                  </p>
                  <p className="text-xs text-gray-400">reduction</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#0080FF]/10 to-transparent rounded-xl p-6 border border-[#0080FF]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0080FF] mb-3">
                    Zero
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    FMV disputes
                  </p>
                  <p className="text-xs text-gray-400">post-launch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl py-8 px-12 border border-[#1A1A1A] h-auto flex-grow-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-left">
              Quick Facts
            </h2>

            <div className="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-4 mt-5 w-auto self-stretch">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  Role
                </h3>
                <p className="text-lg font-medium text-white">
                  Lead Product Designer (Founding Designer)
                </p>
              </div>
              <div className="space-y-2 self-center sm:self-auto">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  Timeline
                </h3>
                <p className="text-lg font-medium text-white w-auto self-center">
                  10 months
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  Team
                </h3>
                <p className="text-lg font-medium text-white">
                  CTO, PM, 2 Engineers
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  Platform
                </h3>
                <p className="text-lg font-medium text-white">
                  Web SaaS (Desktop-first, responsive)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl py-8 px-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
              The Challenge: Automation vs. Professional Liability
            </h2>

            <div className="space-y-6 mt-8">
              <h3 className="text-lg font-semibold text-white">
                Tax platforms prioritize speed. CPAs prioritize defensibility.
              </h3>

              <p className="text-base text-gray-400 leading-relaxed">
                <span className="text-gray-400">
                  Before Computis, accounting firms faced a critical dilemma:
                </span>{" "}
                <strong className="text-white">opaque AI systems</strong>
                <span className="text-gray-400">
                  {" "}
                  that required manual verification—defeating automation's
                  promise. CPAs couldn't explain classifications to clients or
                  defend them during IRS audits.
                </span>
              </p>
            </div>

            {/* Before/After Workflow Comparison */}
            <div className="mt-6 mb-8">
              <div className="flex flex-col gap-6">
                <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#00FFB3]/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#00FFB3]"></div>
                    <p className="text-lg text-[#00FFB3] font-semibold">
                      Before/After Workflow Comparison
                    </p>
                  </div>
                  <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00FFB3]/60 transition-all duration-300 hover-image-enlarge relative group">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa0e9c2c002144b23913e4c4b3bfdf489"
                      alt="After workflow showing self-service transparent system"
                      className="w-full h-auto transition-transform duration-300"
                      loading="lazy"
                      onClick={() =>
                        setEnlargedImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa0e9c2c002144b23913e4c4b3bfdf489",
                        )
                      }
                    />
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-xl p-6 border border-[#00D4FF]/20">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00D4FF]" />
                Core Insight
              </h3>
              <p className="text-base text-white italic leading-relaxed mb-4">
                "The problem wasn't UX—it was trust."
              </p>

              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00FFB3] mt-4">
                <p className="text-sm font-semibold text-[#00FFB3] mb-2">
                  Research Finding:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">•</span>
                    <span>
                      8/8 CPAs rejected automation they couldn't explain
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">•</span>
                    <span>
                      Manual verification defeated automation's purpose
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">•</span>
                    <span>
                      Professional liability &gt; operational efficiency
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00D4FF] mt-4">
                <p className="text-sm text-white italic">
                  "If I can't screenshot your AI's reasoning for an audit, it's
                  just another liability."
                </p>
                <p className="text-xs text-[#888888] mt-2">
                  — Senior CPA, Big 4 firm
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl py-8 px-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
              Research: Understanding Professional Skepticism
            </h2>

            <p className="text-base text-gray-400 leading-relaxed mb-6">
              <strong className="text-white font-semibold text-lg">
                10-week foundational study:
              </strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#00D4FF]/10 rounded-lg p-4 border border-[#00D4FF]/20 flex flex-col justify-center items-center">
                <p className="text-white font-normal text-center text-base leading-6">
                  8 CPA interviews (60 min, structured protocol)
                </p>
              </div>
              <div className="bg-[#8B5CF6]/10 rounded-lg p-4 border border-[#8B5CF6]/20 flex flex-col justify-center items-center">
                <p className="text-white font-medium text-center text-base leading-6">
                  6 workflow shadowing sessions (Big 4 + mid-market)
                </p>
              </div>
              <div className="bg-[#00FFB3]/10 rounded-lg p-4 border border-[#00FFB3]/20 flex flex-col justify-center items-center">
                <p className="text-white font-medium text-center text-base leading-6">
                  127 verbatim quotes → 5 thematic clusters
                </p>
              </div>
              <div className="bg-[#F59E0B]/10 rounded-lg p-4 border border-[#F59E0B]/20 flex flex-col justify-center items-center">
                <p className="text-white font-medium text-center text-base leading-6">
                  4 usability testing cycles
                </p>
              </div>
            </div>

            {/* Research Synthesis Image */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] mb-8">
              <p className="text-sm text-gray-400 mb-3">
                Research Synthesis & Affinity Wall
              </p>
              <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00D4FF]/60 transition-all duration-300 hover-image-enlarge relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F2d22dd43205f4b36a3895561ba205024"
                  alt="Research Synthesis: Computis CPA Workflow Study"
                  className="w-full h-auto transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F2d22dd43205f4b36a3895561ba205024",
                    )
                  }
                />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                  Click to enlarge
                </div>
              </div>
            </div>

            {/* Sample Usability Study Structure */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] mb-8">
              <p className="text-sm text-gray-400 mb-3">
                Sample Usability Study Structure
              </p>
              <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00D4FF]/60 transition-all duration-300 hover-image-enlarge relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fd82d9e8a55884e62a4f9607f6ef0089a"
                  alt="Sample Usability Study Structure"
                  className="w-full h-auto transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fd82d9e8a55884e62a4f9607f6ef0089a",
                    )
                  }
                />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                  Click to enlarge
                </div>
              </div>
            </div>

            {/* Five Critical Insights */}
            <h3 className="text-lg font-semibold text-[#00D4FF] mb-6 pb-5">
              Five Critical Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-start">
              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#EF4444]/40 transition-all h-full flex flex-col justify-start items-center">
                <div className="w-12 h-12 rounded-lg bg-[#EF4444]/10 flex items-center justify-center mb-5">
                  <ShieldAlert className="w-6 h-6 text-[#EF4444]" />
                </div>
                <div className="flex items-start gap-4 flex-1 text-center">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      1. Professional Liability &gt; Efficiency
                    </h4>
                    <p className="text-sm text-[#888888] mb-2">(28 quotes)</p>
                    <p className="text-gray-400 text-sm leading-5 mt-5">
                      Finding: 8/8 participants prioritized IRS defensibility
                      over time savings
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#F59E0B]/40 transition-all h-full flex flex-col text-center justify-start items-center">
                <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div className="flex items-start gap-4 flex-1 justify-start">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      2. Engineering Dependency Blocks Scale
                    </h4>
                    <p className="text-sm text-[#888888] mb-2">(19 quotes)</p>
                    <p className="text-gray-400 text-sm leading-5 m-5">
                      <span className="text-gray-400">
                        Finding: 2-3 day wait times for Python script execution
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#8B5CF6]/40 transition-all h-full flex flex-col justify-start items-center">
                <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      3. Audit Trails = Enterprise Dealbreaker
                    </h4>
                    <p className="text-sm text-[#888888] mb-2">(31 quotes)</p>
                    <p className="text-gray-400 text-sm leading-5 m-5">
                      Finding: 4/4 competitors lack comprehensive change history
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/40 transition-all h-full flex flex-col justify-start items-center">
                <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div className="flex flex-row gap-4 flex-1">
                  <div className="text-center">
                    <h4 className="text-base font-semibold text-white mb-2">
                      4. Manual Work Fails at Scale
                    </h4>
                    <p className="text-sm text-[#888888] mb-2">(26 quotes)</p>
                    <p className="text-gray-400 text-sm leading-5 mt-5">
                      Finding: 600 hours per client at 3,000 transactions (12
                      min each)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl py-5 px-6 pb-6 border border-[#2A2A2A] hover:border-[#00FFB3]/40 transition-all h-full flex flex-col justify-start items-center">
                <div className="w-12 h-12 rounded-lg bg-[#00FFB3]/10 flex items-center justify-center mb-5">
                  <ToggleLeft className="w-6 h-6 text-[#00FFB3]" />
                </div>
                <div className="flex items-start gap-4 flex-1 justify-center">
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-white leading-5 mb-2">
                      5. Trust Requires Control, Not Replacement
                    </h4>
                    <p className="text-sm text-[#888888] mb-2">(23 quotes)</p>
                    <p className="text-gray-400 text-sm leading-5 mt-5">
                      Finding: 100% adoption when override controls demonstrated
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Synthesis */}
            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-xl p-8 border border-[#00D4FF]/20 mt-12">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Synthesis: The Core Design Tension
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    CPAs needed automation for scale but couldn't sacrifice
                    professional defensibility.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F0F0F] rounded-xl p-6 border-l-4 border-[#00FFB3]">
                <p className="text-[19px] text-[#00FFB3] uppercase tracking-wide mb-3">
                  <span>
                    <span>
                      <strong>
                        <span className="font-medium">Strategic Decision</span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p className="text-white font-normal leading-7 mt-5 italic">
                  Make AI auditable, not just "better"
                </p>
              </div>
            </div>

            {/* Current State Journey Map */}
            <div className="mt-8">
              <p className="text-sm text-[#888888] mb-3">
                Current State Journey Map
              </p>
              <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00D4FF]/60 transition-all duration-300 hover-image-enlarge relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F2d88d39d14af4c01a4e1a9f64d10c0a6"
                  alt="Current State Journey Map"
                  className="w-full h-auto transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F2d88d39d14af4c01a4e1a9f64d10c0a6",
                    )
                  }
                />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                  Click to enlarge
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl py-8 px-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
              Competitive Landscape: The Transparency Gap
            </h2>

            {/* Competitive Matrix */}
            <div className="mb-8">
              <div className="bg-[#1A1A1A]/50 rounded-xl p-1 border border-[#1A1A1A] shadow-[0_0_40px_0_rgba(0,212,255,0.1)] overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0080FF]/20 to-[#00D4FF]/20">
                      <th className="text-left text-white text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        Feature
                      </th>
                      <th className="text-center text-[#00D4FF] text-sm font-bold p-4 border-b border-[#2A2A2A] bg-[#00D4FF]/10">
                        Computis
                      </th>
                      <th className="text-center text-gray-400 text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        TaxBit
                      </th>
                      <th className="text-center text-gray-400 text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        Cryptio
                      </th>
                      <th className="text-center text-gray-400 text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        CoinTracker
                      </th>
                      <th className="text-center text-gray-400 text-sm font-semibold p-4 border-b border-[#2A2A2A]">
                        Koinly
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="text-gray-400 text-sm p-4">
                        AI Explainability
                      </td>
                      <td className="text-center p-4 bg-[#00D4FF]/5">
                        <span className="text-2xl">✅</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="text-gray-400 text-sm p-4">
                        Audit Trails
                      </td>
                      <td className="text-center p-4 bg-[#00D4FF]/5">
                        <span className="text-2xl">✅</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-[#FFD700] text-sm font-bold italic">
                          Partial
                        </span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">✅</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#2A2A2A]">
                      <td className="text-gray-400 text-sm p-4">
                        CPA-First Design
                      </td>
                      <td className="text-center p-4 bg-[#00D4FF]/5">
                        <span className="text-2xl">✅</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-[#FFD700] text-sm font-bold italic">
                          Partial
                        </span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">✅</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-2xl">❌</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-[#FFD700] text-sm font-bold italic">
                          Partial
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00FFB3]/10 to-[#00D4FF]/10 rounded-xl p-6 border border-[#00D4FF]/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Key Finding
              </h3>
              <p className="text-gray-400 mb-2">
                Every competitor prioritized speed over defensibility.
              </p>
              <p className="text-white">
                0/4 platforms offered explainable AI or comprehensive audit
                trails.
              </p>

              <div className="mt-4 pt-4 border-t border-[#00D4FF]/20">
                <p className="text-lg font-semibold text-[#00D4FF] mb-5">
                  Our Strategic Bet: Trust over feature parity
                </p>
                <ul className="space-y-2 text-base text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FFB3] mt-0.5">P0:</span>
                    <span>Audit trail + confidence system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-0.5">P1:</span>
                    <span>Self-service rule builder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] mt-0.5">P2:</span>
                    <span>Multi-tenant architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl py-8 px-12 pb-10 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
              Design Process: Trust-First, Professional-Centered
            </h2>

            {/* Design Process Evolution Image */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] mb-8">
              <p className="text-sm text-gray-400 sm:text-[#888888] mb-3">
                Design Process Evolution
              </p>
              <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00D4FF]/60 transition-all duration-300 hover-image-enlarge relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffa320d8ba63c4433a76c919e90d558f6"
                  alt="Design Process Evolution"
                  className="w-full h-auto transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffa320d8ba63c4433a76c919e90d558f6",
                    )
                  }
                />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                  Click to enlarge
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#00D4FF] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        Foundation
                      </h4>
                      <ul className="text-gray-400 space-y-1 text-sm">
                        <li className="text-base">
                          • Journey mapping for CPA, Analyst, Admin personas
                        </li>
                        <li className="text-base">
                          • Trust framework principles defined
                        </li>
                        <li className="text-base">
                          • IA explorations tested with 3 CPAs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[33%] ml-5 max-md:ml-0 max-md:w-full">
                  <div className="flex items-start gap-4 h-auto flex-grow">
                    <div className="w-8 h-8 bg-[#00FFB3] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        Exploration
                      </h4>
                      <ul className="text-gray-400 space-y-1 text-sm">
                        <li className="text-base">
                          • Rapid prototyping: 3 dashboard approaches
                        </li>
                        <li className="text-base">
                          • Usability testing identified friction points
                        </li>
                        <li className="text-base">
                          • Iterated confidence system 4 times
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[33%] ml-5 max-md:ml-0 max-md:w-full">
                  <div className="flex items-start gap-4 h-auto flex-grow">
                    <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        Validation
                      </h4>
                      <ul className="text-gray-400 space-y-1 text-sm">
                        <li className="text-base">
                          • High-fidelity prototype testing
                        </li>
                        <li className="text-base">
                          • Engineering feasibility validation
                        </li>
                        <li className="text-base">
                          • Design system documentation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution: Five Design Decisions */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1200">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
              Solution: Five Design Decisions
            </h2>

            <div className="space-y-12">
              {/* Decision 1 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">1.</span>
                  <h3 className="text-lg font-semibold text-white">
                    AI Confidence Chips + Override Control
                  </h3>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A]">
                    <AnnotatedDemo
                      src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F1722a6d109794969af99985a7fca6660?alt=media&token=7fa5119b-32c1-4ce6-8070-9f7e8c23fd25&apiKey=ba69a23156414a589de97341511272c9"
                      annotations={[
                        {
                          time: 0,
                          label: "Challenge",
                          heading: "8/8 CPAs distrusted 'black box' automation",
                          text: "Early demos failed when CPAs couldn't see how or why classifications were made.",
                        },
                        {
                          time: 3,
                          label: "Solution",
                          heading:
                            "Confidence badges with explainable reasoning",
                          bullets: [
                            "High/Medium/Low confidence chips tied to AI certainty scores",
                            "Reasoning tooltips that surface classification logic on hover",
                            "One-click override that preserves full context and history",
                          ],
                        },
                        {
                          time: 8,
                          label: "Impact",
                          heading:
                            "↓70% false positives | 100% CPA adoption in demos",
                          text: "Once CPAs could inspect and override the AI, they shifted from skeptics to advocates.",
                        },
                      ]}
                      containerClassName="aspect-video"
                    />
                  </div>
                </div>
              </div>

              {/* Decision 2 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00FFB3]">2.</span>
                  <h3 className="text-lg font-semibold text-white">
                    Inline Audit Trail Drawer
                  </h3>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A]">
                    <AnnotatedDemo
                      src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa0883ef4ca724f1cb2cb430ba6abc50e?alt=media&token=5a058dfd-fbf1-4ab6-ae2f-85808836c967&apiKey=ba69a23156414a589de97341511272c9"
                      annotations={[
                        {
                          time: 0,
                          label: "Challenge",
                          heading: "No compliance visibility or change history",
                          text: "CPAs needed defensible documentation trails but had no way to track classification decisions over time.",
                        },
                        {
                          time: 3,
                          label: "Solution",
                          heading: "Persistent contextual audit log",
                          bullets: [
                            "Classification history tracking every decision point",
                            "Rule changes and override rationale preserved",
                            "Exportable audit reports for IRS documentation",
                          ],
                        },
                        {
                          time: 8,
                          label: "Impact",
                          heading:
                            "↓40% compliance tickets | Enabled independent audit defense",
                          text: "CPAs could now defend classifications during audits without engineering support.",
                        },
                      ]}
                      containerClassName="aspect-video"
                    />
                  </div>
                </div>
              </div>

              {/* Decision 3 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#8B5CF6]">3.</span>
                  <h3 className="text-lg font-semibold text-white">
                    Visual Rule Builder (No-Code)
                  </h3>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A]">
                    <AnnotatedDemo
                      src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F362cda60207c4bf0ab15de32042ef9e7?alt=media&token=d93a0b85-9d93-47d7-ae9b-89a2da2835b1&apiKey=ba69a23156414a589de97341511272c9"
                      annotations={[
                        {
                          time: 0,
                          label: "Challenge",
                          heading:
                            "85% engineering dependency for custom rules",
                          text: "Every client-specific rule required engineering work, creating bottlenecks and slowing sales cycles.",
                        },
                        {
                          time: 3,
                          label: "Solution",
                          heading: "No-code drag-and-drop rule builder",
                          bullets: [
                            "Natural language interface for building complex rules",
                            "Real-time preview showing rule application on actual data",
                            "Bulk pattern detection to apply rules at scale",
                          ],
                        },
                        {
                          time: 8,
                          label: "Impact",
                          heading:
                            "↓85% engineering reliance | ↑32% conversion rate",
                          text: "Sales teams could now configure custom rules during demos, dramatically shortening sales cycles.",
                        },
                      ]}
                      containerClassName="aspect-video"
                    />
                  </div>
                </div>
              </div>

              {/* Decision 4 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#F59E0B]">4.</span>
                  <h3 className="text-lg font-semibold text-white">
                    Contextual Anomaly Detection
                  </h3>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A]">
                    <AnnotatedDemo
                      src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F15fdcef43e9c49fabf34b76adb4b6b02?alt=media&token=a9348a1a-ab63-4fea-95e6-244e99875618&apiKey=ba69a23156414a589de97341511272c9"
                      annotations={[
                        {
                          time: 0,
                          label: "Challenge",
                          heading: "Hidden fair market value (FMV) errors",
                          text: "Pricing anomalies went undetected, creating compliance risks and eroding client trust.",
                        },
                        {
                          time: 3,
                          label: "Solution",
                          heading:
                            "Contextual anomaly detection with visual flags",
                          bullets: [
                            "Inline color-coded flags: 🔴 Critical, 🟡 Warning, 🟢 OK",
                            "Hover tooltips explaining specific anomalies and thresholds",
                            "Smart filtering by severity level for efficient triage",
                          ],
                        },
                        {
                          time: 8,
                          label: "Impact",
                          heading:
                            "↑50% anomaly detection | Reduced manual triage",
                          text: "CPAs could instantly spot and resolve pricing errors before client submissions.",
                        },
                      ]}
                      containerClassName="aspect-video"
                    />
                  </div>
                </div>
              </div>

              {/* Decision 5 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#00D4FF]">5.</span>
                  <h3 className="text-lg font-semibold text-white">
                    Multi-Tenant Dashboard
                  </h3>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] mt-6">
                  <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A]">
                    <AnnotatedDemo
                      src="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F634ec079a5b3440d93ec5826c682c3e0?alt=media&token=e4100b8b-ba86-4734-b2ce-0b759ff3b9ad&apiKey=ba69a23156414a589de97341511272c9"
                      annotations={[
                        {
                          time: 0,
                          label: "Challenge",
                          heading: "CPA firms manage 100+ client portfolios",
                          text: "Managing hundreds of clients created access control and context switching overhead.",
                        },
                        {
                          time: 3,
                          label: "Solution",
                          heading:
                            "Multi-tenant architecture with role-based access",
                          bullets: [
                            "Client-scoped views with granular role permissions",
                            "Seamless context switching between client accounts",
                            "Portfolio-level insights and consolidated reporting",
                          ],
                        },
                        {
                          time: 8,
                          label: "Impact",
                          heading:
                            "Enabled enterprise-scale management | Unlocked 3 deals",
                          text: "Firms could now efficiently manage hundreds of clients with proper access controls and visibility.",
                        },
                      ]}
                      containerClassName="aspect-video"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
              Outcomes: From Prototype to Enterprise Platform
            </h2>

            <h3 className="text-lg font-semibold text-[#00D4FF] mb-4">
              Quantified Results
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <h4 className="text-sm font-semibold text-[#00FFB3] mb-3">
                  User Efficiency
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>↓45% CPA onboarding time (2.5h → 1.4h)</li>
                  <li>↓40% support tickets</li>
                  <li>Zero FMV disputes post-launch</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <h4 className="text-sm font-semibold text-[#FFD700] mb-3">
                  Business Growth
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>↑32% demo-to-conversion rate</li>
                  <li>3 enterprise CPA partnerships</li>
                  <li>Scaled to DAOs, hedge funds, multi-client firms</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <h4 className="text-sm font-semibold text-[#00D4FF] mb-3">
                  Technical Excellence
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>↓85% engineering dependency</li>
                  <li>90-second real-time processing (vs 2-3 day wait)</li>
                  <li>Self-service rule customization</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#00FFB3] mb-4">
              Stakeholder Validation
            </h3>

            <div className="space-y-4">
              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00D4FF]">
                <p className="text-sm text-white italic mb-2">
                  "Your handoffs made us 10x faster. Edge case documentation was
                  incredible."
                </p>
                <p className="text-xs text-[#888888]">— Engineering Lead</p>
              </div>

              <div className="bg-[#0F0F0F] rounded-lg p-4 border-l-4 border-[#00FFB3]">
                <p className="text-sm text-white italic mb-2">
                  "First crypto tax tool I can defend to clients. The audit
                  trail is everything."
                </p>
                <p className="text-xs text-[#888888]">
                  — CPA Partner, Mid-Market Firm
                </p>
              </div>
            </div>

            {/* Usability Test Results Image */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] mt-8">
              <p className="text-sm text-gray-400 mb-3">
                Usability Test Results
              </p>
              <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00D4FF]/60 transition-all duration-300 hover-image-enlarge relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fb2ba5c86168b43ee9715e140d1461d11"
                  alt="Usability Test Results"
                  className="w-full h-auto transition-transform duration-300"
                  loading="lazy"
                  onClick={() =>
                    setEnlargedImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fb2ba5c86168b43ee9715e140d1461d11",
                    )
                  }
                />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                  Click to enlarge
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1400">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
              Key Learnings
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      1. In High-Stakes Domains, Explainability &gt; Feature
                      Breadth
                    </h3>
                    <p className="text-sm text-[#888888] mb-2">
                      <strong className="text-[#00D4FF]">Application:</strong>{" "}
                      6/8 CPAs ignored 20+ feature requests to prioritize audit
                      trail
                    </p>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-white">Learning:</strong>{" "}
                      Professional liability creates different value
                      hierarchies. Transparency features drove 32% conversion
                      lift—more than any feature addition.
                    </p>
                    <p className="text-[#00FFB3] font-medium">
                      Takeaway: In FinTech, healthcare, legal��defensibility
                      trumps efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-[#00FFB3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      2. Modular Architecture Enables Scale
                    </h3>
                    <p className="text-sm text-[#888888] mb-2">
                      <strong className="text-[#00FFB3]">Application:</strong>{" "}
                      Role-based IA supported 100+ client portfolios without
                      refactor
                    </p>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-white">Learning:</strong> Systems
                      thinking &gt; screen design. Early architectural decisions
                      enabled enterprise growth.
                    </p>
                    <p className="text-[#00FFB3] font-medium">
                      Takeaway: Design for scale from day one, even with MVP
                      constraints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      3. AI + Human Collaboration
                    </h3>
                    <p className="text-sm text-[#888888] mb-2">
                      <strong className="text-[#8B5CF6]">Application:</strong>{" "}
                      Override controls flipped AI from threat to tool
                    </p>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-white">Learning:</strong>{" "}
                      Confidence indicators enabled informed decisions vs blind
                      acceptance. CPAs wanted augmentation, not replacement.
                    </p>
                    <p className="text-[#00FFB3] font-medium">
                      Takeaway: Build trust through control, not opacity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      4. Design Drives Business
                    </h3>
                    <p className="text-sm text-[#888888] mb-2">
                      <strong className="text-[#FFD700]">Application:</strong>{" "}
                      Self-service features reduced costs; audit trails closed
                      enterprise deals
                    </p>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-white">Learning:</strong> UX
                      decisions directly impacted revenue (3 partnerships) and
                      efficiency (85% less eng dependency).
                    </p>
                    <p className="text-[#00FFB3] font-medium">
                      Takeaway: Quantify design impact in business metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-[#1A1A1A]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
              Reflections: What I'd Do Differently
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  1. Earlier Engineering Involvement
                </h3>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <strong className="text-[#EF4444]">What happened:</strong>{" "}
                    Designed complex bulk import at Week 5 → API limits flagged
                    at Week 7 → 2-week redesign
                  </p>
                  <p>
                    <strong className="text-[#F59E0B]">Cost:</strong> 2-week
                    delay, stakeholder frustration, simplified scope
                  </p>
                  <p>
                    <strong className="text-[#00FFB3]">
                      Learning applied:
                    </strong>{" "}
                    Weekly "art of the possible" sessions from Week 1 in next
                    project → caught constraints in 48 hours
                  </p>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  2. Structured Usability Testing from Start
                </h3>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <strong className="text-[#EF4444]">What happened:</strong>{" "}
                    Informal testing missed 4/6 CPAs struggling with bulk rule
                    syntax until Week 8
                  </p>
                  <p>
                    <strong className="text-[#F59E0B]">Cost:</strong> 3
                    additional iteration cycles, late insight delayed MVP by 1
                    sprint
                  </p>
                  <p>
                    <strong className="text-[#00FFB3]">
                      Learning applied:
                    </strong>{" "}
                    Formal think-aloud protocols with session recordings → 40%
                    fewer iterations
                  </p>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 rounded-xl p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  3. Ongoing Competitive Monitoring
                </h3>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <strong className="text-[#EF4444]">What happened:</strong>{" "}
                    Single competitive analysis at project start
                  </p>
                  <p>
                    <strong className="text-[#F59E0B]">Learning:</strong>{" "}
                    Quarterly feature audits would reveal emerging patterns
                    faster
                  </p>
                  <p>
                    <strong className="text-[#00FFB3]">Application:</strong>{" "}
                    Monthly competitive tracking integrated into product roadmap
                    reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
