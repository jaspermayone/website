import { ImageResponse } from "next/og";
import { base64Image } from "@/lib/jasper";

export const runtime = "edge";

// Load custom font
const customFont = fetch(
  new URL(
    "/fonts/CuteNotes.ttf",
    process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  ),
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract and sanitize parameters
    const title = searchParams.get("title")?.slice(0, 100) || "Jasper Mayone";
    const subtitle = searchParams.get("subtitle")?.slice(0, 150) || "";
    const theme = searchParams.get("theme") || "dark";

    // Load font
    const fontData = await customFont;

    // Theme configurations
    const themes = {
      dark: {
        background: "linear-gradient(to bottom, #000000, #1a1a1a)",
        text: "white",
        accent: "#3B82F6",
      },
      light: {
        background: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
        text: "black",
        accent: "#2563EB",
      },
    };

    const activeTheme = themes[theme as keyof typeof themes] || themes.dark;

    return new ImageResponse(
      (
        <div
          style={{
            background: activeTheme.background,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem",
            fontFamily: '"Cute Notes", sans-serif',
          }}
        >
          {/* Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Text Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "60%",
                gap: "1.5rem",
                padding: "2rem",
              }}
            >
              <h1
                style={{
                  fontSize: 72,
                  color: activeTheme.text,
                  lineHeight: 1.1,
                  margin: 0,
                  textAlign: "left",
                  fontFamily: '"Cute Notes", sans-serif',
                }}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  style={{
                    fontSize: 32,
                    color: activeTheme.text,
                    opacity: 0.8,
                    margin: 0,
                    textAlign: "left",
                    fontFamily: '"Cute Notes", sans-serif',
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>

            {/* Image Container */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40%",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `4px solid ${activeTheme.accent}`,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  alt="Profile"
                  src={base64Image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Cute Notes",
            data: fontData,
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  } catch (e: any) {
    console.error(`Error generating OG image: ${e.message}`);
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    });
  }
}
