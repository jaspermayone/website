import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Google-Extended",
          "FacebookBot",
          "Claude-Web",
          "cohere-ai",
          "PerplexityBot",
          "Applebot-Extended",
        ],
        disallow: ["/"],
        allow: ["/api/og/*"],
      },
      {
        userAgent: [
          "*",
          "AdsBot-Google",
          "AdsBot-Google-Mobile",
          "AdsBot-Google-Mobile-Apps",
        ],
        disallow: ["/wp-admin/"],
        allow: ["/", "/api/og/*"],
      },
    ],
    sitemap: "https://jaspermayone.com/sitemap.xml",
  };
}
