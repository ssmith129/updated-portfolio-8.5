import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  className?: string;
}

const quickLinks = [
  { label: "Home", href: "/", description: "Portfolio homepage" },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "UX design projects",
  },
  { label: "About", href: "/about", description: "Professional background" },
];

const caseStudyLinks = [
  {
    label: "Computis",
    href: "/case-studies/computis-crypto-tax-engine",
    description: "Crypto Tax Engine",
  },
  {
    label: "ezEMRx",
    href: "/case-studies/ezemrx-redesigning-ehr",
    description: "EHR Redesign",
  },
  {
    label: "Symplify",
    href: "/case-studies/symplify-hospital-management-system",
    description: "Hospital Management",
  },
  {
    label: "MoneyFarm",
    href: "/case-studies/moneyfarm-ai-powered-personal-finance",
    description: "AI Personal Finance",
  },
];

const socialLinks = [
  {
    label: "Behance",
    href: "https://www.behance.net/ssmit129",
    description: "View Sean's design portfolio on Behance",
  },
  {
    label: "GitHub",
    href: "https://github.com/ssmith129",
    description: "Explore Sean's code repositories on GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sean-smith-sf/",
    description: "Connect with Sean on LinkedIn",
  },
];

const legalLinks = [
  { label: "License", href: "#", description: "Usage license information" },
  {
    label: "Terms of Use",
    href: "#",
    description: "Website terms and conditions",
  },
  {
    label: "Privacy Policy",
    href: "#",
    description: "Privacy and data policy",
  },
];

export default function Footer({ className = "" }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700 ${className}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[60px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-white mb-2 tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
                Sean Smith
              </h3>
              <p className="text-sm text-[#9FA0A3] mb-4 leading-[150%]">
                UX/Product Designer specializing in AI-integrated systems and
                complex SaaS platforms.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#9FA0A3] hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>San Francisco, CA</span>
              </div>
              <a
                href="mailto:sean@smithdesign.live"
                className="flex items-center gap-3 text-sm text-[#9FA0A3] hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-1 -m-1"
                aria-label="Send email to Sean Smith"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>sean@smithdesign.live</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4 tracking-[-0.18px]">
              Quick Links
            </h4>
            <nav aria-label="Footer quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#9FA0A3] hover:text-white transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-1 py-0.5 -mx-1 block"
                      title={link.description}
                      aria-label={`${link.label} - ${link.description}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4 tracking-[-0.18px]">
              Case Studies
            </h4>
            <nav aria-label="Footer case studies links">
              <ul className="space-y-3">
                {caseStudyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#9FA0A3] hover:text-white transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-1 py-0.5 -mx-1 block"
                      title={`${link.label} case study - ${link.description}`}
                      aria-label={`View ${link.label} case study about ${link.description}`}
                    >
                      <span className="font-medium">{link.label}</span>
                      <span className="block text-xs text-[#7A7A7A] mt-0.5">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4 tracking-[-0.18px]">
              Connect
            </h4>
            <nav aria-label="Social media links">
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#9FA0A3] hover:text-white transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-1 py-0.5 -mx-1 block"
                      title={link.description}
                      aria-label={`${link.description} (opens in new window)`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2a] mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          {/* Copyright */}
          <div className="order-3 lg:order-1">
            <p className="text-xs sm:text-sm text-[#9FA0A3] font-medium leading-[18px] tracking-[-0.14px] transition-all duration-300 hover:text-white">
              © {new Date().getFullYear()} Sean Smith. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="order-1 lg:order-2">
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {legalLinks.map((link, index) => (
                  <li key={`${link.label}-${index}`}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#9FA0A3] hover:text-white font-medium leading-[18px] tracking-[-0.14px] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-1 py-0.5"
                      title={link.description}
                      aria-label={link.description}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Back to Top */}
          <div className="order-2 lg:order-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#9FA0A3] hover:text-white font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label="Scroll back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
