import fs from "node:fs";
import path from "node:path";
import { projects } from "@/lib/portfolio";
import type { ProjectWithImage } from "@/types/portfolio";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

function findImage(key: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = `${key}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "projects", file))) {
      return `/projects/${file}`;
    }
  }
  return null;
}

/** Projects with the image path resolved (or null when no file exists). */
export function getProjectsWithImages(): ProjectWithImage[] {
  return projects.map((project) => ({
    ...project,
    imageSrc: findImage(project.image),
  }));
}
