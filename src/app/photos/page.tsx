import Image from "next/image";

import ExternalLink from "@/components/ExternalLink";
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { photos } from "@/lib/photos";
import { Metadata } from "next";
import Script from "next/script";
import { safeJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Photos",
  description: "A gallery of photos taken by Jasper Mayone.",
  alternates: {
    canonical: "https://jaspermayone.com/photos",
  },
};

const photosPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/photos#webpage",
      url: "https://jaspermayone.com/photos",
      name: "Photos - Jasper Mayone",
      description: "A gallery of photos taken by Jasper Mayone.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://jaspermayone.com/photos#gallery",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/photos#breadcrumb",
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
            name: "Photos",
            item: "https://jaspermayone.com/photos",
          },
        ],
      },
    },
    {
      "@type": "ImageGallery",
      "@id": "https://jaspermayone.com/photos#gallery",
      name: "Photos by Jasper Mayone",
      description: "A gallery of photos taken by Jasper Mayone",
      author: {
        "@id": "https://jaspermayone.com/#person",
      },
      image: photos.map((photo, index) => ({
        "@type": "ImageObject",
        contentUrl: `https://jaspermayone.com${photo.image.src}`,
        position: index + 1,
      })),
    },
  ],
};

export default function Photos() {
  return (
    <>
      <Script
        id="photos-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(photosPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Photos" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-4 text-xl font-semibold text-zinc-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Photos
            </h1>

            <p className="mb-6 text-zinc-600 dark:text-white/70">
              A gallery of some of the photos I&apos;ve taken over the years.
              You can find more on my Instagram{" "}
              <ExternalLink
                className="lnk"
                href="https://www.instagram.com/jasper.mayone.photography"
                aria-label="Jasper's photography Instagram"
              >
                @jasper.mayone.photography
              </ExternalLink>
              .
            </p>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.image.src}
                  className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-white/50 dark:bg-zinc-800/20"
                >
                  <Image
                    src={photo.image}
                    alt={
                      photo.exif?.camera
                        ? `A photo taken by Jasper Mayone on a ${photo.exif.camera}`
                        : `A photo taken by Jasper Mayone (${index + 1} of ${photos.length})`
                    }
                    placeholder="blur"
                    priority={index < 4}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="h-auto w-full rounded-lg"
                  />
                  {photo.exif && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {photo.exif.camera && (
                        <p className="text-xs font-medium text-white">
                          {photo.exif.camera}
                          {photo.exif.date && (
                            <span className="font-normal text-white/70">
                              {" "}
                              · {photo.exif.date}
                            </span>
                          )}
                        </p>
                      )}
                      {(photo.exif.focalLength ||
                        photo.exif.aperture ||
                        photo.exif.shutter ||
                        photo.exif.iso) && (
                        <p className="text-xs text-white/70">
                          {[
                            photo.exif.focalLength,
                            photo.exif.aperture,
                            photo.exif.shutter,
                            photo.exif.iso,
                          ]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                    </div>
                  )}
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
