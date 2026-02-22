import { Zap } from "lucide-react";

interface SectionTLDRProps {
  children: React.ReactNode;
}

export default function SectionTLDR({ children }: SectionTLDRProps) {
  return (
    <div className="bg-gradient-to-r from-cs-accent/5 to-cs-secondary/5 rounded-xl p-4 border-l-4 border-cs-accent">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-cs-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <Zap className="w-3.5 h-3.5 text-cs-accent" />
        </div>
        <div>
          <span className="text-xs font-semibold text-cs-accent uppercase tracking-wider block mb-1">
            TL;DR
          </span>
          <p className="text-sm font-medium text-cs-text-primary leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
