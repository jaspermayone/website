import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { tools } from "@/lib/defs";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Tools and software I use daily for development, productivity, and creative work - from code editors to project management apps.",
  keywords: [
    "tools",
    "software",
    "development setup",
    "productivity apps",
    "jasper mayone tools",
  ],
  alternates: {
    canonical: "https://jaspermayone.com/uses",
  },
};

const usesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/uses#webpage",
      url: "https://jaspermayone.com/uses",
      name: "Uses - Jasper Mayone",
      description:
        "Tools and software I use daily for development, productivity, and creative work - from code editors to project management apps.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://jaspermayone.com/uses#tools-list",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/uses#breadcrumb",
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
            name: "Uses",
            item: "https://jaspermayone.com/uses",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaspermayone.com/uses#tools-list",
      name: "Tools and Software Used by Jasper Mayone",
      description:
        "Daily tools and software for development, productivity, and creative work",
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: tool.result,
          applicationCategory: tool.name,
        },
      })),
    },
  ],
};

export default function Uses() {
  return (
    <>
      <Script
        id="uses-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usesPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Uses" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              What I Use
            </h1>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tools.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-md bg-white/50 p-2 dark:bg-gray-800/20"
                >
                  <div className="mr-2 text-lg">{item.emoji}</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-white/70">
                      {item.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
