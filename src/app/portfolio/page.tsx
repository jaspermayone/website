import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { projects } from "@/lib/defs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { HiPaperClip } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

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
            name: "Portfolio",
            item: "https://www.jaspermayone.com/portfolio",
          },
        ],
      },
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
      <div className="min-h-screen flex flex-col">
        <MENU pageFirstWord="Portfolio" />
        <main className="m-5 flex-1">
          <div className="mb-8">
            <p className="text-gray-700 dark:text-white/70 mb-3">
              A collection of projects I've worked on, ranging from web
              applications to creative tools and experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {project.image && (
                  <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
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
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
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
                          <HiPaperClip className="w-5 h-5" />
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
                          <SiGithub className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-white/70 text-sm mb-4">
                    {project.description}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
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
