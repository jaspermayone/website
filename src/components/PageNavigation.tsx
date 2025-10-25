// src/components/PageNavigation.tsx
"use client";

import { pages } from "@/lib/defs";
import { PageItem } from "@/lib/types";
import styles from "@/styles/Home.module.css";
import { usePathname, useRouter } from "next/navigation";

interface PageNavigationProps {
  color?: string;
}

// Centralized route map for aliases and nested routes
const ROUTE_MAP: Record<string, string> = {
  home: "/",
  cv: "/to/cv",
  gpg: "/keys/gpg",
  ssh: "/keys/ssh",
  // Add any other explicit aliases here
};

export default function PageNavigation(props: PageNavigationProps) {
  const { color } = props;
  const router = useRouter();
  const pathname = usePathname();

  const textColor = color || "inherit";

  /**
   * Determine the selected tab based on the current path.
   * Handles nested routes like /keys/gpg and /keys/ssh by mapping them to "gpg"/"ssh".
   * Also normalizes trailing slashes.
   */
  const getSelectedTab = () => {
    if (!pathname) return undefined;

    // Normalize trailing slash
    const normalized = pathname.replace(/\/+$/, "");

    if (normalized === "/" || normalized === "") return "home";

    // Special-case nested keys pages
    if (normalized.startsWith("/keys/gpg")) return "gpg";
    if (normalized.startsWith("/keys/ssh")) return "ssh";

    // Handle redirects or alias routes if needed (example: /to/cv → cv)
    if (normalized.startsWith("/to/cv")) return "cv";

    // Default: first segment after /
    const firstSegment = normalized.split("/")[1];
    return firstSegment || "home";
  };

  const selectedTab = getSelectedTab();

  /**
   * Normalize a menu item into the canonical key used for navigation.
   * This ensures items like "keys/gpg" are treated as "gpg".
   */
  const normalizeItem = (item: string): string => {
    if (!item) return "home";
    // strip leading slashes
    const trimmed = item.replace(/^\/+/, "");
    // map nested keys to leaf tabs
    if (trimmed.startsWith("keys/gpg")) return "gpg";
    if (trimmed.startsWith("keys/ssh")) return "ssh";
    if (trimmed.startsWith("to/cv")) return "cv";
    // default to first segment
    const seg = trimmed.split("/")[0];
    return seg || "home";
  };

  const handleMenuClick = async (rawItem: string) => {
    const item = normalizeItem(rawItem);

    // Prefer explicit mapping when present
    const mapped = ROUTE_MAP[item];

    // Determine the href we will push to
    const href =
      typeof mapped === "string" && mapped.length > 0 ? mapped : `/${item}`;

    // Final validation: ensure href is a non-empty string and starts with '/'
    if (
      typeof href !== "string" ||
      href.length === 0 ||
      !href.startsWith("/")
    ) {
      // Log detailed info to help debug the offending item
      console.error("Invalid route for menu click", {
        rawItem,
        normalizedItem: item,
        mapped,
        href,
      });
      return; // Avoid calling router.push with an invalid value
    }

    try {
      await router.push(href);
    } catch (err) {
      // Network or Next router errors (e.g., middleware fetch failures)
      console.error("router.push failed", { href, error: err });
    }
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles.menu} flex items-center`}
        aria-label="main menu"
      >
        {pages
          .filter((item: PageItem) => item.showInNav)
          .sort((a: PageItem, b: PageItem) => a.order - b.order)
          .map((item: PageItem) => (
            <div
              key={item.slug}
              className={`${styles.menuItemContainer} flex items-center`}
            >
              <p
                className={`${styles.menuItem} ${item.slug === selectedTab ? "lnk" : ""} hover:!text-[#56ba8e] cursor-pointer flex items-center`}
                onClick={() => handleMenuClick(item.slug)}
                title={`Go to ${item.slug}`}
                style={item.slug === selectedTab ? {} : { color: textColor }}
              >
                /{item.slug}
              </p>
            </div>
          ))}
        <div
          key={"more"}
          className={`${styles.menuItemContainer} flex items-center`}
        >
          <p
            className={`${styles.menuItem} ${"more" === selectedTab ? "lnk" : ""} hover:!text-[#56ba8e] cursor-pointer flex items-center`}
            onClick={() => handleMenuClick("more")}
            title={`see more pages`}
            style={"more" === selectedTab ? {} : { color: textColor }}
          >
            /more
          </p>
        </div>
      </div>
    </div>
  );
}
