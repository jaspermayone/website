import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from "react-icons/si";
import { ProjectItem, RedirectItem } from "./types";

export const pages = [
  "home",
  "cv",
  "portfolio",
  "verify",
  "contact",
  "gpg",
  "ssh",
  "pfp",
  "now",
  "panera",
  "uses",
  "podroll",
  "green",
  "colophon",
];

export const redirects: RedirectItem[] = [
  {
    slug: "github",
    destination: "https://github.com/jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "linkedin",
    destination: "https://www.linkedin.com/in/jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "bluesky",
    destination: "https://bsky.app/profile/jaspermayone.com",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "threads",
    destination: "https://www.threads.net/@jasper.mayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "x",
    destination: "https://x.com/jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "twitter",
    destination: "https://x.com/jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "youtube",
    destination: "https://www.youtube.com/@jasper.does.circus",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "buy-me-a-coffee",
    destination: "https://buymeacoffee.com/jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "reddit",
    destination: "https://www.reddit.com/user/j-dogcoder",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "matrix",
    destination: "https://matrix.to/#/@jasper.mayone:matrix.org",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "devto",
    destination: "https://dev.to/jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "hackerone",
    destination: "https://hackerone.com/jmayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "producthunt",
    destination: "https://www.producthunt.com/@jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "hackernews",
    destination: "https://news.ycombinator.com/user?id=jaspermayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "thingiverse",
    destination: "https://www.thingiverse.com/preamble6098/",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "keyoxide",
    destination:
      "https://keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "signal",
    destination: "https://signal.me/#eu/jaspermayone.10",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "instagram",
    destination: "https://www.instagram.com/jasper.mayone",
    linkrelme: true,
    slashToLink: true,
  },
  {
    slug: "theaterengine",
    destination: "https://theaterengine.com/artists/7449",
    slashToLink: false,
    linkrelme: true,
  },
  {
    slug: "cv",
    destination: "https://cv.jaspermayone.com",
    linkrelme: true,
    slashToLink: true,
  },
];

export const emails = [
  { address: "me@jaspermayone.com", primary: true },
  { address: "jaspermayone@gmail.com" },
  { address: "jasper.mayone@icloud.com" },
  { address: "jasper.mayone@singlefeather.com", business: true },
  { address: "mayonej@wit.edu", school: true },
  { address: "jasper.mayone@phish.directory" },
  { address: "jasper@patchworklabs.org" },
  { address: "jasper@hackathon.help" },
];

export const socialLinks = [
  {
    href: "/to/github",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    href: "/to/linkedin",
    label: "Linkedin",
    Icon: SiLinkedin,
  },
  {
    href: "/to/instagram",
    label: "Instagram",
    Icon: SiInstagram,
  },
  {
    href: "/to/threads",
    label: "Threads",
    Icon: SiThreads,
  },
  {
    href: "/to/bluesky",
    label: "Bluesky",
    Icon: SiBluesky,
  },
  {
    href: "/to/x",
    label: "X",
    Icon: SiX,
  },
];

/**
 * Project Item
 * title: string;
 * description: string;
 * link?: string;
 * github?: string;
 * tags?: string[];
 * date?: string;
 * image?: string;
 */
export const projects: ProjectItem[] = [
  {
    title: "Personal Website",
    description: "My personal website showcasing my projects and skills.",
    link: "https://jaspermayone.com",
    github: "jaspermayone/website",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    date: "2025",
    image: "/images/projects/website.png",
  },
  {
    title: "LaTex Generated CV/Resume",
    description: "My personal cv/resume built with LaTex.",
    link: "https://cv.jaspermayone.com",
    github: "jaspermayone/cv",
    tags: ["LaTex", "Github Actions"],
    date: "2025",
    image: "https://cv.jaspermayone.com/jaspermayone-cv.jpeg",
  },
  {
    title: "MLH Discord Integration",
    description:
      "Discord bot that integrates with MyMLH identity platform for tighter linking of roles and user experience enhancement.",
    tags: ["Discord", "Ruby", "Ruby on Rails"],
    date: "2025",
    image: "/images/projects/mlh-discord.png",
  },
  {
    title: "WIP - Metro",
    description:
      "Work in progress... An interactive map of Boston's transit system.",
    github: "jaspermayone/metro",
    link: "https://metro.jaspermayone.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    date: "2024",
    image: "/images/projects/metro.png",
  },
  {
    title: "Obsidian AI Note Tagger",
    description:
      "An Obsidian plugin that uses AI to automatically tag your notes based on their content.",
    github: "jaspermayone/obsidian-ai-note-tagger",
    tags: ["TypeScript", "Obsidian", "AI"],
    date: "2025",
  },
  {
    title: "Hack Club - Arcadius",
    description:
      "A freindly dino (slack bot) that managed the onboarding flow for Hack Club's 2024 summer event Arcade. (https://arcade.hackclub.com)",
    github: "hackclub/arcadius",
  },
];
