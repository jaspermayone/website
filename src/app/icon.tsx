import { ImageResponse } from "next/og";
import { base64Image } from "@/lib/jasper";

// Image metadata
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <img
        alt="Profile"
        src={base64Image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20%",
        }}
      />
    ),
    {
      ...size,
    },
  );
}
