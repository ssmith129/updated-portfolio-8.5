import { useRef, useState, useEffect, useCallback } from "react";
import { Zap, RotateCcw, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/use-scroll-reveal";
import { ZoomableImage } from "./shared";

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
    imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F6c0f150f972149689366cf1c9d149fb3",
    caption: "Shipped production UI — triage inbox with confidence badges, AI reasoning, and full audit trail.",
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
      className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10"
    >
      <div ref={headingRef} className="reveal">
        <p className="text-xs font-semibold text-sym-purple uppercase tracking-widest mb-2">
          From Rejection to Trust
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-sym-heading tracking-tight mb-4 heading-underline">
          Design Evolution
        </h2>
      </div>

      {/* Pivotal Moment 1 — merged from PivotalMoments.tsx */}
      <PivotalNarrative
        icon={<Zap className="w-5 h-5 text-sym-amber" />}
        title="The 67% Rejection That Changed Everything"
        bgColor="#FFFBEB"
        borderColor="#FDE68A"
        narrative="Auto-routing was rejected by 67% of clinicians — they wanted faster decisions, not fewer. The reframe drove every subsequent design choice."
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
        narrative="HIPAA required human-readable AI justification. Hover-to-reveal made it the highest-rated feature in the post-pilot survey."
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
      className="rounded-xl border overflow-hidden mb-5"
      style={{ borderColor, backgroundColor: bgColor }}
    >
      <div className="px-5 py-3 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-sym-heading mb-2">{title}</h3>
          <p className="text-[15px] text-sym-body leading-relaxed">{narrative}</p>
        </div>
      </div>
      <div className="mx-4 mb-2 flex items-start justify-start gap-1.5 bg-white/60 rounded-md px-2.5 py-0.5">
        <TrendingUp className="w-3.5 h-3.5 text-sym-green flex-shrink-0" />
        <p className="text-xs font-medium text-[#166534]">{outcome}</p>
      </div>
    </div>
  );
}

function EvolutionTrack({ title, stages }: { title: string; stages: EvolutionStage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);

    // Determine active card based on scroll position
    const cardWidth = el.scrollWidth / stages.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, stages.length - 1));
  }, [stages.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-stage-card]")?.clientWidth ?? 340;
    const gap = 20;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelectorAll("[data-stage-card]")[i] as HTMLElement;
    if (card) card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-sym-heading flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sym-blue to-sym-green pulse-gentle" />
          {title}
        </h3>

        {/* Navigation arrows */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollTo("left")}
            disabled={!canScrollLeft}
            className="w-8 h-8 rounded-lg border border-sym-card-border bg-sym-card flex items-center justify-center transition-all duration-200 hover:border-sym-blue/40 hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-sym-body" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("right")}
            disabled={!canScrollRight}
            className="w-8 h-8 rounded-lg border border-sym-card-border bg-sym-card flex items-center justify-center transition-all duration-200 hover:border-sym-blue/40 hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-sym-body" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        data-evolution-scroll
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 -mb-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`[data-evolution-scroll]::-webkit-scrollbar { display: none; }`}</style>
        {stages.map((stage, i) => (
          <div
            key={stage.title}
            data-stage-card
            className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[440px] snap-start bg-sym-card rounded-xl border border-sym-card-border p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-sym-card-border-hover transition-all duration-300 relative card-lift"
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

            <div className="bg-sym-bg-blue rounded-md px-2 py-0.5 mt-1">
              <p className="text-xs text-sym-blue italic leading-snug">
                {stage.learning}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Numbered indicators */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {stages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-200 ${
              activeIndex === i
                ? "bg-gradient-to-r from-sym-blue to-sym-green text-white shadow-sm"
                : "border border-sym-card-border bg-sym-card text-sym-muted hover:border-sym-blue/40 hover:text-sym-blue"
            }`}
            aria-label={`Go to stage ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
