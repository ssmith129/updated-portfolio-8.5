import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  context?: string;
  validationSource?: string;
  color?: "green" | "yellow" | "blue" | "cyan";
  icon?: LucideIcon;
}

const colorMap = {
  green: {
    value: "text-[#00FFB3]",
    bg: "bg-[#00FFB3]/10",
    border: "border-[#00FFB3]/20",
  },
  yellow: {
    value: "text-[#FFD700]",
    bg: "bg-[#FFD700]/10",
    border: "border-[#FFD700]/20",
  },
  blue: {
    value: "text-[#00D4FF]",
    bg: "bg-[#00D4FF]/10",
    border: "border-[#00D4FF]/20",
  },
  cyan: {
    value: "text-[#0080FF]",
    bg: "bg-[#0080FF]/10",
    border: "border-[#0080FF]/20",
  },
};

export function MetricCard({
  value,
  label,
  context,
  validationSource,
  color = "blue",
  icon: Icon,
}: MetricCardProps) {
  const colors = colorMap[color];

  return (
    <div
      className={`${colors.bg} rounded-[16px] p-6 border ${colors.border} transition-all duration-300 hover:scale-105`}
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <Icon className={`w-6 h-6 ${colors.value}`} />
        </div>
      )}

      <p className={`text-3xl sm:text-4xl font-bold ${colors.value} mb-3 text-center`}>
        {value}
      </p>

      <p className="text-sm font-medium text-[#D1D5DB] leading-normal text-center mb-2">
        {label}
      </p>

      {context && (
        <p className="text-xs text-[#9CA3AF] text-center">
          {context}
        </p>
      )}

      {validationSource && (
        <div className="mt-4 pt-3 border-t border-[#2A2A2A]">
          <p className="text-xs text-[#6B7280] text-center">
            <strong className="text-[#9CA3AF]">Source:</strong> {validationSource}
          </p>
        </div>
      )}
    </div>
  );
}
