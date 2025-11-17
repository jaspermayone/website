import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { concertsByYear } from "@/lib/defs";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Concerts",
  description:
    "A chronological list of concerts and live performances attended by Jasper Mayone.",
  alternates: {
    canonical: "https://www.jaspermayone.com/concerts",
  },
};

const concertsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/concerts#webpage",
      url: "https://www.jaspermayone.com/concerts",
      name: "Concerts - Jasper Mayone",
      description:
        "A chronological list of concerts and live performances attended by Jasper Mayone.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
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
            name: "Concerts",
            item: "https://www.jaspermayone.com/concerts",
          },
        ],
      },
    },
  ],
};

export default function Concerts() {
  // Sort years in descending order and concerts within each year by date (newest first)
  const sortedConcerts = concertsByYear
    .map((yearGroup) => ({
      ...yearGroup,
      concerts: [...yearGroup.concerts].sort((a, b) => {
        // Sort by date in descending order (newest first)
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      }),
    }))
    .sort((a, b) => b.year - a.year); // Sort years in descending order

  return (
    <>
      <Script
        id="concerts-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(concertsPageSchema),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <MENU pageFirstWord="Concerts" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Concerts I've Attended
            </h1>

            <p className="text-gray-600 dark:text-white/70 mb-6">
              A running list of live shows and concerts I've been to over the
              years.
            </p>

            <div className="space-y-8">
              {sortedConcerts.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {yearGroup.year}
                  </h2>
                  <ul className="space-y-3">
                    {yearGroup.concerts.map((concert, index) => (
                      <li
                        key={index}
                        className="pl-4 border-l-2 border-gray-300 dark:border-gray-600"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {concert.headliner}
                            </div>
                            {concert.openers && concert.openers.length > 0 && (
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                with {concert.openers.join(", ")}
                              </div>
                            )}
                            {concert.tour && (
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {concert.tour}
                              </div>
                            )}
                            {concert.venue && (
                              <div className="text-xs text-gray-500 dark:text-gray-500">
                                {concert.venue}
                                {concert.date && ` • ${concert.date}`}
                              </div>
                            )}
                            {concert.setlist && (
                              <div className="text-xs mt-1">
                                <a
                                  href={concert.setlist}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  View Setlist →
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
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
