import { CheckCircle, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { SymTLDR } from "./shared";

const wins = [
  "Trust through transparency — users felt safe disagreeing with AI recommendations.",
  "Modular rollout (triage → scheduling → compliance) built credibility incrementally.",
  'Role-based "front doors" into shared data resolved conflicting user needs.',
];

const misses = [
  "Early prototypes over-automated — initial rejection forced a full augmentation pivot.",
  "Mobile alert density remained too high for on-call nurses.",
  "Some admins still exported to Excel — a change management gap we underestimated.",
];


const reflections = [
  {
    title: "Trust is a design constraint, not a feature.",
    body: 'Designing for AI adoption means designing for skepticism first.',
  },
  {
    title: "Compliance shapes interaction design.",
    body: "HIPAA constraints forced 1-click overrides and plain-language reasoning — making the design better, not worse.",
  },
  {
    title: "Show uncertainty honestly.",
    body: "Promising early results, not proof at scale. Humility builds more credibility than overselling.",
  },
  {
    title: "Collaboration > solo heroics.",
    body: "I led design direction, but the best ideas came from cross-functional synthesis.",
  },
];

const nextSteps = [
  { title: "Predictive Staffing Models", detail: "Forecast demand spikes to cut overtime 15-20%" },
  { title: "Broader EHR Integration", detail: "HL7 FHIR connectors for Epic, Cerner, Allscripts" },
  { title: "Patient Sentiment Analysis", detail: "Real-time NLP to detect distress signals early" },
  { title: "Mobile-First Redesign", detail: "Dedicated mobile interaction patterns beyond responsive" },
];


export default function ReflectionsSection() {
  const outcomesRef = useScrollReveal();
  const quotesRef = useStaggerReveal();
  const reflectionRef = useScrollReveal();
  const nextRef = useStaggerReveal();

  return (
    <>
      {/* What Worked & What Didn't */}
      <section id="outcomes" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10">
        <div ref={outcomesRef} className="reveal">
          <p className="text-xs font-semibold text-sym-muted uppercase tracking-widest mb-2">
            Honest Assessment
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 heading-underline">
            What Worked &amp; What Didn't
          </h2>
        </div>

        <SymTLDR>
          Trust through transparency worked — 11% override rate proved users felt safe
          disagreeing with AI. Modular rollout built credibility incrementally. But early
          prototypes over-automated (67% rejection), mobile alert density remained too
          high, and 15% of admins still exported to Excel.
        </SymTLDR>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Wins */}
          <div className="bg-sym-bg-green rounded-xl border border-[#BBF7D0] p-4">
            <div className="flex items-start gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-sym-green" />
              <p className="text-sm font-semibold text-[#166534] uppercase tracking-widest">Wins</p>
            </div>
            <ul className="space-y-1">
              {wins.map((w) => (
                <li key={w} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sym-green flex-shrink-0 mt-2" />
                  <p className="text-sm text-[#14532D] leading-relaxed">{w}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Misses */}
          <div className="bg-sym-bg-amber rounded-xl border border-[#FDE68A] p-4">
            <div className="flex items-start gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-sym-amber" />
              <p className="text-sm font-semibold text-[#92400E] uppercase tracking-widest">Misses</p>
            </div>
            <ul className="space-y-1">
              {misses.map((m) => (
                <li key={m} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sym-amber flex-shrink-0 mt-2" />
                  <p className="text-sm text-[#78350F] leading-relaxed">{m}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section id="reflection" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10">
        <div ref={reflectionRef} className="reveal">
          <p className="text-xs font-semibold text-sym-purple uppercase tracking-widest mb-2">
            Takeaways
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6">
            Reflection
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {reflections.map((r) => (
            <div
              key={r.title}
              className="bg-sym-card rounded-xl border border-sym-card-border px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-sm card-lift hover:border-sym-card-border-hover"
            >
              <div className="flex items-start gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-sym-purple flex-shrink-0 mt-0.5" />
                <h3 className="text-[15px] font-semibold text-sym-heading leading-snug">{r.title}</h3>
              </div>
              <p className="text-sm text-sym-body leading-relaxed pl-8">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10">
        <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
          Looking Ahead
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6">
          Next Steps
        </h2>
        <div ref={nextRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nextSteps.map((ns, i) => (
            <div
              key={ns.title}
              className="reveal bg-sym-card rounded-xl border border-sym-card-border p-3.5 shadow-sm card-lift group"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-sym-bg-blue text-sym-blue text-sm font-bold mb-3">
                {i + 1}
              </span>
              <h3 className="text-sm font-semibold text-sym-heading mb-1 group-hover:text-sym-blue transition-colors duration-200">
                {ns.title}
              </h3>
              <p className="text-xs text-sym-muted leading-relaxed">{ns.detail}</p>
              <ArrowRight className="w-4 h-4 text-sym-card-border-hover mt-3 group-hover:text-sym-blue transition-colors duration-200" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
