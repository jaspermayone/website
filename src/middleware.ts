import arcjet, { createMiddleware, detectBot } from "@arcjet/next";
export const config = {
  // matcher tells Next.js which routes to run the middleware on.
  // This runs the middleware on all routes except for static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
const aj = arcjet({
  key: process.env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
  rules: [
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      // configured with a list of bots to allow from
      // https://arcjet.com/bot-list
      allow: [
        "GOOGLE_ADSBOT",
        "GOOGLE_ADSBOT_MOBILE",
        "GOOGLE_ADSENSE",
        "GOOGLE_ADSENSE_GOOGLEBOT",
        "GOOGLE_ADWORDS",
        "GOOGLE_APPENGINE",
        "GOOGLE_CERTIFICATES_BRIDGE",
        "GOOGLE_CRAWLER",
        "GOOGLE_CRAWLER_IMAGE",
        "GOOGLE_CRAWLER_MOBILE",
        "GOOGLE_CRAWLER_NEWS",
        "GOOGLE_CRAWLER_OTHER",
        "GOOGLE_CRAWLER_SAFETY",
        "GOOGLE_CRAWLER_STORE",
        "GOOGLE_CRAWLER_VIDEO",
        "GOOGLE_FAVICON",
        "GOOGLE_FEEDFETCHER",
        "GOOGLE_INSPECTION_TOOL",
        "GOOGLE_LIGHTHOUSE",
        "GOOGLE_PHYSICAL_WEB",
        "GOOGLE_PREVIEW",
        "GOOGLE_PUSH_NOTIFICATIONS",
        "GOOGLE_READ_ALOUD",
        "GOOGLE_SITE_VERIFICATION",
        "GOOGLE_STRUCTURED_DATA_TESTING_TOOL",
        "GOOGLE_WEB_SNIPPET",
        "GOOGLE_XRAWLER",
        "CURL", // allows the default user-agent of the `curl` tool
        "DISCORD_CRAWLER", // allows Discordbot
      ], // "allow none" will block all detected bots
    }),
  ],
});
// Pass any existing middleware with the optional existingMiddleware prop
export default createMiddleware(aj);
