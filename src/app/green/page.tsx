import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Green",
  description: "How I try to live sustainably.",
  alternates: {
    canonical: "https://www.jaspermayone.com/green",
  },
};

const greenPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/green#webpage",
      url: "https://www.jaspermayone.com/green",
      name: "Green - Jasper Mayone",
      description: "How I try to live sustainably.",
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
            name: "Green",
            item: "https://www.jaspermayone.com/green",
          },
        ],
      },
    },
  ],
};

export default function Green() {
  return (
    <>
      <Script
        id="green-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(greenPageSchema),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <MENU pageFirstWord="Green" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Living Green
            </h1>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-white/70">
                I love the environment! I'm a big fan of green energy and
                sustainability. I'm always looking for ways to reduce my carbon
                footprint and make a positive impact on the planet.
              </p>

              {/* Carbon Rating Card */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800/20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Website Carbon Rating
                  </h2>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30">
                    <span className="text-2xl font-bold text-green-700 dark:text-green-400">
                      A
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 rounded-md bg-gray-50 dark:bg-gray-700/30">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0.17g
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      CO₂ per page view
                    </div>
                  </div>

                  <div className="text-center p-3 rounded-md bg-gray-50 dark:bg-gray-700/30">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      20.7kg
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Annual CO₂ (10k views/mo)
                    </div>
                  </div>

                  <div className="text-center p-3 rounded-md bg-gray-50 dark:bg-gray-700/30">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0.47
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      kWh per year
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  This website produces minimal carbon emissions with just{" "}
                  <strong>0.17 grams of CO₂</strong> per page view. That's
                  excellent for web sustainability!
                </p>

                <Link
                  href="https://www.websitecarbon.com/website/jaspermayone-com/?utm_source=jaspermayone.com&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View full report on Website Carbon →
                </Link>
              </div>

              <p className="text-gray-600 dark:text-white/70">
                My house has solar panels and we also store that energy in
                batteries in case of a power outage.
              </p>
              <p className="text-gray-600 dark:text-white/70">
                I always love seeing cool sustainability and green projects. If
                you find one or are working on one, please let me know! My{" "}
                <Link href="/contact" className="lnk">
                  contact page
                </Link>{" "}
                has all the ways I can be reached.
              </p>
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
