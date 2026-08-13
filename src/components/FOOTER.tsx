// components/FOOTER.tsx
"use client";
import { pageHref, pages, socialLinks } from "@/lib/defs";
import { PageItem } from "@/lib/types";
import LilHeart from "@public/images/lil-heart.png";
import { Link as TransitionLink } from "next-view-transitions";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  color?: string;
  addBackground?: boolean;
}

const sitemapGroups: {
  key: PageItem["group"];
  label: string;
  rows: string;
}[] = [
  { key: "pages", label: "pages", rows: "grid-rows-3" },
  { key: "work", label: "work", rows: "grid-rows-2" },
  { key: "identity", label: "identity", rows: "grid-rows-3" },
];

export default function FOOTER({ color, addBackground }: FooterProps) {
  const textColor = addBackground ? "#1d4321" : color || "#4a5565";
  const currentYear = new Date().getFullYear().toString();

  const sitemapPages = pages.filter((page: PageItem) => page.slug !== "home");

  return (
    <footer className="flex w-full justify-center">
      {/* Center the footer content */}
      <div
        className={
          addBackground
            ? "m-4 rounded-[28px] bg-[#e0eb60] px-8 py-4 shadow-md"
            : "px-5"
        }
        style={{ viewTransitionName: "footer" }}
      >
        <div
          className="flex flex-wrap items-start justify-center gap-x-8 gap-y-3 py-2"
          style={{ color: textColor }}
        >
          {/* Full site index, grouped; display:contents so groups and the
              meta column align as siblings in the same flex row */}
          <nav aria-label="all pages" className="contents">
            {sitemapGroups.map(({ key, label, rows }) => (
              <div key={label}>
                <span
                  className="text-[0.65rem] tracking-widest uppercase opacity-50"
                  style={{ fontFamily: "var(--font-balgin)" }}
                >
                  {label}
                </span>
                <ul className={`mt-0.5 grid grid-flow-col gap-x-8 ${rows}`}>
                  {sitemapPages
                    .filter((page: PageItem) => page.group === key)
                    .sort((a: PageItem, b: PageItem) =>
                      a.slug.localeCompare(b.slug)
                    )
                    .map((page: PageItem) => (
                      <li key={page.slug} className="py-px">
                        <TransitionLink
                          href={pageHref(page.slug)}
                          className="text-xs transition-colors duration-200 hover:!text-[#56ba8e] hover:underline hover:decoration-wavy"
                          style={{
                            fontFamily: "var(--font-balgin)",
                            color: textColor,
                          }}
                        >
                          /{page.slug}
                        </TransitionLink>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* Copyright as its own column */}
          <div>
            <span
              className="text-[0.65rem] tracking-widest uppercase opacity-50"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              meta
            </span>
            <div
              className="mt-0.5 flex flex-col gap-2 py-px text-xs leading-snug"
              style={{ fontFamily: "var(--font-balgin)", color: textColor }}
            >
              <p>
                © {currentYear}
                <br />
                Jasper Mayone
              </p>
              <p>
                Made with{" "}
                <Image
                  src={LilHeart}
                  alt="love"
                  width={14}
                  height={14}
                  className="inline-block align-[-2px]"
                />{" "}
                in
                <br />
                <i>Boston, Massachusetts</i>
              </p>
            </div>
          </div>
          {/* Social icons as their own column */}
          <div>
            <span
              className="text-[0.65rem] tracking-widest uppercase opacity-50"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              socials
            </span>
            <ul className="mt-0.5 grid grid-flow-col grid-rows-3 gap-x-2.5 gap-y-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label} className="py-px">
                  <Link
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
