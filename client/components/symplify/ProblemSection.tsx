import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage, SymTLDR } from "./shared";

const quotes = [
  {
    text: "I spend 2 minutes per message just deciding if it's urgent.",
    cite: "Internal Medicine MD",
  },
  {
    text: "At shift change, critical messages fall through the cracks.",
    cite: "RN Supervisor",
  },
  {
    text: "We can't predict demand until it's too late to staff appropriately.",
    cite: "Clinical Operations Manager",
  },
];

const stats = [
  { value: "18%", label: "of urgent handoffs missed at shift change" },
  { value: "14.2%", label: "SLA breach risk" },
  { value: "60%", label: "of staff time lost to context-switching" },
];


export default function ProblemSection() {
  const headingRef = useScrollReveal();
  const quotesRef = useStaggerReveal();
  const statsRef = useStaggerReveal();

  return (
    <section
      id="problem"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-red uppercase tracking-widest mb-2">
          The Problem
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 max-w-[720px] heading-underline">
          Three Systems, Zero Shared Prioritization
        </h2>
      </div>

      <SymTLDR>
        Staff operated across 3 disconnected systems with no shared triage model.
        18% of urgent handoffs were missed at shift change. Doctors spent 2 minutes
        per message just deciding if it was urgent — 8 hours of cognitive overhead per month.
      </SymTLDR>

      <p className="text-lg text-sym-body leading-relaxed max-w-[720px] mb-6">
        Staff operated across three disconnected systems — EHR, Excel, and email — with no shared prioritization model.
      </p>

      {/* Research Artifact Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff67570c7a23f41f8ab09de08308901aa"
          alt="Affinity map from 18 contextual inquiry sessions showing 4 primary pain clusters: Triage Overhead, Handoff Failures, Compliance Blindness, and Tool Fragmentation"
          caption="Affinity mapping from 18 contextual inquiry sessions — 4 primary pain clusters emerged."
        />
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fc8f67c4b8960458ca62576f18dc2350c"
          alt="Journey mapping workshop output showing current-state swim lanes for Doctor, Nurse, and Admin roles processing one urgent message, with pain points highlighted in red"
          caption="Raw journey mapping workshop with clinical advisors. The swim lane visualization was refined from this working session."
        />
      </div>

      {/* Journey Map */}
      <div className="mb-8">
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F614fdb78397f44679c448da5fd8ce315"
          alt="Current-state journey swim lane diagram showing how one urgent message flows across Doctor, Nurse, and Admin roles with 9 pain points identified"
          caption="Current-state journey — one urgent message across three roles. 9 pain points identified across fragmented systems."
        />
      </div>

      {/* Quotes */}
      <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {quotes.map((q) => (
          <blockquote
            key={q.cite}
            className="reveal quote-border-grow bg-sym-card rounded-xl border border-sym-card-border p-4 sm:p-5 shadow-sm flex flex-col justify-between card-lift"
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
      <div ref={statsRef} className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="reveal stat-pop bg-sym-bg-red border border-[#FECACA] rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center card-lift max-w-[200px] grow flex flex-col justify-center items-center"
          >
            <p className="text-xl sm:text-2xl font-bold text-[#DC2626] mb-1">{s.value}</p>
            <p className="text-xs text-[#991B1B] leading-snug text-center">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Cost of the problem estimate */}
      <div className="mt-8 bg-sym-bg-amber border border-[#FDE68A] rounded-xl px-5 py-3">
        <p className="text-sm font-semibold text-[#92400E] mb-1">
          Estimated Cost of the Problem
        </p>
        <p className="text-xs text-[#78350F] leading-relaxed">
          At 60% context-switching overhead across 65 clinical staff averaging $41/hr,
          fragmented workflows cost an estimated $830K+ annually in lost
          productivity — before accounting for missed handoffs, SLA penalties,
          and patient impact.
        </p>
      </div>
    </section>
  );
}
