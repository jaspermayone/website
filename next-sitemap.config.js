/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.jaspermayone.com",
  generateRobotsTxt: false, // Using Next.js native robots.ts instead
  exclude: ["/icon.png", "/robots.txt", "/blank", "/api/*"],
  priority: 0.7,
  changefreq: "weekly",
  transform: async (config, path) => {
    // Higher priority for main pages
    const highPriority = ["/", "/portfolio", "/contact"];
    const mediumPriority = ["/now", "/uses", "/elsewhere", "/colophon"];

    let priority = 0.5;
    let changefreq = "monthly";

    if (highPriority.includes(path)) {
      priority = 1.0;
      changefreq = "weekly";
    } else if (mediumPriority.includes(path)) {
      priority = 0.7;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
