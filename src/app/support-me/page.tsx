import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Coffee, Heart } from "lucide-react";
import { Link } from "next-view-transitions";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Support Me",
  description:
    "Ways to support my work - open source projects, writing, and creative endeavors.",
  keywords: ["support", "donate", "buy me a coffee", "jasper mayone support"],
  alternates: {
    canonical: "https://jaspermayone.com/support-me",
  },
};

const supportPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/support-me#webpage",
      url: "https://jaspermayone.com/support-me",
      name: "Support Me - Jasper Mayone",
      description:
        "Ways to support my work - open source projects, writing, and creative endeavors.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/support-me#breadcrumb",
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
            name: "Support Me",
            item: "https://jaspermayone.com/support-me",
          },
        ],
      },
    },
  ],
};

export default function SupportMe() {
  return (
    <>
      <Script
        id="support-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(supportPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Support" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-2 text-xl font-bold text-gray-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Support My Work
            </h1>
            <p className="mb-6 text-gray-600 dark:text-white/70">
              If you&apos;ve found my open source projects, writing, or other
              work helpful, consider supporting me. It&apos;s entirely optional
              but greatly appreciated!
            </p>

            <div className="max-w-md">
              <Link
                href="/to/buy-me-a-coffee"
                className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white/50 p-5 transition-all hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/20 dark:hover:border-yellow-500 dark:hover:bg-yellow-900/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 transition-colors group-hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400">
                  <Coffee size={24} />
                </div>
                <div>
                  <div
                    className="font-semibold text-gray-800 dark:text-gray-100"
                    style={{ fontFamily: "var(--font-balgin)" }}
                  >
                    Buy Me a Coffee
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    @jaspermayone
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8 flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/30">
              <Heart
                size={18}
                className="mt-0.5 shrink-0 text-pink-500 dark:text-pink-400"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No pressure at all! Starring my repos on GitHub, sharing my
                projects, or just saying hi is also a wonderful way to show
                support.
              </p>
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
