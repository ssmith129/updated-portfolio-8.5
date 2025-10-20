# Visual Asset Placeholder Specifications

**Computis Case Study Redesign - Phase 2**

This document provides detailed specifications for all visual assets that need to be created to complete the Computis case study redesign according to the action plan.

---

## Asset Priority Matrix

### HIGH ROI (Create First - Phase 2A)

1. ✅ **Journey Maps** (Current + Future State)
2. ✅ **Information Architecture Diagram**
3. ⏳ **Wireframe Evolution** (3 frames)
4. ⏳ **Metrics Validation Dashboard**

### MEDIUM ROI (Create Next - Phase 2B)

5. ⏳ **Research Synthesis (Affinity Map)**
6. ⏳ **Competitive Analysis Matrix**
7. ⏳ **Persona Cards** (3 personas)
8. ⏳ **Before/After UI Comparison**

### NICE TO HAVE (Phase 3)

9. ⏳ **Design System Component Sheet**
10. ⏳ **Stakeholder Workshop Photo**
11. ⏳ **Technical Architecture Diagram**

---

## 1. USER JOURNEY MAPS ⭐⭐⭐⭐⭐

**Priority:** P0 — Highest ROI  
**Time to Create:** 6-8 hours  
**Tools:** Figma, Miro, or FigJam

### Asset 1A: CPA Journey Map — Current State (Before Computis)

```
Dimensions: 1400px × 900px
Format: PNG or WebP
File Size: <300KB
Location: /public/assets/journey-map-before.webp
```

**Layout Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│ CPA JOURNEY — CURRENT STATE (Before Computis)              │
├───────────────────────────────��─────────────────────────────┤
│ [5 Stages as columns]                                       │
│ 1. Receive Client Data                                     │
│ 2. Request Classification                                  │
│ 3. Wait for Engineering                                    │
│ 4. Review + Adjust                                         │
│ 5. Export for Filing                                       │
├─────────────────────────────────────────────────────────────┤
│ [Rows]                                                      │
│ • Actions (what CPA does)                                   │
│ • Touchpoints (tools used)                                  │
│ • Pain Points (frustrations) ← RED highlights              │
│ • Emotions (faces: 😐 → 😟 → 😫)                          │
│ • Time Spent (2.5 hours total)                             │
└─────────────────────────────────────────────────────────────┘
```

**Color Coding:**

- Pain points: Red background (#FEE2E2)
- Actions: Blue text (#1E40AF)
- Time: Amber badges (#F59E0B)

**Key Pain Points to Highlight:**

- ✗ 85% time waiting for engineers
- ✗ No audit trail for compliance
- ✗ Frequent FMV errors
- ✗ CSV-only exports (manual reformatting)
- ✗ Black-box AI (no reasoning visible)

### Asset 1B: CPA Journey Map — Future State (With Computis)

```
Dimensions: 1400px × 900px
Format: PNG or WebP
File Size: <300KB
Location: /public/assets/journey-map-after.webp
```

**Layout Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│ CPA JOURNEY — FUTURE STATE (With Computis)                 │
├─────────────────────────────────────────────────────────────┤
│ [5 Stages as columns]                                       │
│ 1. Import Wallets (Self-Service)                           │
│ 2. Build Rules (No-Code)                                   │
│ 3. Review AI Classifications                               │
│ 4. Override + Annotate                                     │
│ 5. Export (IRS 8949 + QuickBooks)                          │
├─────────────────────────────────────────────────────────────┤
│ [Rows]                                                      │
│ • Actions (what CPA does)                                   │
│ • Touchpoints (Computis features)                           │
│ • Improvements (solved problems) ← GREEN highlights        │
│ • Emotions (faces: 😊 → 😄 → 🎉)                          │
│ • Time Spent (1.4 hours total - 45% reduction)             │
└─────────────────────────────────────────────────────────────┘
```

**Color Coding:**

- Improvements: Green background (#D1FAE5)
- Actions: Purple text (#7C3AED)
- Time Saved: Green badges (#10B981)

**Key Improvements to Highlight:**

- ✓ Self-service wallet import (no engineer)
- ✓ Visual rule builder (no code)
- ✓ Confidence chips + hover reasoning
- ✓ Inline audit trail drawer
- ✓ One-click exports (IRS + QuickBooks)

---

## 2. INFORMATION ARCHITECTURE DIAGRAM ⭐⭐⭐⭐⭐

**Priority:** P0 — Shows Systems Thinking  
**Time to Create:** 4-5 hours  
**Tools:** Figma or Whimsical

```
Dimensions: 1400px × 1000px
Format: PNG or WebP
File Size: <250KB
Location: /public/assets/ia-diagram.webp
```

**Layout Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│                   COMPUTIS IA — SITEMAP                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│         [Dashboard]                                         │
│              │                                              │
│     ┌────────┴────────┬────────┬────────┐                 │
│     │                 │        │        │                  │
│ [Clients]        [Settings] [Reports] [Help]               │
│     │                                                       │
│ ┌───┴───┬─────┬─────┐                                     │
│ │       │     │     │                                      │
│[View] [Add] [Edit] [Archive]                               │
│ │                                                           │
│ └──> [Wallets] (Sub-level)                                 │
│         │                                                   │
│     ┌───┴───┬─────┬─────┐                                 │
│     │       │     │     │                                  │
│  [View] [Import] [Sync] [History]                          │
│     │                                                       │
│     └──> [Transactions] (Sub-level)                        │
│             │                                               │
│         ┌───┴───┬─────┬─────┐                             │
│         │       │     │     │                              │
│     [Browse] [Filter] [Classify] [Audit Trail]             │
│         │                                                   │
│         └──> [Rules] (Sub-level)                           │
│                 │                                           │
│             ┌───┴───┬─────┬─────┐                         │
│             │       │     │     │                          │
│         [Create] [Edit] [Test] [Apply]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ROLE-BASED PERMISSIONS:                                    │
│ • CPA: Full access to Rules + Audit + Override             │
│ • Analyst: Ingestion + Anomalies                           │
│ • Admin: Multi-client operations + Team settings           │
└─────────────────────────────────────────────────────────────┘
```

**Visual Design:**

- Primary nodes: Blue rounded rectangles (#3B82F6)
- Secondary nodes: Purple rounded rectangles (#8B5CF6)
- Tertiary nodes: Green rounded rectangles (#10B981)
- Connections: Gray arrows with labels
- Role badges: Color-coded tags on relevant sections

**Annotations to Include:**
→ "Self-service entry point (no engineer)"
→ "Audit trail accessible at every level"
→ "Modular structure enables jurisdiction expansion"
→ "Role-based views filter navigation dynamically"

---

## 3. WIREFRAME EVOLUTION ⭐⭐⭐⭐

**Priority:** P0 — Proves Process Rigor  
**Time to Create:** 6-8 hours  
**Tools:** Figma

**Focus Flow:** Visual Rule Builder (most impactful feature)

```
Dimensions: 1400px × 800px (each frame)
Format: PNG or WebP
File Size: <200KB per frame
```

### Three Frames to Create:

#### FRAME 1: Lo-Fi Sketch (Week 2)

```
Location: /public/assets/rule-builder-lofi.webp

Content:
• Hand-drawn sketches or grayscale wireframes
• Shows 3 alternative approaches:
  A. Form-based builder (rejected)
  B. Natural language input (rejected)
  C. Visual drag-and-drop (chosen)
• Annotation: "Tested with 8 CPAs → 7/8 preferred C"
```

#### FRAME 2: Mid-Fi Prototype (Week 5)

```
Location: /public/assets/rule-builder-midfi.webp

Content:
• Grayscale Figma prototype with real content
• Shows key improvements from usability testing:
  - Live preview pane added (requested by 6/8 CPAs)
  - Undo/redo controls (confusion during tests)
  - Field validation indicators (error prevention)
• Annotation: "Usability test insights integrated"
```

#### FRAME 3: Hi-Fi Final (Week 8)

```
Location: /public/assets/rule-builder-hifi.webp

Content:
• Full color, production-ready design
• Shows all refinements:
  - Dark theme (extended use optimization)
  - Confidence chips integrated
  - Drag handles + visual feedback
• Annotation: "Launched Aug 2023 → 85% eng reduction"
```

**Visual Design:**

- Lo-Fi: Black sketches on white, hand-drawn style
- Mid-Fi: Grayscale, clean lines, annotations in red
- Hi-Fi: Full brand colors, polished shadows/borders

---

## 4. METRICS VALIDATION DASHBOARD ⭐⭐⭐⭐

**Priority:** P0 — Adds Credibility  
**Time to Create:** 3-4 hours  
**Tools:** Figma or screenshot from Mixpanel/GA

```
Dimensions: 1400px × 700px
Format: PNG or WebP
File Size: <250KB
Location: /public/assets/metrics-validation-dashboard.webp
```

**Layout Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│              COMPUTIS METRICS VALIDATION                    │
│                  (Oct 2022 - Aug 2023)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METRIC 1: CPA Onboarding Time                             │
│  ┌───────────────────────────────────────────────┐         │
│  │ [Line chart showing decline]                  │         │
│  │ Pre-beta: 2.5h avg (Oct 2022)   →            │         │
│  │ Post-beta: 1.4h avg (Aug 2023)                │         │
│  │                                                │         │
│  │ Sample: 12 CPAs (6 pre, 6 post)              │         │
│  │ Method: Task analysis (Wallet → Rule → Export)│         │
│  │ Tool: Mixpanel funnel + recorded sessions     │         │
│  └───────────────────────────────────────────────┘         │
│                                                             │
│  METRIC 2: Demo-to-Conversion Rate                         │
│  ┌───────────────────────────────────────────────┐         │
│  │ [Bar chart comparison]                        │         │
│  │ Q1 2023: 22% (control)                        │         │
│  │ Q3 2023: 29% (+32% increase)                  │         │
│  │                                                │         │
│  │ Sample: 47 demos analyzed                     │         │
│  │ A/B test: Explainability features enabled     │         │
│  │ Tool: HubSpot + manual analysis               │         │
│  └───────────────────────────────────────────────┘         │
│                                                             │
│  METRIC 3: Engineering Dependency                          │
│  ┌───────────────────────────────────────────────┐         │
│  │ [Pie chart: Before vs After]                  │         │
│  │ Before: 85% tasks needed engineer             │         │
│  │ After: 12% tasks needed engineer              │         │
│  │                                                │         │
│  │ Sample: 200 classification requests tracked   │         │
│  │ Method: Jira ticket analysis (6 months)       │         │
��  │ Tool: Jira API + custom dashboard             │         │
│  └───────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

**Visual Design:**

- Charts: Real data (even if anonymized/simplified)
- Colors: Match brand (amber, blue, green)
- Annotations: Highlight key inflection points
- Sources: Show tool names (Mixpanel, GA, Jira)

---

## 5. RESEARCH SYNTHESIS (AFFINITY MAP) ⭐⭐⭐

**Priority:** P1 — Shows Research Rigor  
**Time to Create:** 3-4 hours  
**Tools:** Miro, FigJam, or Figma

```
Dimensions: 1400px × 900px
Format: PNG or WebP
File Size: <300KB
Location: /public/assets/research-affinity-map.webp
```

**Layout Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│           RESEARCH SYNTHESIS: CPA PAIN POINTS               │
│         (8 Interviews + 6 Shadowing Sessions)               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  THEME 1: Trust & Control (23 mentions)                    │
│  ┌────────────────────────────────────────┐                │
│  │ [Yellow sticky notes]                  │                │
│  │ • "Can't defend what I don't understand"│                │
│  │ • "Need to override AI mistakes"        │                │
│  │ • "Black box = liability risk"          │                │
│  │ • "Show me the reasoning"               │                │
│  └────────────────────────────────────────┘                │
│                                                             │
│  THEME 2: Autonomy & Speed (18 mentions)                   │
│  ┌────────────────────────────────────────┐                │
│  │ [Blue sticky notes]                    │                │
│  │ • "Waiting for engineers kills velocity"│                │
│  │ • "Simple changes take days"            │                │
│  │ • "Need self-service tools"             │                │
│  │ • "Can't scale without autonomy"        │                │
│  └────────────────────────────────────────┘                │
│                                                             │
│  THEME 3: Compliance & Audit (15 mentions)                 │
│  ┌────────────────────────────────────────┐                │
│  │ [Red sticky notes]                     │                │
│  │ • "No audit trail for IRS defense"     │                │
│  │ • "Manual documentation is error-prone" │                │
│  │ • "Need tamper-proof records"          │                │
│  └────────────────────────────────────────┘                │
│                                                             │
│  THEME 4: Accuracy & Errors (12 mentions)                  │
│  ┌��───────────────────────────────────────┐                │
│  │ [Orange sticky notes]                  │                │
│  │ • "FMV discrepancies cause disputes"    │                │
│  │ • "Classification errors are costly"    │                │
│  │ • "Need anomaly detection"             │                │
│  └────────────────────────────────────────┘                │
└─────────────────────────────────────────────────────────────┘
```

**Visual Design:**

- Sticky notes: Different colors per theme
- Quotes: Real verbatim from interviews
- Numbers: Show frequency of mentions
- Arrows: Connect related insights

---

## 6. COMPETITIVE ANALYSIS MATRIX ⭐⭐⭐

**Priority:** P1 — Shows Market Awareness  
**Time to Create:** 2-3 hours  
**Tools:** Figma or Google Sheets → Screenshot

```
Dimensions: 1400px × 600px
Format: PNG or WebP
File Size: <200KB
Location: /public/assets/competitive-analysis-matrix.webp
```

**Layout Structure:**

```
┌────���─────────────────────────────────────────────────────────────────┐
│            COMPETITIVE ANALYSIS: CRYPTO TAX PLATFORMS                │
├──────────────────────────────────────────────────────────────────────┤
│ Feature               │ Computis │ TaxBit │ Cryptio │ CoinTracker  │
├──────────────────────────────────────────────────────────────────────┤
│ Visual Rule Builder   │    ✓     │   ✗    │    ✗    │      ✗       │
│ AI Confidence Chips   │    ✓     │   ✗    │    ✗    │      ✗       │
│ Audit Trail Drawer    │    ✓     │  Partial│    ✓    │    Partial   │
│ CPA Override Control  │    ✓     │   ✗    │    ✓    │      ✗       │
│ No-Code Custom Rules  │    ✓     │   ✗    │    ✗    │      ✗       │
│ Multi-Tenant Dashboard│    ✓     │   ✓    │    ✓    │      ✗       ��
│ IRS 8949 Export       │    ✓     │   ✓    │    ✓    │      ✓       │
│ QuickBooks Integration│    ✓     │   ✓    │    ✗    │    Partial   │
│ Real-Time Anomaly Det.│    ✓     │ Partial│    ✗    │      ✗       │
├──────────────────────────────────────────────────────────────────────┤
│ COMPETITIVE ADVANTAGE:                                               │
│ • Only platform with visual rule builder (no code)                  │
│ • Only platform with AI confidence chips (explainability)           │
│ • Only platform with real-time contextual anomaly detection         │
└──────────────────────────────────────────────────────────────────────┘
```

**Visual Design:**

- Checkmarks: Green ✓
- X marks: Red ✗
- Partial: Amber ~
- Computis column: Highlighted in brand blue
- Competitive advantages: Bold text at bottom

---

## 7. PERSONA CARDS ⭐⭐⭐

**Priority:** P1 — Shows User-Centered Thinking  
**Time to Create:** 2-3 hours  
**Tools:** Figma

**Create 3 Persona Cards:**

1. Primary: Lead CPA (Decision Maker)
2. Secondary: Operations Analyst (Power User)
3. Tertiary: Admin (Multi-Client Manager)

```
Dimensions: 400px × 600px (each card)
Format: PNG or WebP
File Size: <150KB per card
Locations:
  - /public/assets/persona-cpa.webp
  - /public/assets/persona-analyst.webp
  - /public/assets/persona-admin.webp
```

**Card Layout Structure:**

```
┌─────────────────────────────────────────┐
│  [Photo or Avatar]                      │
├─────────────────────────────────────────┤
│  NAME: Sarah Chen                       │
│  ROLE: Lead CPA                         │
│  AGE: 38 │ LOCATION: San Francisco     │
├─────────────────────────────────────────┤
│  BACKGROUND:                            │
│  • 12 years tax accounting experience   │
│  • Manages 40+ crypto clients           │
│  • Works at mid-size CPA firm (20 staff)│
├──────────────────────────────────────���──┤
│  GOALS:                                 │
│  ✓ Defend tax positions to IRS          │
│  ✓ Scale client load without more staff │
│  ✓ Reduce manual classification time    │
├─────────────────────────────────────────┤
│  FRUSTRATIONS:                          │
│  ✗ Can't modify rules without engineers │
│  ✗ Black-box AI creates liability risk  │
│  ✗ No audit trail for compliance        │
├─────────────────────────────────────────┤
│  QUOTE:                                 │
│  "I can't defend tax positions          │
│   I don't understand"                   │
├─────────────────────────────────────────┤
│  KEY NEEDS:                             │
│  • Transparency in AI reasoning         │
│  • Override control for edge cases      │
│  • Audit-ready documentation            │
└─────────────────────────────────────────┘
```

**Visual Design:**

- Use consistent template for all 3 personas
- Icons for goals (✓) and frustrations (✗)
- Real quote in italics with quote marks
- Professional stock photos or illustrated avatars

---

## Implementation Checklist

### Phase 2A (Week 1-2) - High Priority Assets

- [ ] Create Journey Map - Before (Asset 1A)
- [ ] Create Journey Map - After (Asset 1B)
- [ ] Create IA Diagram (Asset 2)
- [ ] Create Wireframe Evolution Lo-Fi (Asset 3, Frame 1)
- [ ] Create Wireframe Evolution Mid-Fi (Asset 3, Frame 2)
- [ ] Create Wireframe Evolution Hi-Fi (Asset 3, Frame 3)
- [ ] Create Metrics Dashboard (Asset 4)

### Phase 2B (Week 3) - Medium Priority Assets

- [ ] Create Research Affinity Map (Asset 5)
- [ ] Create Competitive Analysis Matrix (Asset 6)
- [ ] Create Persona Card - Lead CPA (Asset 7A)
- [ ] Create Persona Card - Analyst (Asset 7B)
- [ ] Create Persona Card - Admin (Asset 7C)

### Phase 3 (Week 4) - Nice to Have

- [ ] Create Before/After UI Comparison
- [ ] Create Design System Component Sheet
- [ ] Optimize all images (compress, convert to WebP)
- [ ] Add proper alt text to all images
- [ ] Test image loading performance

---

## File Naming Convention

All assets should follow this naming pattern:

```
{asset-type}-{descriptor}-{variant}.webp
```

Examples:

- `journey-map-before.webp`
- `journey-map-after.webp`
- `ia-diagram.webp`
- `rule-builder-lofi.webp`
- `rule-builder-midfi.webp`
- `rule-builder-hifi.webp`
- `metrics-dashboard.webp`
- `research-affinity-map.webp`
- `competitive-matrix.webp`
- `persona-cpa.webp`
- `persona-analyst.webp`
- `persona-admin.webp`

---

## Image Optimization Checklist

Before adding any asset to the project:

- [ ] Compress image to target file size
- [ ] Convert to WebP format (with PNG fallback if needed)
- [ ] Verify dimensions match specifications
- [ ] Add descriptive alt text
- [ ] Test loading performance
- [ ] Ensure WCAG contrast compliance for any text in images

---

## Next Steps

1. **Design Assets in Figma/Miro** - Create all visual assets following specifications above
2. **Export Optimized Files** - Convert to WebP, compress, and rename according to convention
3. **Update React Component** - Replace placeholder divs with actual images in `ComputisCaseStudy_REDESIGNED.tsx`
4. **Test Visual Hierarchy** - Ensure assets improve comprehension and reduce text density
5. **Validate with Users** - Test with 3-5 designers for feedback

---

**Last Updated:** January 2025  
**Status:** Ready for Asset Creation
