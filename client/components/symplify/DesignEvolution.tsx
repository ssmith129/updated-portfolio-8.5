import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { SymTLDR, AssetPlaceholder, ZoomableImage } from "./shared";

interface EvolutionStage {
  title: string;
  assetId: string;
  imageSrc?: string;
  caption: string;
  learning: string;
}

const triageEvolution: EvolutionStage[] = [
  {
    title: "Initial Sketches",
    assetId: "triage-inbox-sketch.jpg",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F1aa7e709a2154ef3900db70013a868c9",
    caption: "Initial concept sketch exploring how to surface AI-assessed urgency alongside message content.",
    learning: "First question we needed to answer: how do you show AI confidence without creating false precision?",
  },
  {
    title: "Wireframe v1 — Percentage Scores",
    assetId: "triage-inbox-wireframe-v1.png",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F9c427e2aabb34bb6a69db7193fdfa2a9",
    caption: 'Wireframe tested with 12 clinicians. Percentage scores felt like "fake precision" — only 33% acceptance.',
    learning: "Clinicians aren't statisticians. Exact percentages made them question the AI more, not trust it more.",
  },
  {
    title: "Wireframe v2 — 3-Tier Badges",
    assetId: "triage-inbox-wireframe-v2.png",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F7dff12a18bb94c638c174adde3700069",
    caption: "Redesigned with 3-tier badges after the percentage rejection. Tested at 89% acceptance.",
    learning: 'The breakthrough: badges communicate "suggested priority" rather than "calculated probability." Staff felt like it was an assistant, not a replacement.',
  },
  {
    title: "Production UI",
    assetId: "triage-inbox-production.png",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Ff98fec64c0cb49ff82fa9c6d0518e333",
    caption: "Shipped production UI. 11% override rate with full audit trail on every decision.",
    learning: "Result: override rate dropped from 18% (percentage version) to 11% (badge version). Trust through transparency.",
  },
];

const schedulingEvolution: EvolutionStage[] = [
  {
    title: "Auto-Booking Concept",
    assetId: "scheduling-sketch-autobook.jpg",
    caption: "Original concept: system auto-books optimal slots. Seemed like an obvious efficiency win.",
    learning: '67% of clinicians rejected this outright. "It feels like the system is making clinical decisions without me."',
  },
  {
    title: "Suggestion-Based Wireframe",
    assetId: "scheduling-wireframe-suggestion.png",
    caption: "Post-pivot wireframe: detect conflicts, suggest alternatives, always allow override.",
    learning: "Error prevention over error correction. Don't just say 'no' — offer a better option with context.",
  },
  {
    title: "Production Conflict Modal",
    assetId: "scheduling-conflict-production.png",
    caption: "Production conflict modal. 89% of suggestions accepted. No-show rate dropped 2.4 points.",
    learning: "The override escape hatch was key. Clinicians who know they CAN override feel safe accepting suggestions.",
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
          Iteration Process
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-6">
          Design Evolution
        </h2>
      </div>

      <SymTLDR>
        Key features went through 3-4 rounds of iteration based on clinical
        feedback. The AI confidence display pivoted from percentages to badges
        after testing showed 67% of clinicians rejected numerical precision.
        Scheduling went from auto-booking to suggestion-based after similar rejection.
      </SymTLDR>

      {/* Evolution 1: AI Triage Inbox */}
      <EvolutionTrack
        title="AI Triage Inbox"
        stages={triageEvolution}
      />

      {/* Evolution 2: Scheduling Conflict Flow */}
      <EvolutionTrack
        title="Scheduling Conflict Flow"
        stages={schedulingEvolution}
      />
    </section>
  );
}

function EvolutionTrack({ title, stages }: { title: string; stages: EvolutionStage[] }) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-lg font-semibold text-sym-heading mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sym-blue to-sym-green" />
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stages.map((stage, i) => (
          <div
            key={stage.title}
            className="bg-sym-card rounded-xl border border-sym-card-border p-5 shadow-sm hover:shadow-md hover:border-sym-card-border-hover transition-all duration-300 relative"
          >
            {/* Stage number */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sym-blue to-sym-green text-white flex items-center justify-center text-sm font-bold mb-4">
              {i + 1}
            </div>

            <h4 className="text-sm font-semibold text-sym-heading mb-3 leading-snug">
              {stage.title}
            </h4>

            {stage.imageSrc ? (
              <ZoomableImage
                src={stage.imageSrc}
                alt={stage.caption}
                caption={stage.caption}
              />
            ) : (
              <AssetPlaceholder
                id={stage.assetId}
                caption={stage.caption}
                aspectRatio="4/3"
              />
            )}

            <div className="bg-sym-bg-blue rounded-lg p-3 mt-3">
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
