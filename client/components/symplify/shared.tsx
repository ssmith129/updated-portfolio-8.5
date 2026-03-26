import { useState, useCallback, useEffect, useRef } from "react";
import { Zap, X, Maximize2 } from "lucide-react";

export function SymTLDR({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-sym-blue/5 to-sym-green/5 rounded-lg px-3.5 py-2.5 border-l-4 border-sym-blue mb-6">
      <div className="flex items-start gap-2.5">
        <div className="w-5 h-5 bg-sym-blue/10 rounded flex items-center justify-center flex-shrink-0">
          <Zap className="w-3 h-3 text-sym-blue" />
        </div>
        <div>
          <span className="text-[10px] font-semibold text-sym-blue uppercase tracking-wider block mb-0.5">
            TL;DR
          </span>
          <p className="text-[13px] font-medium text-sym-heading leading-snug">
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

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <figure className="mb-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative w-full rounded-xl overflow-hidden border border-sym-card-border shadow-sm hover:shadow-md hover:border-sym-card-border-hover transition-all duration-300 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sym-blue"
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto block"
          />
        </button>
        {caption && (
          <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed text-center">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
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
      <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed text-center">
        {caption}
      </figcaption>
    </figure>
  );
}

export function AutoplayVideo({
  src,
  caption,
  poster,
}: {
  src: string;
  caption?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => setLoaded(true);
    if (video.readyState >= 2) {
      setLoaded(true);
      return;
    }
    video.addEventListener("loadeddata", onLoaded);
    return () => video.removeEventListener("loadeddata", onLoaded);
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
      <figure className="mb-4 -mx-5 sm:-mx-6">
        <div className="relative group overflow-hidden rounded-sm">
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-sym-bg-primary to-sym-card animate-pulse rounded-sm" />
          )}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-auto -mt-[2%] transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
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
          <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed text-center">
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
