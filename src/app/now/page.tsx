import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import PostList from "@/components/PostList";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Now",
  description:
    "Real-time status updates from Jasper Mayone - current activities, projects, and location updates via automated system.",
  keywords: [
    "now page",
    "status updates",
    "current activities",
    "jasper mayone now",
    "real-time updates",
  ],
  alternates: {
    canonical: "https://www.jaspermayone.com/now",
  },
};

const nowPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/now#webpage",
      url: "https://www.jaspermayone.com/now",
      name: "Now - Jasper Mayone",
      description:
        "Real-time status updates from Jasper Mayone - current activities, projects, and location updates via automated system.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.jaspermayone.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Now",
            item: "https://www.jaspermayone.com/now",
          },
        ],
      },
    },
    {
      "@type": "Blog",
      "@id": "https://www.jaspermayone.com/now#blog",
      url: "https://www.jaspermayone.com/now",
      name: "Now Updates - Jasper Mayone",
      description: "Real-time status updates and current activities",
      author: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      publisher: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function Now() {
  return (
    <>
      <Script
        id="now-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nowPageSchema),
        }}
      />
      <div className="flex h-screen flex-col">
        <MENU pageFirstWord="Now" />
        <main className="m-5 flex flex-1 flex-col overflow-hidden">
          <div className="mb-6">
            <p className="mb-3 text-gray-700">
              This is a semi-realtime status update system for posting updates
              to{" "}
              <Link
                href="https://bsky.app/profile/rightnow.jaspermayone.com?utm_source=jaspermayone.com&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="lnk"
              >
                @rightnow.jaspermayone.com
              </Link>{" "}
              on Bluesky. Think of it as a{" "}
              <Link
                href="https://nownownow.com/about?utm_source=jaspermayone.com&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="lnk"
              >
                /now page
              </Link>{" "}
              that updates automatically.
            </p>
            <p className="text-sm text-gray-600">
              The original was called a.status.update and created by{" "}
              <Link
                href="https://dame.is/creating/shortcuts/a-status-update/?utm_source=jaspermayone.com&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="lnk"
              >
                @dame.is
              </Link>
              . I have since modified/adapted it to auto-update for things like
              sleeping, driving, and school based on indicators from various
              devices.
            </p>
          </div>
          <div className="flex-1 overflow-y-auto pb-4">
            <PostList />
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
