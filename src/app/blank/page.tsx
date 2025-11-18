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
  "@type": "WebPage",
  name: "Blank Page",
  description: "A page intentionally left blank",
  url: "https://www.jaspermayone.com/blank",
};

export default function Blank() {
  return (
    <>
      <Script
        id="colophon-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blankPageSchema),
        }}
      />
    </>
  );
}
