import { generateOGImage } from "@/lib/og-image";
import { getPageOGData } from "@/lib/og-utils";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path") || "/";
    const title = searchParams.get("title");
    const subtitle = searchParams.get("subtitle");
    const description = searchParams.get("description");
    const type = searchParams.get("type") as
      | "default"
      | "portfolio"
      | "project"
      | "page"
      | null;

    // Use custom data if provided, otherwise fallback to defaults
    let data;
    if (title) {
      data = {
        title,
        subtitle: subtitle || undefined,
        description: description || undefined,
        type: type || "page",
      };
    } else {
      data = getPageOGData(path);
    }

    return generateOGImage(data);
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
