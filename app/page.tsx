import About from "@/components/About";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RelExperience from "@/components/RelExperience";

export default function Home() {
  return (
    <div className="bg-[#0e0e0e] font-ntr min-h-screen flex flex-col">
      <CommandPalette />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <RelExperience />
      <Footer />
    </div>
  );
}
