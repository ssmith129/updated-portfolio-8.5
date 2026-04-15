import {
  Brain,
  Shield,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

interface InsightCardData {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  accentColor: string;
  bgGradient: string;
  iconBg: string;
}

const insights: InsightCardData[] = [
  {
    icon: Brain,
    label: "Discovery",
    title: "Trust > Speed",
    description:
      "CPAs rejected automation that removed their judgment. Professional liability made transparency non-negotiable.",
    stat: "12",
    statLabel: "CPA interviews",
    accentColor: "text-[#00D4AA]",
    bgGradient: "from-[#E0F9F4] to-white",
    iconBg: "bg-[#E0F9F4]",
  },
  {
    icon: Users,
    label: "Behavior",
    title: "73% Predictable",
    description:
      "Most transactions followed repeatable patterns — ideal for AI augmentation while preserving human review for edge cases.",
    stat: "50K+",
    statLabel: "transactions analyzed",
    accentColor: "text-[#2563EB]",
    bgGradient: "from-[#E8F4FA] to-white",
    iconBg: "bg-[#E8F4FA]",
  },
  {
    icon: Shield,
    label: "Compliance",
    title: "IRS Defensibility",
    description:
      "Every classification needs a paper trail. Competitors' black-box outputs were cited as the #1 reason CPAs switched tools.",
    stat: "3:1",
    statLabel: "transparency vs speed complaints",
    accentColor: "text-[#F59E0B]",
    bgGradient: "from-[#FEF3E2] to-white",
    iconBg: "bg-[#FEF3E2]",
  },
  {
    icon: TrendingUp,
    label: "Opportunity",
    title: "Augment, Don't Replace",
    description:
      "The winning model: automate routine work, flag uncertainty, and always let the CPA make the final call.",
    stat: "85%",
    statLabel: "manual work reducible",
    accentColor: "text-[#00D4AA]",
    bgGradient: "from-[#E0F9F4] to-white",
    iconBg: "bg-[#E0F9F4]",
  },
];

function InsightCard({ card }: { card: InsightCardData }) {
  const Icon = card.icon;

  return (
    <div
      className={`bg-gradient-to-br ${card.bgGradient} rounded-xl border border-[#E3E8EF] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full`}
    >
      {/* Icon + Label */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 ${card.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
        >
          <Icon className={`w-5 h-5 ${card.accentColor}`} />
        </div>
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${card.accentColor}`}
        >
          {card.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 leading-snug">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-1">
        {card.description}
      </p>

      {/* Stat Footer */}
      <div className="pt-3 border-t border-[#E3E8EF] flex items-baseline gap-2">
        <span className={`text-xl font-bold ${card.accentColor}`}>
          {card.stat}
        </span>
        <span className="text-xs text-[#6B7280]">{card.statLabel}</span>
      </div>
    </div>
  );
}

export default function InsightCards() {
  return (
    <section className="section-animate scroll-mt-24">
      <div className="bg-white backdrop-blur-xl rounded-xl p-6 sm:p-7 lg:p-8 shadow-md border border-[#E3E8EF]">
        <h2 className="text-lg font-bold font-heading text-[#0A2540] uppercase tracking-wider mb-2">
          Research Insights
        </h2>
        <p className="text-sm text-[#4A5568] mb-6">
          Four findings that shaped every design decision
        </p>

        {/* 1x4 Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {insights.map((card) => (
            <InsightCard key={card.label} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
