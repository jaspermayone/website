"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "@/styles/Projects.module.css";
import MainMenu from "@/components/MainMenu";
import SquigglyLine from "@/components/SquigglyLine";
import AnimatedProjectsTitle from "@/components/AnimatedProjectsTitle";
import { MenuItemType, Project } from "@/lib/types";

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
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Fixed Header Section */}
      <header className="flex-none px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100">
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
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
