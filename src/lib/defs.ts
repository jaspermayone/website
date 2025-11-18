import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from "react-icons/si";
import {
  Appearance,
  PageItem,
  ProjectItem,
  RedirectItem,
  YearGroup,
} from "./types";

const birthDate = new Date("2006-08-05T00:00:00Z");
// Calculate age in full years based on today's date
const now = new Date();
export const age =
  now.getUTCFullYear() -
  birthDate.getUTCFullYear() -
  (Number(`${now.getUTCMonth()}${now.getUTCDate()}`) <
  Number(`${birthDate.getUTCMonth()}${birthDate.getUTCDate()}`)
    ? 1
    : 0);

/*
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
*/
export const pages: PageItem[] = [
  { text: "Home", slug: "home", showInNav: true, order: 1 },
  { text: "CV", slug: "cv", showInNav: true, order: 2 },
  { text: "Portfolio", slug: "portfolio", showInNav: true, order: 3 },
  { text: "Verify", slug: "verify", showInNav: true, order: 99 },
  { text: "Contact", slug: "contact", showInNav: true, order: 4 },
  { text: "GPG Keys", slug: "gpg", showInNav: true, order: 5 },
  { text: "SSH Keys", slug: "ssh", showInNav: true, order: 6 },
  { text: "PFP", slug: "pfp", showInNav: false, order: 99 },
  { text: "Now", slug: "now", showInNav: false, order: 99 },
  { text: "Panera", slug: "panera", showInNav: false, order: 99 },
  { text: "Uses", slug: "uses", showInNav: false, order: 7 },
  { text: "Podroll", slug: "podroll", showInNav: false, order: 99 },
  { text: "Green", slug: "green", showInNav: false, order: 99 },
  { text: "Concerts", slug: "concerts", showInNav: false, order: 99 },
  { text: "Elsewhere", slug: "elsewhere", showInNav: false, order: 99 },
  { text: "Colophon", slug: "colophon", showInNav: false, order: 8 },
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
    destination: "https://jasper.cv",
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
    image: "/images/projects/website.webp",
  },
  {
    title: "LaTex Generated CV/Resume",
    description: "My personal cv/resume built with LaTex.",
    link: "https://jasper.cv",
    github: "jaspermayone/cv",
    tags: ["LaTex", "Github Actions"],
    date: "2025",
    image: "https://jasper.cv/jaspermayone-cv.jpeg",
  },
  {
    title: "Slack Profile CLI",
    description:
      "Command-line tool for updating Slack user profiles programmatically. Published to npm and RubyGems with Homebrew support.",
    link: "https://www.npmjs.com/package/@jaspermayone/slack-profile-cli",
    github: "jaspermayone/slack-profile-cli",
    tags: ["Node.js", "Ruby", "CLI", "Slack API"],
    date: "2025",
  },
  {
    title: "MLH Discord Integration",
    description:
      "Discord bot that integrates with MyMLH identity platform for tighter linking of roles and user experience enhancement.",
    tags: ["Discord", "Ruby", "Ruby on Rails"],
    date: "2025",
    image: "/images/projects/mlh-discord.webp",
  },
  {
    title: "WIP - Metro",
    description:
      "Work in progress... An interactive map of Boston's transit system.",
    github: "jaspermayone/metro",
    link: "https://metro.jaspermayone.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    date: "2024",
    image: "/images/projects/metro.webp",
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

export const navSocialLinks = [
  { href: "/github", label: "GitHub", Icon: SiGithub },
  { href: "/linkedin", label: "Linkedin", Icon: SiLinkedin },
  { href: "/instagram", label: "Instagram", Icon: SiInstagram },
  { href: "/threads", label: "Threads", Icon: SiThreads },
  { href: "/bluesky", label: "Bluesky", Icon: SiBluesky },
  { href: "/x", label: "X", Icon: SiX },
];

export const concertsByYear: YearGroup[] = [
  {
    /* Lake Street Dive
     */
    year: 2025,
    concerts: [
      {
        headliner: "Lake Street Dive",
        setlist:
          "https://www.setlist.fm/setlist/lake-street-dive/2025/thompsons-point-portland-me-7b5aaaa0.html",
        openers: ["Sammy Rae & the Friends"],
        venue: "Thompson Point, Portland, ME",
        date: "2025-08-17",
        favorite: true,
      },
      {
        headliner: "AJR",
        setlist:
          "https://www.setlist.fm/setlist/ajr/2025/xfinity-center-mansfield-ma-1358f995.html",
        tour: "Somewhere in the Sky Tour",
        openers: ["Madilyn Mei", "Cavetown", "Valley"],
        venue: "Xfinity Center, Mansfield, MA",
        date: "2025-08-09",
      },
    ],
  },
  {
    year: 2024,
    concerts: [
      {
        headliner: "Sammy Rae & the Friends",
        setlist:
          "https://www.setlist.fm/setlist/sammy-rae-and-the-friends/2024/flynn-center-for-the-performing-arts-burlington-vt-73534a95.html",
        tour: "Something for Everybody Tour",
        venue: "Flynn Theater for the Performing Arts, Burlington, VT",
        date: "2024-11-1",
        favorite: false,
      },
      {
        headliner: "Lake Street Dive",
        tour: "Good Together Tour",
        venue: "Shelburne Museum, Shelburne, VT",
        setlist:
          "https://www.setlist.fm/setlist/lake-street-dive/2024/the-green-at-shelburne-museum-shelburne-vt-6353c6cb.html",
        date: "2024-09-19",
      },
      {
        headliner: "AJR",
        tour: "The Maybe Man Tour",
        setlist:
          "https://www.setlist.fm/setlist/ajr/2024/td-garden-boston-ma-23ab80cf.html",
        openers: ["mxmtoon", "almost monday"],
        venue: "TD Garden, Boston, MA",
        date: "2024-08-03",
        favorite: true,
      },
    ],
  },
  {
    year: 2023,
    concerts: [
      {
        headliner: "Sammy Rae & the Friends",
        setlist:
          "https://www.setlist.fm/setlist/sammy-rae-and-the-friends/2023/higher-ground-music-hall-south-burlington-vt-53a3bfcd.html",
        tour: "Camp Tour",
        venue: "Higher Ground, Burlington, VT",
        date: "2023-09-18",
        favorite: false,
      },
    ],
  },
];

export const appearances: Appearance[] = [
  {
    title: "Staff Writer",
    date: "2022-01-01",
    platform: "Harwood Union High School Newspaper",
    url: "https://huhsnewspaper.com/staff_name/jasper-mayone/",
    type: "profile",
    role: "staff writer",
  },
  {
    title: "Staff Member",
    date: "2021-01-01",
    platform: "Mad River Mentoring",
    url: "https://www.madrivermentoring.com/staff",
    type: "organization",
    role: "staff",
  },
  {
    title: "Oliver! The Musical",
    date: "2019-03-01",
    platform: "Valley Players",
    url: "https://www.valleyplayers.com/oliver-2019",
    type: "theater",
    role: "performer",
  },
  {
    title: "The Art of A-Frame Building",
    date: "2019-03-01",
    platform: "Seven Days",
    url: "https://www.sevendaysvt.com/guides/the-art-of-a-frame-building-35270341",
    type: "article",
  },
  {
    title: "The Mousetrap",
    date: "2019-01-01",
    platform: "Our Herald",
    url: "https://www.ourherald.com/articles/the-valley-players-will-present-the-mousetrap-in-waitsfield/",
    type: "article",
    description: "Valley Players production announcement",
  },
  {
    title: "Willy Wonka: A World of Pure Imagination",
    date: "2018-01-01",
    platform: "The Valley Reporter",
    url: "https://www.valleyreporter.com/index.php/news/artsent/18053-willy-wonka-a-world-of-pure-imagination",
    type: "theater",
    role: "performer",
  },
  {
    title: "New York Times Archive",
    date: "2009-03-01",
    platform: "New York Times",
    url: "https://archive.nytimes.com/query.nytimes.com/gst/fullpage-9F06E4DE153AF936A35750C0A96F9C8B63.html",
    type: "article",
  },
];
