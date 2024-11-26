import { generateFeed } from "@/lib/feed";
import { NextResponse } from "next/server";

export async function GET() {
  const feed = await generateFeed();

  return new NextResponse(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
