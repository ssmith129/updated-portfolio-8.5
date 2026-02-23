import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Briefcase, FlaskConical, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[16px] font-medium text-sym-muted hover:text-sym-blue transition-all duration-300 group"
          aria-label="Return to case studies overview page"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <span className="inline-block bg-gradient-to-r from-sym-blue to-sym-green text-white px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide uppercase mb-6">
          Healthcare AI Platform
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-sym-heading leading-tight lg:leading-[65px] tracking-[-0.03em] mb-6 max-w-[900px]">
          Turning Hospital Chaos into Clinical Clarity
        </h1>
        <p className="text-lg sm:text-xl text-sym-body leading-[1.6] max-w-[720px] mb-4">
          I led end-to-end design for a 0-to-1 AI-enhanced hospital management
          platform that unified fragmented EHR, Excel, and email workflows into
          a single, trustworthy system — reducing triage time by 40% across 3
          facilities and 65 clinical staff.
        </p>

        {/* Reading time */}
        <div className="flex items-center gap-1.5 text-sym-label text-sm mb-10">
          <Clock className="w-3.5 h-3.5" />
          <span>14 min read</span>
        </div>

        {/* Meta badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Badge icon={<Briefcase className="w-3.5 h-3.5" />} label="Founding Product Designer" />
          <Badge icon={<Calendar className="w-3.5 h-3.5" />} label="Jan – Aug 2024" />
          <Badge icon={<Users className="w-3.5 h-3.5" />} label="2 Engineers, 1 PM, 4 Clinical Advisors" />
          <Badge icon={<FlaskConical className="w-3.5 h-3.5" />} label="3 Facilities · 65 Staff · 6-Week Pilot" />
        </div>

        {/* Scope & Role */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px]">
          <div>
            <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-1">My Role</p>
            <p className="text-[15px] text-sym-body leading-relaxed">
              Research, interaction design, prototyping, design system, and validation
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-sym-label uppercase tracking-widest mb-1">Scope</p>
            <p className="text-[15px] text-sym-body leading-relaxed">
              3 pilot facilities, 65 clinical staff, 6-week evaluation period
            </p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 mb-6">
        <a
          href="https://symplify-v4-live.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full aspect-[1.85] rounded-2xl flex items-center justify-center border border-sym-card-border transition-all duration-500 hover:shadow-2xl hover:scale-[1.008] cursor-pointer group relative overflow-hidden hover:border-sym-blue/20"
          aria-label="Open Symplify live platform in a new tab"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa365aabaf0c94e5ea46663d1d7bd4cb3)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 bg-white/90 backdrop-blur-sm text-sym-heading rounded-xl px-6 py-3 text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
            View Live Platform
          </span>
        </a>
      </div>
    </>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-sym-card-border text-[13px] font-medium text-sym-body shadow-sm badge-shimmer hover:border-sym-blue/30 hover:shadow-md transition-all duration-300 cursor-default">
      {icon}
      {label}
    </span>
  );
}
