interface VideoWithFallbackProps {
  src: string;
  fallbackImage?: string;
  alt: string;
  className?: string;
}

export function VideoWithFallback({
  src,
  fallbackImage,
  alt,
  className,
}: VideoWithFallbackProps) {
  return (
    <video
      src={src}
      className={className}
      controls
      poster={fallbackImage}
      aria-label={alt}
    />
  );
}
