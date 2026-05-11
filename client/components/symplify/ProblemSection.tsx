import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage } from "./shared";

const signatureQuote = {
  text: "I spend 2 minutes per message just deciding if it's urgent.",
  cite: "Internal Medicine MD",
};

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

      <p className="text-lg text-sym-body leading-relaxed max-w-[720px] mb-6">
        Staff worked across EHR, Excel, and email with no shared triage model. The cost: missed handoffs, SLA breaches, and 60% of clinical time lost to context-switching.
      </p>

      {/* Journey Map — primary visual anchor */}
      <div className="mb-8">
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F614fdb78397f44679c448da5fd8ce315"
          alt="Current-state journey swim lane diagram showing how one urgent message flows across Doctor, Nurse, and Admin roles with 9 pain points identified"
          caption="Current-state journey — one urgent message, three roles, 9 pain points."
        />
      </div>

      {/* Signature pull quote */}
      <blockquote ref={quotesRef} className="reveal quote-border-grow bg-sym-card rounded-xl border border-sym-card-border p-5 sm:p-6 shadow-sm card-lift mb-8 max-w-[760px]">
        <p className="text-lg sm:text-xl text-sym-heading leading-snug italic mb-3">
          “{signatureQuote.text}”
        </p>
        <cite className="text-xs font-semibold text-sym-label not-italic uppercase tracking-wider">
          — {signatureQuote.cite}
        </cite>
      </blockquote>

      {/* Stats strip */}
      <div ref={statsRef} className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="reveal stat-pop bg-sym-bg-red border border-[#FECACA] rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 text-center card-lift max-w-[200px] grow flex flex-col justify-center items-center"
          >
            <p className="text-xl sm:text-2xl font-bold text-[#DC2626] mb-1">{s.value}</p>
            <p className="text-xs text-[#991B1B] leading-snug text-center">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Cost of the problem */}
      <div className="mt-8 bg-sym-bg-amber border border-[#FDE68A] rounded-xl px-5 py-3">
        <p className="text-sm font-semibold text-[#92400E] mb-1">
          Estimated Cost of the Problem
        </p>
        <p className="text-xs text-[#78350F] leading-relaxed">
          At 60% context-switching across 65 staff, fragmented workflows cost ~$830K/yr — before missed handoffs or SLA penalties.
        </p>
      </div>

      {/* Additional research artifacts */}
      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm font-semibold text-sym-blue hover:text-[#2563EB] transition-colors flex items-center gap-2 mb-4">
          <span className="transition-transform group-open:rotate-90">▶</span>
          More research artifacts (affinity map, workshop output)
        </summary>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ZoomableImage
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff67570c7a23f41f8ab09de08308901aa"
            alt="Affinity map from 18 contextual inquiry sessions showing 4 primary pain clusters"
            caption="Affinity mapping — 4 primary pain clusters emerged."
          />
          <ZoomableImage
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fc8f67c4b8960458ca62576f18dc2350c"
            alt="Journey mapping workshop output with clinical advisors"
            caption="Raw journey mapping workshop with clinical advisors."
          />
        </div>
      </details>
    </section>
  );
}
