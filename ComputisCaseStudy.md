# Computis – Crypto Tax Engine

Transforming a backend script into an enterprise-grade, CPA-first SaaS platform

- Live Platform: https://computis.netlify.app

---

## TL;DR

### From command-line script to CPA-first enterprise SaaS

- Role: Lead Product Designer
- Platform: Web SaaS (Desktop-first)
- Duration: 10 months

#### Impact at a Glance
- ↓ 45% CPA onboarding time
- ↑ 32% demo-to-conversion
- ↓ 85% reliance on engineers
- ↑ enterprise positioning

#### Executive Context
We weren't just designing a UI. We were re-architecting trust in crypto tax compliance by transforming a Python command-line script into a CPA-first enterprise platform that combined automation with transparency.

---

## Executive Context

- Role: Lead Product Designer (Founding Designer)
- Company: Computis Inc.
- Platform: Web SaaS (Desktop-first, responsive)
- Duration: 10 months
- Team: CTO, PM, 2 Engineers, Selecto Agency
- Tools: Figma, Miro, Jira, Webflow, Notion, GA

### Key Impact Metrics
- ↓ CPA onboarding time: 45%
- ↑ demo-to-conversion rate: 32%
- ↓ reliance on engineers: 85%
- ✓ enterprise CPA firm partnerships

### Mission Statement
“Reposition Computis as a CPA-first enterprise platform that combined automation with transparency — so accountants could trust, adopt, and advocate for it.”

---

## Problem & Opportunity

### Initial State
- No UI or dashboard
- Manual classification via hardcoded scripts
- No audit trail or version control
- CSV-only outputs
- High reliance on developers

### Opportunity
- Empower CPAs to act independently
- Build audit-first design with traceability
- Reduce manual classification with explainable AI
- Generate IRS 8949 + QuickBooks-ready exports
- Scale for DAOs, hedge funds, and multi-client firms

### Core Design Principle
- Transparency > Automation.
- Automation had to support human expertise, not replace it.

---

## Research → Insights → Design

### Methods
- 1:1 CPA + analyst interviews
- Workflow shadowing of ingestion → tagging → reporting
- Usage audits (GA, Mixpanel)
- Competitor teardown (TaxBit, Cryptio, CoinTracker, ZenLedger)

### Key Insights
- Distrust of automation — AI needed to show reasoning + allow override
- No audit trail — Compliance workflows broken
- FMV reconciliation error-prone — Needed anomaly dashboards
- High manual effort — Bulk actions & rule builder essential

---

## Personas & Journeys

### David — CPA (15+ years experience)
- Needs
  - Rule builder with transparency
  - Audit logs for compliance
  - QuickBooks-ready exports
- Pain Points
  - Overreliance on engineers, no classification transparency
- Journey
  - Upload → Classify → Review → Export → Audit

### Mya — Ops Analyst (8+ years experience)
- Needs
  - Anomaly detection for FMV errors
  - Bulk tagging capabilities
  - Ingestion validation tools
- Pain Points
  - FMV errors, no bulk triage, no edit history
- Journey
  - Ingest → Review → Classify → Export

---

## System Architecture & UX

### Modular Information Architecture
Clients → Wallets → Transactions → Rules → Reports → Exports

### Role-Specific Views
- CPA: Rule builder, audit logs, overrides
- Analyst: Ingestion review, anomaly resolution, tagging
- Admin: Multi-client management, permissions, activity logs

### Key UX Patterns
- AI Confidence Chips: Accept/Reject + rationale tooltip
- Audit Trail Drawer: Inline logging, export-ready
- Anomaly Flags: Color-coded, hover explainers
- Rule Builder: Drag/drop logic with before/after preview

---

## Competitive Analysis

| Feature             | Computis | TaxBit | Cryptio | CoinTracker | ZenLedger |
|---------------------|:--------:|:------:|:-------:|:-----------:|:---------:|
| Rule Engine         | ✅       | ❌     | ❌      | ❌          | ⚠️        |
| AI + Override       | ✅       | ✅     | ⚠️      | ❌          | ❌        |
| Audit Trail         | ✅       | ✅     | ⚠️      | ❌          | ⚠️        |
| QuickBooks Export   | ✅       | ⚠️     | ✅      | ⚠️          | ✅        |
| FMV Dashboard       | ✅       | ⚠️     | ❌      | ❌          | ❌        |

### Key Differentiators
- Only platform with CPA-first visual rule builder
- Audit-ready architecture with version logs
- Explainable AI with confidence badges
- Scalable modular system

---

## Collaboration & Handoff

### At Staff Level Impact
At Staff level, I wasn't just designing — I was reducing ambiguity for engineering:

#### Design Specifications
- Annotated Figma specs with edge cases
- QA checklists for audit workflows
- Accessibility validation (WCAG AA, Axe, Lighthouse)

#### Communication
- Loom walkthroughs for each module
- Async threads in Slack to keep velocity high
- Regular design review sessions

> “The clarity of your design handoffs made engineering 10x faster.”
>
> — Lead Frontend Developer

---

## Results & Impact

### Quantitative Results
- CPA onboarding time: ↓45% (2.5h → 1.4h)
- Demo conversions: ↑32%
- Reliance on engineers: ↓85%
- Anomaly detection coverage: ↑150%

### Qualitative Feedback
> “First crypto tax tool purpose-built for accountants.”
>
> — CPA Client

> “Clients say the dashboard helped them trust our process.”
>
> — Business Development Lead

> “I feel in control with AI suggestions.”
>
> — Operations Analyst

### Business Outcomes
- Enabled enterprise CPA firm sales
- Reduced dev support tickets, enabling scale
- Differentiated Computis from opaque competitors

---

## Reflections

### Key Learnings
- Trust is a UX principle: surfacing AI logic built credibility
- System design > screens: modular IA unlocked scalability
- AI + Human collaboration: override control flipped skepticism into adoption
- Design → Business linkage: every UX choice tied to churn reduction, higher conversions, and fewer support costs

### Design Philosophy
“Design isn't what it looks like — it's how a CPA explains a tax report to a regulator without an engineer in the room.”

### Platform Tagline
Transparency. Control. Trust.
