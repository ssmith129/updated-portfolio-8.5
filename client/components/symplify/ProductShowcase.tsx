import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { AutoplayVideo, SymTLDR } from "./shared";

const showcaseItems = [
  {
    title: "Doctor Dashboard",
    assetId: "product-doctor-dashboard-annotated.png",
    videoSrc: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa5d23882d1ee4e14bace95c1808a2bbe?alt=media&token=bdbf1560-14c0-4c93-a0a6-526cfd6bfe2d&apiKey=ba69a23156414a589de97341511272c9",
    caption:
      "AI-augmented triage with full transparency. Every recommendation is explainable, overridable, and audit-logged.",
    callouts: [
      "AI Triage Queue — Messages pre-sorted by clinical risk with hover reasoning.",
      "SLA Countdown Timers — Compliance deadlines surfaced in context.",
      "Patient Context Panel — 1-click access to relevant history.",
      "Quick Actions — Accept/Override/Escalate with keyboard shortcuts.",
    ],
  },
  {
    title: "Nurse Shift Handoff View",
    assetId: "product-nurse-handoff-annotated.png",
    videoSrc: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F55230e0d553d42d19579d5a6be9e392e?alt=media&token=ef948ebe-bede-4b5b-a771-74015152aed5&apiKey=ba69a23156414a589de97341511272c9",
    caption:
      "Structured visibility replaced 20-minute phone calls at shift change.",
    callouts: [
      "Handoff Status Board — Visual state of every in-progress item.",
      "Unresolved Flags — Items needing immediate attention surfaced first.",
      "Handoff Notes — Structured format replaces phone-call handoffs.",
      "Alert Tier Summary — Critical vs. informational at a glance.",
    ],
  },
  {
    title: "Admin Compliance Dashboard",
    assetId: "product-admin-compliance-annotated.png",
    videoSrc: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Ffa5af1690b39411cbe63a63dfe3bd5c6?alt=media&token=b7e5dcfd-3c5f-4385-a1c4-e470f1f839bd&apiKey=ba69a23156414a589de97341511272c9",
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
  caption,
  callouts,
}: {
  title: string;
  assetId: string;
  videoSrc?: string;
  caption: string;
  callouts: string[];
}) {
  return (
    <div className="bg-sym-card rounded-xl border border-sym-card-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-sym-heading mb-4">{title}</h3>

      {videoSrc && (
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
