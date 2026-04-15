import Navigation, { SkipLink } from "../components/Navigation";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      <main
        id="main-content"
        className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="bg-white rounded-[20px] sm:rounded-[25px] shadow-sm p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Header */}
          <header className="text-center mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-[#E5E5E5]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#131417] tracking-[-0.8px] mb-2">
              Sean Smith
            </h1>
            <p className="text-base sm:text-lg text-[#9FA0A3] mb-3">
              Senior UX/UI &amp; Product Designer | 0&rarr;1 Product Builder |
              AI-Native Workflows
            </p>
            <p className="text-sm sm:text-base text-[#9FA0A3]">
              San Francisco, CA &bull; (415) 336-4722 &bull;{" "}
              <a
                href="mailto:smith.design530@gmail.com"
                className="text-[#131417] underline underline-offset-2 decoration-1 hover:text-[#2a2a2a] transition-colors duration-300"
              >
                smith.design530@gmail.com
              </a>
            </p>
          </header>

          {/* Professional Summary */}
          <Section title="Professional Summary">
            <p className="text-[#131417] leading-[1.7] text-sm sm:text-base">
              Senior UX/UI &amp; Product Designer with 8+ years of experience
              building products from zero to launch in B2B SaaS and AI-enabled
              platforms. Proven expertise in user experience design, interaction
              design, visual design systems, and user research — shipping
              directly into production using AI-native tools (Claude, Cursor)
              while owning strategy, research, and design end-to-end. Track
              record of identifying core UX breakthroughs that drive adoption:
              reduced user task time by 40% through automation-first workflow
              design and improved operational efficiency by 30% with AI-assisted
              decision interfaces. Thrives in high-ambiguity, founder-adjacent
              roles with full ownership over product direction and
              cross-functional design leadership.
            </p>
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <ExperienceEntry
              role="Senior Product Designer"
              dates="09/2023 – Present"
              company="Custom Data Processing, Inc."
              location="Remote"
              bullets={[
                "Lead end-to-end UX/UI design across net-new and iterative features for data-dense operational platforms — conducting user research, defining interaction patterns, and shipping high-fidelity solutions.",
                "Design and ship AI-assisted dashboards, task-prioritization workflows, and data visualization interfaces using AI-native development tools, improving team efficiency by approximately 30%.",
                "Partner directly with executive leadership on product strategy, UX roadmap prioritization, and feature scoping — translating business objectives into intuitive user experiences.",
                "Rapidly prototype, usability test, and iterate design concepts in production environments, reducing design-to-ship cycles and accelerating time-to-value for users.",
                "Build and maintain a scalable component library and design system in Figma, supporting consistent multi-team delivery, visual polish, and rapid product growth.",
                "Conduct ongoing user interviews and usability testing to surface friction points, validate workflows, and identify high-impact UX opportunities driving product adoption.",
              ]}
            />
            <ExperienceEntry
              role="Founding Product Designer"
              dates="09/2018 – 09/2023"
              company="Computis"
              location="Remote"
              bullets={[
                "Owned 0→1 UX/UI design for an AI-enabled fintech SaaS platform — from initial concept, wireframes, and prototypes through production launch with full creative ownership.",
                "Identified core UX breakthroughs in onboarding flows and workflow automation that drove product adoption and reduced professional user task time by approximately 40%.",
                "Built AI-enhanced review and exception-handling experiences that balanced automation with human judgment, directly shaping the product's core value proposition and user experience.",
                "Designed multirole dashboards, rule configuration tools, and complex data validation flows — demonstrating strong product and systems thinking across information architecture, interaction design, and visual design.",
                "Established a scalable Figma design system from scratch, enabling rapid iteration, design consistency, and visual polish as the product grew.",
                "Partnered with the founder on UX strategy, user research, and feature prioritization — defining the product roadmap alongside business goals and user needs.",
              ]}
            />
          </Section>

          {/* Skills */}
          <Section title="Skills & Tools">
            <SkillRow
              label="UX/UI Design"
              value="User Experience Design, User Interface Design, Interaction Design, Visual Design, Information Architecture, Responsive Design, Accessibility (WCAG), Dashboard UX"
            />
            <SkillRow
              label="Design Tools"
              value="Figma, Prototyping, Wireframing, Design Systems, Component Libraries, High-Fidelity Mockups"
            />
            <SkillRow
              label="AI-Native Design & Development"
              value="Claude, Cursor, AI-Assisted Prototyping, Prompt-Driven Design Workflows"
            />
            <SkillRow
              label="Research & Strategy"
              value="User Interviews, Usability Testing, Journey Mapping, Persona Development, Product Roadmap, KPI Alignment, A/B Testing"
            />
            <SkillRow
              label="Front-End Implementation"
              value="React, TypeScript, HTML/CSS — ships production-ready code from design"
            />
            <SkillRow
              label="Collaboration"
              value="Agile/Scrum, Cross-Functional Leadership, Stakeholder Management, Design Critique, Product-Led Growth"
            />
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-medium text-[#131417]">
                  M.S. — Human-Computer Interaction
                </h3>
                <p className="text-sm text-[#9FA0A3]">
                  San Francisco State University
                </p>
              </div>
              <span className="text-sm text-[#9FA0A3]">2018</span>
            </div>
          </Section>

          {/* Key Achievements */}
          <Section title="Key Achievements">
            <AchievementItem
              label="0→1 Product & UX Leadership"
              description="Took products from ambiguity to production as founding designer in lean, venture-backed teams — leading user research, defining information architecture, and shipping intuitive interfaces used by real users."
            />
            <AchievementItem
              label="AI-Driven Decision UX"
              description="Built triage and prioritization flows that reduced manual review time and surfaced high-value work through intelligent automation and user-centered AI interface design."
            />
            <AchievementItem
              label="Operational Efficiency at Scale"
              description="Delivered 30–40% gains in task speed and accuracy through automation-first workflow redesign and data-driven UX optimization."
            />
            <AchievementItem
              label="Design Systems for Velocity"
              description="Created modular UI frameworks and component libraries from scratch that increased design consistency, visual polish, and cross-team shipping speed."
            />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="text-lg sm:text-xl font-medium text-[#131417] tracking-[-0.3px] mb-4 pb-2 border-b border-[#E5E5E5]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ExperienceEntry({
  role,
  dates,
  company,
  location,
  bullets,
}: {
  role: string;
  dates: string;
  company: string;
  location: string;
  bullets: string[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
        <h3 className="text-base sm:text-lg font-medium text-[#131417]">
          {role}
        </h3>
        <span className="text-sm text-[#9FA0A3]">{dates}</span>
      </div>
      <p className="text-sm text-[#9FA0A3] mb-3">
        {company} &bull; {location}
      </p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm sm:text-base text-[#131417] leading-[1.7] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#9FA0A3]"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3 last:mb-0">
      <span className="text-sm sm:text-base font-medium text-[#131417]">
        {label}:{" "}
      </span>
      <span className="text-sm sm:text-base text-[#9FA0A3]">{value}</span>
    </div>
  );
}

function AchievementItem({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <h3 className="text-sm sm:text-base font-medium text-[#131417] mb-1">
        {label}
      </h3>
      <p className="text-sm sm:text-base text-[#9FA0A3] leading-[1.7]">
        {description}
      </p>
    </div>
  );
}
