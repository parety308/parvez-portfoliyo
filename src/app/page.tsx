import Hero from "@/components/sections/Hero";
import { hasResume } from "@/lib/resume";

export default function Home() {
  return <Hero resumeAvailable={hasResume()} />;
}
