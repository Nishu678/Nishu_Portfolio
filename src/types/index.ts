// Portfolio data types

export interface Skill {
  name: string;
  category: 'frontend' | 'styling' | 'tools' | 'backend' | 'design' | 'other';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: 'web' | 'dashboard' | 'api' | 'tool';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    location: string;
    availability?: boolean;
    resumeUrl?: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  socialLinks: SocialLink[];
}
