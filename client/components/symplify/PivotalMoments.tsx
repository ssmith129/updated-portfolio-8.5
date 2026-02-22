import { Zap, RotateCcw, TrendingUp } from "lucide-react";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";

const moments = [
  {
    icon: <Zap className="w-5 h-5 text-[#F59E0B]" />,
    title: "The 67% Rejection",
    subtitle: "When automation backfired",
    narrative: `Three weeks into prototyping, we tested auto-assigned task routing with 12 clinicians. The result was brutal: 67% rejected automated assignments outright. One internal medicine doctor captured the sentiment perfectly — "It feels like the system is making clinical decisions without me."

We'd assumed that reducing manual task assignment would be universally welcome. Instead, we learned that clinical staff didn't want fewer decisions — they wanted faster, better-informed decisions. The distinction sounds subtle, but it fundamentally reframed our design approach.`,
    resolution: `We pivoted from automation to augmentation. Instead of auto-assigning, the system would suggest assignments with transparent reasoning and a 1-click override. This single pivot informed every subsequent design decision — from the confidence badge system (Decision 01) to the scheduling conflict modal (Decision 03).`,
    outcome:
      "Auto-booking rejection dropped from 67% to 11% after the pivot to suggestion-based design.",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
  },
  {
    icon: <RotateCcw className="w-5 h-5 text-[#8B5CF6]" />,
    title: "The HIPAA Constraint That Improved UX",
    subtitle: "When compliance became a feature",
    narrative: `Mid-project, our clinical advisors flagged a HIPAA requirement we'd underestimated: every AI-generated recommendation needed a full audit trail — not just logging, but human-readable justification visible to the clinician at the point of decision.

Initially, this felt like a burden. How do you show AI reasoning without overwhelming already-overloaded clinicians? We considered collapsible panels, separate audit logs, and tooltip-based explanations.`,
    resolution: `The breakthrough came from nurse feedback during our fourth round of testing. One RN supervisor said: "I don't need to see the reasoning every time — but I need to know I can." This led to the hover-to-reveal pattern in Decision 02: confidence badges are always visible, but the full reasoning only appears on demand. The compliance requirement actually produced better UX than our original design.`,
    outcome:
      "89% user trust score in post-pilot survey — the highest-rated feature of the entire platform.",
    bgColor: "#F5F3FF",
    borderColor: "#DDD6FE",
  },
];

export default function PivotalMoments() {
  const headingRef = useScrollReveal();

  return (
    <section
      id="pivots"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-2">
          Turning Points
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-4 max-w-[720px]">
          Pivotal Moments
        </h2>
      </div>
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[720px] mb-10">
        Two critical moments reshaped this project. In both cases, what
        initially felt like a setback became the catalyst for a better design.
      </p>

      <div className="space-y-8">
        {moments.map((m) => (
          <div
            key={m.title}
            className="rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{
              borderColor: m.borderColor,
              backgroundColor: m.bgColor,
            }}
          >
            <div className="px-6 pt-6 pb-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                {m.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {m.title}
                </h3>
                <p className="text-sm text-[#64748B] italic">{m.subtitle}</p>
              </div>
            </div>

            <div className="px-6 pb-4">
              <p className="text-[15px] text-[#334155] leading-relaxed whitespace-pre-line">
                {m.narrative.trim()}
              </p>
            </div>

            <div className="px-6 pb-4">
              <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
                The Pivot
              </p>
              <p className="text-[15px] text-[#334155] leading-relaxed whitespace-pre-line">
                {m.resolution.trim()}
              </p>
            </div>

            <div className="mx-6 mb-6 flex items-start gap-2 bg-white/60 rounded-xl px-5 py-3">
              <TrendingUp className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-[#166534]">{m.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
