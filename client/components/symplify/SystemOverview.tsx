import { Monitor, Tablet, Smartphone } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { SymTLDR, AssetPlaceholder, ZoomableImage } from "./shared";

const platforms = [
  {
    icon: <Monitor className="w-5 h-5 text-sym-blue" />,
    context: "Desktop",
    focus: "Multi-module dashboard",
    details: "Keyboard shortcuts, dense tables, 3-column layout",
  },
  {
    icon: <Tablet className="w-5 h-5 text-sym-purple" />,
    context: "Tablet",
    focus: "Bedside use",
    details: "44x44px touch zones, offline caching, simplified triage",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-sym-green" />,
    context: "Mobile",
    focus: "On-call triage",
    details: "Critical alerts only, haptic feedback, 1-thumb operation",
  },
];

const dsFeatures = [
  "WCAG 2.2 AA baked into design tokens — color-blind safe badges, keyboard navigation, screen reader support",
  "8pt spacing grid for dense clinical data layouts",
  "Color tokens optimized for light mode and low-light clinical environments",
  "Keyboard shortcuts for power users — nurses requested tab navigation through triage queues",
];

const legacySystems = [
  { label: "EHR System", sub: "Patient records", color: "#EF4444", bg: "#FEF2F2", border: "#FECACA" },
  { label: "Email", sub: "Communication", color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" },
  { label: "Excel", sub: "Scheduling & logs", color: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE" },
];

const modules = ["AI Triage Engine", "Conflict Detection", "Compliance Monitor", "Alert Prioritization"];

const roleViews = [
  { label: "Doctor View", sub: "Triage + scheduling", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
  { label: "Nurse View", sub: "Alerts + handoffs", color: "#10B981", bg: "#F0FDF4", border: "#BBF7D0" },
  { label: "Admin View", sub: "Compliance + reporting", color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
];

export default function SystemOverview() {
  const archRef = useScrollReveal();
  const dsRef = useScrollReveal();
  const platformRef = useStaggerReveal();

  return (
    <section
      id="system"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      {/* Architecture */}
      <div className="mb-20">
        <div ref={archRef} className="reveal">
          <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
            Technical Foundation
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6 max-w-[720px]">
            System Architecture
          </h2>
        </div>

        <SymTLDR>
          Symplify acts as a read-only integration layer — extending legacy EHR, Excel,
          and email systems through AI-powered recommendation rather than replacement.
          The design system was built around WCAG 2.2 AA compliance, 8pt grid, and
          role-based information density.
        </SymTLDR>

        <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-8">
          Symplify acts as an integration layer — not replacing legacy systems,
          but making them work together through a read-only recommendation layer.
        </p>

        {/* Coded Architecture Diagram */}
        <div className="bg-sym-card rounded-2xl border border-sym-card-border p-6 sm:p-8 mb-8 shadow-sm overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Layer 1: Legacy Systems */}
            <div className="flex justify-center gap-4 mb-4">
              {legacySystems.map((sys) => (
                <div
                  key={sys.label}
                  className="flex-1 rounded-lg border-2 border-dashed px-4 py-3 text-center"
                  style={{ borderColor: sys.border, backgroundColor: sys.bg }}
                >
                  <p className="text-xs font-bold" style={{ color: sys.color }}>{sys.label}</p>
                  <p className="text-[10px] text-sym-muted">{sys.sub}</p>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-sym-card-border-hover" />
                <span className="text-xs text-sym-label">↓ Read-only data flow ↓</span>
                <div className="w-px h-4 bg-sym-card-border-hover" />
              </div>
            </div>

            {/* Layer 2: Symplify Translation Layer */}
            <div className="bg-gradient-to-r from-sym-bg-blue to-sym-bg-green rounded-xl border-2 border-sym-blue/30 px-6 py-5 mb-4">
              <p className="text-center text-xs font-bold text-sym-blue uppercase tracking-widest mb-3">
                Symplify Translation Layer
              </p>
              <div className="flex justify-center gap-3">
                {modules.map((mod) => (
                  <div key={mod} className="bg-sym-card rounded-lg border border-[#DBEAFE] px-3 py-2 text-center flex-1">
                    <p className="text-[11px] font-semibold text-[#1E40AF]">{mod}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-sym-card-border-hover" />
                <span className="text-xs text-sym-label">↓ Role-based views ↓</span>
                <div className="w-px h-4 bg-sym-card-border-hover" />
              </div>
            </div>

            {/* Layer 3: User Dashboards */}
            <div className="flex justify-center gap-4">
              {roleViews.map((view) => (
                <div
                  key={view.label}
                  className="flex-1 rounded-lg border-2 px-4 py-3 text-center"
                  style={{ borderColor: view.border, backgroundColor: view.bg }}
                >
                  <p className="text-xs font-bold" style={{ color: view.color }}>{view.label}</p>
                  <p className="text-[10px] text-sym-muted">{view.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "No direct EHR writes", detail: "Recommendation layer, not automation" },
            { label: "State-by-state compliance", detail: "Configurable logging depth" },
            { label: "Offline-first mobile", detail: "Intermittent rural connectivity" },
          ].map((c) => (
            <div key={c.label} className="bg-sym-bg-primary rounded-xl border border-sym-card-border px-5 py-4">
              <p className="text-sm font-semibold text-sym-heading mb-1">{c.label}</p>
              <p className="text-xs text-sym-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design System */}
      <div>
        <div ref={dsRef} className="reveal">
          <p className="text-xs font-semibold text-sym-green uppercase tracking-widest mb-2">
            Foundation
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6">
            Design System
          </h2>
        </div>
        <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-8">
          Built a modular system emphasizing trust, transparency, and accessibility.
        </p>

        {/* Design System Specimen */}
        <AssetPlaceholder
          id="design-system-specimen.png"
          caption="Design system specimen: WCAG 2.2 AA baked into tokens. Color-blind safe confidence badges, keyboard navigation, and screen reader support from day one."
        />

        {/* Component detail screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ZoomableImage
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F1d54fbd1ec6141b883b33697b1c4b107"
            alt="Confidence badge variants showing High, Med, and Low tiers with color-blind safe pattern and label redundancy, plus clinician acceptance rates"
            caption="Confidence badge variants. Color-blind safe versions use pattern + label redundancy."
          />
          <AssetPlaceholder
            id="ds-alert-tier-cards.png"
            caption="Alert tier hierarchy. Critical items demand action; FYI items collapse to reduce cognitive load."
            aspectRatio="3/2"
          />
        </div>

        <ul className="space-y-3 mb-10 max-w-[680px]">
          {dsFeatures.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-sym-body leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-sym-green flex-shrink-0 mt-2" />
              {f}
            </li>
          ))}
        </ul>

        {/* Platform grid */}
        <div ref={platformRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <div
              key={p.context}
              className="reveal bg-sym-card rounded-xl border border-sym-card-border p-5 shadow-sm card-lift group"
            >
              <div className="flex items-center gap-2 mb-3">
                {p.icon}
                <p className="text-sm font-semibold text-sym-heading">{p.context}</p>
              </div>
              <p className="text-sm font-medium text-sym-body mb-1">{p.focus}</p>
              <p className="text-xs text-sym-muted leading-relaxed">{p.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
