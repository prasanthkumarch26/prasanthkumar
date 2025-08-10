import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";


const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-between items-center p-4 w-full max-w-[1250px] mx-auto bg-[#0e0e0e] text-[#ccd6f6] font-bold font-ntr">
      <div className="flex flex-row justify-end gap-4 items-center">
        <a href="#" className="text-l md:text-xl mx-5">Prasanth Kumar</a>
        <a href="#intro" className="hover:text-red-500 hidden md:flex">Home</a>
        <a href="#about" className="hover:text-red-500 hidden md:flex">About</a>
        <a href="#projects" className="hover:text-red-500 hidden md:flex">Projects</a>
        <a href="#exp" className="hover:text-red-500 hidden md:flex">Experience</a>
      </div>
      <div className="flex flex-row gap-4 mx-5 md:mx-5">
        <a href="mailto:ch.prasanth2003@gmail.com" className="hover:text-red-500" target="_blank"><Mail  size={20}/></a>
        <a href="https://github.com/prasanthkumarch26" className="hover:text-red-500" target="_blank"><Github size={20} /></a>
        <a href="https://linkedin.com/in/prasanthkumarch" className="hover:text-red-500" target="_blank"><Linkedin size={20}/></a>
      </div>
    </div>
  );
};

export default Navbar;
// bg-[#0a192f] text-[#ccd6f6]
// hover:text-[#64ffda] 