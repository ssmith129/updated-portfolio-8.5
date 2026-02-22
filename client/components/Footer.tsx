import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/ssmit129" },
  { label: "GitHub", href: "https://github.com/ssmith129" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sean-smith-sf/" },
];

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={`bg-white dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-700 transition-colors duration-200 ${className}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h3 className="text-base font-medium text-neutral-900 dark:text-white mb-2 transition-colors duration-200">
              Sean Smith
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-[280px] transition-colors duration-200">
              UX/Product Designer
            </p>
          </div>

          {/* Navigation & Social */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            {/* Navigation */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social */}
            <nav aria-label="Social media links">
              <ul className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex-shrink-0">
            <a
              href="mailto:sean@smithdesign.live"
              className="text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              sean@smithdesign.live
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-gray-700 transition-colors duration-200">
          <p className="text-xs text-neutral-500 dark:text-gray-400 transition-colors duration-200">
            © {new Date().getFullYear()} Sean Smith
          </p>
        </div>
      </div>
    </footer>
  );
}
