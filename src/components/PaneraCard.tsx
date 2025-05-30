"use client";

import Image from "next/image";
import { HiPlusCircle } from "react-icons/hi";

interface PaneraCardProps {
  imagesrc: string;
  name: string;
  calories: number;
  link: string;
  size?: string;
  text?: string;
}

export const PaneraCard = (props: PaneraCardProps) => {
  const { imagesrc, name, calories, link, size, text } = props;

  const sizeText = size ? (
    <>
      {size} <span dangerouslySetInnerHTML={{ __html: "&middot;" }} />{" "}
      {calories} Cal
    </>
  ) : (
    `${calories} Cal`
  );

  return (
    <div
      style={{
        width: "320px",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        overflow: "hidden",
        background: "#fff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ width: "100%", height: "220px", position: "relative" }}>
        <Image
          src={imagesrc}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="340px"
          priority
        />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          minHeight: "140px", // Minimum height instead of fixed height
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.25rem",
            marginBottom: "4px",
            color: "#051402",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#6b7280",
            marginBottom: "8px",
          }}
        >
          {sizeText}
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "#6b7280",
            marginBottom: "16px",
            minHeight: text ? "auto" : "20px", // Only reserve space when no text
            flex: "1", // This will push the button to the bottom
          }}
        >
          {text || ""} {/* Show text or empty string */}
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => window.open(link, "_blank")}
            style={{
              background: "#e0eb60",
              color: "#1d4321",
              border: "none",
              cursor: "pointer",
              borderRadius: "50px", // More rounded/pill-shaped
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: 600,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px", // Space between icon and text
              transition:
                "border .2s ease-in-out,color .05s ease-in-out,background-color .05s ease-in-out",
            }}
          >
            <HiPlusCircle style={{ fontSize: "1.2rem" }} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
