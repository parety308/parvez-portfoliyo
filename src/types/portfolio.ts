export type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
  objective?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  location: string;
  avatar: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    twitter: string;
  };
};

export type AboutContent = {
  journey: string;
  focus: string;
  enjoy: string[];
  hobbies?: string[];
  learning?: string[];
};

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "tools";

export type Skills = Record<SkillCategory, string[]>;

export type Education = {
  degree: string;
  institution: string;
  year: string;
  status?: string;
  description: string;
};

export type Certification = {
  name: string;
  issuer: string;
  url: string;
};

export type SpokenLanguage = {
  name: string;
  level: string;
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  shortDescription: string;
  overview: string;
  techStack: string[];
  liveLink: string;
  liveApiLink?: string;
  githubLink: string;
  backendGithubLink?: string;
  challenges: string[];
  improvements: string[];
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  aboutContent: AboutContent;
  skills: Skills;
  education: Education[];
  certifications: Certification[];
  languages: SpokenLanguage[];
  projects: Project[];
};

export type ProjectWithImage = Project & {
  /** Public URL such as "/projects/project-1.jpg", or null if the file is missing. */
  imageSrc: string | null;
};