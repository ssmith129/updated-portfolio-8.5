import { Target, Building2, TrendingUp, Users } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";

const objectives = [
  {
    icon: <Target className="w-4 h-4 text-sym-blue" />,
    title: "Reduce cognitive overhead",
    detail: "Cut time-to-triage by 40%+ through AI-assisted prioritization that clinicians actually trust.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-sym-green" />,
    title: "Improve compliance visibility",
    detail: "Surface SLA deadlines and regulatory requirements in context, not buried in email threads.",
  },
  {
    icon: <Users className="w-4 h-4 text-sym-purple" />,
    title: "Unify fragmented workflows",
    detail: "Replace the EHR + Excel + email patchwork with a single coordination layer — without replacing any legacy system.",
  },
  {
    icon: <Building2 className="w-4 h-4 text-sym-amber" />,
    title: "Prove viability at pilot scale",
    detail: "Demonstrate measurable improvements across 3 facilities and 65 staff within a 6-week evaluation window.",
  },
];

const timelinePhases = [
  { label: "Discovery", months: "Jan", detail: "Stakeholder interviews", color: "#3B82F6" },
  { label: "Research", months: "Feb", detail: "18 shadows, 3,000 tasks", color: "#10B981" },
  { label: "Synthesis", months: "Mar", detail: "Journey maps, insights", color: "#8B5CF6" },
  { label: "Sprint 1", months: "Apr", detail: "AI confidence, triage", color: "#F59E0B" },
  { label: "Sprint 2", months: "May", detail: "Scheduling, alerts", color: "#EC4899" },
  { label: "Pilot", months: "Jun–Jul", detail: "6-week rollout, 65 staff", color: "#3B82F6" },
  { label: "Analysis", months: "Aug", detail: "Metrics & report", color: "#10B981" },
];

const roleDetails = [
  { label: "Client", value: "Custom Data Processing Inc. — mid-sized health IT services company" },
  { label: "Users", value: "65 clinical staff (MDs, RNs, admins) across 3 public health facilities" },
  { label: "Problem", value: "Fragmented EHR + Excel + email workflows causing measurable clinical and operational losses" },
  { label: "My Role", value: "Founding Product Designer — research planning, interaction design, prototyping, design system, pilot validation" },
  { label: "Team", value: "2 Engineers, 1 PM, 4 Clinical Advisors" },
  { label: "Timeline", value: "Jan – Aug 2024 (8 months total, 6-week pilot)" },
  { label: "Constraint", value: "Prove measurable improvement within 6-week pilot window or project doesn't get broader rollout" },
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
        <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
          Context &amp; Stakes
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6 max-w-[720px]">
          Project Overview
        </h2>
      </div>

      {/* Visual Project Timeline */}
      <ProjectTimeline />

      {/* Structured Role Card */}
      <div className="bg-sym-card rounded-2xl border border-sym-card-border p-6 sm:p-8 mb-10 shadow-sm">
        <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-4">
          Project Context
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {roleDetails.map((item) => (
            <div key={item.label} className="py-2 border-b border-sym-divider last:border-b-0">
              <p className="text-xs font-semibold text-sym-blue uppercase tracking-wider mb-0.5">
                {item.label}
              </p>
              <p className="text-sm text-sym-body leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-4">
        Success Criteria Defined Upfront
      </p>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {objectives.map((obj) => (
          <div
            key={obj.title}
            className="reveal bg-sym-card rounded-xl border border-sym-card-border p-5 shadow-sm card-lift hover:border-sym-card-border-hover group"
          >
            <div className="flex items-center gap-2 mb-2">
              {obj.icon}
              <p className="text-sm font-semibold text-sym-heading">{obj.title}</p>
            </div>
            <p className="text-sm text-sym-muted leading-relaxed pl-6">{obj.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectTimeline() {
  return (
    <div className="bg-sym-card rounded-2xl border border-sym-card-border p-6 sm:p-8 mb-10 shadow-sm overflow-x-auto">
      <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-5">
        Project Timeline — Jan – Aug 2024
      </p>
      <div className="flex gap-2 min-w-[700px]">
        {timelinePhases.map((phase, i) => (
          <div key={phase.label} className="flex-1 relative">
            {/* Connector line */}
            {i < timelinePhases.length - 1 && (
              <div className="absolute top-4 left-1/2 right-0 h-0.5 bg-sym-card-border z-0" />
            )}
            {/* Node */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2"
                style={{ backgroundColor: phase.color }}
              >
                {i + 1}
              </div>
              <p className="text-xs font-semibold text-sym-heading mb-0.5">{phase.label}</p>
              <p className="text-[10px] text-sym-label mb-0.5">{phase.months}</p>
              <p className="text-[10px] text-sym-muted leading-tight">{phase.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
