import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blank",
  description: "A page intentionally left blank",
  alternates: {
    canonical: "https://www.jaspermayone.com/blank",
  },
};

const blankPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/blank#webpage",
      url: "https://www.jaspermayone.com/blank",
      name: "Blank Page - Jasper Mayone",
      description: "A page intentionally left blank",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://www.jaspermayone.com/blank#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.jaspermayone.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blank",
            item: "https://www.jaspermayone.com/blank",
          },
        ],
      },
    },
  ],
};

export default function Blank() {
  return (
    <>
      <Script
        id="blank-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blankPageSchema),
        }}
      />
    </>
  );
}
