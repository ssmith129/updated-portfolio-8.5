# Symplify – Hospital Management System

Transforming siloed hospital workflows into a unified, AI‑powered SaaS platform.

---

## Table of Contents

- TL;DR
- Key Impact Metrics
- Context & Stakes
- Before / After Transformation
- Problem & Opportunity
- Design Principles
- Research & Insights
- Insights → Design Moves
- Quotes
- System & Workflow
  - Service Blueprint
  - Architecture Overview (Inputs, Processing, Outputs, Security)
- User Personas
- User Flows & Journey Mapping
- Key Design Decisions
- Results & Impact

---

## TL;DR

- Inbox triage ↓ 42% → freed ~6.5 hrs/clinician/month
- On‑time follow‑ups ↑ 18% → fewer SLA breaches, faster care delivery
- No‑show rate ↓ 2.4 pts → improved appointment utilization
- Admin overtime ↓ 4.4 hrs/week → reduced staffing costs
- SLA breach risk ↓ 44% → safer, more compliant workflows

Role: Lead Product Designer  
Scope: 0→1 SaaS platform  
Constraints: HIPAA, legacy EHRs, 10‑week delivery  
Baseline: ~1,200 patient messages/month  
Users: Doctors, Nurses, Admins  
Method: Controlled pilot (3 clinics, 65 staff, 6 weeks)

## Key Impact Metrics

- ↓ inbox triage time: 2m15s → 1m18s (−42%)
- ↑ on‑time follow‑ups: 72% → 85.3% (+18%)
- ↓ no‑show rate: 9.8% → 7.4% (−2.4 pts)
- ↓ admin overtime/week: −4.4 hrs
- ↓ SLA breach risk: 14.2% → 7.9% (−44%)

## Context & Stakes

Mid‑sized clinics faced an operational tax from juggling three disconnected systems:

- Doctors → appointment scheduling inside EHRs
- Nurses → paper logs + shift notes
- Admins → Excel sheets for revenue forecasting

Operational baseline:

- ~1,200 patient messages/month
- Avg triage time: 2m15s/item
- SLA breaches: 14% of messages delayed > 24h
- No‑show rate: ~10%
- Admin overtime: 12+ hrs/week

Constraints:

- HIPAA compliance required masking and audit logs
- Legacy EHRs couldn’t be replaced, only extended
- Staffing shortages → adoption had to reduce workload, not add to it

## Before / After Transformation

Before — Fragmented Systems

- Doctors scheduling inside EHRs; nurses on paper logs; admins in Excel
- Avg triage: 2m15s/item; 14% messages delayed > 24h

After — Unified Role‑Specific Platform (Symplify)

- AI Inbox Triage (risk + SLA sorting)
- Unified inbox + handoff flags
- Real‑time forecasting dashboard
- Smart Scheduling (predictive slotting)

## Problem & Opportunity

The Problem: Clinics were losing 5–8 hours/week per clinician to inbox triage across fragmented tools. Missed handoffs risked HIPAA violations and delayed care. Forecasting was manual and lagging, making proactive staffing impossible.

Opportunity: Consolidate triage, scheduling, and forecasting into a single, explainable workflow — reducing staff burden while protecting compliance.

Non‑Goals (Deliberate Trade‑offs):

- Did not replace full EHR stack — layered workflows on top
- Did not rebuild billing — focused on forecasting dashboards
- Did not tackle patient‑facing portals in v1 — prioritized staff workflows

## Design Principles

- Patient‑Centric Design — optimize interfaces for patient care quality
- Intelligent Assistance — AI augments clinical decisions, not judgment
- Compliance by Design — HIPAA and audit trails built into every workflow
- Mobile‑First Care — critical functions accessible at the point of care

## Research & Insights

Methods (sample highlights):

- Interviews: 14 staff (5 MD, 6 RN, 3 Admin) over 2 weeks
- Contextual inquiry: 11 live clinic sessions across 3 days
- Diary study: 9 staff for 2 weeks
- Workflow audits: 1,200 inbox items, 150 appointments over 4 weeks

## Insights → Design Moves

| Insight                                               | Design Move                                        | Expected Effect          |
| ----------------------------------------------------- | -------------------------------------------------- | ------------------------ |
| Inbox triage consumed ~5–8 hrs/wk per clinician       | Smart AI Chat Inbox Triage                         | ↓ triage time ~40%       |
| Nurses missed 18% of urgent handoffs                  | AI‑driven notifications + unified inbox flags      | ↑ on‑time follow‑ups     |
| Admins used Excel for forecasting; lagging visibility | Smart Unified Email + Notifications                | ↑ operational visibility |
| Doctors manually slotted patients → 10% no‑shows      | Smart Appointment Scheduling                       | ↓ no‑shows, ↑ throughput |
| Staff wary of “black box AI”                          | AI transparency features (“why ranked”, overrides) | ↑ adoption & trust       |

## Quotes

> “Half my inbox is reminders I don't need today — I just want the urgent ones.” — MD, Clinic A

> “When shifts overlap, I'm never sure if a message was handled already.” — RN, Clinic B

> “Forecasting is basically a guess until month close — then it’s too late.” — Admin, Clinic C

## System & Workflow

### Service Blueprint (summary)

- Doctor: Review inbox → Confirm appts → Update chart  
  Symplify: AI triage + Smart Scheduling
- Nurse: Track vitals → Triage msgs → Shift handoff  
  Symplify: Unified inbox + flags
- Admin: Manage staffing → Generate reports  
  Symplify: Real‑time forecasting dashboards

### Architecture Overview

Inputs

- Patient data (EHR via FHIR APIs), appointment history, billing exports

Processing

- AI modules (triage, scheduling, forecasting); model versioning & logging

Outputs

- Role‑based dashboards, alerts, forecast reports

Security

- PHI boundary maintained (only metadata in Symplify)
- Role + org‑unit RBAC; TLS in transit; AES‑256 at rest
- Immutable audit logs for AI actions + overrides

## User Personas

Dr. Sarah — Attending Physician (8+ years)

- Needs: Review inbox → Confirm appts; update chart efficiently; AI decision support
- Pain Points: 2m triage/item; duplicate entries across systems

Lisa — Hospital Administrator (12+ years)

- Needs: Manage staffing → Generate reports; monitor revenue dashboard; oversee forecasting
- Pain Points: Forecasts updated monthly via Excel exports — lagging insights

Mike — Registered Nurse (5+ years)

- Needs: Track vitals → Triage msgs; shift handoff coordination; monitor continuity
- Pain Points: Missed urgent handoffs due to paper logs and fragmented systems

## User Flows & Journey Mapping

Role‑based swimlanes revealed where delays, errors, and inefficiencies occurred before Symplify, and how AI interventions resolved them (triage ranking, predictive scheduling, unified notifications, forecasting dashboards).

## Key Design Decisions

| Decision             | Options                               | Trade‑offs                          | Final Choice     | Risk & Mitigation                    |
| -------------------- | ------------------------------------- | ----------------------------------- | ---------------- | ------------------------------------ |
| Inbox prioritization | Last‑in; Manual flags; Risk+SLA score | Simplicity vs consistency vs impact | Risk+SLA scoring | Added “why ranked” chips + overrides |

## Results & Impact

- Faster triage, fewer missed follow‑ups, reduced overtime, and more accurate forecasting
- Clear adoption pathway by avoiding full EHR replacement and focusing on explainability and compliance
