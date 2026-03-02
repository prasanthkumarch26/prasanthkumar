import { Mail } from "lucide-react";
import React from "react";
import Desktop from "./animations/Desktop";

const Intro = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center text-[#ccd6f6] h-[900px] font-ntr pt-20"
      id="intro"
    >
      <div className="pb-10">
        <Desktop />
      </div>
      <h1 className="text-4xl md:text-8xl">
        hi, i am <span className="text-red-500 font-bold">prasanth</span>
      </h1>
      <h2 className="text-2xl md:text-6xl text-[#8892b0]">
        {/* I create stuff sometimes. */}Sometimes I like to build stuff.
      </h2>
      <p className="text-lg md:text-2xl text-[#8892b0] max-w-screen-sm p-4 mb-10">
        I&apos;m an aspiring software engineer passionate about science and technology,
        driven to design and build impactful applications that solve real-world
        problems. I focus on creating practical, user-centered software products
        that turn innovative ideas into meaningful solutions.
      </p>
      <a
        className="border-2 px-6 py-4 rounded-lg flex flex-row gap-2 text-2xl cursor-pointer items-center transition-transform duration-300 hover:-translate-y-2 hover:bg-[#151515]"
        href="mailto:ch.prasanth2003@gmail.com"
      >
        <Mail className="text-red-500" /> Say hi!
      </a>
    </div>
  );
};

export default Intro;
{
  /* <span className="text-red-500 animate-ping">|</span> */
}
