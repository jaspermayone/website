import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import styles from "@/styles/Home.module.css";
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
              <p className="text-gray-600 dark:text-white/70">
                My house has solar panels and we also store that energy in
                batteries in case of a power outage.
              </p>
              <p className="text-gray-600 dark:text-white/70">
                I always love seeing cool sustainability and green projects. If
                you find one or are working on one, please let me know! My{" "}
                <Link href="/contact" className={styles.lnk}>
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
