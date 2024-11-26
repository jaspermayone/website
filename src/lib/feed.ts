import { Feed } from "feed";
import { prisma } from "./db";

export async function generateFeed() {
  const feed = new Feed({
    title: "Jasper Mayone's Newsletter",
    description:
      "The going-ons of Jasper Mayone, delivered to you whenever Jasper remembers to write them.",
    id: "https://jaspermayone.com/",
    link: "https://jaspermayone.com/",
    language: "en",
    image: "https://jaspermayone.com/favicon.png",
    favicon: "https://jaspermayone.com/favicon.ico",
    copyright: `All rights reserved ${new Date().getFullYear()}, Jasper Mayone`,
    feedLinks: {
      json: "https://jaspermayone.com/feed.json",
      rss2: "https://jaspermayone.com/rss.xml",
      atom: "https://jaspermayone.com/atom.xml",
    },
    author: {
      name: "Jasper Mayone",
      email: "me@jaspermayone.com",
      link: "https://jaspermayone.com",
    },
  });

  // Get newsletters from the database
  const newsletters = await prisma.newsletter.findMany({
    orderBy: {
      receivedAt: "desc",
    },
  });

  newsletters.forEach((newsletter) => {
    feed.addItem({
      title: newsletter.subject,
      id: newsletter.id,
      link: `https://jaspermayone.com/newsletter/${newsletter.id}`,
      description: newsletter.previewContent,
      content: newsletter.cleanHtml,
      author: [
        {
          name: "Jasper Mayone",
          email: "me@jaspermayone.com",
          link: "https://jaspermayone.com",
        },
      ],
      date: newsletter.receivedAt,
    });
  });

  return feed;
}
