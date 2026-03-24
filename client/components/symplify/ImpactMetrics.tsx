import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { useIntersectionAnimation } from "../../hooks/use-page-animations";
import { SymTLDR } from "./shared";

function useCountAnimation(end: number, duration = 2000, startAnimation = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startAnimation) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);
  return count;
}

function AnimatedMetric({
  value,
  suffix = "%",
  decimals = 0,
  startAnimation,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  startAnimation: boolean;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(startAnimation);
  useEffect(() => {
    if (startAnimation) setShouldAnimate(true);
    else {
      const t = setTimeout(() => setShouldAnimate(true), 1200);
      return () => clearTimeout(t);
    }
  }, [startAnimation]);
  const animatedValue = useCountAnimation(value, 2000, shouldAnimate);
  const display = decimals > 0 ? animatedValue.toFixed(decimals) : Math.floor(animatedValue).toString();
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const metrics = [
  { label: "Triage Time", value: 40, color: "#10B981", before: "2m 15s", after: "1m 18s" },
  { label: "Triage Accuracy", value: 29, suffix: " pts", color: "#3B82F6", before: "60%", after: "89%" },
  { label: "SLA Compliance", value: 13, suffix: " pts", color: "#8B5CF6", before: "72%", after: "85.3%" },
  { label: "Admin Overhead", value: 35, color: "#F59E0B", before: "12.5 hrs/wk", after: "8.1 hrs/wk" },
  { label: "No-Shows", value: 2.4, suffix: " pts", decimals: 1, color: "#EC4899", before: "9.8%", after: "7.4%" },
  { label: "Alert Fatigue", value: 38, color: "#6366F1", before: "Baseline", after: "-38%" },
];

export default function ImpactMetrics() {
  const { elementRef, isVisible } = useIntersectionAnimation(0.2, "0px 0px -80px 0px");

  return (
    <section
      id="impact"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
          Measured Outcomes
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 heading-underline">
          Impact at a Glance
        </h2>
      </div>

      <SymTLDR>
        6-week pilot across 3 facilities: 40% faster triage, 89% accuracy,
        35% less admin overhead, and ~$78K/year estimated savings — with full
        AI transparency maintained (11% override rate, &lt;10% false positives).
      </SymTLDR>

      {/* Unified Before → After Comparison Table */}
      <div className="overflow-x-auto mb-6 rounded-xl border border-sym-card-border shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[580px]">
          <thead>
            <tr className="bg-sym-bg-primary border-b border-sym-card-border">
              <th className="text-left py-2 px-3 text-xs font-semibold text-sym-muted uppercase tracking-wider">Metric</th>
              <th className="text-center py-2 px-3 text-xs font-semibold text-sym-muted uppercase tracking-wider">Before (Baseline)</th>
              <th className="text-center py-2 px-3 text-xs font-semibold text-sym-muted uppercase tracking-wider">After (6-Week Pilot)</th>
              <th className="text-center py-2 px-3 text-xs font-semibold text-sym-green uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="text-sym-body">
            {metrics.map((m) => (
              <tr key={m.label} className="border-b border-sym-divider hover:bg-sym-bg-primary/50 transition-colors">
                <td className="py-2 px-3 font-semibold text-sym-heading">{m.label}</td>
                <td className="py-2 px-3 text-center text-sym-muted">{m.before}</td>
                <td className="py-2 px-3 text-center font-medium text-sym-heading">{m.after}</td>
                <td className="py-2 px-3 text-center font-bold" style={{ color: m.color }}>
                  {m.label === "Triage Time" ? "~40% faster" :
                   m.label === "Triage Accuracy" ? "+29 pts" :
                   m.label === "SLA Compliance" ? "+13 pts" :
                   m.label === "Admin Overhead" ? "-35%" :
                   m.label === "No-Shows" ? "-2.4 pts" : "-38%"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animated Metric Cards */}
      <div
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6"
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-sym-card rounded-xl border border-sym-card-border px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm card-lift hover:border-sym-card-border-hover group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[11px] font-semibold text-sym-label uppercase tracking-widest">
                {m.label}
              </p>
              <div className="text-xl sm:text-2xl font-bold leading-none" style={{ color: m.color }}>
                <AnimatedMetric
                  value={m.value}
                  suffix={m.suffix || "%"}
                  decimals={m.decimals || 0}
                  startAnimation={isVisible}
                />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-sym-muted">
              <span className="bg-sym-divider rounded px-1.5 py-0.5">{m.before}</span>
              <span className="text-sym-label">&rarr;</span>
              <span className="font-semibold text-sym-body">{m.after}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Guardrails + caveat */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1 bg-sym-bg-green border border-[#BBF7D0] rounded-lg px-4 py-3 text-sm text-[#166534] leading-snug">
          <span className="font-semibold">AI Guardrails maintained:</span>{" "}
          &lt;15% override rate, &lt;10% false positives, full audit trail.
        </div>
        <div className="flex-1 bg-sym-bg-amber border border-[#FDE68A] rounded-lg px-4 py-3 text-sm text-[#92400E] leading-snug flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>
            Pilot ran during non-flu months — promising early results, not proven at scale.
          </span>
        </div>
      </div>

      <p className="text-xs text-sym-muted italic mb-4">
        All metrics system-logged and compared against 4-week pre-pilot baselines.
      </p>

      {/* Business Value Estimate — Collapsible */}
      <details className="group">
        <summary className="cursor-pointer text-sm font-semibold text-sym-blue hover:text-[#2563EB] transition-colors flex items-center gap-2 mb-4">
          <span className="transition-transform group-open:rotate-90">▶</span>
          View estimated annual business value (pilot scale)
        </summary>
        <div className="bg-gradient-to-r from-sym-bg-blue to-sym-bg-green rounded-xl border border-[#DBEAFE] p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { metric: "~$47K/year saved", detail: "4.4 hrs/wk admin reduction × $41/hr avg × 52 weeks × 5 admin staff" },
              { metric: "~$31K/year recovered", detail: "2.4% no-show reduction × ~3,200 annual appointments × $400 avg revenue" },
              { metric: "~957 min/week freed", detail: "57 sec triage savings × ~1,000 weekly triage decisions across 3 facilities" },
            ].map((v) => (
              <div key={v.metric} className="bg-white/70 rounded-lg px-4 py-3 border border-[#DBEAFE]/50 card-lift">
                <p className="text-lg font-bold text-sym-heading mb-1">{v.metric}</p>
                <p className="text-xs text-sym-muted leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-sym-label italic">
            Estimates based on pilot data extrapolated to annual figures. Actual
            values depend on facility size, staffing costs, and appointment
            volume. Presented as directional indicators, not guarantees.
          </p>
        </div>
      </details>
    </section>
  );
}
