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

const detailedMethods = [
  {
    method: "Contextual Inquiry",
    sample: "18 staff, 3 facilities",
    duration: "2 weeks",
    focus: "Task flows, workarounds, pain points",
    bias: "Rotated observers, recorded sessions",
  },
  {
    method: "Task Logging",
    sample: "3,000+ tasks captured",
    duration: "2 weeks continuous",
    focus: "Frequency, urgency, time-to-complete",
    bias: "Automated logging, no self-reporting",
  },
  {
    method: "Semi-Structured Interviews",
    sample: "14 participants (5 MDs, 5 RNs, 4 admins)",
    duration: "45-60 min each",
    focus: "Decision-making, trust, frustrations",
    bias: "Standardized guide, independent coding",
  },
  {
    method: "Message Analysis",
    sample: "1,200 internal messages",
    duration: "3-month archive",
    focus: "Urgency patterns, miscommunication",
    bias: "De-identified, dual-coded for severity",
  },
  {
    method: "Competitive Benchmarking",
    sample: "4 platforms (Epic, Cerner, Allscripts, ezEMRx)",
    duration: "1 week",
    focus: "AI transparency, cognitive load, cost",
    bias: "Standardized evaluation criteria",
  },
];

const competitiveRows = [
  { dim: "Implementation Cost", values: ["$$$$$", "$$$$", "$$$", "$$"], highlight: 3 },
  { dim: "AI Transparency", values: ["Opaque", "Opaque", "Minimal", "Full audit trail"], highlight: 3 },
  { dim: "Cognitive Load", values: ["High", "High", "Medium", "Low — tiered alerts"], highlight: 3 },
  { dim: "Legacy Integration", values: ["Replace", "Replace", "Partial", "Read-only layer"], highlight: 3 },
  { dim: "Public Health Focus", values: ["No", "No", "Limited", "Purpose-built"], highlight: 3 },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
        Discovery
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-10">
        Research
      </h2>

      {/* Methods strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {methods.map((m) => (
          <div
            key={m.label}
            className="flex items-start gap-3 bg-white rounded-xl border border-[#E2E8F0] px-4 py-4 shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6] flex-shrink-0 mt-0.5">
              {m.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                {m.label}
              </p>
              <p className="text-xs text-[#94A3B8]">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Research Methodology (collapsible) */}
      <details className="mb-14 group">
        <summary className="cursor-pointer text-sm font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors flex items-center gap-2 mb-4">
          <span className="transition-transform group-open:rotate-90">▶</span>
          View Full Research Methodology
        </summary>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#E2E8F0]">
                {["Method", "Sample", "Duration", "Focus", "Bias Controls"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-3 text-[#64748B] font-semibold uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="text-[#334155]">
              {detailedMethods.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors"
                >
                  <td className="py-3 px-3 font-semibold">{row.method}</td>
                  <td className="py-3 px-3">{row.sample}</td>
                  <td className="py-3 px-3">{row.duration}</td>
                  <td className="py-3 px-3">{row.focus}</td>
                  <td className="py-3 px-3">{row.bias}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      {/* Insight cards */}
      <div className="space-y-6 mb-14">
        {insights.map((ins) => (
          <div
            key={ins.number}
            className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div
                className="md:w-20 flex items-center justify-center py-4 md:py-0"
                style={{ backgroundColor: ins.bgColor }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: ins.color }}
                >
                  {ins.number}
                </span>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {ins.title}
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-3">
                  {ins.body}
                </p>
                <p
                  className="text-sm font-semibold italic"
                  style={{ color: ins.color }}
                >
                  {ins.principle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Analysis Table */}
      <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8">
        <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-3">
          Competitive Landscape
        </p>
        <p className="text-[15px] text-[#334155] leading-relaxed max-w-[680px] mb-6">
          Benchmarked market leaders to identify Symplify's strategic wedge:{" "}
          <span className="font-semibold text-[#0F172A]">
            cognitive load reduction through trustworthy AI
          </span>
          .
        </p>

        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#E2E8F0]">
                <th className="text-left py-3 px-3 text-[#64748B] font-semibold uppercase tracking-wider">
                  Dimension
                </th>
                {["Epic", "Cerner", "Allscripts", "Symplify"].map((name) => (
                  <th
                    key={name}
                    className={`text-center py-3 px-3 font-semibold uppercase tracking-wider ${
                      name === "Symplify"
                        ? "text-[#3B82F6] bg-[#EFF6FF] rounded-t-lg"
                        : "text-[#64748B]"
                    }`}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#334155]">
              {competitiveRows.map((row) => (
                <tr
                  key={row.dim}
                  className="border-b border-[#F1F5F9] hover:bg-white/60 transition-colors"
                >
                  <td className="py-3 px-3 font-semibold text-[#0F172A]">
                    {row.dim}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={`${row.dim}-${i}`}
                      className={`text-center py-3 px-3 ${
                        i === row.highlight
                          ? "font-semibold text-[#3B82F6] bg-[#EFF6FF]/50"
                          : ""
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
