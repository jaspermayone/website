import ExternalLink from "@/components/ExternalLink";
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { friends, siteUrl } from "@/lib/defs";
import { safeJsonLd } from "@/lib/jsonld";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Friends",
  description:
    "Some of the super cool people I have the privilege to call friends.",
  alternates: {
    canonical: "https://jaspermayone.com/friends",
  },
};

const friendsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/friends#webpage",
      url: "https://jaspermayone.com/friends",
      name: "Friends - Jasper Mayone",
      description:
        "Some of the super cool people I have the privilege to call friends.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://jaspermayone.com/friends#friend-list",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/friends#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jaspermayone.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Friends",
            item: "https://jaspermayone.com/friends",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaspermayone.com/friends#friend-list",
      name: "Friends",
      description: "Friends of Jasper Mayone",
      numberOfItems: friends.length,
      itemListElement: friends.map((friend, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: friend.name,
          ...(friend.image ? { image: `${siteUrl}${friend.image}` } : {}),
          ...(friend.link ? { url: friend.link } : {}),
        },
      })),
    },
  ],
};

function initials(name: string): string {
  const words = name.split(" ");
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? (words[words.length - 1][0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

export default function Friends() {
  return (
    <>
      <Script
        id="friends-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(friendsPageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Friends" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-2 text-xl font-semibold text-zinc-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Friends
            </h1>
            <p className="mb-6 text-zinc-600 dark:text-white/70">
              I have some super cool friends, check them all out! 🌟 (btw, shoot
              me a message if you want to be added here, I definitely missed
              some people lol.)
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {friends.map((friend) => {
                const card = (
                  <>
                    {friend.image ? (
                      <Image
                        src={friend.image}
                        alt={friend.name}
                        width={400}
                        height={400}
                        className="aspect-square w-full rounded-lg object-cover"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#56ba8e]/15 text-4xl font-semibold text-[#3d8a68] dark:bg-[#56ba8e]/10 dark:text-[#7ccfa9]"
                        style={{ fontFamily: "var(--font-balgin)" }}
                      >
                        {initials(friend.name)}
                      </div>
                    )}
                    <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
                      {friend.name}
                    </p>
                  </>
                );

                return friend.link ? (
                  <ExternalLink
                    key={friend.name}
                    href={friend.link}
                    className="group rounded-lg transition-opacity hover:opacity-80"
                  >
                    {card}
                  </ExternalLink>
                ) : (
                  <div key={friend.name}>{card}</div>
                );
              })}
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
