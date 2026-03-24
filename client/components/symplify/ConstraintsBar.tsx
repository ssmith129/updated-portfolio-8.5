import { Shield, Database, UserX, WifiOff } from "lucide-react";
import { useStaggerReveal } from "../../hooks/use-scroll-reveal";

const constraints = [
  {
    icon: <Shield className="w-5 h-5 text-sym-blue" />,
    title: "HIPAA + SOC 2",
    description: "Full audit trails, no cloud ML without BAA",
  },
  {
    icon: <Database className="w-5 h-5 text-sym-purple" />,
    title: "Legacy EHRs Stay",
    description: "Read-only integration; we extend, not replace",
  },
  {
    icon: <UserX className="w-5 h-5 text-sym-amber" />,
    title: "Zero Added Workload",
    description: "Staffing shortages meant any friction = rejection",
  },
  {
    icon: <WifiOff className="w-5 h-5 text-sym-green" />,
    title: "Intermittent Connectivity",
    description: "Rural sites needed offline-first mobile design",
  },
];

export default function ConstraintsBar() {
  const gridRef = useStaggerReveal();

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-12 relative z-10">
      <p className="text-xs font-semibold text-sym-muted uppercase tracking-widest mb-3">
        Load-Bearing Design Constraints
      </p>
      <p className="text-sm text-sym-body leading-snug max-w-[680px] mb-5">
        Every design decision operated within four non-negotiable constraints.
        Violating any one meant instant rejection by clinical staff or compliance teams.
      </p>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {constraints.map((c) => (
          <div
            key={c.title}
            className="reveal bg-sym-card rounded-xl border border-sym-card-border px-4 py-3.5 shadow-sm card-lift group"
          >
            <div className="flex flex-col justify-center items-center mb-2">{c.icon}</div>
            <p className="text-sm font-semibold text-sym-heading mb-1 text-center">{c.title}</p>
            <p className="text-xs text-sym-muted leading-relaxed text-center">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
