import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { conferences } from "@/lib/defs";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { safeJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "A chronological list of conferences attended and worked by Jasper Mayone.",
  alternates: {
    canonical: "https://jaspermayone.com/conferences",
  },
};

const conferencesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/conferences#webpage",
      url: "https://jaspermayone.com/conferences",
      name: "Conferences - Jasper Mayone",
      description:
        "A chronological list of conferences attended and worked by Jasper Mayone.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://jaspermayone.com/conferences#conference-list",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/conferences#breadcrumb",
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
            name: "Conferences",
            item: "https://jaspermayone.com/conferences",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaspermayone.com/conferences#conference-list",
      name: "Conferences Attended by Jasper Mayone",
      description:
        "A chronological list of conferences attended and worked by Jasper Mayone",
      numberOfItems: conferences.length,
      itemListElement: conferences.map((conference, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Event",
          name: conference.name,
          ...(conference.organizer && {
            organizer: {
              "@type": "Organization",
              name: conference.organizer,
            },
          }),
          ...(conference.date && { startDate: conference.date }),
          ...(conference.endDate && { endDate: conference.endDate }),
          ...(conference.location && {
            location: {
              "@type": "Place",
              name: conference.location,
            },
          }),
          ...(conference.url && { url: conference.url }),
        },
      })),
    },
  ],
};

export default function Conferences() {
  // Group conferences by year, sorted newest first
  const byYear = conferences
    .toSorted((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .reduce<{ year: number; items: typeof conferences }[]>(
      (groups, conference) => {
        const year = conference.date
          ? parseInt(conference.date.slice(0, 4), 10)
          : 0;
        const group = groups.find((g) => g.year === year);
        if (group) {
          group.items.push(conference);
        } else {
          groups.push({ year, items: [conference] });
        }
        return groups;
      },
      []
    );

  return (
    <>
      <Script
        id="conferences-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(conferencesPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Conferences" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-4 text-xl font-semibold text-zinc-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Conferences I&apos;ve Attended
            </h1>

            <p className="mb-6 text-zinc-600 dark:text-white/70">
              A running list of conferences I&apos;ve attended or worked over
              the years.
            </p>

            <div className="space-y-8">
              {byYear.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <h2
                    className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white"
                    style={{ fontFamily: "var(--font-balgin)" }}
                  >
                    {yearGroup.year}
                  </h2>
                  <ul className="space-y-3">
                    {yearGroup.items.map((conference) => (
                      <li
                        key={`${yearGroup.year}-${conference.name}-${conference.date ?? ""}`}
                        className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-600"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900 dark:text-white">
                              {conference.name}
                            </div>
                            {(conference.note || conference.role) && (
                              <div
                                className="text-sm text-zinc-600 dark:text-zinc-400"
                                style={{ fontFamily: "var(--font-balgin)" }}
                              >
                                {conference.note ?? conference.role}
                              </div>
                            )}
                            {conference.location && (
                              <div className="text-xs text-zinc-500 dark:text-zinc-500">
                                {conference.location}
                                {conference.date && ` • ${conference.date}`}
                                {conference.endDate &&
                                  ` – ${conference.endDate}`}
                              </div>
                            )}
                            {conference.url && (
                              <div
                                className="mt-1 text-xs"
                                style={{ fontFamily: "var(--font-balgin)" }}
                              >
                                <Link
                                  href={conference.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  prefetch={false}
                                  className="text-blue-600 hover:underline dark:text-blue-400"
                                >
                                  Website →
                                </Link>
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
