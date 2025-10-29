import { useEffect, useRef } from "react";

/**
 * Custom hook to handle video autoplay based on visibility threshold
 * Automatically plays videos when at least 40% is visible in viewport
 *
 * @param threshold - Visibility threshold (0.0 to 1.0), defaults to 0.4 (40%)
 * @returns videoRef - Ref to attach to video element
 */
export function useVideoAutoplayOnVisible(threshold: number = 0.4) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Remove autoplay attribute to ensure manual control
    videoElement.removeAttribute("autoplay");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is at least 40% visible, attempt to play
            const playPromise = videoElement.play();

            // Handle play promise to avoid unhandled rejection errors
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  // Autoplay started successfully
                  console.log("Video autoplay started");
                })
                .catch((error) => {
                  // Autoplay was prevented (browser policy, user preference, etc.)
                  console.warn("Video autoplay prevented:", error);
                });
            }
          } else {
            // Video is less than 40% visible, pause it
            videoElement.pause();
          }
        });
      },
      {
        threshold: threshold,
        // Optional: Add root margin for earlier detection
        // rootMargin: '0px 0px -50px 0px'
      },
    );

    observer.observe(videoElement);

    // Cleanup
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [threshold]);

  return videoRef;
}
