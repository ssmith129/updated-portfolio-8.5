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
            video.play().catch((error) => {
              console.log("Autoplay was prevented:", error);
            });
          } else {
            video.pause();
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
    <div className="space-y-4">
      {/* Problem, Solution, Impact sections above video */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Problem */}
        <div className="bg-red-50 p-4 rounded-[15px] border border-red-100 transition-all duration-300 hover:shadow-md">
          <p className="text-[14px] font-semibold text-[#131417] mb-1">
            Problem
          </p>
          <p className="text-[16px] text-[#555]">{problem}</p>
        </div>

        {/* Solution */}
        <div className="bg-blue-50 p-4 rounded-[15px] border border-blue-100 transition-all duration-300 hover:shadow-md">
          <p className="text-[14px] font-semibold text-[#131417] mb-1">
            Solution
          </p>
          <p className="text-[16px] text-[#555]">{solution}</p>
        </div>

        {/* Impact */}
        <div className="bg-green-50 p-4 rounded-[15px] border border-green-100 transition-all duration-300 hover:shadow-md">
          <p className="text-[14px] font-semibold text-[#131417] mb-1">
            Impact
          </p>
          <p className="text-[16px] text-[#555]">{impact}</p>
        </div>
      </div>

      {/* Video without overlays */}
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
