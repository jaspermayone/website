import { projects } from "@/lib/defs";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";
import SquigglyLine from "@/components/SquigglyLine";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of my projects and accomplishments.",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Portfolio" />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-5 my-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Projects
          </h1>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row overflow-hidden rounded-xl bg-white/50 dark:bg-gray-800/20 shadow-sm"
              >
                <div className="md:w-72 relative h-48 md:h-auto flex-shrink-0">
                  <Image
                    priority={index < 2}
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h2>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        styles.lnk +
                        " inline-flex items-center gap-1.5 text-sm ml-4"
                      }
                    >
                      <GitHubLogoIcon className="w-4 h-4" />
                      <span className="hidden sm:inline">View on GitHub</span>
                      <span className="sm:hidden">Repo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-white/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-2.5" />
        <SquigglyLine
          frequency={50}
          amplitude={0.4}
          className="min-w-screen"
          color="#4299e1"
        />
      </main>
      <FOOTER />
    </div>
  );
}
