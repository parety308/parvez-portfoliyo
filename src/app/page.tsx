import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { hasResume } from "@/lib/resume";

export default function Home() {
  return (
    <>
      <Hero resumeAvailable={hasResume()} />
      <About />
      <Education />
      <Skills />
    </>
  );
}