import {
  Image,
  FileImage,
  BarChart3,
  GitBranch,
  Workflow,
  Users,
} from "lucide-react";

interface VisualPlaceholderProps {
  title: string;
  description: string;
  dimensions?: string;
  aspectRatio?: string;
  type?:
    | "image"
    | "diagram"
    | "chart"
    | "map"
    | "wireframe"
    | "screenshot"
    | "grid"
    | "storyboard";
  altText?: string;
  className?: string;
}

const iconMap = {
  image: FileImage,
  diagram: GitBranch,
  chart: BarChart3,
  map: Workflow,
  wireframe: FileImage,
  screenshot: Image,
  grid: Users,
  storyboard: Workflow,
};

export function VisualPlaceholder({
  title,
  description,
  dimensions,
  aspectRatio = "16:9",
  type = "image",
  altText,
  className = "",
}: VisualPlaceholderProps) {
  const Icon = iconMap[type] || FileImage;

  return (
    <div
      className={`bg-[#1A1A1A]/50 rounded-[20px] border-2 border-dashed border-[#00D4FF]/30 p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:border-[#00D4FF]/50 transition-all duration-300 ${className}`}
      style={{
        aspectRatio: aspectRatio.replace(":", "/"),
        minHeight: "300px",
      }}
    >
      <div className="w-16 h-16 bg-[#00D4FF]/10 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[#00D4FF]" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
        📊 {title}
      </h3>

      <p className="text-sm text-[#9CA3AF] mb-4 max-w-lg leading-relaxed">
        {description}
      </p>

      {dimensions && (
        <div className="inline-block bg-[#00D4FF]/10 px-4 py-2 rounded-lg mb-2">
          <p className="text-xs font-mono text-[#00D4FF]">{dimensions}</p>
        </div>
      )}

      {altText && (
        <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
          <p className="text-xs text-[#6B7280] italic">
            <strong className="text-[#9CA3AF]">Alt Text:</strong> {altText}
          </p>
        </div>
      )}

      <div className="mt-6 flex items-center gap-2 text-xs text-[#6B7280]">
        <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></span>
        Visual Asset Placeholder
      </div>
    </div>
  );
}
