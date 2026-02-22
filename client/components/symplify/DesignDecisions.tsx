import { CheckCircle } from "lucide-react";

export default function DesignDecisions() {
  return (
    <section
      id="decisions"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
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
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
        <span className="font-semibold text-[#334155]">Challenge:</span> Show AI
        confidence without overwhelming clinicians or creating false precision.
      </p>

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
            <p className="text-sm font-semibold text-[#0F172A] mb-1">
              {a.label}
            </p>
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
    {
      title: "Confidence badges, not percentages",
      detail: "Clinicians aren't statisticians",
    },
    {
      title: "Plain-language reasoning",
      detail:
        '"Symptom severity: High-risk keywords detected · Patient history: 2 prior cardiac events · SLA requires <15min response"',
    },
    {
      title: "1-click override",
      detail: "Lower friction than explaining disagreement",
    },
    {
      title: "Override → retraining loop",
      detail: "System learns from clinical judgment",
    },
  ];

  return (
    <div>
      <DecisionHeader number="02" title="Auditable AI Reasoning" />
      <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
        <span className="font-semibold text-[#334155]">Challenge:</span> HIPAA
        required full audit trails, but "explainable AI" is usually either too
        technical or too vague.
      </p>

      {/* AI Reasoning Inbox Card Mockup */}
      <InboxCardMockup />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex items-start gap-3 bg-white rounded-xl border border-[#E2E8F0] p-5"
          >
            <span className="w-7 h-7 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-1">
                {s.title}
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {s.detail}
              </p>
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
      <DecisionHeader
        number="03"
        title="Smart Scheduling with Progressive Disclosure"
      />
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

      {/* Conflict Detection Modal Mockup */}
      <ConflictModalMockup />

      <ResultCallout text="No-show rate dropped 2.4 points. Scheduling conflicts were the #2 cause of no-shows." />
    </div>
  );
}

/* ─── Decision 4: Alert Fatigue ─── */
function Decision4() {
  return (
    <div>
      <DecisionHeader number="04" title="Solving Alert Fatigue" />

      {/* Before/After Alert Visual */}
      <AlertBeforeAfter />

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

/* ─── Coded Visual: Inbox Card ─── */
function InboxCardMockup() {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 mb-8 shadow-sm">
      <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
        Inbox Item — Expanded AI Reasoning
      </p>
      <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5">
        <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-bold uppercase">
              High
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0F172A]">
                Patient #4821 — Chest Pain Follow-Up
              </p>
              <p className="text-xs text-[#64748B]">
                Dr. Martinez · Cardiology · SLA: 15 min
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-[#10B981] text-white text-xs font-semibold">
              Accept
            </span>
            <span className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] text-xs font-semibold">
              Override
            </span>
          </div>
        </div>
        <div className="bg-[#EFF6FF] rounded-lg border border-[#BFDBFE] p-4 mt-3">
          <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider mb-2">
            Why AI flagged this as High Priority
          </p>
          <ul className="space-y-1.5 text-xs text-[#334155]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0" />
              <span>
                <span className="font-semibold">Symptom severity:</span>{" "}
                High-risk keywords detected in triage notes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0" />
              <span>
                <span className="font-semibold">Patient history:</span> 2 prior
                cardiac events in last 18 months
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0" />
              <span>
                <span className="font-semibold">SLA requirement:</span>{" "}
                Cardiology follow-ups require &lt;15 min response
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Coded Visual: Conflict Modal ─── */
function ConflictModalMockup() {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 mb-8 shadow-sm">
      <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
        Conflict Detection — Progressive Disclosure
      </p>
      <div className="max-w-[480px] mx-auto bg-white rounded-xl border-2 border-[#FBBF24] shadow-lg overflow-hidden">
        <div className="bg-[#FFFBEB] border-b border-[#FDE68A] px-5 py-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#F59E0B] text-white text-xs font-bold flex items-center justify-center">
            !
          </span>
          <p className="text-sm font-semibold text-[#92400E]">
            Scheduling Conflict Detected
          </p>
        </div>
        <div className="p-5 space-y-4">
          <div className="bg-[#FEF2F2] rounded-lg p-3 text-xs text-[#991B1B]">
            <span className="font-semibold">Conflict:</span> Dr. Martinez is
            already booked in Room 204 at 2:30 PM (Patient #3192, post-op
            check).
          </div>
          <div className="bg-[#F0FDF4] rounded-lg p-3 text-xs text-[#166534]">
            <span className="font-semibold">Suggested alternative:</span> Room
            207 at 2:45 PM — available, same floor, patient preference match
            (wheelchair accessible).
          </div>
          <div className="flex gap-2">
            <span className="flex-1 px-3 py-2 rounded-lg bg-[#10B981] text-white text-xs font-semibold text-center">
              Accept Suggestion
            </span>
            <span className="flex-1 px-3 py-2 rounded-lg border border-[#E2E8F0] text-[#64748B] text-xs font-semibold text-center">
              Override & Keep Original
            </span>
          </div>
          <p className="text-[10px] text-[#94A3B8] text-center">
            Overrides are logged for audit. 89% of suggestions are accepted.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Coded Visual: Before/After Alerts ─── */
function AlertBeforeAfter() {
  const beforeAlerts = [
    "! Lab results ready — Patient #2891",
    "! Shift handoff note — ICU",
    "! Overdue SLA — Patient #4103",
    "! Equipment maintenance scheduled",
    "! New admission — Bed 12A",
    "! Prescription renewal — Patient #1847",
    "! Staff meeting moved to 3 PM",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* Before */}
      <div className="bg-[#FEF2F2] rounded-xl border border-[#FECACA] p-5">
        <p className="text-xs font-semibold text-[#991B1B] uppercase tracking-widest mb-3">
          Before — Flat Alert List
        </p>
        <div className="space-y-1.5">
          {beforeAlerts.map((alert) => (
            <div
              key={alert}
              className="bg-white/60 rounded px-3 py-1.5 text-xs text-[#7F1D1D] border border-[#FECACA]/50"
            >
              {alert}
            </div>
          ))}
          <p className="text-[10px] text-[#991B1B] italic pt-1">
            + 40 more alerts, all marked "!"...
          </p>
        </div>
      </div>

      {/* After */}
      <div className="bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] p-5">
        <p className="text-xs font-semibold text-[#166534] uppercase tracking-widest mb-3">
          After — Risk-Based Tiers
        </p>
        <div className="space-y-3">
          <div>
            <p className="text-[10px] font-bold text-[#DC2626] uppercase mb-1">
              Critical Action (2)
            </p>
            <div className="space-y-1">
              <div className="bg-[#FEE2E2] rounded px-3 py-1.5 text-xs text-[#991B1B] font-medium border border-[#FECACA]">
                Overdue SLA — Patient #4103 (12 min remaining)
              </div>
              <div className="bg-[#FEE2E2] rounded px-3 py-1.5 text-xs text-[#991B1B] font-medium border border-[#FECACA]">
                New admission — Bed 12A (triage needed)
              </div>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-[#F59E0B] uppercase mb-1">
              Review Needed (3)
            </p>
            <div className="space-y-1">
              <div className="bg-[#FFFBEB] rounded px-3 py-1.5 text-xs text-[#92400E] border border-[#FDE68A]/50">
                Lab results ready — Patient #2891
              </div>
              <div className="bg-[#FFFBEB] rounded px-3 py-1.5 text-xs text-[#92400E] border border-[#FDE68A]/50">
                Prescription renewal — Patient #1847
              </div>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-[#64748B] uppercase mb-1">
              FYI (collapsed) — 42 items batched
            </p>
            <div className="bg-[#F1F5F9] rounded px-3 py-1.5 text-xs text-[#64748B] italic border border-[#E2E8F0]">
              12 items due today · 18 informational · 12 resolved
            </div>
          </div>
        </div>
      </div>
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
      <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
        {title}
      </h3>
    </div>
  );
}

function ResultCallout({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-5 py-4">
      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
      <p className="text-sm font-medium text-[#166534] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
