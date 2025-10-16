import React from "react";

interface EvidenceItem {
  imageSrc?: string;
  altText: string;
  caption: string;
  placeholder?: string;
}

interface ProblemEvidenceContainerProps {
  evidenceItems?: EvidenceItem[];
}

export const ProblemEvidenceContainer: React.FC<
  ProblemEvidenceContainerProps
> = ({ evidenceItems = [] }) => {
  const defaultEvidence: EvidenceItem[] = [
    {
      altText:
        "Diagram showing old 5-step manual workflow requiring 18-29 hours per client with multiple error points",
      caption: "18-29 hours per client with multiple failure points",
      placeholder: "Old Workflow Diagram",
    },
    {
      altText:
        "Competitor interface showing AI categorization without explanation or user control",
      caption: "Competitors offer no AI transparency or user control",
      placeholder: "Competitor Black-Box UI",
    },
    {
      altText:
        "Bar chart showing top 5 pain points, with manual Python scripts ranked highest at 95% severity",
      caption: "Research findings from 8 CPAs and 6 workflow observations",
      placeholder: "Pain Points Analysis",
    },
  ];

  const items = evidenceItems.length > 0 ? evidenceItems : defaultEvidence;

  return (
    <section className="my-16 p-12 bg-[#1A1A1A]/50 rounded-[20px]">
      <h3 className="text-xl font-semibold text-white mb-6 leading-tight">
        The Reality: What We Observed
      </h3>

      <div className="flex flex-col gap-12">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt={item.altText}
                className="w-full max-w-[1000px] h-auto mx-auto block rounded-[12px] shadow-lg border border-[#2A2A2A]"
                loading="lazy"
              />
            ) : (
              <div className="w-full max-w-[1000px] h-[400px] mx-auto bg-[#0F0F0F]/60 rounded-[12px] border-2 border-dashed border-[#2A2A2A] flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-[#6B7280] text-lg mb-2">
                    {item.placeholder}
                  </p>
                  <p className="text-[#4B5563] text-sm max-w-md">
                    {item.altText}
                  </p>
                </div>
              </div>
            )}
            <p className="text-center text-sm text-[#9CA3AF] mt-4 italic leading-relaxed">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemEvidenceContainer;
