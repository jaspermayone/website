import { appearances } from "@/lib/defs";
import { Feed } from "feed";

export async function GET() {
  const siteUrl = "https://jaspermayone.com";

  const feed = new Feed({
    title: "Jasper Mayone - Press & Appearances",
    description:
      "Press mentions, articles, and appearances featuring Jasper Mayone",
    id: `${siteUrl}/press`,
    link: siteUrl,
    language: "en",
    image: `${siteUrl}/images/jmdark-min.webp`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Jasper Mayone`,
    updated: new Date(),
    feedLinks: {
      rss: `${siteUrl}/press.xml`,
      atom: `${siteUrl}/feed.xml`,
    },
    author: {
      name: "Jasper Mayone",
      email: "me@jaspermayone.com",
      link: siteUrl,
    },
  });

  // Sort appearances by date (newest first)
  const sortedAppearances = [...appearances].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Add appearances as feed items
  sortedAppearances.forEach((appearance) => {
    const description = [
      appearance.description,
      appearance.role ? `Role: ${appearance.role}` : null,
      `Type: ${appearance.type}`,
      `Platform: ${appearance.platform}`,
    ]
      .filter(Boolean)
      .join(" | ");

    feed.addItem({
      title: appearance.title,
      id: appearance.url,
      link: appearance.url,
      description,
      author: [
        {
          name: "Jasper Mayone",
          email: "me@jaspermayone.com",
          link: siteUrl,
        },
      ],
      date: new Date(appearance.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
