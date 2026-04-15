import { useEffect } from "react";

interface CaseStudyStructuredDataProps {
  title: string;
  description: string;
  authorName: string;
  authorJobTitle: string;
  publishedDate: string;
  modifiedDate?: string;
  imageUrl: string;
  url: string;
}

export const CaseStudyStructuredData: React.FC<
  CaseStudyStructuredDataProps
> = ({
  title,
  description,
  authorName,
  authorJobTitle,
  publishedDate,
  modifiedDate,
  imageUrl,
  url,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorJobTitle,
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    image: imageUrl,
    url: url,
    publisher: {
      "@type": "Person",
      name: authorName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [structuredData]);

  return null;
};

export default CaseStudyStructuredData;
