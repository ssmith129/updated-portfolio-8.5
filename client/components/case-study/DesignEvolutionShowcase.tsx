import React from "react";

interface EvolutionStage {
  number: number;
  title: string;
  imageSrc?: string;
  caption: string;
  learnings: string;
}

interface DesignEvolutionShowcaseProps {
  stages?: EvolutionStage[];
}

export const DesignEvolutionShowcase: React.FC<
  DesignEvolutionShowcaseProps
> = ({ stages }) => {
  const defaultStages: EvolutionStage[] = [
    {
      number: 1,
      title: "Initial Exploration",
      caption:
        "Quick sketches to explore interaction patterns for rule creation.",
      learnings:
        "Key question: How do we make AI suggestions transparent without overwhelming users?",
    },
    {
      number: 2,
      title: "Wireframe Testing",
      caption: "Wireframes tested with 3 CPAs to validate mental model.",
      learnings:
        "Learning: Users wanted to see ALL classification options upfront, not progressive disclosure.",
    },
    {
      number: 3,
      title: "High-Fidelity Prototype",
      caption:
        "High-fidelity prototype tested with 5 users for usability validation.",
      learnings:
        "Finding: Confidence percentages alone weren't enough—added color-coded chips for at-a-glance scanning.",
    },
    {
      number: 4,
      title: "Production Release",
      caption: "Shipped with 98% design-dev fidelity.",
      learnings: "Result: 89% task completion rate vs. 34% with old workflow.",
    },
  ];

  const evolutionStages = stages || defaultStages;

  return (
    <section className="py-16 px-6 my-16">
      <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 text-center leading-tight">
        From Concept to Production
      </h3>
      <p className="text-base text-[#9CA3AF] mb-12 text-center max-w-3xl mx-auto leading-relaxed">
        Here's how the most critical feature—automated classification
        rules—evolved from initial sketches to the final shipped product.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto p-8 sm:p-12 bg-gradient-to-b from-[#1A1A1A]/50 to-transparent rounded-[20px]">
        {evolutionStages.map((stage, index) => (
          <article
            key={stage.number}
            className="bg-[#0F0F0F]/80 rounded-[16px] p-6 border border-[#2A2A2A] hover:border-[#00D4FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative"
          >
            {/* Stage Number Badge */}
            <div className="w-10 h-10 bg-gradient-to-r from-[#0080FF] to-[#00D4FF] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">
                {stage.number}
              </span>
            </div>

            {/* Arrow Connector (Desktop only) */}
            {index < evolutionStages.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-4xl text-[#4B5563] z-10">
                →
              </div>
            )}

            <h4 className="text-lg font-semibold text-white mb-2 leading-tight">
              {stage.title}
            </h4>

            {stage.imageSrc ? (
              <img
                src={stage.imageSrc}
                alt={`${stage.title} - Stage ${stage.number}`}
                className="w-full h-auto rounded-lg my-4 border border-[#2A2A2A]"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-32 bg-[#1A1A1A] rounded-lg my-4 border border-[#2A2A2A] flex items-center justify-center">
                <span className="text-[#4B5563] text-sm">Design Asset</span>
              </div>
            )}

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">
              {stage.caption}
            </p>

            <div className="bg-[#00D4FF]/10 rounded-lg p-3 mt-4">
              <p className="text-xs text-[#00D4FF] italic leading-relaxed">
                {stage.learnings}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DesignEvolutionShowcase;
