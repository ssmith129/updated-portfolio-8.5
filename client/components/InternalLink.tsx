import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: 'inline' | 'button' | 'nav';
  rel?: string;
  'aria-label'?: string;
}

export default function InternalLink({ 
  href, 
  children, 
  className,
  external = false,
  variant = 'inline',
  rel,
  'aria-label': ariaLabel,
  ...props 
}: InternalLinkProps) {
  const baseClasses = {
    inline: "text-[#131417] hover:text-[#9FA0A3] transition-colors duration-300 underline underline-offset-2 decoration-1 hover:decoration-2",
    button: "inline-flex items-center gap-2 px-4 py-2 bg-[#131417] text-white rounded-[25px] hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105",
    nav: "text-[#131417] hover:text-[#9FA0A3] transition-colors duration-300"
  };

  const linkClass = cn(baseClasses[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={linkClass}
        target="_blank"
        rel={rel || "noopener noreferrer"}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
        {variant === 'button' && <ExternalLink className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link 
      to={href} 
      className={linkClass}
      rel={rel}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  );
}