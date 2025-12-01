import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Note: Cloudflare also injects AI bot blocking rules.
  // We maintain our own for resilience and to cover additional bots.
  return {
    rules: [
      // Block AI crawlers and training bots
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "FacebookBot",
          "meta-externalagent",
          "cohere-ai",
          "PerplexityBot",
          "Applebot-Extended",
          "Amazonbot",
          "Bytespider",
          "Diffbot",
          "ImagesiftBot",
          "Omgilibot",
          "Omgili",
        ],
        disallow: ["/"],
      },
      // General crawlers
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/wp-admin/"],
      },
    ],
    sitemap: "https://www.jaspermayone.com/sitemap_index.xml",
  };
}
