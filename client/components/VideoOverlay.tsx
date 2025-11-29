import { useEffect, useRef, RefObject } from "react";

interface VideoOverlayProps {
  videoRef: RefObject<HTMLVideoElement>;
  videoSrc: string;
  ariaLabel: string;
  problem: string;
  solution: string;
  impact: string;
}

export default function VideoOverlay({
  videoRef,
  videoSrc,
  ariaLabel,
  problem,
  solution,
  impact,
}: VideoOverlayProps) {
  return (
    <div className="mt-6 relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-lg group">
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
        <p className="p-4 bg-gray-100 text-center text-sm text-gray-600">
          Your browser does not support the video tag. Please use a modern
          browser to view this demonstration.
        </p>
      </video>

      {/* Annotated Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Problem Annotation - Bottom Left */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 w-[45%] sm:w-auto sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] flex flex-col justify-between bg-red-500/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-red-600 sm:border-2 shadow-xl transform transition-all duration-300 hover:scale-105 pointer-events-auto">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white mb-0.5 sm:mb-1 uppercase tracking-wide">
            Problem
          </p>
          <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-white leading-tight">
            {problem}
          </p>
        </div>

        {/* Solution Annotation - Bottom Right */}
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-[45%] sm:w-auto sm:max-w-[280px] md:max-w-[320px] lg:max-w-[340px] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] flex flex-col justify-between bg-blue-600/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-blue-700 sm:border-2 shadow-xl transform transition-all duration-300 hover:scale-105 pointer-events-auto">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white mb-0.5 sm:mb-1 uppercase tracking-wide">
            Solution
          </p>
          <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-white leading-tight">
            {solution}
          </p>
        </div>

        {/* Impact Annotation - Bottom Center (hidden on mobile, shown on sm+) */}
        <div className="hidden sm:flex absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 max-w-[90%] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[400px] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] flex-col justify-between bg-green-600/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-green-700 sm:border-2 shadow-xl transform transition-all duration-300 hover:scale-105 pointer-events-auto">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white mb-0.5 sm:mb-1 uppercase tracking-wide">
            Impact
          </p>
          <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-white leading-tight text-center">
            {impact}
          </p>
        </div>
      </div>
    </div>
  );
}
