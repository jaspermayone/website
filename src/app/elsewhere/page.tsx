import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { appearances } from "@/lib/defs";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import ExternalLink from "@/components/ExternalLink";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Elsewhere",
  description:
    "A list of Jasper Mayone's writings, contributions, and appearances on sites other than this one.",
  alternates: {
    canonical: "https://jaspermayone.com/elsewhere",
  },
};

const elsewherePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/elsewhere#webpage",
      url: "https://jaspermayone.com/elsewhere",
      name: "Elsewhere - Jasper Mayone",
      description:
        "A list of Jasper Mayone's writings, contributions, and appearances on sites other than this one.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://jaspermayone.com/elsewhere#appearances",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/elsewhere#breadcrumb",
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
            name: "Elsewhere",
            item: "https://jaspermayone.com/elsewhere",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaspermayone.com/elsewhere#appearances",
      name: "Appearances and Writings by Jasper Mayone",
      description:
        "Writings, contributions, and appearances on sites other than jaspermayone.com",
      numberOfItems: appearances.length,
      itemListElement: appearances.map((appearance, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": appearance.type === "theater" ? "TheaterEvent" : "Article",
          name: appearance.title,
          url: appearance.url,
          datePublished: appearance.date,
          publisher: {
            "@type": "Organization",
            name: appearance.platform,
          },
          ...(appearance.description && {
            description: appearance.description,
          }),
          ...(appearance.role && {
            contributor: {
              "@type": "Person",
              name: "Jasper Mayone",
              "@id": "https://jaspermayone.com/#person",
            },
          }),
        },
      })),
    },
  ],
};

export default function Elsewhere() {
  // Sort appearances by date (most recent first)
  const sortedAppearances = [...appearances].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Script
        id="elsewhere-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(elsewherePageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Elsewhere" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-2 text-xl font-bold text-gray-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              My appearances elsewhere.
            </h1>
            <p className="mb-6 text-gray-600 italic dark:text-white/70">
              a list of output or writings on sites other than one&apos;s own
            </p>

            {sortedAppearances.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No appearances yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedAppearances.map((appearance, index) => (
                  <ExternalLink
                    key={index}
                    href={appearance.url}
                    className="group block rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-start gap-2">
                          <h2
                            className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
                            style={{ fontFamily: "var(--font-balgin)" }}
                          >
                            {appearance.title}
                          </h2>
                          <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </div>

                        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">
                            {appearance.platform}
                          </span>
                          {appearance.type && (
                            <>
                              <span>•</span>
                              <span
                                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-700"
                                style={{ fontFamily: "var(--font-balgin)" }}
                              >
                                {appearance.type}
                              </span>
                            </>
                          )}
                          {appearance.role && (
                            <>
                              <span>•</span>
                              <span>{appearance.role}</span>
                            </>
                          )}
                          <span>•</span>
                          <time
                            dateTime={appearance.date}
                            className="text-gray-500 dark:text-gray-500"
                          >
                            {new Date(appearance.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </time>
                        </div>

                        {appearance.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {appearance.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </ExternalLink>
                ))}
              </div>
            )}
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
