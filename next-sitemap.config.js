/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.jaspermayone.com",
  generateRobotsTxt: false, // Using Next.js native robots.ts instead
  exclude: ["/icon.png", "/robots.txt", "/blank", "/api/*"],
};
