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
        className={`max-w-screen-md ${addBackground ? "rounded-full bg-[#e0eb60] px-8 py-4 shadow-md" : "px-4"}`}
        style={{ viewTransitionName: "footer" }}
      >
        {/* Webring, copyright, and social icons */}
        <div
          className="flex w-full flex-wrap items-center justify-center gap-2 py-2"
          style={{ color: textColor }}
        >
          <div className="flex items-center gap-2">
            <a
              href="https://xn--sr8hvo.ws/previous"
              rel="noopener noreferrer"
              className="text-sm leading-none transition-colors duration-200 hover:!text-[#56ba8e]"
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
            <span className="text-xs leading-none">🕸💍</span>
            <a
              href="https://xn--sr8hvo.ws/next"
              rel="noopener noreferrer"
              className="text-sm leading-none transition-colors duration-200 hover:!text-[#56ba8e]"
              style={{ color: textColor }}
              aria-label="Next site in IndieWeb Webring"
            >
              &rarr;
            </a>
          </div>
          <span
            className="hidden leading-none opacity-40 sm:inline"
            style={{ color: textColor }}
          >
            |
          </span>
          <span
            className="text-xs leading-none"
            style={{ fontFamily: "var(--font-balgin)", color: textColor }}
          >
            ©{currentYear} Jasper Mayone. Made in <i>Boston, Massachusetts</i>.
          </span>
          <span
            className="hidden leading-none opacity-40 sm:inline"
            style={{ color: textColor }}
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
