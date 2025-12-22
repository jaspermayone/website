import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Metadata } from "next";
import Script from "next/script";
import { maintainedProjects, contributions, hostedServices } from "@/lib/defs";
import { OpenSourceContent } from "./OpenSourceContent";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Jasper Mayone's open source contributions, maintained projects, and hosted services.",
  keywords: [
    "open source",
    "github",
    "contributions",
    "projects",
    "jasper mayone",
    "foss",
  ],
  alternates: {
    canonical: "https://www.jaspermayone.com/open-source",
  },
};

const openSourceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/open-source#webpage",
      url: "https://www.jaspermayone.com/open-source",
      name: "Open Source - Jasper Mayone",
      description:
        "Jasper Mayone's open source contributions, maintained projects, and hosted services.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://www.jaspermayone.com/open-source#projects",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
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
            name: "Open Source",
            item: "https://www.jaspermayone.com/open-source",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaspermayone.com/open-source#projects",
      name: "Open Source Projects",
      numberOfItems: maintainedProjects.length,
      itemListElement: maintainedProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.name,
          description: project.description,
          codeRepository: `https://github.com/${project.repo}`,
        },
      })),
    },
  ],
};

export default function OpenSourcePage() {
  return (
    <>
      <Script
        id="open-source-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openSourceSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Open Source" />
        <main className="flex-1">
          <OpenSourceContent
            projects={maintainedProjects}
            contributions={contributions}
            services={hostedServices}
          />
        </main>
        <FOOTER />
      </div>
    </>
  );
}
