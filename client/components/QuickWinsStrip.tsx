import { useCountUp } from "../hooks/use-count-up";
import { useIntersectionAnimation } from "../hooks/use-page-animations";
import { useState, useEffect } from "react";

interface MetricItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  subtext?: string;
  color: "accent" | "secondary" | "warning" | "success" | "primary";
}

interface QuickWinsStripProps {
  metrics: MetricItem[];
}

const colorMap = {
  accent: {
    border: "border-[#00D4AA]",
    text: "text-[#00D4AA]",
    bg: "bg-[#00D4AA]/5",
    glow: "shadow-[0_0_20px_rgba(0,212,170,0.15)]",
  },
  secondary: {
    border: "border-[#1E3A5F]",
    text: "text-[#1E3A5F]",
    bg: "bg-[#1E3A5F]/5",
    glow: "shadow-[0_0_20px_rgba(30,58,95,0.15)]",
  },
  warning: {
    border: "border-[#F39C12]",
    text: "text-[#F39C12]",
    bg: "bg-[#F39C12]/5",
    glow: "shadow-[0_0_20px_rgba(243,156,18,0.15)]",
  },
  success: {
    border: "border-[#10B981]",
    text: "text-[#10B981]",
    bg: "bg-[#10B981]/5",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
  primary: {
    border: "border-[#0A2540]",
    text: "text-[#0A2540]",
    bg: "bg-[#0A2540]/5",
    glow: "shadow-[0_0_20px_rgba(10,37,64,0.15)]",
  },
};

export default function QuickWinsStrip({ metrics }: QuickWinsStripProps) {
  const { elementRef, isVisible } = useIntersectionAnimation(0.3, "0px");
  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = isVisible && !hasAnimated;

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className="w-full py-6 px-4 bg-gradient-to-r from-[#0A2540]/[0.02] via-transparent to-[#00D4AA]/[0.02] border-y border-[#E3E8EF]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Mobile: Scrollable horizontal strip */}
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:overflow-visible md:pb-0 md:grid md:grid-cols-5 md:gap-6 scrollbar-hide">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              shouldAnimate={shouldAnimate}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  metric,
  shouldAnimate,
  delay,
}: {
  metric: MetricItem;
  shouldAnimate: boolean;
  delay: number;
}) {
  const count = useCountUp(metric.value, 1500, shouldAnimate);
  const colors = colorMap[metric.color];

  return (
    <div
      className={`
        snap-center shrink-0 w-[160px] md:w-auto
        flex flex-col items-center justify-center
        p-4 md:p-5 rounded-xl
        ${colors.bg} ${colors.glow}
        border-2 ${colors.border}
        transition-all duration-500
        hover:scale-[1.02] hover:shadow-lg
        animate-in fade-in-0 slide-in-from-bottom-4
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-[10px] md:text-xs font-semibold text-precision-text-secondary uppercase tracking-wider text-center mb-2 leading-tight">
        {metric.label}
      </p>
      <p className={`text-2xl md:text-3xl lg:text-4xl font-bold ${colors.text} mb-1`}>
        {metric.prefix || ""}
        {count}
        {metric.suffix}
      </p>
      {metric.subtext && (
        <p className="text-[10px] md:text-xs text-precision-text-secondary text-center leading-tight mt-1">
          {metric.subtext}
        </p>
      )}
    </div>
  );
}

// Pre-configured metrics for Computis case study
export const computisMetrics: MetricItem[] = [
  {
    value: 85,
    prefix: "↓",
    suffix: "%",
    label: "Manual Work",
    subtext: "Classification automation",
    color: "accent",
  },
  {
    value: 45,
    prefix: "↓",
    suffix: "%",
    label: "Onboarding Time",
    subtext: "2.5h → 1.4h",
    color: "success",
  },
  {
    value: 32,
    prefix: "↑",
    suffix: "%",
    label: "Conversion Rate",
    subtext: "Demo to customer",
    color: "secondary",
  },
  {
    value: 150,
    prefix: "↑",
    suffix: "%",
    label: "Error Detection",
    subtext: "Pre-delivery catch rate",
    color: "warning",
  },
  {
    value: 3,
    suffix: "",
    label: "Enterprise Deals",
    subtext: "Closed in 6 months",
    color: "primary",
  },
];
