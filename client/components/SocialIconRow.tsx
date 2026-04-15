import { Mail, Linkedin, Github, FileText } from "lucide-react";

const socialLinks = [
  {
    label: "Email Sean Smith",
    href: "mailto:smith.design530@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn profile",
    href: "http://www.linkedin.com/in/sean-smith-sf",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub profile",
    href: "https://github.com/ssmith129",
    icon: Github,
    external: true,
  },
  {
    label: "View resume",
    href: "/resume",
    icon: FileText,
    external: true,
  },
];

export default function SocialIconRow() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {socialLinks.map(({ label, href, icon: Icon, external }) => {
        const linkProps = external
          ? { target: "_blank" as const, rel: "noopener noreferrer" }
          : {};

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...linkProps}
            className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border-[1.5px] border-[#131417] text-[#131417] hover:bg-[#131417] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-opacity-50"
          >
            <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
          </a>
        );
      })}
    </div>
  );
}
