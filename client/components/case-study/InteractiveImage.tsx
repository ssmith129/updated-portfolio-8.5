interface InteractiveImageProps {
  src: string;
  alt: string;
  caption?: string;
  accentColor?: string;
  className?: string;
}

export function InteractiveImage({
  src,
  alt,
  caption,
  className,
}: InteractiveImageProps) {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      {caption && (
        <p className="text-sm text-[#A1A1A1] mt-2 text-center">{caption}</p>
      )}
    </div>
  );
}
