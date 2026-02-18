import { Eye, Search, MessageSquare, BarChart3 } from "lucide-react";

const methods = [
  { icon: <Eye className="w-4 h-4" />, label: "Shadowed 18 staff", detail: "across 3 facilities" },
  { icon: <BarChart3 className="w-4 h-4" />, label: "Logged 3,000+ tasks", detail: "over 2 weeks" },
  { icon: <MessageSquare className="w-4 h-4" />, label: "14 semi-structured interviews", detail: "doctors, nurses, admins" },
  { icon: <Search className="w-4 h-4" />, label: "Analyzed 1,200 messages", detail: "for urgency patterns" },
];

const insights = [
  {
    number: "01",
    title: "Augmentation, Not Automation",
    body: '60% of clinical time was spent on coordination overhead. But when asked "Should we automate triage?", 67% said no. Staff wanted tools that made them faster — not black-box decisions.',
    principle: "AI transparency > AI autonomy",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
  },
  {
    number: "02",
    title: '"Urgent" Was Meaningless',
    body: "40% of messages were marked urgent by senders, but only 23% actually required same-day action. No shared triage model existed across roles or sites.",
    principle: "Need a shared prioritization framework",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
  {
    number: "03",
    title: "Compliance Was a Visibility Problem",
    body: "Staff weren't ignoring deadlines — alerts were buried in unfiltered email, disconnected from patient records, and lacked contextual urgency.",
    principle: "Surface the right info at the right time",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10">
      <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
        Discovery
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-10">
        Research
      </h2>

      {/* Methods strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
        {methods.map((m) => (
          <div
            key={m.label}
            className="flex items-start gap-3 bg-white rounded-xl border border-[#E2E8F0] px-4 py-4 shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6] flex-shrink-0 mt-0.5">
              {m.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">{m.label}</p>
              <p className="text-xs text-[#94A3B8]">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Insight cards */}
      <div className="space-y-6 mb-14">
        {insights.map((ins) => (
          <div
            key={ins.number}
            className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Number accent */}
              <div
                className="md:w-20 flex items-center justify-center py-4 md:py-0"
                style={{ backgroundColor: ins.bgColor }}
              >
                <span className="text-2xl font-bold" style={{ color: ins.color }}>
                  {ins.number}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1 p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{ins.title}</h3>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-3">{ins.body}</p>
                <p className="text-sm font-semibold italic" style={{ color: ins.color }}>
                  {ins.principle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Landscape */}
      <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8">
        <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-3">
          Competitive Landscape
        </p>
        <p className="text-[15px] text-[#334155] leading-relaxed max-w-[680px]">
          Benchmarked Epic, Cerner, and Athenahealth. Found a consistent pattern:
          endless features, but no system addressed{" "}
          <span className="font-semibold text-[#0F172A]">cognitive load reduction</span>.
          AI was opaque — users couldn't see how decisions were made. This opened
          the strategic wedge: Symplify would be the system clinicians actually
          trust to <em>think with them</em>.
        </p>
      </div>
    </section>
  );
}
