import { Zap, RotateCcw, TrendingUp } from "lucide-react";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage, SymTLDR } from "./shared";

interface EvolutionStage {
  title: string;
  imageSrc: string;
  caption: string;
  learning: string;
}

const triageEvolution: EvolutionStage[] = [
  {
    title: "Initial Sketches",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F1aa7e709a2154ef3900db70013a868c9",
    caption: "Initial concept sketch exploring AI-assessed urgency alongside message content.",
    learning: "Core question: how do you show AI confidence without false precision?",
  },
  {
    title: "Wireframe v1 — Percentage Scores",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F9c427e2aabb34bb6a69db7193fdfa2a9",
    caption: 'Wireframe tested with 12 clinicians. Percentage scores felt like "fake precision."',
    learning: "Exact percentages made clinicians question the AI more, not trust it more.",
  },
  {
    title: "Wireframe v2 — 3-Tier Badges",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dff12a18bb94c638c174adde3700069",
    caption: "Redesigned with 3-tier badges after the percentage rejection.",
    learning: 'Badges communicate "suggested priority" not "calculated probability" — assistant, not replacement.',
  },
  {
    title: "Production UI",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff98fec64c0cb49ff82fa9c6d0518e333",
    caption: "Shipped production UI with full audit trail on every decision.",
    learning: "Trust through transparency — override rate dropped significantly after the badge redesign.",
  },
];

const schedulingEvolution: EvolutionStage[] = [
  {
    title: "Auto-Booking Concept",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F768632186c5e45bead1b94f70295f521",
    caption: "Original concept: system auto-books optimal slots.",
    learning: "Clinicians wanted faster decisions, not fewer decisions.",
  },
  {
    title: "Suggestion-Based Wireframe",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fc45fb6bd920c423ca064cd901cd260c9",
    caption: "Post-pivot: detect conflicts, suggest alternatives, always allow override.",
    learning: "Error prevention over correction — offer a better option with context.",
  },
  {
    title: "Production Conflict Modal",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F72eb206382b9448ea5da738b15352d4a",
    caption: "Production conflict modal with high suggestion acceptance rates.",
    learning: "Clinicians who know they CAN override feel safe accepting suggestions.",
  },
];

export default function DesignEvolution() {
  const headingRef = useScrollReveal();

  return (
    <section
      id="evolution"
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-purple uppercase tracking-widest mb-2">
          From Rejection to Trust
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6 heading-underline">
          Design Evolution
        </h2>
      </div>

      <SymTLDR>
        Key features went through 3–4 rounds of iteration based on clinical
        feedback. The AI confidence display pivoted from percentages to badges
        after testing showed 67% of clinicians rejected numerical precision.
        Scheduling went from auto-booking to suggestion-based after similar rejection.
      </SymTLDR>

      {/* Pivotal Moment 1 — merged from PivotalMoments.tsx */}
      <PivotalNarrative
        icon={<Zap className="w-5 h-5 text-sym-amber" />}
        title="The 67% Rejection That Changed Everything"
        bgColor="#FFFBEB"
        borderColor="#FDE68A"
        narrative="We tested auto-assigned task routing with 12 clinicians. 67% rejected it outright — staff wanted faster decisions, not fewer decisions. This reframe reshaped every subsequent design choice."
        outcome="Pivot to suggestion-based design resolved the rejection."
      />

      <EvolutionTrack
        title="AI Triage Inbox"
        stages={triageEvolution}
      />

      {/* Pivotal Moment 2 — merged from PivotalMoments.tsx */}
      <PivotalNarrative
        icon={<RotateCcw className="w-5 h-5 text-sym-purple" />}
        title="The HIPAA Constraint That Improved UX"
        bgColor="#F5F3FF"
        borderColor="#DDD6FE"
        narrative={`HIPAA required human-readable justification for every AI recommendation. Nurse feedback: "I don't need to see the reasoning every time — but I need to know I can." This led to hover-to-reveal: badges visible, reasoning on demand. The constraint produced better UX than our original design.`}
        outcome="Highest-rated feature in post-pilot survey."
      />

      <EvolutionTrack
        title="Scheduling Conflict Flow"
        stages={schedulingEvolution}
      />
    </section>
  );
}

function PivotalNarrative({
  icon,
  title,
  bgColor,
  borderColor,
  narrative,
  outcome,
}: {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
  borderColor: string;
  narrative: string;
  outcome: string;
}) {
  return (
    <div
      className="rounded-xl border overflow-hidden mb-6"
      style={{ borderColor, backgroundColor: bgColor }}
    >
      <div className="px-5 py-4 flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-sym-heading mb-2">{title}</h3>
          <p className="text-[15px] text-sym-body leading-relaxed">{narrative}</p>
        </div>
      </div>
      <div className="mx-5 mb-4 flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5">
        <TrendingUp className="w-4 h-4 text-sym-green mt-0.5 flex-shrink-0" />
        <p className="text-sm font-medium text-[#166534]">{outcome}</p>
      </div>
    </div>
  );
}

function EvolutionTrack({ title, stages }: { title: string; stages: EvolutionStage[] }) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-lg font-semibold text-sym-heading mb-5 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sym-blue to-sym-green pulse-gentle" />
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {stages.map((stage, i) => (
          <div
            key={stage.title}
            className="bg-sym-card rounded-xl border border-sym-card-border p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-sym-card-border-hover transition-all duration-300 relative card-lift"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sym-blue to-sym-green text-white flex items-center justify-center text-sm font-bold flex-shrink-0 timeline-node">
                {i + 1}
              </div>
              <h4 className="text-sm font-semibold text-sym-heading leading-snug">
                {stage.title}
              </h4>
            </div>

            <ZoomableImage
              src={stage.imageSrc}
              alt={stage.caption}
              caption={stage.caption}
            />

            <div className="bg-sym-bg-blue rounded-lg p-2.5 mt-2">
              <p className="text-xs text-sym-blue italic leading-relaxed">
                {stage.learning}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
