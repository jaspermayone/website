import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "A comprehensive look at the evolution, tools, and technologies that power this website.",
  alternates: {
    canonical: "https://www.jaspermayone.com/colophon",
  },
};

const techStack = [
  {
    name: "Next.js",
    description:
      "React framework that enables server-side rendering and static site generation",
    url: "https://nextjs.org",
    category: "framework",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces",
    url: "https://react.dev",
    category: "library",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    url: "https://tailwindcss.com",
    category: "styling",
  },
  {
    name: "shadcn/ui",
    description: "Reusable component library built with Radix UI and Tailwind",
    url: "https://ui.shadcn.com",
    category: "components",
  },
  {
    name: "Framer Motion",
    description: "Animation library for React",
    url: "https://www.framer.com/motion",
    category: "animation",
  },
  {
    name: "react-i18next",
    description: "Internationalization framework",
    url: "https://react.i18next.com",
    category: "i18n",
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript",
    url: "https://www.typescriptlang.org",
    category: "language",
  },
];

const devTools = [
  { name: "Windsurf", description: "AI-powered code editor" },
  { name: "VS Code", description: "Source code editor" },
  { name: "GitHub", description: "Version control and collaboration" },
  { name: "Claude", description: "AI assistant for development" },
  { name: "Dia Browser", description: "Web development and testing" },
];

const colophonPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/colophon#webpage",
      url: "https://www.jaspermayone.com/colophon",
      name: "Colophon - Jasper Mayone",
      description:
        "A comprehensive look at the evolution, tools, and technologies that power this website.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://www.jaspermayone.com/colophon#tech-stack",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://www.jaspermayone.com/colophon#breadcrumb",
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
            name: "Colophon",
            item: "https://www.jaspermayone.com/colophon",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaspermayone.com/colophon#tech-stack",
      name: "Website Technology Stack",
      description: "Technologies and frameworks powering jaspermayone.com",
      numberOfItems: techStack.length,
      itemListElement: techStack.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: tech.name,
          description: tech.description,
          url: tech.url,
          applicationCategory: tech.category,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaspermayone.com/colophon#dev-tools",
      name: "Development Tools",
      description: "Tools used for developing jaspermayone.com",
      numberOfItems: devTools.length,
      itemListElement: devTools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: tool.name,
          description: tool.description,
        },
      })),
    },
  ],
};

export default function Colophon() {
  return (
    <>
      <Script
        id="colophon-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(colophonPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Colophon" />
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="mb-16">
              <h1
                className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Colophon
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                The tools, technologies, and people behind this website.
              </p>
            </div>

            {/* Site History Section */}
            <section className="mb-16">
              <h2
                className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Site History
              </h2>
              <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  The original site was developed by{" "}
                  <Link
                    href="https://aram.sh?utm_source=jaspermayone.com&utm_medium=referral"
                    className="lnk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aram Shiva
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Technology Stack Section */}
            <section className="mb-16">
              <h2
                className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Technology Stack
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 p-6 transition-colors hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {tech.name}
                      </h3>
                      <span
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                        style={{ fontFamily: "var(--font-balgin)" }}
                      >
                        {tech.category}
                      </span>
                    </div>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hosting & Deployment Section */}
            <section className="mb-16">
              <h2
                className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Hosting & Deployment
              </h2>
              <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  Vercel Platform
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  The site is hosted on{" "}
                  <Link
                    href="https://vercel.com?utm_source=jaspermayone.com&utm_medium=referral"
                    className="lnk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel
                  </Link>
                  , which provides seamless deployment from GitHub, automatic
                  HTTPS, and global CDN distribution.
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  style={{ fontFamily: "var(--font-balgin)" }}
                >
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    GitHub Integration
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    Automatic HTTPS
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    Global CDN
                  </span>
                </div>
              </div>
            </section>

            {/* Development Tools Section */}
            <section className="mb-16">
              <h2
                className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Development Tools
              </h2>
              <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {devTools.map((tool, index) => (
                    <div key={index}>
                      <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Hardware Section */}
            <section className="mb-16">
              <h2
                className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-balgin)" }}
              >
                Hardware
              </h2>
              <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Apple M4 Pro MacBook Pro
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Primary development machine for coding, design, and testing
                </p>
              </div>
            </section>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
