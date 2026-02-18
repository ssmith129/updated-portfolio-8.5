import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";
import HeroSection from "../components/symplify/HeroSection";
import ImpactMetrics from "../components/symplify/ImpactMetrics";
import ProblemSection from "../components/symplify/ProblemSection";
import ConstraintsBar from "../components/symplify/ConstraintsBar";
import ResearchSection from "../components/symplify/ResearchSection";
import DesignDecisions from "../components/symplify/DesignDecisions";
import SystemOverview from "../components/symplify/SystemOverview";
import ReflectionsSection from "../components/symplify/ReflectionsSection";

const sectionNav = [
  { href: "#impact", label: "Impact" },
  { href: "#problem", label: "Problem" },
  { href: "#research", label: "Research" },
  { href: "#decisions", label: "Design Decisions" },
  { href: "#system", label: "System" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#reflection", label: "Reflection" },
  { href: "#next-steps", label: "Next Steps" },
];

export default function SymplifyCaseStudy() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] scroll-smooth relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3B82F6 1px, transparent 1px), radial-gradient(circle at 80% 80%, #10B981 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

      <SkipLink />
      <Navigation />

      <HeroSection onPreviewOpen={() => setIsPreviewOpen(true)} />

      {/* Section Navigation */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 mb-4">
        <nav
          aria-label="Case study sections"
          className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-hide"
        >
          {sectionNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#475569] border border-[#E2E8F0] text-[13px] font-medium hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] hover:border-[#3B82F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] transition-all duration-200 shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <hr className="border-[#E2E8F0]" />
      </div>

      <main id="main-content">
        <ImpactMetrics />
        <SectionDivider />
        <ProblemSection />
        <ConstraintsBar />
        <SectionDivider />
        <ResearchSection />
        <SectionDivider />
        <DesignDecisions />
        <SectionDivider />
        <SystemOverview />
        <SectionDivider />
        <ReflectionsSection />
      </main>

      <RelatedCaseStudies currentCaseStudyId="symplify" />
      <Footer />

      {/* Scroll to Top */}
      <div className="fixed bottom-20 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`absolute right-4 sm:right-8 lg:right-12 p-3.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 pointer-events-auto ${
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

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Symplify Platform Preview
              </h3>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-[#64748B] hover:text-[#0F172A] transition-colors text-2xl leading-none"
                aria-label="Close preview"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef"
                alt="Symplify platform dashboard showing unified clinical workflows"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
      <hr className="border-[#F1F5F9]" />
    </div>
  );
}
