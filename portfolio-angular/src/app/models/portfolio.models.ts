export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
}

export interface Stat {
  icon: string;
  title: string;
  value: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  icon: string;
  title: string;
  description: string[];
}

export interface Project {
  image: string;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Course {
  title: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  stats: Stat[];
  aboutDescription: string;
  skillCategories: SkillCategory[];
  services: Service[];
  projects: Project[];
  courses: Course[];
}
