import { generateOGImage } from "@/lib/og-image";
import { getPageOGData } from "@/lib/og-utils";

export const runtime = "edge";
export const alt = "Jasper Mayone";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const data = getPageOGData("/");
  return generateOGImage(data);
}
