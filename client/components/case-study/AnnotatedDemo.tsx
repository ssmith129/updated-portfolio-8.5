import { useEffect, useRef, useState } from "react";
import { useVideoAutoplayOnVisible } from "../../hooks/use-video-autoplay";

export interface Annotation {
  time: number; // seconds into the video
  label?: string; // "Challenge", "Solution", "Impact"
  heading?: string;
  text?: string;
  bullets?: string[];
}

interface AnnotatedDemoProps {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  annotations: Annotation[];
  containerClassName?: string;
}

export function AnnotatedDemo({
  src,
  poster,
  annotations,
  containerClassName = "aspect-video",
}: AnnotatedDemoProps) {
  const [currentAnnotation, setCurrentAnnotation] = useState<Annotation | null>(
    null,
  );
  const videoRef = useVideoAutoplayOnVisible(0.4);
  const timeUpdateRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      // Find the most recent annotation that should be displayed
      let activeAnnotation: Annotation | null = null;
      for (let i = annotations.length - 1; i >= 0; i--) {
        if (currentTime >= annotations[i].time) {
          activeAnnotation = annotations[i];
          break;
        }
      }

      setCurrentAnnotation(activeAnnotation);
    };

    timeUpdateRef.current = handleTimeUpdate;
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      if (timeUpdateRef.current) {
        video.removeEventListener("timeupdate", timeUpdateRef.current);
      }
    };
  }, [annotations, videoRef]);

  return (
    <div className={`relative ${containerClassName}`}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        poster={poster}
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Annotation Overlays */}
      {currentAnnotation && (
        <div
          className="absolute inset-0 pointer-events-none flex items-end p-6"
          key={currentAnnotation.time}
        >
          <div
            className="bg-black/70 backdrop-blur-sm rounded-2xl px-5 py-4 max-w-2xl 
                       animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
          >
            {/* Label (Challenge/Solution/Impact) */}
            {currentAnnotation.label && (
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    currentAnnotation.label === "Challenge"
                      ? "text-[#EF4444]"
                      : currentAnnotation.label === "Solution"
                        ? "text-[#00D4FF]"
                        : "text-[#00FFB3]"
                  }`}
                >
                  {currentAnnotation.label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
            )}

            {/* Heading */}
            {currentAnnotation.heading && (
              <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                {currentAnnotation.heading}
              </h4>
            )}

            {/* Text content */}
            {currentAnnotation.text && (
              <p className="text-sm text-gray-300 leading-relaxed">
                {currentAnnotation.text}
              </p>
            )}

            {/* Bullet points */}
            {currentAnnotation.bullets && (
              <ul className="space-y-1.5 text-sm text-gray-300">
                {currentAnnotation.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
