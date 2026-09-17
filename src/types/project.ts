export type ProjectCategory = 'All' | 'AI / ML' | 'Full Stack' | 'Python' | 'C++' | 'Web' | 'Other';

export interface ProjectScreenshot {
  title: string;
  url: string;
  caption: string;
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architectureSummary: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  screenshots: ProjectScreenshot[];
}

export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  github: string;
  demo?: string;
  featured?: boolean;
  image?: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
  highlights?: string[];
  caseStudy?: ProjectCaseStudy;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  fork: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  iconName: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status?: string;
  location: string;
  description: string;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  expectedGraduation: string;
  highlights: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  badge: string;
  description: string;
  iconName: string;
  accentColor: string;
}
