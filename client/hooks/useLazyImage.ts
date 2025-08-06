import { useEffect, useRef, useState } from 'react';

export const useLazyImage = (src: string) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px' // Start loading 50px before the image comes into view
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return { imageSrc, isLoaded, imageRef, setIsLoaded };
};

// Utility hook for progressive image loading
export const useProgressiveImage = (lowQualitySrc: string, highQualitySrc: string) => {
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setCurrentSrc(highQualitySrc);
      setIsLoaded(true);
    };
  }, [highQualitySrc]);

  return { currentSrc, isLoaded };
};