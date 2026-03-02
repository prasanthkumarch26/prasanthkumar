"use client";

import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Card from "./card";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string;
  image: string;
  githubLink: string;
  liveLink: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/projects.json");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6"
      id="projects"
    >
      <div className="flex items-center pt-16 sm:pt-20 w-full max-w-screen-sm">
        <div className="flex-grow border-t border-red-500"></div>
        <h1 className="mx-4 text-2xl sm:text-4xl text-[#ccd6f6] font-bold">
          Projects
        </h1>
        <div className="flex-grow border-t border-red-500"></div>
      </div>

      {/* Carousel only on desktop */}
      <div className="w-full max-w-screen-lg mt-8 hidden lg:flex">
        <Carousel
          projects={projects.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            techstack: p.techStack,
            image: p.image,
            githubLink: p.githubLink,
            liveLink: p.liveLink,
          }))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
