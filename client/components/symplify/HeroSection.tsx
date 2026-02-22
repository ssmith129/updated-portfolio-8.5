import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Briefcase, FlaskConical } from "lucide-react";

interface HeroSectionProps {
  onPreviewOpen: () => void;
}

export default function HeroSection({ onPreviewOpen }: HeroSectionProps) {
  return (
    <>
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[16px] font-medium text-[#64748B] hover:text-[#3B82F6] transition-all duration-300 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <span className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide uppercase mb-6">
          Healthcare AI Platform
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-[#0F172A] leading-tight lg:leading-[70px] tracking-[-0.03em] mb-[29px] max-w-[900px] h-auto grow-0">
          Turning Hospital Chaos into Clinical Clarity
        </h1>
        <p className="text-lg sm:text-xl text-[#475569] leading-[1.6] max-w-[720px] mb-10">
          I led end-to-end design for a 0-to-1 AI-enhanced hospital management
          platform that unified fragmented EHR, Excel, and email workflows into
          a single, trustworthy system for 65 clinical staff across 3 facilities.
        </p>

        {/* Meta badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Badge icon={<Briefcase className="w-3.5 h-3.5" />} label="Founding Product Designer" />
          <Badge icon={<Calendar className="w-3.5 h-3.5" />} label="Jan - Aug 2024" />
          <Badge icon={<Users className="w-3.5 h-3.5" />} label="2 Engineers, 1 PM, 4 Clinical Advisors" />
          <Badge icon={<FlaskConical className="w-3.5 h-3.5" />} label="3 Facilities  ·  65 Staff  ·  6-Week Pilot" />
        </div>

        {/* Scope & Role */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px]">
          <div>
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-1">My Role</p>
            <p className="text-[15px] text-[#334155] leading-relaxed">
              Research, interaction design, prototyping, design system, and validation
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-1">Scope</p>
            <p className="text-[15px] text-[#334155] leading-relaxed">
              3 pilot facilities, 65 clinical staff, 6-week evaluation period
            </p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 mb-6">
        <button
          onClick={onPreviewOpen}
          className="w-full aspect-[1.85] rounded-2xl flex items-center justify-center border border-[#E2E8F0] transition-all duration-300 hover:shadow-xl hover:scale-[1.005] cursor-pointer group relative overflow-hidden"
          aria-label="Open Symplify platform preview"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 bg-white/90 backdrop-blur-sm text-[#1E293B] rounded-xl px-6 py-3 text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
            View Live Platform
          </span>
        </button>
      </div>
    </>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E2E8F0] text-[13px] font-medium text-[#475569] shadow-sm">
      {icon}
      {label}
    </span>
  );
}
