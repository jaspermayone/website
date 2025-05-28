import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const alt = "Jasper Mayone";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div>
        <h1>Jasper Mayone</h1>
      </div>            
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}