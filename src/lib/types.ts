export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  date: string;
  link: string;
}

export interface PageItem {
  text: string;
  slug: string;
  showInNav: boolean;
  order: number;
}

export interface RedirectItem {
  slug: string;
  destination: string;
  linkrelme: boolean;
  slashToLink: boolean;
  social: boolean;
  socialNote?: string;
  username?: string;
  displayName?: string; // Override for platform name display (e.g., "Twitter/X" instead of "x")
}

export enum domainType {
  personal,
  project,
  work,
  business,
  other,
}

export type Domain = {
  name: string;
  type: domainType;
  icon?: React.ReactNode;
};

export interface ProjectItem {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags?: string[];
  date?: string;
  image?: string;
}

export interface Concert {
  headliner: string;
  openers?: string[];
  setlist?: string;
  tour?: string;
  venue?: string;
  date?: string;
  favorite?: boolean;
}

export interface YearGroup {
  year: number;
  concerts: Concert[];
}

export interface Appearance {
  title: string;
  date: string;
  platform: string;
  url: string;
  type?: string;
  role?: string;
  description?: string;
}

export interface Podcast {
  name: string;
  description: string;
  url: string;
}

export interface Tool {
  emoji: string;
  name: string;
  result: string;
}
