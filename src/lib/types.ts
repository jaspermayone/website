export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  date: string;
  link: string;
}

export interface RedirectItem {
  slug: string;
  destination: string;
  linkrelme: boolean;
  slashToLink: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags?: string[];
  date?: string;
  image?: string;
}
