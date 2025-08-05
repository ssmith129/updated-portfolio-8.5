import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  tags: string[];
}

const allCaseStudies: CaseStudy[] = [
  {
    title: 'Computis',
    subtitle: 'Crypto Tax Engine',
    href: '/case-studies/computis-crypto-tax-engine',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900',
    tags: ['Fintech', 'B2B SaaS', 'Complex Data']
  },
  {
    title: 'ezEMRx',
    subtitle: 'EHR for Public Health',
    href: '/case-studies/ezemrx-redesigning-ehr',
    image: '/ipad.png',
    tags: ['Healthcare', 'Enterprise', 'Mobile']
  },
  {
    title: 'Medico',
    subtitle: 'Hospital Management System',
    href: '/case-studies/medico-hospital-management-system',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Healthcare', 'Enterprise', 'Workflow']
  },
  {
    title: 'MoneyFarm',
    subtitle: 'AI-Powered Personal Finance',
    href: '/case-studies/moneyfarm-ai-powered-personal-finance',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Fintech', 'AI/ML', 'Consumer']
  }
];

interface RelatedCaseStudiesProps {
  currentHref: string;
  maxItems?: number;
  title?: string;
}

export default function RelatedCaseStudies({ 
  currentHref, 
  maxItems = 2, 
  title = "Related Case Studies" 
}: RelatedCaseStudiesProps) {
  const currentStudy = allCaseStudies.find(study => study.href === currentHref);
  const currentTags = currentStudy?.tags || [];
  
  // Filter and sort by relevance (shared tags)
  const relatedStudies = allCaseStudies
    .filter(study => study.href !== currentHref)
    .map(study => ({
      ...study,
      relevance: study.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxItems);

  if (relatedStudies.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-20 md:mt-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px]">
          {title}
        </h3>
        <Link 
          to="/case-studies"
          className="flex items-center gap-2 text-sm sm:text-base text-[#9FA0A3] hover:text-[#131417] transition-all duration-300 group"
          rel="nofollow"
        >
          View All
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {relatedStudies.map((study, index) => (
          <Link
            key={study.href}
            to={study.href}
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={study.image}
                alt={`${study.title} - ${study.subtitle}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <h4 className="text-lg sm:text-xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-1">
                  {study.title}
                </h4>
                <p className="text-sm sm:text-base font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] mb-2">
                  {study.subtitle}
                </p>
                <div className="flex flex-wrap gap-1">
                  {study.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}