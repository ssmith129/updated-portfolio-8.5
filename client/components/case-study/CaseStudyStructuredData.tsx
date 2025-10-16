import React from "react";
import Head from "next/head";

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

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default CaseStudyStructuredData;
