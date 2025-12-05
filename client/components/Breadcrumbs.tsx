import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({
  items,
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`flex items-center space-x-2 text-sm ${className}`}
    >
      <ol
        className="flex items-center space-x-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight
                className="w-4 h-4 text-[#9FA0A3] mx-2 flex-shrink-0"
                aria-hidden="true"
              />
            )}

            {item.current ? (
              <span
                className="font-medium text-[#131417] tracking-[-0.16px] transition-colors duration-300"
                aria-current="page"
                itemProp="name"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-[#9FA0A3] hover:text-[#131417] font-medium tracking-[-0.16px] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-opacity-50 rounded-md px-1 py-0.5"
                itemProp="item"
                aria-label={`Navigate to ${item.label}`}
              >
                <span itemProp="name">
                  {index === 0 && item.label === "Home" ? (
                    <span className="flex items-center gap-1">
                      <Home className="w-4 h-4" aria-hidden="true" />
                      <span className="sr-only">Home</span>
                      <span aria-hidden="true">{item.label}</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </span>
              </Link>
            )}

            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Utility function to generate breadcrumbs based on current path
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  if (pathname === "/") {
    breadcrumbs[0].current = true;
    return breadcrumbs;
  }

  if (pathname.startsWith("/case-studies")) {
    breadcrumbs.push({ label: "Case Studies", href: "/case-studies" });

    if (pathname === "/case-studies") {
      breadcrumbs[1].current = true;
      return breadcrumbs;
    }

    // Individual case study pages
    const caseStudyTitles: Record<string, string> = {
      "/case-studies/computis-crypto-tax-engine":
        "Computis – Crypto Tax Engine",
      "/case-studies/ezemrx-redesigning-ehr": "ezEMRx – EHR Redesign",
      "/case-studies/symplify-hospital-management-system":
        "Symplify – Hospital Management",
      "/case-studies/moneyfarm-ai-powered-personal-finance":
        "MoneyFarm – AI Finance",
    };

    const caseStudyTitle = caseStudyTitles[pathname];
    if (caseStudyTitle) {
      breadcrumbs.push({
        label: caseStudyTitle,
        href: pathname,
        current: true,
      });
    }
  } else if (pathname === "/about") {
    breadcrumbs.push({ label: "About", href: "/about", current: true });
  }

  return breadcrumbs;
}
