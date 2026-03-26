import { useState } from "react";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { ExternalLink, Stethoscope, HeartPulse, ShieldCheck } from "lucide-react";
import { SymTLDR } from "./shared";

const showcaseItems = [
  {
    title: "Doctor Dashboard",
    shortLabel: "Doctor",
    icon: Stethoscope,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7f6ce8e30fe24e908ce2cf7ed40f57cf",
    prototypeUrl: "https://symplify-v4.netlify.app/doctor/doctor-dashboard",
    caption:
      "AI-augmented triage with full transparency. Every recommendation is explainable, overridable, and audit-logged.",
    callouts: [
      "Patient Acuity Overview — Risk-stratified patient list replacing manual triage. Critical/Urgent/Semi-Urgent tiers reduced cognitive overhead ~40%.",
      "Predictive Clinical Alerts — AI-driven live monitoring with confidence scores. 89% triage accuracy with <15% override guardrail maintained.",
      "Smart Insights Panel — Demand forecasting and scheduling optimization. Replaced manual Excel workflows for clinical operations.",
      "AI Drug Interaction Checker — Real-time cross-referencing with 'always verify' disclaimer — trust through honesty, not black-box automation.",
      "Shift Handoff Summary — AI-generated briefing replacing 20-min phone calls at shift change. Addresses the 18% missed handoff gap.",
      "Unified Message Inbox — Single hub replacing 3 fragmented inboxes. Role-based filtering with unread prioritization cut handling time 35%.",
    ],
  },
  {
    title: "Nurse Shift Handoff View",
    shortLabel: "Nurse",
    icon: HeartPulse,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fef3007b397f24b469323c67afd2d990f",
    prototypeUrl: "https://symplify-v4.netlify.app/nurse/nurse-shift-handoff",
    caption:
      "Structured visibility replaced 20-minute phone calls at shift change.",
    callouts: [
      "Shift Context Header — Clear temporal framing — shift time, unit, and outgoing/incoming nurse names eliminate ambiguity at handoff.",
      "AI Audio Briefing — One-tap AI-generated voice summary for hands-free corridor use — designed for transitions between shifts.",
      "AI-Generated Summary — Structured census of patients, key concerns, alerts, and pending tasks — replaces unstructured phone-call handoffs.",
      "Priority Filter Tabs — Quick toggle between all patients and critical-only. Reduces alert fatigue by letting nurses focus on what matters first.",
      "Patient Acuity Cards — Color-coded severity badges, vitals trends, pending tasks, and status notes — structured format prevents missed handoffs.",
      "Acknowledge Handoff — Explicit acceptance creates HIPAA-compliant audit trail. Progress bar (0/7 reviewed) ensures no patient is skipped.",
    ],
  },
  {
    title: "Admin Compliance Dashboard",
    shortLabel: "Admin",
    icon: ShieldCheck,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F03ee29b764ae4546bce7c12b2d2398c6",
    prototypeUrl:
      "https://symplify-v4.netlify.app/admin/admin-compliance-dashboard",
    caption:
      "Compliance dashboard replacing manual Excel reporting workflows.",
    callouts: [
      "Attention Needed Alert Bar — Surfaced compliance risks (HIPAA violations, expiring credentials, sentinel events, overdue trainings) replace buried email alerts. Addresses the 14.2% SLA breach risk from research.",
      "Section Navigation — Jump-to tabs for Compliance & Reporting, Operations & Auditing, Credentials & HIPAA, Training, and Incidents — giving admins contextual navigation instead of one flat alert list.",
      "SLA Compliance Tracker — Real-time compliance rates by facility with trend indicators and risk status. Live monitoring replaced monthly manual Excel exports, improving SLA compliance from 72% to 85.3%.",
      "Auto-Generated Reports — Scheduled HIPAA summaries, SLA performance reports, and credential digests replace the manual export workflow. Addresses the 12.5 hrs/week admin overhead reduced to 8.1 hrs.",
      "Demand Forecasting — AI-assisted patient volume predictions with confidence intervals replacing guesswork. Scenario modeling (daily/weekly/monthly) gives operations managers lead time to staff appropriately.",
      "Audit Trail Browser — Searchable, filterable log of every AI recommendation, manual override, access event, and config change. Provides the SOC 2 and state-level auditability required by hospital buyers.",
    ],
  },
];

export default function ProductShowcase() {
  const headingRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const active = showcaseItems[activeTab];

  return (
    <section
      id="showcase"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-green uppercase tracking-widest mb-2">
          Final Product
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 heading-underline">
          Product Showcase
        </h2>
      </div>

      <SymTLDR>
        The production platform serves three distinct user roles through a shared
        data layer. Each view surfaces only the information and actions relevant
        to that role's workflow, reducing cognitive overhead while maintaining
        cross-team visibility.
      </SymTLDR>

      <p className="text-[15px] text-sym-body leading-relaxed max-w-[720px] mb-6">
        Three role-specific views share a single data layer. Click each tab to
        explore the interface designed for that role.
      </p>

      {/* Tab bar */}
      <TabBar
        items={showcaseItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Active panel */}
      <ShowcasePanel key={activeTab} item={active} />
    </section>
  );
}

/* ─── Tab bar ─── */
function TabBar({
  items,
  activeTab,
  onTabChange,
}: {
  items: typeof showcaseItems;
  activeTab: number;
  onTabChange: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-5 border-b border-sym-card-border pb-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        const isActive = activeTab === i;
        return (
          <button
            key={item.title}
            onClick={() => onTabChange(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-sym-blue to-sym-green text-white shadow-sm"
                : "bg-sym-card text-sym-muted border border-sym-card-border hover:border-sym-blue/30 hover:text-sym-blue"
            }`}
          >
            <Icon className="w-4 h-4" />
            {item.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

/* ─── Panel for active tab ─── */
function ShowcasePanel({ item }: { item: (typeof showcaseItems)[number] }) {
  return (
    <div className="bg-sym-card rounded-xl border border-sym-card-border p-5 sm:p-6 shadow-sm animate-in fade-in-0 duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold text-sym-heading">{item.title}</h3>
        {item.prototypeUrl && (
          <a
            href={item.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-sym-blue to-sym-green rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:brightness-110 self-start"
          >
            View Prototype
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Screenshot with hover overlay */}
      <PrototypeImage
        src={item.imageSrc}
        alt={item.caption}
        caption={item.caption}
        prototypeUrl={item.prototypeUrl}
      />

      {/* Annotation callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
        {item.callouts.map((callout, i) => {
          const [label, ...rest] = callout.split(" — ");
          const description = rest.join(" — ");
          return (
            <div
              key={i}
              className="flex items-start justify-start gap-2.5 bg-sym-bg-primary rounded-lg p-2"
            >
              <span className="w-6 h-6 rounded-full bg-sym-blue/10 text-sym-blue flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-sym-heading">
                  {label}
                </p>
                {description && (
                  <p className="text-xs text-sym-muted leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Image with prototype link overlay ─── */
function PrototypeImage({
  src,
  alt,
  caption,
  prototypeUrl,
}: {
  src: string;
  alt: string;
  caption?: string;
  prototypeUrl?: string;
}) {
  const Wrapper = prototypeUrl ? "a" : "div";
  const linkProps = prototypeUrl
    ? { href: prototypeUrl, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <figure className="mb-2">
      <Wrapper
        {...linkProps}
        className="group relative block w-full rounded-xl overflow-hidden border border-sym-card-border shadow-sm hover:shadow-md hover:border-sym-card-border-hover transition-all duration-300"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto block"
        />
      </Wrapper>
      {caption && (
        <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
