# Symplify Case Study — Comprehensive Portfolio Audit

**Audit Date:** March 4, 2026
**Auditor Perspective:** Senior Product Design Hiring Manager (10+ years hiring experience)
**Target Role:** Senior Product Designer at high-growth B2B SaaS startup ($180K–220K+)
**Source Materials:** Live site (smithdesign.live), source code (SymplifyCaseStudy.tsx + 13 Symplify components), Tailwind config, global CSS

---

## Evaluation Framework

### Dimension Ratings

| Dimension | Weight | Score (1–5) | Weighted Score |
|---|---|---|---|
| Strategic Thinking & Business Acumen | 25% | 4.2 | 1.05 |
| Design Process & Methodology | 25% | 4.0 | 1.00 |
| Execution & Craft | 20% | 3.2 | 0.64 |
| Communication & Leadership | 20% | 4.0 | 0.80 |
| Impact & Results | 10% | 4.5 | 0.45 |
| **Overall** | **100%** | | **3.94 / 5.0 (78.8/100)** |

---

### Strategic Thinking & Business Acumen — 4.2 / 5

Evidence of senior-level strategic framing is strong throughout. The reframe from "UX problem" to "trust problem" is the most compelling strategic move — the insight that 67% of clinicians rejected automation but wanted augmentation shows genuine user-business alignment thinking.

**Strengths:**

- Constraint awareness is excellent: HIPAA, legacy EHR read-only integration, zero-added-workload staffing realities, and the 6-week pilot deadline are all surfaced as load-bearing constraints that shaped design decisions
- Business value calculations (~$78K/year) broken down into transparent assumptions ($41/hr avg, 52 weeks, 5 admin staff) demonstrate ROI thinking
- Caveat about pilot limitations shows maturity and credibility

**Gaps:**

- Competitive analysis (Epic, Cerner, Allscripts) feels somewhat superficial — dimensions compared are generic rather than revealing a nuanced strategic wedge

---

### Design Process & Methodology — 4.0 / 5

Research rigor is genuinely strong with triangulated methods and documented bias controls.

**Strengths:**

- 18 contextual inquiries, 3,000 logged tasks, 14 semi-structured interviews, 1,200 message analysis
- Bias controls documented: rotated observers, automated logging (eliminating self-reporting bias), independent dual-coding
- Evolution from sketch → wireframe v1 → wireframe v2 → production with quantified test results at each stage (33% → 52% → 89% acceptance)

**Gaps:**

- No evidence of usability testing methodology details — iteration story is told through acceptance rates but not through standard UX testing metrics (task completion rates, error rates, time-on-task)
- Collapsible "Full Research Methodology" table reads more like a research plan than findings

---

### Execution & Craft — 3.2 / 5

This is the most significant gap. The code is well-structured but critical presentation issues undermine content quality.

**Strengths:**

- Clean component architecture (13 Symplify-specific components, shared utilities, proper TypeScript)
- Tailwind design token system (sym-* colors, consistent spacing)
- ZoomableImage component with keyboard dismiss and body scroll lock
- Video autoplay with intersection observer

**Critical Issues:**

- Reading time states "14 min read" — extremely long and self-defeating for a portfolio case study
- 1 placeholder asset remains (AssetPlaceholder for mobile triage renders a dashed-border empty box with camera emoji)
- Visual-to-text ratio heavily skewed toward text (~35% visual / 65% text; target is 55-60% visual)
- Hero image uses background-image CSS on an anchor tag — no img element, no lazy loading, no width/height for CLS prevention
- TL;DR blocks appear in every single section (10+), creating visual monotony and increasing reading time
- No dark mode support for this case study (unlike Computis)

---

### Communication & Leadership — 4.0 / 5

Narrative arc is well-constructed with strong storytelling in key moments.

**Strengths:**

- Clear arc: Hook → Context → Evidence → Iteration → Decisions → Impact → Reflection
- "Pivotal Moments" section is strongest communication element — 67% rejection and HIPAA-constraint-as-feature stories demonstrate senior-level storytelling
- "What Worked & What Didn't" with honest misses (15% still exporting to Excel, mobile alert density) signals maturity
- Post-pilot quotes organized by role effectively triangulate satisfaction

**Gaps:**

- No evidence of stakeholder influence or cross-functional collaboration dynamics
- How was the automation → augmentation pivot communicated to leadership?
- Reflections mention "collaboration > solo heroics" but narrative reads as a solo designer story throughout

---

### Impact & Results — 4.5 / 5

Strongest dimension. Metrics are specific, contextualized, and honestly caveated.

**Evidence:**

- 40% triage time reduction (2m 15s → 1m 18s)
- 89% triage accuracy (from 60% baseline)
- 35% admin overhead reduction
- 2.4-point no-show reduction
- 38% alert fatigue reduction
- AI guardrails maintained (<15% override rate, <10% false positives)
- Explicit caveat: n=65, 6 weeks, non-flu months, "directional indicators, not guarantees"

---

## Structured Assessment

### A. Overall Assessment

**Decision:** Conditional Hire

**Confidence Level:** 72% — High confidence in strategic thinking and research methodology; lower confidence in execution polish and presentation readiness. The conditional gap is primarily craft/presentation, not capability.

**Summary:** This candidate demonstrates clear senior-level strategic thinking — the automation-to-augmentation pivot, the trust-as-design-constraint framework, and the honest impact metrics with caveats all signal someone who can drive product decisions and influence stakeholders. The research methodology is rigorous and well-documented. However, the case study's presentation undermines the content quality: a 14-minute read time, one placeholder visual, text-heavy sections that require scrolling past 200+ words before seeing design work, and repetitive TL;DR blocks create a reading experience that would lose most hiring managers within the first 90 seconds. The gap between content quality (senior) and presentation quality (mid-level) is the core issue. With focused execution on the high-priority recommendations below, this case study moves from conditional to strong hire territory.

---

### B. Key Strengths (5)

**1. The Automation → Augmentation Reframe**

- **Evidence:** 67% rejection of auto-assignment led to a fundamental pivot from "automate clinical decisions" to "augment clinical judgment." This reframe cascaded into the confidence badge system (89% acceptance), suggestion-based scheduling, and the override escape hatch pattern.
- **Why it signals senior:** Senior designers don't just solve the brief — they reframe the problem when research contradicts assumptions. This demonstrates the ability to kill your darlings and rebuild from insight.
- **Role relevance:** At a high-growth startup, senior designers regularly face moments where initial hypotheses fail. This proves the candidate can pivot strategically rather than defensively.

**2. Quantified Impact with Honest Caveats**

- **Evidence:** Six specific metrics with before/after values, business value calculations broken down to assumptions, plus explicit limitations (n=65, 6 weeks, non-flu months, "directional indicators, not guarantees").
- **Why it signals senior:** Junior designers cherry-pick flattering metrics. Senior designers present metrics with methodology transparency and limitations — building credibility rather than hype.
- **Role relevance:** At B2B SaaS companies, design leaders present impact data to executives and cross-functional partners. This candidate's metrics hygiene would hold up under scrutiny.

**3. Design System Thinking Under Clinical Constraints**

- **Evidence:** WCAG 2.2 AA compliance baked into design tokens, color-blind safe confidence badges using pattern + label redundancy, 8pt spacing grid, keyboard shortcuts for nurse triage queues, offline-first mobile architecture.
- **Why it signals senior:** Constraints (HIPAA, color-blindness, offline rural sites, 44x44px touch targets) are treated as design requirements that shaped better solutions, not limitations. The HIPAA audit trail becoming the highest-rated feature is a standout example.
- **Role relevance:** Demonstrates the ability to build systematic, accessible design foundations.

**4. Research Methodology Rigor**

- **Evidence:** Four complementary research methods with documented bias controls (rotated observers, automated logging, dual-coding) and clear sample sizes.
- **Why it signals senior:** Goes beyond "we did user interviews." Triangulation across methods and bias mitigation strategies show research leadership.

**5. Multi-Stakeholder Design for Competing Needs**

- **Evidence:** Three distinct role-based views (Doctor, Nurse, Admin) serving the same data layer with different information density and action priorities.
- **Why it signals senior:** Designing for a single persona is mid-level. Navigating competing needs across three user types with different expertise levels, time pressures, and goals — while maintaining a coherent system — is senior-level architecture.

---

### C. Critical Gaps (5)

**1. Presentation Undermines Content Quality**

- **Severity: 🔴 Deal-breaker (without fix)**
- **What's missing:** 14-minute read time. Text-to-visual ratio is ~70/30 (target: 40/60). Sections contain 200-400 words before any visual. TL;DR blocks appear 10+ times, adding reading time rather than reducing it.
- **Implication:** A hiring manager scanning this will see walls of text, absorb the hero metric ("40% faster triage"), maybe scan one or two section headings, and move on. The strong strategic thinking and research depth are buried behind prose that requires sustained reading commitment.

**2. Placeholder Visual Remains**

- **Severity: 🔴 Deal-breaker**
- **What's missing:** Mobile Triage showcase uses AssetPlaceholder — renders a dashed empty box with camera emoji and text "product-mobile-triage-annotated.png."
- **Implication:** Placeholder content in a portfolio signals work-in-progress or lack of attention to detail. Equivalent of submitting a resume with "[INSERT REFERENCE HERE]."

**3. No Evidence of Stakeholder Influence**

- **Severity: 🟡 Concerning**
- **What's missing:** Case study demonstrates strong individual design work but doesn't show organizational navigation. How was the pivot communicated to leadership? Did the PM resist? How were clinical advisors managed?
- **Implication:** At senior level, influence without authority and cross-functional alignment are as important as design skill. Without evidence, a hiring manager may question organizational-level capability.

**4. No Usability Testing Artifacts or Methodology**

- **Severity: 🟡 Concerning**
- **What's missing:** Iteration story implies testing but doesn't show how. Were these preference tests? Task-based usability tests? What were task scenarios? Sample per round? Completion/error rate metrics?
- **Implication:** "We tested with clinicians" is ambiguous. A senior designer should articulate testing methodology and distinguish between validation types.

**5. No Interaction Design Artifacts or Prototypes**

- **Severity: 🟢 Coachable**
- **What's missing:** Despite claiming "interaction design" as a core responsibility, no wireflow diagrams, user flow maps, micro-interaction specs, or prototype demonstrations are shown.
- **Implication:** Hiring managers want to see how you think about interaction patterns and edge cases. Adding one annotated user flow diagram would significantly strengthen process evidence.

---

### D. Prioritized Recommendations

| Priority | Recommendation | Affected Section(s) | Expected Impact |
|---|---|---|---|
| 🔴 High | **Remove or replace the mobile triage placeholder.** Either create a coded mobile mockup or remove the card entirely. | ProductShowcase — Mobile Triage card | Eliminates an immediate disqualifier. +5 pts on Execution & Craft. |
| 🔴 High | **Cut reading time from 14 min to 7-8 min.** Collapse TL;DR blocks to 3 key sections only. Cut prose to 2-3 sentences max before a visual. Remove duplicated 67% rejection narrative (appears in Evolution AND Pivotal Moments). | All prose sections | Dramatically increases chance hiring manager reads past the hero. +10 pts on Communication. |
| 🔴 High | **Lead every section with a visual, not text.** Restructure so the first element after each heading is an image, diagram, or data visualization — then follow with explanatory text. | Problem, Research, DesignDecisions, ProductShowcase | Transforms 90-second scan from "text wall" to "visual story with supporting detail." |
| 🟡 Medium | **Add one stakeholder influence anecdote.** Brief narrative about communicating the automation→augmentation pivot to leadership or managing clinical advisor disagreements. | PivotalMoments or ReflectionsSection | Addresses "solo contributor" gap. Signals senior-level organizational navigation. |
| 🟡 Medium | **Clarify testing methodology.** For confidence badge evolution, specify: test type, sample size per round, key task scenario, one metric beyond acceptance rate. | DesignEvolution | Strengthens research credibility from "we tested" to "here's how we validated." |
| 🟡 Medium | **Add one annotated user flow.** Coded diagram: triage decision flow from inbox → AI recommendation → accept/override → audit log. | DesignDecisions or SystemOverview | Demonstrates interaction design thinking currently only described in prose. |
| 🟡 Medium | **Fix hero image implementation.** Replace background-image CSS on anchor with proper img element with width, height, loading="lazy", and srcset. | HeroSection | Improves LCP, prevents CLS, adds SEO value. |
| 🟢 Low | **Reduce TL;DR frequency.** Keep on Impact, Research, Design Decisions only. Remove from other 7 sections. | shared.tsx SymTLDR usage | Reduces visual monotony and reading overhead. |
| 🟢 Low | **Add canonical URL and reading time structured data.** No canonical link element exists. Meta injection is effect-based only. | SymplifyCaseStudy.tsx | Prevents duplicate content issues, strengthens search ranking. |
| 🟢 Low | **Fix sym-label color contrast.** #94A3B8 against white = 3.0:1 ratio. Fails WCAG AA (needs 4.5:1). Change to at least #6B7280. | tailwind.config.ts | Fixes accessibility compliance issue that contradicts WCAG 2.2 AA claims in the case study. |

---

### E. Portfolio-as-Product Assessment

**90-Second Scan Test**

In a 90-second scan, a hiring manager absorbs:

1. Headline "Turning Hospital Chaos into Clinical Clarity" — strong, specific, outcome-oriented
2. Hero subtext mentioning 40% triage reduction and 65 clinical staff — good credibility anchors
3. Meta badges (Founding Product Designer, team composition, facility scope)
4. Hero image — polished product screenshot
5. Sticky nav with 11 sections — signals "this is very long"
6. Impact metrics grid with animated counters and before/after values — visually strong

**What they miss:** Research methodology rigor, design evolution with quantified iteration, pivotal moments narrative, honest reflection — all the content that distinguishes this as senior-level work.

**Visual-to-Text Ratio**

Approximately 35% visual / 65% text by screen area. Target for senior portfolio case studies: 55-60% visual / 40-45% text. Images exist and are high quality (Builder.io CDN, proper alt text, zoomable interaction) but separated by large blocks of prose. Videos in ProductShowcase are a strong differentiator but are buried 70% down the page.

**Technical Performance**

- React SPA with no SSR/SSG — search engines see minimal content on initial crawl, hurting SEO for case study discoverability
- Hero image as background-image CSS — no lazy loading, no responsive srcset, poor LCP contribution
- CDN images via Builder.io are good, but no explicit width/height on img tags causes CLS risk
- Global CSS applies transitions to all elements (*) — can cause performance issues during scroll on complex pages
- Three videos loading simultaneously in ProductShowcase could spike bandwidth

**Accessibility Audit**

| Status | Finding |
|---|---|
| ✅ Pass | Skip link present |
| ✅ Pass | ARIA labels on navigation, buttons, zoom images |
| ✅ Pass | aria-current on active sticky nav section |
| ✅ Pass | Keyboard dismiss on zoomed images (Escape) |
| ✅ Pass | Focus-visible ring styling on interactive elements |
| ⚠️ Warning | Sticky nav horizontal scroll has no keyboard scroll affordance |
| ⚠️ Warning | sym-label color (#94A3B8) contrast ratio 3.0:1 — fails WCAG AA (needs 4.5:1) |
| ⚠️ Warning | Reading progress bar at z-[60] could overlap assistive technology overlays |
| ❌ Fail | Videos lack track captions or text alternatives (WCAG 1.2.1) |
| ❌ Fail | AssetPlaceholder communicates no meaningful content to screen readers |

**Differentiation**

- **Stands out:** Quantified pilot results with honest caveats, AI trust-building framework (timely topic), evolution-through-testing with acceptance rates at each stage
- **Doesn't stand out:** Visual presentation follows standard portfolio template (sticky nav, animated metrics, card layouts, gradient accents) — professionally competent but not distinctive vs. portfolios from candidates at Figma, Linear, or Vercel

---

## Full Case Study Rewrite Proposal

### Proposed Structure (8 sections, down from 11)

| # | Section | What Changed | Why (Hiring-Manager Persuasion) |
|---|---|---|---|
| 1 | **Hero** | Remove Scope/Role text block (redundant with badges). Change reading time to "7 min read." | Faster entry. Badges already convey role/scope. 14-min label scares off readers. |
| 2 | **Impact at a Glance** | Inline guardrails/caveats with metrics grid. Keep collapsible business value. | Metrics are the hook — get them in front of readers faster with no interruptions. |
| 3 | **Context** | Merge Overview + Problem. Lead with journey map swim lanes visual. Follow with 4 problem stats. Compact timeline strip. Integrate constraints as horizontal badges. | Eliminates redundancy. Journey map above fold immediately shows design thinking. |
| 4 | **Research** | Lead with 3 research photos in gallery. Methods strip below. Keep insight cards. Cut quotes. Keep competitive analysis as collapsible. | Visuals first = hiring manager sees artifacts before prose. Photos prove work happened. |
| 5 | **Design Evolution** | Keep mostly intact. Add 1 sentence per stage on testing methodology. Move 67% rejection narrative from Pivotal Moments into scheduling evolution. | Strongest section — preserve. Methodology detail strengthens credibility. Consolidation prevents repetition. |
| 6 | **Design Decisions** | Lead each decision with visual artifact, not "Challenge:" text. Image → 1-sentence challenge → approach cards → result callout. | Visual above fold for each decision. Hiring managers see work before explanation. |
| 7 | **Product** | Fix mobile placeholder. Add annotated user flow diagram. | Eliminates deal-breaker. Flow diagram fills interaction design artifact gap. |
| 8 | **Reflection & Impact** | Merge Pivotal Moments + Outcomes + Reflection. Wins/Misses → 1 quote per role → reflection cards → HIPAA pivot. Add stakeholder anecdote. Delete Next Steps and Summary. | Consolidates three sections into one. Adds missing stakeholder evidence. Removes content irrelevant to hiring evaluation. |

### Content Cuts (~40% reduction)

- Remove TL;DR blocks from 7 of 10 sections (keep on Impact, Research, Design Decisions)
- Merge Pivotal Moments into Evolution and Reflection
- Delete Next Steps section (forward-looking roadmap, not hiring-relevant)
- Delete Case Study Summary section (repeats Impact metrics)
- Delete standalone ConstraintsBar section (integrate as compact strip in Context)
- Remove hero Scope/Role text block (redundant with badges)
- Remove duplicated 67% rejection narrative (appears in Evolution and Pivotal Moments)
- Remove duplicated user quotes (appear in Problem and Reflection)

---

## Follow-Up Action Plan

Ordered by impact on hiring decision.

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | **Remove mobile triage placeholder.** Delete the Mobile Triage card from ProductShowcase or replace AssetPlaceholder with a coded mobile frame mockup. | Low (30 min) | Eliminates a deal-breaker. |
| 2 | **Cut case study content by ~40%.** Remove 7 TL;DR blocks. Merge Pivotal Moments. Delete Next Steps + Summary sections. Delete standalone ConstraintsBar. Remove hero Scope/Role block. | Medium (2–3 hrs) | Drops reading time from 14→7 min. Dramatically improves scan survival rate. |
| 3 | **Restructure every section to lead with visuals.** Move primary image/diagram to immediately below each section heading, before prose. JSX reorder within each component. | Medium (2–3 hrs) | Single highest-ROI change for hiring manager engagement. |
| 4 | **Add a stakeholder influence anecdote.** Write 100-word narrative about communicating the automation→augmentation pivot to leadership. Add to Reflection section. | Low (30–45 min) | Addresses "solo contributor" perception gap. |
| 5 | **Fix hero image implementation.** Replace background-image CSS on anchor with img element + width, height, loading="lazy", alt. | Low (20 min) | Improves LCP score and prevents CLS. |
| 6 | **Add testing methodology to Design Evolution.** One sentence per stage: test type, sample size, protocol, secondary metric. | Low (30 min) | Strengthens research credibility. |
| 7 | **Create annotated user flow diagram.** Coded React component: triage inbox → AI recommendation → reasoning panel → accept/override → audit log. | Medium (2–3 hrs) | Fills interaction design artifact gap. |
| 8 | **Fix sym-label color contrast.** Change #94A3B8 to #6B7280 in tailwind.config.ts. | Low (10 min) | Fixes accessibility issue contradicting WCAG claims. |
| 9 | **Add video captions or text alternatives.** Add track elements to ProductShowcase autoplay videos. | Low–Med (1 hr) | WCAG 1.2.1 compliance. |
| 10 | **Consider SSR/SSG for case study page.** Current SPA architecture means search engines see minimal content. Vite SSG plugin or Next.js migration. | High (1–2 days) | Long-term discoverability. Not urgent for direct submissions. |

---

## Bottom Line

The content is senior-level. The research is rigorous, the strategic thinking is sharp, and the honest metrics presentation is refreshing. The gap is entirely in presentation execution — too much text, one broken placeholder, and a structure that buries the strongest evidence behind prose that hiring managers won't read.

**Items 1–3 on the action plan would shift the assessment from Conditional to Hire** for most senior product design roles at high-growth B2B SaaS companies.

**Current Score: 78.8/100 → Projected Score After High-Priority Fixes: 88–92/100**
