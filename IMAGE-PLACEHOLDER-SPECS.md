# Image Placeholder Specifications

All image placeholders are marked with dashed borders and labeled file names. Replace these with actual graphics to complete the visual presentation.

## Maximum Width
All images: **1440px** (optimized for standard desktop viewing)

---

## 1. CPA Workflow Journey Map
**File**: `cpa-workflow-journey-map.png`  
**Location**: Research Foundation section  
**Dimensions**: 1440px × 600px  
**Purpose**: Visualize CPA workflow analysis and journey mapping  
**Content Suggestions**:
- User journey stages
- Pain points identified
- Opportunities mapped
- Time spent per task
- Emotional journey curve

---

## 2. Before/After CPA Workflow
**File**: `before-after-cpa-workflow.png`  
**Location**: Challenge section  
**Dimensions**: 1440px × 500px  
**Purpose**: Show workflow transformation  
**Content Suggestions**:
- Side-by-side comparison
- Before: Manual classification process (95% manual)
- After: AI-assisted workflow (15% manual)
- Time saved visualization
- Arrows showing process flow

---

## 3. AI Confidence Tier System
**File**: `ai-confidence-tier-system.png`  
**Location**: My Approach section  
**Dimensions**: 1440px × 400px  
**Purpose**: Explain 3-tier confidence system  
**Content Suggestions**:
- Three tiers clearly labeled:
  - High (90%+): Auto-classify
  - Medium (60-89%): Review queue
  - Low (<60%): Manual required
- Flow diagram showing decision paths
- Visual indicators for each tier
- Example transactions per tier

---

## 4. Design System Components
**File**: `design-system-components.png`  
**Location**: AI Solutions section (intro)  
**Dimensions**: 1440px × 800px  
**Purpose**: Showcase UI component library  
**Content Suggestions**:
- Confidence badges (High/Medium/Low)
- Review queue interface
- Override control buttons
- Audit trail elements
- Color palette
- Typography specimens
- Icon set
- Component states (default, hover, active)

---

## 5. Design Process Timeline
**File**: `design-process-timeline.png`  
**Location**: Design Process Overview section  
**Dimensions**: 1440px × 500px  
**Purpose**: Show end-to-end design process  
**Content Suggestions**:
- Timeline with 7 phases:
  1. Research (CPA interviews, observations)
  2. Ideation (brainstorming, workshops)
  3. Wireframes (low-fi sketches)
  4. Prototyping (interactive mockups)
  5. Testing (usability tests)
  6. Launch (implementation)
  7. Iteration (continuous improvement)
- Milestones marked
- Key deliverables per phase
- Duration indicators

---

## 6. Classification Wireframes
**File**: `classification-wireframes.png`  
**Location**: Intelligent Transaction Classification feature  
**Dimensions**: 1440px × 600px  
**Purpose**: Show wireframe evolution  
**Content Suggestions**:
- 3-4 wireframe versions showing iteration
- Confidence indicator evolution
- Early concepts vs final design
- Annotation callouts explaining changes
- User feedback integration points

---

## 7. Audit Trail Interface
**File**: `audit-trail-interface.png`  
**Location**: Explainable Audit Trail feature  
**Dimensions**: 1440px × 600px  
**Purpose**: Demonstrate audit trail UI  
**Content Suggestions**:
- Timeline view of classification changes
- Override rationale input field
- Timestamp and user information
- PDF export button
- Filtering controls
- Example audit entries
- IRS-compliance indicators

---

## 8. Rule Builder Evolution
**File**: `rule-builder-evolution.png`  
**Location**: Smart Rule Builder feature  
**Dimensions**: 1440px × 700px  
**Purpose**: Show v1 vs v2 comparison  
**Content Suggestions**:
- Split screen: v1 (complex form) vs v2 (drag-and-drop)
- Before: Long form with technical fields (15 min)
- After: Visual builder with drag-and-drop (90 sec)
- Complexity reduction annotations
- AI-suggested rules preview
- Natural language output
- Adoption metrics overlay

---

## 9. Results Before/After Infographic
**File**: `results-before-after-infographic.png`  
**Location**: Results & Business Impact section  
**Dimensions**: 1440px × 600px  
**Purpose**: Visual summary of results  
**Content Suggestions**:
- Key metrics visualization:
  - ↓85% manual work
  - ↓45% onboarding time
  - ↑32% conversion rate
  - ↑150% error detection
  - 3 enterprise deals
- Before/after workflow comparison
- Revenue impact visualization
- Adoption metrics
- Customer testimonial callouts
- Icon-driven layout

---

## Design Guidelines

### Style Consistency
- **Colors**: Use Precision Trust palette
  - Primary: #0A2540
  - Secondary: #1E3A5F
  - Accent: #00D4AA
  - Neutral: #F7F9FC
  - Error: #E74C3C
  - Success: #00D4AA
  - Warning: #F39C12

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, 14-16px
- **Annotations**: 12px, secondary color
- **Metrics**: Large, bold numbers

### Visual Elements
- **Rounded corners**: 8-12px (consistent with design system)
- **Shadows**: Subtle, following existing patterns
- **Icons**: Line style, consistent with Lucide React
- **Charts**: Clean, minimal, data-focused

### Accessibility
- **Contrast**: WCAG AA minimum (4.5:1 for text)
- **Labels**: Clear, descriptive
- **Alternative formats**: Consider providing text alternatives

### File Format
- **Preferred**: PNG with transparency where appropriate
- **Alternative**: WebP for smaller file sizes
- **Fallback**: SVG for diagrams and flowcharts

---

## Implementation Notes

1. All placeholders are in `<div>` elements with:
   - `bg-[#FAFBFC]` background
   - `border-2 border-dashed border-[#E3E8EF]` border
   - Centered text with file name labels

2. To replace a placeholder:
   ```jsx
   // Replace this:
   <div className="bg-[#FAFBFC] rounded-card p-8 border-2 border-dashed...">
     <p>Image Placeholder</p>
     <p>filename.png</p>
   </div>
   
   // With this:
   <img 
     src="/path/to/filename.png" 
     alt="Descriptive alt text"
     className="rounded-card w-full h-auto"
     loading="lazy"
   />
   ```

3. Store images in `public/images/case-studies/computis/` directory

4. Optimize images before uploading:
   - Compress with tools like TinyPNG or Squoosh
   - Target file size: <200KB per image
   - Use responsive images if needed

---

## Priority Order

If creating images incrementally, prioritize in this order:

1. **Results Before/After Infographic** (highest impact)
2. **AI Confidence Tier System** (core concept explanation)
3. **Design System Components** (shows craftsmanship)
4. **Rule Builder Evolution** (demonstrates iteration)
5. **Design Process Timeline** (shows methodology)
6. **Classification Wireframes** (iteration story)
7. **Audit Trail Interface** (feature detail)
8. **Before/After CPA Workflow** (context setting)
9. **CPA Workflow Journey Map** (research foundation)

---

**Total Images**: 9  
**Total Estimated Visual Space**: ~5,200px height  
**Max Width**: 1440px (all images)  
**Recommended Format**: PNG or WebP  
**Target File Size**: <200KB each (~1.8MB total)
