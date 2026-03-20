export default function StructuredData({ brand }) {
  const { content } = brand;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.metaTitle,
    description: content.metaDescription,
    url: content.canonicalBase,
    dateModified: new Date().toISOString().split("T")[0],
    datePublished: "2026-01-01",
    author: {
      "@type": "Organization",
      name: brand.name,
      url: content.canonicalBase,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: content.canonicalBase,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": content.canonicalBase,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.metaTitle,
    description: content.metaDescription,
    url: content.canonicalBase,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: brand.name,
      url: content.canonicalBase,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: content.canonicalBase,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Best eSIM for Europe",
        item: content.canonicalBase,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
