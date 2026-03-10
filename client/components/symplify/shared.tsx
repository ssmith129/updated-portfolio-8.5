import { useState, useCallback, useEffect, useRef } from "react";
import { Zap, X, ZoomIn, Maximize2 } from "lucide-react";

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
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // Focus trap: keep Tab within modal
      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;
        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    // Auto-focus close button on open
    const closeBtn = modalRef.current?.querySelector<HTMLElement>("button");
    closeBtn?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      // Return focus to trigger
      triggerRef.current?.focus();
    };
  }, [open, close]);

  return (
    <>
      <figure className="mb-6 group">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="relative w-full rounded-xl overflow-hidden border border-sym-card-border shadow-sm cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sym-blue"
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
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
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
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

export function AutoplayVideo({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    // Sync playback: start modal video
    const modalVideo = modalVideoRef.current;
    if (modalVideo) {
      modalVideo.play().catch(() => {});
    }
    // Pause inline video while modal is open
    const inlineVideo = videoRef.current;
    if (inlineVideo) inlineVideo.pause();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      // Resume inline video when modal closes
      if (inlineVideo) inlineVideo.play().catch(() => {});
    };
  }, [open, close]);

  return (
    <>
      <figure className="mb-6 -mx-6 sm:-mx-8">
        <div className="relative group">
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-auto"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sym-blue"
            aria-label="View fullscreen"
          >
            <Maximize2 className="w-4 h-4 text-white" />
          </button>
        </div>
        {caption && (
          <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
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
          <video
            ref={modalVideoRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay
            onClick={(e) => e.stopPropagation()}
            className="max-w-[94vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
          />
        </div>
      )}
    </>
  );
}
