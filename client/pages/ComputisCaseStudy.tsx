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
  Sparkles,
  Eye,
  Settings,
  Brain,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import { useVideoAutoplayOnVisible } from "../hooks/use-video-autoplay";

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
            Computis — Designing AI Features for Crypto Tax Automation
          </h1>
          <p className="text-xl sm:text-2xl font-normal text-gray-400 leading-relaxed tracking-tight w-full text-left self-center max-w-[860px] ml-0 mr-auto">
            Founding Lead Product Designer | 10 Months
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
      <main className="max-w-[1400px] mx-auto px-6 space-y-14 relative z-10 pb-20">
        
        {/* Impact at a Glance */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] px-5 pb-5 border border-[#1A1A1A] flex flex-col items-start gap-3">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight pt-5">
              Impact at a Glance
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/30 transition-all duration-300">
                <div className="text-[#9A9A9F] text-sm font-medium mb-2">CPA Onboarding Time</div>
                <div className="text-[#34d399] text-3xl font-bold mb-1">↓ 45%</div>
                <div className="text-[#6A6A6F] text-sm">2.5h → 1.4h</div>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/30 transition-all duration-300">
                <div className="text-[#9A9A9F] text-sm font-medium mb-2">Demo-to-Conversion</div>
                <div className="text-[#34d399] text-3xl font-bold mb-1">↑ 32%</div>
                <div className="text-[#6A6A6F] text-sm">Higher conversion rate</div>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/30 transition-all duration-300">
                <div className="text-[#9A9A9F] text-sm font-medium mb-2">Manual Classification Work</div>
                <div className="text-[#34d399] text-3xl font-bold mb-1">↓ 85%</div>
                <div className="text-[#6A6A6F] text-sm">Automated processing</div>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/30 transition-all duration-300">
                <div className="text-[#9A9A9F] text-sm font-medium mb-2">Error Detection Rate</div>
                <div className="text-[#34d399] text-3xl font-bold mb-1">↑ 150%</div>
                <div className="text-[#6A6A6F] text-sm">Proactive anomaly detection</div>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="text-[#9A9A9F] text-sm font-medium mb-2">Enterprise Deals</div>
                <div className="text-[#a78bfa] text-3xl font-bold mb-1">3 closed</div>
                <div className="text-[#6A6A6F] text-sm">in 6 months</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A]">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight mb-6">
              The Challenge
            </h2>
            <p className="text-[#9A9A9F] text-lg leading-relaxed mb-6">
              Computis had a solid, functional platform for crypto tax management—but CPAs were still spending excessive time on manual transaction classification. The existing UI handled data well, but lacked intelligent automation features that competitors were beginning to offer.
            </p>
            <div className="mb-6">
              <h3 className="text-white text-xl font-semibold mb-4">Pain Points Identified:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <AlertCircle className="w-5 h-5 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Manual classification of thousands of transactions per client</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <AlertCircle className="w-5 h-5 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>No automated anomaly detection for FMV discrepancies</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <AlertCircle className="w-5 h-5 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Repetitive rule creation for common transaction patterns</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <AlertCircle className="w-5 h-5 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Limited visibility into classification decisions for audit defense</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-6">
              <h3 className="text-[#f59e0b] text-lg font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                The Opportunity
              </h3>
              <p className="text-[#9A9A9F] leading-relaxed">
                Design and implement AI-powered features that would automate routine work while keeping CPAs in control—turning Computis into a truly intelligent tax automation platform.
              </p>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A]">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight mb-6">
              My Approach
            </h2>
            <p className="text-[#9A9A9F] text-lg leading-relaxed mb-6">
              I led the design of Computis's AI feature suite, focusing on <span className="text-[#f59e0b] font-semibold">augmentation over automation</span>—ensuring AI enhanced CPA expertise rather than replacing professional judgment.
            </p>
            <div className="mb-6">
              <h3 className="text-white text-xl font-semibold mb-4">Research Foundation:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>8 CPA interviews identifying automation opportunities</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>6 workflow shadowing sessions to map classification patterns</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>Competitive analysis of AI features (TaxBit, Cryptio, CoinTracker)</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>4 usability test cycles validating AI interaction patterns</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#60a5fa]/10 border border-[#60a5fa]/30 rounded-xl p-6">
              <h3 className="text-[#60a5fa] text-lg font-semibold mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Key Insight
              </h3>
              <p className="text-[#9A9A9F] leading-relaxed">
                CPAs wanted AI to handle repetitive work, but needed transparency and override control to maintain professional liability standards.
              </p>
            </div>
          </div>
        </section>

        {/* AI Feature Design Solutions */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="mb-8">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight">
              AI Feature Design Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A] hover:border-[#f59e0b]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#f59e0b]/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    AI-Powered Classification with Confidence Indicators
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[#f87171] text-sm font-semibold uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-[#9A9A9F]">Manual classification consumed 60%+ of CPA time.</p>
                </div>
                <div>
                  <div className="text-[#f59e0b] text-sm font-semibold uppercase tracking-wide mb-2">Solution</div>
                  <p className="text-[#9A9A9F]">ML-driven auto-classification with visual confidence scores (High/Medium/Low) and one-click accept/reject controls.</p>
                </div>
                <div>
                  <div className="text-[#34d399] text-sm font-semibold uppercase tracking-wide mb-2">Impact</div>
                  <p className="text-[#9A9A9F]">85% reduction in manual classification work; CPAs review only flagged items.</p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A] hover:border-[#f59e0b]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#f59e0b]/10 rounded-xl">
                  <Eye className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Intelligent Audit Trail System
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[#f87171] text-sm font-semibold uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-[#9A9A9F]">No visibility into how classifications were determined.</p>
                </div>
                <div>
                  <div className="text-[#f59e0b] text-sm font-semibold uppercase tracking-wide mb-2">Solution</div>
                  <p className="text-[#9A9A9F]">AI-generated audit logs documenting classification rationale, rule triggers, and decision history.</p>
                </div>
                <div>
                  <div className="text-[#34d399] text-sm font-semibold uppercase tracking-wide mb-2">Impact</div>
                  <p className="text-[#9A9A9F]">40% reduction in compliance preparation time; enabled self-service IRS audit defense.</p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A] hover:border-[#f59e0b]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#f59e0b]/10 rounded-xl">
                  <Settings className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Smart Rule Builder with Pattern Recognition
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[#f87171] text-sm font-semibold uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-[#9A9A9F]">CPAs repeatedly created similar rules for common scenarios.</p>
                </div>
                <div>
                  <div className="text-[#f59e0b] text-sm font-semibold uppercase tracking-wide mb-2">Solution</div>
                  <p className="text-[#9A9A9F]">AI suggests rule templates based on transaction patterns; no-code builder with natural language preview.</p>
                </div>
                <div>
                  <div className="text-[#34d399] text-sm font-semibold uppercase tracking-wide mb-2">Impact</div>
                  <p className="text-[#9A9A9F]">Rule creation time reduced from 15 minutes to 90 seconds; 32% increase in demo conversions.</p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A] hover:border-[#f59e0b]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#f59e0b]/10 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Proactive Anomaly Detection Engine
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[#f87171] text-sm font-semibold uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-[#9A9A9F]">FMV errors and data inconsistencies discovered too late.</p>
                </div>
                <div>
                  <div className="text-[#f59e0b] text-sm font-semibold uppercase tracking-wide mb-2">Solution</div>
                  <p className="text-[#9A9A9F]">ML-powered anomaly detection with inline color-coded flags and explanatory tooltips.</p>
                </div>
                <div>
                  <div className="text-[#34d399] text-sm font-semibold uppercase tracking-wide mb-2">Impact</div>
                  <p className="text-[#9A9A9F]">150% increase in error detection; issues caught before client delivery.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Stakeholder Alignment */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A]">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight mb-6">
              Stakeholder Alignment: Balancing Automation & Control
            </h2>
            <div className="mb-6">
              <h3 className="text-[#f87171] text-lg font-semibold mb-3">Challenge</h3>
              <p className="text-[#9A9A9F] leading-relaxed">
                Engineering wanted maximum automation; CPAs required override capabilities for liability protection.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-[#f59e0b] text-lg font-semibold mb-3">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>Facilitated cross-functional workshop mapping trust requirements</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>Presented user research showing 40% of competitor complaints cited "lack of control"</span>
                </li>
                <li className="flex items-start gap-3 text-[#9A9A9F]">
                  <CheckCircle className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                  <span>Designed graduated autonomy system: High confidence → Auto-apply | Medium → Review queue | Low → Manual required</span>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-[#34d399] text-lg font-semibold mb-3">Outcome</h3>
              <p className="text-[#9A9A9F] leading-relaxed mb-4">
                The tiered confidence system became a key differentiator. One enterprise prospect specifically cited "professional control" as their deciding factor.
              </p>
            </div>
            <div className="bg-[#1A1A1A]/50 border-l-4 border-[#f59e0b] rounded-r-xl p-6">
              <Quote className="w-8 h-8 text-[#f59e0b] mb-3" />
              <p className="text-[#9A9A9F] text-lg italic leading-relaxed mb-2">
                "Finally, AI that works *with* me instead of replacing my judgment."
              </p>
              <p className="text-[#6A6A6F] text-sm">— CPA Beta User</p>
            </div>
          </div>
        </section>

        {/* Results & Business Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A]">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight mb-6">
              Results & Business Impact
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#9A9A9F]">
                <TrendingUp className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                <span><span className="text-white font-semibold">3 enterprise CPA firm deals</span> closed within 6 months of AI feature launch</span>
              </li>
              <li className="flex items-start gap-3 text-[#9A9A9F]">
                <Shield className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                <span><span className="text-white font-semibold">Zero FMV disputes</span> reported post-implementation</span>
              </li>
              <li className="flex items-start gap-3 text-[#9A9A9F]">
                <Target className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                <span>Platform capabilities expanded to serve <span className="text-white font-semibold">DAOs and hedge funds</span></span>
              </li>
              <li className="flex items-start gap-3 text-[#9A9A9F]">
                <Award className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                <span>AI features cited as primary differentiator in <span className="text-white font-semibold">78% of won deals</span></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1200">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A]">
            <h2 className="text-white text-3xl font-semibold leading-tight tracking-tight mb-6">
              Key Learnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#f59e0b] text-2xl font-bold">1</div>
                  <h3 className="text-white font-semibold">Augmentation > Automation</h3>
                </div>
                <p className="text-[#9A9A9F]">CPAs adopted AI faster when they retained control</p>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#f59e0b] text-2xl font-bold">2</div>
                  <h3 className="text-white font-semibold">Transparency Builds Trust</h3>
                </div>
                <p className="text-[#9A9A9F]">Confidence scores and audit trails drove adoption</p>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#f59e0b] text-2xl font-bold">3</div>
                  <h3 className="text-white font-semibold">Pattern Recognition = Scale</h3>
                </div>
                <p className="text-[#9A9A9F]">Smart suggestions multiplied CPA efficiency</p>
              </div>
              <div className="bg-[#1A1A1A]/50 rounded-xl p-6 border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#f59e0b] text-2xl font-bold">4</div>
                  <h3 className="text-white font-semibold">AI UX is Different</h3>
                </div>
                <p className="text-[#9A9A9F]">Designing for probabilistic outputs requires new interaction patterns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Platform */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 border border-[#1A1A1A]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Miro', 'Notion', 'Jira', 'Mixpanel', 'GA'].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-[#1A1A1A]/50 border border-[#2A2A2A] rounded-lg text-[#9A9A9F] text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1A1A]/50 border border-[#2A2A2A] rounded-lg text-[#9A9A9F] text-sm">
                    Web SaaS
                  </span>
                  <span className="px-3 py-1.5 bg-[#1A1A1A]/50 border border-[#2A2A2A] rounded-lg text-[#9A9A9F] text-sm">
                    Desktop-first
                  </span>
                  <span className="px-3 py-1.5 bg-[#1A1A1A]/50 border border-[#2A2A2A] rounded-lg text-[#9A9A9F] text-sm">
                    Responsive
                  </span>
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