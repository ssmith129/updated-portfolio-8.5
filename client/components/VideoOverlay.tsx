import { useEffect, useRef } from "react";

interface VideoOverlayProps {
  videoSrc: string;
  ariaLabel: string;
  problem: string;
  solution: string;
  impact: string;
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
            // Attempt to play the video
            video.play().catch((error) => {
              // Handle autoplay block gracefully
              console.log("Autoplay was prevented:", error);
            });
          } else {
            // Pause video when less than 40% visible
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "0px",
      }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-4 sm:mt-5 md:mt-6 relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-lg">
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

      {/* Annotated Overlays */}
      <div className="absolute inset-0 pointer-events-none flex flex-col sm:flex-row items-end justify-between gap-1 sm:gap-2 p-2 sm:p-3 md:p-4">
        {/* Problem Annotation - Bottom Left on desktop, stacked on mobile */}
        <div className="w-full sm:w-auto sm:max-w-[45%] md:max-w-[280px] lg:max-w-[320px] min-h-[90px] sm:min-h-[100px] md:min-h-[110px] lg:min-h-[120px] flex flex-col justify-between bg-red-500/95 backdrop-blur-sm p-2.5 sm:p-3 md:p-4 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-red-600 sm:border-2 shadow-xl transform transition-all duration-300 hover:scale-105 pointer-events-auto">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white mb-0.5 sm:mb-1 uppercase tracking-wide">
            Problem
          </p>
          <p className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] text-white leading-tight">
            {problem}
          </p>
        </div>

        {/* Solution Annotation - Bottom Right on desktop, stacked on mobile */}
        <div className="w-full sm:w-auto sm:max-w-[45%] md:max-w-[300px] lg:max-w-[340px] min-h-[90px] sm:min-h-[100px] md:min-h-[110px] lg:min-h-[120px] flex flex-col justify-between bg-blue-600/95 backdrop-blur-sm p-2.5 sm:p-3 md:p-4 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-blue-700 sm:border-2 shadow-xl transform transition-all duration-300 hover:scale-105 pointer-events-auto">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white mb-0.5 sm:mb-1 uppercase tracking-wide">
            Solution
          </p>
          <p className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] text-white leading-tight">
            {solution}
          </p>
        </div>
      </div>

      {/* Impact Annotation - Absolutely positioned at bottom center, shown on md+ */}
      <div className="hidden md:flex absolute bottom-2 md:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 max-w-[92%] md:max-w-[360px] lg:max-w-[400px] min-h-[90px] md:min-h-[100px] lg:min-h-[120px] flex-col justify-between bg-green-600/95 backdrop-blur-sm p-2.5 md:p-3 lg:p-4 rounded-[8px] md:rounded-[10px] lg:rounded-[12px] border border-green-700 md:border-2 shadow-xl transform transition-all duration-300 hover:scale-105 pointer-events-auto">
        <p className="text-[10px] md:text-[11px] lg:text-[12px] font-bold text-white mb-0.5 md:mb-1 uppercase tracking-wide">
          Impact
        </p>
        <p className="text-[11px] md:text-[13px] lg:text-[15px] text-white leading-tight text-center">
          {impact}
        </p>
      </div>
    </div>
  );
}
