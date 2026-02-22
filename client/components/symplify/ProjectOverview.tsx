import { Target, Building2, TrendingUp, Users } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";

const objectives = [
  {
    icon: <Target className="w-4 h-4 text-[#3B82F6]" />,
    title: "Reduce cognitive overhead",
    detail:
      "Cut time-to-triage by 40%+ through AI-assisted prioritization that clinicians actually trust.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-[#10B981]" />,
    title: "Improve compliance visibility",
    detail:
      "Surface SLA deadlines and regulatory requirements in context, not buried in email threads.",
  },
  {
    icon: <Users className="w-4 h-4 text-[#8B5CF6]" />,
    title: "Unify fragmented workflows",
    detail:
      "Replace the EHR + Excel + email patchwork with a single coordination layer — without replacing any legacy system.",
  },
  {
    icon: <Building2 className="w-4 h-4 text-[#F59E0B]" />,
    title: "Prove viability at pilot scale",
    detail:
      "Demonstrate measurable improvements across 3 facilities and 65 staff within a 6-week evaluation window.",
  },
];

export default function ProjectOverview() {
  const headingRef = useScrollReveal();
  const gridRef = useStaggerReveal();

  return (
    <section
      id="overview"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
          Context & Stakes
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-4 max-w-[720px]">
          Project Overview
        </h2>
      </div>

      <div className="max-w-[720px] mb-10 space-y-4">
        <p className="text-[15px] text-[#475569] leading-relaxed">
          Custom Data Processing Inc. engaged our team to design a 0-to-1
          clinical coordination platform for hospital and WIC clinic
          environments. Their existing clients — mid-sized public health
          facilities — were losing measurable hours each week to fragmented
          workflows spread across disconnected EHR systems, Excel trackers, and
          email inboxes.
        </p>
        <p className="text-[15px] text-[#475569] leading-relaxed">
          The opportunity was clear but constrained: any solution had to
          integrate with legacy systems (not replace them), comply with HIPAA
          audit requirements, and prove value within a tight 6-week pilot
          window. Leadership needed evidence — not promises — before committing
          to a broader rollout.
        </p>
        <p className="text-[15px] text-[#475569] leading-relaxed">
          As the{" "}
          <span className="font-semibold text-[#334155]">
            Founding Product Designer
          </span>
          , I owned the full design surface: research planning, interaction
          design, prototyping, design system creation, and pilot validation. I
          worked alongside 2 engineers, 1 product manager, and 4 clinical
          advisors who served as domain experts and testing partners throughout.
        </p>
      </div>

      <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
        Success Criteria Defined Upfront
      </p>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {objectives.map((obj) => (
          <div
            key={obj.title}
            className="reveal bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-sm card-lift hover:border-[#CBD5E1] group"
          >
            <div className="flex items-center gap-2 mb-2">
              {obj.icon}
              <p className="text-sm font-semibold text-[#0F172A]">
                {obj.title}
              </p>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed pl-6">
              {obj.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
