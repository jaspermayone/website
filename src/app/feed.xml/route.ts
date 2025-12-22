import { primaryEmail, siteUrl, slashPages } from "@/lib/defs";
import { Feed } from "feed";

export async function GET() {
  const feed = new Feed({
    title: "Jasper Mayone",
    description: "Personal website of Jasper Mayone - slash pages and updates",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    image: `${siteUrl}/images/jmdark-min.webp`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Jasper Mayone`,
    updated: new Date(),
    feedLinks: {
      atom: `${siteUrl}/feed.xml`,
      rss: `${siteUrl}/press.xml`,
    },
    author: {
      name: "Jasper Mayone",
      email: primaryEmail,
      link: siteUrl,
    },
  });

  // Add slash pages as feed items
  slashPages.forEach((page) => {
    feed.addItem({
      title: page.name,
      id: `${siteUrl}/${page.slug}`,
      link: `${siteUrl}/${page.slug}`,
      description: page.description,
      author: [
        {
          name: "Jasper Mayone",
          email: primaryEmail,
          link: siteUrl,
        },
      ],
      date: new Date(),
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
