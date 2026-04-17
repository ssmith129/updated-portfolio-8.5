import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";

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
      <header className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
        <span className="inline-block bg-gradient-to-r from-sym-blue to-sym-green text-white px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide uppercase mb-4">
          Healthcare AI Platform
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-sym-heading leading-tight lg:leading-[65px] tracking-[-0.03em] mb-4 max-w-none">
          Turning Hospital Chaos into Clinical Clarity
        </h1>
        <p className="text-lg sm:text-xl text-sym-body leading-[1.6] max-w-[820px] mb-5">
          0-to-1 AI hospital coordination platform. Unified EHR, Excel, and email into one trusted system. 6-week pilot, 3 facilities, 65 staff.
        </p>

        {/* Headline stat strip */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5">
          <HeroStat value="40%" label="faster triage" />
          <span className="text-sym-card-border-hover">·</span>
          <HeroStat value="89%" label="triage accuracy" />
          <span className="text-sym-card-border-hover">·</span>
          <HeroStat value="35%" label="less admin overhead" />
        </div>

        {/* CTA + meta single row */}
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <a
            href="https://symplify-v4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sym-blue to-sym-green text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            View Live Platform
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <div className="flex items-center gap-1.5 text-sym-label text-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>4 min read</span>
          </div>
        </div>

        <p className="text-sm text-sym-muted leading-relaxed mb-8">
          Founding Product Designer · Jan – Aug 2024 · Team of 7 (2 Eng, 1 PM, 4 Clinical Advisors)
        </p>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 mb-6">
        <a
          href="https://symplify-v4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-2xl border border-sym-card-border transition-all duration-500 hover:shadow-2xl hover:scale-[1.008] cursor-pointer group relative overflow-hidden hover:border-sym-blue/20"
          aria-label="Open Symplify live platform in a new tab"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fa365aabaf0c94e5ea46663d1d7bd4cb3"
            alt="Symplify hospital management platform — unified dashboard showing AI-augmented triage, scheduling, and compliance views"
            loading="eager"
            className="w-full aspect-video object-cover object-center rounded-2xl"
          />
        </a>
      </div>
    </>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sym-blue to-sym-green bg-clip-text text-transparent leading-none">
        {value}
      </span>
      <span className="text-sm text-sym-body">{label}</span>
    </span>
  );
}
