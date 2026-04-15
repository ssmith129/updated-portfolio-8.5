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
    "AI transparency isn't optional -- it's a competitive moat in regulated industries",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            The {projectName} Transformation
          </h2>
          <p className="text-xl text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            From opaque Python scripts to transparent, CPA-first enterprise platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#0F0F0F]/60 rounded-[20px] p-6 text-center border border-[#2A2A2A] hover:border-[#00D4FF]/40 transition-all"
            >
              <div className="flex justify-center mb-3 text-[#00D4FF]">
                {getIcon(metric.icon)}
              </div>
              <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-sm text-[#9CA3AF]">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1A1A1A]/60 rounded-[20px] p-6 border-l-4 border-[#FF4D4D]">
            <h3 className="text-lg font-bold text-[#FF8888] mb-4 flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">&#10060;</span>
              Before
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; 85% of CPA time spent waiting for engineers
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; Zero AI transparency or explainability
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; No audit trails for IRS compliance
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; 18-29 hours per client processing time
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A]/60 rounded-[20px] p-6 border-l-4 border-[#00FFB3]">
            <h3 className="text-lg font-bold text-[#00FFB3] mb-4 flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">&#9989;</span>
              After
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; CPAs build custom rules in <strong className="text-white">under 90 seconds</strong>
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; AI confidence levels with full explainability
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; Automated IRS-ready audit trail exports
              </li>
              <li className="text-sm text-[#B0AFAF] leading-relaxed">
                &bull; 85% reduction in manual classification
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Key Takeaways</h3>
          <div className="space-y-4">
            {displayTakeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#00D4FF] mt-1 flex-shrink-0">&#10003;</span>
                <p className="text-sm text-[#B0AFAF] leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6">Next Steps</h3>
          <div className="space-y-4">
            {displayNextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#FFD700] mt-1 flex-shrink-0">&rarr;</span>
                <p className="text-sm text-[#B0AFAF] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySummary;
