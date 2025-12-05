# Design System v2.0 - Practical Examples

## Common Implementation Patterns

This guide shows practical examples of how to use the new design system in real components.

---

## 1. Typography Examples

### Article/Blog Post Layout

```tsx
export function ArticlePage() {
  return (
    <article className="max-w-[70ch] mx-auto">
      {/* Main heading - Large, clear hierarchy */}
      <h1 className="text-h1 font-bold leading-tight tracking-tight text-gray-700 mt-16 mb-8">
        Designing for Trust in AI Systems
      </h1>

      {/* Lead paragraph - Slightly larger for emphasis */}
      <p className="lead text-gray-600 mb-8">
        How we built transparency into Computis's core experience to help CPAs
        maintain professional defensibility while embracing automation.
      </p>

      {/* Section heading */}
      <h2 className="text-h2 font-bold leading-snug tracking-snug text-gray-700 mt-16 mb-8">
        The Challenge
      </h2>

      {/* Body paragraphs with optimal spacing */}
      <p className="text-body leading-extra-loose text-gray-600">
        Before Computis, accounting firms faced a critical dilemma: AI-powered
        tax platforms could save hundreds of hours, but their black-box nature
        created liability concerns. CPAs couldn't explain classifications to
        clients or defend them during IRS audits.
      </p>

      <p className="text-body leading-extra-loose text-gray-600 mt-8">
        This created a fundamental trust barrier that prevented adoption, even
        when the underlying technology was accurate. The solution wasn't just
        better AI—it was making AI decisions transparent and auditable.
      </p>

      {/* Subsection heading */}
      <h3 className="text-h3 font-semibold leading-normal text-gray-700 mt-12 mb-6">
        Key Research Findings
      </h3>

      {/* List with proper spacing */}
      <ul className="space-y-2 text-body leading-extra-loose text-gray-600">
        <li>
          8/8 participants prioritized IRS defensibility over time savings
        </li>
        <li>100% adoption when override controls were demonstrated</li>
        <li>Zero tolerance for unexplainable AI decisions</li>
      </ul>

      {/* Caption/metadata */}
      <p className="caption text-gray-500 mt-4">
        Source: Computis User Research Study, Q2 2023
      </p>
    </article>
  );
}
```

### Statistics Section

```tsx
export function ImpactMetrics() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-h2 font-bold text-gray-700 mb-12 text-center">
          Impact at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Metric card with large stat */}
          <div className="text-center">
            <div className="stat text-primary font-bold mb-4">95%</div>
            <p className="text-body text-gray-600 leading-loose">
              User satisfaction increase
            </p>
          </div>

          <div className="text-center">
            <div className="stat text-success font-bold mb-4">45%</div>
            <p className="text-body text-gray-600 leading-loose">
              Faster onboarding time
            </p>
          </div>

          <div className="text-center">
            <div className="stat text-info font-bold mb-4">$2.4M</div>
            <p className="text-body text-gray-600 leading-loose">
              Revenue increase in 12 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 2. Spacing Examples

### Section Layouts

```tsx
export function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with generous spacing */}
      <section className="py-24 md:py-32">
        <div className="container">
          <h1 className="text-h1 font-bold mb-8">Case Study Title</h1>
          <p className="lead max-w-[70ch]">
            Introduction paragraph with optimal reading width.
          </p>
        </div>
      </section>

      {/* Content section - uses 8px grid spacing */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-h2 font-bold mb-8">The Challenge</h2>

          {/* Card with proper internal spacing */}
          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <h3 className="text-h3 font-semibold mb-6">Problem Statement</h3>
            <p className="text-body leading-extra-loose text-gray-600">
              Content with proper line-height and spacing...
            </p>

            {/* Nested content with breathing room */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-h4 font-semibold mb-4">Key Insight</h4>
              <p className="text-body leading-extra-loose text-gray-600">
                Additional information with consistent spacing...
              </p>
            </div>
          </div>

          {/* Multiple cards with consistent spacing */}
          <div className="space-y-8 mt-12">
            <div className="card p-12 bg-gray-50 rounded-lg">
              <p className="text-body">First card</p>
            </div>
            <div className="card p-12 bg-gray-50 rounded-lg">
              <p className="text-body">Second card (32px gap above)</p>
            </div>
            <div className="card p-12 bg-gray-50 rounded-lg">
              <p className="text-body">Third card (32px gap above)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Another section - automatic 96px spacing */}
      <section className="py-24 md:py-32">
        <div className="container">
          <h2 className="text-h2 font-bold mb-8">The Solution</h2>
          {/* Content... */}
        </div>
      </section>
    </div>
  );
}
```

### Responsive Spacing

```tsx
export function ResponsiveCard() {
  return (
    <div
      className="
      p-4              {/* 16px on mobile */}
      md:p-8           {/* 32px on tablet */}
      lg:p-12          {/* 48px on desktop */}
      bg-white 
      rounded-lg
    "
    >
      <h3
        className="
        text-xl          {/* Smaller on mobile */}
        md:text-2xl      {/* Medium on tablet */}
        lg:text-h3       {/* Full size on desktop */}
        mb-4 
        md:mb-6
      "
      >
        Responsive Card Title
      </h3>

      <p
        className="
        text-base        {/* 16px on mobile */}
        md:text-body     {/* 18px on tablet+ */}
        leading-extra-loose
      "
      >
        Content that scales appropriately across breakpoints.
      </p>
    </div>
  );
}
```

---

## 3. Color System Examples

### Semantic Color Usage

```tsx
export function StatusMessages() {
  return (
    <div className="space-y-4">
      {/* Success message - WCAG AA compliant */}
      <div className="bg-success/10 border border-success rounded-lg p-6">
        <h4 className="text-success font-semibold mb-2">✓ Success</h4>
        <p className="text-gray-600 text-body">
          Your changes have been saved successfully.
        </p>
      </div>

      {/* Warning message - WCAG AA compliant */}
      <div className="bg-warning/10 border border-warning rounded-lg p-6">
        <h4 className="text-warning font-semibold mb-2">⚠ Warning</h4>
        <p className="text-gray-600 text-body">
          This action requires administrator approval.
        </p>
      </div>

      {/* Error message - WCAG AA compliant */}
      <div className="bg-danger/10 border border-danger rounded-lg p-6">
        <h4 className="text-danger font-semibold mb-2">✗ Error</h4>
        <p className="text-gray-600 text-body">
          Unable to process your request. Please try again.
        </p>
      </div>

      {/* Info message - WCAG AA compliant */}
      <div className="bg-info/10 border border-info rounded-lg p-6">
        <h4 className="text-info font-semibold mb-2">ℹ Information</h4>
        <p className="text-gray-600 text-body">
          This feature is currently in beta testing.
        </p>
      </div>
    </div>
  );
}
```

### Text Hierarchy with Colors

```tsx
export function ContentHierarchy() {
  return (
    <article className="max-w-[70ch]">
      {/* Primary heading - Darkest gray (AAA compliance) */}
      <h1 className="text-h1 text-gray-700 font-bold mb-6">Main Heading</h1>

      {/* Body text - Dark gray (AAA compliance) */}
      <p className="text-body text-gray-600 leading-extra-loose mb-8">
        Primary body content that users read most frequently. Uses AAA-compliant
        contrast ratio of 7.2:1 for maximum readability.
      </p>

      {/* Secondary text - Medium gray (AA compliance) */}
      <p className="text-body text-gray-500 leading-extra-loose mb-6">
        Secondary information that's less critical. Still meets AA standard with
        5.3:1 contrast ratio.
      </p>

      {/* Tertiary/caption text - Light gray (AA compliance) */}
      <p className="caption text-gray-400 leading-relaxed">
        Metadata, timestamps, or supplementary information. Meets minimum AA
        standard at 4.5:1.
      </p>

      {/* Disabled state - Lightest gray */}
      <p className="text-body text-gray-300 leading-extra-loose">
        Disabled or inactive text (not for critical information).
      </p>
    </article>
  );
}
```

### Interactive Elements

```tsx
export function InteractiveComponents() {
  return (
    <div className="space-y-6">
      {/* Primary button - WCAG AA compliant */}
      <button
        className="
        min-h-[48px]           {/* Touch-friendly */}
        min-w-[48px]
        px-8 
        py-3
        bg-primary             {/* 4.5:1 contrast */}
        text-white
        font-semibold
        rounded-lg
        hover:bg-primary-dark
        transition-colors
      "
      >
        Primary Action
      </button>

      {/* Link with proper contrast */}
      <a
        href="#"
        className="
          text-primary           {/* 4.5:1 contrast */}
          underline 
          hover:text-primary-dark
          font-medium
        "
      >
        Learn more about our process
      </a>

      {/* Badge with semantic color */}
      <span
        className="
        inline-flex 
        items-center 
        px-3 
        py-1 
        bg-success/10 
        text-success           {/* 4.8:1 contrast */}
        text-sm 
        font-medium 
        rounded-full
      "
      >
        Active
      </span>
    </div>
  );
}
```

---

## 4. Responsive Breakpoint Examples

### Mobile-First Grid

```tsx
export function ResponsiveGrid() {
  return (
    <div
      className="
      grid 
      grid-cols-1          {/* 1 column on mobile (< 480px) */}
      sm:grid-cols-2       {/* 2 columns on large phones (480px+) */}
      lg:grid-cols-3       {/* 3 columns on desktop (1024px+) */}
      xl:grid-cols-4       {/* 4 columns on large desktop (1280px+) */}
      gap-6                {/* Consistent 24px gap */}
      md:gap-8             {/* 32px gap on tablet+ */}
    "
    >
      <div className="card p-12 bg-gray-50">Item 1</div>
      <div className="card p-12 bg-gray-50">Item 2</div>
      <div className="card p-12 bg-gray-50">Item 3</div>
      <div className="card p-12 bg-gray-50">Item 4</div>
    </div>
  );
}
```

### Responsive Typography

```tsx
export function ResponsiveHeading() {
  return (
    <div>
      {/* Scales: 32px → 40px → 56px */}
      <h1
        className="
        text-4xl             {/* 32px on mobile */}
        sm:text-5xl          {/* 40px on large phones */}
        lg:text-h1           {/* 56px on desktop */}
        font-bold
        leading-tight
        tracking-tight
      "
      >
        Responsive Heading
      </h1>

      {/* Scales: 16px → 18px */}
      <p
        className="
        text-base            {/* 16px on mobile */}
        md:text-body         {/* 18px on tablet+ */}
        leading-loose
        md:leading-extra-loose
        mt-6
        max-w-[70ch]
      "
      >
        Body text that scales up on larger screens for better readability.
      </p>
    </div>
  );
}
```

### Container Sizing

```tsx
export function ResponsiveContainer() {
  return (
    <div
      className="
      w-full
      px-4                 {/* 16px on mobile */}
      sm:px-6              {/* 24px on large phones */}
      md:px-8              {/* 32px on tablet */}
      lg:px-12             {/* 48px on desktop */}
      max-w-7xl            {/* 1280px max-width */}
      2xl:max-w-[1400px]   {/* 1400px on extra large */}
      mx-auto
    "
    >
      <h2 className="text-h2 mb-8">Content</h2>
      <p className="text-body max-w-[70ch]">
        Container automatically adjusts padding and max-width based on screen
        size.
      </p>
    </div>
  );
}
```

---

## 5. Card Components

### Basic Card

```tsx
export function BasicCard({ title, description }: CardProps) {
  return (
    <div
      className="
      card 
      p-12                 {/* 48px internal spacing */}
      bg-white 
      rounded-lg 
      border 
      border-gray-200
      hover:border-primary 
      hover:shadow-lg
      transition-all
    "
    >
      <h3 className="text-h3 font-semibold text-gray-700 mb-6">{title}</h3>
      <p className="text-body text-gray-600 leading-extra-loose">
        {description}
      </p>
    </div>
  );
}
```

### Metric Card

```tsx
export function MetricCard({ value, label, trend }: MetricCardProps) {
  return (
    <div
      className="
      card 
      p-12 
      bg-gradient-to-br 
      from-primary/5 
      to-primary/10
      rounded-lg 
      border 
      border-primary/20
    "
    >
      <div className="stat text-primary font-bold mb-4">{value}</div>
      <p className="text-body text-gray-700 font-medium mb-2">{label}</p>
      <p className="caption text-success">
        {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% vs last month
      </p>
    </div>
  );
}
```

### Feature Card

```tsx
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="
      card 
      p-12 
      bg-gray-50 
      rounded-lg
      hover:bg-white
      hover:shadow-xl
      transition-all
      duration-300
    "
    >
      {/* Icon with semantic color */}
      <div
        className="
        w-16 
        h-16 
        bg-primary/10 
        rounded-lg 
        flex 
        items-center 
        justify-center
        mb-6
      "
      >
        <span className="text-3xl text-primary">{icon}</span>
      </div>

      <h3 className="text-h3 font-semibold text-gray-700 mb-4">{title}</h3>

      <p className="text-body text-gray-600 leading-extra-loose">
        {description}
      </p>
    </div>
  );
}
```

---

## 6. Form Examples

### Accessible Form

```tsx
export function AccessibleForm() {
  return (
    <form className="max-w-2xl space-y-8">
      {/* Form group with proper spacing */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="
            block 
            text-body 
            font-medium 
            text-gray-700
          "
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="
            w-full
            min-h-[48px]         {/* Touch-friendly */}
            px-4
            py-3
            text-body
            text-gray-700
            bg-white
            border
            border-gray-300
            rounded-lg
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            focus:outline-none
            transition-colors
          "
          placeholder="your@email.com"
        />
        <p className="caption text-gray-500">
          We'll never share your email with anyone else.
        </p>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="
          min-h-[48px]
          px-8
          py-3
          bg-primary
          text-white
          font-semibold
          rounded-lg
          hover:bg-primary-dark
          focus:ring-2
          focus:ring-primary/20
          focus:outline-none
          transition-colors
        "
      >
        Submit Form
      </button>
    </form>
  );
}
```

---

## 7. Quick Copy-Paste Snippets

### Standard Section

```tsx
<section className="py-24 md:py-32">
  <div className="container max-w-7xl mx-auto px-4 md:px-8">
    <h2 className="text-h2 font-bold text-gray-700 mb-8">Section Title</h2>
    <p className="text-body text-gray-600 leading-extra-loose max-w-[70ch]">
      Body content...
    </p>
  </div>
</section>
```

### Two-Column Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div>
    <h3 className="text-h3 font-semibold text-gray-700 mb-6">Left Column</h3>
    <p className="text-body text-gray-600 leading-extra-loose">Content...</p>
  </div>
  <div>
    <h3 className="text-h3 font-semibold text-gray-700 mb-6">Right Column</h3>
    <p className="text-body text-gray-600 leading-extra-loose">Content...</p>
  </div>
</div>
```

### CTA Section

```tsx
<section className="py-24 bg-primary/5">
  <div className="container text-center">
    <h2 className="text-h2 font-bold text-gray-700 mb-6">
      Ready to Get Started?
    </h2>
    <p className="lead text-gray-600 mb-12 max-w-[70ch] mx-auto">
      Join thousands of professionals using our platform.
    </p>
    <button className="min-h-[48px] px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
      Start Free Trial
    </button>
  </div>
</section>
```

---

## Need Help?

- **Design Tokens Reference**: See `client/styles/design-tokens.css`
- **Full Documentation**: See `DESIGN_SYSTEM_V2.md`
- **Questions?**: Contact the Design Systems team

**Last Updated**: 2024
