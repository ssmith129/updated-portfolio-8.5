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
import VideoOverlay, { FeatureCards } from "../components/VideoOverlay";
import QuickWinsStrip, { computisMetrics } from "../components/QuickWinsStrip";
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

      <header className="max-w-[1200px] mx-auto px-6 pt-8 pb-4 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="flex flex-col">
          <span className="inline-block bg-precision-accent text-white px-3 py-1.5 rounded-pill text-xs font-semibold tracking-tight mb-3 w-fit">
            FinTech UX Case Study
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-precision-text-primary leading-[110%] tracking-tight mb-3">
            Computis — AI-Powered Crypto Tax Automation
          </h1>
          <p className="text-base text-precision-text-secondary leading-[140%] mb-4">
            Leading the design of an AI feature suite that{" "}
            <strong>augments CPA expertise</strong> while maintaining
            professional control and IRS audit defensibility
          </p>

          <div className="bg-white/60 backdrop-blur-sm rounded-card p-4 border border-[#E3E8EF]">
            <h2 className="text-xs font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">
              What I Achieved
            </h2>
            <ul className="space-y-1.5">
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
              { href: "#research", label: "Research" },
              { href: "#challenge", label: "Challenge" },
              { href: "#approach", label: "Approach" },
              { href: "#solutions", label: "Solutions" },
              { href: "#results", label: "Results" },
              { href: "#learnings", label: "Learnings" },
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

      <QuickWinsStrip metrics={computisMetrics} />

      <div className="max-w-[1200px] mx-auto px-6 mt-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-card p-4 shadow-precision-sm transition-all duration-200 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600 border border-[#E3E8EF]">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-precision-accent focus-visible:ring-offset-2 rounded-sm p-1 -m-1"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider group-hover:text-precision-accent transition-colors duration-200">
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
        className="max-w-[1200px] mx-auto px-6 pb-16 space-y-8 relative z-10"
      >
        <section
          id="research"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 mt-6 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Research Foundation
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                12 CPA interviews + 50,000 transaction analysis revealed 73% of work followed predictable patterns—perfect for AI augmentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#E0F9F4] to-white p-4 rounded-card border border-[#E3E8EF]">
                <h3 className="text-base font-semibold text-precision-text-primary mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-precision-accent" />
                  User Research
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span><strong>12 CPA interviews</strong> identifying pain points and trust requirements</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span><strong>6 full-day observations</strong> mapping classification workflows</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span><strong>4 usability test cycles</strong> validating AI interactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#E8F4FA] to-white p-4 rounded-card border border-[#E3E8EF]">
                <h3 className="text-base font-semibold text-precision-text-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-precision-secondary" />
                  Data Analysis
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-secondary mt-1 flex-shrink-0" />
                    <span><strong>50,000+ transactions</strong> analyzed for patterns</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-secondary mt-1 flex-shrink-0" />
                    <span><strong>73% predictability</strong> rate discovered</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-secondary mt-1 flex-shrink-0" />
                    <span><strong>300+ G2 reviews</strong> of competitors analyzed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CPA Workflow Journey Map */}
            <div className="mt-6 group relative rounded-card overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F3e37a24719e24799b43ab2e6d928ad65"
                alt="CPA Crypto Tax Workflow Journey Map showing the 5-phase process from client onboard to form 8949 completion, with emotion curve indicating pain points in classification phase"
                className="w-full h-auto cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => window.open('https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F3e37a24719e24799b43ab2e6d928ad65', '_blank')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  Click to enlarge
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="challenge"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              The Challenge
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                CPAs spent 95% of time on repetitive classification. They needed AI that automates routine work while preserving professional judgment for IRS liability.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider">
                Context
              </h3>
              <p className="text-base text-precision-text-primary leading-relaxed">
                Computis had a solid, functional platform for crypto tax
                management—but CPAs were spending{" "}
                <strong>
                  95% of their time on manual classification and error-hunting
                </strong>{" "}
                rather than leveraging their expertise for tax strategy and
                client consultation.
              </p>
            </div>

            {/* CPA Time Allocation Transformation - Before/After Comparison */}
            <div className="mt-6 group relative rounded-card overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7610b06ed35247ba8a48c7e874c19cdc"
                alt="CPA Time Allocation Transformation showing before and after workflow comparison - manual classification reduced from 95% to 15% with Computis AI"
                className="w-full h-auto cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => window.open('https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7610b06ed35247ba8a48c7e874c19cdc', '_blank')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  Click to enlarge
                </span>
              </div>
            </div>

            <div className="mt-6 bg-[#E0F9F4] rounded-card p-6 border-l-4 border-precision-accent shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-[#0A7A5E] flex-shrink-0" />
                <p className="text-sm font-bold text-[#0A7A5E] uppercase tracking-wider">
                  Key Insight
                </p>
              </div>
              <blockquote className="text-base text-precision-text-primary leading-relaxed italic mb-4">
                "This wasn't a UX problem—it was a{" "}
                <strong>trust problem</strong>. CPAs are personally liable for
                classifications. They needed to explain decisions to the IRS,
                not accept black-box outputs."
              </blockquote>
            </div>

            <div className="mt-6 bg-white rounded-card p-5 border-l-4 border-precision-secondary shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-precision-secondary flex-shrink-0" />
                <h3 className="text-base sm:text-lg font-bold font-heading text-precision-secondary">
                  The Opportunity
                </h3>
              </div>
              <p className="text-base text-precision-text-primary leading-relaxed">
                Design AI-powered features that automate routine work while
                keeping CPAs in control—transforming Computis from a passive
                calculation engine into an intelligent workflow assistant.
              </p>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              My Approach
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                Designed 3-tier AI confidence system that reduced manual
                classification by 85% while maintaining CPA professional
                control.
              </p>
            </div>

            <p className="text-base text-precision-text-primary leading-relaxed mb-6">
              I led the design of Computis's AI feature suite, focusing on{" "}
              <strong>augmentation over automation</strong>—ensuring AI enhanced
              CPA expertise rather than replacing professional judgment.
            </p>

            <div className="mb-6 pb-6 border-b border-[#E3E8EF]">
              <h3 className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider mb-3">
                My Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Product strategy & feature definition</strong> for
                      entire AI suite (classification, audit trails, rule
                      builder, anomaly detection)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Interaction patterns & UX design</strong> for all
                      AI touchpoints, confidence indicators, and control
                      mechanisms
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Partnered with ML engineers</strong> on model
                      integration, UX constraints, and threshold tuning based on
                      user feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Led user research</strong> (12 CPA interviews, 6
                      full-day observations, 4 usability test cycles) to
                      validate design decisions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider">
                Design Philosophy
              </h3>
              <div className="space-y-2">
                <p className="text-base text-precision-text-primary leading-relaxed">
                  I designed AI features around{" "}
                  <strong className="text-precision-accent">
                    explicit confidence ranges
                  </strong>{" "}
                  that surfaced uncertainty to CPAs instead of hiding it.
                </p>
                <p className="text-base text-precision-text-primary leading-relaxed">
                  We treated{" "}
                  <strong className="text-precision-secondary">
                    medium-confidence predictions as hypotheses, not truths
                  </strong>
                  , and built UI patterns (review queues, override controls)
                  around that principle.
                </p>
              </div>
            </div>

            {/* Placeholder for confidence tier diagram */}
            <div className="mt-6 bg-[#FAFBFC] rounded-card p-6 border-2 border-dashed border-[#E3E8EF] text-center">
              <div className="max-w-[1440px] mx-auto">
                <p className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">Image Placeholder</p>
                <p className="text-xs text-precision-text-secondary">ai-confidence-tier-system.png</p>
                <p className="text-xs text-precision-text-secondary mt-1">Dimensions: 1440px × 400px</p>
                <p className="text-xs text-precision-text-secondary mt-2 italic">3-tier confidence system diagram showing decision flow</p>
              </div>
            </div>

            <div className="mt-6 bg-[#E0F9F4] rounded-card p-6 border-l-4 border-precision-accent shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-[#0A7A5E] flex-shrink-0" />
                <p className="text-sm font-bold text-[#0A7A5E] uppercase tracking-wider">
                  Design Philosophy
                </p>
              </div>
              <p className="text-base text-precision-text-primary leading-relaxed">
                <strong className="text-precision-accent">Augmentation over automation.</strong> Medium-confidence predictions treated as hypotheses, not truths. Every AI decision includes an override mechanism and audit trail.
              </p>
            </div>
          </div>
        </section>

        <section
          id="design-process"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000 scroll-mt-24"
        >
          <div className="bg-gradient-to-r from-[#0A2540] via-[#1E3A5F] to-[#0A2540] backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-xl transition-all duration-300 border-2 border-[#00D4AA]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white leading-tight mb-4 text-center">
              Design Process Overview
            </h2>

            {/* Placeholder for design process timeline */}
            <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border-2 border-dashed border-white/30 text-center">
              <div className="max-w-[1440px] mx-auto">
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Image Placeholder</p>
                <p className="text-xs text-white/80">design-process-timeline.png</p>
                <p className="text-xs text-white/80 mt-1">Dimensions: 1440px × 500px</p>
                <p className="text-xs text-white/80 mt-2 italic">Timeline: Research → Ideation → Wireframes → Prototyping → Testing → Launch → Iteration</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card border border-white/20">
                <p className="text-[#00D4AA] font-bold text-2xl mb-2">10 mo</p>
                <p className="text-white/90 text-sm">Project Duration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card border border-white/20">
                <p className="text-[#00D4AA] font-bold text-2xl mb-2">4</p>
                <p className="text-white/90 text-sm">AI Features Shipped</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card border border-white/20">
                <p className="text-[#00D4AA] font-bold text-2xl mb-2">12+</p>
                <p className="text-white/90 text-sm">Usability Tests</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card border border-white/20">
                <p className="text-[#00D4AA] font-bold text-2xl mb-2">78%</p>
                <p className="text-white/90 text-sm">Feature Adoption</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              AI Feature Design Solutions
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                Four AI capabilities each solving a specific workflow bottleneck
                while maintaining CPA professional control.
              </p>
            </div>

            {/* Placeholder for design system */}
            <div className="mt-6 mb-6 bg-[#FAFBFC] rounded-card p-6 border-2 border-dashed border-[#E3E8EF] text-center">
              <div className="max-w-[1440px] mx-auto">
                <p className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">Image Placeholder</p>
                <p className="text-xs text-precision-text-secondary">design-system-components.png</p>
                <p className="text-xs text-precision-text-secondary mt-1">Dimensions: 1440px × 800px</p>
                <p className="text-xs text-precision-text-secondary mt-2 italic">Showcase of AI UI components: confidence badges, review queues, override controls</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-precision-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-precision-text-primary">
                    Intelligent Transaction Classification
                  </h3>
                </div>

                <FeatureCards
                  problem="Manual classification consumed 60%+ of CPA time with predictable, repetitive decisions"
                  solution="ML-driven auto-classification with 3-tier confidence system (High 90%+: auto-classified, Medium 60-89%: review queue, Low <60%: manual required)"
                  impact="↓ 85% manual classification | ↑ 150% error detection accuracy"
                />

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="AI Classification confidence indicators demonstration video"
                />
              </div>



              <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-precision-secondary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-precision-text-primary">
                    Explainable Audit Trail
                  </h3>
                </div>

                <FeatureCards
                  problem="No visibility into classification decisions—CPAs maintained separate documentation for compliance"
                  solution="AI-generated audit logs capturing classification changes, override rationale (required), timestamps, and export-ready PDF for IRS defense"
                  impact="↓ 40% compliance prep time | Self-service IRS audit defense enabled"
                />

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Intelligent Audit Trail System demonstration video"
                />
              </div>



              <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-precision-success" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-precision-text-primary">
                    Smart Rule Builder
                  </h3>
                </div>

                <FeatureCards
                  problem="CPAs repeatedly created similar rules, but every change required engineering tickets (2-5 day wait times)"
                  solution="No-code visual rule builder with drag-and-drop logic, natural language preview, live transaction count, and AI-suggested rules based on patterns"
                  impact="12% → 67% adoption (5.5x increase) | 15 min → 90 sec creation time | ↑ 32% demo-to-conversion"
                />

                <VideoOverlay
                  videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                  ariaLabel="Smart Rule Builder with Pattern Recognition demonstration video"
                />
              </div>



              <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FDEEEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-precision-error" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-precision-text-primary">
                    Real-Time Anomaly Detection
                  </h3>
                </div>

                <FeatureCards
                  problem="FMV errors and data inconsistencies discovered too late—after export or client delivery"
                  solution="ML-powered detection with severity-tiered inline flags (Error/Warning/Info) that warn but don't block export"
                  impact="↑ 150% error detection | Zero FMV disputes post-implementation"
                />

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
          <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Stakeholder Alignment
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                Resolved tension between engineering (max automation) and CPAs (control) with tiered confidence system. Became key differentiator in sales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="bg-white rounded-card p-5 shadow-precision-sm border border-[#E3E8EF]">
                  <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-precision-accent" />
                    Balancing Automation & Control
                  </h3>
                  <p className="text-base text-precision-text-primary leading-relaxed">
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
                    <span className="text-sm leading-relaxed">
                      Facilitated cross-functional workshop mapping trust
                      requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">
                      Presented user research showing 40% of competitor
                      complaints cited "lack of control"
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">
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
              <p className="text-base text-precision-text-primary leading-relaxed mb-4">
                The tiered confidence system became a key differentiator. One
                enterprise prospect specifically cited "professional control" as
                their deciding factor.
              </p>
              <blockquote className="bg-white/90 p-5 rounded-card italic text-base leading-relaxed border-l-4 border-precision-success">
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
          <div className="bg-white backdrop-blur-xl rounded-card p-5 sm:p-6 lg:p-7 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Critical Trade-off: Speed vs. Transparency
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                Chose transparency over speed with hybrid async approach. "Explainable AI" positioning won deals against faster competitor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
              <div className="bg-white rounded-card p-5 border-l-4 border-precision-warning shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  Tension
                </h3>
                <p className="text-base text-precision-text-primary leading-relaxed">
                  Removing rationale generation would cut processing time
                  60%—and we'd just lost a deal to a faster competitor. CTO
                  pushed for speed; I argued transparency is non-negotiable in
                  regulated domains.
                </p>
              </div>

              <div className="bg-white rounded-card p-5 border-l-4 border-precision-accent shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  Research Insight
                </h3>
                <p className="text-base text-precision-text-primary leading-relaxed">
                  Competitor "black box AI" complaints outnumbered performance
                  complaints 3:1.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E0F9F4] to-[#CCF5EC] rounded-card p-6 border-l-4 border-precision-success mb-6">
              <h3 className="text-base sm:text-lg font-semibold font-heading text-[#0A7A5E] mb-3">
                Solution
              </h3>
              <p className="text-base text-precision-text-primary leading-relaxed">
                Hybrid approach—immediate classification display with async
                rationale loading. Users got speed for scanning, transparency
                within seconds for examination.
              </p>
            </div>

            <div className="bg-white rounded-card p-5 border border-[#E3E8EF] shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-precision-success" />
                Impact
              </h3>
              <p className="text-base text-precision-text-primary leading-relaxed">
                "Explainable AI" positioning won subsequent deals against faster
                competitor; 3 enterprise clients cited audit defensibility as
                deciding factor.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E3E8EF] my-8"></div>

        <section
          id="results"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              Results & Business Impact
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                85% reduction in manual work, 32% conversion increase, 3 enterprise deals closed. AI features cited in 78% of won deals.
              </p>
            </div>

            {/* Visual results comparison placeholder */}
            <div className="mb-8 bg-[#FAFBFC] rounded-card p-6 border-2 border-dashed border-[#E3E8EF] text-center">
              <div className="max-w-[1440px] mx-auto">
                <p className="text-sm font-semibold text-precision-text-secondary uppercase tracking-wider mb-2">Image Placeholder</p>
                <p className="text-xs text-precision-text-secondary">results-before-after-infographic.png</p>
                <p className="text-xs text-precision-text-secondary mt-1">Dimensions: 1440px × 600px</p>
                <p className="text-xs text-precision-text-secondary mt-2 italic">Visual comparison showing workflow improvements and metrics</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold font-heading text-precision-text-primary mb-4">
                  Quantitative Outcomes
                </h3>
                <div className="bg-white rounded-card p-6 border border-[#E3E8EF] overflow-x-auto">
                  <table className="w-full text-sm results-table">
                    <thead>
                      <tr className="border-b border-[#E3E8EF]">
                        <th className="text-left py-3 px-4 font-semibold text-precision-text-secondary">
                          Metric
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-precision-text-secondary">
                          Before
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-precision-text-secondary">
                          After
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-precision-text-secondary">
                          Change
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#E3E8EF]">
                        <td className="py-3 px-4 text-precision-text-primary">
                          Manual classification workload
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          100% manual
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          15% manual
                        </td>
                        <td className="py-3 px-4 font-semibold text-precision-accent">
                          ↓ 85%
                        </td>
                      </tr>
                      <tr className="border-b border-[#E3E8EF]">
                        <td className="py-3 px-4 text-precision-text-primary">
                          CPA onboarding (new client)
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          2.5 hours
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          1.4 hours
                        </td>
                        <td className="py-3 px-4 font-semibold text-precision-success">
                          ↓ 45%
                        </td>
                      </tr>
                      <tr className="border-b border-[#E3E8EF]">
                        <td className="py-3 px-4 text-precision-text-primary">
                          Demo-to-conversion rate
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          Baseline
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          +32%
                        </td>
                        <td className="py-3 px-4 font-semibold text-precision-secondary">
                          ↑ 32%
                        </td>
                      </tr>
                      <tr className="border-b border-[#E3E8EF]">
                        <td className="py-3 px-4 text-precision-text-primary">
                          Engineering dependency for rules
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          100%
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          15% (edge cases)
                        </td>
                        <td className="py-3 px-4 font-semibold text-precision-accent">
                          ↓ 85%
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-precision-text-primary">
                          FMV disputes post-filing
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          Occasional
                        </td>
                        <td className="py-3 px-4 text-precision-text-secondary">
                          Zero
                        </td>
                        <td className="py-3 px-4 font-semibold text-precision-success">
                          Eliminated
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold font-heading text-precision-text-primary mb-4">
                  Adoption Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-card border-l-4 border-precision-success shadow-sm">
                    <p className="text-2xl font-bold text-precision-success mb-1">
                      89%
                    </p>
                    <p className="text-xs text-precision-text-secondary">
                      AI acceptance rate — CPAs trusted high-confidence
                      classifications
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-card border-l-4 border-precision-accent shadow-sm">
                    <p className="text-2xl font-bold text-precision-accent mb-1">
                      11%
                    </p>
                    <p className="text-xs text-precision-text-secondary">
                      Meaningful override rate — capturing human context AI
                      lacked
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-card border-l-4 border-precision-secondary shadow-sm">
                    <p className="text-2xl font-bold text-precision-secondary mb-1">
                      78%
                    </p>
                    <p className="text-xs text-precision-text-secondary">
                      Rule builder adoption — up from 12% in v1
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-card border-l-4 border-precision-warning shadow-sm">
                    <p className="text-2xl font-bold text-precision-warning mb-1">
                      340%
                    </p>
                    <p className="text-xs text-precision-text-secondary">
                      Increase in audit trail exports
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold font-heading text-precision-text-primary mb-4">
                  Business Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-card shadow-precision-sm hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-precision-primary" />
                      <h4 className="text-base font-semibold font-heading text-precision-text-primary">
                        Revenue Impact
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-precision-text-primary">
                      <li className="flex items-start gap-2">
                        <span className="text-precision-accent mt-1">•</span>
                        <span>
                          3 enterprise CPA firm deals closed within 6 months of
                          AI launch
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-precision-accent mt-1">•</span>
                        <span>
                          78% of won deals cited AI features as primary
                          differentiator
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-precision-accent mt-1">•</span>
                        <span>First Big 4 accounting partnership secured</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-card shadow-precision-sm hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-precision-success" />
                      <h4 className="text-base font-semibold font-heading text-precision-text-primary">
                        Operational Wins
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-precision-text-primary">
                      <li className="flex items-start gap-2">
                        <span className="text-precision-success mt-1">•</span>
                        <span>
                          40% reduction in classification-related support
                          tickets
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-precision-success mt-1">•</span>
                        <span>
                          Platform expanded to serve DAOs and hedge funds
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-precision-success mt-1">•</span>
                        <span>
                          Zero FMV disputes reported post-implementation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#E0F9F4] to-[#E8F4FA] rounded-card p-6 border-l-4 border-precision-accent">
                <blockquote className="text-base italic text-precision-text-primary leading-relaxed">
                  "This is the first crypto tax tool I'd stake my license on."
                </blockquote>
                <cite className="block text-sm text-precision-accent mt-2 not-italic font-semibold">
                  — Enterprise CPA, Big 4 Partner
                </cite>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E3E8EF] my-8"></div>

        <section
          id="learnings"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700 scroll-mt-24"
        >
          <div className="bg-gradient-to-r from-[#0A2540] via-[#1E3A5F] to-[#0A2540] backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-xl transition-all duration-300 border-2 border-[#00D4AA]">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white leading-tight mb-4">
                The Core Insight
              </h2>
              <div className="max-w-[900px] mx-auto">
                <p className="text-lg text-white/90 leading-relaxed mb-4 font-medium">
                  In regulated domains, AI transparency isn't a feature—it's the product.
                  <span className="text-[#00D4AA] font-bold"> Augmentation beats automation</span> when professionals retain control,
                  <span className="text-[#00D4AA] font-bold"> simplicity beats capability</span> when users actually adopt it,
                  and <span className="text-[#00D4AA] font-bold">failed experiments teach the most</span>—
                  CPAs rejected full automation not for accuracy, but to preserve professional judgment.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-pill border border-white/20">
                  <Lightbulb className="w-4 h-4 text-[#00D4AA]" />
                  <span className="text-sm font-semibold text-white">
                    Human-in-the-loop isn't a weakness—it's how you earn trust in high-stakes AI.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E3E8EF] my-8"></div>

        <section
          id="reflections"
          className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900 scroll-mt-24"
        >
          <div className="bg-white backdrop-blur-xl rounded-card p-6 sm:p-7 lg:p-8 shadow-precision-md hover:shadow-precision-md transition-all duration-200 border border-[#E3E8EF]">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-precision-text-primary leading-tight mb-4">
              What I'd Do Differently
            </h2>

            <div className="section-tldr mb-6">
              <span className="section-tldr-label">TL;DR</span>
              <p className="section-tldr-text">
                Ship minimal first, document trade-offs explicitly. Rule builder complexity taught me: start simple, add power based on observed demand.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-card p-6 border-l-4 border-precision-accent shadow-sm">
                <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                  Ship minimal first
                </h3>
                <p className="text-sm text-precision-text-primary leading-relaxed">
                  The rule builder failure cost 6 weeks. I now advocate
                  launching at minimum viable complexity and adding power
                  features based on observed demand, not assumed need.
                </p>
              </div>

              <div className="bg-white rounded-card p-6 border-l-4 border-precision-secondary shadow-sm">
                <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                  Document trade-off decisions explicitly
                </h3>
                <p className="text-sm text-precision-text-primary leading-relaxed">
                  The speed vs. transparency debate recurred because we hadn't
                  formalized the reasoning. I now create brief "trade-off memos"
                  for major architectural choices to reduce relitigated debates.
                </p>
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
