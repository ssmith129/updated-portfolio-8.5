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
import { useCountUp } from "../hooks/use-count-up";
import "../styles/computis-case-study.css";

export default function ComputisCaseStudy() {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isFeatureDeepDivesExpanded, setIsFeatureDeepDivesExpanded] =
    useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Hero metrics animation
  const { elementRef: metricsRef, isVisible: metricsVisible } =
    useIntersectionAnimation(0.5);
  const aiTrustCount = useCountUp(89, 2000, metricsVisible, 0, 0);
  const manualWorkCount = useCountUp(85, 2000, metricsVisible, 200, 0);
  const reviewQueueCount = useCountUp(11, 2000, metricsVisible, 400, 0);
  const auditDefenseCount = useCountUp(340, 2000, metricsVisible, 600, 0);

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
          <span className="badge badge--primary mb-4 w-fit">
            FinTech AI/UX Case Study
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-precision-text-primary leading-[110%] tracking-tight mb-4">
            Computis — AI-Powered Crypto Tax Automation
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="reading-time">
              <Clock className="reading-time__icon" />
              <span>~2 min scan</span>
            </div>
          </div>

          <p className="text-base text-precision-text-secondary leading-[140%] mb-6 !max-w-full !text-left !mx-0">
            Designing AI features that <strong>augment CPA expertise</strong>{" "}
            while maintaining professional control and IRS audit defensibility
          </p>

          {/* Hero Image - Live Prototype */}
          <div className="relative w-full max-w-[2880px] mx-auto mb-8 group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-precision-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fd07dc7ebc8de47519381b1f967eacde1?format=webp&width=2880"
                alt="Computis Crypto Tax Engine Dashboard - Live Prototype"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Darkening overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* View Live Prototype Link */}
              <a
                href="https://computis.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <div className="bg-precision-accent text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-precision-lg hover:bg-precision-accent/90 transition-colors duration-200 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Live Prototype
                </div>
              </a>
            </div>
          </div>

          {/* Hero Metrics Grid - Above the Fold */}
          <div className="hero-metrics-grid mb-6" ref={metricsRef}>
            <div className="hero-metric-card hero-metric-card--accent shadow-precision-sm">
              <Brain className="w-6 h-6 text-precision-accent mb-4 mx-auto" />
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mx-auto mb-2">
                AI Trust
              </p>
              <p className="text-3xl font-bold text-precision-accent mx-auto mb-1">
                {aiTrustCount}%
              </p>
              <p className="text-xs text-precision-text-secondary mx-auto">
                Acceptance rate
              </p>
              <p className="text-xs font-semibold text-precision-success mx-auto mt-2">
                +287% increase
              </p>
            </div>

            <div className="hero-metric-card hero-metric-card--success shadow-precision-sm">
              <Zap className="w-6 h-6 text-precision-success mb-4 mx-auto" />
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mx-auto mb-2">
                Manual Work
              </p>
              <p className="text-3xl font-bold text-precision-success mx-auto mb-1">
                ↓{manualWorkCount}%
              </p>
              <p className="text-xs text-precision-text-secondary mx-auto">
                Classification time
              </p>
              <p className="text-xs font-semibold text-precision-accent mx-auto mt-2">
                15% review only
              </p>
            </div>

            <div className="hero-metric-card hero-metric-card--secondary shadow-precision-sm">
              <CheckCircle className="w-6 h-6 text-precision-secondary mb-4 mx-auto" />
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mx-auto mb-2">
                Review Queue
              </p>
              <p className="text-3xl font-bold text-precision-secondary mx-auto mb-1">
                {reviewQueueCount}%
              </p>
              <p className="text-xs text-precision-text-secondary mx-auto">
                Medium confidence
              </p>
              <p className="text-xs font-semibold text-precision-accent mx-auto mt-2">
                Human context
              </p>
            </div>

            <div className="hero-metric-card hero-metric-card--warning shadow-precision-sm">
              <Shield className="w-6 h-6 text-precision-warning mb-4 mx-auto" />
              <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mx-auto mb-2">
                Audit Defense
              </p>
              <p className="text-3xl font-bold text-precision-warning mx-auto mb-1">
                {auditDefenseCount}%
              </p>
              <p className="text-xs text-precision-text-secondary mx-auto">
                Trail exports
              </p>
              <p className="text-xs font-semibold text-precision-success mx-auto mt-2">
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
        <div className="bg-white/80 backdrop-blur-sm rounded-card p-6 shadow-precision-sm transition-all duration-200 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600 border border-[#E3E8EF]">
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
              <div className="space-y-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
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
        className="max-w-[1200px] mx-auto px-6 pb-16 space-y-12 relative z-10"
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
              Figure 1: CPA workflow transformation
            </p>

            <div className="mt-6 pl-6 border-l-4 border-precision-error bg-[#FDEEEE]/40 rounded-r-lg p-4 text-left">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-5 h-5 text-precision-error mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-precision-error mb-2 text-left">
                    Core Insight
                  </p>
                  <p className="text-base text-precision-text-primary leading-relaxed !text-left !mx-0">
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

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

        {/* PROJECT TIMELINE SECTION */}
        <section className="section-animate scroll-mt-24">
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Project Timeline
            </h2>

            {/* Project Timeline Visual */}
            <div className="case-study-image mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4e765d94e6274773be00450fbc4ed410?format=webp&width=2400"
                alt="Project timeline showing 5 phases over 10 months: Discovery & Scoping, Research Synthesis, Design Iteration, Build & Testing, Launch & Scale"
                loading="lazy"
                onClick={() =>
                  setLightboxImage(
                    "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F4e765d94e6274773be00450fbc4ed410?format=webp&width=2400",
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
              Figure 2: 10-month project timeline with 5 key phases
            </p>
          </div>
        </section>

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

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
              Figure 3: 4-phase research methodology
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm">
                <h3 className="text-base font-semibold text-precision-text-primary mb-4 flex items-center gap-2">
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
                <h3 className="text-base font-semibold text-precision-text-primary mb-4 flex items-center gap-2">
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
              Figure 4: Key insights from CPA interviews
            </p>

            {/* CPA Workflow Journey Map - Elevated */}
            <div className="mt-12 bg-gradient-to-br from-[#E0F9F4]/20 to-[#E8F4FA]/20 rounded-2xl p-8 border-2 border-precision-accent/20 relative overflow-hidden signature-accent">
              <h3 className="text-sm font-semibold text-precision-accent uppercase tracking-wider mb-4">
                Research Synthesis
              </h3>
              <div className="case-study-image">
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
              <p className="case-study-image__caption mt-4">
                Figure 5: CPA workflow journey map
              </p>
            </div>

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
              Figure 6: Competitive feature comparison
            </p>
          </div>
        </section>

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

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
                <div className="confidence-tier confidence-tier--high shadow-precision-sm flex flex-col">
                  <span className="confidence-tier__badge confidence-tier__badge--high mx-auto">
                    ≥90% Confidence
                  </span>
                  <h3 className="text-lg font-medium text-green-700 mx-auto mb-2">
                    High Confidence
                  </h3>
                  <p className="text-sm text-precision-text-primary mx-auto mb-4">
                    Auto-classified
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-relaxed text-center">
                    CPAs trusted AI completely. No review needed. IRS-ready
                    documentation generated.
                  </p>
                  <p className="text-2xl font-bold text-green-600 mx-auto mt-4">
                    89%
                  </p>
                  <p className="text-xs text-green-600 mx-auto">
                    Acceptance rate
                  </p>
                </div>

                <div className="confidence-tier confidence-tier--medium shadow-precision-sm flex flex-col">
                  <span className="confidence-tier__badge confidence-tier__badge--medium mx-auto">
                    60-89% Confidence
                  </span>
                  <h3 className="text-lg font-medium text-yellow-700 mx-auto mb-2">
                    Medium Confidence
                  </h3>
                  <p className="text-sm text-precision-text-primary mx-auto mb-4">
                    Review queue
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-relaxed text-center">
                    Flagged for human review. AI provides hypothesis +
                    rationale. CPA makes final call.
                  </p>
                  <p className="text-2xl font-bold text-yellow-600 mx-auto mt-4">
                    11%
                  </p>
                  <p className="text-xs text-yellow-600 mx-auto">
                    Override rate
                  </p>
                </div>

                <div className="confidence-tier confidence-tier--low shadow-precision-sm flex flex-col">
                  <span className="confidence-tier__badge confidence-tier__badge--low mx-auto">
                    &lt;60% Confidence
                  </span>
                  <h3 className="text-lg font-medium text-red-700 mx-auto mb-2">
                    Low Confidence
                  </h3>
                  <p className="text-sm text-precision-text-primary mx-auto mb-4">
                    Manual required
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-relaxed text-center">
                    AI admits uncertainty. Full CPA manual classification with
                    context preservation.
                  </p>
                  <p className="text-2xl font-bold text-red-600 mx-auto mt-4">
                    15%
                  </p>
                  <p className="text-xs text-red-600 mx-auto">Manual work</p>
                </div>
              </div>

              {/* Information Architecture */}
              <div className="case-study-image mt-12">
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
                Figure 7: Platform information architecture
              </p>
            </div>

            {/* Design Iteration Progression Subsection */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-4">
                Design Iteration Progression
              </h3>

              <div className="mb-6">
                <p className="text-base text-precision-text-primary leading-relaxed !text-left !mx-0 !max-w-full">
                  Evolution from initial sketch to final UI—showcasing the
                  iterative design process for the Transactions screen.
                </p>
              </div>

              {/* Design Iteration Visual */}
              <div className="max-w-[2400px] mx-auto mt-6">
                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fe152b9add5744c77bf02ed487ab467f0?alt=media&token=9a0234f5-f076-43f7-a7fe-795ca4f5db6b&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Design iteration progression video showing evolution from sketch to wireframe to final UI"
                />
              </div>
              <p className="case-study-image__caption">
                Figure 6.5: Design iteration progression — from sketch to
                wireframe to final UI
              </p>
            </div>

            {/* Design System Showcase Subsection */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-4">
                Design System Showcase
              </h3>

              <div className="mb-6">
                <p className="text-base text-precision-text-primary leading-relaxed !text-left !mx-0 !max-w-full">
                  Unified design system covering typography, color, components,
                  and interaction patterns—enabling rapid iteration with
                  professional credibility.
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
                Figure 8: Computis design system
              </p>

              {/* View Full Design System Button */}
              <div className="flex justify-center mt-6">
                <a
                  href="/computis-design-system-showcase.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white font-medium rounded-lg hover:bg-[#1E3A5F] transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View Full Design System
                </a>
              </div>
            </div>

            {/* Four AI Capabilities - 2×2 Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-6">
                Four AI Capabilities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1: Classification */}
                <div className="bg-white rounded-card p-6 border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-precision-accent" />
                    </div>
                    <h4 className="text-base font-semibold font-heading text-precision-text-primary">
                      Intelligent Transaction Classification
                    </h4>
                  </div>

                  <div className="mb-4">
                    <p className="text-3xl font-bold text-precision-accent mb-1">
                      89%
                    </p>
                    <p className="text-sm text-precision-text-secondary">
                      CPAs trust AI classifications immediately
                    </p>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="AI Classification confidence indicators demonstration"
                  />
                </div>

                {/* Feature 2: Audit Trail */}
                <div className="bg-white rounded-card p-6 border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-precision-secondary" />
                    </div>
                    <h4 className="text-base font-semibold font-heading text-precision-text-primary">
                      Explainable Audit Trail
                    </h4>
                  </div>

                  <div className="mb-4">
                    <p className="text-3xl font-bold text-precision-secondary mb-1">
                      ↓40%
                    </p>
                    <p className="text-sm text-precision-text-secondary">
                      Eliminates manual audit trail documentation
                    </p>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="Audit Trail System demonstration"
                  />
                </div>

                {/* Feature 3: Rule Builder */}
                <div className="bg-white rounded-card p-6 border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-precision-success" />
                    </div>
                    <h4 className="text-base font-semibold font-heading text-precision-text-primary">
                      Smart Rule Builder
                    </h4>
                  </div>

                  <div className="mb-4">
                    <p className="text-3xl font-bold text-precision-success mb-1">
                      5.5x
                    </p>
                    <p className="text-sm text-precision-text-secondary">
                      Adoption jumped from 12% to 67% with self-service rules
                    </p>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="Smart Rule Builder demonstration"
                  />
                </div>

                {/* Feature 4: Anomaly Detection */}
                <div className="bg-white rounded-card p-6 border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FDEEEE] rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-precision-error" />
                    </div>
                    <h4 className="text-base font-semibold font-heading text-precision-text-primary">
                      Real-Time Anomaly Detection
                    </h4>
                  </div>

                  <div className="mb-4">
                    <p className="text-3xl font-bold text-precision-error mb-1">
                      Zero
                    </p>
                    <p className="text-sm text-precision-text-secondary">
                      No fair market value discrepancies with IRS
                    </p>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F3bbe062155dd44f39a551875b4c99ff9?alt=media&token=f768e0a7-6142-4898-9d89-b2f0c86f24e9&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="Anomaly Detection Engine demonstration"
                  />
                </div>
              </div>
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
              Figure 9: UI evolution with AI integration
            </p>

            {/* UI Screens Section - Hero Screens */}
            <div className="mt-12">
              <h3 className="text-xl font-bold font-heading text-precision-text-primary mb-4">
                UI Screens
              </h3>
              <p className="text-base text-precision-text-primary leading-relaxed mb-6 !text-left !mx-0 !max-w-full">
                Four core screens demonstrating the AI-powered workflow that
                transformed CPA cryptocurrency tax operations.
              </p>

              {/* 2x2 Hero Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dashboard */}
                <div>
                  <div className="case-study-image mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F654640b5982b494784a83d94879b2ea7?format=webp&width=2400"
                      alt="Dashboard Overview"
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
                    <strong>Dashboard:</strong> Real-time portfolio metrics with
                    AI confidence distribution and review queues.
                  </p>
                </div>

                {/* Transactions */}
                <div>
                  <div className="case-study-image mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F5b57dab77840440fae175a5817e22984?format=webp&width=2400"
                      alt="Transactions Management"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F5b57dab77840440fae175a5817e22984?format=webp&width=2400",
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
                    <strong>Transactions:</strong> AI classification with
                    confidence indicators and bulk review actions.
                  </p>
                </div>

                {/* Data Anomaly Detection */}
                <div>
                  <div className="case-study-image mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F07c913d3c39d4fdab94a3834e53b5715?format=webp&width=2400"
                      alt="Data Anomaly Detection"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F07c913d3c39d4fdab94a3834e53b5715?format=webp&width=2400",
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
                    <strong>Data Anomaly Detection:</strong> Real-time flagging
                    of data errors before IRS export.
                  </p>
                </div>

                {/* Smart Export */}
                <div>
                  <div className="case-study-image mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fcdefa1985ff7455fb25e1a135cd661f6?format=webp&width=2400"
                      alt="Smart Export System"
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage(
                          "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fcdefa1985ff7455fb25e1a135cd661f6?format=webp&width=2400",
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
                    <strong>Smart Export:</strong> IRS-ready Form 8949 and audit
                    trails with embedded metadata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Decision 1 */}
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-6 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all text-left">
                <p className="text-sm font-bold text-precision-accent uppercase tracking-wider mb-2">
                  Decision
                </p>
                <h3 className="text-base font-semibold text-precision-text-primary mb-4">
                  Show confidence scores
                </h3>
                <p className="text-sm text-precision-text-secondary mb-4">
                  CPAs need to know "how sure" AI is
                </p>
                <div className="pt-3 border-t border-[#E3E8EF]">
                  <p className="text-xs uppercase tracking-wider text-precision-accent font-semibold mb-1">
                    Result
                  </p>
                  <p className="text-base font-semibold text-precision-success">
                    89% trust rate
                  </p>
                </div>
              </div>

              {/* Decision 2 */}
              <div className="bg-gradient-to-br from-[#E8F4FA] to-white p-6 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all text-left">
                <p className="text-sm font-bold text-precision-secondary uppercase tracking-wider mb-2">
                  Decision
                </p>
                <h3 className="text-base font-semibold text-precision-text-primary mb-4">
                  Review queue vs auto-apply all
                </h3>
                <p className="text-sm text-precision-text-secondary mb-4">
                  Medium confidence = human context needed
                </p>
                <div className="pt-3 border-t border-[#E3E8EF]">
                  <p className="text-xs uppercase tracking-wider text-precision-accent font-semibold mb-1">
                    Result
                  </p>
                  <p className="text-base font-semibold text-precision-success">
                    11% meaningful overrides
                  </p>
                </div>
              </div>

              {/* Decision 3 */}
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-6 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all text-left">
                <p className="text-sm font-bold text-precision-accent uppercase tracking-wider mb-2">
                  Decision
                </p>
                <h3 className="text-base font-semibold text-precision-text-primary mb-4">
                  Async rationale loading
                </h3>
                <p className="text-sm text-precision-text-secondary mb-4">
                  Balance speed with transparency
                </p>
                <div className="pt-3 border-t border-[#E3E8EF]">
                  <p className="text-xs uppercase tracking-wider text-precision-accent font-semibold mb-1">
                    Result
                  </p>
                  <p className="text-base font-semibold text-precision-success">
                    "Explainable AI" differentiator
                  </p>
                </div>
              </div>

              {/* Decision 4 */}
              <div className="bg-gradient-to-br from-[#E8F4FA] to-white p-6 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all text-left">
                <p className="text-sm font-bold text-precision-secondary uppercase tracking-wider mb-2">
                  Decision
                </p>
                <h3 className="text-base font-semibold text-precision-text-primary mb-4">
                  Override always allowed
                </h3>
                <p className="text-sm text-precision-text-secondary mb-4">
                  Professional liability protection
                </p>
                <div className="pt-3 border-t border-[#E3E8EF]">
                  <p className="text-xs uppercase tracking-wider text-precision-accent font-semibold mb-1">
                    Result
                  </p>
                  <p className="text-base font-semibold text-precision-success">
                    CPA control preserved
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-card p-6 border-l-4 border-precision-warning shadow-sm">
                <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-4">
                  Critical Trade-off: Speed vs. Transparency
                </h3>
                <p className="text-sm text-precision-text-primary leading-relaxed mb-4">
                  Removing rationale would cut processing 60%—but competitor
                  "black box" complaints outnumbered speed complaints 3:1.
                </p>
                <p className="text-xs font-semibold text-precision-success">
                  ✓ Chose transparency. Won 3 enterprise deals citing audit
                  defensibility.
                </p>
              </div>

              <div className="bg-white rounded-card p-6 border-l-4 border-precision-accent shadow-sm">
                <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-4">
                  Stakeholder Alignment
                </h3>
                <p className="text-sm text-precision-text-primary leading-relaxed mb-4">
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

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

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

            {/* Quantitative Results - Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Impact 1 */}
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all flex flex-col">
                <p className="text-xs font-medium text-precision-accent uppercase tracking-wider mx-auto mb-2">
                  Metric
                </p>
                <h3 className="text-sm font-semibold text-precision-text-primary mb-4 text-center">
                  Manual classification workload
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      Before
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      100% manual
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      After
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      15% manual
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#E3E8EF] flex flex-col">
                    <p className="text-base font-bold text-precision-success mx-auto">
                      ↓85%
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact 2 */}
              <div className="bg-gradient-to-br from-[#E8F4FA] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all flex flex-col">
                <p className="text-xs font-medium text-precision-secondary uppercase tracking-wider mx-auto mb-2">
                  Metric
                </p>
                <h3 className="text-sm font-semibold text-precision-text-primary mb-4 text-center">
                  CPA onboarding (new client)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      Before
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      2.5 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      After
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      1.4 hours
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#E3E8EF] flex flex-col">
                    <p className="text-base font-bold text-precision-success mx-auto">
                      ↓45%
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact 3 */}
              <div className="bg-gradient-to-br from-[#FEF3E2] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all flex flex-col">
                <p className="text-xs font-medium text-precision-warning uppercase tracking-wider mx-auto mb-2">
                  Metric
                </p>
                <h3 className="text-sm font-semibold text-precision-text-primary mb-4 text-center">
                  Demo-to-conversion rate
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      Before
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      Baseline
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      After
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      +32%
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#E3E8EF] flex flex-col">
                    <p className="text-base font-bold text-precision-success mx-auto">
                      ↑32%
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact 4 */}
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all flex flex-col">
                <p className="text-xs font-medium text-precision-accent uppercase tracking-wider mx-auto mb-2">
                  Metric
                </p>
                <h3 className="text-sm font-semibold text-precision-text-primary mb-4 text-center">
                  Error detection accuracy
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      Before
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      Baseline
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      After
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      +150%
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#E3E8EF] flex flex-col">
                    <p className="text-base font-bold text-precision-success mx-auto">
                      ↑150%
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact 5 */}
              <div className="bg-gradient-to-br from-[#E8F4FA] to-white p-5 rounded-card border border-[#E3E8EF] shadow-sm hover:shadow-md transition-all flex flex-col">
                <p className="text-xs font-medium text-precision-secondary uppercase tracking-wider mx-auto mb-2">
                  Metric
                </p>
                <h3 className="text-sm font-semibold text-precision-text-primary mb-4 text-center">
                  Audit trail exports
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      Before
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      Baseline
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-precision-text-secondary">
                      After
                    </span>
                    <span className="font-semibold text-precision-text-primary">
                      +340%
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#E3E8EF] flex flex-col">
                    <p className="text-base font-bold text-precision-success mx-auto">
                      ↑340%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

        {/* CORE INSIGHT */}
        <section className="section-animate scroll-mt-24 core-insight-section">
          <div className="bg-gradient-to-r from-[#0A2540] to-[#1E3A5F] rounded-card p-8 shadow-precision-md hover:shadow-xl transition-all duration-300 border-2 border-[#00D4AA]">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white leading-tight mb-4">
                The Core Insight
              </h2>
              <div className="max-w-[1200px]">
                <p className="text-lg text-white/90 leading-relaxed mb-4 font-medium max-w-[1200px] mx-auto">
                  In regulated domains,{" "}
                  <span className="text-[#00D4AA] font-bold">
                    AI transparency isn't a feature—it's the product.
                  </span>{" "}
                  Augmentation beats automation when professionals retain
                  control, simplicity beats capability when users actually adopt
                  it, and failed experiments teach the most.
                </p>
                <p className="text-lg text-white/90 leading-relaxed font-medium max-w-[1200px] mx-auto">
                  CPAs rejected full automation not for accuracy, but to
                  preserve professional judgment.
                </p>
                <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-pill border border-white/20 w-fit mx-auto mt-4">
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

        {/* Section Divider */}
        <div
          className="my-12 border-t border-[#E3E8EF]/50"
          aria-hidden="true"
        ></div>

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

            <div className="mt-8 flex flex-col items-center text-center">
              <p className="text-sm text-precision-text-secondary mb-4">
                What I'd do differently next time
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px]">
                <div className="bg-white rounded-card p-6 border-l-4 border-precision-accent shadow-sm text-left">
                  <h4 className="text-sm font-semibold text-precision-text-primary mb-2">
                    Ship minimal first
                  </h4>
                  <p className="text-xs text-precision-text-secondary leading-relaxed">
                    Rule builder v1 was too complex. Launch at minimum viable
                    complexity, add power features based on observed demand.
                  </p>
                </div>
                <div className="bg-white rounded-card p-6 border-l-4 border-precision-secondary shadow-sm text-left">
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
            {lightboxImage.includes(".mov") ||
            lightboxImage.includes(".mp4") ||
            lightboxImage.includes("video") ? (
              <video
                src={lightboxImage}
                className="image-lightbox__image"
                autoPlay
                loop
                muted
                playsInline
                controls
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={lightboxImage}
                alt="Enlarged screenshot - Full resolution view"
                className="image-lightbox__image"
                onClick={(e) => e.stopPropagation()}
              />
            )}
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
