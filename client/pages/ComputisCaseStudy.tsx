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
        className="absolute top-[262px] right-0 bottom-0 opacity-[0.03]"
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
      <div className="max-w-[1400px] mx-auto px-6 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
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
      <header className="max-w-[1400px] w-full mx-auto px-6 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="mb-8 flex flex-col gap-6">
          <span className="inline-block bg-gradient-to-r from-[#00D4FF] to-[#0080FF] text-[#0A0A0A] px-4 py-2 rounded-2xl text-sm font-semibold tracking-tight mb-6 w-auto self-start">
            FinTech UX Case Study
          </span>
          <h1 className="text-5xl font-semibold text-white leading-tight tracking-tight mb-6 w-full">
            Computis: From Black Box to Transparent AI
          </h1>
          <p className="text-xl sm:text-2xl font-normal text-gray-400 leading-relaxed tracking-tight w-full text-left self-center max-w-[860px] ml-0 mr-auto">
            How We Turned CPA Skeptics into Enterprise Advocates
          </p>
        </div>
      </header>

      {/* Hero Video */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
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

      <div className="flex flex-col relative mt-5 text-center z-10 mb-6">
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
      <main className="max-w-[1400px] mx-auto px-6 space-y-1 relative z-10">
      </main>

      <Footer />
    </div>
  );
}
