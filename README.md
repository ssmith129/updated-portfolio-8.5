# Smith Design Portfolio

A modern, responsive portfolio website showcasing UX/UI design work, product design case studies, and interactive design experiences. Built with a focus on performance, accessibility, and showcasing measurable business impact.

## 🎯 Overview

This portfolio demonstrates comprehensive design thinking and execution across healthcare, fintech, and AI-enhanced product experiences. The site features detailed case studies, interactive prototypes, and evidence of end-to-end design process from research through implementation.

**Live Site:** [Insert deployed URL here]

## ✨ Features

### Portfolio Highlights
- **Interactive Case Studies**: Deep-dive explorations of Computis (crypto tax platform) and Symplify (hospital management system)
- **Two-Tier Architecture**: 90-second executive summaries with expandable detailed process documentation
- **Visual Design Evidence**: Component libraries, design systems, and before/after transformations
- **Measurable Impact**: Quantified business outcomes and user experience improvements
- **Responsive Design**: Optimized for all devices and screen sizes

### Technical Features
- Modern React/TypeScript architecture
- Server-side rendering for optimal performance
- Semantic HTML for accessibility (WCAG 2.1 AA compliant)
- Optimized image loading and lazy loading
- SEO-optimized meta tags and structured data
- Analytics integration for portfolio performance tracking

### Design System
- Custom component library with documented patterns
- Consistent typography scale and spacing system
- Accessible color palette with sufficient contrast ratios
- Interactive component states and transitions
- Reusable UI patterns across case studies

## 🛠 Tech Stack

### Core Technologies
- **Framework**: [React/Next.js/specify your framework]
- **Language**: TypeScript
- **Styling**: [CSS Modules/Tailwind/Styled Components/specify]
- **State Management**: [React Context/Redux/specify if applicable]

### Development Tools
- **Version Control**: Git & GitHub
- **Package Manager**: npm/yarn
- **Build Tool**: [Webpack/Vite/specify]
- **Code Quality**: ESLint, Prettier
- **Testing**: [Jest/React Testing Library/specify if applicable]

### Deployment
- **Hosting**: Vercel/Netlify/specify
- **CI/CD**: GitHub Actions
- **Domain**: [Your custom domain]

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/ssmith129/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables (if applicable)
```bash
cp .env.example .env.local
# Add your environment variables
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   ├── images/            # Case study images, screenshots
│   ├── icons/             # SVG icons and favicons
│   └── documents/         # Downloadable assets (resume, etc.)
├── src/
│   ├── components/        # Reusable React components
│   │   ├── common/       # Shared UI components
│   │   ├── case-studies/ # Case study specific components
│   │   ├── navigation/   # Header, footer, navigation
│   │   └── sections/     # Landing page sections
│   ├── pages/            # Application pages/routes
│   │   ├── index.tsx     # Landing page
│   │   ├── about.tsx     # About page
│   │   ├── work/         # Case study pages
│   │   └── contact.tsx   # Contact page
│   ├── styles/           # Global styles and themes
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── data/             # Case study content and data
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── [config files]
```

## 🎨 Design Philosophy

### User Experience Principles
1. **Scannable Content**: Information hierarchy optimized for recruiter workflows (90-second rule)
2. **Progressive Disclosure**: Summary views with expandable detailed documentation
3. **Visual Evidence**: Screenshots, wireframes, and design artifacts at every stage
4. **Context-Aware Navigation**: Persistent access to relevant case study sections
5. **Performance First**: Fast load times with optimized assets

### Accessibility Standards
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader optimization
- Sufficient color contrast (WCAG 2.1 AA)
- Focus indicators and skip links
- Responsive text sizing

## 📊 Featured Case Studies

### Computis - Crypto Tax Engine
A comprehensive redesign of a cryptocurrency tax calculation platform, focusing on complex data visualization and AI-enhanced workflows.

**Key Outcomes:**
- [Specify measurable impact]
- [User satisfaction improvements]
- [Business metrics]

### Symplify - Hospital Management System
AI-enhanced EHR integration and clinical workflow optimization for hospital environments, with HIPAA compliance considerations.

**Key Outcomes:**
- [Specify measurable impact]
- [Clinical workflow improvements]
- [Patient care metrics]

## 🔄 Development Workflow

### Branch Strategy
- `main` - Production branch (protected)
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

### Commit Convention
```
feat: Add new case study component
fix: Resolve mobile navigation issue
docs: Update README with deployment info
style: Improve responsive breakpoints
refactor: Optimize image loading logic
```

### Code Quality
```bash
# Run linter
npm run lint

# Format code
npm run format

# Type check
npm run type-check

# Run tests (if applicable)
npm test
```

## 🚢 Deployment

### Automatic Deployment
The site automatically deploys to production on pushes to the `main` branch via Vercel/Netlify integration.

### Manual Deployment
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to hosting platform
npm run deploy
```

### Environment Variables
Required environment variables for deployment:
```
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (if applicable)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Add other environment variables as needed
```

## 📈 Performance Optimization

- Image optimization with next/image or similar
- Code splitting and lazy loading
- Critical CSS inlining
- Font optimization with system font fallbacks
- Minimal JavaScript bundle size
- Preloading critical resources
- Service worker for offline support (if applicable)

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data (JSON-LD schema)
- XML sitemap
- Robots.txt configuration
- Optimized page titles and descriptions
- Fast Core Web Vitals scores

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

### Reporting Issues
If you find any bugs or have suggestions for improvements:
1. Check existing issues
2. Create a new issue with detailed description
3. Include screenshots or screen recordings if applicable

## 📄 License

This project is proprietary and confidential. All rights reserved.

The code structure and implementation may be referenced for educational purposes, but the design work, case studies, and content are protected intellectual property.

## 📞 Contact

**Sean Smith**  
Senior UX/UI & Product Designer

- Portfolio: [Your portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- Email: [Your email]
- GitHub: [@ssmith129](https://github.com/ssmith129)

## 🙏 Acknowledgments

- Design inspiration and best practices from leading design systems
- Portfolio structure informed by senior/staff designer hiring research
- Built with modern web standards and accessibility in mind

---

**Note for Recruiters**: This portfolio demonstrates end-to-end product design capabilities including research, strategy, visual design, prototyping, and implementation. Each case study includes measurable business impact and comprehensive process documentation. For detailed discussion of specific projects or design decisions, please reach out directly.

## 📝 Recent Updates

### Version 1.0.0 (Current)
- Initial portfolio launch
- Computis case study with full process documentation
- Symplify case study with AI-enhanced workflows
- Design system documentation
- Responsive implementation across all breakpoints

### Planned Enhancements
- [ ] Additional case study: [Project name]
- [ ] Interactive prototype embeds
- [ ] Design process video walkthroughs
- [ ] Blog/writing section for design thinking
- [ ] Dark mode support

---

*Last Updated: [Current Date]*
*Built with attention to detail and user-centered design principles*
