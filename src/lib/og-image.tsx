import { ImageResponse } from "@vercel/og";
import { OGImageData } from "./og-utils";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateOGImage(data: OGImageData) {
  const { title, subtitle, description, type = "default" } = data;

  // Color schemes based on type
  const getColors = (type: string) => {
    switch (type) {
      case "portfolio":
        return {
          bg: "#151922",
          cardBg: "rgba(21, 25, 34, 0.8)",
          accent: "#10b981", // emerald
          border: "rgba(16, 185, 129, 0.2)",
        };
      case "project":
        return {
          bg: "#1a1a2e",
          cardBg: "rgba(26, 26, 46, 0.8)",
          accent: "#f59e0b", // amber
          border: "rgba(245, 158, 11, 0.2)",
        };
      case "page":
        return {
          bg: "#0f172a",
          cardBg: "rgba(15, 23, 42, 0.8)",
          accent: "#8b5cf6", // violet
          border: "rgba(139, 92, 246, 0.2)",
        };
      default:
        return {
          bg: "#151922",
          cardBg: "rgba(21, 25, 34, 0.7)",
          accent: "#56ba8e", // blue
          border: "rgba(66, 153, 225, 0.2)",
        };
    }
  };

  const colors = getColors(type);

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.bg,
        padding: "40px",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${colors.border}`,
          borderRadius: "16px",
          padding: "50px",
          backgroundColor: colors.cardBg,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
          width: "90%",
          height: "80%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: title.length > 20 ? "64px" : "80px",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "16px",
            textAlign: "center",
            borderBottom: `4px solid ${colors.accent}`,
            paddingBottom: "12px",
            maxWidth: "100%",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <div
            style={{
              fontSize: "36px",
              color: "#e2e8f0",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.3,
              marginBottom: description ? "16px" : "24px",
            }}
          >
            {subtitle}
          </div>
        )}

        {description && (
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
              marginBottom: "24px",
            }}
          >
            {description}
          </div>
        )}

        <div
          style={{
            fontSize: "20px",
            color: colors.accent,
            marginTop: "auto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: colors.accent,
            }}
          />
          jaspermayone.com
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: colors.accent,
            }}
          />
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
