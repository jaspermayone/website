export type MenuItemType = "Homepage" | "Resume" | "Portfolio" | "Verify";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};

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
}
