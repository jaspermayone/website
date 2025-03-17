import arcjet, {
  createMiddleware,
  detectBot,
  ArcjetWellKnownBot,
} from "@arcjet/next";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { trackPageView, trackReferral } from './lib/analytics';

const allowedBots: ArcjetWellKnownBot[] = [
  "HEADLESS_CHROME",
  "VERCEL_CRAWLER",
  "VERCEL_MONITOR_PREVIEW",
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
];

export const config = {
  // matcher tells Next.js which routes to run the middleware on.
  // This runs the middleware on all routes except for static assets and API routes.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};

// Custom middleware to track page views and referrals
const analyticsMiddleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  
  // Extract headers for analytics
  const userAgent = request.headers.get('user-agent');
  const referer = request.headers.get('referer');
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             '127.0.0.1';
  
  // Track page views for all requests except for bots
  if (!userAgent?.toLowerCase().includes('bot')) {
    // Don't await this to avoid slowing down the response
    trackPageView(path, userAgent, referer, ip).catch(console.error);
    
    // Check for /ss path to track referrals
    if (path === '/ss') {
      trackReferral('ss', userAgent, ip).catch(console.error);
    }
    
    // Check for query param for analytics after redirect
    if (searchParams.get('ss') === 'true') {
      // Update the session with this information for frontend use
      const response = NextResponse.next();
      response.cookies.set('hasSSReferral', 'true', { 
        maxAge: 60 * 30, // 30 minutes
        httpOnly: false,
        path: '/'
      });
      return response;
    }
  }
  
  return NextResponse.next();
};

const aj = arcjet({
  key: process.env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
  rules: [
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      // configured with a list of bots to allow from
      // https://arcjet.com/bot-list
      allow: allowedBots, // "allow none" will block all detected bots
    }),
  ],
});

// Create and combine middlewares
const arcjetMiddleware = createMiddleware(aj);

export default async function middleware(request: NextRequest) {
  // First run the analytics middleware
  const analyticsResponse = await analyticsMiddleware(request);
  
  // Then run the Arcjet middleware
  return arcjetMiddleware(request, () => analyticsResponse);
}
