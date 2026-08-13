import { generateOGImage } from "@/lib/og-image";
import { getPageOGData } from "@/lib/og-utils";
import { NextRequest } from "next/server";

// Node runtime: generateOGImage reads local font files from disk.
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path") || "/";
    const title = searchParams.get("title");
    const subtitle = searchParams.get("subtitle");
    const description = searchParams.get("description");

    const data = title
      ? {
          title,
          subtitle: subtitle || undefined,
          description: description || undefined,
        }
      : getPageOGData(path);

    return await generateOGImage(data);
  } catch (e: unknown) {
    console.error(`OG image generation failed:`, e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
