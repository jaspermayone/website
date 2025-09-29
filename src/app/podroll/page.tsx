import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import SquigglyLine from "@/components/SquigglyLine";
import { HeadphonesIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

interface Podcast {
  name: string;
  description: string;
  url: string;
}

export const metadata: Metadata = {
  title: "Podroll",
  description: "Podcasts I recommend.",
};

export default function Podroll() {
  const podcasts: Podcast[] = [
    {
      name: "Mac Power Users",
      description:
        "Learn about getting the most from your Apple technology with focused topics and workflow guests.",
      url: "https://www.relay.fm/mpu",
    },
    {
      name: "Hard Fork",
      description:
        "Each week, journalists Kevin Roose and Casey Newton explore the rapidly changing world of tech.",
      url: "https://www.nytimes.com/column/hard-fork",
    },
    {
      name: "Startups For the Rest of Us",
      description:
        "Following founders as they start, acquire, and grow SaaS companies through success and failure.",
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
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Podcasts" />
      <main className="flex-1">
        <div className="mx-5 mt-4 mb-4">
          <h1 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            Recommended Podcasts
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {podcasts.map((podcast, index) => (
              <Link
                key={index}
                href={`${podcast.url}?utm_source=jaspermayone.com&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-3 bg-white/50 dark:bg-gray-800/20 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <div className="flex-shrink-0 mr-3 text-blue-500">
                  <HeadphonesIcon size={20} />
                </div>
                <div>
                  <h2 className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                    {podcast.name}
                  </h2>
                  <p className="text-gray-600 dark:text-white/70 text-xs mt-1">
                    {podcast.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="py-2" />
        <SquigglyLine
          frequency={50}
          amplitude={0.4}
          className="min-w-screen"
          color="#4299e1"
        />
      </main>
      <FOOTER />
    </div>
  );
}
