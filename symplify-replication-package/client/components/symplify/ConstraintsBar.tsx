import { Shield, Database, UserX, WifiOff } from "lucide-react";
import { useStaggerReveal } from "../../hooks/use-scroll-reveal";

const constraints = [
  {
    icon: <Shield className="w-5 h-5 text-[#3B82F6]" />,
    title: "HIPAA + SOC 2",
    description: "Full audit trails, no cloud ML without BAA",
  },
  {
    icon: <Database className="w-5 h-5 text-[#8B5CF6]" />,
    title: "Legacy EHRs Stay",
    description: "Read-only integration; we extend, not replace",
  },
  {
    icon: <UserX className="w-5 h-5 text-[#F59E0B]" />,
    title: "Zero Added Workload",
    description: "Staffing shortages meant any friction = rejection",
  },
  {
    icon: <WifiOff className="w-5 h-5 text-[#10B981]" />,
    title: "Intermittent Connectivity",
    description: "Rural sites needed offline-first mobile design",
  },
];

export default function ConstraintsBar() {
  const gridRef = useStaggerReveal();

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-12 relative z-10">
      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-6">
        Load-Bearing Design Constraints
      </p>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {constraints.map((c) => (
          <div
            key={c.title}
            className="reveal bg-white rounded-xl border border-[#E2E8F0] px-5 py-5 shadow-sm card-lift group"
          >
            <div className="mb-3">{c.icon}</div>
            <p className="text-sm font-semibold text-[#0F172A] mb-1">{c.title}</p>
            <p className="text-xs text-[#64748B] leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
