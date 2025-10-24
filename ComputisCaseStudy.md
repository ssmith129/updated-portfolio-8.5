# Computis: Turning CPAs from AI Skeptics to Power Users

Transforming a crypto tax backend into a transparent, audit-ready platform that enabled self-service workflows and secured 3 enterprise partnerships in 6 months

**FinTech UX • Enterprise SaaS • 2023 • Founding Lead Product Designer**

## [View Live Prototype →](https://computis.netlify.app/)

```
→ [KEEP: builder-95fb18199b0e4061ac680f6df68860da
Caption: "Computis dashboard showing AI confidence levels, inline audit trails, and self-service rule builder"
Alt: "Dashboard interface with transaction table, confidence chip badges, and right-side audit drawer"
```

---

## The Transformation

In early 2022, Computis CPAs waited 85% of their time for engineers to modify classification scripts. No audit trails. No explainability. No professional autonomy. By October 2022, CPAs built custom rules in under 90 seconds—without code.

### Impact at a Glance

**↓ 45% CPA onboarding time (2.5h → 1.4h)**  
*Time-to-first-successful-report across 12 enterprise onboardings, Q3-Q4 2023*

**↑ 32% demo-to-conversion rate (18% → 50%)**  
*Signed contracts / Demos delivered, N=22 enterprise deals*

**↓ 85% engineering dependency (94% → 9%)**  
*Classification tasks requiring dev tickets, N=847 tasks*

**↑ 150% anomaly detection coverage**  
*Flagged FMV discrepancies vs. manual audit baseline*

---

## The Problem

> "I'd spend 2 hours explaining classification logic to an engineer, they'd run a script, and I'd have no idea if the AI got it right. When the IRS audits my client, I can't defend decisions I can't explain."  
> — Senior CPA, Enterprise Crypto Tax Firm

### Three Critical Failures

1. **No Professional Autonomy** — CPAs waited 85% of their time for engineers to modify Python scripts

2. **Zero Audit Trail** — No compliance documentation for AI decisions = liability risk for professional licenses

3. **Black-Box Distrust** — Hidden AI confidence prevented CPAs from validating or overriding classifications

```
→ [INSERT: before-workflow-pain-points.png - 1000x600px]
CPA → Request ticket → Engineer → Python script → Results → CPA (annotated with wait times)
```

---

## Research & Discovery

Over 10 weeks, I led foundational research:

- 8 CPA + tax analyst interviews
- 6 workflow shadowing sessions
- Competitive analysis (TaxBit, Cryptio, CoinTracker, ZenLedger)
- 4 usability testing cycles

```
→ [INSERT: research-synthesis-affinity-wall.png - 1200x800px]
Sticky note affinity diagram showing 127 insights → 5 key themes

→ [INSERT: current-state-journey-map.png - 1400x900px]
CPA workflow from intake → final report, pain points highlighted
```

### Five Critical Insights

**1. Professional Liability Trumps Efficiency**  
CPAs must defend every classification to the IRS. "Black-box" AI creates legal risk.  
*Impact: Transparency became non-negotiable*

**2. Engineering Dependency Blocks Scale**  
85% of CPA time spent on dev tickets. Average turnaround: 2.3 days.  
*Impact: Self-service became core value prop*

**3. Audit Trails Drive Enterprise Sales**  
3/4 competitors lacked history. This became Computis's moat.  
*Impact: Audit drawer prioritized in MVP*

**4. Bulk Operations Required**  
Manual: 12 min/transaction. Average client: 3,000+ transactions.  
*Impact: Rule builder with scale designed*

**5. Trust Through Control**  
CPAs wanted assistance, not replacement. Override tested as must-have.  
*Impact: Graduated autonomy system built*

---

## Competitive Landscape Analysis

### Market Context

The crypto tax software market in 2022-2023 was dominated by consumer-first platforms (CoinTracker, ZenLedger) and emerging enterprise players (TaxBit, Cryptio). However, a critical gap existed: **no platform was purpose-built for CPA workflows**.

### Detailed Competitive Assessment

#### TaxBit
**Strengths:**
- Enterprise positioning with institutional clients
- Strong API integrations with exchanges
- AI-assisted classification with some transparency

**Weaknesses:**
- No visual rule builder for CPAs
- Limited audit trail capabilities
- Engineer-dependent for custom logic
- Black-box AI confidence scoring

**Opportunity Gap:** CPAs still relied on engineering teams for 70%+ of classification customizations

#### Cryptio
**Strengths:**
- Multi-jurisdictional tax compliance
- QuickBooks integration
- Strong European market presence

**Weaknesses:**
- No self-service rule engine
- Partial audit logging (export-only, not inline)
- Limited anomaly detection for FMV errors
- Opaque AI decision-making

**Opportunity Gap:** No real-time compliance visibility or CPA-controlled overrides

#### CoinTracker
**Strengths:**
- Consumer-friendly UI/UX
- Extensive exchange integrations
- Large user base

**Weaknesses:**
- Consumer-focused (not CPA-ready)
- No audit trail whatsoever
- No rule builder or bulk operations
- Zero AI explainability

**Opportunity Gap:** Completely unfit for professional accounting workflows

#### ZenLedger
**Strengths:**
- Hybrid consumer/professional positioning
- QuickBooks export capabilities
- Some bulk tagging features

**Weaknesses:**
- Basic rule engine (text-based, not visual)
- Partial audit trails (limited to exports)
- No FMV anomaly dashboard
- Minimal AI confidence visibility

**Opportunity Gap:** Rule builder existed but was too technical for non-engineer CPAs

### Computis Differentiation Strategy

Based on competitive analysis, Computis positioned as **the only CPA-first crypto tax platform** with:

1. **Visual Rule Builder**  
   No competitor offered drag-and-drop, natural language rule creation. TaxBit and Cryptio required engineering tickets. ZenLedger's text-based builder required coding knowledge.

2. **Inline Audit Trail**  
   TaxBit had partial logging; Cryptio offered export-only history. CoinTracker had none. Computis embedded audit trails directly in the workflow with real-time visibility.

3. **Explainable AI with Override Control**  
   TaxBit showed confidence but limited override. Others hid AI reasoning entirely. Computis surfaced confidence levels, rationale tooltips, and one-click overrides.

4. **FMV Anomaly Dashboard**  
   Zero competitors offered proactive Fair Market Value error detection. Computis flagged discrepancies with color-coded severity (Critical/Warning/OK).

5. **Multi-Tenant Portfolio Management**  
   Most tools were single-client focused. Computis designed for CPA firms managing 100+ client portfolios with role-based permissions.

### Competitive Feature Matrix

| Feature                    | Computis | TaxBit | Cryptio | CoinTracker | ZenLedger |
|---------------------------|:--------:|:------:|:-------:|:-----------:|:---------:|
| Visual Rule Engine        | ✅       | ❌     | ❌      | ❌          | ⚠️        |
| AI + Override Control     | ✅       | ✅     | ⚠️      | ❌          | ❌        |
| Inline Audit Trail        | ✅       | ✅     | ⚠️      | ❌          | ⚠️        |
| QuickBooks Export         | ✅       | ⚠️     | ✅      | ⚠️          | ✅        |
| FMV Anomaly Detection     | ✅       | ⚠️     | ❌      | ❌          | ❌        |
| Multi-Tenant Management   | ✅       | ⚠️     | ⚠️      | ❌          | ⚠️        |
| Explainable AI            | ✅       | ⚠️     | ❌      | ❌          | ❌        |
| Bulk Operations           | ✅       | ✅     | ⚠️      | ❌          | ⚠️        |

**Legend:**  
✅ = Full feature  
⚠️ = Partial or limited  
❌ = Not available

### Market Positioning Outcome

This differentiation enabled Computis to:
- Win 3 enterprise CPA firm partnerships in 6 months
- Convert 32% more demos than industry average
- Position as "the accountant's crypto tax platform" vs. "another AI tool"
- Reduce competitive objections from 68% to 22% in sales cycles

**Key Insight:** Competitors optimized for automation; Computis optimized for professional control and compliance. This trust-first approach resonated with risk-averse CPA buyers.

---

## Design Process

I applied a **trust-first, professional-centered** approach across 10 months:

```
→ [INSERT: design-process-evolution.png - 1400x400px]
Low-fi sketches → Mid-fi wireframes → Hi-fi prototypes → Beta product
```

### Key Methods

- **Journey Mapping** — Documented workflows for CPA, Analyst, Admin personas
- **Trust Framework** — Established design principles: transparency > efficiency, augmentation > automation
- **Rapid Prototyping** — Sketches → wireframes → interactive prototypes with continuous CPA validation
- **Design System** — Built component library optimized for extended professional use

```
→ [INSERT: sketches-wireframes-panel.jpg - 1200x800px, 3-panel comparison]
Panel 1: Initial sketches of rule builder
Panel 2: Wireframe iteration
Panel 3: Final hi-fi design
```

---

## Solution: Five Design Decisions

### 1. AI Confidence Chips + Override Control

**Challenge:** CPAs distrusted automation

**Solution:** Confidence-level badges (High/Medium/Low) with hover reasoning + one-click override

**Impact:** ↓70% false positives; ↑ AI trust & adoption

```
→ [INSERT: confidence-chips-before-after.png - 1200x700px, split screen]
BEFORE: No confidence visible | AFTER: Color-coded chips with reasoning tooltip
```

### 2. Inline Audit Trail Drawer

**Challenge:** No compliance visibility

**Solution:** Persistent contextual audit log showing classification history, rule changes, override rationale

**Impact:** ↓40% compliance tickets; enabled independent IRS audit defense

```
→ [INSERT: audit-drawer-annotated.png - 1200x700px]
Drawer interface with timestamps, user attribution, change log
```

### 3. Visual Rule Builder (No-Code)

**Challenge:** Engineer dependency

**Solution:** Drag-and-drop natural language rule builder with real-time preview

**Impact:** ↓85% engineering reliance; ↑32% conversions

```
→ [INSERT: rule-builder-interaction.png - 1200x700px]
Step-by-step: Select condition → Add criteria → Preview → Save
```

### 4. Contextual Anomaly Detection

**Challenge:** Hidden FMV errors

**Solution:** Inline color-coded flags (🔴 Critical, 🟡 Warning, 🟢 OK) with hover tooltips

**Impact:** ↑150% anomaly detection; ↓ manual triage

```
→ [INSERT: anomaly-flags-system.png - 1200x700px]
Transaction table with inline severity indicators
```

### 5. Role-Based Multi-Tenant Dashboard

**Challenge:** CPA firms manage 100+ clients

**Solution:** Client-scoped views with role permissions (CPA/Analyst/Admin)

**Impact:** Enabled portfolio-scale management

```
→ [INSERT: multi-tenant-views.png - 1200x700px, 3-panel]
Panel 1: CPA view | Panel 2: Analyst view | Panel 3: Admin view
```

---

## Stakeholder Alignment: The Override Control Debate

**Conflict:**  
CTO wanted full automation; CPAs demanded override control for liability protection

**My Approach:**
1. Facilitated design workshop with CPA + CTO
2. Presented competitor data (40% G2 "black-box" complaints)
3. Proposed graduated autonomy: High confidence → Auto / Medium → Review / Low → Manual

**Outcome:**  
CTO aligned after seeing market positioning demo. Override control became product differentiator. Closed enterprise deal after feature demo.

> "The first crypto tax tool I'd stake my license on."  
> — CPA Client

---

## Outcomes & Business Impact

### Quantified Results

- **↓ 45% CPA onboarding time** (2.5h → 1.4h)
- **↑ 32% demo-to-conversion rate** (18% → 50%)
- **↓ 85% engineering dependency** (94% → 9% of tasks)
- **↑ 150% anomaly detection coverage**
- **↓ 40% support tickets**
- **Zero FMV disputes** post-launch

### Business Outcomes

✅ Secured 3 enterprise CPA partnerships in 6 months  
✅ Scaled to DAOs, hedge funds, and multi-client firms  
✅ Reduced support overhead enabling leaner ops team  
✅ Transparency positioning drove competitive differentiation

> "Your handoffs made us 10x faster. Edge case docs were incredible."  
> — Engineering Lead

---

## Design System & Components

```
→ [INSERT: design-system-overview.png - 1400x1000px]
Shows: Typography scale, color palette (with WCAG ratios), 8 components, spacing system
```

### Key Components Built

- **Confidence Chip** — 3 states (High/Med/Low) with semantic colors
- **Audit Drawer** — Persistent right-rail with timestamp timeline
- **Rule Builder Card** — Drag-drop interface with condition logic
- **Anomaly Flag** — Inline severity indicator with tooltip
- **Multi-Select Filter** — Advanced transaction filtering
- **Data Table** — Virtualized, sortable, with bulk actions
- **Toast Notifications** — Non-blocking feedback system
- **Modal Patterns** — Confirmation, info, destructive actions

---

## Key Learnings

### 1. Trust is a UX Principle

Explainability drove adoption more than feature quantity. Transparency converted skeptics into advocates.

### 2. Systems > Screens

Modular IA enabled scaling. Role-based architecture future-proofed for growth across 100+ client portfolios.

### 3. AI + Human Collaboration

Override control flipped AI from threat to tool. Confidence indicators enabled informed decisions.

### 4. Design Drives Business

Self-service features reduced costs. Audit trails closed enterprise deals and differentiated from competitors.

---

## What I'd Do Differently

### 1. Earlier Engineering Involvement

I involved developers at hi-fi stage. Starting at wireframes would have caught technical constraints sooner.

### 2. More Structured Usability Testing

Ad-hoc testing worked but formal protocols (think-aloud, task completion metrics) would have yielded richer data.

### 3. Competitive Monitoring System

I analyzed competitors once. Ongoing tracking would have revealed emerging patterns and feature gaps faster.

---

## Project Details

- **Role:** Founding Lead Product Designer
- **Team:** CTO, PM, 2 Engineers, Agency Partner
- **Duration:** 10 months (March–December 2022)
- **Tools:** Figma, Miro, Notion, Jira, Mixpanel

[View Live Prototype →](https://computis.netlify.app/)
