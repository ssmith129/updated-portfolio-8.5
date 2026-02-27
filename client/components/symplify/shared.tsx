import { useState, useCallback, useEffect } from "react";
import { Zap, X, ZoomIn } from "lucide-react";

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

export function ZoomableImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  return (
    <>
      <figure className="mb-6 group">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative w-full rounded-xl overflow-hidden border border-sym-card-border shadow-sm cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sym-blue"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              <ZoomIn className="w-5 h-5 text-sym-heading" />
            </div>
          </div>
        </button>
        {caption && (
          <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
          />
        </div>
      )}
    </>
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
