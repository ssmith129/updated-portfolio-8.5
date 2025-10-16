import React from "react";

interface BeforeAfterComparisonProps {
  featureName: string;
  beforeImage?: {
    src: string;
    alt: string;
  };
  afterImage?: {
    src: string;
    alt: string;
  };
  painPoints: string[];
  improvements: string[];
  impactStatement: string;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  featureName,
  beforeImage,
  afterImage,
  painPoints,
  improvements,
  impactStatement,
}) => {
  return (
    <article
      className="my-12 p-8 sm:p-10 bg-[#1A1A1A]/50 rounded-[20px]"
      aria-labelledby={`feature-${featureName.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-8 lg:gap-0 items-center">
        {/* Before Panel */}
        <div className="bg-[#0F0F0F]/80 rounded-[16px] p-6 border border-[#FF4D4D]/30">
          <span className="inline-block text-xs font-bold text-[#FF4D4D] bg-[#FF4D4D]/20 px-3 py-1 rounded-full mb-4">
            BEFORE
          </span>

          {beforeImage && (
            <img
              src={beforeImage.src}
              alt={beforeImage.alt}
              className="w-full rounded-[8px] my-4 border border-[#2A2A2A]"
              loading="lazy"
            />
          )}

          <div className="mt-4 space-y-2">
            {painPoints.map((point, index) => (
              <p
                key={index}
                className="text-sm text-[#FF8888] flex items-start gap-2"
              >
                <span>❌</span>
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="text-center lg:rotate-0 rotate-90">
          <span
            className="text-5xl text-[#00D4FF] font-bold"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        {/* After Panel */}
        <div className="bg-[#0F0F0F]/80 rounded-[16px] p-6 border border-[#00FFB3]/30">
          <span className="inline-block text-xs font-bold text-[#00FFB3] bg-[#00FFB3]/20 px-3 py-1 rounded-full mb-4">
            AFTER
          </span>

          {afterImage && (
            <img
              src={afterImage.src}
              alt={afterImage.alt}
              className="w-full rounded-[8px] my-4 border border-[#2A2A2A]"
              loading="lazy"
            />
          )}

          <div className="mt-4 space-y-2">
            {improvements.map((improvement, index) => (
              <p
                key={index}
                className="text-sm text-[#00FFB3] flex items-start gap-2"
              >
                <span>✅</span>
                <span>{improvement}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Statement */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-[12px] border-l-4 border-[#00D4FF]">
        <p className="text-sm text-[#D1D5DB] leading-relaxed">
          <strong className="text-[#FFD700]">Impact:</strong> {impactStatement}
        </p>
      </div>
    </article>
  );
};

export default BeforeAfterComparison;
