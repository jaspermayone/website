import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "A comprehensive look at the evolution, tools, and technologies that power this website.",
};

export default function Colophon() {
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
      description:
        "Reusable component library built with Radix UI and Tailwind",
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

  const tools = [
    { name: "Windsurf", description: "AI-powered code editor" },
    { name: "VS Code", description: "Source code editor" },
    { name: "GitHub", description: "Version control and collaboration" },
    { name: "Claude", description: "AI assistant for development" },
    { name: "Dia Browser", description: "Web development and testing" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Colophon" />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Colophon
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The tools, technologies, and people behind this website.
            </p>
          </div>

          {/* Site History Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Site History
            </h2>
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                The original site was developed by{" "}
                <Link
                  href="https://aram.sh?utm_source=jaspermayone.com&utm_medium=referral"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technology Stack
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {tech.name}
                    </h3>
                    <span className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Hosting & Deployment Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Hosting & Deployment
            </h2>
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Vercel Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                The site is hosted on{" "}
                <Link
                  href="https://vercel.com?utm_source=jaspermayone.com&utm_medium=referral"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </Link>
                , which provides seamless deployment from GitHub, automatic
                HTTPS, and global CDN distribution.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full">
                  GitHub Integration
                </span>
                <span className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full">
                  Automatic HTTPS
                </span>
                <span className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full">
                  Global CDN
                </span>
              </div>
            </div>
          </section>

          {/* Development Tools Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Development Tools
            </h2>
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hardware Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Hardware
            </h2>
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Apple M4 Pro MacBook Pro
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Primary development machine for coding, design, and testing
              </p>
            </div>
          </section>
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
