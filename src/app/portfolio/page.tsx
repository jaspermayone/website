"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Projects.module.css";
import MainMenu from "@/components/MainMenu";
import SquigglyLine from "@/components/SquigglyLine";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};

type MenuItemType = "Homepage" | "Resume" | "Portfolio" | "@jasperdoescircus";

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
    <>
      {/* &larr; Back */}
      <div className="min-h-screen py-1 px-4 bg-gray-50">
        <h1 className={styles.title}>Projects</h1>
        <div className="-mt-10">
          <MainMenu selectedTab={selectedTab} onMenuClick={setSelectedTab} />
        </div>
        <div className="py-1" />
        <SquigglyLine
          height={10}
          frequency={25}
          amplitude={1.2}
          strokeWidth={1.5}
          className="min-w-screen"
          color="#4299e1"
        />

        <div className="py-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-60"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
