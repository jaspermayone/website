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
