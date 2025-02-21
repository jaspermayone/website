import { NextResponse } from "next/server";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    title: "IT Tool",
    description:
      "Managing loaner chromebooks for students and teachers in the HUUSD school district.",
    image: "/images/projects/ittool.png",
    link: "https://github.jaspermayone.com/ittool",
    techStack: ["Rails", "Ruby", "CSS", "JavaScript"],
  },
  {
    title: "@jaspermayone/logger",
    description: "Node.js Logging Package.",
    image: "/images/projects/logger.png",
    link: "https://github.jaspermayone.com/logger",
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

export async function GET() {
  return NextResponse.json(projects);
}
