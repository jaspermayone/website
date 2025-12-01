import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { projects } from "@/lib/defs";
import { GithubLogoIcon, PaperclipIcon } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A collection of projects and work by Jasper Mayone - web applications, tools, and creative endeavors.",
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "jasper mayone projects",
    "coding portfolio",
  ],
  alternates: {
    canonical: "https://www.jaspermayone.com/portfolio",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/portfolio#webpage",
      url: "https://www.jaspermayone.com/portfolio",
      name: "Portfolio - Jasper Mayone",
      description:
        "A collection of projects and work by Jasper Mayone - web applications, tools, and creative endeavors.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://www.jaspermayone.com/portfolio#projects",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://www.jaspermayone.com/portfolio#breadcrumb",
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
            name: "Portfolio",
            item: "https://www.jaspermayone.com/portfolio",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaspermayone.com/portfolio#projects",
      name: "Portfolio Projects",
      description: "Software projects and creative work by Jasper Mayone",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.description,
          ...(project.link && { url: project.link }),
          ...(project.github && {
            codeRepository: `https://github.com/${project.github}`,
          }),
          ...(project.date && { dateCreated: project.date }),
          ...(project.image && {
            image: project.image.startsWith("http")
              ? project.image
              : `https://www.jaspermayone.com${project.image}`,
          }),
          ...(project.tags && { keywords: project.tags.join(", ") }),
          author: {
            "@id": "https://www.jaspermayone.com/#person",
          },
        },
      })),
    },
  ],
};

export default function Portfolio() {
  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Portfolio" />
        <main className="m-5 flex-1">
          <div className="mb-8">
            <p className="mb-3 text-gray-700 dark:text-white/70">
              A collection of projects I&apos;ve worked on, ranging from web
              applications to creative tools and experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 transition-shadow duration-200 hover:shadow-lg dark:border-gray-700"
              >
                <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAE0lEQVR42mNk+P+fgYGBgQEAAP8A/ueJdwEAAAAASUVORK5CYII="
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-gray-400 dark:text-gray-600">
                      No image provided
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <div className="flex gap-2">
                      {project.link && (
                        <Link
                          href={`${project.link}?utm_source=jaspermayone.com&utm_medium=referral&utm_campaign=portfolio`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          aria-label="Visit project"
                        >
                          <PaperclipIcon className="h-5 w-5" />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={`https://github.com/${project.github}?utm_source=jaspermayone.com&utm_medium=referral&utm_campaign=portfolio`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          aria-label="View on GitHub"
                        >
                          <GithubLogoIcon className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-600 dark:text-white/70">
                    {project.description}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          style={{ fontFamily: "var(--font-balgin)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.date && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {project.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
