"use client";

import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Grid India (ERLDC)",
    position: "Summer Internship",
    duration: "June 2024 - July 2024",
    responsibilities: [
      "Developed and maintained React applications with TypeScript",
      "Implemented responsive designs using Tailwind CSS",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: 2,
    company: "IIEST Shibpur",
    position: "Arduino Based Projects",
    duration: "2022 - 2023",
    responsibilities: [
      "Object Counter: Developed accurate object detection and counting system using IR sensor with Arduino",
      "Power Factor Correction: Designed and implemented Arduino-based solution for automatic power factor correction.",
      "Team Leadership: Led team of 6 to multiple project completions, fostering collaboration and problem-solving skills.",
      "Mentorship: Guided team members to ensure timely completion and high-quality outcomes.",
      "Technical Expertise: Built innovative hardware-software solutions.",
      "Academic Excellence: Achieved A+ grade in both semesters for Arduino-based projects.",
    ],
  },
];

const RelExperience = () => {
  const [selectedId, setSelectedId] = useState(1);
  const selectedExperience = experiences.find((exp) => exp.id === selectedId);

  return (
    <div className="text-[#8892b0] exp-container" id="exp">
      <div className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6">
        <div className="flex items-center pt-16 sm:pt-20 w-full max-w-screen-sm">
          <div className="flex-grow border-t border-red-500" />
          <h1 className="mx-4 text-2xl sm:text-4xl text-[#ccd6f6] font-bold">
            Relevant Experience
          </h1>
          <div className="flex-grow border-t border-red-500" />
        </div>

        <div className="border-b-2 flex gap-8 text-[#8892b0] border-[#ccd6f6] py-4 px-10 rounded-xl mt-4">
          {experiences.map(({ id, company }) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={`cursor-pointer ${
                selectedId === id ? "text-red-500" : "hover:text-red-500"
              }`}
            >
              {company}
            </button>
          ))}
        </div>

        {selectedExperience && (
          <div className="pt-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl text-[#ccd6f6]">
                {selectedExperience.position}{" "}
                <span className="text-red-500">
                  @{selectedExperience.company}
                </span>
              </h1>
              <h2 className="text-xl">{selectedExperience.duration}</h2>
              <ul className="list-disc list-inside text-xl">
                {selectedExperience.responsibilities.map((item, index) => (
                  <li key={index} className="li-triangle">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelExperience;
