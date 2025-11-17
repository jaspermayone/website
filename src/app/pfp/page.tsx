import Image from "next/image";

import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import circus from "@public/images/profiles/circus.webp";
import jm from "@public/images/profiles/jm.webp";
import dark from "@public/images/profiles/jmdark-min.webp";
import lite from "@public/images/profiles/jmlite-min.webp";
import waves from "@public/images/profiles/waves.webp";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PFPs",
  description: "All the profile photos I've used over the years.",
  alternates: {
    canonical: "https://www.jaspermayone.com/pfp",
  },
};

const pfpPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/pfp#webpage",
      url: "https://www.jaspermayone.com/pfp",
      name: "Profile Photos - Jasper Mayone",
      description: "All the profile photos I've used over the years.",
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
            name: "Profile Photos",
            item: "https://www.jaspermayone.com/pfp",
          },
        ],
      },
    },
  ],
};

export default function PFP() {
  let paths = [jm, dark, lite, circus, waves];

  return (
    <>
      <Script
        id="pfp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pfpPageSchema),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <MENU pageFirstWord="PFPs" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Profile Photos
            </h1>

            <p className="mb-5 text-gray-600 dark:text-white/70">
              Here's all the profile photos I've used over the years
            </p>

            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {paths.map((path, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-[10%] w-50 h-50 bg-white/50 dark:bg-gray-800/20 p-1"
                >
                  <Image
                    src={path}
                    alt="one of jasper's previous profile photos"
                    width={200}
                    height={200}
                    aria-label="one of jasper's previous profile photos"
                    placeholder="blur"
                    priority={true}
                    className="w-full h-full object-cover object-center rounded-[8%]"
                  />
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
