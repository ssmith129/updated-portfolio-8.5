import { useEffect, useRef } from "react";

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

  return (
    <div className="video-container">
      <div className="rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-lg">
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
    </div>
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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {/* Problem */}
      {problem && (
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-card border-l-4 border-precision-error shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-xs font-bold text-precision-error uppercase tracking-wider mb-2">
            Problem
          </p>
          <p className="text-sm text-precision-text-primary leading-[170%]">
            {problem}
          </p>
        </div>
      )}

      {/* Solution */}
      {solution && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-card border-l-4 border-precision-secondary shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-xs font-bold text-precision-secondary uppercase tracking-wider mb-2">
            Solution
          </p>
          <p className="text-sm text-precision-text-primary leading-[170%]">
            {solution}
          </p>
        </div>
      )}

      {/* Impact */}
      {impact && (
        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-5 rounded-card border-l-4 border-precision-success shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-xs font-bold text-precision-success uppercase tracking-wider mb-2">
            Impact
          </p>
          <p className="text-sm text-precision-text-primary leading-[170%] font-semibold">
            {impact}
          </p>
        </div>
      )}
    </div>
  );
}
