import AnimatedTitle from "@/components/AnimatedTitle";

interface Podcast {
  name: string;
  description: string;
  url: string;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podroll",
  description: "Podcasts I recommend.",
};

export default function Podroll() {
  const podcasts: Podcast[] = [
    {
      name: "Mac Power Users",
      description:
        "Learn about getting the most from your Apple technology with focused topics and workflow guests. Creating Mac Power Users since 2009, one conversation at a time. Hosted by David Sparks and Stephen Hackett.",
      url: "https://www.relay.fm/mpu",
    },
    {
      name: "Hard Fork",
      description:
        "Hard Fork is a show about the future that's already here. Each week, journalists Kevin Roose and Casey Newton explore and make sense of the latest in the rapidly changing world of tech.",
      url: "https://www.nytimes.com/column/hard-fork",
    },
    {
      name: "Startups For the Rest of Us",
      description:
        "The original podcast for bootstrapped and mostly bootstrapped startups, this show follow the stories of founders as they start, acquire, and grow SaaS companies. Hear when they fail, struggle, succeed, and take you with them through the tumultuous life of a Saas founder. If you like Mixergy, This Week in Startups, or SaaStr, you'll enjoy Startup for the Rest of Us.",
      url: "https://www.startupsfortherestofus.com/",
    },
    {
      name: "Accidental Tech Podcast",
      description:
        "Three nerds discussing tech, Apple, programming, and loosely related matters.",
      url: "https://atp.fm/",
    },
    {
      name: "Automators",
      url: "https://www.relay.fm/automators",
      description:
        "Automation makes your life easier and everyone can do it. Hosted by David Sparks and Rosemary Orchard.",
    },
  ];

  return (
    <div className="m-2">
      <AnimatedTitle firstWord="Recommended" secondWord="Podcasts" />
      <p className="text-2xl mb-2">Here are some of my favorite podcasts</p>

      {/* display podcasts in a list */}
      <ul>
        {podcasts.map((podcast, index) => (
          <li key={index} className="mb-4">
            <a
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {podcast.name}
            </a>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
