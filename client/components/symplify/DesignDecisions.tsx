import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage, SymTLDR } from "./shared";

export default function DesignDecisions() {
  const headingRef = useScrollReveal();

  return (
    <section
      id="decisions"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
          Core Design Work
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 heading-underline">
          Design Decisions
        </h2>
      </div>

      <SymTLDR>
        Four core design decisions shaped the platform: a 3-tier AI confidence
        system (89% acceptance vs. 33% for percentages), auditable plain-language
        AI reasoning, suggestion-based scheduling with override escape hatches,
        and risk-tiered alert batching that cut alert fatigue 38%.
      </SymTLDR>

      <div className="space-y-14">
        <Decision1 />
        <Decision2 />
        <Decision3 />
        <Decision4 />
      </div>
    </section>
  );
}

/* ─── Decision 1: AI Confidence Display ─── */
function Decision1() {
  const approaches = [
    {
      label: "A. Percentage scores",
      desc: '"73% confident this is urgent"',
      acceptance: "33%",
      note: "Feels like fake precision",
      winner: false,
    },
    {
      label: "B. Gradient bars",
      desc: "Visual slider from low to high",
      acceptance: "52%",
      note: "Better but caused scanning friction",
      winner: false,
    },
    {
      label: "C. 3-tier badges",
      desc: "High / Medium / Low + hover reasoning",
      acceptance: "89%",
      note: "Feels like a smart assistant, not a boss",
      winner: true,
    },
  ];

  return (
    <div>
      <DecisionHeader number="01" title="AI Confidence Display" />
      <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
        <span className="font-semibold text-sym-heading">Challenge:</span> Show AI confidence without false precision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {approaches.map((a) => (
          <div
            key={a.label}
            className={`rounded-xl border-2 p-5 transition-shadow duration-300 ${
              a.winner
                ? "border-sym-green bg-sym-bg-green shadow-md"
                : "border-sym-card-border bg-sym-card"
            }`}
          >
            <p className="text-sm font-semibold text-sym-heading mb-1">{a.label}</p>
            <p className="text-xs text-sym-muted mb-3">{a.desc}</p>
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-bold ${a.winner ? "text-sym-green" : "text-sym-label"}`}>
                {a.acceptance}
              </span>
              {a.winner && (
                <span className="text-xs font-semibold text-sym-green winner-pulse px-2 py-1 rounded-full">
                  Winner
                </span>
              )}
            </div>
            <p className="text-xs text-sym-muted italic mt-2">"{a.note}"</p>
          </div>
        ))}
      </div>

      <ZoomableImage
        src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Faccc81d916a04618a4a35f6f315ca73f"
        alt="AI Confidence Badges priority classification showing High, Med, and Low tiers across three roles with hover-to-reveal reasoning, confidence scores, and accept/override actions"
        caption='Production confidence badges with hover-to-reveal reasoning. The "smart assistant" framing drove 89% acceptance.'
      />

      <ResultCallout text="3-tier badges dropped AI override rate from 18% to 11% while maintaining HIPAA compliance." />
    </div>
  );
}

/* ─── Decision 2: Auditable AI Reasoning ─── */
function Decision2() {
  const steps = [
    { title: "Confidence badges, not percentages", detail: "Clinicians aren't statisticians" },
    { title: "Plain-language reasoning", detail: '"Symptom severity: High-risk keywords detected · Patient history: 2 prior cardiac events · SLA requires <15min response"' },
    { title: "1-click override", detail: "Lower friction than explaining disagreement" },
    { title: "Override → retraining loop", detail: "System learns from clinical judgment" },
  ];

  return (
    <div>
      <DecisionHeader number="02" title="Auditable AI Reasoning" />
      <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
        <span className="font-semibold text-sym-heading">Challenge:</span> HIPAA required audit trails, but "explainable AI" is usually too technical or too vague.
      </p>

      <ZoomableImage
        src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff71f584e4cc942468f434f0114848bd3"
        alt="AI reasoning panel expanded showing symptom severity, patient context, SLA requirement, source context, and time urgency with escalate/acknowledge actions and HIPAA-compliant audit trail"
        caption="The AI reasoning panel at the point of decision. Clinicians see 'why' on demand — satisfying both HIPAA audit requirements and clinical trust needs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-start gap-3 bg-sym-card rounded-xl border border-sym-card-border p-5">
            <span className="w-7 h-7 rounded-full bg-sym-bg-blue text-sym-blue flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-sym-heading mb-1">{s.title}</p>
              <p className="text-xs text-sym-muted leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <ResultCallout text="Override rate stayed below the 15% guardrail throughout the pilot." />
    </div>
  );
}

/* ─── Decision 3: Smart Scheduling ─── */
function Decision3() {
  return (
    <div>
      <DecisionHeader number="03" title="Smart Scheduling with Progressive Disclosure" />
      <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
        <span className="font-semibold text-sym-heading">Challenge:</span>{" "}
        Auto-booking was rejected. Scheduling needed to prevent conflicts while preserving clinician autonomy — suggest better options with context, always allow override.
      </p>

      <ZoomableImage
        src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7a39ef4ac260457a82bda1aff8bf1081"
        alt="Smart scheduling with progressive disclosure — New Appointment form with AI Scheduling Assistant showing provider insights, suggested time slots with fit scores, and Apply to Form action"
        caption="Production conflict detection modal. Context-rich suggestions (room, time, accessibility) reduced scheduling conflicts and contributed to the 2.4-point no-show reduction."
      />

      <ResultCallout text="Scheduling conflicts — the #2 cause of no-shows — were significantly reduced." />
    </div>
  );
}

/* ─── Decision 4: Alert Fatigue ─── */
function Decision4() {
  return (
    <div>
      <DecisionHeader number="04" title="Solving Alert Fatigue" />

      {/* Before / After comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-xs font-semibold text-sym-red uppercase tracking-widest mb-3">Before</p>
          <ZoomableImage
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fd447a9949f71436c9f48a84ce6c5cb22"
            alt="Before: flat notification list showing all alerts with equal weight — no priority differentiation, accept/decline actions inline, and no batching or digest options"
            caption="Flat notification list with no priority differentiation — every alert demands equal attention."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 mt-3">
            {[
              'All alerts marked "!" with no priority differentiation',
              "47+ daily interruptions per clinician",
              "Critical SLA deadlines buried in noise",
              "No batch/digest option — every alert demanded individual attention",
            ].map((point) => (
              <p key={point} className="text-xs text-sym-red flex items-start gap-2">
                <span className="mt-0.5">✕</span>
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-sym-green uppercase tracking-widest mb-3">After</p>
          <ZoomableImage
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F094b0614454a44ee8a5f1d3924e10fe4"
            alt="After: risk-tiered Clinical Emergency alert system with AI reasoning, confidence scores, escalate/acknowledge actions, and HIPAA-compliant audit trail"
            caption="Risk-tiered alert system with AI reasoning, confidence badges, and escalate/acknowledge actions — daily interruptions dropped from 47 to 12."
          />
        </div>
      </div>

      <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
        <span className="font-semibold text-sym-heading">How:</span> Clinical risk score + SLA deadline determines tier. Similar alerts batch into digests. FYI items collapse to acknowledge without demanding attention.
      </p>

      <ResultCallout text="Daily interruptions per clinician dropped from 47 to 12." />
    </div>
  );
}

/* ─── Shared sub-components ─── */
function DecisionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-sym-blue to-sym-green text-white flex items-center justify-center text-sm font-bold flex-shrink-0 timeline-node">
        {number}
      </span>
      <h3 className="text-xl sm:text-2xl font-semibold text-sym-heading">{title}</h3>
    </div>
  );
}

function ResultCallout({ text }: { text: string }) {
  return (
    <div className="flex items-start justify-start gap-3 bg-sym-bg-green border border-[#BBF7D0] rounded-xl px-5 py-3">
      <CheckCircle className="w-5 h-5 text-sym-green flex-shrink-0" />
      <p className="text-sm font-medium text-[#166534] leading-relaxed">{text}</p>
    </div>
  );
}
