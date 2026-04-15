interface QuickWinsStripProps {
  metrics: {
    value: string;
    label: string;
    color: "accent" | "secondary" | "warning" | "primary" | "success";
  }[];
}

export default function QuickWinsStrip({ metrics }: QuickWinsStripProps) {
  const colorClasses = {
    accent: "text-precision-accent",
    secondary: "text-precision-secondary",
    warning: "text-precision-warning",
    primary: "text-white",
    success: "text-precision-success",
  };

  return (
    <div className="bg-gradient-to-r from-[#0A2540] to-[#1E3A5F] rounded-2xl p-5 mt-2">
      <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-4">
        {metrics.map((metric, i) => (
          <div key={i} className="text-center min-w-[80px]">
            <p className={`text-2xl sm:text-3xl font-bold ${colorClasses[metric.color]} mb-1`}>
              {metric.value}
            </p>
            <p className="text-xs text-white/70 font-medium">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
