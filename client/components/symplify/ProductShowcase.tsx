import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { SymTLDR, AssetPlaceholder, AutoplayVideo } from "./shared";

const showcaseItems = [
  {
    title: "Doctor Dashboard",
    assetId: "product-doctor-dashboard-annotated.png",
    videoSrc: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2Fa5d23882d1ee4e14bace95c1808a2bbe?alt=media&token=bdbf1560-14c0-4c93-a0a6-526cfd6bfe2d&apiKey=ba69a23156414a589de97341511272c9",
    caption:
      "Doctor's primary view: AI-augmented triage with full transparency. Every recommendation is explainable, overridable, and audit-logged.",
    callouts: [
      "AI Triage Queue — Messages pre-sorted by clinical risk. High/Medium/Low badges with hover reasoning.",
      "SLA Countdown Timers — Compliance deadlines surfaced in context, not buried in email.",
      "Patient Context Panel — 1-click access to relevant history without opening the EHR.",
      "Quick Actions — Accept/Override/Escalate with keyboard shortcuts for power users.",
    ],
  },
  {
    title: "Nurse Shift Handoff View",
    assetId: "product-nurse-handoff-annotated.png",
    videoSrc: "https://cdn.builder.io/o/assets%2Fba69a23156414a589de97341511272c9%2F2598beb4dba04408982761d22d7d5189?alt=media&token=c0060f50-bc26-467a-bd3d-d2ebc1cb5fa4&apiKey=ba69a23156414a589de97341511272c9",
    caption:
      "Nurse shift handoff: structured visibility replaced 20-minute phone calls. Handoff-related missed items dropped from 18% baseline.",
    callouts: [
      "Handoff Status Board — Visual state of every in-progress item at shift change.",
      "Unresolved Flags — Items that need immediate attention are surfaced at the top.",
      "Handoff Notes — Structured format replaces the 'call the previous shift at home' workflow.",
      "Alert Tier Summary — At-a-glance view of what's critical vs. informational.",
    ],
  },
  {
    title: "Admin Compliance Dashboard",
    assetId: "product-admin-compliance-annotated.png",
    caption:
      "Admin compliance dashboard: replaced 4.4 hrs/week of manual Excel work. 15% of admins still export to Excel for board reports — a change management gap we're addressing in v2.",
    callouts: [
      "SLA Compliance Tracker — Real-time compliance rates by facility, department, and provider.",
      "Auto-Generated Reports — Replaces the manual Excel export + monthly report build workflow.",
      "Demand Forecasting — AI-assisted demand predictions replacing 'guesswork'.",
      "Audit Trail Browser — Searchable log of every AI recommendation, override, and outcome.",
    ],
  },
  {
    title: "Mobile Triage (On-Call)",
    assetId: "product-mobile-triage-annotated.png",
    caption:
      "Mobile on-call view: critical alerts only, designed for 1-thumb operation in clinical corridors. Offline-first architecture caches pending actions for rural sites.",
    callouts: [
      "Critical Alerts Only — FYI and Review items are suppressed on mobile.",
      "1-Thumb Operation — Accept/Override actions sized for one-handed use (44×44px touch targets).",
      "Offline Indicator — Shows sync status for rural/intermittent connectivity sites.",
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
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6">
          Product Showcase
        </h2>
      </div>

      <SymTLDR>
        The production platform serves three distinct user roles through a shared
        data layer. Each view surfaces only the information and actions relevant
        to that role's workflow, reducing cognitive overhead while maintaining
        cross-team visibility.
      </SymTLDR>

      <div className="space-y-16">
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
    <div className="bg-sym-card rounded-2xl border border-sym-card-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-sym-heading mb-5">{title}</h3>

      {videoSrc ? (
        <AutoplayVideo src={videoSrc} caption={caption} />
      ) : (
        <AssetPlaceholder id={assetId} caption={caption} aspectRatio="16/9" />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        {callouts.map((callout, i) => {
          const [label, ...rest] = callout.split(" — ");
          const description = rest.join(" — ");
          return (
            <div key={i} className="flex items-start gap-3 bg-sym-bg-primary rounded-lg p-3">
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
