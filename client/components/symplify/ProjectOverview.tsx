import { Target, Building2, TrendingUp, Users } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";

const objectives = [
  {
    icon: <Target className="w-4 h-4 text-sym-blue" />,
    title: "Reduce cognitive overhead",
    detail: "AI-assisted prioritization that clinicians actually trust.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-sym-green" />,
    title: "Improve compliance visibility",
    detail: "Surface SLA deadlines and regulatory requirements in context.",
  },
  {
    icon: <Users className="w-4 h-4 text-sym-purple" />,
    title: "Unify fragmented workflows",
    detail: "Single coordination layer over EHR + Excel + email — without replacing any legacy system.",
  },
  {
    icon: <Building2 className="w-4 h-4 text-sym-amber" />,
    title: "Prove viability at pilot scale",
    detail: "Measurable improvements within a constrained pilot window.",
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
    <div className="bg-sym-card rounded-2xl border border-sym-card-border p-6 sm:p-8 mb-10 shadow-sm">
      <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-6">
        Project Timeline — Jan – Aug 2024
      </p>

      {/* Desktop/Tablet: horizontal timeline */}
      <div className="hidden sm:block overflow-x-auto">
        <div className="min-w-[640px] px-4">
          {/* Connector line */}
          <div className="flex items-center mb-4">
            {timelinePhases.map((phase, i) => (
              <div key={phase.label} className="flex-1 flex items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: phase.color }}
                >
                  {i + 1}
                </div>
                {i < timelinePhases.length - 1 && (
                  <div className="flex-1 h-0.5 bg-sym-card-border mx-1" />
                )}
              </div>
            ))}
          </div>

          {/* Labels row */}
          <div className="flex">
            {timelinePhases.map((phase) => (
              <div key={phase.label} className="flex-1 pr-2">
                <p className="text-xs font-semibold text-sym-heading leading-tight">
                  {phase.label}
                </p>
                <p className="text-[11px] text-sym-label mt-0.5">{phase.months}</p>
                <p className="text-[11px] text-sym-muted leading-snug mt-0.5">
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="sm:hidden space-y-0">
        {timelinePhases.map((phase, i) => (
          <div key={phase.label} className="flex gap-3">
            {/* Vertical track */}
            <div className="flex flex-col items-center">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 shadow-sm"
                style={{ backgroundColor: phase.color }}
              >
                {i + 1}
              </div>
              {i < timelinePhases.length - 1 && (
                <div className="w-0.5 flex-1 bg-sym-card-border my-1" />
              )}
            </div>

            {/* Content */}
            <div className="pb-4 pt-0.5">
              <p className="text-sm font-semibold text-sym-heading leading-tight">
                {phase.label}
              </p>
              <p className="text-xs text-sym-label">{phase.months}</p>
              <p className="text-xs text-sym-muted leading-snug mt-0.5">
                {phase.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
