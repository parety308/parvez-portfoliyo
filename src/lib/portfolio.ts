import rawData from "@/data/portfolioData.json";
import type { PortfolioData, Project } from "@/types/portfolio";

const data = rawData as PortfolioData;

export const personalInfo = data.personalInfo;
export const aboutContent = data.aboutContent;
export const skills = data.skills;
export const education = data.education;
export const projects = data.projects;

/** True when a value is empty or still a "[placeholder]" string from the JSON. */
export function isPlaceholder(value?: string): boolean {
  return !value || value.trim().startsWith("[");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

export default data;
