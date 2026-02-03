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
  atproto?: boolean; // For ATProto/Bluesky IndieAuth support
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
  order?: number;
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

// Open Source page types
export interface MaintainedProject {
  name: string;
  description: string;
  repo: string; // e.g., "jaspermayone/website"
  language?: string; // Fallback if API fails
  tags?: string[];
  featured?: boolean;
  archived?: boolean;
}

export interface OpenSourceContribution {
  project: string; // Display name (e.g., "Next.js")
  repo: string; // e.g., "vercel/next.js"
  description?: string;
  contributionType: "code" | "docs" | "issue" | "review" | "other";
  prNumbers?: number[];
  date?: string;
}

export interface HostedService {
  name: string;
  description: string;
  url: string;
  repo?: string;
  status?: "active" | "beta" | "deprecated" | "alpha";
}

export interface RepoStats {
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  lastUpdated: string;
  archived: boolean;
  license: string | null;
  error?: boolean;
}

export interface SlashPage {
  slug: string;
  name: string;
  description: string;
}

export interface HardwareItem {
  name: string;
  device: string;
  details?: string;
  category:
    | "computer"
    | "mobile"
    | "wearable"
    | "accessory"
    | "smart-home"
    | "3d-printer"
    | "networking";
}
