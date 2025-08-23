"use client";

import Carousel from "./Carousel";
import Card from "./card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title:
        "SLAM-enabled Autonomous Mobile Robot System with vision integrated",
      description:
        "A mobile robot system created as a major project at IIEST Shibpur, utilizing OpenCV, A* algorithm, and Python to enable the robot to navigate complex environments and make informed decisions in real-time.",
      techStack: "Python, Open CV, A* algorthm, Raspberry pi",
      image: "/slam.png",
      githubLink:
        "https://github.com/prasanthkumarch26/SLAM-enabled-Autonomous-Mobile-Robot-System",
      liveLink:
        "https://drive.google.com/file/d/1FDlniOoypnIu1xfcej0JkzB4T7ukxrxd/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Audex - Audio Transcription Telegram Bot",
      description:
        "Designed and developed a Telegram bot that transcribes voice messages into text, providing a discreet and accessible way for users to consume audio content—ideal for use in public or noisy environments. Built using the Telegram Bot API (telebot), speech_recognition for transcription, and pyttsx3 for optional text-to-speech output. Notably, a similar feature was later introduced by Meta in WhatsApp, reflecting growing demand and validating the real-world relevance of the solution.",
      techStack: "Python, Telegram Bot API(telebot), NLP",
      image: "/audex.png",
      githubLink: "https://github.com/project-1",
      liveLink: "",
    },
    {
      id: 3,
      title: "Friday - Command-Line Voice Assistant",
      description:
        "An AI chatbot integrated with a hospital's system to provide instant medical assistance.",
      techStack: "React, Node.js, TensorFlow",
      image: "",
      githubLink: "https://github.com/project-2",
      liveLink: "",
    },
    {
      id: 4,
      title: "Prasanth Kumar - Portfolio Website",
      description:
        "The current portfolio you are viewing. A minimalist portfolio designed with a focus on responsive user experience, developed from scratch using Next.js and TailwindCSS.",
      techStack: "Next.js, React, TailwindCSS, Lucide Icons",
      image: "/portfolio.png",
      githubLink: "https://github.com/prasanthkumarch26/prasanthkumar",
      liveLink: "https://prasanthkumar.vercel.app/",
    },
    // {
    //   id: 6,
    //   title: "Blockchain-based Voting System",
    //   description:
    //     "A secure and transparent voting platform leveraging blockchain technology.",
    //   techStack: "Solidity, Ethereum, React",
    //   image: "",
    //   githubLink: "https://github.com/project-3",
    //   liveLink: "",
    // },
  ];

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
          projects={projects.slice(0, 4).map((p) => ({
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

      {/* Cards on desktop only for the remaining */}
      <div className="hidden lg:flex flex-wrap gap-4 justify-center p-4 sm:p-6 max-w-screen-xl">
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

      {/* All cards on mobile */}
      <div className="flex lg:hidden flex-wrap gap-4 justify-center p-4 sm:p-6">
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
