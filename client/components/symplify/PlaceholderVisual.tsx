import { ImageIcon } from "lucide-react";

interface PlaceholderVisualProps {
  label: string;
  description?: string;
  aspectRatio?: string;
  className?: string;
}

export default function PlaceholderVisual({
  label,
  description,
  aspectRatio = "aspect-[16/9]",
  className = "",
}: PlaceholderVisualProps) {
  return (
    <div
      className={`${aspectRatio} w-full rounded-2xl border-2 border-dashed border-[#CBD5E1] bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] flex flex-col items-center justify-center gap-3 px-6 text-center transition-colors duration-300 hover:border-[#93C5FD] hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE] ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center">
        <ImageIcon className="w-6 h-6 text-[#3B82F6]" />
      </div>
      <p className="text-sm font-semibold text-[#475569] tracking-wide uppercase">
        {label}
      </p>
      {description && (
        <p className="text-xs text-[#94A3B8] max-w-[320px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
