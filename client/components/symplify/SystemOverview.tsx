import { Monitor, Tablet, Smartphone } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage, SymTLDR } from "./shared";

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
  "WCAG 2.2 AA baked into tokens — color-blind safe badges, keyboard nav, screen reader support",
  "8pt spacing grid for dense clinical data",
  "Color tokens optimized for light mode and low-light environments",
  "Keyboard shortcuts for power users (nurse-requested tab navigation)",
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
      <div className="mb-14">
        <div ref={archRef} className="reveal">
          <p className="text-xs font-semibold text-sym-blue uppercase tracking-widest mb-2">
            Technical Foundation
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 max-w-[720px]">
            System Architecture
          </h2>
        </div>

        <SymTLDR>
          Symplify acts as a read-only integration layer — extending legacy EHR, Excel,
          and email systems through AI-powered recommendation rather than replacement.
          The design system was built around WCAG 2.2 AA compliance, 8pt grid, and
          role-based information density.
        </SymTLDR>

        <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
          Symplify acts as an integration layer — read-only recommendations over legacy systems.
        </p>

        <div className="mb-6">
          <ZoomableImage
            src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F6aa256a43d2549c38d24c45c7e442b57"
            alt="System architecture diagram showing how Symplify connects legacy systems (EHR, Email, Excel) through a translation layer (AI Triage Engine, Conflict Detection, Compliance Monitor, Alert Prioritization) to role-based dashboards (Doctor, Nurse, Admin views)"
            caption="How Symplify connects legacy systems to role-based dashboards via a read-only translation layer."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "No direct EHR writes", detail: "Recommendation layer, not automation" },
            { label: "State-by-state compliance", detail: "Configurable logging depth" },
            { label: "Offline-first mobile", detail: "Intermittent rural connectivity" },
          ].map((c) => (
            <div key={c.label} className="bg-sym-bg-primary rounded-lg border border-sym-card-border px-4 py-3">
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4">
            Design System
          </h2>
        </div>
        <p className="text-[15px] text-sym-body leading-relaxed max-w-[680px] mb-6">
          Modular system emphasizing trust, transparency, and accessibility.
        </p>

        {/* Design System Specimen */}
        <ZoomableImage
          src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F972ae0ec8c9a4b289e8854f7b13ce527"
          alt="Symplify Design System specimen showing color palette, typography scale, AI confidence badges, alert tier system, role-based color coding, spacing grid, and WCAG 2.2 AA compliance details"
          caption="Design system specimen: WCAG 2.2 AA baked into tokens. Color-blind safe confidence badges, keyboard navigation, and screen reader support from day one."
        />

        <ul className="space-y-2.5 mb-8 max-w-[680px]">
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
              className="reveal bg-sym-card rounded-xl border border-sym-card-border p-4 shadow-sm card-lift group"
            >
              <div className="flex items-start gap-2 mb-2">
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
