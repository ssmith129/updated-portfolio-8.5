import { Eye, Search, MessageSquare, BarChart3 } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage } from "./shared";

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
    body: 'Clinical time was 60% coordination overhead. Staff wanted tools that made them faster — not black-box decisions that removed their judgment.',
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
  { method: "Contextual Inquiry", sample: "18 staff, 3 facilities", duration: "2 weeks", focus: "Task flows, workarounds, pain points", bias: "Rotated observers, recorded sessions" },
  { method: "Task Logging", sample: "3,000+ tasks captured", duration: "2 weeks continuous", focus: "Frequency, urgency, time-to-complete", bias: "Automated logging, no self-reporting" },
  { method: "Semi-Structured Interviews", sample: "14 participants (5 MDs, 5 RNs, 4 admins)", duration: "45-60 min each", focus: "Decision-making, trust, frustrations", bias: "Standardized guide, independent coding" },
  { method: "Message Analysis", sample: "1,200 internal messages", duration: "3-month archive", focus: "Urgency patterns, miscommunication", bias: "De-identified, dual-coded for severity" },
  { method: "Competitive Benchmarking", sample: "4 platforms (Epic, Cerner, Allscripts, ezEMRx)", duration: "1 week", focus: "AI transparency, cognitive load, cost", bias: "Standardized evaluation criteria" },
];

const competitiveRows = [
  { dim: "Implementation Cost", values: ["$$$$$", "$$$$", "$$$", "$$"], highlight: 3 },
  { dim: "AI Transparency", values: ["Opaque", "Opaque", "Minimal", "Full audit trail"], highlight: 3 },
  { dim: "Cognitive Load", values: ["High", "High", "Medium", "Low — tiered alerts"], highlight: 3 },
  { dim: "Legacy Integration", values: ["Replace", "Replace", "Partial", "Read-only layer"], highlight: 3 },
  { dim: "Public Health Focus", values: ["No", "No", "Limited", "Purpose-built"], highlight: 3 },
];

export default function ResearchSection() {
  const headingRef = useScrollReveal();
  const methodsRef = useStaggerReveal();
  const insightsRef = useScrollReveal(0.1, "0px 0px -40px 0px");

  return (
    <section
      id="research"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
          Discovery
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6">
          Research
        </h2>
      </div>

      {/* Methods strip */}
      <div ref={methodsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {methods.map((m) => (
          <div
            key={m.label}
            className="reveal flex items-start gap-3 bg-sym-card rounded-xl border border-sym-card-border px-3 sm:px-4 py-3 sm:py-4 shadow-sm card-lift group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sym-bg-blue flex items-center justify-center text-sym-blue flex-shrink-0 mt-0.5 icon-hover-spin">
              {m.icon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-sym-heading leading-snug">{m.label}</p>
              <p className="text-xs text-sym-label">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Research Methodology (collapsible) */}
      <details className="mb-10 group">
        <summary className="cursor-pointer text-sm font-semibold text-sym-blue hover:text-[#2563EB] transition-colors flex items-center gap-2 mb-4">
          <span className="transition-transform group-open:rotate-90">▶</span>
          View Full Research Methodology
        </summary>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-sym-card-border">
                {["Method", "Sample", "Duration", "Focus", "Bias Controls"].map((h) => (
                  <th key={h} className="text-left py-3 px-3 text-sym-muted font-semibold uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sym-body">
              {detailedMethods.map((row) => (
                <tr key={row.method} className="border-b border-sym-divider hover:bg-sym-bg-primary transition-colors">
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

      {/* Research Process Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F8a68a9bfe226419786b54788d92c6dda"
          alt="Contextual inquiry research summary showing 18 sessions across 3 roles — Doctors, Nurses, and Admin — with key findings, quotes, and research methods"
          caption="Shadowing an RN supervisor during shift change — one of 18 contextual inquiry sessions across 3 facilities."
        />
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F20e7e48c060c4557b3bffe71920a3d88"
          alt="Task logging data showing time-on-task analysis from contextual inquiry — horizontal bar chart of where clinical staff lose time, with message triage at 64 min/day being the largest overhead"
          caption="Automated task logging captured 3,000+ clinical coordination tasks over 2 weeks — eliminating self-reporting bias."
        />
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F113a7e66969048398cab8ff948191ae1"
          alt="Interview synthesis wall showing theme extraction from 18 sessions to 4 design pillars, with raw data flowing through affinity clusters to core design principles"
          caption='Independent dual-coding of 14 semi-structured interviews. The 67% "no automation" finding emerged from this synthesis.'
        />
      </div>

      {/* Insight cards */}
      <div ref={insightsRef} className="reveal space-y-6 mb-14">
        {insights.map((ins) => (
          <div
            key={ins.number}
            className="rounded-2xl border border-sym-card-border overflow-hidden bg-sym-card shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-20 flex items-center justify-center py-4 md:py-0" style={{ backgroundColor: ins.bgColor }}>
                <span className="text-2xl font-bold" style={{ color: ins.color }}>{ins.number}</span>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-lg font-semibold text-sym-heading mb-2">{ins.title}</h3>
                <p className="text-[15px] text-sym-body leading-relaxed mb-3">{ins.body}</p>
                <p className="text-sm font-semibold italic" style={{ color: ins.color }}>{ins.principle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Analysis Table */}
      <CompetitiveAnalysis />
    </section>
  );
}

function CompetitiveAnalysis() {
  return (
    <div className="bg-sym-bg-primary rounded-2xl border border-sym-card-border p-6 sm:p-8">
      <p className="text-xs font-semibold text-sym-muted uppercase tracking-widest mb-3">
        Competitive Landscape
      </p>
      <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
        Benchmarked market leaders to identify Symplify's strategic wedge:{" "}
        <span className="font-semibold text-sym-heading">
          cognitive load reduction through trustworthy AI
        </span>.
      </p>
      <div className="overflow-x-auto -mx-2 px-2">
        <table className="w-full text-xs border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b-2 border-sym-card-border">
              <th className="text-left py-3 px-3 text-sym-muted font-semibold uppercase tracking-wider">Dimension</th>
              {["Epic", "Cerner", "Allscripts", "Symplify"].map((name) => (
                <th
                  key={name}
                  className={`text-center py-3 px-3 font-semibold uppercase tracking-wider ${
                    name === "Symplify" ? "text-sym-blue bg-sym-bg-blue rounded-t-lg" : "text-sym-muted"
                  }`}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sym-body">
            {competitiveRows.map((row) => (
              <tr key={row.dim} className="border-b border-sym-divider hover:bg-white/60 transition-colors">
                <td className="py-3 px-3 font-semibold text-sym-heading">{row.dim}</td>
                {row.values.map((val, i) => (
                  <td
                    key={`${row.dim}-${i}`}
                    className={`text-center py-3 px-3 ${
                      i === row.highlight ? "font-semibold text-sym-blue bg-sym-bg-blue/50" : ""
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
  );
}
