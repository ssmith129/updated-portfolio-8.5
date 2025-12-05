import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface InteractiveImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function InteractiveImage({
  src,
  alt,
  caption,
  className = "",
}: InteractiveImageProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div className={`group relative cursor-pointer ${className}`}>
        <div className="absolute inset-0 rounded-[12px] border-2 border-transparent group-hover:border-[#00D4FF]/60 transition-all duration-300 pointer-events-none z-10" />

        <img
          src={src}
          alt={alt}
          onClick={() => setIsEnlarged(true)}
          className="w-full h-auto rounded-[12px] transition-transform duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />

        {/* Consistent hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] pointer-events-none">
          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">
            <ZoomIn className="w-3 h-3" />
            Click to enlarge
          </div>
        </div>

        {caption && (
          <p className="text-sm text-[#A1A1A1] mt-3">{caption}</p>
        )}
      </div>

      {/* Modal */}
      {isEnlarged && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer animate-in fade-in-0 duration-200"
          onClick={() => setIsEnlarged(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            onClick={() => setIsEnlarged(false)}
            aria-label="Close enlarged image"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-in zoom-in-95 duration-200"
          />
        </div>
      )}
    </>
  );
}
