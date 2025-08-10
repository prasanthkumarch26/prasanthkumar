// Card.tsx
"use client";

import React from "react";
import { Dock, Folder, Github } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  liveLink: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="w-full max-w-[360px] lg:w-[360px] rounded-2xl flex flex-col p-5 transition-transform duration-300 hover:-translate-y-2 bg-[#151515] text-[#ccd6f6] font-ntr">
      <div className="flex flex-row justify-between items-center py-5">
        <Folder className="text-red-500" size={32} />
        <div className="flex flex-row gap-4 items-center">
          <a
            href={githubLink}
            target="_blank"
            className="hover:text-red-500"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            className="hover:text-red-500"
            rel="noopener noreferrer"
          >
            <Dock size={20} />
          </a>
        </div>
      </div>

      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="py-5 text-[#8892b0]">{description}</p>
      <p className="py-5 text-[#8892b0]">{techStack}</p>
    </div>
  );
};

export default Card;

// #0a192f
// #c6c6c6
// #575757
// #ccd6f6
