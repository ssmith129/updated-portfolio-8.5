# Computis Workflow Pain Points Diagram

Professional workflow visualization demonstrating current process inefficiencies in the CPA-to-engineer request workflow.

## Files Included

### 1. workflow-pain-points.svg

- **Format:** Scalable Vector Graphics
- **Dimensions:** 1000×600px (5:3 aspect ratio)
- **Use case:** Print materials, presentations requiring scaling, professional documentation
- **Features:** Fully scalable without quality loss, editable in design tools

### 2. workflow-pain-points.png

- **Format:** Portable Network Graphics
- **Dimensions:** 1000×600px
- **Quality:** High-quality (95% compression)
- **Use case:** Web embedding, slide presentations, stakeholder reports
- **File size:** Optimized for web delivery

### 3. workflow-pain-points.html

- **Format:** Interactive HTML
- **Dimensions:** 1000×600px
- **Features:**
  - Hover tooltips with detailed explanations
  - Interactive elements with click animations
  - Fully responsive design
  - Professional Miro board aesthetic
- **Use case:** Live presentations, interactive stakeholder demos

## Diagram Content

### Workflow Boxes (Left to Right)

1. **CPA** (Light Blue #E3F2FD) - Starting point: Client request
2. **Request** (Gray #F5F5F5) - Submission via email/ticket
3. **Engineer** (Blue #2196F3) - Manual processing step
4. **Python Script** (Dark Blue #1565C0) - Script execution
5. **Results** (Green #4CAF50) - Output delivery

### Pain Point Annotations (Red #F44336)

1. **"2.3 day wait"** - Between CPA and Engineer
   - Highlights communication delays
2. **"No visibility"** - Between Engineer and Python Script
   - Shows lack of process transparency
3. **"Can't explain results"** - At CPA receiving results
   - Emphasizes communication gaps with clients

### Process Flow

- Red directional arrows connect all workflow stages
- Dashed return arrow shows complete cycle from Results back to CPA
- Connector lines link pain points to relevant workflow stages

### Summary Section

Bottom panel highlighting three key inefficiencies:

- Average 2.3-day turnaround time
- Zero transparency into processing status
- CPAs unable to interpret results without engineering support

## Usage Guidelines

### For Presentations

- Use PNG for PowerPoint/Keynote slides
- Use SVG for high-resolution print materials
- Use HTML for interactive stakeholder meetings

### Accessibility

All formats include proper alt text:

> "Workflow diagram showing CPA request through engineering ticket to Python script execution, with annotations highlighting 2.3-day wait times and lack of explainability"

### Embedding in Web Pages

```html
<!-- Static image -->
<img
  src="/Computis Assets/workflow-pain-points.png"
  alt="Workflow diagram showing CPA request through engineering ticket to Python script execution, with annotations highlighting 2.3-day wait times and lack of explainability"
  width="1000"
  height="600"
/>

<!-- Interactive version -->
<iframe
  src="/Computis Assets/workflow-pain-points.html"
  width="1060"
  height="700"
  title="Interactive Computis Workflow Pain Points Diagram"
></iframe>
```

### Integration with Computis Case Study

These assets support the problem statement and business case sections of the Computis case study, providing visual evidence of workflow inefficiencies that justify the process optimization investment.

## Technical Specifications

- **Canvas:** 1000×600px (5:3 aspect ratio)
- **Color Palette:** Professional high-contrast scheme
  - Primary blue: #2196F3
  - Pain point red: #F44336
  - Success green: #4CAF50
  - Neutral grays: #F5F5F5, #BDBDBD
- **Typography:** Inter font family, 12-16px sizes
- **Design Style:** Authentic Miro board appearance with subtle shadows
- **Spacing:** Minimum 120px between workflow boxes

## Regeneration

To regenerate the PNG from SVG:

```bash
node scripts/generate-workflow-png.js
```

Requires: `sharp` package (already installed as dev dependency)

---

**Created for:** Computis Case Study - Process Inefficiencies Documentation  
**Purpose:** Stakeholder presentations and business case justification  
**Last Updated:** 2024
