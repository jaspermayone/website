import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OGImageData } from "./og-utils";

// Matches the squiggly-line accent used by MENU / PageNavigation.
const ACCENT = "#56ba8e";
const INK = "#27272a"; // zinc-800, the site's heading color
const MUTED = "#52525b"; // zinc-600, the site's body color

const loadFont = (relativePath: string) =>
  readFile(join(process.cwd(), "public", "fonts", relativePath));

// A hand-drawn-style squiggle, like <SquigglyLine />, rendered as inline SVG.
const Squiggle = ({ width }: { width: number }) => {
  const wave = 28;
  const waves = Math.max(3, Math.round(width / wave));
  let d = "M 0 10";
  for (let i = 0; i < waves; i++) {
    const x = i * wave;
    d += ` Q ${x + wave / 4} ${i % 2 === 0 ? 0 : 20}, ${x + wave / 2} 10 T ${x + wave} 10`;
  }
  return (
    <svg
      width={width}
      height={20}
      viewBox={`0 0 ${waves * wave} 20`}
      fill="none"
    >
      <path
        d={d}
        stroke={ACCENT}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export async function generateOGImage(data: OGImageData) {
  const { title, subtitle, description } = data;

  const [cuteNotes, balgin] = await Promise.all([
    loadFont("CuteNotes/CuteNotes.ttf"),
    loadFont("Balgin/BalginText-Light.otf"),
  ]);

  const titleSize = title.length > 16 ? 110 : 140;
  const squiggleWidth = Math.min(900, Math.max(320, title.length * 44));

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        backgroundImage:
          "linear-gradient(180deg, #eef2f1 0%, #ffffff 55%, #ffffff 100%)",
        padding: "60px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            fontFamily: "CuteNotes",
            fontSize: titleSize,
            color: INK,
            lineHeight: 1,
            textAlign: "center",
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", marginTop: 8 }}>
          <Squiggle width={squiggleWidth} />
        </div>

        {subtitle && (
          <div
            style={{
              fontFamily: "Balgin",
              fontSize: 38,
              color: MUTED,
              textAlign: "center",
              maxWidth: "860px",
              lineHeight: 1.3,
              marginTop: 36,
            }}
          >
            {subtitle}
          </div>
        )}

        {description && (
          <div
            style={{
              fontFamily: "Balgin",
              fontSize: 27,
              color: "#71717a",
              textAlign: "center",
              maxWidth: "780px",
              lineHeight: 1.4,
              marginTop: 18,
            }}
          >
            {description}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: "Balgin",
          fontSize: 26,
          color: ACCENT,
        }}
      >
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            backgroundColor: ACCENT,
          }}
        />
        jaspermayone.com
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            backgroundColor: ACCENT,
          }}
        />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "CuteNotes", data: cuteNotes, style: "normal", weight: 400 },
        { name: "Balgin", data: balgin, style: "normal", weight: 400 },
      ],
    }
  );
}
