import React from "react";
import { TrendingUp, Award, Users, Zap } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  icon: "trending" | "award" | "users" | "zap";
}

interface CaseStudySummaryProps {
  projectName?: string;
  metrics?: Metric[];
  keyTakeaways?: string[];
  nextSteps?: string[];
}

export const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({
  projectName = "Computis",
  metrics,
  keyTakeaways,
  nextSteps,
}) => {
  const defaultMetrics: Metric[] = [
    { value: "45%", label: "Time Reduction", icon: "trending" },
    { value: "32%", label: "Productivity Increase", icon: "zap" },
    { value: "47", label: "CPA Firms Served", icon: "users" },
    { value: "A-", label: "Final Grade", icon: "award" },
  ];

  const defaultTakeaways = [
    "AI transparency isn't optional—it's a competitive moat in regulated industries",
    "Empowering users with control reduces support overhead and increases trust",
    "Visual storytelling (before/after, evolution) converts prospects 32% faster",
    "Design systems accelerate handoffs and maintain quality at scale",
  ];

  const defaultNextSteps = [
    "Expand AI explainability to predictive tax scenarios",
    "Build white-label SDK for partner integrations",
    "Develop mobile-first interface for on-the-go CPAs",
  ];

  const displayMetrics = metrics || defaultMetrics;
  const displayTakeaways = keyTakeaways || defaultTakeaways;
  const displayNextSteps = nextSteps || defaultNextSteps;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "trending":
        return <TrendingUp className="w-6 h-6" />;
      case "award":
        return <Award className="w-6 h-6" />;
      case "users":
        return <Users className="w-6 h-6" />;
      case "zap":
        return <Zap className="w-6 h-6" />;
      default:
        return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 px-6 my-16">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[25px] p-8 sm:p-12 border-2 border-[#00D4FF]/30">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            The {projectName} Transformation
          </h2>
          <p className="text-xl text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            From opaque Python scripts to transparent, CPA-first enterprise
            platform
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#0F0F0F]/60 rounded-[20px] p-6 text-center border border-[#2A2A2A] hover:border-[#00D4FF]/40 transition-all"
            >
              <div className="flex justify-center mb-3 text-[#00D4FF]">
                {getIcon(metric.icon)}
              </div>
              <p className="text-3xl font-bold text-white mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-[#9CA3AF]">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Before */}
          <div className="bg-[#1A1A1A]/60 rounded-[20px] p-6 border-l-4 border-[#FF4D4D]">
            <h3 className="text-lg font-bold text-[#FF8888] mb-4 flex items-center gap-2">
              <span className="text-2xl">❌</span>
              Before
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • 85% of CPA time spent waiting for engineers
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • Zero AI transparency or explainability
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • No audit trails for IRS compliance
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • 18-29 hours per client processing time
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#1A1A1A]/60 rounded-[20px] p-6 border-l-4 border-[#00FFB3]">
            <h3 className="text-lg font-bold text-[#00FFB3] mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              After
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • CPAs build custom rules in{" "}
                <strong className="text-white">under 90 seconds</strong>
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • AI confidence levels + full explainability
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • Real-time audit trail for all decisions
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                • 10-14 hours per client (45% faster)
              </li>
            </ul>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Key Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayTakeaways.map((takeaway, index) => (
              <div
                key={index}
                className="bg-[#00D4FF]/10 rounded-[12px] p-4 flex items-start gap-3"
              >
                <span className="text-[#00D4FF] text-xl mt-1">→</span>
                <p className="text-sm text-[#B0AFAF] leading-relaxed">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">What's Next</h3>
          <div className="space-y-3">
            {displayNextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#FFD700] text-lg mt-1">•</span>
                <p className="text-sm text-[#B0AFAF] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Achievement */}
        <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
          <p className="text-center text-lg text-[#B0AFAF] leading-relaxed">
            <strong className="text-[#00D4FF]">Core Achievement:</strong>{" "}
            Transformed AI opacity into transparency—reframing{" "}
            <strong className="text-white">
              trust as {projectName}'s competitive moat
            </strong>{" "}
            and enabling CPAs to serve{" "}
            <strong className="text-white">32% more clients</strong> without
            additional staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySummary;
