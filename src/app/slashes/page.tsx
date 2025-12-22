import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { slashPages } from "@/lib/defs";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import Script from "next/script";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "Slashes",
  description:
    "A directory of all slash pages on jaspermayone.com - top-level URLs that may be of interest.",
  keywords: [
    "slash pages",
    "site directory",
    "jasper mayone",
    "personal website",
    "slashpages",
  ],
  alternates: {
    canonical: "https://jaspermayone.com/slashes",
  },
};

const slashesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/slashes#webpage",
      url: "https://jaspermayone.com/slashes",
      name: "Slashes - Jasper Mayone",
      description:
        "A directory of all slash pages on jaspermayone.com - top-level URLs that may be of interest.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
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
            name: "Slashes",
            item: "https://jaspermayone.com/slashes",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaspermayone.com/slashes#list",
      name: "Slash Pages Directory",
      description: "Top-level URL pages on jaspermayone.com",
      numberOfItems: slashPages.length,
      itemListElement: slashPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: page.name,
          description: page.description,
          url: `https://jaspermayone.com/${page.slug}`,
        },
      })),
    },
  ],
};

export default function Slashes() {
  // JSON-LD schema content - static data from defs.ts, safe for injection
  const schemaContent = JSON.stringify(slashesPageSchema);

  return (
    <>
      <Script
        id="slashes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaContent,
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Slashes" />
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="mb-12">
              <h1
                className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Slash Pages
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                These are pages on my website, found at a top-level URL, which
                may be of interest. Inspired by{" "}
                <ExternalLink href="https://slashpages.net/" className="lnk">
                  slashpages.net
                </ExternalLink>
                .
              </p>
            </div>

            <div className="grid gap-4">
              {slashPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="mb-1 text-lg font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200">
                        <span
                          className="text-gray-400 dark:text-gray-500"
                          style={{ fontFamily: "var(--font-balgin)" }}
                        >
                          /
                        </span>
                        {page.slug}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {page.description}
                      </p>
                    </div>
                    <span className="text-gray-400 transition-transform group-hover:translate-x-1 dark:text-gray-500">
                      &rarr;
                    </span>
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
