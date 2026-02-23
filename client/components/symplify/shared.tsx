import { Zap } from "lucide-react";

export function SymTLDR({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-sym-blue/5 to-sym-green/5 rounded-xl p-4 border-l-4 border-sym-blue mb-8">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-sym-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <Zap className="w-3.5 h-3.5 text-sym-blue" />
        </div>
        <div>
          <span className="text-xs font-semibold text-sym-blue uppercase tracking-wider block mb-1">
            TL;DR
          </span>
          <p className="text-sm font-medium text-sym-heading leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AssetPlaceholder({
  id,
  caption,
  aspectRatio = "16/9",
}: {
  id: string;
  caption: string;
  aspectRatio?: string;
}) {
  return (
    <figure className="mb-6">
      <div
        className="w-full rounded-xl border-2 border-dashed border-sym-card-border bg-sym-bg-primary flex flex-col items-center justify-center text-center p-8"
        style={{ aspectRatio }}
      >
        <div className="w-10 h-10 rounded-lg bg-sym-blue/10 flex items-center justify-center mb-3">
          <span className="text-sym-blue text-lg">📸</span>
        </div>
        <p className="text-xs font-mono text-sym-label break-all">{id}</p>
      </div>
      <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
