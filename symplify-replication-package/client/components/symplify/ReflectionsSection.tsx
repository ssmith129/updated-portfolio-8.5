import { CheckCircle, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";

const wins = [
  "Trust through transparency — the 11% override rate proved users felt safe disagreeing with AI.",
  "Modular rollout (triage → scheduling → compliance) built credibility incrementally.",
  'Role-based "front doors" into shared data resolved conflicting user needs.',
];

const misses = [
  "Early prototypes over-automated (67% rejection of auto-assigned tasks).",
  "Mobile alert density remained too high for on-call nurses.",
  "15% of admins still exported to Excel — a change management gap we underestimated.",
];

const pilotQuotes = [
  {
    text: "For the first time, I don't have to cross-reference three systems to decide what's urgent. The AI gets it right about 9 times out of 10.",
    cite: "Internal Medicine MD",
    role: "Doctor",
    color: "#3B82F6",
  },
  {
    text: "The shift handoff used to take me 20 minutes of phone calls. Now I can see exactly where things stand when I walk in.",
    cite: "RN Supervisor",
    role: "Nurse",
    color: "#10B981",
  },
  {
    text: "I still export to Excel for my monthly board reports — old habits — but I've stopped building them from scratch. The compliance dashboard gets me 80% there.",
    cite: "Clinical Operations Manager",
    role: "Admin",
    color: "#F59E0B",
  },
];

const reflections = [
  {
    title: "Trust is a design constraint, not a feature.",
    body: 'Every "explainability" pattern was really a trust pattern. Designing for AI adoption means designing for skepticism first.',
  },
  {
    title: "Compliance shapes interaction design.",
    body: "HIPAA and audit requirements forced 1-click overrides and plain-language reasoning — constraints that made the design better, not worse.",
  },
  {
    title: "Show uncertainty honestly.",
    body: "These are promising early results (n=65, 6 weeks), not proof at scale. Presenting metrics with humility builds more credibility than overselling.",
  },
  {
    title: "Collaboration > solo heroics.",
    body: "I led design direction, but the best ideas came from synthesis across 2 engineers, 1 PM, 4 clinical advisors, and 65 pilot users.",
  },
];

const nextSteps = [
  {
    title: "Predictive Staffing Models",
    detail: "Forecast demand spikes to cut overtime 15-20%",
  },
  {
    title: "Broader EHR Integration",
    detail: "HL7 FHIR connectors for Epic, Cerner, Allscripts",
  },
  {
    title: "Patient Sentiment Analysis",
    detail: "Real-time NLP to detect distress signals early",
  },
  {
    title: "Mobile-First Redesign",
    detail: "Dedicated mobile interaction patterns beyond responsive",
  },
];

export default function ReflectionsSection() {
  const outcomesRef = useScrollReveal();
  const quotesRef = useStaggerReveal();
  const reflectionRef = useScrollReveal();
  const nextRef = useStaggerReveal();

  return (
    <>
      {/* What Worked & What Didn't */}
      <section
        id="outcomes"
        className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
      >
        <div ref={outcomesRef} className="reveal">
          <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-2">
            Honest Assessment
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-10">
            What Worked & What Didn't
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wins */}
          <div className="bg-[#F0FDF4] rounded-2xl border border-[#BBF7D0] p-6">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <p className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
                Wins
              </p>
            </div>
            <ul className="space-y-4">
              {wins.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0 mt-2" />
                  <p className="text-sm text-[#14532D] leading-relaxed">{w}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Misses */}
          <div className="bg-[#FFFBEB] rounded-2xl border border-[#FDE68A] p-6">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              <p className="text-sm font-semibold text-[#92400E] uppercase tracking-widest">
                Misses
              </p>
            </div>
            <ul className="space-y-4">
              {misses.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2" />
                  <p className="text-sm text-[#78350F] leading-relaxed">{m}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Post-Pilot Feedback */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-12 relative z-10">
        <p className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-6">
          In Their Words — Post-Pilot Feedback
        </p>
        <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pilotQuotes.map((q) => (
            <blockquote
              key={q.cite}
              className="reveal bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between card-lift"
            >
              <div>
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-3"
                  style={{ backgroundColor: q.color }}
                >
                  {q.role}
                </span>
                <p className="text-[15px] text-[#334155] leading-relaxed italic mb-4">
                  "{q.text}"
                </p>
              </div>
              <cite className="text-xs font-semibold text-[#94A3B8] not-italic uppercase tracking-wider">
                — {q.cite}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section
        id="reflection"
        className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
      >
        <div ref={reflectionRef} className="reveal">
          <p className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-2">
            Takeaways
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-10">
            Reflection
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {reflections.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm card-lift hover:border-[#CBD5E1]"
            >
              <div className="flex items-start gap-3 mb-3">
                <Lightbulb className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                <h3 className="text-[15px] font-semibold text-[#0F172A] leading-snug">
                  {r.title}
                </h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed pl-8">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <blockquote className="bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] rounded-2xl border border-[#DBEAFE] p-8 text-center">
          <p className="text-lg sm:text-xl text-[#334155] italic leading-relaxed max-w-[680px] mx-auto">
            "Build systems that explain themselves. An 11% override rate with
            full transparency beats a 5% override rate with no explanation."
          </p>
        </blockquote>
      </section>

      {/* Next Steps */}
      <section
        id="next-steps"
        className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
      >
        <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
          Looking Ahead
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-10">
          Next Steps
        </h2>

        <div ref={nextRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nextSteps.map((ns, i) => (
            <div
              key={ns.title}
              className="reveal bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-sm card-lift group"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#3B82F6] text-sm font-bold mb-3">
                {i + 1}
              </span>
              <h3 className="text-sm font-semibold text-[#0F172A] mb-1 group-hover:text-[#3B82F6] transition-colors duration-200">
                {ns.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {ns.detail}
              </p>
              <ArrowRight className="w-4 h-4 text-[#CBD5E1] mt-3 group-hover:text-[#3B82F6] transition-colors duration-200" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
