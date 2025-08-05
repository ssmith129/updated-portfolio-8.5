import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbPage {
  title: string;
  href: string;
}

const breadcrumbMap: Record<string, BreadcrumbPage[]> = {
  '/': [],
  '/case-studies': [
    { title: 'Case Studies', href: '/case-studies' }
  ],
  '/about': [
    { title: 'About', href: '/about' }
  ],
  '/case-studies/computis-crypto-tax-engine': [
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Computis Crypto Tax Engine', href: '/case-studies/computis-crypto-tax-engine' }
  ],
  '/case-studies/ezemrx-redesigning-ehr': [
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'ezEMRx EHR Redesign', href: '/case-studies/ezemrx-redesigning-ehr' }
  ],
  '/case-studies/medico-hospital-management-system': [
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Medico Hospital System', href: '/case-studies/medico-hospital-management-system' }
  ],
  '/case-studies/moneyfarm-ai-powered-personal-finance': [
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'MoneyFarm AI Finance', href: '/case-studies/moneyfarm-ai-powered-personal-finance' }
  ]
};

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = breadcrumbMap[location.pathname] || [];

  if (breadcrumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-[#9FA0A3] mb-6 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <Link 
        to="/" 
        className="flex items-center hover:text-[#131417] transition-colors duration-300"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {breadcrumbs.map((page, index) => (
        <React.Fragment key={page.href}>
          <ChevronRight className="w-4 h-4 text-[#9FA0A3]" />
          {index === breadcrumbs.length - 1 ? (
            <span className="text-[#131417] font-medium" aria-current="page">
              {page.title}
            </span>
          ) : (
            <Link 
              to={page.href}
              className="hover:text-[#131417] transition-colors duration-300"
            >
              {page.title}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}