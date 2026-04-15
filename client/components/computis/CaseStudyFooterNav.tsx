interface CaseStudyFooterNavProps {
  currentStudy: string;
  previousStudy?: {
    slug: string;
    title: string;
    subtitle: string;
  };
  nextStudy?: {
    slug: string;
    title: string;
    subtitle: string;
  };
  linkedInUrl?: string;
  resumePath?: string;
}

export function CaseStudyFooterNav(_props: CaseStudyFooterNavProps) {
  return null;
}

export default CaseStudyFooterNav;
