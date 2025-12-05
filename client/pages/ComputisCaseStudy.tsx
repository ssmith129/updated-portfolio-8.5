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
                    <strong>via</strong> smart rule templates reducing setup complexity
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
                    <strong>via</strong> 90-sec rule builder allowing setup during sales calls
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
                    <strong>via</strong> 3-tier auto-classification (90%+ confidence threshold)
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
                    <strong>via</strong> ML anomaly detection with sensitive thresholds
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
                <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider">Context</h3>
                <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                  Computis had a solid, functional platform for crypto tax
                  management—but CPAs were still spending excessive time on
                  manual transaction classification. The existing UI handled
                  data well, but lacked intelligent automation features that
                  competitors were beginning to offer.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FDEEEE] to-[#FCE4E4] rounded-card p-5 border-l-4 border-precision-error">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#C0392B] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-precision-error" />
                  Pain Points Identified
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Manual classification of thousands of transactions per client
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      No automated anomaly detection for FMV discrepancies
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Repetitive rule creation for common transaction patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-error rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Limited visibility into classification decisions for audit defense
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#E8F4FA] to-[#D4E9F7] rounded-card p-5 border-l-4 border-precision-secondary">
              <h3 className="text-base sm:text-lg font-bold font-heading text-precision-primary mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-precision-secondary" />
                The Opportunity
              </h3>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                Design and implement AI-powered features that would automate
                routine work while keeping CPAs in control—turning Computis
                into a truly intelligent tax automation platform.
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

            <div className="mb-8 pb-8 border-b border-[#E3E8EF]">
              <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider mb-4">My Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Product strategy & feature definition</strong> for entire AI suite (classification, audit trails, rule builder, anomaly detection)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Interaction patterns & UX design</strong> for all AI touchpoints, confidence indicators, and control mechanisms
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Partnered with ML engineers</strong> on model integration, UX constraints, and threshold tuning based on user feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <CheckCircle className="w-4 h-4 text-precision-accent mt-1 flex-shrink-0" />
                    <span className="text-sm leading-[160%]">
                      <strong>Led user research</strong> (8 CPA interviews, 6 shadowing sessions, 4 usability test cycles) to validate design decisions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-precision-text-secondary uppercase tracking-wider">Design Philosophy</h3>
                <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                  I designed AI features around <strong>explicit confidence ranges</strong> that surfaced uncertainty to CPAs instead of hiding it. We treated <strong>medium-confidence predictions as hypotheses, not truths</strong>, and built UI patterns (review queues, override controls) around that principle.
                </p>
              </div>

              <div className="bg-white rounded-card p-5 border border-[#E3E8EF] shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold font-heading text-precision-text-primary mb-3">
                  Research Foundation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      8 CPA interviews identifying automation opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      6 workflow shadowing sessions to map classification patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      Competitive analysis of AI features (TaxBit, Cryptio, CoinTracker)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      4 usability test cycles validating AI interaction patterns
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-[#E0F9F4] rounded-card p-5 border-l-4 border-precision-accent">
              <div className="flex items-start gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0A7A5E] mt-1 flex-shrink-0" />
                <p className="text-xs font-semibold text-[#0A7A5E] uppercase tracking-wider">
                  Key Insight
                </p>
              </div>
              <p className="text-sm sm:text-base text-precision-text-primary leading-[160%] max-w-prose">
                CPAs wanted AI to handle repetitive work, but needed <strong>transparency and override control</strong> to maintain professional liability standards. <em>Designing for probabilistic outputs meant we needed explicit confidence ranges, not black-box automation.</em>
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
              <div className="bg-white rounded-card p-6 sm:p-8 shadow-precision-sm border-l-4 border-precision-accent">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-precision-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-precision-text-primary">
                      1. Intelligent Transaction Classification
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">
                      <strong>Goal:</strong> Reduce manual classification while keeping CPAs in control.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Key Capabilities:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc">Auto-classification with confidence tiers</li>
                      <li className="text-sm text-precision-text-primary list-disc">Smart review queue</li>
                      <li className="text-sm text-precision-text-primary list-disc">Inline override controls</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Impact:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc"><strong>↓ 85% manual classification</strong></li>
                      <li className="text-sm text-precision-text-primary list-disc"><strong>↑ 150% error detection accuracy</strong></li>
                    </ul>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="AI Classification confidence indicators demonstration video"
                    problem="Manual classification consumed 60%+ of CPA time."
                    solution="ML-driven auto-classification with visual confidence scores (High/Medium/Low) and one-click accept/reject controls."
                    impact="85% reduction in manual classification work; CPAs review only flagged items."
                  />
                </div>
              </div>

              <div className="bg-white rounded-card p-6 sm:p-8 shadow-precision-sm border-l-4 border-precision-secondary">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-precision-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-precision-text-primary">
                      2. Explainable Audit Trail
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">
                      <strong>Goal:</strong> Make every AI decision transparent and defensible.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Capabilities:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc">Rationale statements</li>
                      <li className="text-sm text-precision-text-primary list-disc">Similar transaction clustering</li>
                      <li className="text-sm text-precision-text-primary list-disc">Historical decisions</li>
                      <li className="text-sm text-precision-text-primary list-disc">Simple override + reclassify workflow</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Impact:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc"><strong>0 FMV disputes</strong></li>
                      <li className="text-sm text-precision-text-primary list-disc"><strong>Faster approvals for enterprise onboarding</strong></li>
                    </ul>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="Intelligent Audit Trail System demonstration video"
                    problem="No visibility into how classifications were determined."
                    solution="AI-generated audit logs documenting classification rationale, rule triggers, and decision history."
                    impact="40% reduction in compliance preparation time; enabled self-service IRS audit defense."
                  />
                </div>
              </div>

              <div className="bg-white rounded-card p-6 sm:p-8 shadow-precision-sm border-l-4 border-precision-success">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#E0F9F4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-precision-success" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-precision-text-primary">
                      3. Smart Rule Builder
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">
                      <strong>Goal:</strong> Standardize logic and prevent rework year over year.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Capabilities:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc">Pattern detection</li>
                      <li className="text-sm text-precision-text-primary list-disc">Suggested rules</li>
                      <li className="text-sm text-precision-text-primary list-disc">User-friendly rule editing</li>
                      <li className="text-sm text-precision-text-primary list-disc">Versioning & auditability</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Impact:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc"><strong>↓ 45% onboarding time</strong></li>
                      <li className="text-sm text-precision-text-primary list-disc"><strong>Reduced repetitive work for CPA teams</strong></li>
                    </ul>
                  </div>

                  <VideoOverlay
                    videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                    ariaLabel="Smart Rule Builder with Pattern Recognition demonstration video"
                    problem="CPAs repeatedly created similar rules for common scenarios."
                    solution="AI suggests rule templates based on transaction patterns; no-code builder with natural language preview."
                    impact="Rule creation time reduced from 15 minutes to 90 seconds; 32% increase in demo conversions."
                  />
                </div>
              </div>

              <div className="bg-white rounded-card p-6 sm:p-8 shadow-precision-sm border-l-4 border-precision-error">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FDEEEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-precision-error" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-precision-text-primary">
                      4. Real-Time Anomaly Detection
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">
                      <strong>Goal:</strong> Surface issues before they become compliance problems.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Capabilities:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc">Outlier detection</li>
                      <li className="text-sm text-precision-text-primary list-disc">Pattern-break flags</li>
                      <li className="text-sm text-precision-text-primary list-disc">Inline correction flows</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-precision-text-primary mb-2">Impact:</p>
                    <ul className="space-y-1 ml-5">
                      <li className="text-sm text-precision-text-primary list-disc"><strong>Increased trust in platform accuracy</strong></li>
                      <li className="text-sm text-precision-text-primary list-disc"><strong>Helped win enterprise accounts that required audit-grade tools</strong></li>
                    </ul>
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
                    Engineering wanted maximum automation; CPAs required override
                    capabilities for liability protection.
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
                      Facilitated cross-functional workshop mapping trust requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      Presented user research showing 40% of competitor complaints cited "lack of control"
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-precision-text-primary">
                    <span className="w-1.5 h-1.5 bg-precision-text-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-[160%]">
                      Designed graduated autonomy system: High confidence → Auto-apply | Medium → Review queue | Low → Manual required
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
                enterprise prospect specifically cited "professional control"
                as their deciding factor.
              </p>
              <blockquote className="bg-white/90 p-5 rounded-card italic text-sm sm:text-base leading-[160%] border-l-4 border-precision-success">
                <p className="text-[#0A7A5E]">
                  "Finally, AI that works *with* me instead of replacing my judgment."
                </p>
                <cite className="block text-xs text-precision-success mt-2 not-italic font-mono">
                  — CPA Beta User
                </cite>
              </blockquote>
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
                    <strong>CPAs adopted AI faster when they retained control.</strong> We deliberately kept the medium-confidence threshold (70-89%) in a review queue instead of auto-applying. This added friction but preserved trust—a trade-off that became our competitive edge.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-l-4 border-precision-accent shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-accent focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Surface Uncertainty, Don't Hide It
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>Explicit confidence ranges drove adoption.</strong> We treated medium-confidence predictions as hypotheses requiring human validation. Visual indicators (color-coded flags, percentage scores) made AI reasoning transparent instead of opaque.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-l-4 border-precision-success shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-success focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    Templates Over Black-Box NLP
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>CPAs didn't trust natural language rule creation.</strong> We shipped pattern-based templates (80% speed gain) 4 months faster than full NLP. Lesson: <em>Partial automation users understand beats full automation they distrust.</em>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-card border-l-4 border-precision-warning shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-precision-warning focus-within:ring-offset-2">
                  <h3 className="text-base font-semibold font-heading text-precision-text-primary mb-3">
                    False Positives Beat False Negatives
                  </h3>
                  <p className="text-sm text-precision-text-primary leading-[160%]">
                    <strong>In compliance, missing an error is catastrophic; reviewing a false alert is annoying.</strong> We tuned anomaly detection to 78% precision (22% false alarms) to catch 95%+ of real issues. Users trained the model via feedback, improving precision to 89% over 3 months.
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
