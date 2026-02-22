# Symplify Case Study - Verification Checklist

Use this checklist after replicating the Symplify page to verify everything works correctly.

---

## 1. Build & Compilation

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the development server
- [ ] No TypeScript compilation errors in terminal
- [ ] `npm run build` produces a successful production build

## 2. Page Loading

- [ ] Page loads at `/case-studies/symplify-hospital-management-system`
- [ ] No console errors on page load
- [ ] Page scrolls to top on initial navigation
- [ ] Document title updates to include "Symplify"

## 3. Navigation

- [ ] Navigation bar renders at the top
- [ ] Healthcare theme (teal/emerald colors) applied to navigation
- [ ] Mobile hamburger menu works on small viewports
- [ ] Back button ("Back to Work") navigates correctly
- [ ] Skip-to-content link is present and functional

## 4. Hero Section

- [ ] Hero heading "Symplify" renders
- [ ] Description text is visible
- [ ] Meta badges (Healthcare, 6 Months, etc.) display with shimmer effect
- [ ] Hero background image loads from CDN
- [ ] "View Full Preview" button is clickable
- [ ] Preview modal opens on button click
- [ ] Preview modal closes on Escape key
- [ ] Preview modal has proper focus trap (Tab cycles within modal)

## 5. Impact Metrics

- [ ] 6 metric cards display (Triage Time, Accuracy, SLA, Admin, No-Shows, Alert Fatigue)
- [ ] Count-up animation triggers when section scrolls into view
- [ ] Before/after values display correctly
- [ ] Color coding matches each metric type
- [ ] Guardrails callout renders below metrics
- [ ] Business value estimate grid displays

## 6. Project Overview

- [ ] Section heading animates on scroll
- [ ] 4 objective cards display with icons
- [ ] Cards stagger-animate into view
- [ ] Narrative paragraphs render correctly

## 7. Problem Section

- [ ] "Three Systems, Zero Shared Prioritization" heading renders
- [ ] 3 user quotes display with role citations
- [ ] Journey swim lanes show for Doctor, Nurse, Admin
- [ ] Pain points are highlighted in red/orange within lanes
- [ ] 4 stat cards display problem severity numbers
- [ ] Hover effects work on stat cards

## 8. Constraints Bar

- [ ] 4 constraint cards display (HIPAA, Legacy EHRs, Zero Workload, Connectivity)
- [ ] Icons render (Shield, Database, UserX, WifiOff)
- [ ] Cards stagger-animate on scroll
- [ ] Card-lift hover effect works

## 9. Research Section

- [ ] 4 research method icons display in strip
- [ ] "View Detailed Methodology" toggle works (expand/collapse)
- [ ] Methodology table renders with 5 rows when expanded
- [ ] 3 key insight cards display with numbered callouts (01, 02, 03)
- [ ] Competitive analysis table renders (Epic, Cerner, Allscripts, Symplify)
- [ ] Symplify row is highlighted

## 10. Design Decisions

- [ ] 4 design decisions render with full content
- [ ] Decision 1: AI confidence display options (percentage, gradient, 3-tier badges)
- [ ] Decision 2: Inbox card mockup renders (coded UI, not image)
- [ ] Decision 3: Conflict modal mockup renders (coded UI, not image)
- [ ] Decision 4: Before/after alert comparison renders
- [ ] Result callout boxes display with green accents
- [ ] All mockup components are interactive (hover states work)

## 11. Pivotal Moments

- [ ] 2 pivotal moment cards render
- [ ] "The 67% Rejection" content displays
- [ ] "The HIPAA Constraint" content displays
- [ ] Hover shadow transitions work on cards

## 12. System Overview

- [ ] Architecture diagram renders (3-layer: Legacy > Translation > Dashboards)
- [ ] Module boxes display (AI Triage, Conflict Detection, Compliance, Alert Priority)
- [ ] Role-based views show (Doctor, Nurse, Admin)
- [ ] Design system section displays 4 features
- [ ] 3 platform cards render (Desktop, Tablet, Mobile)

## 13. Reflections Section

- [ ] "What Worked" and "What Didn't" lists render
- [ ] 3 post-pilot feedback quotes display (Doctor, Nurse, Admin roles)
- [ ] 4 reflection/takeaway cards render
- [ ] Closing quote about AI transparency displays
- [ ] Next Steps section shows 4 future initiatives

## 14. Shared Components

- [ ] Related Case Studies grid renders below content
- [ ] Current study ("symplify") is excluded from related studies
- [ ] 3 other case studies display with thumbnails
- [ ] Footer renders with navigation links and social links
- [ ] Footer links are functional

## 15. Animations

- [ ] Scroll-reveal animations trigger as sections enter viewport
- [ ] Stagger animations apply sequential delays to grid items
- [ ] Animations only fire once (don't re-trigger on scroll back)
- [ ] Animations reset properly on page navigation (navigate away and back)
- [ ] `prefers-reduced-motion: reduce` disables all animations

## 16. Responsive Design

- [ ] **Mobile (320px-479px)**: Single column layout, readable text
- [ ] **Small tablet (480px-767px)**: Adjusted grid layouts
- [ ] **Tablet (768px-1023px)**: 2-column grids where applicable
- [ ] **Desktop (1024px-1279px)**: Full layout with proper spacing
- [ ] **Large desktop (1280px+)**: Max-width containers, centered content

## 17. Accessibility

- [ ] Page passes basic keyboard navigation (Tab through all interactive elements)
- [ ] Skip link works (first Tab press reveals "Skip to content")
- [ ] Focus indicators visible on all interactive elements
- [ ] Images have alt text
- [ ] Heading hierarchy is sequential (h1 > h2 > h3)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Screen reader can navigate section structure

## 18. SEO

- [ ] Document title is set correctly
- [ ] Meta description tag is present
- [ ] JSON-LD structured data script is injected in document head
- [ ] Structured data validates (check via Google Rich Results Test)

---

## Quick Smoke Test

For a fast verification, check these 5 items:

1. Page loads without console errors
2. Hero section renders with background image
3. Impact metrics animate on scroll
4. Design decisions mockups render (coded UI components)
5. Navigation shows healthcare theme colors
