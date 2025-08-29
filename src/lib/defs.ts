import { Project, RedirectItem } from "./types";

export const pages = [
  "home",
  "resume",
  "verify",
  "contact",
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
];

export const projects: Project[] = [
  {
    title: "IT Tool",
    description:
      "Managing loaner chromebooks for students and teachers in the HUUSD school district.",
    image: "/images/projects/ittool.png",
    link: "https://github.com/jaspermayone/ittool",
    techStack: ["Rails", "Ruby", "CSS", "JavaScript"],
  },
  {
    title: "@jaspermayone/logger",
    description: "Node.js Logging Package.",
    image: "/images/projects/logger.png",
    link: "https://github.com/jaspermayone/logger",
    techStack: ["Node.js", "Typescript"],
  },
  {
    title: "Phish Directory",
    description:
      "API for phish.directory, a community-driven anti-phishing tool. Helping catch, prevent, and catalog phishing links & attempts.",
    image: "/images/projects/phish-directory.png",
    link: "https://github.com/phish-directory/api",
    techStack: ["Node.js", "Express", "Postgres", "Typescript", "Prisma"],
  },
  {
    title: "Magic Mirror",
    description: "Mirroring Slack Channels Between Workspaces",
    image: "/images/projects/magic-mirror.jpg",
    link: "https://github.com/thepurplebubble/magic-mirror",
    techStack: [
      "Node.js",
      "@slack/bolt",
      "Express",
      "Typescript",
      "Bun",
      "Prisma",
    ],
  },
];
