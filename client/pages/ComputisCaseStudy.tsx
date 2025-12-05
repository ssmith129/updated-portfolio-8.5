import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Eye,
  Settings,
  AlertTriangle,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowUp,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import VideoOverlay from "../components/VideoOverlay";
import { useIntersectionAnimation } from "../hooks/use-page-animations";
import { useCountUp } from "../hooks/use-count-up";

export default function ComputisCaseStudy() {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);

  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.3, "0px 0px -100px 0px");

  const onboardingCount = useCountUp(45, 2000, startMetricsAnimation);
  const conversionCount = useCountUp(32, 2000, startMetricsAnimation);
  const classificationCount = useCountUp(85, 2000, startMetricsAnimation);
  const errorDetectionCount = useCountUp(150, 2000, startMetricsAnimation);
  const enterpriseDealsCount = useCountUp(3, 2000, startMetricsAnimation);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsNavSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsSummaryExpanded(!isMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-precision-neutral scroll-smooth relative overflow-hidden font-sans">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 50%, var(--precision-accent) 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, var(--precision-secondary) 1px, transparent 1px)
        `,
          backgroundSize: "64px 64px",
        }}
      ></div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4AA]/3 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1E3A5F]/4 rounded-full blur-[140px]"></div>

      <SkipLink />
      <Navigation />

      <div className="max-w-[1200px] mx-auto px-6 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-base font-medium text-precision-text-secondary leading-normal hover:text-precision-accent transition-all duration-200 hover:scale-[1.02] group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      <header className="max-w-[1200px] mx-auto px-6 pt-12 pb-6 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="flex flex-col">
          <span className="inline-block bg-precision-accent text-white px-4 py-2 rounded-pill text-sm font-semibold tracking-tight mb-4 w-fit">
            FinTech UX Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-precision-text-primary leading-[110%] tracking-tight mb-4">
            Computis — AI-Powered Crypto Tax Automation
          </h1>
          <p className="text-base sm:text-lg text-precision-text-secondary leading-[140%] mb-6">
            Designed intelligent automation that reduced manual classification work by 85% while keeping CPAs in control.
          </p>

          <div className="bg-white/60 backdrop-blur-sm rounded-card p-5 border border-[#E3E8EF]">
            <h2 className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">What I Achieved</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-precision-text-primary">
                <CheckCircle className="w-4 h-4 text-precision-accent mt-0.5 flex-shrink-0" />
                <span><strong className="text-precision-accent">↓ 85% manual work</strong> — CPAs review only flagged items</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-precision-text-primary">
                <CheckCircle className="w-4 h-4 text-precision-secondary mt-0.5 flex-shrink-0" />
                <span><strong className="text-precision-secondary">↑ 32% conversions</strong> — faster rule creation drove adoption</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-precision-text-primary">
                <CheckCircle className="w-4 h-4 text-precision-warning mt-0.5 flex-shrink-0" />
                <span><strong className="text-precision-warning">↑ 150% error detection</strong> — issues caught before client delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div
        className={`${isNavSticky ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-precision-md" : "relative"} z-50 transition-all duration-300 hidden md:block`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-3">
          <nav
            aria-label="Case study sections"
            className="flex items-center justify-center gap-2 overflow-x-auto"
          >
            {[
              { href: "#challenge", label: "Challenge" },
              { href: "#approach", label: "My Approach" },
              { href: "#solutions", label: "AI Solutions" },
              { href: "#stakeholder", label: "Stakeholder Alignment" },
              { href: "#results", label: "Results" },
              { href: "#learnings", label: "Key Learnings" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 px-4 py-2 rounded-button bg-white text-precision-text-secondary border border-[#E3E8EF] text-sm font-medium hover:bg-precision-accent/10 hover:text-precision-accent hover:border-precision-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-precision-accent transition-all duration-200 shadow-precision-sm hover:shadow-precision-md"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-card p-5 shadow-precision-sm transition-all duration-200 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600 border border-[#E3E8EF]">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider group-hover:text-precision-accent transition-colors duration-200">
              Quick View
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-4 h-4 text-precision-text-secondary group-hover:text-precision-accent transition-colors duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 text-precision-text-secondary group-hover:text-precision-accent transition-colors duration-200" />
            )}
          </button>

          {isSummaryExpanded && (
            <div
              id="summary-content"
              className="mt-4 animate-in fade-in-0 slide-in-from-top-4 duration-500"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">Role</span>
                    <p className="text-precision-text-primary mt-1">Founding Lead Product Designer</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">Duration</span>
                    <p className="text-precision-text-primary mt-1">10 months</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">Platform</span>
                    <p className="text-precision-text-primary mt-1">Web SaaS (Desktop-first)</p>
                  </div>
                </div>

                <div className="border-t border-[#E3E8EF] pt-4">
                  <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2 block">Tools & Team</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-precision-text-primary">Tools:</span>
                      <span className="text-precision-text-secondary ml-2">Figma, Miro, Notion, Jira</span>
                    </div>
                    <div>
                      <span className="font-medium text-precision-text-primary">Team:</span>
                      <span className="text-precision-text-secondary ml-2">CTO, PM, 2 ML, 2 Frontend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <main
        id="main-content"
        className="max-w-[1200px] mx-auto px-6 pb-24 space-y-16 relative z-10"
      >
        <section
          id="tldr"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 mt-12 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8 transition-all duration-200 hover:text-precision-accent cursor-pointer">
              📌 Impact At a Glance
            </h2>

            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="bg-gradient-to-r from-[#E0F9F4] via-white to-[#E8F4FA] rounded-card p-6 sm:p-8 border border-[#E3E8EF]"
            >
              <h3 className="text-xl font-semibold font-heading text-precision-text-primary mb-6">
                Key Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-[#E0F9F4] p-6 rounded-card border-2 border-[#00D4AA]/30 hover:border-[#00D4AA]/50 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] text-center">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    CPA Onboarding Time
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-precision-success mb-1">
                    ↓ {onboardingCount}%
                  </p>
                  <p className="text-xs font-mono text-precision-text-secondary">
                    2.5h → 1.4h
                  </p>
                </div>

                <div className="bg-[#E8F4FA] p-6 rounded-card border-2 border-[#1E3A5F]/20 hover:border-[#1E3A5F]/40 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] text-center">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Demo-to-Conversion
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-precision-secondary">
                    ↑ {conversionCount}%
                  </p>
                </div>

                <div className="bg-[#E0F9F4] p-6 rounded-card border-2 border-[#00D4AA]/30 hover:border-[#00D4AA]/50 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] text-center">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Manual Classification Work
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-precision-accent">
                    ↓ {classificationCount}%
                  </p>
                </div>

                <div className="bg-[#FFF4E6] p-6 rounded-card border-2 border-[#F39C12]/30 hover:border-[#F39C12]/50 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] text-center">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Error Detection Rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-precision-warning">
                    ↑ {errorDetectionCount}%
                  </p>
                </div>

                <div className="bg-[#E8F0FA] p-6 rounded-card border-2 border-[#0A2540]/20 hover:border-[#0A2540]/40 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] text-center">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Enterprise Deals
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-precision-primary">
                    {enterpriseDealsCount}
                  </p>
                  <p className="text-xs font-mono text-precision-text-secondary">
                    closed in 6 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="challenge"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              🎯 The Challenge
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-base text-precision-text-primary leading-[150%] mb-6">
                  Computis had a solid, functional platform for crypto tax
                  management—but CPAs were still spending excessive time on
                  manual transaction classification. The existing UI handled
                  data well, but lacked intelligent automation features that
                  competitors were beginning to offer.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FDEEEE] to-[#FCE4E4] rounded-card p-6 border-l-4 border-precision-error transition-all duration-200 hover:shadow-precision-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-xl font-bold font-heading text-[#C0392B] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-precision-error" />
                  Pain Points Identified
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-2 h-2 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Manual classification of thousands of transactions per
                      client
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-2 h-2 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      No automated anomaly detection for FMV discrepancies
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-2 h-2 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Repetitive rule creation for common transaction patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-2 h-2 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Limited visibility into classification decisions for audit
                      defense
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#E8F4FA] to-[#D4E9F7] rounded-card p-6 border-l-4 border-precision-secondary">
                <h3 className="text-xl font-bold font-heading text-precision-primary mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-precision-secondary" />
                  The Opportunity
                </h3>
                <p className="text-base text-precision-text-primary leading-[150%]">
                  Design and implement AI-powered features that would automate
                  routine work while keeping CPAs in control—turning Computis
                  into a truly intelligent tax automation platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              💡 My Approach
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-base text-precision-text-primary leading-[150%] mb-6">
                  I led the design of Computis's AI feature suite, focusing on{" "}
                  <span className="font-semibold text-precision-accent">
                    augmentation over automation
                  </span>
                  —ensuring AI enhanced CPA expertise rather than replacing
                  professional judgment.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FAFBFC] to-[#F0F4F8] rounded-card p-6 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#E8F4FA] hover:to-[#D4E9F7]">
                <h3 className="text-xl font-semibold font-heading text-precision-text-primary mb-4">
                  Research Foundation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      8 CPA interviews identifying automation opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      6 workflow shadowing sessions to map classification
                      patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      Competitive analysis of AI features (TaxBit, Cryptio,
                      CoinTracker)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      4 usability test cycles validating AI interaction patterns
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] rounded-card p-6 border-l-4 border-precision-accent">
                <p className="text-xs font-semibold text-[#0A7A5E] mb-2 uppercase tracking-wider">
                  🎯 Key Insight:
                </p>
                <p className="text-base text-precision-text-primary leading-[150%] italic">
                  CPAs wanted AI to handle repetitive work, but needed
                  transparency and override control to maintain professional
                  liability standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              ✨ AI Feature Design Solutions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-card p-8 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border-l-4 border-precision-accent">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-precision-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-heading text-precision-text-primary mb-2">
                      AI-Powered Classification with Confidence Indicators
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="AI Classification confidence indicators demonstration video"
                  problem="Manual classification consumed 60%+ of CPA time."
                  solution="ML-driven auto-classification with visual confidence scores (High/Medium/Low) and one-click accept/reject controls."
                  impact="85% reduction in manual classification work; CPAs review only flagged items."
                />
              </div>

              <div className="bg-white rounded-card p-8 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border-l-4 border-precision-secondary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-precision-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-heading text-precision-text-primary mb-2">
                      Intelligent Audit Trail System
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Intelligent Audit Trail System demonstration video"
                  problem="No visibility into how classifications were determined."
                  solution="AI-generated audit logs documenting classification rationale, rule triggers, and decision history."
                  impact="40% reduction in compliance preparation time; enabled self-service IRS audit defense."
                />
              </div>

              <div className="bg-white rounded-card p-8 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border-l-4 border-precision-success">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-precision-success" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-heading text-precision-text-primary mb-2">
                      Smart Rule Builder with Pattern Recognition
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Smart Rule Builder with Pattern Recognition demonstration video"
                  problem="CPAs repeatedly created similar rules for common scenarios."
                  solution="AI suggests rule templates based on transaction patterns; no-code builder with natural language preview."
                  impact="Rule creation time reduced from 15 minutes to 90 seconds; 32% increase in demo conversions."
                />
              </div>

              <div className="bg-white rounded-card p-8 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border-l-4 border-precision-error">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FDEEEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-precision-error" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold font-heading text-precision-text-primary mb-2">
                      Proactive Anomaly Detection Engine
                    </h3>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F3bbe062155dd44f39a551875b4c99ff9?alt=media&token=f768e0a7-6142-4898-9d89-b2f0c86f24e9&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Proactive Anomaly Detection Engine demonstration video"
                  problem="FMV errors and data inconsistencies discovered too late."
                  solution="ML-powered anomaly detection with inline color-coded flags and explanatory tooltips."
                  impact="150% increase in error detection; issues caught before client delivery."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="stakeholder"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              🤝 Stakeholder Alignment
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-card p-6 shadow-precision-sm hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <h3 className="text-xl font-semibold font-heading text-precision-text-primary mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-precision-accent" />
                  Balancing Automation & Control
                </h3>
                <p className="text-base text-precision-text-primary leading-[150%] mb-4">
                  <span className="font-semibold text-precision-text-primary">
                    Challenge:
                  </span>{" "}
                  Engineering wanted maximum automation; CPAs required override
                  capabilities for liability protection.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FAFBFC] to-[#F0F4F8] rounded-card p-6 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#E8F4FA] hover:to-[#D4E9F7]">
                <h3 className="text-xl font-semibold font-heading text-precision-text-primary mb-4">
                  My Approach
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      Facilitated cross-functional workshop mapping trust
                      requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      Presented user research showing 40% of competitor
                      complaints cited "lack of control"
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm leading-[150%]">
                      Designed graduated autonomy system: High confidence →
                      Auto-apply | Medium → Review queue | Low → Manual required
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] rounded-card p-6 border-l-4 border-precision-success">
                <h3 className="text-xl font-semibold font-heading text-[#0A7A5E] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-precision-success" />
                  Outcome
                </h3>
                <p className="text-base text-precision-text-primary leading-[150%] mb-4">
                  The tiered confidence system became a key differentiator. One
                  enterprise prospect specifically cited "professional control"
                  as their deciding factor.
                </p>
                <blockquote className="bg-white/90 p-6 rounded-card italic text-base leading-[150%] border-l-4 border-precision-success">
                  <p className="text-[#0A7A5E]">
                    "Finally, AI that works *with* me instead of replacing my
                    judgment."
                  </p>
                  <cite className="block text-xs text-precision-success mt-2 not-italic font-mono">
                    — CPA Beta User
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section
          id="results"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              📈 Results & Business Impact
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-card shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border border-[#E3E8EF]">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-precision-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold font-heading text-precision-text-primary">
                      Enterprise Deals
                    </h3>
                  </div>
                  <p className="text-sm text-precision-text-secondary">
                    3 enterprise CPA firm deals closed within 6 months of AI
                    feature launch
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border border-[#E3E8EF]">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-precision-success" />
                    <h3 className="text-lg sm:text-xl font-semibold font-heading text-precision-text-primary">
                      Compliance
                    </h3>
                  </div>
                  <p className="text-sm text-precision-text-secondary">
                    Zero FMV disputes reported post-implementation
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border border-[#E3E8EF]">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-precision-accent" />
                    <h3 className="text-lg sm:text-xl font-semibold font-heading text-precision-text-primary">
                      Platform Expansion
                    </h3>
                  </div>
                  <p className="text-sm text-precision-text-secondary">
                    Capabilities expanded to serve DAOs and hedge funds
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card shadow-precision-sm hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] border border-[#E3E8EF]">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-precision-secondary" />
                    <h3 className="text-lg sm:text-xl font-semibold font-heading text-precision-text-primary">
                      Key Differentiator
                    </h3>
                  </div>
                  <p className="text-sm text-precision-text-secondary">
                    AI features cited as primary differentiator in 78% of won
                    deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="learnings"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl sm:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              💡 Key Learnings
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#E8F4FA] to-[#D4E9F7] p-6 rounded-card border border-precision-secondary/20 transition-all duration-200 hover:border-precision-secondary/40 hover:scale-[1.02]">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Augmentation {">"} Automation
                  </h3>
                  <p className="text-sm text-precision-text-secondary">
                    CPAs adopted AI faster when they retained control
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] p-6 rounded-card border border-precision-accent/20 transition-all duration-200 hover:border-precision-accent/40 hover:scale-[1.02]">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Transparency Builds Trust
                  </h3>
                  <p className="text-sm text-precision-text-secondary">
                    Confidence scores and audit trails drove adoption
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] p-6 rounded-card border border-precision-success/20 transition-all duration-200 hover:border-precision-success/40 hover:scale-[1.02]">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Pattern Recognition = Scale
                  </h3>
                  <p className="text-sm text-precision-text-secondary">
                    Smart suggestions multiplied CPA efficiency
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#FFF4E6] to-[#FFE9CC] p-6 rounded-card border border-precision-warning/20 transition-all duration-200 hover:border-precision-warning/40 hover:scale-[1.02]">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    AI UX is Different
                  </h3>
                  <p className="text-sm text-precision-text-secondary">
                    Designing for probabilistic outputs requires new interaction
                    patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <div className="fixed bottom-20 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-6 relative pointer-events-none">
          <button
            onClick={scrollToTop}
            className={`absolute right-6 p-4 rounded-button bg-gradient-to-r from-precision-accent to-precision-secondary text-white shadow-precision-md hover:shadow-precision-md transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-precision-accent focus:ring-offset-2 pointer-events-auto ${
              showScrollTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16 pointer-events-none"
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
