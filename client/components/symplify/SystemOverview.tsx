import { Monitor, Tablet, Smartphone } from "lucide-react";
import PlaceholderVisual from "./PlaceholderVisual";

const platforms = [
  {
    icon: <Monitor className="w-5 h-5 text-[#3B82F6]" />,
    context: "Desktop",
    focus: "Multi-module dashboard",
    details: "Keyboard shortcuts, dense tables, 3-column layout",
  },
  {
    icon: <Tablet className="w-5 h-5 text-[#8B5CF6]" />,
    context: "Tablet",
    focus: "Bedside use",
    details: "44x44px touch zones, offline caching, simplified triage",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-[#10B981]" />,
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

export default function SystemOverview() {
  return (
    <section id="system" className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10">
      {/* Architecture */}
      <div className="mb-20">
        <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-2">
          Technical Foundation
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-4 max-w-[720px]">
          System Architecture
        </h2>
        <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
          Symplify acts as an integration layer — not replacing legacy systems,
          but making them work together through a read-only recommendation
          layer.
        </p>

        <PlaceholderVisual
          label="Architecture Diagram"
          description="Legacy systems (EHR, Email, Excel) → Symplify translation layer (AI triage, conflict detection, compliance monitoring) → Role-based dashboards (Doctor / Nurse / Admin views)"
          aspectRatio="aspect-[2.5/1]"
          className="mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "No direct EHR writes", detail: "Recommendation layer, not automation" },
            { label: "State-by-state compliance", detail: "Configurable logging depth" },
            { label: "Offline-first mobile", detail: "Intermittent rural connectivity" },
          ].map((c) => (
            <div key={c.label} className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] px-5 py-4">
              <p className="text-sm font-semibold text-[#0F172A] mb-1">{c.label}</p>
              <p className="text-xs text-[#64748B]">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design System */}
      <div>
        <p className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-2">
          Foundation
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-6">
          Design System
        </h2>
        <p className="text-[15px] text-[#475569] leading-relaxed max-w-[680px] mb-8">
          Built a modular system emphasizing trust, transparency, and
          accessibility.
        </p>

        <ul className="space-y-3 mb-10 max-w-[680px]">
          {dsFeatures.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0 mt-2" />
              {f}
            </li>
          ))}
        </ul>

        {/* Platform grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <div key={p.context} className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                {p.icon}
                <p className="text-sm font-semibold text-[#0F172A]">{p.context}</p>
              </div>
              <p className="text-sm font-medium text-[#334155] mb-1">{p.focus}</p>
              <p className="text-xs text-[#64748B] leading-relaxed">{p.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
