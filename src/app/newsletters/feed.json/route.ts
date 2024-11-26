import { generateFeed } from "@/lib/feed";
import { NextResponse } from "next/server";

export async function GET() {
  const feed = await generateFeed();

  return NextResponse.json(JSON.parse(feed.json1()));
}
