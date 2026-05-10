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
                className="mb-4 text-4xl font-semibold text-zinc-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Slash Pages
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                These are pages on my website, found at a top-level URL, which
                may be of interest. Inspired by{" "}
                <ExternalLink href="https://slashpages.net/" className="lnk">
                  slashpages.net
                </ExternalLink>
                .
              </p>
            </div>

            {/* h-feed microformat for IndieWeb compatibility */}
            <div className="h-feed grid gap-4">
              <data
                className="p-name"
                value="Jasper Mayone - Slash Pages"
                hidden
              />
              <data className="p-author h-card" hidden>
                <span className="p-name">Jasper Mayone</span>
                <a className="u-url" href="https://jaspermayone.com">
                  jaspermayone.com
                </a>
              </data>
              {slashPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="h-entry group rounded-xl border border-zinc-200 p-5 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="p-name mb-1 text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
                        <span
                          className="text-zinc-400 dark:text-zinc-500"
                          style={{ fontFamily: "var(--font-balgin)" }}
                        >
                          /
                        </span>
                        {page.slug}
                      </h2>
                      <p className="p-summary text-zinc-600 dark:text-zinc-400">
                        {page.description}
                      </p>
                      <data
                        className="u-url"
                        value={`https://jaspermayone.com/${page.slug}`}
                        hidden
                      />
                    </div>
                    <span className="text-zinc-400 transition-transform group-hover:translate-x-1 dark:text-zinc-500">
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
