import { generateOGImage } from "@/lib/og-image";
import { getPageOGData } from "@/lib/og-utils";

export const alt = "Podroll | Jasper Mayone";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return generateOGImage(getPageOGData("/podroll"));
}
