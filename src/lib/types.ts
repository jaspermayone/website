export interface Newsletter {
  id: string;
  subject: string;
  content: string;
  htmlContent: string;
  receivedAt: Date;
  fromEmail: string;
}

export type MenuItemType =
  | "Homepage"
  | "Resume"
  | "Portfolio"
  | "Newsletter"
  | "Verify";

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
