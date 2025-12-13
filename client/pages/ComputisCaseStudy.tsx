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

  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = startMetricsAnimation && !hasAnimated;

  const onboardingCount = useCountUp(45, 2000, shouldAnimate);
  const conversionCount = useCountUp(32, 2000, shouldAnimate);
  const classificationCount = useCountUp(85, 2000, shouldAnimate);
  const errorDetectionCount = useCountUp(150, 2000, shouldAnimate);
  const enterpriseDealsCount = useCountUp(3, 2000, shouldAnimate);

  useEffect(() => {
    if (startMetricsAnimation && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [startMetricsAnimation, hasAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollThreshold = isMobile ? window.innerHeight * 1.5 : 400;
      setShowScrollTop(window.scrollY > scrollThreshold);
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-precision-text-primary leading-[110%] tracking-tight mb-4">
            Computis — AI-Powered Crypto Tax Automation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-precision-text-secondary leading-[140%] mb-6 max-w-[65ch]">
            Leading the design of an AI-powered feature suite that augments CPA expertise while maintaining professional control
          </p>

          <div className="bg-white/60 backdrop-blur-sm rounded-card p-5 border border-[#E3E8EF]">
            <h2 className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">
              What I Achieved
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-precision-text-primary">
                <CheckCircle className="w-4 h-4 text-precision-accent mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-precision-accent">
                    ↓ 85% manual work
                  </strong>{" "}
                  — CPAs review only flagged items
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-precision-text-primary">
                <CheckCircle className="w-4 h-4 text-precision-secondary mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-precision-secondary">
                    ↑ 32% conversions
                  </strong>{" "}
                  — faster rule creation drove adoption
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-precision-text-primary">
                <CheckCircle className="w-4 h-4 text-precision-warning mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-precision-warning">
                    ↑ 150% error detection
                  </strong>{" "}
                  — issues caught before client delivery
                </span>
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
            className="w-full flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-precision-accent focus-visible:ring-offset-2 rounded-sm p-1 -m-1"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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
                      Web SaaS (Desktop-first, responsive)
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider">
                      Scope
                    </span>
                    <p className="text-precision-text-primary mt-1">
                      AI Strategy, UX Research, System Design, Feature Design
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
                        Figma, Miro, Notion, Jira, Mixpanel, GA
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
        className="max-w-[1200px] mx-auto px-6 pb-24 space-y-16 relative z-10"
      >
        <section
          id="tldr"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 mt-12 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8 transition-all duration-200 hover:text-precision-accent cursor-pointer">
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
                <div className="bg-white p-6 rounded-card border-2 border-[#00D4AA] shadow-lg hover:shadow-xl transition-all duration-200 text-center focus-within:ring-2 focus-within:ring-precision-accent focus-within:ring-offset-2">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    CPA Onboarding Time
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-precision-success mb-1">
                    ↓ {onboardingCount}%
                  </p>
                  <p className="text-xs font-mono text-precision-text-secondary mb-2">
                    2.5h → 1.4h
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-tight pt-2 border-t border-gray-200">
                    <strong>via</strong> smart rule templates reducing setup
                    complexity
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-2 border-[#1E3A5F] shadow-lg hover:shadow-xl transition-all duration-200 text-center focus-within:ring-2 focus-within:ring-precision-secondary focus-within:ring-offset-2">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Demo-to-Conversion
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-precision-secondary mb-3">
                    ↑ {conversionCount}%
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-tight pt-2 border-t border-gray-200">
                    <strong>via</strong> 90-sec rule builder allowing setup
                    during sales calls
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-2 border-[#00D4AA] shadow-lg hover:shadow-xl transition-all duration-200 text-center focus-within:ring-2 focus-within:ring-precision-accent focus-within:ring-offset-2">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Manual Classification Work
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-precision-accent mb-3">
                    ↓ {classificationCount}%
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-tight pt-2 border-t border-gray-200">
                    <strong>via</strong> 3-tier auto-classification (90%+
                    confidence threshold)
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-2 border-[#F39C12] shadow-lg hover:shadow-xl transition-all duration-200 text-center focus-within:ring-2 focus-within:ring-precision-warning focus-within:ring-offset-2">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Error Detection Rate
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-precision-warning mb-3">
                    ↑ {errorDetectionCount}%
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-tight pt-2 border-t border-gray-200">
                    <strong>via</strong> ML anomaly detection with sensitive
                    thresholds
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-2 border-[#0A2540] shadow-lg hover:shadow-xl transition-all duration-200 text-center focus-within:ring-2 focus-within:ring-precision-primary focus-within:ring-offset-2">
                  <p className="text-xs font-semibold text-precision-text-secondary mb-2 uppercase tracking-wider">
                    Enterprise Deals
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-precision-primary mb-1">
                    {enterpriseDealsCount}
                  </p>
                  <p className="text-xs font-mono text-precision-text-secondary mb-2">
                    closed in 6 months
                  </p>
                  <p className="text-xs text-precision-text-secondary leading-tight pt-2 border-t border-gray-200">
                    AI features = differentiator in 78% of won deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="challenge"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              🎯 The Challenge
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider">
                  Context
                </h3>
                <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                  Computis had a solid, functional platform for crypto tax management—but CPAs were spending <strong>95% of their time on manual classification and error-hunting</strong> rather than leveraging their expertise for tax strategy and client consultation.
                </p>
              </div>

              <div className="bg-white rounded-card p-5 border-l-4 border-precision-error shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-precision-error flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold font-heading text-precision-error">
                    Pain Points Identified
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span className="max-w-[60ch]">
                      <strong>Manual classification</strong> of thousands of transactions per client (35% of CPA time)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span className="max-w-[60ch]">
                      <strong>No automated anomaly detection</strong> for FMV discrepancies and data errors
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span className="max-w-[60ch]">
                      <strong>Engineering dependency</strong> for every rule change (2-5 day wait times)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span className="max-w-[60ch]">
                      <strong>Limited audit visibility</strong> into classification decisions for IRS defense
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span className="max-w-[60ch]">
                      <strong>Reactive error discovery</strong> only during manual review or after client delivery
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-card p-5 border-l-4 border-precision-secondary shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-precision-secondary flex-shrink-0" />
                <h3 className="text-base sm:text-lg font-bold font-heading text-precision-secondary">
                  The Opportunity
                </h3>
              </div>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-[65ch]">
                Design AI-powered features that automate routine work while keeping CPAs in control—transforming Computis from a passive calculation engine into an intelligent workflow assistant.
              </p>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              💡 My Approach
            </h2>

            <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] mb-8 max-w-prose">
              I led the design of Computis's AI feature suite, focusing on <strong>augmentation over automation</strong>—ensuring AI enhanced CPA expertise rather than replacing professional judgment.
            </p>

            <div className="mb-8 pb-8 border-b border-[#E3E8EF]">
              <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider mb-4">
                My Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Product strategy & feature definition</strong> for
                      entire AI suite (classification, audit trails, rule
                      builder, anomaly detection)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Interaction patterns & UX design</strong> for all
                      AI touchpoints, confidence indicators, and control
                      mechanisms
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Partnered with ML engineers</strong> on model
                      integration, UX constraints, and threshold tuning based on
                      user feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Led user research</strong> (12 CPA interviews, 6 full-day observations, 4 usability test cycles) to validate design decisions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider">
                  Design Philosophy
                </h3>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[60ch]">
                    I designed AI features around{" "}
                    <strong className="text-precision-accent">
                      explicit confidence ranges
                    </strong>{" "}
                    that surfaced uncertainty to CPAs instead of hiding it.
                  </p>
                  <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[60ch]">
                    We treated{" "}
                    <strong className="text-precision-secondary">
                      medium-confidence predictions as hypotheses, not truths
                    </strong>
                    , and built UI patterns (review queues, override controls)
                    around that principle.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-card p-5 border border-[#E3E8EF] shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  Research Foundation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      <strong>12 CPA interviews</strong> identifying automation opportunities and trust requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      <strong>6 full-day workflow observations</strong> mapping classification patterns and friction points
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      <strong>50,000+ transaction analysis</strong> revealing 73% followed predictable patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      <strong>Competitive analysis</strong> of TaxBit, Cryptio, CoinTracker (300+ G2 reviews)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      <strong>4 usability test cycles</strong> validating AI interaction patterns
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-[#E0F9F4] rounded-card p-6 border-l-4 border-precision-accent shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-[#0A7A5E] flex-shrink-0" />
                <p className="text-sm font-bold text-[#0A7A5E] uppercase tracking-wider">
                  Key Insight
                </p>
              </div>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[65ch] italic">
                This wasn't a UX problem ("make AI easy to use")—it was a trust problem ("make AI safe to rely on"). CPAs are personally liable for classifications. They needed to explain decisions to the IRS, not accept black-box outputs.
              </p>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-4">
              ✨ AI Feature Design Solutions
            </h2>

            <p className="text-base text-precision-text-secondary mb-8 italic">
              Four AI capabilities transformed workflow speed and accuracy
            </p>

            <div className="border-t-2 border-[#E3E8EF] mb-8"></div>

            <div className="space-y-10">
              <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-precision-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-precision-text-primary">
                    Intelligent Transaction Classification
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Problem
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[60ch]">
                        Manual classification consumed 60%+ of CPA time with predictable, repetitive decisions.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Solution
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] mb-3 max-w-[60ch]">
                        ML-driven auto-classification with visual confidence tiers:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            <strong>High (90%+):</strong> Auto-classified unless overridden
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            <strong>Medium (60-89%):</strong> Surfaced for quick review with one-click accept/reject
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            <strong>Low (&lt;60%):</strong> Requires manual classification
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-precision-text-primary leading-[170%] mt-3 max-w-[60ch]">
                        Each suggestion includes inline rationale tooltips explaining the AI's reasoning—pattern matches, historical precedent, and data signals.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-card p-5 border-l-4 border-precision-accent shadow-sm">
                    <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">
                      Impact
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-precision-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-base font-bold text-precision-accent">
                            ↓ 85%
                          </p>
                          <p className="text-sm text-precision-text-primary leading-[160%]">
                            manual classification
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-precision-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-base font-bold text-precision-accent">
                            ↑ 150%
                          </p>
                          <p className="text-sm text-precision-text-primary leading-[160%]">
                            error detection accuracy
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="AI Classification confidence indicators demonstration video"
                />
              </div>

              <div className="border-t-2 border-[#E3E8EF] my-2"></div>

              <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-precision-secondary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-precision-text-primary">
                    Explainable Audit Trail
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Problem
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[60ch]">
                        No visibility into how classifications were determined—CPAs maintained separate documentation for compliance.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Solution
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] mb-3 max-w-[60ch]">
                        AI-generated audit logs capturing:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-secondary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            Classification changes (AI-suggested and manual)
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-secondary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            Override decisions with required rationale prompts
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-secondary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            User identification and timestamps
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-secondary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            Export-ready PDF documentation for IRS defense
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-card p-5 border-l-4 border-precision-secondary shadow-sm">
                    <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">
                      Impact
                    </p>
                    <p className="text-sm text-precision-text-primary leading-[160%] mb-3 max-w-[60ch]">
                      40% reduction in compliance preparation time; enabled self-service IRS audit defense.
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-precision-secondary mb-2">
                        Design Decision:
                      </p>
                      <p className="text-sm text-precision-text-primary leading-[160%] max-w-[60ch]">
                        Override rationale was made <em>required</em> after testing—CPAs wanted it for professional liability protection.
                      </p>
                    </div>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Intelligent Audit Trail System demonstration video"
                />
              </div>

              <div className="border-t-2 border-[#E3E8EF] my-2"></div>

              <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-precision-success" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-precision-text-primary">
                    Smart Rule Builder
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Problem
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[60ch]">
                        CPAs repeatedly created similar rules, but every change required engineering (2-5 day wait).
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Solution
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] mb-3 max-w-[60ch]">
                        No-code visual rule builder with:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-success rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            Drag-and-drop logic blocks with natural language preview
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-success rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            Live preview showing exact transaction impact before applying
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-success rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            AI-suggested rules based on detected classification patterns
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-card p-5 border-l-4 border-precision-success shadow-sm">
                    <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">
                      Impact
                    </p>
                    <p className="text-sm text-precision-text-primary leading-[160%] mb-3 max-w-[60ch]">
                      Adoption jumped from 12% to 67%; rule creation reduced from 15 minutes to 90 seconds; 32% increase in demo conversions.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#FFF5F5] to-[#FEF3E2] rounded-card p-6 border-l-4 border-precision-warning mb-6">
                  <h4 className="text-base font-bold text-precision-text-primary mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-precision-warning" />
                    Failure & Recovery: The Rule Builder Nobody Used
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-precision-text-primary leading-[160%]">
                        First version launched to 12% adoption—users explored for 3-4 minutes then abandoned without creating a single rule.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-1">
                        Root Cause
                      </p>
                      <p className="text-sm text-precision-text-primary leading-[160%]">
                        Over-engineered with 14 condition types and nested logic that intimidated CPAs wanting simple automation.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-precision-text-primary leading-[160%]">
                        Stripped to a "recipe" model, removing 9 condition types. Added "Advanced Mode" toggle for power users despite engineering pushback that we were discarding capabilities.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-success uppercase tracking-wider mb-1">
                        Key Learning
                      </p>
                      <p className="text-sm text-precision-text-primary leading-[160%] italic">
                        In B2B tools for non-technical users, capability without usability is worthless.
                      </p>
                    </div>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Smart Rule Builder with Pattern Recognition demonstration video"
                />
              </div>

              <div className="border-t-2 border-[#E3E8EF] my-2"></div>

              <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FDEEEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-precision-error" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-precision-text-primary">
                    Real-Time Anomaly Detection
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Problem
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] max-w-[60ch]">
                        FMV errors and data inconsistencies discovered too late—after export or client delivery.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
                        Solution
                      </p>
                      <p className="text-sm sm:text-base text-precision-text-primary leading-[170%] mb-3 max-w-[60ch]">
                        ML-powered detection with severity-tiered inline flags:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            <strong>Error:</strong> Requires resolution before export
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            <strong>Warning:</strong> Should be reviewed
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-precision-text-primary leading-[160%]">
                          <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="max-w-[60ch]">
                            <strong>Info:</strong> FYI, may not require action
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-precision-text-primary leading-[170%] mt-3 max-w-[60ch]">
                        Contextual explanations with one-click resolution options (fetch price, enter manual FMV, mark N/A).
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-card p-5 border-l-4 border-precision-error shadow-sm">
                    <p className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">
                      Impact
                    </p>
                    <p className="text-sm text-precision-text-primary leading-[160%] mb-3 max-w-[60ch]">
                      150% increase in error detection; zero FMV disputes post-implementation.
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-precision-error mb-2">
                        Design Decision:
                      </p>
                      <p className="text-sm text-precision-text-primary leading-[160%] max-w-[60ch]">
                        Warn, don't block—CPAs sometimes have legitimate reasons to export with known issues. The interface documents acknowledgment.
                      </p>
                    </div>
                  </div>
                </div>

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F3bbe062155dd44f39a551875b4c99ff9?alt=media&token=f768e0a7-6142-4898-9d89-b2f0c86f24e9&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Proactive Anomaly Detection Engine demonstration video"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="stakeholder"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              🤝 Stakeholder Alignment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="bg-white rounded-card p-5 shadow-precision-sm border border-[#E3E8EF]">
                  <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-precision-accent" />
                    Balancing Automation & Control
                  </h3>
                  <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                    <span className="font-semibold text-precision-text-primary">
                      Challenge:
                    </span>{" "}
                    Engineering wanted maximum automation; CPAs required
                    override capabilities for liability protection.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FAFBFC] to-[#F0F4F8] rounded-card p-5">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  My Approach
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      Facilitated cross-functional workshop mapping trust
                      requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      Presented user research showing 40% of competitor
                      complaints cited "lack of control"
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      Designed graduated autonomy system: High confidence →
                      Auto-apply | Medium → Review queue | Low → Manual required
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] rounded-card p-5 border-l-4 border-precision-success">
              <h3 className="text-base sm:text-lg font-semibold font-heading text-[#0A7A5E] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-precision-success" />
                Outcome
              </h3>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] mb-4 max-w-prose">
                The tiered confidence system became a key differentiator. One
                enterprise prospect specifically cited "professional control" as
                their deciding factor.
              </p>
              <blockquote className="bg-white/90 p-5 rounded-card italic text-sm sm:text-base leading-[160%] border-l-4 border-precision-success">
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
        </section>

        <section
          id="tradeoff"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1400 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-8 lg:p-10 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              ⚖️ Critical Trade-off: Speed vs. Transparency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
              <div className="bg-white rounded-card p-5 border-l-4 border-precision-warning shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  Tension
                </h3>
                <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                  Removing rationale generation would cut processing time 60%—and we'd just lost a deal to a faster competitor. CTO pushed for speed; I argued transparency is non-negotiable in regulated domains.
                </p>
              </div>

              <div className="bg-white rounded-card p-5 border-l-4 border-precision-accent shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  Research Insight
                </h3>
                <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                  Competitor "black box AI" complaints outnumbered performance complaints 3:1.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] rounded-card p-6 border-l-4 border-precision-success mb-6">
              <h3 className="text-base sm:text-lg font-semibold font-heading text-[#0A7A5E] mb-3">
                Solution
              </h3>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                Hybrid approach—immediate classification display with async rationale loading. Users got speed for scanning, transparency within seconds for examination.
              </p>
            </div>

            <div className="bg-white rounded-card p-5 border border-[#E3E8EF] shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-precision-success" />
                Impact
              </h3>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                "Explainable AI" positioning won subsequent deals against faster competitor; 3 enterprise clients cited audit defensibility as deciding factor.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t-2 border-[#E3E8EF] my-16"></div>

        <section
          id="results"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
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

        <div className="border-t-2 border-[#E3E8EF] my-16"></div>

        <section
          id="learnings"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-8 sm:p-10 lg:p-12 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold font-heading text-precision-text-primary leading-[120%] mb-8">
              💡 Key Learnings
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-card border-l-4 border-precision-secondary shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-secondary focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Control Over Speed
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>
                      CPAs adopted AI faster when they retained control.
                    </strong>{" "}
                    We deliberately kept the medium-confidence threshold
                    (70-89%) in a review queue instead of auto-applying. This
                    added friction but preserved trust—a trade-off that became
                    our competitive edge.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-l-4 border-precision-accent shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-accent focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Surface Uncertainty, Don't Hide It
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>Explicit confidence ranges drove adoption.</strong>{" "}
                    We treated medium-confidence predictions as hypotheses
                    requiring human validation. Visual indicators (color-coded
                    flags, percentage scores) made AI reasoning transparent
                    instead of opaque.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-l-4 border-precision-success shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-success focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Templates Over Black-Box NLP
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>
                      CPAs didn't trust natural language rule creation.
                    </strong>{" "}
                    We shipped pattern-based templates (80% speed gain) 4 months
                    faster than full NLP. Lesson:{" "}
                    <em>
                      Partial automation users understand beats full automation
                      they distrust.
                    </em>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-l-4 border-precision-warning shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-warning focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    False Positives Beat False Negatives
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>
                      In compliance, missing an error is catastrophic; reviewing
                      a false alert is annoying.
                    </strong>{" "}
                    We tuned anomaly detection to 78% precision (22% false
                    alarms) to catch 95%+ of real issues. Users trained the
                    model via feedback, improving precision to 89% over 3
                    months.
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
