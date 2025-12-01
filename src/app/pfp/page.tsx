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

const profilePhotos = [
  { src: "/images/profiles/jm.webp", name: "Current Profile Photo" },
  { src: "/images/profiles/jmdark-min.webp", name: "Dark Theme Profile" },
  { src: "/images/profiles/jmlite-min.webp", name: "Light Theme Profile" },
  { src: "/images/profiles/circus.webp", name: "Circus Profile" },
  { src: "/images/profiles/waves.webp", name: "Waves Profile" },
];

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
      mainEntity: {
        "@id": "https://www.jaspermayone.com/pfp#gallery",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://www.jaspermayone.com/pfp#breadcrumb",
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
    {
      "@type": "ImageGallery",
      "@id": "https://www.jaspermayone.com/pfp#gallery",
      name: "Jasper Mayone Profile Photos",
      description:
        "A collection of profile photos used by Jasper Mayone over the years",
      author: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      image: profilePhotos.map((photo, index) => ({
        "@type": "ImageObject",
        name: photo.name,
        contentUrl: `https://www.jaspermayone.com${photo.src}`,
        position: index + 1,
      })),
    },
  ],
};

export default function PFP() {
  const paths = [jm, dark, lite, circus, waves];

  return (
    <>
      <Script
        id="pfp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pfpPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="PFPs" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-4 text-xl font-bold text-gray-800 underline dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Profile Photos
            </h1>

            <p className="mb-5 text-gray-600 dark:text-white/70">
              Here&apos;s all the profile photos I&apos;ve used over the years
            </p>

            <div className="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6">
              {paths.map((path, index) => (
                <div
                  key={index}
                  className="aspect-square h-50 w-50 overflow-hidden rounded-[10%] bg-white/50 p-1 dark:bg-gray-800/20"
                >
                  <Image
                    src={path}
                    alt="one of jasper's previous profile photos"
                    width={200}
                    height={200}
                    aria-label="one of jasper's previous profile photos"
                    placeholder="blur"
                    priority={true}
                    className="h-full w-full rounded-[8%] object-cover object-center"
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
