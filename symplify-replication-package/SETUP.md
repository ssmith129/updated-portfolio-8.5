# Symplify Case Study - Replication Package

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Dependencies](#dependencies)
4. [Setup Instructions](#setup-instructions)
5. [Route Configuration](#route-configuration)
6. [Global Styles](#global-styles)
7. [External Assets](#external-assets)
8. [Browser Compatibility](#browser-compatibility)
9. [Troubleshooting](#troubleshooting)
10. [Verification Checklist](#verification-checklist)

---

## Overview

The Symplify case study is a healthcare-focused UX case study page built with:

- **React 18** + **TypeScript** (via Vite + SWC)
- **Tailwind CSS 3.4** for utility-first styling
- **Lucide React** for icons
- **React Router v6** for routing
- **IntersectionObserver API** for scroll-triggered animations
- **Custom React hooks** for animation orchestration

The page consists of 10 section components composed inside a main page component, plus 4 shared components, 2 custom hooks, and 2 utility modules.

---

## File Structure

```
symplify-replication-package/
|
+-- client/
|   +-- global.css                          # Global styles (Tailwind + animations)
|   +-- pages/
|   |   +-- SymplifyCaseStudy.tsx           # Main page (composes all sections)
|   +-- components/
|   |   +-- symplify/                       # Symplify-specific components
|   |   |   +-- HeroSection.tsx             # Hero with preview modal trigger
|   |   |   +-- ImpactMetrics.tsx           # Animated metrics with count-up
|   |   |   +-- ProjectOverview.tsx         # Context & success criteria
|   |   |   +-- ProblemSection.tsx          # Problem narrative + journey lanes
|   |   |   +-- ConstraintsBar.tsx          # Design constraints cards
|   |   |   +-- ResearchSection.tsx         # Research methods & competitive analysis
|   |   |   +-- DesignDecisions.tsx         # 4 design decisions with coded mockups
|   |   |   +-- PivotalMoments.tsx          # 2 pivotal project moments
|   |   |   +-- SystemOverview.tsx          # Architecture diagram + design system
|   |   |   +-- ReflectionsSection.tsx      # Outcomes, feedback, next steps
|   |   +-- Navigation.tsx                  # Site-wide navigation (shared)
|   |   +-- Footer.tsx                      # Site-wide footer (shared)
|   |   +-- RelatedCaseStudies.tsx          # Related case studies grid (shared)
|   |   +-- PageAnimationWrapper.tsx        # Animation reset on navigation (shared)
|   +-- hooks/
|   |   +-- use-scroll-reveal.ts            # useScrollReveal, useStaggerReveal
|   |   +-- use-page-animations.tsx         # usePageAnimations, useIntersectionAnimation
|   +-- lib/
|       +-- animation-utils.ts              # Animation utility functions
|       +-- utils.ts                        # cn() utility (clsx + tailwind-merge)
|
+-- config/                                 # Reference configuration files
|   +-- package.json                        # Dependencies with versions
|   +-- tailwind.config.ts                  # Tailwind configuration
|   +-- vite.config.ts                      # Vite build configuration
|   +-- tsconfig.json                       # TypeScript configuration
|
+-- SETUP.md                               # This file
+-- VERIFICATION_CHECKLIST.md              # Post-replication testing checklist
```

---

## Dependencies

### Required npm Packages

Install these exact versions for compatibility:

```bash
# Core framework
npm install react@18.3.1 react-dom@18.3.1 react-router-dom@6.26.2

# Icons
npm install lucide-react@0.462.0

# Styling utilities
npm install clsx@2.1.1 tailwind-merge@2.5.2

# Tailwind CSS
npm install -D tailwindcss@3.4.11 postcss@8.4.47 autoprefixer@10.4.20
npm install -D tailwindcss-animate@1.0.7 @tailwindcss/typography@0.5.15

# TypeScript + Vite
npm install -D typescript@5.5.3 vite@5.3.3 @vitejs/plugin-react-swc@3.7.0
npm install -D @types/react@18.3.3 @types/react-dom@18.3.0
```

### One-liner Install

```bash
npm install react@18.3.1 react-dom@18.3.1 react-router-dom@6.26.2 lucide-react@0.462.0 clsx@2.1.1 tailwind-merge@2.5.2
npm install -D tailwindcss@3.4.11 postcss@8.4.47 autoprefixer@10.4.20 tailwindcss-animate@1.0.7 @tailwindcss/typography@0.5.15 typescript@5.5.3 vite@5.3.3 @vitejs/plugin-react-swc@3.7.0 @types/react@18.3.3 @types/react-dom@18.3.0
```

### Optional (used elsewhere in the project but not strictly required for Symplify)

```
framer-motion@12.6.2        # Used by other case studies
@radix-ui/*                 # Used by shared UI components
```

---

## Setup Instructions

### Step 1: Copy Files to Target Project

Copy the files from this package into your target project, preserving the directory structure:

```bash
# From the replication package root:
cp -r client/pages/SymplifyCaseStudy.tsx       <TARGET>/client/pages/
cp -r client/components/symplify/              <TARGET>/client/components/symplify/
cp client/components/Navigation.tsx            <TARGET>/client/components/
cp client/components/Footer.tsx                <TARGET>/client/components/
cp client/components/RelatedCaseStudies.tsx     <TARGET>/client/components/
cp client/components/PageAnimationWrapper.tsx   <TARGET>/client/components/
cp -r client/hooks/                            <TARGET>/client/hooks/
cp -r client/lib/                              <TARGET>/client/lib/
```

### Step 2: Merge Global CSS

Append the animation styles from `client/global.css` to your project's global CSS file. The critical sections are:

1. **Tailwind directives** (lines 1-3) - if not already present:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **Symplify Microanimations** (starting around line 271) - copy all of these:
   - `.reveal` and `.reveal.visible` classes
   - `.stagger-1` through `.stagger-8` delay classes
   - `.card-lift` hover effect
   - `.badge-shimmer` keyframe animation
   - `.icon-hover-spin` rotation effect
   - `.scale-in` animation
   - `.lane-hover` effect
   - `@keyframes badgeShimmer` and `@keyframes scaleIn`

### Step 3: Update Tailwind Configuration

Merge the following into your `tailwind.config.ts`:

**Custom breakpoints:**
```typescript
screens: {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
}
```

**Required plugins:**
```typescript
plugins: [
  require("tailwindcss-animate"),
  require("@tailwindcss/typography"),
]
```

### Step 4: Configure Path Aliases

Ensure your `tsconfig.json` has these path mappings:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./client/*"],
      "@shared/*": ["./shared/*"]
    }
  }
}
```

And your `vite.config.ts` has matching resolve aliases:
```typescript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "client"),
    "@shared": path.resolve(__dirname, "shared"),
  },
}
```

### Step 5: Add Route

Add the Symplify route to your router configuration:

```typescript
import SymplifyCaseStudy from "@/pages/SymplifyCaseStudy";

// Inside your route definitions:
<Route
  path="/case-studies/symplify-hospital-management-system"
  element={
    <PageAnimationWrapper>
      <SymplifyCaseStudy />
    </PageAnimationWrapper>
  }
/>
```

### Step 6: Install Dependencies

```bash
npm install
```

### Step 7: Run Development Server

```bash
npm run dev
```

Navigate to: `http://localhost:8080/case-studies/symplify-hospital-management-system`

---

## Route Configuration

The Symplify page expects to be mounted at:

```
/case-studies/symplify-hospital-management-system
```

The `Navigation.tsx` component detects this path to apply the healthcare theme:
```typescript
const isHealthcarePage = location.pathname.includes("/symplify");
```

If you change the route path, update:
1. The route definition in your router
2. The `RelatedCaseStudies.tsx` href for the Symplify entry
3. The Navigation theme detection logic

---

## Global Styles

### Animation Classes Used by Symplify Components

| Class | Purpose | Used In |
|-------|---------|---------|
| `.reveal` | Fade-in + slide-up on scroll | All section headings, cards |
| `.reveal.visible` | Triggered state (opacity: 1, translateY: 0) | Auto-applied by hooks |
| `.stagger-1` to `.stagger-8` | Sequential delay offsets (60ms increments) | Grid items, card lists |
| `.card-lift` | Hover lift effect with shadow | ConstraintsBar, various cards |
| `.badge-shimmer` | Shimmer animation on badges | HeroSection badges |
| `.icon-hover-spin` | 15deg rotation on hover | Various icon containers |
| `.scale-in` | Scale from 0.8 to 1.0 | Metrics, counters |
| `.lane-hover` | Subtle lift on journey lanes | ProblemSection |

### CSS Custom Properties

The page uses Tailwind utility classes exclusively and does not require custom CSS properties beyond what Tailwind provides. All colors are specified inline as Tailwind classes (e.g., `bg-teal-600`, `text-emerald-700`).

---

## External Assets

### Images (Builder.io CDN)

These images are hosted externally and will load from the CDN. No local copies needed unless you want to self-host:

1. **Hero Background Image**
   ```
   https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2Fadf782ed456e4ee188c3992a86747eef
   ```
   Used in: `HeroSection.tsx`

2. **Related Case Study Thumbnail**
   ```
   https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F92a209bf2a4040b697546cef331aa6b0?format=webp&width=800
   ```
   Used in: `RelatedCaseStudies.tsx`

### To Self-Host Images

1. Download each image from the URLs above
2. Place them in your `public/images/` directory
3. Update the `src` references in the respective component files

### Icons

All icons come from `lucide-react` - no external icon files needed. Icons used include:
`ArrowLeft`, `ExternalLink`, `Clock`, `Users`, `Target`, `TrendingUp`, `Building2`, `Shield`, `Database`, `UserX`, `WifiOff`, `Search`, `MessageSquare`, `Eye`, `BarChart3`, `ChevronDown`, `ChevronUp`, `Lightbulb`, `CheckCircle2`, `XCircle`, `ArrowRight`, `Smartphone`, `Tablet`, `Monitor`, `Zap`, `Quote`, `ArrowUp`

---

## Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 80+ | Full support |
| Firefox | 78+ | Full support |
| Safari | 14+ | Full support |
| Edge | 80+ | Full support (Chromium-based) |

### Required Browser APIs

- **IntersectionObserver**: Used for scroll-triggered animations (supported in all modern browsers)
- **CSS Custom Properties**: Used by Tailwind
- **CSS Grid & Flexbox**: Used extensively for layouts
- **ES2020**: Target compilation level (async/await, optional chaining, nullish coalescing)

### Accessibility

The page implements WCAG 2.2 AA compliance:
- Skip-to-content link via `<SkipLink>` component
- Keyboard navigation support (Tab, Escape for modal)
- Focus trap in preview modal
- `prefers-reduced-motion` media query respected (disables animations)
- Semantic HTML structure with proper heading hierarchy
- ARIA attributes on interactive elements

---

## Troubleshooting

### Issue: Animations not triggering

**Cause**: Missing CSS classes in global stylesheet.
**Fix**: Ensure all `.reveal`, `.stagger-*`, and keyframe definitions from `global.css` are included in your project's global CSS file.

### Issue: TypeScript path alias errors (`@/...` not found)

**Cause**: Path aliases not configured in both `tsconfig.json` and `vite.config.ts`.
**Fix**: Add the path mappings as shown in Step 4 of Setup Instructions.

### Issue: Icons not rendering

**Cause**: `lucide-react` not installed or wrong version.
**Fix**: `npm install lucide-react@0.462.0`

### Issue: Tailwind classes not applying

**Cause**: Tailwind not scanning the component files.
**Fix**: Ensure your `tailwind.config.ts` content array includes:
```typescript
content: ["./client/**/*.{ts,tsx}"]
```

### Issue: Navigation not showing healthcare theme

**Cause**: Route path doesn't contain "symplify".
**Fix**: The route must include `/symplify` in the path for the Navigation component to detect and apply the healthcare color scheme.

### Issue: Related case studies not filtering correctly

**Cause**: The `currentCaseStudyId` prop must be `"symplify"`.
**Fix**: The main `SymplifyCaseStudy.tsx` passes `currentCaseStudyId="symplify"` to `RelatedCaseStudies`. Ensure this matches the `id` field in the case studies data array inside `RelatedCaseStudies.tsx`.

### Issue: Count-up animations in ImpactMetrics not working

**Cause**: The `useIntersectionAnimation` hook from `use-page-animations.tsx` isn't triggering.
**Fix**: Verify the component is wrapped in `PageAnimationWrapper` at the route level, and that `animation-utils.ts` is properly imported.

### Issue: Page scroll-to-top not working on navigation

**Cause**: Missing `window.scrollTo(0, 0)` call.
**Fix**: The `SymplifyCaseStudy.tsx` component handles this in its `useEffect`. Ensure React Router is properly configured with your router provider.

### Issue: Build errors with `cn()` utility

**Cause**: Missing `clsx` or `tailwind-merge` packages.
**Fix**: `npm install clsx@2.1.1 tailwind-merge@2.5.2`

---

## Environment Variables

**None required.** The Symplify case study page does not use any environment variables. All content is hardcoded in the components, and images are loaded from public CDN URLs.

---

## Build & Deployment

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

The production build outputs to `dist/spa/` (configured in `vite.config.ts`).

---

## Component Architecture

```
SymplifyCaseStudy (main page)
+-- Navigation (shared, theme-aware)
+-- HeroSection
+-- ImpactMetrics (animated counters)
+-- ProjectOverview
+-- ProblemSection (journey swim lanes)
+-- ConstraintsBar
+-- ResearchSection (collapsible table, competitive analysis)
+-- DesignDecisions (coded UI mockups)
+-- PivotalMoments
+-- SystemOverview (architecture diagram)
+-- ReflectionsSection (feedback quotes, next steps)
+-- RelatedCaseStudies (shared, filtered)
+-- Footer (shared)
```

### Data Flow

- All content is **static** (no API calls, no database)
- Animations are driven by **IntersectionObserver** via custom hooks
- Section tracking uses **IntersectionObserver** for active navigation state
- Modal state (preview) is managed via `useState` in the main page component
- Theme detection is based on **URL path** via `useLocation()` from React Router
