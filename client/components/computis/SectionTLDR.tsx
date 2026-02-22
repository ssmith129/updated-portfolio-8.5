import { Zap } from "lucide-react";

interface SectionTLDRProps {
  children: React.ReactNode;
}

export default function SectionTLDR({ children }: SectionTLDRProps) {
  return (
    <div className="bg-gradient-to-r from-[#E0F9F4]/50 to-[#E8F4FA]/50 rounded-xl p-4 border-l-4 border-precision-accent">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-precision-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <Zap className="w-3.5 h-3.5 text-precision-accent" />
        </div>
        <div>
          <span className="text-xs font-semibold text-precision-accent uppercase tracking-wider block mb-1">
            TL;DR
          </span>
          <p className="text-sm font-medium text-precision-text-primary leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
