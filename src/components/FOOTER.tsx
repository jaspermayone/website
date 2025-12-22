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
        {/* Social icons row */}
        <div className="flex w-full items-center justify-center gap-1.5 overflow-x-hidden pt-2">
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
              <Icon size={16} />
            </Link>
          ))}
        </div>

        {/* Copyright line */}
        <div
          className="flex w-full items-center justify-center py-2"
          style={{ color: textColor }}
        >
          <p
            className="text-center text-xs leading-relaxed break-words"
            style={{ fontFamily: "var(--font-balgin)", color: textColor }}
          >
            ©{currentYear} Jasper Mayone. Made in <i>Boston, Massachusetts</i>.
          </p>
        </div>
      </div>
    </footer>
  );
}
