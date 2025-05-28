"use client";
import AnimatedProjectsTitle from "@/components/AnimatedProjectsTitle";
import MainMenu from "@/components/MainMenu";
import SquigglyLine from "@/components/SquigglyLine";
import { MenuItemType, Project } from "@/lib/types";
import styles from "@/styles/Projects.module.css";
import { ExternalLink, Github } from "lucide-react";
// import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "A showcase of my projects and accomplishments.",
// };

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState<MenuItemType>("Portfolio");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-lite">
      {/* Fixed Header Section */}
      <header className="flex-none px-6 py-4 bg-lite">
        <div className={styles.title}>
          <AnimatedProjectsTitle />
        </div>
        <div className="-mt-8">
          <MainMenu selectedTab={selectedTab} onMenuClick={setSelectedTab} />
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
              <div>
                <div className="relative overflow-hidden aspect-video">
                  <Image
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
                    <Github className="w-4 h-4" />
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
