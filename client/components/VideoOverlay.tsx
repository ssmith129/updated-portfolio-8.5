import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface VideoOverlayProps {
  videoSrc: string;
  ariaLabel: string;
  problem?: string;
  solution?: string;
  impact?: string;
}

export default function VideoOverlay({
  videoSrc,
  ariaLabel,
  problem,
  solution,
  impact,
}: VideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const enlargedVideoRef = useRef<HTMLVideoElement>(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer for 40% visibility threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            video.play().catch((error) => {
              console.log("Autoplay was prevented:", error);
            });
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "0px",
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle enlarged video playback
  useEffect(() => {
    if (isEnlarged && enlargedVideoRef.current) {
      enlargedVideoRef.current.play().catch((error) => {
        console.log("Enlarged video playback prevented:", error);
      });
    }
  }, [isEnlarged]);

  // Prevent body scroll when enlarged
  useEffect(() => {
    if (isEnlarged) {
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsEnlarged(false);
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isEnlarged]);

  const handleVideoClick = () => {
    setIsEnlarged(true);
  };

  const handleCloseEnlarged = () => {
    setIsEnlarged(false);
  };

  return (
    <>
      <div
        className="video-container relative group cursor-pointer"
        onClick={handleVideoClick}
      >
        <div className="rounded-[5px] overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
          <video
            ref={videoRef}
            className="w-full h-auto"
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={ariaLabel}
          >
            <source src={videoSrc} type="video/mp4" />
            <p className="p-4 bg-gray-100 text-center text-xs sm:text-sm text-gray-600">
              Your browser does not support the video tag. Please use a modern
              browser to view this demonstration.
            </p>
          </video>
        </div>

        {/* Hover overlay with click hint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[12px] sm:rounded-[16px] md:rounded-[20px] flex items-center justify-center">
          <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Click to enlarge
          </span>
        </div>
      </div>

      {/* Enlarged Video Modal */}
      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 z-[9999] animate-in fade-in-0 duration-200"
          onClick={handleCloseEnlarged}
          style={{ cursor: "zoom-out" }}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseEnlarged}
            className="absolute top-4 right-4 z-[10000] p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close enlarged video"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Enlarged Video */}
          <div
            className="max-w-[1920px] w-full animate-in zoom-in-90 duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: "default" }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={enlargedVideoRef}
                className="w-full h-auto"
                loop
                muted
                playsInline
                controls
                aria-label={`${ariaLabel} - Enlarged view`}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Export helper component for rendering Problem/Solution/Impact cards
interface FeatureCardsProps {
  problem?: string;
  solution?: string;
  impact?: string;
}

export function FeatureCards({ problem, solution, impact }: FeatureCardsProps) {
  if (!problem && !solution && !impact) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
      {/* Problem */}
      {problem && (
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-3 rounded-card border-l-4 border-precision-error shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-xs font-bold text-precision-error uppercase tracking-wider mb-1.5">
            Problem
          </p>
          <p className="text-sm text-precision-text-primary leading-[160%]">
            {problem}
          </p>
        </div>
      )}

      {/* Solution */}
      {solution && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-card border-l-4 border-precision-secondary shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-xs font-bold text-precision-secondary uppercase tracking-wider mb-1.5">
            Solution
          </p>
          <p className="text-sm text-precision-text-primary leading-[160%]">
            {solution}
          </p>
        </div>
      )}

      {/* Impact */}
      {impact && (
        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-3 rounded-card border-l-4 border-precision-success shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-xs font-bold text-precision-success uppercase tracking-wider mb-1.5">
            Impact
          </p>
          <p className="text-sm text-precision-text-primary leading-[160%] font-semibold">
            {impact}
          </p>
        </div>
      )}
    </div>
  );
}
