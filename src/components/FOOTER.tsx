"use client";
import { useEffect, useState } from "react";
import CommitHash from "./helpers/commitHash";

interface FooterProps {
  color?: string;
}

export default function FOOTER({ color }: FooterProps) {
  const textColor = color || "#4a5565";

  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="flex flex-col items-center pb-5">
      <div
        className="flex items-center justify-center gap-1.5 py-2"
        style={{ color: textColor }}
      >
        <p className="text-xs" style={{ color: textColor }}>
          ©{currentYear} Jasper Mayone. Made in <i>Boston, Massachusetts</i> by
          a real human, not a 🤖.
        </p>
      </div>
      <div>
        <CommitHash color={textColor} />
      </div>
    </footer>
  );
}
