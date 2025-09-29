"use client";
import CommitHash from "@/components/helpers/commitHash";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from "react-icons/si";

interface FooterProps {
  color?: string;
}

export default function FOOTER({ color }: FooterProps) {
  const textColor = color || "#4a5565";

  const socialLinks = [
    {
      href: "/to/github",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      href: "/to/linkedin",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      href: "/to/instagram",
      label: "Instagram",
      Icon: SiInstagram,
    },
    {
      href: "/to/threads",
      label: "Threads",
      Icon: SiThreads,
    },
    {
      href: "/to/bluesky",
      label: "Bluesky",
      Icon: SiBluesky,
    },
    {
      href: "/to/x",
      label: "X",
      Icon: SiX,
    },
  ];

  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-1.5 py-2">
        <div className={`flex items-baseline gap-2`}>
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={`${href}?utm_source=jaspermayone.com&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Jasper's ${label} profile`}
              className="transition-colors duration-200 hover:!text-[#4299e1] flex items-center justify-center"
              style={{ color: textColor }}
            >
              <Icon size={15} />
            </Link>
          ))}
        </div>
        <span className="text-xs" style={{ color: textColor }}>
          | Not made by a 🤖 |
        </span>

        <p className="text-xs" style={{ color: textColor }}>
          © {currentYear || "2025"} Jasper Mayone |
        </p>

        <div>
          <CommitHash color={color} />
        </div>
      </div>
    </footer>
  );
}
