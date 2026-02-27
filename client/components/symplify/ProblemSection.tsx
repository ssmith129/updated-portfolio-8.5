import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { SymTLDR, AssetPlaceholder, ZoomableImage } from "./shared";

const quotes = [
  {
    text: "I spend 2 minutes per message just deciding if it's urgent. That's 8 hours a month of cognitive overhead.",
    cite: "Internal Medicine MD",
  },
  {
    text: "At shift change, critical messages fall through the cracks. I've had to call the previous shift at home to verify handoffs.",
    cite: "RN Supervisor",
  },
  {
    text: "We can't predict demand until it's too late to staff appropriately.",
    cite: "Clinical Operations Manager",
  },
];

const stats = [
  { value: "18%", label: "of urgent handoffs missed at shift change" },
  { value: "9.8%", label: "appointment no-show rate" },
  { value: "14.2%", label: "SLA breach risk" },
  { value: "60%", label: "of staff time lost to context-switching" },
];

const journeyLanes = [
  {
    role: "Doctor",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    steps: [
      { label: "Open EHR", pain: false },
      { label: "Check email", pain: false },
      { label: "Cross-reference Excel log", pain: true },
      { label: "Decide urgency (2 min)", pain: true },
      { label: "Reply in email", pain: false },
      { label: "Log in Excel manually", pain: true },
    ],
  },
  {
    role: "Nurse",
    color: "#10B981",
    bgColor: "#F0FDF4",
    steps: [
      { label: "Check paper log", pain: true },
      { label: "Open separate inbox", pain: false },
      { label: "No visibility into doctor queue", pain: true },
      { label: "Call doctor to verify", pain: true },
      { label: "Update paper log", pain: true },
    ],
  },
  {
    role: "Admin",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    steps: [
      { label: "Export data manually", pain: true },
      { label: "Build monthly report", pain: false },
      { label: "Chase missing entries", pain: true },
      { label: "Forecast = guesswork", pain: true },
    ],
  },
];

export default function ProblemSection() {
  const headingRef = useScrollReveal();
  const quotesRef = useStaggerReveal();
  const statsRef = useStaggerReveal();

  return (
    <section
      id="problem"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-red uppercase tracking-widest mb-2">
          The Problem
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6 max-w-[720px]">
          Three Systems, Zero Shared Prioritization
        </h2>
      </div>

      <SymTLDR>
        Staff operated across 3 disconnected systems with no shared triage model.
        18% of urgent handoffs were missed at shift change. Doctors spent 2 minutes
        per message just deciding if it was urgent — 8 hours of cognitive overhead per month.
      </SymTLDR>

      <p className="text-lg text-sym-body leading-relaxed max-w-[720px] mb-10">
        Hospital and WIC clinic staff were operating across three disconnected
        systems — EHR, Excel, and email — with no shared prioritization model.
        The consequences were measurable and severe.
      </p>

      {/* Research Artifact Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff67570c7a23f41f8ab09de08308901aa"
          alt="Affinity map from 18 contextual inquiry sessions showing 4 primary pain clusters: Triage Overhead, Handoff Failures, Compliance Blindness, and Tool Fragmentation"
          caption="Affinity mapping from 18 contextual inquiry sessions — 4 primary pain clusters emerged."
        />
        <AssetPlaceholder
          id="journey-map-whiteboard.jpg"
          caption="Raw journey mapping workshop with clinical advisors. The swim lane visualization was refined from this working session."
        />
      </div>

      {/* Journey Map — Swim Lanes */}
      <div className="bg-sym-card rounded-2xl border border-sym-card-border p-6 sm:p-8 mb-12 overflow-x-auto shadow-sm">
        <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-6">
          Current-State Journey — One Urgent Message
        </p>
        <div className="min-w-[640px] space-y-4">
          {journeyLanes.map((lane) => (
            <JourneyLane key={lane.role} {...lane} />
          ))}
        </div>
      </div>

      {/* Quotes */}
      <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {quotes.map((q) => (
          <blockquote
            key={q.cite}
            className="reveal bg-sym-card rounded-2xl border border-sym-card-border p-6 shadow-sm flex flex-col justify-between card-lift"
          >
            <p className="text-[15px] text-sym-body leading-relaxed italic mb-4">
              "{q.text}"
            </p>
            <cite className="text-xs font-semibold text-sym-label not-italic uppercase tracking-wider">
              — {q.cite}
            </cite>
          </blockquote>
        ))}
      </div>

      {/* Stats strip */}
      <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="reveal bg-sym-bg-red border border-[#FECACA] rounded-xl px-5 py-4 text-center card-lift"
          >
            <p className="text-2xl font-bold text-[#DC2626] mb-1">{s.value}</p>
            <p className="text-xs text-[#991B1B] leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function JourneyLane({
  role,
  color,
  bgColor,
  steps,
}: {
  role: string;
  color: string;
  bgColor: string;
  steps: { label: string; pain: boolean }[];
}) {
  return (
    <div className="flex items-stretch gap-0 lane-hover rounded-lg">
      <div
        className="w-20 sm:w-24 flex-shrink-0 rounded-l-lg flex items-center justify-center px-2"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>
          {role}
        </span>
      </div>
      <div className="flex-1 flex items-center gap-1 py-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-1 flex-1 min-w-0">
            <div
              className={`flex-1 rounded-md px-2 py-2 text-center text-[11px] leading-tight font-medium border ${
                step.pain
                  ? "bg-sym-bg-red border-[#FECACA] text-[#991B1B]"
                  : "border-sym-card-border text-sym-body"
              }`}
              style={!step.pain ? { backgroundColor: bgColor } : undefined}
            >
              {step.label}
            </div>
            {i < steps.length - 1 && (
              <span className="text-sym-card-border-hover text-xs flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
