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
  return (
    <section
      id="problem"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <p className="text-xs font-semibold text-[#EF4444] uppercase tracking-widest mb-2">
        The Problem
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-4 max-w-[720px]">
        Three Systems, Zero Shared Prioritization
      </h2>
      <p className="text-lg text-[#475569] leading-relaxed max-w-[720px] mb-10">
        Hospital and WIC clinic staff were operating across three disconnected
        systems — EHR, Excel, and email — with no shared prioritization model.
        The consequences were measurable and severe.
      </p>

      {/* Journey Map — Swim Lanes */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 mb-12 overflow-x-auto shadow-sm">
        <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-6">
          Current-State Journey — One Urgent Message
        </p>
        <div className="min-w-[640px] space-y-4">
          {journeyLanes.map((lane) => (
            <JourneyLane key={lane.role} {...lane} />
          ))}
        </div>
      </div>

      {/* Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {quotes.map((q) => (
          <blockquote
            key={q.cite}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between"
          >
            <p className="text-[15px] text-[#334155] leading-relaxed italic mb-4">
              "{q.text}"
            </p>
            <cite className="text-xs font-semibold text-[#94A3B8] not-italic uppercase tracking-wider">
              — {q.cite}
            </cite>
          </blockquote>
        ))}
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-5 py-4 text-center"
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
    <div className="flex items-stretch gap-0">
      <div
        className="w-20 sm:w-24 flex-shrink-0 rounded-l-lg flex items-center justify-center px-2"
        style={{ backgroundColor: bgColor }}
      >
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color }}
        >
          {role}
        </span>
      </div>
      <div className="flex-1 flex items-center gap-1 py-2">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex items-center gap-1 flex-1 min-w-0"
          >
            <div
              className={`flex-1 rounded-md px-2 py-2 text-center text-[11px] leading-tight font-medium border ${
                step.pain
                  ? "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]"
                  : "border-[#E2E8F0] text-[#475569]"
              }`}
              style={!step.pain ? { backgroundColor: bgColor } : undefined}
            >
              {step.label}
            </div>
            {i < steps.length - 1 && (
              <span className="text-[#CBD5E1] text-xs flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
