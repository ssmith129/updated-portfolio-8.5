import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { useIntersectionAnimation } from "../../hooks/use-page-animations";

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
  { label: "Triage Time", before: "2m 15s", after: "1m 18s", change: "~40%", direction: "faster", value: 40, color: "#10B981" },
  { label: "Triage Accuracy", before: "60%", after: "89%", change: "+29 pts", direction: "up", value: 29, suffix: " pts", color: "#3B82F6" },
  { label: "SLA Compliance", before: "72%", after: "85.3%", change: "+13 pts", direction: "up", value: 13, suffix: " pts", color: "#8B5CF6" },
  { label: "Admin Overhead", before: "12.5 hrs/wk", after: "8.1 hrs/wk", change: "-35%", direction: "down", value: 35, color: "#F59E0B" },
  { label: "No-Shows", before: "9.8%", after: "7.4%", change: "-2.4 pts", direction: "down", value: 2.4, suffix: " pts", decimals: 1, color: "#EC4899" },
  { label: "Alert Fatigue", before: "Baseline", after: "-38%", change: "-38%", direction: "down", value: 38, color: "#6366F1" },
];

export default function ImpactMetrics() {
  const { elementRef, isVisible } = useIntersectionAnimation(0.2, "0px 0px -80px 0px");

  return (
    <section
      id="impact"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div className="mb-10">
        <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
          Measured Outcomes
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
          Impact at a Glance
        </h2>
      </div>

      <div
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8"
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 shadow-sm card-lift hover:border-[#CBD5E1] group"
          >
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-3">
              {m.label}
            </p>
            <div className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: m.color }}>
              <AnimatedMetric
                value={m.value}
                suffix={m.suffix || "%"}
                decimals={m.decimals || 0}
                startAnimation={isVisible}
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <span className="bg-[#F1F5F9] rounded px-2 py-0.5">{m.before}</span>
              <span className="text-[#94A3B8]">&rarr;</span>
              <span className="font-semibold text-[#334155]">{m.after}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Guardrails + caveat */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-5 py-4 text-sm text-[#166534] leading-relaxed">
          <span className="font-semibold">AI Guardrails maintained:</span>{" "}
          &lt;15% override rate, &lt;10% false positive threshold, full audit
          trail on every automated decision.
        </div>
        <div className="flex-1 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl px-5 py-4 text-sm text-[#92400E] leading-relaxed flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>
            Pilot ran during non-flu months with n=65 staff over 6 weeks
            — promising early results, not proven at scale.
          </span>
        </div>
      </div>

      {/* Business Value Estimate */}
      <div className="mt-6 bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] rounded-2xl border border-[#DBEAFE] p-6 sm:p-8">
        <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">
          Estimated Business Value (Pilot Scale)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            {
              metric: "~$47K/year saved",
              detail:
                "4.4 hrs/wk admin reduction × $41/hr avg × 52 weeks × 5 admin staff",
            },
            {
              metric: "~$31K/year recovered",
              detail:
                "2.4% no-show reduction × ~3,200 annual appointments × $400 avg revenue",
            },
            {
              metric: "~957 min/week freed",
              detail:
                "57 sec triage savings × ~1,000 weekly triage decisions across 3 facilities",
            },
          ].map((v) => (
            <div
              key={v.metric}
              className="bg-white/70 rounded-xl px-5 py-4 border border-[#DBEAFE]/50 card-lift"
            >
              <p className="text-lg font-bold text-[#0F172A] mb-1">
                {v.metric}
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {v.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94A3B8] italic">
          Estimates based on pilot data extrapolated to annual figures. Actual
          values depend on facility size, staffing costs, and appointment
          volume. Presented as directional indicators, not guarantees.
        </p>
      </div>
    </section>
  );
}
