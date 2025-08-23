// types/index.ts

export interface Education {
    degree: string;
    institution: string;
    year: string;
    description: string;
    gpa?: string;
    certificate?: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  }
  
  export interface Skill {
    name: string;
    icon: React.ReactNode;
    level: number;
  }
  
  export interface SkillCategories {
    [key: string]: Skill[];
  }
  
  export interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
  }
  
  export interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
  }
  
  export interface WaterDropProps {
    delay: number;
    x: number;
    y: number;
  }