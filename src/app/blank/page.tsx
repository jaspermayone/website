import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blank",
  description: "A page intentionally left blank",
  alternates: {
    canonical: "https://jaspermayone.com/blank",
  },
};

const blankPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/blank#webpage",
      url: "https://jaspermayone.com/blank",
      name: "Blank Page - Jasper Mayone",
      description: "A page intentionally left blank",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/blank#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jaspermayone.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blank",
            item: "https://jaspermayone.com/blank",
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
