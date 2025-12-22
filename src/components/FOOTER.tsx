// components/FOOTER.tsx
"use client";
import { socialLinks } from "@/lib/defs";
import Link from "next/link";

interface FooterProps {
  color?: string;
  addBackground?: boolean;
}

export default function FOOTER({ color, addBackground }: FooterProps) {
  const textColor = addBackground ? "#1d4321" : color || "#4a5565";
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="flex w-full justify-center">
      {/* Constrain width and center content */}
      <div
        className="max-w-screen-md px-4"
        style={
          addBackground
            ? {
                background: "#e0eb60",
                padding: "1rem 2rem",
                borderRadius: "50px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                viewTransitionName: "footer",
              }
            : {
                viewTransitionName: "footer",
              }
        }
      >
        {/* IndieWeb Webring */}
        <div
          className="flex w-full items-center justify-center gap-2 pt-2"
          style={{ color: textColor }}
        >
          <a
            href="https://xn--sr8hvo.ws/previous"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:!text-[#56ba8e]"
            style={{ color: textColor }}
            aria-label="Previous site in IndieWeb Webring"
          >
            &larr;
          </a>
          <a
            href="https://xn--sr8hvo.ws"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200 hover:!text-[#56ba8e]"
            style={{ color: textColor, fontFamily: "var(--font-balgin)" }}
            aria-label="IndieWeb Webring"
          >
            IndieWeb Webring
          </a>
          <span>🕸💍</span>
          <a
            href="https://xn--sr8hvo.ws/next"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:!text-[#56ba8e]"
            style={{ color: textColor }}
            aria-label="Next site in IndieWeb Webring"
          >
            &rarr;
          </a>
        </div>

        {/* Copyright and social icons */}
        <div
          className="flex w-full items-baseline justify-center gap-2 py-2"
          style={{ color: textColor }}
        >
          <span
            className="text-xs leading-none"
            style={{ fontFamily: "var(--font-balgin)", color: textColor }}
          >
            ©{currentYear} Jasper Mayone. Made in <i>Boston, Massachusetts</i>.
          </span>
          <span
            className="leading-none"
            style={{ color: textColor, opacity: 0.4 }}
          >
            |
          </span>
          <div className="flex items-center gap-1.5">
            {socialLinks.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                prefetch={false}
                className="inline-flex items-center justify-center transition-colors duration-200 hover:!text-[#56ba8e]"
                style={{ color: textColor }}
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
