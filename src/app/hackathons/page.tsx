import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { hackathons } from "@/lib/defs";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { safeJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Hackathons",
  description:
    "A chronological list of hackathons attended, worked, and organized by Jasper Mayone.",
  alternates: {
    canonical: "https://jaspermayone.com/hackathons",
  },
};

const hackathonsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/hackathons#webpage",
      url: "https://jaspermayone.com/hackathons",
      name: "Hackathons - Jasper Mayone",
      description:
        "A chronological list of hackathons attended, worked, and organized by Jasper Mayone.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://jaspermayone.com/hackathons#hackathon-list",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/hackathons#breadcrumb",
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
            name: "Hackathons",
            item: "https://jaspermayone.com/hackathons",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaspermayone.com/hackathons#hackathon-list",
      name: "Hackathons Attended by Jasper Mayone",
      description:
        "A chronological list of hackathons attended, worked, and organized by Jasper Mayone",
      numberOfItems: hackathons.length,
      itemListElement: hackathons.map((hackathon, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Event",
          name: hackathon.name,
          ...(hackathon.host && {
            organizer: {
              "@type": "Organization",
              name: hackathon.host,
            },
          }),
          ...(hackathon.date && { startDate: hackathon.date }),
          ...(hackathon.endDate && { endDate: hackathon.endDate }),
          ...(hackathon.location && {
            location: {
              "@type": "Place",
              name: hackathon.location,
            },
          }),
          ...(hackathon.url && { url: hackathon.url }),
        },
      })),
    },
  ],
};

export default function Hackathons() {
  // Group hackathons by year, sorted newest first
  const byYear = hackathons
    .toSorted((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .reduce<{ year: number; items: typeof hackathons }[]>(
      (groups, hackathon) => {
        const year = hackathon.date
          ? parseInt(hackathon.date.slice(0, 4), 10)
          : 0;
        const group = groups.find((g) => g.year === year);
        if (group) {
          group.items.push(hackathon);
        } else {
          groups.push({ year, items: [hackathon] });
        }
        return groups;
      },
      []
    );

  return (
    <>
      <Script
        id="hackathons-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(hackathonsPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Hackathons" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-4 text-xl font-semibold text-zinc-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Hackathons
            </h1>

            <p className="mb-6 text-zinc-600 dark:text-white/70">
              A running list of hackathons I&apos;ve attended, worked, or helped
              organize over the years.
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
                    {yearGroup.items.map((hackathon) => (
                      <li
                        key={`${yearGroup.year}-${hackathon.name}-${hackathon.date ?? ""}`}
                        className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-600"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900 dark:text-white">
                              {hackathon.name}
                            </div>
                            {(hackathon.note || hackathon.role) && (
                              <div
                                className="text-sm text-zinc-600 dark:text-zinc-400"
                                style={{ fontFamily: "var(--font-balgin)" }}
                              >
                                {hackathon.note ?? hackathon.role}
                              </div>
                            )}
                            {hackathon.host && (
                              <div
                                className="text-sm text-zinc-600 dark:text-zinc-400"
                                style={{ fontFamily: "var(--font-balgin)" }}
                              >
                                {hackathon.host}
                              </div>
                            )}
                            {hackathon.location && (
                              <div className="text-xs text-zinc-500 dark:text-zinc-500">
                                {hackathon.location}
                                {hackathon.date && ` • ${hackathon.date}`}
                                {hackathon.endDate && ` – ${hackathon.endDate}`}
                              </div>
                            )}
                            {hackathon.url && (
                              <div
                                className="mt-1 text-xs"
                                style={{ fontFamily: "var(--font-balgin)" }}
                              >
                                <Link
                                  href={hackathon.url}
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
