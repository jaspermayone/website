import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { appearances } from "@/lib/defs";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Elsewhere",
  description:
    "A list of Jasper Mayone's writings, contributions, and appearances on sites other than this one.",
  alternates: {
    canonical: "https://www.jaspermayone.com/elsewhere",
  },
};

const elsewherePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/elsewhere#webpage",
      url: "https://www.jaspermayone.com/elsewhere",
      name: "Elsewhere - Jasper Mayone",
      description:
        "A list of Jasper Mayone's writings, contributions, and appearances on sites other than this one.",
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
            name: "Elsewhere",
            item: "https://www.jaspermayone.com/elsewhere",
          },
        ],
      },
    },
  ],
};

export default function Elsewhere() {
  // Sort appearances by date (most recent first)
  const sortedAppearances = [...appearances].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
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
      <div className="min-h-screen flex flex-col">
        <MENU pageFirstWord="Elsewhere" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              /elsewhere or /appearances
            </h1>
            <p className="text-gray-600 dark:text-white/70 mb-6 italic">
              a list of output or writings on sites other than one's own
            </p>

            {sortedAppearances.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No appearances yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedAppearances.map((appearance, index) => (
                  <Link
                    key={index}
                    href={`${appearance.url}?utm_source=jaspermayone.com&utm_medium=referral`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-1">
                          <h2 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {appearance.title}
                          </h2>
                          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 mt-0.5" />
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span className="font-medium">
                            {appearance.platform}
                          </span>
                          {appearance.type && (
                            <>
                              <span>•</span>
                              <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700">
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
                              },
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
                  </Link>
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
