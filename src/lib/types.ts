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
  | "@jasperdoescircus";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};
