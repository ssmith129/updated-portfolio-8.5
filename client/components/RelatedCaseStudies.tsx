import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  category: string;
  duration: string;
  description: string;
}

const allCaseStudies: CaseStudy[] = [
  {
    id: "computis",
    title: "Computis",
    subtitle: "Crypto Tax Engine",
    href: "/case-studies/computis-crypto-tax-engine",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900",
    category: "Fintech",
    duration: "12 months",
    description:
      "Enterprise-grade crypto tax automation platform for CPAs and accountants",
  },
  {
    id: "ezemrx",
    title: "ezEMRx",
    subtitle: "EHR for Public Health",
    href: "/case-studies/ezemrx-redesigning-ehr",
    image: "/ipad.png",
    category: "Healthcare",
    duration: "8 months",
    description:
      "Electronic health records system redesign for public health organizations",
  },
  {
    id: "symplify",
    title: "Symplify",
    subtitle: "Hospital Management System",
    href: "/case-studies/symplify-hospital-management-system",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fba69a23156414a589de97341511272c9%2F92a209bf2a4040b697546cef331aa6b0?format=webp&width=800",
    category: "Healthcare",
    duration: "6 months",
    description:
      "Comprehensive hospital management platform for healthcare providers",
  },
  {
    id: "moneyfarm",
    title: "MoneyFarm",
    subtitle: "AI-Powered Personal Finance",
    href: "/case-studies/moneyfarm-ai-powered-personal-finance",
    image:
      "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Fintech",
    duration: "10 months",
    description:
      "AI-driven personal finance management platform for individual users",
  },
];

interface RelatedCaseStudiesProps {
  currentCaseStudyId: string;
  maxItems?: number;
  className?: string;
}

export default function RelatedCaseStudies({
  currentCaseStudyId,
  maxItems = 3,
  className = "",
}: RelatedCaseStudiesProps) {
  const currentCase = allCaseStudies.find((cs) => cs.id === currentCaseStudyId);

  // Filter out current case study and prioritize same category
  const otherCaseStudies = allCaseStudies.filter(
    (cs) => cs.id !== currentCaseStudyId,
  );

  // Sort by same category first, then by others
  const sortedCaseStudies = otherCaseStudies.sort((a, b) => {
    const currentCategory = currentCase?.category || "";
    const aScore = a.category === currentCategory ? 1 : 0;
    const bScore = b.category === currentCategory ? 1 : 0;
    return bScore - aScore;
  });

  const relatedCases = sortedCaseStudies.slice(0, maxItems);

  if (relatedCases.length === 0) return null;

  // Detect theme based on current case study
  const isDarkTheme = currentCaseStudyId === "computis";
  const isHealthcareTheme = currentCaseStudyId === "symplify";

  return (
    <section className={`space-y-8 py-16 ${className}`}>
      <div className="text-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-medium leading-[120%] tracking-[-0.5px] mb-4 transition-all duration-500 hover:tracking-[-0.3px] ${
            isDarkTheme
              ? "text-white hover:text-[#00D4FF]"
              : isHealthcareTheme
                ? "text-[#0F172A] hover:text-[#3B82F6]"
                : "text-[#131417] hover:text-[#2a2a2a]"
          }`}
        >
          Related Case Studies
        </h2>
        <p
          className={`text-base sm:text-lg leading-[150%] tracking-[-0.16px] max-w-[600px] mx-auto transition-all duration-300 ${
            isDarkTheme
              ? "text-[#888888] hover:text-[#CCCCCC]"
              : isHealthcareTheme
                ? "text-[#64748B] hover:text-[#475569]"
                : "text-[#9FA0A3] hover:text-[#131417]"
          }`}
        >
          Explore more projects showcasing UX design across different domains
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" />

      {/* View All Link */}
      <div className="text-center">
        <Link
          to="/case-studies"
          className={`inline-flex items-center gap-2 text-base font-medium tracking-[-0.16px] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-md px-3 py-2 ${
            isDarkTheme
              ? "text-[#888888] hover:text-[#00D4FF] focus:ring-[#00D4FF]"
              : isHealthcareTheme
                ? "text-[#64748B] hover:text-[#3B82F6] focus:ring-[#3B82F6]"
                : "text-[#9FA0A3] hover:text-[#131417] focus:ring-[#131417]"
          }`}
          aria-label="View all case studies in portfolio"
        >
          <span>View All Case Studies</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

export { allCaseStudies };
export type { CaseStudy };
