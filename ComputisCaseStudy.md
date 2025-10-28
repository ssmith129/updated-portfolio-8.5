# Computis: Turning CPAs from AI Skeptics to Power Users

**FinTech UX Case Study**

Transforming a crypto tax backend into a transparent, audit-ready platform that enabled self-service workflows and secured 3 enterprise partnerships in 6 months

---

## Project Details

- **Role:** Founding Lead Product Designer
- **Team:** CTO, PM, 2 Engineers, Agency Partner
- **Duration:** 10 months
- **Tools:** Figma, Miro, Notion, Jira, Mixpanel

### Impact at a Glance

**↓ 45% CPA onboarding time** (2.5h → 1.4h)
*Time-to-first-successful-report across 12 enterprise onboardings, Q3-Q4 2023*

**→ 32% demo-to-conversion rate** (18% → 50%)
*Signed contracts / Demos delivered, N=22 enterprise deals*

**↓ 85% engineering dependency** (94% → 9%)
*Classification tasks requiring dev tickets, N=847 tasks*

**→ 150% anomaly detection coverage**
*Flagged FMV discrepancies vs. manual audit baseline*

---

## The Design Problem Wasn't UX—It Was Trust

### The Business Context

Computis had powerful crypto tax automation technology built on Python scripts, but:

- CPAs refused to adopt tools they couldn't audit
- Sales demos required engineer-led terminal sessions
- Every client onboarding needed custom scripting
- Competitors (TaxBit, Cryptio) had polished UIs but lacked CPA workflow depth

### The Core Insight

After shadowing 12 CPAs across Big 4 and mid-market firms:

> "I don't trust black-box automation with IRS filings. Show me the logic, or I'll do it manually."
> — Senior Tax Manager, Big 4 Firm

### The Strategic Realization

CPAs didn't need *simpler* software—they needed **transparency at the point of automation**.

---

## Research & Discovery

Over 10 weeks, I led foundational research:

- 8 CPA + tax analyst interviews
- 6 workflow shadowing sessions
- Competitive analysis (TaxBit, Cryptio, CoinTracker, ZenLedger)
- 4 usability testing cycles

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

## Competitive Positioning

### Market Gaps

- Consumer tools lack audit-grade compliance features
- Enterprise platforms use opaque AI that CPAs can't validate
- No platforms designed for CPA-first workflows with client management
- Existing tools force reliance on engineering teams for rule customization

### Strategic Differentiators

- Only platform designed from ground up for CPA workflows
- Explainable AI with confidence chips and rationale tooltips
- Visual rule builder eliminating engineering dependencies
- Complete audit trail system for compliance validation
- Lower total cost of ownership through self-service capabilities

---

## Design Process

I applied a **trust-first, professional-centered** approach across 10 months:

### Key Methods

- **Journey Mapping** — Documented workflows for CPA, Analyst, Admin personas
- **Trust Framework** — Established design principles: transparency > efficiency, augmentation > automation
- **Rapid Prototyping** — Sketches → wireframes → interactive prototypes with continuous CPA validation
- **Design System** — Built component library optimized for extended professional use

---

## Solution: Five Design Decisions

### 1. AI Confidence Chips + Override Control

**Challenge:** CPAs distrusted automation

**Solution:** Confidence-level badges (High/Medium/Low) with hover reasoning + one-click override

**Impact:** ↓70% false positives; → AI trust & adoption

---

### 2. Inline Audit Trail Drawer

**Challenge:** No compliance visibility

**Solution:** Persistent contextual audit log showing classification history, rule changes, override rationale

**Impact:** ↓40% compliance tickets; enabled independent IRS audit defense

---

### 3. Visual Rule Builder (No-Code)

**Challenge:** Engineer dependency

**Solution:** Drag-and-drop natural language rule builder with real-time preview

**Impact:** ��85% engineering reliance; →32% conversions

---

### 4. Contextual Anomaly Detection

**Challenge:** Hidden FMV errors

**Solution:** Inline color-coded flags (🔴 Critical, 🟡 Warning, 🟢 OK) with hover tooltips

**Impact:** →150% anomaly detection; ↓ manual triage

---

### 5. Role-Based Multi-Tenant Dashboard

**Challenge:** CPA firms manage 100+ clients

**Solution:** Client-scoped views with role permissions (CPA/Analyst/Admin)

**Impact:** Enabled portfolio-scale management

---

## Design System & Components

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

- **↓45% CPA onboarding time** (2.5h → 1.4h)
- **→32% demo-to-conversion rate** (18% → 50%)
- **↓85% engineering dependency** (94% → 9% of tasks)
- **→150% anomaly detection coverage**
- **↓40% support tickets**
- **Zero FMV disputes** post-launch

### Business Outcomes

✅ Secured 3 enterprise CPA partnerships in 6 months

✅ Scaled to DAOs, hedge funds, and multi-client firms

✅ Reduced support overhead enabling leaner ops team

✅ Transparency positioning drove competitive differentiation

> "Your handoffs made us 10x faster. Edge case docs were incredible."
> — Engineering Lead

---

## Key Learnings

**1. Trust is a UX Principle**

Explainability drove adoption more than feature quantity. Transparency converted skeptics into advocates.

**2. Systems > Screens**

Modular IA enabled scaling. Role-based architecture future-proofed for growth across 100+ client portfolios.

**3. AI + Human Collaboration**

Override control flipped AI from threat to tool. Confidence indicators enabled informed decisions.

**4. Design Drives Business**

Self-service features reduced costs. Audit trails closed enterprise deals and differentiated from competitors.

---

## What I'd Do Differently

**1. Earlier Engineering Involvement**

I involved developers at hi-fi stage. Starting at wireframes would have caught technical constraints sooner.

**2. More Structured Usability Testing**

Ad-hoc testing worked but formal protocols (think-aloud, task completion metrics) would have yielded richer data.

**3. Competitive Monitoring System**

I analyzed competitors once. Ongoing tracking would have revealed emerging patterns and feature gaps faster.

---

## Media Assets

### Hero Section
- Dashboard interface video with transaction table, confidence chip badges, and right-side audit drawer

### Research & Discovery
- `research-synthesis-affinity-wall.png` (1200x842px)
- `current-state-journey-map.png` (1400x510px)

### Workflows
- `before-workflow-pain-points.png` (1000x500px)

### Competitive Analysis
- `competitive-analysis-matrix.png` (1300x650px)

### Design Process
- `design-process-evolution.png` (1400x480px)

### Solution Demos (Videos/Images)
- `AI-Confidence-Tags.mp4` - AI confidence chips with hover states
- `Inline-Audit-Drawer.mp4` - Audit trail drawer interaction
- `Rule-Builder.mp4` - Visual rule builder demo
- `Data-Anomaly-Detection.mp4` - Anomaly flags in context
- `Multi-Tenant-View.mp4` - Multi-client dashboard

### Design System
- `design-system-overview.png` (1400x1000px)

---

**Live Prototype:** [https://computis.netlify.app/](https://computis.netlify.app/)
