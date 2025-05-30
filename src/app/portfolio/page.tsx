import AnimatedTitle from "@/components/AnimatedTitle";
import SquigglyLine from "@/components/SquigglyLine";
import { projects } from "@/lib/defs";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of my projects and accomplishments.",
};


export default function Portfolio() {

  return (
    <div className="h-screen flex flex-col bg-lite">
    <header className="flex-none px-6 py-4 bg-lite">
      <div className="flex flex-col items-center">
        <AnimatedTitle firstWord="Portfolio" />
      </div>
      <div className="py-1" />
      <SquigglyLine
        height={10}
        frequency={25}
        amplitude={1.2}
        strokeWidth={1.5}
        className="w-full"
        color="#4299e1"
      />
      <div className="py-2" />
    </header>

      {/* Scrollable Projects Section */}
      <main className="flex-1 overflow-y-auto px-6 pb-12">
        <div className="h-full overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    priority={true}
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <GitHubLogoIcon className="w-4 h-4" />
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
