import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { AutoplayVideo, ZoomableImage, SymTLDR } from "./shared";

const showcaseItems = [
  {
    title: "Doctor Dashboard",
    assetId: "product-doctor-dashboard-annotated.png",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7f6ce8e30fe24e908ce2cf7ed40f57cf",
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
    assetId: "product-nurse-handoff-annotated.png",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fef3007b397f24b469323c67afd2d990f",
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
    assetId: "product-admin-compliance-annotated.png",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F03ee29b764ae4546bce7c12b2d2398c6",
    caption:
      "Compliance dashboard replacing manual Excel reporting workflows.",
    callouts: [
      "SLA Compliance Tracker — Real-time rates by facility and provider.",
      "Auto-Generated Reports — Replaces manual Excel export workflow.",
      "Demand Forecasting — AI-assisted predictions replacing guesswork.",
      "Audit Trail Browser — Searchable log of every AI decision.",
    ],
  },
];

export default function ProductShowcase() {
  const headingRef = useScrollReveal();

  return (
    <section
      id="showcase"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
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

      <p className="text-[15px] text-sym-body leading-relaxed max-w-[720px] mb-8">
        Three role-specific views share a single data layer. A mobile on-call view rounds out the platform for corridor use.
      </p>

      <div className="space-y-10">
        {showcaseItems.map((item) => (
          <ShowcaseCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function ShowcaseCard({
  title,
  assetId,
  videoSrc,
  imageSrc,
  caption,
  callouts,
}: {
  title: string;
  assetId: string;
  videoSrc?: string;
  imageSrc?: string;
  caption: string;
  callouts: string[];
}) {
  return (
    <div className="bg-sym-card rounded-xl border border-sym-card-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-sym-heading mb-4">{title}</h3>

      {imageSrc && (
        <ZoomableImage src={imageSrc} alt={caption} caption={caption} />
      )}
      {videoSrc && !imageSrc && (
        <AutoplayVideo src={videoSrc} caption={caption} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
        {callouts.map((callout, i) => {
          const [label, ...rest] = callout.split(" — ");
          const description = rest.join(" — ");
          return (
            <div key={i} className="flex items-start justify-start gap-2.5 bg-sym-bg-primary rounded-lg p-2.5">
              <span className="w-6 h-6 rounded-full bg-sym-blue/10 text-sym-blue flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-sym-heading">{label}</p>
                {description && (
                  <p className="text-xs text-sym-muted leading-relaxed">{description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
