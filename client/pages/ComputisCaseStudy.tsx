import { useState, useEffect, useRef } from "react";
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
  Play,
  Clock,
  Target,
  Zap,
  FileText,
  BarChart3,
  Quote,
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import VideoOverlay from "../components/VideoOverlay";
import ResearchArtifacts from "../components/case-study/ResearchArtifacts";
import DesignEvolution from "../components/case-study/DesignEvolution";
import ConfidenceSystemDiagram from "../components/case-study/ConfidenceSystemDiagram";
import SectionTLDR from "../components/case-study/SectionTLDR";
import BeforeAfterSlider from "../components/case-study/BeforeAfterSlider";
import QuickWinsStrip from "../components/case-study/QuickWinsStrip";
import { useIntersectionAnimation } from "../hooks/use-page-animations";
import { useCountUp } from "../hooks/use-count-up";

export default function ComputisCaseStudy() {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.3, "0px 0px -100px 0px");

  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldAnimate = startMetricsAnimation && !hasAnimated;

  // Staggered animation delays for metrics
  const onboardingCount = useCountUp(45, 2000, shouldAnimate, 0);
  const conversionCount = useCountUp(32, 2000, shouldAnimate, 200);
  const classificationCount = useCountUp(85, 2000, shouldAnimate, 400);
  const errorDetectionCount = useCountUp(150, 2000, shouldAnimate, 600);
  const enterpriseDealsCount = useCountUp(3, 2000, shouldAnimate, 800);

  useEffect(() => {
    if (startMetricsAnimation && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [startMetricsAnimation, hasAnimated]);

  // Scroll handling for sticky nav and scroll-to-top button
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

  // Active section tracking for navigation
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile summary collapse
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsSummaryExpanded(!isMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { href: "#impact", label: "Impact" },
    { href: "#challenge", label: "Challenge" },
    { href: "#approach", label: "Approach" },
    { href: "#solutions", label: "Solutions" },
    { href: "#evolution", label: "Evolution" },
    { href: "#results", label: "Results" },
    { href: "#learnings", label: "Learnings" },
  ];

  return (
    <div className="min-h-screen bg-cs-neutral scroll-smooth relative overflow-hidden font-sans">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cs-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cs-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <SkipLink />
      <Navigation />

      {/* Back link */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-base font-medium text-cs-text-secondary leading-normal hover:text-cs-accent transition-all duration-200 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section - Optimized for 90-second scannability */}
      <header className="max-w-[1200px] mx-auto px-6 pt-10 pb-6 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <div className="flex flex-col">
          {/* Category badge */}
          <span className="inline-block bg-cs-primary text-white px-4 py-2 rounded-full text-sm font-semibold tracking-tight mb-5 w-fit">
            FinTech · AI/ML · B2B SaaS
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold font-heading text-cs-text-primary leading-[1.1] tracking-tight mb-4">
            Computis — AI-Powered Crypto Tax Automation
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-cs-text-secondary leading-relaxed mb-6 max-w-[720px]">
            Leading the design of an AI feature suite that{" "}
            <span className="text-cs-accent font-semibold">
              augments CPA expertise
            </span>{" "}
            while maintaining professional control and IRS audit defensibility.
          </p>

          {/* Quick Wins Strip - Immediately visible key metrics */}
          <QuickWinsStrip
            metrics={[
              { value: "↓85%", label: "Manual Work", color: "accent" },
              { value: "↑32%", label: "Conversions", color: "secondary" },
              { value: "↑150%", label: "Error Detection", color: "warning" },
              { value: "3", label: "Enterprise Deals", color: "primary" },
            ]}
          />
        </div>
      </header>

      {/* Quick View / Meta Info - Collapsible */}
      <div className="max-w-[1200px] mx-auto px-6 mt-6 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-cs-sm border border-cs-border animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-600">
          <button
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:ring-offset-2 rounded-sm p-1 -m-1"
            aria-expanded={isSummaryExpanded}
            aria-controls="summary-content"
          >
            <h2 className="text-sm font-semibold text-cs-text-secondary uppercase tracking-wider group-hover:text-cs-accent transition-colors duration-200">
              Project Overview
            </h2>
            {isSummaryExpanded ? (
              <ChevronUp className="w-4 h-4 text-cs-text-secondary group-hover:text-cs-accent transition-colors duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 text-cs-text-secondary group-hover:text-cs-accent transition-colors duration-200" />
            )}
          </button>

          {isSummaryExpanded && (
            <div
              id="summary-content"
              className="mt-5 animate-in fade-in-0 slide-in-from-top-4 duration-500"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-5">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider block">
                    Role
                  </span>
                  <p className="text-cs-text-primary font-medium">
                    Founding Lead Product Designer
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider block">
                    Duration
                  </span>
                  <p className="text-cs-text-primary font-medium">10 months</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider block">
                    Platform
                  </span>
                  <p className="text-cs-text-primary font-medium">
                    Web SaaS (Desktop-first)
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider block">
                    Scope
                  </span>
                  <p className="text-cs-text-primary font-medium">
                    AI Strategy, UX Research, System Design
                  </p>
                </div>
              </div>

              <div className="border-t border-cs-border pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-cs-text-primary">
                    Tools:
                  </span>
                  <span className="text-cs-text-secondary ml-2">
                    Figma, Miro, Notion, Jira, Mixpanel
                  </span>
                </div>
                <div>
                  <span className="font-medium text-cs-text-primary">
                    Team:
                  </span>
                  <span className="text-cs-text-secondary ml-2">
                    CTO, ML Engineer, 2 Frontend Engineers, CEO
                  </span>
                </div>
              </div>

              {/* Accessibility statement */}
              <div className="mt-4 pt-4 border-t border-cs-border">
                <p className="text-xs text-cs-text-secondary">
                  <span className="font-semibold">Accessibility:</span> Designed
                  to WCAG 2.1 AA standards with keyboard navigation, screen
                  reader support, and color contrast compliance for financial
                  data visualization.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Section Navigation */}
      <div
        className={`${isNavSticky
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-cs-md"
            : "relative"
          } z-50 transition-all duration-300 hidden md:block`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-3">
          <nav
            aria-label="Case study sections"
            className="flex items-center justify-center gap-2 overflow-x-auto"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.href.slice(1)
                    ? "bg-cs-accent text-white shadow-cs-sm"
                    : "bg-white text-cs-text-secondary border border-cs-border hover:bg-cs-accent/10 hover:text-cs-accent hover:border-cs-accent/30"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main
        id="main-content"
        className="max-w-[1200px] mx-auto px-6 pb-24 space-y-12 relative z-10"
      >
        {/* ============================================
            SECTION: IMPACT AT A GLANCE (Moved up for scannability)
            ============================================ */}
        <section
          id="impact"
          className="scroll-mt-24 pt-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-accent/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-cs-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                Impact at a Glance
              </h2>
            </div>

            <SectionTLDR>
              AI-powered automation reduced CPA manual work by 85% while
              maintaining professional control, driving 32% conversion increase
              and 3 enterprise deals.
            </SectionTLDR>

            {/* Metrics Grid */}
            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6"
            >
              <MetricCard
                label="CPA Onboarding Time"
                value={`↓ ${onboardingCount}%`}
                subvalue="2.5h → 1.4h"
                description="Smart rule templates reducing setup complexity"
                color="success"
              />
              <MetricCard
                label="Demo-to-Conversion"
                value={`↑ ${conversionCount}%`}
                description="90-sec rule builder enabling setup during sales calls"
                color="secondary"
              />
              <MetricCard
                label="Manual Classification"
                value={`↓ ${classificationCount}%`}
                description="3-tier auto-classification with 90%+ confidence threshold"
                color="accent"
              />
              <MetricCard
                label="Error Detection Rate"
                value={`↑ ${errorDetectionCount}%`}
                description="ML anomaly detection with sensitive thresholds"
                color="warning"
              />
              <MetricCard
                label="Enterprise Deals"
                value={String(enterpriseDealsCount)}
                subvalue="closed in 6 months"
                description="AI features cited as differentiator in 78% of won deals"
                color="primary"
              />
            </div>

            {/* Results Table - Quick Reference */}
            <div className="mt-8 bg-cs-neutral rounded-2xl p-6 border border-cs-border">
              <h3 className="text-lg font-semibold text-cs-text-primary mb-4">
                Before & After Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-cs-border">
                      <th className="text-left py-3 px-4 font-semibold text-cs-text-secondary">
                        Metric
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-cs-text-secondary">
                        Before
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-cs-text-secondary">
                        After
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-cs-text-secondary">
                        Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cs-border">
                    <tr>
                      <td className="py-3 px-4 text-cs-text-primary">
                        Manual classification workload
                      </td>
                      <td className="py-3 px-4 text-cs-text-secondary">
                        100% manual
                      </td>
                      <td className="py-3 px-4 text-cs-text-secondary">
                        15% manual
                      </td>
                      <td className="py-3 px-4 font-semibold text-cs-accent">
                        ↓ 85%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-cs-text-primary">
                        Engineering dependency for rules
                      </td>
                      <td className="py-3 px-4 text-cs-text-secondary">
                        100% (2-5 day wait)
                      </td>
                      <td className="py-3 px-4 text-cs-text-secondary">
                        15% (edge cases only)
                      </td>
                      <td className="py-3 px-4 font-semibold text-cs-accent">
                        ↓ 85%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-cs-text-primary">
                        FMV disputes post-filing
                      </td>
                      <td className="py-3 px-4 text-cs-text-secondary">
                        Occasional
                      </td>
                      <td className="py-3 px-4 text-cs-text-secondary">Zero</td>
                      <td className="py-3 px-4 font-semibold text-cs-success">
                        Eliminated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION: THE CHALLENGE
            ============================================ */}
        <section id="challenge" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-error/10 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-cs-error" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                The Challenge
              </h2>
            </div>

            <SectionTLDR>
              CPAs spent 95% of time on repetitive classification work. They
              needed AI that handles routine tasks without removing professional
              judgment or IRS defensibility.
            </SectionTLDR>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              {/* Context */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-cs-text-secondary uppercase tracking-wider">
                  Context
                </h3>
                <p className="text-cs-text-primary leading-relaxed">
                  Computis had a functional crypto tax platform, but CPAs were
                  spending{" "}
                  <strong className="text-cs-error">
                    95% of their time on manual classification and error-hunting
                  </strong>{" "}
                  rather than leveraging expertise for tax strategy and client
                  consultation.
                </p>

                {/* Key Insight Callout */}
                <div className="bg-cs-secondary/5 rounded-xl p-5 border-l-4 border-cs-secondary">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-cs-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-cs-secondary uppercase tracking-wider mb-1">
                        Key Insight
                      </p>
                      <p className="text-sm text-cs-text-primary leading-relaxed italic">
                        "This wasn't a UX problem ('make AI easy to use')—it was
                        a trust problem ('make AI safe to rely on'). CPAs are
                        personally liable for classifications. They needed to
                        explain decisions to the IRS, not accept black-box
                        outputs."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pain Points */}
              <div className="bg-cs-error/5 rounded-2xl p-6 border border-cs-error/20">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-cs-error" />
                  <h3 className="text-lg font-bold text-cs-error">
                    Pain Points Identified
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Manual classification",
                      desc: "35% of CPA time on thousands of transactions per client",
                    },
                    {
                      title: "No anomaly detection",
                      desc: "FMV discrepancies discovered after client delivery",
                    },
                    {
                      title: "Engineering dependency",
                      desc: "2-5 day wait for every rule change",
                    },
                    {
                      title: "Limited audit visibility",
                      desc: "No documentation trail for IRS defense",
                    },
                    {
                      title: "Reactive error discovery",
                      desc: "Issues found only during manual review",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-cs-error rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-cs-text-primary">
                        <strong>{item.title}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Opportunity */}
            <div className="mt-6 bg-cs-accent/5 rounded-2xl p-6 border-l-4 border-cs-accent">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-cs-accent" />
                <h3 className="text-lg font-bold text-cs-accent">
                  The Opportunity
                </h3>
              </div>
              <p className="text-cs-text-primary leading-relaxed">
                Design AI-powered features that automate routine work while
                keeping CPAs in control—transforming Computis from a passive
                calculation engine into an{" "}
                <strong>intelligent workflow assistant</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION: MY APPROACH
            ============================================ */}
        <section id="approach" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-secondary/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-cs-secondary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                My Approach
              </h2>
            </div>

            <SectionTLDR>
              Led research with 12 CPAs to design AI that surfaces uncertainty
              instead of hiding it—augmentation over automation, with
              human-in-the-loop for all critical decisions.
            </SectionTLDR>

            {/* Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-cs-text-secondary uppercase tracking-wider mb-3">
                    Design Philosophy
                  </h3>
                  <p className="text-cs-text-primary leading-relaxed mb-4">
                    I designed AI features around{" "}
                    <strong className="text-cs-accent">
                      explicit confidence ranges
                    </strong>{" "}
                    that surfaced uncertainty to CPAs instead of hiding it.
                  </p>
                  <p className="text-cs-text-primary leading-relaxed">
                    Medium-confidence predictions were treated as{" "}
                    <strong className="text-cs-secondary">
                      hypotheses, not truths
                    </strong>
                    . The UI patterns (review queues, override controls) were
                    built around this principle.
                  </p>
                </div>

                {/* My Responsibilities */}
                <div>
                  <h3 className="text-sm font-semibold text-cs-text-secondary uppercase tracking-wider mb-3">
                    My Responsibilities
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Product strategy & feature definition for entire AI suite",
                      "Interaction patterns & UX design for all AI touchpoints",
                      "Partnered with ML engineers on model integration & threshold tuning",
                      "Led user research (12 interviews, 6 observations, 4 usability cycles)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cs-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-cs-text-primary">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Stats */}
              <div className="bg-cs-neutral rounded-2xl p-6 border border-cs-border">
                <h3 className="text-lg font-semibold text-cs-text-primary mb-4">
                  Research Foundation
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-cs-border text-center">
                    <p className="text-3xl font-bold text-cs-accent mb-1">12</p>
                    <p className="text-xs text-cs-text-secondary">
                      CPA Interviews
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-cs-border text-center">
                    <p className="text-3xl font-bold text-cs-secondary mb-1">
                      6
                    </p>
                    <p className="text-xs text-cs-text-secondary">
                      Full-Day Observations
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-cs-border text-center">
                    <p className="text-3xl font-bold text-cs-warning mb-1">
                      50K+
                    </p>
                    <p className="text-xs text-cs-text-secondary">
                      Transactions Analyzed
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-cs-border text-center">
                    <p className="text-3xl font-bold text-cs-success mb-1">4</p>
                    <p className="text-xs text-cs-text-secondary">
                      Usability Test Cycles
                    </p>
                  </div>
                </div>

                {/* Key finding */}
                <div className="bg-white rounded-xl p-4 border border-cs-border">
                  <p className="text-sm text-cs-text-secondary mb-2">
                    Key Finding:
                  </p>
                  <p className="text-sm text-cs-text-primary font-medium">
                    73% of transactions followed predictable patterns—perfect
                    candidates for AI automation with human oversight.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Artifacts - NEW COMPONENT */}
            <ResearchArtifacts />
          </div>
        </section>

        {/* ============================================
            SECTION: AI FEATURE SOLUTIONS
            ============================================ */}
        <section id="solutions" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-accent/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cs-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                AI Feature Solutions
              </h2>
            </div>

            <SectionTLDR>
              Four AI capabilities (classification, audit trails, rule builder,
              anomaly detection) each solving a specific workflow bottleneck
              while maintaining CPA professional control.
            </SectionTLDR>

            {/* Confidence System Diagram - NEW VISUAL COMPONENT */}
            <div className="mt-8 mb-10">
              <h3 className="text-lg font-semibold text-cs-text-primary mb-4">
                The 3-Tier Confidence System
              </h3>
              <ConfidenceSystemDiagram />
            </div>

            {/* Feature Cards */}
            <div className="space-y-8 mt-8">
              {/* Feature 1: Intelligent Classification */}
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                iconBg="bg-cs-accent/10"
                iconColor="text-cs-accent"
                title="Intelligent Transaction Classification"
                problem="Manual classification consumed 60%+ of CPA time with predictable, repetitive decisions."
                solution={[
                  "High (90%+): Auto-classified unless overridden",
                  "Medium (60-89%): Surfaced for quick review with one-click accept/reject",
                  "Low (<60%): Requires manual classification",
                ]}
                solutionIntro="ML-driven auto-classification with visual confidence tiers:"
                impact={[
                  { value: "↓ 85%", label: "manual classification" },
                  { value: "↑ 150%", label: "error detection accuracy" },
                ]}
                designDecision="Each suggestion includes inline rationale tooltips explaining AI reasoning—pattern matches, historical precedent, and data signals."
                videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ff461feda4ee1490189116edd690bea23?alt=media&token=87afea48-1862-4a8e-86ea-389e8372b214&apiKey=ba69a23156414a589de97341511272c9"
                videoLabel="AI Classification confidence indicators demonstration"
              />

              {/* Feature 2: Audit Trail */}
              <FeatureCard
                icon={<Eye className="w-6 h-6" />}
                iconBg="bg-cs-secondary/10"
                iconColor="text-cs-secondary"
                title="Explainable Audit Trail"
                problem="No visibility into classification decisions—CPAs maintained separate documentation for compliance."
                solution={[
                  "Classification changes (AI-suggested and manual)",
                  "Override decisions with required rationale prompts",
                  "User identification and timestamps",
                  "Export-ready PDF documentation for IRS defense",
                ]}
                solutionIntro="AI-generated audit logs capturing:"
                impact={[
                  { value: "↓ 40%", label: "compliance prep time" },
                  {
                    value: "Self-service",
                    label: "IRS audit defense enabled",
                  },
                ]}
                designDecision="Override rationale was made required after testing—CPAs wanted it for professional liability protection."
                videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F0aa25b94f0704523b38a099daf6ee976?alt=media&token=d60e1a15-62e9-450b-b0b6-31613f1e41ef&apiKey=ba69a23156414a589de97341511272c9"
                videoLabel="Intelligent Audit Trail System demonstration"
              />

              {/* Feature 3: Rule Builder */}
              <FeatureCard
                icon={<Settings className="w-6 h-6" />}
                iconBg="bg-cs-success/10"
                iconColor="text-cs-success"
                title="Smart Rule Builder"
                problem="CPAs repeatedly created similar rules, but every change required engineering (2-5 day wait)."
                solution={[
                  "Drag-and-drop logic blocks with natural language preview",
                  "Live preview showing exact transaction impact before applying",
                  "AI-suggested rules based on detected classification patterns",
                ]}
                solutionIntro="No-code visual rule builder with:"
                impact={[
                  { value: "12% → 67%", label: "adoption rate" },
                  { value: "15min → 90sec", label: "rule creation time" },
                  { value: "↑ 32%", label: "demo conversions" },
                ]}
                videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa8614886261748bb94f6226028854554?alt=media&token=a09d99a7-4cc5-4004-a069-ae3e9088821e&apiKey=ba69a23156414a589de97341511272c9"
                videoLabel="Smart Rule Builder demonstration"
                showFailureStory
              />

              {/* Feature 4: Anomaly Detection */}
              <FeatureCard
                icon={<AlertTriangle className="w-6 h-6" />}
                iconBg="bg-cs-warning/10"
                iconColor="text-cs-warning"
                title="Real-Time Anomaly Detection"
                problem="FMV errors and data inconsistencies discovered too late—after export or client delivery."
                solution={[
                  "Error: Requires resolution before export",
                  "Warning: Should be reviewed",
                  "Info: FYI, may not require action",
                ]}
                solutionIntro="ML-powered detection with severity-tiered inline flags:"
                impact={[
                  { value: "↑ 150%", label: "error detection" },
                  { value: "Zero", label: "FMV disputes post-implementation" },
                ]}
                designDecision="Warn, don't block—CPAs sometimes have legitimate reasons to export with known issues. The interface documents acknowledgment."
                videoSrc="https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F3bbe062155dd44f39a551875b4c99ff9?alt=media&token=f768e0a7-6142-4898-9d89-b2f0c86f24e9&apiKey=ba69a23156414a589de97341511272c9"
                videoLabel="Proactive Anomaly Detection Engine demonstration"
              />
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION: DESIGN EVOLUTION (NEW)
            ============================================ */}
        <section id="evolution" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-warning/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cs-warning" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                Design Evolution & Learnings
              </h2>
            </div>

            <SectionTLDR>
              The Rule Builder failure taught us that capability without
              usability is worthless. V1's 14 condition types overwhelmed
              users—V2's simplified "recipe" model drove 5.5x adoption increase.
            </SectionTLDR>

            {/* Design Evolution Component - Shows iteration */}
            <DesignEvolution />

            {/* Trade-off Section */}
            <div className="mt-10 pt-10 border-t border-cs-border">
              <h3 className="text-xl font-bold text-cs-text-primary mb-6">
                Critical Trade-off: Speed vs. Transparency
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-cs-warning/5 rounded-2xl p-6 border border-cs-warning/20">
                  <h4 className="text-base font-semibold text-cs-text-primary mb-3">
                    The Tension
                  </h4>
                  <p className="text-sm text-cs-text-primary leading-relaxed">
                    Removing rationale generation would cut processing time
                    60%—and we'd just lost a deal to a faster competitor. CTO
                    pushed for speed; I argued transparency is non-negotiable in
                    regulated domains.
                  </p>
                </div>

                <div className="bg-cs-accent/5 rounded-2xl p-6 border border-cs-accent/20">
                  <h4 className="text-base font-semibold text-cs-text-primary mb-3">
                    Research Insight
                  </h4>
                  <p className="text-sm text-cs-text-primary leading-relaxed">
                    Competitor "black box AI" complaints outnumbered performance
                    complaints{" "}
                    <strong className="text-cs-accent">3:1</strong> in G2
                    reviews.
                  </p>
                </div>
              </div>

              <div className="bg-cs-success/5 rounded-2xl p-6 border-l-4 border-cs-success">
                <h4 className="text-base font-semibold text-cs-success mb-3">
                  Solution: Hybrid Approach
                </h4>
                <p className="text-sm text-cs-text-primary leading-relaxed mb-4">
                  Immediate classification display with async rationale loading.
                  Users got speed for scanning, transparency within seconds for
                  examination.
                </p>
                <p className="text-sm text-cs-text-primary">
                  <strong>Outcome:</strong> "Explainable AI" positioning won
                  subsequent deals; 3 enterprise clients cited audit
                  defensibility as deciding factor.
                </p>
              </div>
            </div>

            {/* Stakeholder Alignment */}
            <div className="mt-10 pt-10 border-t border-cs-border">
              <h3 className="text-xl font-bold text-cs-text-primary mb-6">
                Stakeholder Alignment
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-cs-text-primary mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cs-accent" />
                    Balancing Automation & Control
                  </h4>
                  <p className="text-sm text-cs-text-primary leading-relaxed mb-4">
                    <strong>Challenge:</strong> Engineering wanted maximum
                    automation; CPAs required override capabilities for
                    liability protection.
                  </p>
                  <p className="text-sm text-cs-text-primary leading-relaxed">
                    <strong>My approach:</strong> Facilitated cross-functional
                    workshop, presented research showing 40% of competitor
                    complaints cited "lack of control," and designed graduated
                    autonomy system.
                  </p>
                </div>

                <div className="bg-cs-accent/5 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-6 h-6 text-cs-accent flex-shrink-0" />
                    <blockquote className="text-sm text-cs-text-primary italic leading-relaxed">
                      "Finally, AI that works with me instead of replacing my
                      judgment."
                    </blockquote>
                  </div>
                  <cite className="text-xs text-cs-accent font-semibold">
                    — CPA Beta User
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION: RESULTS & BUSINESS IMPACT
            ============================================ */}
        <section id="results" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-success/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cs-success" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                Results & Business Impact
              </h2>
            </div>

            <SectionTLDR>
              85% reduction in manual work, 32% conversion increase, 3
              enterprise deals closed with AI as primary differentiator. First
              Big 4 accounting partnership secured.
            </SectionTLDR>

            {/* Adoption Metrics */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-cs-text-primary mb-4">
                Adoption Metrics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-cs-success/5 p-5 rounded-xl border-l-4 border-cs-success">
                  <p className="text-2xl font-bold text-cs-success mb-1">89%</p>
                  <p className="text-xs text-cs-text-secondary leading-tight">
                    AI acceptance rate — CPAs trusted high-confidence
                    classifications
                  </p>
                </div>
                <div className="bg-cs-accent/5 p-5 rounded-xl border-l-4 border-cs-accent">
                  <p className="text-2xl font-bold text-cs-accent mb-1">11%</p>
                  <p className="text-xs text-cs-text-secondary leading-tight">
                    Meaningful override rate — capturing human context AI lacked
                  </p>
                </div>
                <div className="bg-cs-secondary/5 p-5 rounded-xl border-l-4 border-cs-secondary">
                  <p className="text-2xl font-bold text-cs-secondary mb-1">
                    78%
                  </p>
                  <p className="text-xs text-cs-text-secondary leading-tight">
                    Rule builder adoption — up from 12% in v1
                  </p>
                </div>
                <div className="bg-cs-warning/5 p-5 rounded-xl border-l-4 border-cs-warning">
                  <p className="text-2xl font-bold text-cs-warning mb-1">
                    340%
                  </p>
                  <p className="text-xs text-cs-text-secondary leading-tight">
                    Increase in audit trail exports
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact Cards */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-cs-neutral p-6 rounded-2xl border border-cs-border">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-cs-primary" />
                  <h4 className="text-base font-semibold text-cs-text-primary">
                    Revenue Impact
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "3 enterprise CPA firm deals closed within 6 months of AI launch",
                    "78% of won deals cited AI features as primary differentiator",
                    "First Big 4 accounting partnership secured",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cs-accent mt-1">•</span>
                      <span className="text-sm text-cs-text-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cs-neutral p-6 rounded-2xl border border-cs-border">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-cs-success" />
                  <h4 className="text-base font-semibold text-cs-text-primary">
                    Operational Wins
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "40% reduction in classification-related support tickets",
                    "Platform expanded to serve DAOs and hedge funds",
                    "Zero FMV disputes reported post-implementation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cs-success mt-1">•</span>
                      <span className="text-sm text-cs-text-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-gradient-to-r from-cs-accent/10 to-cs-secondary/10 rounded-2xl p-6 border-l-4 border-cs-accent">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-cs-accent flex-shrink-0" />
                <div>
                  <blockquote className="text-lg italic text-cs-text-primary leading-relaxed mb-3">
                    "This is the first crypto tax tool I'd stake my license on."
                  </blockquote>
                  <cite className="text-sm text-cs-accent font-semibold not-italic">
                    — Enterprise CPA, Big 4 Partner
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION: KEY LEARNINGS
            ============================================ */}
        <section id="learnings" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-cs-md border border-cs-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cs-primary/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-cs-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cs-text-primary">
                Key Learnings
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Augmentation > Automation",
                  desc: "CPAs adopted AI faster when they retained control. Human-in-the-loop isn't a weakness—it's how you earn trust for AI capabilities in regulated industries.",
                  color: "secondary",
                },
                {
                  title: "Transparency Builds Trust",
                  desc: "Confidence scores and explainable reasoning drove adoption. In high-stakes domains, AI transparency isn't nice-to-have—it's the core feature.",
                  color: "accent",
                },
                {
                  title: "Simplicity Beats Capability",
                  desc: "The rule builder failure taught me that features nobody uses have zero value. Start with minimum viable complexity.",
                  color: "success",
                },
                {
                  title: "Failed Experiments Reveal Values",
                  desc: "Testing fully automated classification taught us the most. CPAs rejected it—not because of accuracy, but because it removed professional judgment.",
                  color: "warning",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-cs-${item.color}/5 p-6 rounded-2xl border-l-4 border-cs-${item.color}`}
                >
                  <h3 className="text-base font-semibold text-cs-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cs-text-primary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* What I'd Do Differently */}
            <div className="mt-10 pt-10 border-t border-cs-border">
              <h3 className="text-xl font-bold text-cs-text-primary mb-6">
                What I'd Do Differently
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-cs-neutral rounded-2xl p-6 border border-cs-border">
                  <h4 className="text-base font-semibold text-cs-text-primary mb-3">
                    Ship minimal first
                  </h4>
                  <p className="text-sm text-cs-text-primary leading-relaxed">
                    The rule builder failure cost 6 weeks. I now advocate
                    launching at minimum viable complexity and adding power
                    features based on observed demand, not assumed need.
                  </p>
                </div>
                <div className="bg-cs-neutral rounded-2xl p-6 border border-cs-border">
                  <h4 className="text-base font-semibold text-cs-text-primary mb-3">
                    Document trade-off decisions explicitly
                  </h4>
                  <p className="text-sm text-cs-text-primary leading-relaxed">
                    The speed vs. transparency debate recurred because we hadn't
                    formalized the reasoning. I now create brief "trade-off
                    memos" for major architectural choices.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Credit */}
            <div className="mt-10 pt-10 border-t border-cs-border">
              <h3 className="text-sm font-semibold text-cs-text-secondary uppercase tracking-wider mb-4">
                Team Contributions
              </h3>
              <div className="bg-cs-neutral rounded-2xl p-6 border border-cs-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-cs-text-primary">
                      My ownership:
                    </p>
                    <p className="text-cs-text-secondary">
                      Product strategy, UX design, user research, stakeholder
                      alignment
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-cs-text-primary">
                      ML Engineer:
                    </p>
                    <p className="text-cs-text-secondary">
                      Model architecture, confidence scoring algorithms
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-cs-text-primary">
                      Frontend Engineers:
                    </p>
                    <p className="text-cs-text-secondary">
                      React implementation, performance optimization
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-cs-text-primary">CTO:</p>
                    <p className="text-cs-text-secondary">
                      Technical architecture, infrastructure decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-cs-accent text-white shadow-cs-md hover:shadow-lg transition-all duration-300 z-50 ${showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

/* ============================================
   SUB-COMPONENTS
   ============================================ */

interface MetricCardProps {
  label: string;
  value: string;
  subvalue?: string;
  description: string;
  color: "success" | "secondary" | "accent" | "warning" | "primary";
}

function MetricCard({
  label,
  value,
  subvalue,
  description,
  color,
}: MetricCardProps) {
  const colorClasses = {
    success: "border-cs-success text-cs-success",
    secondary: "border-cs-secondary text-cs-secondary",
    accent: "border-cs-accent text-cs-accent",
    warning: "border-cs-warning text-cs-warning",
    primary: "border-cs-primary text-cs-primary",
  };

  return (
    <div
      className={`bg-white p-5 rounded-xl border-2 ${colorClasses[color].split(" ")[0]} shadow-cs-sm hover:shadow-cs-md transition-all duration-200 text-center`}
    >
      <p className="text-xs font-semibold text-cs-text-secondary mb-2 uppercase tracking-wider">
        {label}
      </p>
      <p className={`text-3xl font-bold ${colorClasses[color].split(" ")[1]} mb-1`}>
        {value}
      </p>
      {subvalue && (
        <p className="text-xs font-mono text-cs-text-secondary mb-2">
          {subvalue}
        </p>
      )}
      <p className="text-xs text-cs-text-secondary leading-tight pt-2 border-t border-cs-border">
        {description}
      </p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  problem: string;
  solution: string[];
  solutionIntro: string;
  impact: { value: string; label: string }[];
  designDecision?: string;
  videoSrc: string;
  videoLabel: string;
  showFailureStory?: boolean;
}

function FeatureCard({
  icon,
  iconBg,
  iconColor,
  title,
  problem,
  solution,
  solutionIntro,
  impact,
  designDecision,
  videoSrc,
  videoLabel,
  showFailureStory,
}: FeatureCardProps) {
  return (
    <div className="bg-cs-neutral rounded-2xl p-6 sm:p-8 border border-cs-border">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0 ${iconColor}`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-cs-text-primary">{title}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Problem & Solution */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider mb-2">
              Problem
            </p>
            <p className="text-sm text-cs-text-primary leading-relaxed">
              {problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider mb-2">
              Solution
            </p>
            <p className="text-sm text-cs-text-primary leading-relaxed mb-2">
              {solutionIntro}
            </p>
            <ul className="space-y-2">
              {solution.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className={`w-1.5 h-1.5 ${iconBg.replace("/10", "")} rounded-full mt-2 flex-shrink-0`}
                  />
                  <span className="text-sm text-cs-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-white rounded-xl p-5 border border-cs-border">
          <p className="text-xs font-semibold text-cs-text-secondary uppercase tracking-wider mb-4">
            Impact
          </p>
          <div className="space-y-3">
            {impact.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                <div>
                  <p className={`text-lg font-bold ${iconColor}`}>
                    {item.value}
                  </p>
                  <p className="text-sm text-cs-text-secondary">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          {designDecision && (
            <div className="mt-4 pt-4 border-t border-cs-border">
              <p className={`text-xs font-semibold ${iconColor} mb-1`}>
                Design Decision:
              </p>
              <p className="text-sm text-cs-text-primary leading-relaxed">
                {designDecision}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Failure Story (for Rule Builder) */}
      {showFailureStory && (
        <div className="bg-gradient-to-r from-cs-error/5 to-cs-warning/5 rounded-xl p-6 border border-cs-warning/20 mb-6">
          <h4 className="text-base font-bold text-cs-text-primary mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-cs-warning" />
            Failure & Recovery: The Rule Builder Nobody Used
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-semibold text-cs-text-secondary uppercase mb-1">
                Problem
              </p>
              <p className="text-sm text-cs-text-primary">
                V1 launched to 12% adoption—users explored 3-4 min then
                abandoned.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-cs-text-secondary uppercase mb-1">
                Root Cause
              </p>
              <p className="text-sm text-cs-text-primary">
                Over-engineered with 14 condition types and nested logic.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-cs-text-secondary uppercase mb-1">
                Solution
              </p>
              <p className="text-sm text-cs-text-primary">
                Stripped to "recipe" model with Advanced Mode toggle.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-cs-success uppercase mb-1">
                Learning
              </p>
              <p className="text-sm text-cs-text-primary italic">
                Capability without usability is worthless.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video */}
      <div className="video-container relative">
        <div className="absolute top-4 left-4 z-10 bg-cs-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
          <Play className="w-3 h-3" />
          Watch Demo
        </div>
        <VideoOverlay videoSrc={videoSrc} ariaLabel={videoLabel} />
      </div>
    </div>
  );
}
