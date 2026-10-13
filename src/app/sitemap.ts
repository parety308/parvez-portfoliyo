import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) return []; // sitemap URLs must be absolute

  return [
    { url: site },
    ...projects.map((project) => ({ url: `${site}/projects/${project.id}` })),
  ];
}
