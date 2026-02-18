import PlaceholderVisual from "./PlaceholderVisual";

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

export default function ProblemSection() {
  return (
    <section id="problem" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10">
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

      {/* Journey Map Placeholder */}
      <PlaceholderVisual
        label="Journey Map"
        description="Three swim lanes — Doctor (EHR → Email → Excel), Nurse (Paper logs → Separate inbox → No visibility), Admin (Manual exports → Monthly forecasts → Fire-drills)"
        aspectRatio="aspect-[2.5/1]"
        className="mb-12"
      />

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
