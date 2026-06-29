import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-[#8892b0]" id="about">
      <div className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6">
        <div className="flex items-center pt-16 sm:pt-20 w-full max-w-screen-sm">
          <div className="flex-grow border-t border-red-500"></div>
          <h1 className="mx-4 text-2xl sm:text-4xl text-[#ccd6f6] font-bold">
            About me
          </h1>
          <div className="flex-grow border-t border-red-500"></div>
        </div>
        <div className="w-full max-w-screen-lg flex-col p-6 text-xl flex md:flex-row items-center gap-[40px]">
          <div className="items-center">
            <p>
              I&apos;m a software engineer passionate about understanding how{" "}
              <span className="text-red-500 font-bold">complex systems</span>{" "}
              work and turning ideas into practical software.
            </p>

            <p className="mt-4">
              My work taken me across{" "}
              <span className="text-red-500 font-bold">
                distributed systems, information retrieval, real-time
                applications, machine learning, robotics, and scientific
                computing
              </span>
              . I enjoy learning new concepts, understanding them deeply, and
              building reliable systems around them.
            </p>

            <div className="mt-6">
              <p>Some technologies and areas I frequently work with:</p>

              <div className="flex flex-wrap gap-6">
                <ul className="flex flex-col">
                  <li className="li-triangle">Python</li>
                  <li className="li-triangle">C/C++</li>
                  <li className="li-triangle">TypeScript</li>
                </ul>

                <ul className="flex flex-col">
                  <li className="li-triangle">Distributed Systems</li>
                  <li className="li-triangle">Information Retrieval</li>
                  <li className="li-triangle">Real-Time Applications</li>
                </ul>

                <ul className="flex flex-col">
                  <li className="li-triangle">PostgreSQL</li>
                  <li className="li-triangle">Redis</li>
                  <li className="li-triangle">FastAPI</li>
                </ul>
              </div>
            </div>

            <p className="mt-6">
              Outside of software, I enjoy exploring{" "}
              <span className="text-red-500 font-bold">
                science, engineering, and technology
              </span>
              , learning about hardware systems, designing circuits, following
              new developments in consumer tech, and occasionally going down
              rabbit holes just to understand how things work. I also enjoy
              anime, Formula 1, chess, music, and learning animation.
            </p>
          </div>
          <div className="p-4 hidden md:flex items-center">
            <Image
              src="/prasanthkumar.jpg"
              alt="Prasanth Kumar"
              width={2000}
              height={2000}
              className="rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-gray-500 shadow-lg box-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
