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
  Clock,
  Target,
  Zap,
  Brain,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import VideoOverlay, { FeatureCards } from "../components/VideoOverlay";
import { useIntersectionAnimation } from "../hooks/use-page-animations";
import "../styles/computis-case-study.css";

export default function ComputisCaseStudy() {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isFeatureDeepDivesExpanded, setIsFeatureDeepDivesExpanded] = useState(false);
  const [isAICapabilitiesExpanded, setIsAICapabilitiesExpanded] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollThreshold = isMobile ? window.innerHeight * 1.5 : 400;
      setShowScrollTop(window.scrollY > scrollThreshold);
      setIsNavSticky(window.scrollY > 300);

      // Calculate scroll progress
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsSummaryExpanded(!isMobile);
  }, []);

  // Lightbox keyboard and scroll handling
  useEffect(() => {
    if (lightboxImage) {
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";

      // Close on ESC key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setLightboxImage(null);
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [lightboxImage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-precision-neutral scroll-smooth relative overflow-hidden font-sans">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-precision-accent to-precision-secondary z-[9999] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

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

      <header className="max-w-[1200px] mx-auto px-6 pt-8 pb-4 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="flex flex-col">
          <span className="inline-block bg-precision-accent text-white px-3 py-1.5 rounded-pill text-xs font-semibold tracking-tight mb-3 w-fit">
            FinTech AI/UX Case Study
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-precision-text-primary leading-[110%] tracking-tight mb-3">
            Computis — AI-Powered Crypto Tax Automation
          </h1>
          <p className="text-base text-precision-text-secondary leading-[140%] mb-6">
            Designing AI features that <strong>augment CPA expertise</strong>{" "}
            while maintaining professional control and IRS audit defensibility
          </p>

          {/* Hero Metrics Grid - Above the Fold */}
          <div className="hero-metrics-grid mb-6">
            <div className="hero-metric-card hero-metric-card--accent shadow-precision-sm">
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                AI Trust
              </p>
              <p className="text-3xl font-bold text-precision-accent mb-1">
                89%
              </p>
              <p className="text-xs text-precision-text-secondary">
                Acceptance rate
              </p>
              <p className="text-xs font-semibold text-precision-success mt-2">
                +287% increase
              </p>
            </div>

            <div className="hero-metric-card hero-metric-card--success shadow-precision-sm">
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                Manual Work
              </p>
              <p className="text-3xl font-bold text-precision-success mb-1">
                ↓85%
              </p>
              <p className="text-xs text-precision-text-secondary">
                Classification time
              </p>
              <p className="text-xs font-semibold text-precision-accent mt-2">
                15% review only
              </p>
            </div>

            <div className="hero-metric-card hero-metric-card--secondary shadow-precision-sm">
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                Review Queue
              </p>
              <p className="text-3xl font-bold text-precision-secondary mb-1">
                11%
              </p>
              <p className="text-xs text-precision-text-secondary">
                Medium confidence
              </p>
              <p className="text-xs font-semibold text-precision-accent mt-2">
                Human context
              </p>
            </div>

            <div className="hero-metric-card hero-metric-card--warning shadow-precision-sm">
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                Audit Defense
              </p>
              <p className="text-3xl font-bold text-precision-warning mb-1">
                340%
              </p>
              <p className="text-xs text-precision-text-secondary">
                Trail exports
              </p>
              <p className="text-xs font-semibold text-precision-success mt-2">
                IRS-ready
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-[#E0F9F4] to-[#E8F4FA] rounded-card p-6 border-l-4 border-precision-accent">
            <blockquote className="text-base italic text-precision-text-primary leading-relaxed">
              "This is the first crypto tax tool I'd stake my license on."
            </blockquote>
            <cite className="block text-sm text-precision-accent mt-2 not-italic font-semibold">
              — Enterprise CPA, Big 4 Partner
            </cite>
          </div>

          <div className="flex items-center gap-2 mb-4 mt-6">
            <div className="reading-time">
              <Clock className="reading-time__icon" />
              <span>~2 min scan</span>
            </div>
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
              { href: "#problem", label: "Problem" },
              { href: "#research", label: "Research" },
              { href: "#solution", label: "Solution" },
              { href: "#decisions", label: "Decisions" },
              { href: "#impact", label: "Impact" },
              { href: "#skills", label: "Skills" },
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

      <div className="max-w-[1200px] mx-auto px-6 mt-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-card p-4 shadow-precision-sm transition-all duration-200 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600 border border-[#E3E8EF]">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-precision-accent focus-visible:ring-offset-2 rounded-sm p-1 -m-1"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider group-hover:text-precision-accent transition-colors duration-200">
              Project Details
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
              <div className="space-y-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">
                      Role
                    </span>
                    <p className="text-precision-text-primary mt-1">
                      Founding Lead Product Designer
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">
                      Duration
                    </span>
                    <p className="text-precision-text-primary mt-1">
                      10 months
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">
                      Platform
                    </span>
                    <p className="text-precision-text-primary mt-1">
                      Web SaaS (Desktop-first)
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">
                      Scope
                    </span>
                    <p className="text-precision-text-primary mt-1">
                      AI Strategy, UX Research, System Design
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#E3E8EF] pt-4">
                  <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2 block">
                    Tools & Team
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-precision-text-primary">
                        Tools:
                      </span>
                      <span className="text-precision-text-secondary ml-2">
                        Figma, Miro, Notion, Mixpanel
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-precision-text-primary">
                        Team:
                      </span>
                      <span className="text-precision-text-secondary ml-2">
                        CTO, ML Engineer, 2 Frontend Engineers, CEO
                      </span>
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
        className="max-w-[1200px] mx-auto px-6 pb-16 space-y-8 relative z-10"
      >
        {/* PROBLEM SECTION */}
        <section id="problem" className="section-animate scroll-mt-24 mt-6">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              The Problem
            </h2>

            <div className="insight-callout insight-callout--key mb-6">
              <div className="insight-callout__header">
                <Target className="w-5 h-5 text-[#0A7A5E]" />
                <p className="insight-callout__label insight-callout__label--key">
                  TL;DR
                </p>
              </div>
              <p className="insight-callout__text">
                CPAs spent 95% of time on repetitive classification. They needed
                AI that automates routine work while preserving professional
                judgment for IRS liability.
              </p>
            </div>

            {/* Pain Point Visual */}
            <div className="case-study-image mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffb144b7c7d4d4a4383dab85bad19238c?format=webp&width=2400"
                alt="CPA Time Allocation - Before: 95% manual classification vs After: 85% reduction with Computis AI"
                loading="eager"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ffb144b7c7d4d4a4383dab85bad19238c?format=webp&width=2400",
                  )
                }
              />
              <div className="case-study-image__overlay">
                <span className="case-study-image__zoom-hint">
                  Click to enlarge
                </span>
              </div>
            </div>
            <p className="case-study-image__caption">
              Figure 1: CPA workflow transformation — from 95% manual work to
              15% review-only
            </p>

            <div className="mt-6">
              <p className="text-base text-precision-text-primary leading-relaxed mb-4">
                Computis had a functional crypto tax platform—but CPAs spent{" "}
                <strong>95% of time on manual classification</strong> instead of
                high-value tax strategy and client consultation.
              </p>
            </div>

            <div className="mt-6 pl-6 border-l-4 border-precision-error bg-[#FDEEEE]/40 rounded-r-lg p-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-precision-error mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-precision-error mb-2">
                    Core Insight
                  </p>
                  <p className="text-base text-precision-text-primary leading-relaxed">
                    <strong>
                      This wasn't a UX problem—it was a trust problem.
                    </strong>{" "}
                    CPAs are personally liable for classifications. They needed
                    to explain decisions to the IRS, not accept black-box
                    outputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section id="research" className="section-animate scroll-mt-24">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Research Foundation
            </h2>

            <div className="insight-callout insight-callout--key mb-6">
              <div className="insight-callout__header">
                <Target className="w-5 h-5 text-[#0A7A5E]" />
                <p className="insight-callout__label insight-callout__label--key">
                  TL;DR
                </p>
              </div>
              <p className="insight-callout__text">
                12 CPA interviews + 50,000 transaction analysis revealed 73% of
                work followed predictable patterns—perfect for AI augmentation.
              </p>
            </div>

            {/* Research Approach Visual */}
            <div className="case-study-image mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F1716d0afb38b4317a6918302b42bafbc?format=webp&width=2400"
                alt="4-phase research methodology: Discovery, Analysis, Ideation, Validation"
                loading="lazy"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F1716d0afb38b4317a6918302b42bafbc?format=webp&width=2400",
                  )
                }
              />
              <div className="case-study-image__overlay">
                <span className="case-study-image__zoom-hint">
                  Click to enlarge
                </span>
              </div>
            </div>
            <p className="case-study-image__caption">
              Figure 2: 4-phase research approach — from discovery to validated
              prototypes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm">
                <h3 className="text-base font-semibold text-precision-text-primary mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-precision-accent" />
                  User Research
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span>
                      <strong>12 CPA interviews</strong> — trust requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span>
                      <strong>6 full-day observations</strong> — workflow
                      mapping
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span>
                      <strong>4 usability test cycles</strong> — AI interactions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#E8F4FA] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm">
                <h3 className="text-base font-semibold text-precision-text-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-precision-secondary" />
                  Data Analysis
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-secondary mt-1 flex-shrink-0" />
                    <span>
                      <strong>50,000+ transactions</strong> analyzed
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-secondary mt-1 flex-shrink-0" />
                    <span>
                      <strong>73% predictability</strong> rate discovered
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-secondary mt-1 flex-shrink-0" />
                    <span>
                      <strong>300+ G2 reviews</strong> analyzed
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Research Quotes Gallery */}
            <div className="case-study-image mt-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fc16ff6d62dda40b3bb78207aea59fa36?format=webp&width=2400"
                alt="Gallery of CPA interview quotes highlighting trust concerns, control needs, and AI skepticism"
                loading="lazy"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fc16ff6d62dda40b3bb78207aea59fa36?format=webp&width=2400",
                  )
                }
              />
              <div className="case-study-image__overlay">
                <span className="case-study-image__zoom-hint">
                  Click to enlarge
                </span>
              </div>
            </div>
            <p className="case-study-image__caption">
              Figure 3: Key insights from CPA interviews — trust, control, and
              professional liability
            </p>

            {/* CPA Workflow Journey Map */}
            <div className="case-study-image mt-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F915ad7e586fb40fe89c067803a1c1932?format=webp&width=2400"
                alt="CPA workflow journey map showing 5 phases with emotion curve and pain points"
                loading="lazy"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F915ad7e586fb40fe89c067803a1c1932?format=webp&width=2400",
                  )
                }
              />
              <div className="case-study-image__overlay">
                <span className="case-study-image__zoom-hint">
                  Click to enlarge
                </span>
              </div>
            </div>
            <p className="case-study-image__caption">
              Figure 4: CPA workflow journey — mapping pain points and AI
              intervention opportunities
            </p>

            {/* Competitive Analysis */}
            <div className="case-study-image mt-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F22c7c8ff6aa74095bfd48ef4ab12886e?format=webp&width=2400"
                alt="Competitive feature comparison matrix showing Computis advantages in AI transparency and professional control"
                loading="lazy"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F22c7c8ff6aa74095bfd48ef4ab12886e?format=webp&width=2400",
                  )
                }
              />
              <div className="case-study-image__overlay">
                <span className="case-study-image__zoom-hint">
                  Click to enlarge
                </span>
              </div>
            </div>
            <p className="case-study-image__caption">
              Figure 5: Competitive analysis — Computis differentiation through
              explainable AI
            </p>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="solution" className="section-animate scroll-mt-24">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Design Solutions
            </h2>

            {/* 3-Tier AI Confidence System Subsection */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-4">
                The Solution: 3-Tier AI Confidence System
              </h3>

              <div className="insight-callout insight-callout--key mb-6">
                <div className="insight-callout__header">
                  <Target className="w-5 h-5 text-[#0A7A5E]" />
                  <p className="insight-callout__label insight-callout__label--key">
                    TL;DR
                  </p>
                </div>
                <p className="insight-callout__text">
                  Designed tiered AI confidence system that reduced manual
                  classification by 85% while maintaining CPA professional
                  control through graduated autonomy.
                </p>
              </div>

              {/* Confidence Tier Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="confidence-tier confidence-tier--high shadow-precision-sm">
                  <span className="confidence-tier__badge confidence-tier__badge--high">
                    ≥90% Confidence
                  </span>
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    High Confidence
                  </h3>
                  <p className="text-sm text-precision-text-primary mb-3">
                    Auto-classified
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-relaxed">
                    CPAs trusted AI completely. No review needed. IRS-ready
                    documentation generated.
                  </p>
                  <p className="text-2xl font-bold text-green-600 mt-3">89%</p>
                  <p className="text-xs text-green-600">Acceptance rate</p>
                </div>

                <div className="confidence-tier confidence-tier--medium shadow-precision-sm">
                  <span className="confidence-tier__badge confidence-tier__badge--medium">
                    60-89% Confidence
                  </span>
                  <h3 className="text-lg font-bold text-yellow-700 mb-2">
                    Medium Confidence
                  </h3>
                  <p className="text-sm text-precision-text-primary mb-3">
                    Review queue
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-relaxed">
                    Flagged for human review. AI provides hypothesis +
                    rationale. CPA makes final call.
                  </p>
                  <p className="text-2xl font-bold text-yellow-600 mt-3">11%</p>
                  <p className="text-xs text-yellow-600">Override rate</p>
                </div>

                <div className="confidence-tier confidence-tier--low shadow-precision-sm">
                  <span className="confidence-tier__badge confidence-tier__badge--low">
                    &lt;60% Confidence
                  </span>
                  <h3 className="text-lg font-bold text-red-700 mb-2">
                    Low Confidence
                  </h3>
                  <p className="text-sm text-precision-text-primary mb-3">
                    Manual required
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-relaxed">
                    AI admits uncertainty. Full CPA manual classification with
                    context preservation.
                  </p>
                  <p className="text-2xl font-bold text-red-600 mt-3">15%</p>
                  <p className="text-xs text-red-600">Manual work</p>
                </div>
              </div>

              {/* Information Architecture */}
              <div className="case-study-image mt-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F550d96e6817647739d3e9f0d237b8c5d?format=webp&width=2400"
                  alt="Information architecture diagram showing AI feature integration across platform"
                  loading="lazy"
                  onClick={() =>
                    setLightboxImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F550d96e6817647739d3e9f0d237b8c5d?format=webp&width=2400",
                    )
                  }
                />
                <div className="case-study-image__overlay">
                  <span className="case-study-image__zoom-hint">
                    Click to enlarge
                  </span>
                </div>
              </div>
              <p className="case-study-image__caption">
                Figure 6: Platform information architecture — AI touchpoints
                throughout workflow
              </p>
            </div>

            {/* Design System Showcase Subsection */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-4">
                Design System Showcase
              </h3>

              <div className="mb-6">
                <p className="text-base text-precision-text-primary leading-relaxed">
                  We developed a comprehensive design system that unified
                  typography, color palettes, component libraries, and
                  interaction patterns across all touchpoints. This foundation
                  enabled rapid iteration while maintaining visual coherence and
                  professional credibility critical for CPAs managing
                  high-stakes tax workflows.
                </p>
              </div>

              {/* Design System Visual */}
              <div className="case-study-image mt-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fff1f0f89c6e1415b9ce20100e66f7b63?format=webp&width=2880"
                  alt="Computis design system showing typography, colors, components, and design tokens"
                  loading="lazy"
                  onClick={() =>
                    setLightboxImage(
                      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fff1f0f89c6e1415b9ce20100e66f7b63?format=webp&width=2880",
                    )
                  }
                />
                <div className="case-study-image__overlay">
                  <span className="case-study-image__zoom-hint">
                    Click to enlarge
                  </span>
                </div>
              </div>
              <p className="case-study-image__caption">
                Figure 7: Computis design system — typography, colors,
                components, and other important assets
              </p>
            </div>

            {/* AI Features - Collapsible Accordion */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => setIsAICapabilitiesExpanded(!isAICapabilitiesExpanded)}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#E0F9F4]/30 to-[#E8F4FA]/30 rounded-card border border-[#E3E8EF] hover:border-precision-accent/30 transition-all duration-200 group"
                aria-expanded={isAICapabilitiesExpanded}
              >
                <h3 className="text-lg font-bold font-heading text-precision-text-primary group-hover:text-precision-accent transition-colors">
                  Four AI Capabilities
                </h3>
                {isAICapabilitiesExpanded ? (
                  <ChevronUp className="w-5 h-5 text-precision-accent transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-precision-text-secondary group-hover:text-precision-accent transition-transform" />
                )}
              </button>

              {isAICapabilitiesExpanded && (
                <div className="space-y-4 animate-in fade-in-0 slide-in-from-top-4 duration-300">
                  {/* Feature 1: Classification */}
              <div className="bg-white rounded-card p-4 border border-[#E3E8EF] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-precision-accent" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-precision-text-primary">
                    Intelligent Transaction Classification
                  </h4>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-precision-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-precision-accent font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>3-tier confidence system</strong> —
                      Auto-classifies high-confidence transactions, flags
                      medium-confidence for review
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-accent font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>↓85% manual work</strong> — Reduces classification
                      time from hours to minutes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-accent font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>89% adoption rate</strong> — CPAs trust AI
                      classifications immediately
                    </span>
                  </li>
                </ul>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="AI Classification confidence indicators demonstration"
                />
              </div>

              {/* Feature 2: Audit Trail */}
              <div className="bg-white rounded-card p-4 border border-[#E3E8EF] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-precision-secondary" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-precision-text-primary">
                    Explainable Audit Trail
                  </h4>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-precision-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-precision-secondary font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>Complete decision history</strong> — Records every
                      AI decision with rationale and timestamps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-secondary font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>IRS-ready exports</strong> — Generate
                      audit-defensible documentation in seconds
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-secondary font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>↓40% compliance prep</strong> — Eliminates manual
                      audit trail documentation
                    </span>
                  </li>
                </ul>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Audit Trail System demonstration"
                />
              </div>

              {/* Feature 3: Rule Builder */}
              <div className="bg-white rounded-card p-4 border border-[#E3E8EF] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-precision-success" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-precision-text-primary">
                    Smart Rule Builder
                  </h4>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-precision-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-precision-success font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>No-code visual interface</strong> — Drag-and-drop
                      rule creation without engineering tickets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-success font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>5.5x adoption increase</strong> — Adoption jumped
                      from 12% to 67% with self-service rules
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-success font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>90% faster creation</strong> — Rule setup reduced
                      from 15 minutes to 90 seconds
                    </span>
                  </li>
                </ul>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Smart Rule Builder demonstration"
                />
              </div>

              {/* Feature 4: Anomaly Detection */}
              <div className="bg-white rounded-card p-4 border border-[#E3E8EF] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#FDEEEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-precision-error" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-precision-text-primary">
                    Real-Time Anomaly Detection
                  </h4>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-precision-text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-precision-error font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>Severity-tiered alerts</strong> — Flags errors,
                      warnings, and info with context (doesn't block)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-error font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>↑150% error detection</strong> — Catches mistakes
                      before export or client delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-precision-error font-bold mt-1">
                      •
                    </span>
                    <span>
                      <strong>Zero FMV disputes</strong> — No fair market value
                      discrepancies with IRS
                    </span>
                  </li>
                </ul>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F3bbe062155dd44f39a551875b4c99ff9?alt=media&token=f768e0a7-6142-4898-9d89-b2f0c86f24e9&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Anomaly Detection Engine demonstration"
                />
              </div>
                </div>
              )}
            </div>

            {/* UI Evolution */}
            <div className="case-study-image mt-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa6260d073e4549a18738fa5e8680edde?format=webp&width=2000"
                alt="Transaction classification UI evolution showing before and after AI integration"
                loading="lazy"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa6260d073e4549a18738fa5e8680edde?format=webp&width=2000",
                  )
                }
              />
              <div className="case-study-image__overlay">
                <span className="case-study-image__zoom-hint">
                  Click to enlarge
                </span>
              </div>
            </div>
            <p className="case-study-image__caption">
              Figure 7: UI evolution — before/after AI integration with
              confidence indicators
            </p>

            {/* UI Screens Section */}
            <div className="mt-12">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-6">
                UI Screens
              </h3>

              {/* 2x4 Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Row 1, Col 1: Dashboard */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F654640b5982b494784a83d94879b2ea7?format=webp&width=2400"
                      alt="Dashboard"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F654640b5982b494784a83d94879b2ea7?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Dashboard View:</strong> Main overview displaying
                    client portfolio metrics, AI confidence indicators, and
                    transaction review queues for daily CPA workflow management.
                  </p>
                </div>

                {/* Row 1, Col 2: Rule Builder */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fad154afdb4454723b13c98b39c008c2f?format=webp&width=2400"
                      alt="Rule Builder"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fad154afdb4454723b13c98b39c008c2f?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Rule Builder:</strong> Visual no-code interface
                    enabling CPAs to create custom classification rules with
                    drag-and-drop logic and real-time preview.
                  </p>
                </div>

                {/* Row 2, Col 1: Exports */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F9ffacf23e04648d098980ef3f7b64524?format=webp&width=2400"
                      alt="Exports"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F9ffacf23e04648d098980ef3f7b64524?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Exports:</strong> Batch export management screen for
                    generating IRS-ready tax forms, audit trails, and client
                    reports in multiple formats.
                  </p>
                </div>

                {/* Row 2, Col 2: Gain/Loss Report */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F671cf75b76ae4d83b63b82cb624ff6c7?format=webp&width=2400"
                      alt="Gain/Loss Report"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F671cf75b76ae4d83b63b82cb624ff6c7?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Gain/Loss Report:</strong> Comprehensive capital
                    gains summary showing realized profits, losses, and tax
                    liability calculations per IRS requirements.
                  </p>
                </div>

                {/* Row 3, Col 1: IRS Form 8949 */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F171b9e328697475e8e38a03978b66b21?format=webp&width=2400"
                      alt="IRS Form 8949"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F171b9e328697475e8e38a03978b66b21?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>IRS Form 8949:</strong> Auto-populated federal tax
                    form displaying cryptocurrency transactions with
                    AI-classified cost basis and disposal information.
                  </p>
                </div>

                {/* Row 3, Col 2: Client Management */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F0c191fba0ce843f2814e25dd5dd871c7?format=webp&width=2400"
                      alt="Client Management"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F0c191fba0ce843f2814e25dd5dd871c7?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Client Management:</strong> CPA firm dashboard for
                    managing multiple client accounts, onboarding status, and
                    delegated access permissions.
                  </p>
                </div>

                {/* Row 4, Col 1: Wallets and Exchanges */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F713dee498cdd4ecb978e77aeaa3e94cc?format=webp&width=2400"
                      alt="Wallets and Exchanges"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F713dee498cdd4ecb978e77aeaa3e94cc?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Wallets and Exchanges:</strong> Connection hub for
                    linking cryptocurrency wallets and exchange accounts to
                    import transaction data automatically.
                  </p>
                </div>

                {/* Row 4, Col 2: Audit Trail (Expanded view) */}
                <div>
                  <div className="case-study-image mb-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F54f11c6946374f7ba8a3012cf0d5bb47?format=webp&width=2400"
                      alt="Audit Trail (Expanded view)"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F54f11c6946374f7ba8a3012cf0d5bb47?format=webp&width=2400",
                        )
                      }
                    />
                    <div className="case-study-image__overlay">
                      <span className="case-study-image__zoom-hint">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-precision-text-primary">
                    <strong>Audit Trail:</strong> Detailed classification
                    history showing AI decisions, confidence scores, manual
                    overrides, and timestamps for IRS audit defense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY DECISIONS SECTION */}
        <section id="decisions" className="section-animate scroll-mt-24">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Key Design Decisions
            </h2>

            <div className="insight-callout insight-callout--key mb-6">
              <div className="insight-callout__header">
                <Target className="w-5 h-5 text-[#0A7A5E]" />
                <p className="insight-callout__label insight-callout__label--key">
                  TL;DR
                </p>
              </div>
              <p className="insight-callout__text">
                Four critical trade-offs balanced automation with professional
                control. Transparency over speed won enterprise deals.
              </p>
            </div>

            <div className="bg-white rounded-card border border-[#E3E8EF] overflow-x-auto shadow-sm">
              <table className="decisions-table">
                <thead>
                  <tr>
                    <th>Decision</th>
                    <th>Why</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="decisions-table__decision">
                      Show confidence scores
                    </td>
                    <td className="decisions-table__why">
                      CPAs need to know "how sure" AI is
                    </td>
                    <td className="decisions-table__result">89% trust rate</td>
                  </tr>
                  <tr>
                    <td className="decisions-table__decision">
                      Review queue vs auto-apply all
                    </td>
                    <td className="decisions-table__why">
                      Medium confidence = human context needed
                    </td>
                    <td className="decisions-table__result">
                      11% meaningful overrides
                    </td>
                  </tr>
                  <tr>
                    <td className="decisions-table__decision">
                      Async rationale loading
                    </td>
                    <td className="decisions-table__why">
                      Balance speed with transparency
                    </td>
                    <td className="decisions-table__result">
                      "Explainable AI" differentiator
                    </td>
                  </tr>
                  <tr>
                    <td className="decisions-table__decision">
                      Override always allowed
                    </td>
                    <td className="decisions-table__why">
                      Professional liability protection
                    </td>
                    <td className="decisions-table__result">
                      CPA control preserved
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-card p-6 border-l-4 border-precision-warning shadow-sm">
                <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                  Critical Trade-off: Speed vs. Transparency
                </h3>
                <p className="text-sm text-precision-text-primary leading-relaxed mb-3">
                  Removing rationale would cut processing 60%—but competitor
                  "black box" complaints outnumbered speed complaints 3:1.
                </p>
                <p className="text-xs font-semibold text-precision-success">
                  ✓ Chose transparency. Won 3 enterprise deals citing audit
                  defensibility.
                </p>
              </div>

              <div className="bg-white rounded-card p-6 border-l-4 border-precision-accent shadow-sm">
                <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                  Stakeholder Alignment
                </h3>
                <p className="text-sm text-precision-text-primary leading-relaxed mb-3">
                  Engineering wanted max automation; CPAs required override
                  capabilities. Tiered system satisfied both.
                </p>
                <p className="text-xs font-semibold text-precision-success">
                  ✓ "Finally, AI that works *with* me" — CPA Beta User
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT SECTION */}
        <section id="impact" className="section-animate scroll-mt-24">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Business Impact
            </h2>

            <div className="insight-callout insight-callout--key mb-6">
              <div className="insight-callout__header">
                <Target className="w-5 h-5 text-[#0A7A5E]" />
                <p className="insight-callout__label insight-callout__label--key">
                  TL;DR
                </p>
              </div>
              <p className="insight-callout__text">
                85% reduction in manual work, 32% conversion increase, 3
                enterprise deals closed. AI features cited in 78% of won deals.
              </p>
            </div>

            {/* Impact Cards */}
            <div className="impact-cards mb-8">
              <div className="impact-card shadow-precision-md">
                <TrendingUp className="impact-card__icon" />
                <p className="impact-card__metric">78%</p>
                <p className="impact-card__label">Won deals citing AI</p>
              </div>

              <div className="impact-card shadow-precision-md">
                <Users className="impact-card__icon" />
                <p className="impact-card__metric">3</p>
                <p className="impact-card__label">Enterprise CPA firms</p>
              </div>

              <div className="impact-card shadow-precision-md">
                <Shield className="impact-card__icon" />
                <p className="impact-card__metric">Zero</p>
                <p className="impact-card__label">FMV disputes</p>
              </div>

              <div className="impact-card shadow-precision-md">
                <CheckCircle className="impact-card__icon" />
                <p className="impact-card__metric">Big 4</p>
                <p className="impact-card__label">Partnership secured</p>
              </div>
            </div>

            {/* Quantitative Results */}
            <div className="bg-white rounded-card border border-[#E3E8EF] overflow-x-auto shadow-sm">
              <table className="decisions-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Before</th>
                    <th>After</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="decisions-table__why">
                      Manual classification workload
                    </td>
                    <td>100% manual</td>
                    <td>15% manual</td>
                    <td className="decisions-table__result">↓85%</td>
                  </tr>
                  <tr>
                    <td className="decisions-table__why">
                      CPA onboarding (new client)
                    </td>
                    <td>2.5 hours</td>
                    <td>1.4 hours</td>
                    <td className="decisions-table__result">↓45%</td>
                  </tr>
                  <tr>
                    <td className="decisions-table__why">
                      Demo-to-conversion rate
                    </td>
                    <td>Baseline</td>
                    <td>+32%</td>
                    <td className="decisions-table__result">↑32%</td>
                  </tr>
                  <tr>
                    <td className="decisions-table__why">
                      Error detection accuracy
                    </td>
                    <td>Baseline</td>
                    <td>+150%</td>
                    <td className="decisions-table__result">↑150%</td>
                  </tr>
                  <tr>
                    <td className="decisions-table__why">
                      Audit trail exports
                    </td>
                    <td>Baseline</td>
                    <td>+340%</td>
                    <td className="decisions-table__result">↑340%</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* CORE INSIGHT */}
        <section className="section-animate scroll-mt-24">
          <div className="bg-gradient-to-r from-[#0A2540] via-[#1E3A5F] to-[#0A2540] rounded-card p-8 shadow-precision-md hover:shadow-xl transition-all duration-300 border-2 border-[#00D4AA]">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white leading-tight mb-4">
                The Core Insight
              </h2>
              <div className="max-w-[900px] mx-auto">
                <p className="text-lg text-white/90 leading-relaxed mb-4 font-medium">
                  In regulated domains, AI transparency isn't a feature—it's the
                  product.
                  <span className="text-[#00D4AA] font-bold">
                    {" "}
                    Augmentation beats automation
                  </span>{" "}
                  when professionals retain control,
                  <span className="text-[#00D4AA] font-bold">
                    {" "}
                    simplicity beats capability
                  </span>{" "}
                  when users actually adopt it, and{" "}
                  <span className="text-[#00D4AA] font-bold">
                    failed experiments teach the most
                  </span>
                  — CPAs rejected full automation not for accuracy, but to
                  preserve professional judgment.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-pill border border-white/20">
                  <Lightbulb className="w-4 h-4 text-[#00D4AA]" />
                  <span className="text-sm font-semibold text-white">
                    Human-in-the-loop isn't a weakness—it's how you earn trust
                    in high-stakes AI.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section-animate scroll-mt-24">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4 text-center">
              Skills Demonstrated
            </h2>

            <div className="skills-tags mt-6">
              <span className="skill-tag">AI/ML Product Strategy</span>
              <span className="skill-tag">Human-Centered AI Design</span>
              <span className="skill-tag">Stakeholder Management</span>
              <span className="skill-tag">UX Research (Qualitative)</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Interaction Design</span>
              <span className="skill-tag">Design Systems</span>
              <span className="skill-tag">Usability Testing</span>
              <span className="skill-tag">Cross-Functional Leadership</span>
              <span className="skill-tag">No-Code Tools</span>
              <span className="skill-tag">B2B SaaS</span>
              <span className="skill-tag">FinTech/RegTech</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Mixpanel</span>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-precision-text-secondary mb-4">
                What I'd do differently next time
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
                <div className="bg-white rounded-card p-5 border-l-4 border-precision-accent shadow-sm text-left">
                  <h4 className="text-sm font-semibold text-precision-text-primary mb-2">
                    Ship minimal first
                  </h4>
                  <p className="text-xs text-precision-text-secondary leading-relaxed">
                    Rule builder v1 was too complex. Launch at minimum viable
                    complexity, add power features based on observed demand.
                  </p>
                </div>
                <div className="bg-white rounded-card p-5 border-l-4 border-precision-secondary shadow-sm text-left">
                  <h4 className="text-sm font-semibold text-precision-text-primary mb-2">
                    Document trade-offs explicitly
                  </h4>
                  <p className="text-xs text-precision-text-secondary leading-relaxed">
                    Create "trade-off memos" for major architectural choices to
                    reduce relitigated debates.
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

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="image-lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox - Click anywhere to close"
        >
          <button
            className="image-lightbox__close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
            aria-label="Close lightbox (ESC)"
            title="Close (ESC)"
            autoFocus
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={lightboxImage}
              alt="Enlarged screenshot - Full resolution view"
              className="image-lightbox__image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <div className="fixed bottom-20 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-6 relative pointer-events-none">
          <button
            onClick={scrollToTop}
            className={`absolute right-6 p-3 sm:p-4 min-h-[48px] min-w-[48px] rounded-button bg-gradient-to-r from-precision-accent to-precision-secondary text-white shadow-precision-md hover:shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-precision-accent pointer-events-auto ${
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
