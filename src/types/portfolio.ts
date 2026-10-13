export type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
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

export type Highlight = {
  label: string;
  value: string;
};

export type AboutContent = {
  journey: string;
  focus: string;
  enjoy: string[];
  hobbies?: string[];
  highlights?: Highlight[];
};

export type Experience = {
  position: string;
  company: string;
  duration: string;
  description: string;
  responsibilities?: string[];
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export type Skills = Record<SkillCategory, Skill[]>;

export type Education = {
  degree: string;
  institution: string;
  year: string;
  description: string;
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
  githubLink: string;
  challenges: string[];
  improvements: string[];
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  aboutContent: AboutContent;
  experience: Experience[];
  skills: Skills;
  education: Education[];
  projects: Project[];
};
