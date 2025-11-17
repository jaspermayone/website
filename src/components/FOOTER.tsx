// components/FOOTER.tsx
"use client";
import { socialLinks } from "@/lib/defs";
import Link from "next/link";

interface FooterProps {
  color?: string;
}

export default function FOOTER({ color }: FooterProps) {
  const textColor = color || "#4a5565";
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="w-full">
      {/* Constrain width and center content */}
      <div className="max-w-screen-md mx-auto px-4">
        {/* Social icons row */}
        <div className="flex w-full items-center justify-center gap-1.5 pt-2 overflow-x-hidden">
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={`${href}?utm_source=jaspermayone.com&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200 hover:!text-[#56ba8e] inline-flex items-center justify-center"
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
            className="text-xs text-center leading-relaxed break-words"
            style={{ color: textColor }}
          >
            ©{currentYear} Jasper Mayone. Made with &lt;3 in{" "}
            <i>Boston, Massachusetts</i>.
          </p>
        </div>
      </div>
    </footer>
  );
}
