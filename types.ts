export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  tech: string[];
  description: string;
  fullContent: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  tech: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  photoUrl: string;
  about: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillSet[];
  languages: string[];
}

export interface AppData {
  profile: ProfileData;
  projects: Project[];
  nav: {
    home: string;
    resume: string;
    projects: string;
  };
  labels: {
    latestProjects: string;
    contact: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    certifications: string;
    techStack: string;
    viewProject: string;
    backToProjects: string;
    aboutMe: string;
    published: string;
  };
}