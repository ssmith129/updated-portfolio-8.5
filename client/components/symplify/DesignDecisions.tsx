import { CheckCircle } from "lucide-react";
import PlaceholderVisual from "./PlaceholderVisual";

export default function DesignDecisions() {
  return (
    <section id="decisions" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10">
      <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
        Core Design Work
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-14">
        Design Decisions
      </h2>

      <div className="space-y-20">
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
    { label: "A. Percentage scores", desc: '"73% confident this is urgent"', acceptance: "33%", note: "Feels like fake precision", winner: false },
    { label: "B. Gradient bars", desc: "Visual slider from low to high", acceptance: "52%", note: "Better but caused scanning friction", winner: false },
    { label: "C. 3-tier badges", desc: "High / Medium / Low + hover reasoning", acceptance: "89%", note: "Feels like a smart assistant, not a boss", winner: true },
  ];

  return (
    <div>
      <DecisionHeader number="01" title="AI Confidence Display" />
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
        <span className="font-semibold text-[#334155]">Challenge:</span> Show AI
        confidence without overwhelming clinicians or creating false precision.
      </p>

      <PlaceholderVisual
        label="A/B/C Comparison"
        description="Percentage scores vs. gradient bars vs. 3-tier badges — tested with clinical staff"
        aspectRatio="aspect-[2.5/1]"
        className="mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {approaches.map((a) => (
          <div
            key={a.label}
            className={`rounded-xl border-2 p-5 transition-shadow duration-300 ${
              a.winner
                ? "border-[#10B981] bg-[#F0FDF4] shadow-md"
                : "border-[#E2E8F0] bg-white"
            }`}
          >
            <p className="text-sm font-semibold text-[#0F172A] mb-1">{a.label}</p>
            <p className="text-xs text-[#64748B] mb-3">{a.desc}</p>
            <div className="flex items-center justify-between">
              <span
                className={`text-2xl font-bold ${
                  a.winner ? "text-[#10B981]" : "text-[#94A3B8]"
                }`}
              >
                {a.acceptance}
              </span>
              {a.winner && (
                <span className="text-xs font-semibold text-[#10B981] bg-[#DCFCE7] px-2 py-1 rounded-full">
                  Winner
                </span>
              )}
            </div>
            <p className="text-xs text-[#64748B] italic mt-2">"{a.note}"</p>
          </div>
        ))}
      </div>

      <ResultCallout text="Switching from percentages to badges dropped the AI override rate from 18% to 11%." />
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
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
        <span className="font-semibold text-[#334155]">Challenge:</span> HIPAA
        required full audit trails, but "explainable AI" is usually either too
        technical or too vague.
      </p>

      <PlaceholderVisual
        label="Inbox Item with AI Reasoning"
        description="Confidence badge, plain-language reasoning on hover, and 1-click override/accept actions"
        aspectRatio="aspect-[2.2/1]"
        className="mb-8"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-start gap-3 bg-white rounded-xl border border-[#E2E8F0] p-5">
            <span className="w-7 h-7 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-1">{s.title}</p>
              <p className="text-xs text-[#64748B] leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <ResultCallout text="11% override rate (below 15% guardrail) · 89% user trust in post-pilot survey." />
    </div>
  );
}

/* ─── Decision 3: Smart Scheduling ─── */
function Decision3() {
  return (
    <div>
      <DecisionHeader number="03" title="Smart Scheduling with Progressive Disclosure" />
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-4">
        <span className="font-semibold text-[#334155]">Challenge:</span>{" "}
        Auto-booking was rejected — "It feels like the system is making clinical
        decisions without me." Scheduling needed to prevent conflicts while
        preserving autonomy.
      </p>
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
        <span className="font-semibold text-[#334155]">Design rationale:</span>{" "}
        Error prevention over error correction. Don't just say "no" — offer a
        better option with context (room availability, patient preference,
        provider schedule). Always include an override escape hatch, logged for
        audit.
      </p>

      <PlaceholderVisual
        label="Conflict Detection Modal"
        description="Shows what's wrong, suggests alternative with reasoning, offers override escape hatch"
        aspectRatio="aspect-[2/1]"
        className="mb-8"
      />

      <ResultCallout text="No-show rate dropped 2.4 points. Scheduling conflicts were the #2 cause of no-shows." />
    </div>
  );
}

/* ─── Decision 4: Alert Fatigue ─── */
function Decision4() {
  return (
    <div>
      <DecisionHeader number="04" title="Solving Alert Fatigue" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#FEF2F2] rounded-xl border border-[#FECACA] p-5">
          <p className="text-xs font-semibold text-[#991B1B] uppercase tracking-widest mb-3">Before</p>
          <p className="text-sm text-[#7F1D1D] leading-relaxed">
            Flat list of 47 alerts, all marked "!", chronological only. No
            differentiation between critical actions and informational items.
          </p>
        </div>
        <div className="bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] p-5">
          <p className="text-xs font-semibold text-[#166534] uppercase tracking-widest mb-3">After</p>
          <p className="text-sm text-[#14532D] leading-relaxed">
            Risk-based tiers with collapsible sections and smart batching.
            Critical action / Review needed / FYI with collapse.
          </p>
        </div>
      </div>

      <PlaceholderVisual
        label="Before → After Alert Redesign"
        description="Flat alert list transformed into tiered: Critical action / Review needed / FYI with collapse"
        aspectRatio="aspect-[2.2/1]"
        className="mb-8"
      />

      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
        <span className="font-semibold text-[#334155]">How:</span> Clinical risk
        score + SLA deadline determines tier. Similar alerts batch into digests
        ("12 items due today" vs. 12 interruptions). FYI section collapses to
        acknowledge without demanding attention.
      </p>

      <ResultCallout text="Alert fatigue reduced 38% · On-time follow-ups increased 18%." />
    </div>
  );
}

/* ─── Shared sub-components ─── */

function DecisionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#10B981] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
        {number}
      </span>
      <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">{title}</h3>
    </div>
  );
}

function ResultCallout({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-5 py-4">
      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
      <p className="text-sm font-medium text-[#166534] leading-relaxed">{text}</p>
    </div>
  );
}
