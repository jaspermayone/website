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
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#151922", // Updated to match site dark mode background
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "10px", // Matching site's rounded corners
            padding: "40px",
            backgroundColor: "rgba(21, 25, 34, 0.7)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            width: "90%",
            height: "80%",
          }}
        >
          <h1
            style={{
              fontSize: "88px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "20px",
              textAlign: "center",
              borderBottom: "4px solid #4299e1", // Using border instead of unsupported wavy underline
              paddingBottom: "10px",
            }}
          >
            Jasper Mayone
          </h1>
          <div
            style={{
              fontSize: "32px",
              color: "#e0e0e0",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
              margin: "0 auto",
            }}
          >
            Circus Artist • Coder • Photographer
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#4299e1", // Changed to site's primary blue
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            jaspermayone.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}