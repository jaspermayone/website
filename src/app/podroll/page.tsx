import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { podcasts } from "@/lib/defs";
import { HeadphonesIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Podroll",
  description: "Podcasts I recommend.",
  alternates: {
    canonical: "https://www.jaspermayone.com/podroll",
  },
};

const podrollPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/podroll#webpage",
      url: "https://www.jaspermayone.com/podroll",
      name: "Podroll - Jasper Mayone",
      description: "Podcasts I recommend.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://www.jaspermayone.com/podroll#podcast-list",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://www.jaspermayone.com/podroll#breadcrumb",
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
            name: "Podroll",
            item: "https://www.jaspermayone.com/podroll",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaspermayone.com/podroll#podcast-list",
      name: "Recommended Podcasts",
      description: "Podcasts recommended by Jasper Mayone",
      numberOfItems: podcasts.length,
      itemListElement: podcasts.map((podcast, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "PodcastSeries",
          name: podcast.name,
          description: podcast.description,
          url: podcast.url,
        },
      })),
    },
  ],
};

export default function Podroll() {
  return (
    <>
      <Script
        id="podroll-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(podrollPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Podcasts" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-2 text-xl font-bold text-gray-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Recommended Podcasts
            </h1>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {podcasts.map((podcast, index) => (
                <Link
                  key={index}
                  href={`${podcast.url}?utm_source=jaspermayone.com&utm_medium=referral`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex rounded-lg bg-white/50 p-3 transition-colors hover:bg-blue-50 dark:bg-gray-800/20 dark:hover:bg-blue-900/20"
                >
                  <div className="mr-3 shrink-0 text-blue-500">
                    <HeadphonesIcon size={20} />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {podcast.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-600 dark:text-white/70">
                      {podcast.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
