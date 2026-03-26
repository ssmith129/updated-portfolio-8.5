import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { ExternalLink } from "lucide-react";
import { SymTLDR, ZoomableImage } from "./shared";

const dsFeatures = [
  "WCAG 2.2 AA baked into tokens — color-blind safe badges, keyboard nav, screen reader support",
  "8pt spacing grid for dense clinical data",
  "Color tokens optimized for light mode and low-light environments",
  "Keyboard shortcuts for power users (nurse-requested tab navigation)",
];

export default function SystemOverview() {
  const archRef = useScrollReveal();
  const dsRef = useScrollReveal();

  return (
    <section
      id="system"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10"
    >
      {/* Architecture */}
      <div className="mb-10">
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
        <figure className="mb-4">
          <div className="relative w-full rounded-xl overflow-hidden border border-sym-card-border shadow-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F972ae0ec8c9a4b289e8854f7b13ce527"
              alt="Symplify Design System specimen showing color palette, typography scale, AI confidence badges, alert tier system, role-based color coding, spacing grid, and WCAG 2.2 AA compliance details"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-sym-muted mt-2 italic leading-relaxed text-center">
            Design system specimen: WCAG 2.2 AA baked into tokens. Color-blind safe confidence badges, keyboard navigation, and screen reader support from day one.
          </figcaption>
        </figure>
        <div className="flex justify-center mb-4">
          <a
            href="/Symplify-Design-System-Showcase.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sym-blue to-sym-green rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:brightness-110"
          >
            View Full Design System
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <ul className="space-y-2.5 max-w-[680px]">
          {dsFeatures.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-sym-body leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-sym-green flex-shrink-0 mt-2" />
              {f}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
