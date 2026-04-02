# Portfolio Website - Design System Rules

## Overview

UX/UI design portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui**. Features case studies (Computis, Symplify, Medico) with rich animations, dark mode, and iPad/tablet optimizations.

---

## Project Structure

```
portfolio-website/
├── client/                    # Frontend (React SPA)
│   ├── main.tsx               # Entry point
│   ├── App.tsx                # Router + providers
│   ├── global.css             # Global styles + CSS variables
│   ├── components/
│   │   ├── ui/                # 48 shadcn/ui primitives
│   │   ├── case-study/        # Shared case study components
│   │   ├── computis/          # Computis-specific components
│   │   ├── symplify/          # Symplify-specific components
│   │   ├── Navigation.tsx     # Main nav
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/                 # Route pages
│   ├── contexts/              # ThemeContext (light/dark)
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilities (cn(), animation-utils)
│   ├── styles/                # Additional CSS files
│   │   ├── design-tokens.css  # Computis design tokens
│   │   ├── ipad-optimizations.css
│   │   └── journey-map.css
│   └── utils/
├── server/                    # Express API
├── shared/                    # Shared types (client + server)
├── public/                    # Static assets (mockups, wireframes, screenshots)
├── tailwind.config.ts         # Theme configuration
├── components.json            # shadcn/ui config
├── vite.config.ts             # Build config with code splitting
└── tsconfig.json              # Path aliases: @/* -> client/*, @shared/* -> shared/*
```

---

## 1. Token Definitions

### CSS Variables (global.css `:root`)

Primary token source is CSS custom properties in HSL format for shadcn/ui compatibility:

```css
/* Semantic color tokens (HSL values - no hsl() wrapper) */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96.1%;
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
--accent: 210 40% 96.1%;
--destructive: 0 84.2% 60.2%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 222.2 84% 4.9%;
--radius: 0.5rem;
```

### Precision Trust Brand Colors (hex, in global.css)

```css
--precision-primary: #0a2540;     /* Dark navy */
--precision-secondary: #1e3a5f;   /* Medium navy */
--precision-accent: #00a88a;      /* Teal green */
--precision-neutral: #f7f9fc;     /* Light gray */
--precision-text-primary: #1a1f36;
--precision-text-secondary: #697386;
--precision-error: #e74c3c;
--precision-success: #00a88a;
--precision-warning: #f39c12;
```

### Symplify Brand Colors (tailwind.config.ts)

```ts
symplify: {
  blue: '#3B82F6', green: '#10B981', purple: '#8B5CF6',
  amber: '#F59E0B', red: '#EF4444', pink: '#EC4899', indigo: '#6366F1',
  heading: '#0F172A', body: '#334155', muted: '#64748B',
  card: '#FFFFFF', border: '#E2E8F0', bgPrimary: '#F8FAFC'
}
```

### Extended Design Tokens (client/styles/design-tokens.css)

WCAG AA-compliant Computis tokens with full gray scale (50-900), semantic colors, spacing (8px grid), typography scale, shadows, z-index, and transitions.

### Dark Mode

Class-based (`<html class="dark">`). All CSS variables have `.dark` overrides in `global.css`. Use the `ThemeContext` (`useTheme()` hook) for JS-side detection.

---

## 2. Component Library

### shadcn/ui (48 components in `client/components/ui/`)

All components follow the standard shadcn/ui pattern:

```tsx
import { cn } from "@/lib/utils";

const Component = React.forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => (
    <element ref={ref} className={cn("base-classes", className)} {...props} />
  )
);
```

**Available components:** accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip.

### Button Variants (CVA)

```tsx
import { Button } from "@/components/ui/button";

// Variants: default | destructive | outline | secondary | ghost | link
// Sizes: default (h-10) | sm (h-9) | lg (h-11) | icon (h-10 w-10)
<Button variant="outline" size="lg">Click me</Button>
```

### Card Compound Components

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Class Merge Utility

Always use `cn()` for combining Tailwind classes:

```tsx
import { cn } from "@/lib/utils";
// cn() = clsx() + tailwind-merge — handles class conflicts correctly
<div className={cn("base-classes", conditional && "extra", className)} />
```

---

## 3. Frameworks & Libraries

| Category | Library | Version |
|----------|---------|---------|
| UI Framework | React | 18.3.1 |
| Routing | React Router DOM | 6.26.2 |
| Styling | Tailwind CSS | 3.4.11 |
| Component Variants | class-variance-authority (CVA) | - |
| UI Primitives | Radix UI (48 packages) | - |
| Animation | Framer Motion | 12.6.2 |
| 3D | Three.js + @react-three/fiber + drei | 0.176.0 |
| Charts | Recharts | 2.12.7 |
| Forms | React Hook Form + Zod | 7.53.0 |
| Icons | Lucide React | 0.462.0 |
| Data Fetching | TanStack React Query | 5.56.2 |
| Toasts | Sonner | 1.5.0 |
| Build | Vite + SWC | 5.3.3 |
| Backend | Express | 4.18.2 |

---

## 4. Asset Management

- **Static assets** in `public/` — wireframe SVGs, device mockups (MacBook, iPad, Samsung), screenshots, HTML design showcases
- **No CDN** — assets served directly from Vite static serving
- **Favicon** loaded from external CDN in `index.html`
- **Image references** use root-relative paths: `/wireframes/dashboard.svg`, `/mockups/macbook.png`
- **Build output** goes to `dist/spa/` (client) and `dist/server/` (server)
- **Code splitting** configured in `vite.config.ts` for: react-vendor, ui-vendor, three-vendor, charts-vendor, utils

---

## 5. Icon System

**Lucide React** is the sole icon library:

```tsx
import { Menu, X, ArrowUp, ChevronRight, ExternalLink } from "lucide-react";

// Default 24px, customizable via className or size prop
<Menu className="h-5 w-5" />
<ArrowUp size={16} />
```

No custom icon components or SVG sprite system. All icons are inline React components from Lucide.

---

## 6. Styling Approach

### Tailwind CSS First

All styling uses Tailwind utility classes. No CSS Modules, no Styled Components.

### CSS Architecture Layers

```
global.css          → CSS variables, base styles, utility classes, animations
design-tokens.css   → Extended Computis-specific tokens
ipad-optimizations.css → Tablet-specific overrides
journey-map.css     → User journey map styles
```

### Responsive Breakpoints

```ts
// tailwind.config.ts
xs: '320px',       // Small phones
sm: '480px',       // Large phones
md: '768px',       // iPad portrait
'md-land': '1024px', // iPad landscape
lg: '1024px',      // Desktop
'ipad-air': '1180px',
'ipad-pro': '1366px',
xl: '1280px',
'2xl': '1440px'
```

### Typography

```
Font families:
  sans: Inter, -apple-system, Roboto, sans-serif
  heading: Inter, SF Pro Display, -apple-system, sans-serif
  mono: JetBrains Mono, IBM Plex Mono, monospace

Body font loaded via Google Fonts: Manrope (set in global.css body rule)
```

### Animation System

**CSS-based (global.css):**
- `.reveal` + `.reveal.visible` — IntersectionObserver scroll reveals with stagger
- `.card-lift` — hover elevation
- `.badge-shimmer` — shimmer on hover
- `.underline-reveal` — gradient underline
- `.pulse-gentle` — subtle opacity animation
- `.orb-float` — floating background elements

**Tailwind keyframes (tailwind.config.ts):**
- `fadeIn`, `slideInFromTop/Bottom/Left/Right`, `zoomIn`, `bounceSubtle`
- `accordion-down/up`

**Framer Motion** for complex component animations (page transitions, hover states, drag).

**Reduced motion:** Respects `prefers-reduced-motion` media query.

### Touch & Accessibility

- Minimum touch targets: 44px (`min-h-[44px] min-w-[44px]`)
- Focus rings: `outline-2 outline-offset-2 outline-blue-500`
- WCAG AA color contrast throughout
- Skip links and semantic HTML

---

## 7. Figma-to-Code Translation Rules

When translating Figma designs to this codebase:

### Color Mapping
- Map Figma fills to CSS variable references: `bg-primary`, `text-muted-foreground`, `border-border`
- For precision brand colors, use: `text-[var(--precision-primary)]` or the Tailwind extension `bg-precision-primary`
- For Symplify colors, use: `text-symplify-blue`, `bg-symplify-bgPrimary`
- Always check dark mode: ensure colors work with `.dark` class overrides

### Spacing
- Use Tailwind spacing scale (4px increments): `p-4` = 16px, `gap-6` = 24px
- Design tokens use 8px grid: `--space-xs` (8px) through `--space-3xl` (96px)

### Typography
- Headings: `font-heading text-2xl font-semibold tracking-tight`
- Body: `font-sans text-base text-muted-foreground`
- Code: `font-mono text-sm`

### Components
- Always prefer existing shadcn/ui components over custom implementations
- Extend with `className` prop using `cn()` utility
- Use CVA for new variant patterns

### Layout
- Use Tailwind Flexbox/Grid utilities
- Container max-widths follow responsive breakpoints
- iPad-specific: use `md:`, `md-land:`, `ipad-air:`, `ipad-pro:` prefixes

### Shadows
- Light: `shadow-precision-sm` or `shadow-precision-md`
- Or use CSS vars: `shadow-[var(--shadow-sm)]`

### Border Radius
- Default: `rounded-lg` (uses `--radius` variable = 0.5rem)
- Card: `rounded-card` (12px)
- Button: `rounded-button` (8px)
- Pill: `rounded-pill` (9999px)

### Animations
- Scroll reveals: add `reveal` class, JS triggers `visible` class
- Hover effects: `card-lift`, `badge-shimmer`, `icon-hover-spin`
- Page transitions: use `PageAnimationWrapper` component
- Complex: Framer Motion `motion.div` with `initial`, `animate`, `exit` props
