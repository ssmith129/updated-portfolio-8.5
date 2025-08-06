import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = "100vw",
  srcSet
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP and AVIF sources for modern browsers
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

  // Generate responsive srcSet if not provided
  const defaultSrcSet = srcSet || `
    ${src.replace(/\.(jpg|jpeg|png)$/i, '-320w.$1')} 320w,
    ${src.replace(/\.(jpg|jpeg|png)$/i, '-640w.$1')} 640w,
    ${src.replace(/\.(jpg|jpeg|png)$/i, '-768w.$1')} 768w,
    ${src.replace(/\.(jpg|jpeg|png)$/i, '-1024w.$1')} 1024w,
    ${src.replace(/\.(jpg|jpeg|png)$/i, '-1280w.$1')} 1280w,
    ${src} 1920w
  `.trim().replace(/\s+/g, ' ');

  return (
    <picture className="block">
      {/* Modern formats first for better compression */}
      <source 
        srcSet={avifSrc.replace(src, defaultSrcSet.replace(/\.(jpg|jpeg|png)/gi, '.avif'))}
        type="image/avif"
        sizes={sizes}
      />
      <source 
        srcSet={webpSrc.replace(src, defaultSrcSet.replace(/\.(jpg|jpeg|png)/gi, '.webp'))}
        type="image/webp" 
        sizes={sizes}
      />
      
      {/* Fallback for older browsers */}
      <img
        src={src}
        srcSet={defaultSrcSet}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
      
      {hasError && (
        <div className="bg-gray-200 flex items-center justify-center text-gray-500 text-sm min-h-[200px]">
          Image not available
        </div>
      )}
    </picture>
  );
};