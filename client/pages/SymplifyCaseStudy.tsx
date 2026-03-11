import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";
import { CaseStudyStructuredData } from "../components/case-study";
import ReadingProgress from "../components/case-study/ReadingProgress";
import HeroSection from "../components/symplify/HeroSection";
import ImpactMetrics from "../components/symplify/ImpactMetrics";
import ProjectOverview from "../components/symplify/ProjectOverview";
import ProblemSection from "../components/symplify/ProblemSection";
import ConstraintsBar from "../components/symplify/ConstraintsBar";
import ResearchSection from "../components/symplify/ResearchSection";
import DesignEvolution from "../components/symplify/DesignEvolution";
import DesignDecisions from "../components/symplify/DesignDecisions";
import ProductShowcase from "../components/symplify/ProductShowcase";
import SystemOverview from "../components/symplify/SystemOverview";
import ReflectionsSection from "../components/symplify/ReflectionsSection";

const sectionNav = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "Problem" },
  { href: "#research", label: "Research" },
  { href: "#evolution", label: "Evolution" },
  { href: "#decisions", label: "Design Decisions" },
  { href: "#showcase", label: "Product" },
  { href: "#impact", label: "Outcomes" },
  { href: "#system", label: "Architecture" },
  { href: "#outcomes", label: "Assessment" },
  { href: "#reflection", label: "Reflection" },
];

export default function SymplifyCaseStudy() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SEO: page title, meta description, and Open Graph tags
  useEffect(() => {
    document.title =
      "Symplify — AI-Enhanced Hospital Management | Sean Smith Portfolio";

    const descContent =
      "Case study: Designing an AI-enhanced hospital management platform that reduced triage time 40% and improved accuracy to 89% across 3 facilities.";

    setOrCreateMeta("description", descContent);

    const ogTags = [
      { property: "og:title", content: "Symplify — Turning Hospital Chaos into Clinical Clarity" },
      { property: "og:description", content: descContent },
      { property: "og:image", content: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa365aabaf0c94e5ea46663d1d7bd4cb3" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://smithdesign.live/case-studies/symplify-hospital-management-system" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Symplify — Turning Hospital Chaos into Clinical Clarity" },
      { name: "twitter:description", content: "Designing an AI-enhanced hospital management platform. 40% faster triage, 89% accuracy, 3 facilities." },
    ];

    const createdMetas: HTMLMetaElement[] = [];
    ogTags.forEach((tag) => {
      const attr = tag.property ? "property" : "name";
      const val = tag.property || tag.name!;
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, val);
        document.head.appendChild(el);
        createdMetas.push(el);
      }
      el.setAttribute("content", tag.content);
    });

    return () => {
      document.title = "Sean Smith — Portfolio";
      createdMetas.forEach((el) => el.remove());
    };
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = sectionNav.map((s) => s.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sym-bg-primary via-white to-sym-bg-blue scroll-smooth relative overflow-hidden">
      <ReadingProgress />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3B82F6 1px, transparent 1px), radial-gradient(circle at 80% 80%, #10B981 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sym-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sym-green/5 rounded-full blur-[120px] pointer-events-none" />

      <SkipLink />
      <Navigation />

      <CaseStudyStructuredData
        title="Symplify — Turning Hospital Chaos into Clinical Clarity"
        description="End-to-end design of an AI-enhanced hospital management platform for 65 clinical staff across 3 facilities."
        authorName="Sean Smith"
        authorJobTitle="Senior UX/Product Designer"
        publishedDate="2024-08-01"
        modifiedDate="2026-02-23"
        imageUrl="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa365aabaf0c94e5ea46663d1d7bd4cb3"
        url="https://smithdesign.live/case-studies/symplify-hospital-management-system"
      />

      <HeroSection />

      {/* Sticky Section Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-sym-divider shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Case study sections"
            className="flex items-center justify-center gap-2 overflow-x-auto py-3 scrollbar-hide
                       relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-gradient-to-r before:from-white/80 before:to-transparent before:z-10 before:pointer-events-none
                       after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-white/80 after:to-transparent after:z-10 after:pointer-events-none"
          >
            {sectionNav.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`shrink-0 px-3.5 py-2 rounded-full text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sym-blue transition-all duration-200 shadow-sm border ${
                    isActive
                      ? "bg-sym-blue/10 text-sym-blue border-sym-blue/30"
                      : "bg-white/80 text-sym-body border-sym-card-border hover:bg-sym-blue/10 hover:text-sym-blue hover:border-sym-blue/30"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <main id="main-content">
        <ProjectOverview />
        <SectionDivider />
        <ProblemSection />
        <ConstraintsBar />
        <SectionDivider />
        <ResearchSection />
        <SectionDivider />
        <DesignEvolution />
        <SectionDivider />
        <DesignDecisions />
        <SectionDivider />
        <ProductShowcase />
        <SectionDivider />
        <ImpactMetrics />
        <SectionDivider />
        <SystemOverview />
        <SectionDivider />
        <ReflectionsSection />
      </main>

      <Footer />

      {/* Scroll to Top */}
      <div className="fixed bottom-20 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`absolute right-4 sm:right-8 lg:right-12 p-3.5 rounded-full bg-gradient-to-r from-sym-blue to-sym-green text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sym-blue focus:ring-offset-2 pointer-events-auto ${
              showScrollTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16 pointer-events-none"
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
      <hr className="border-sym-divider" />
    </div>
  );
}

function setOrCreateMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.name = name;
    el.content = content;
    document.head.appendChild(el);
  }
}
