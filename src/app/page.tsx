import { personalInfo } from "@/lib/portfolio";

export default function Home() {
  return (
    <div className="flex min-h-[150vh] flex-col items-center gap-4 px-6 pt-32 text-center">
      <h1 className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
        {personalInfo.name}
      </h1>
      <p className="text-gray-400">
        Shell test page: scroll down to check the navbar.
      </p>
    </div>
  );
}
