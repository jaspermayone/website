// components/PageNavigation.tsx
"use client";

import { pages, socialLinks } from "@/lib/defs";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface PageNavigationProps {
  color?: string;
}

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

    // Normalize trailing slash (e.g., "/keys/gpg/" → "/keys/gpg")
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

  const handleMenuClick = async (item: string) => {
    if (item === "cv") {
      router.push("/to/cv");
    } else if (item === "home") {
      router.push("/");
    } else if (item === "gpg") {
      router.push("/keys/gpg");
    } else if (item === "ssh") {
      router.push("/keys/ssh");
    } else {
      router.push(`/${item}`);
    }
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles.menu} flex items-center`}
        aria-label="main menu"
      >
        {pages.map((item) => (
          <div
            key={item}
            className={`${styles.menuItemContainer} flex items-center`}
          >
            <p
              className={`${styles.menuItem} ${item === selectedTab ? "lnk" : ""} hover:!text-[#56ba8e] cursor-pointer flex items-center`}
              onClick={() => handleMenuClick(item)}
              title={`Go to ${item}`}
              style={item === selectedTab ? {} : { color: textColor }}
            >
              /{item}
            </p>
          </div>
        ))}
        <div className="flex-grow" />

        <div className={`flex items-baseline gap-2 -mt-0.5`}>
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={`${href}?utm_source=jaspermayone.com&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}`}
              className="transition-colors duration-200 hover:!text-[#56ba8e] flex items-center justify-center"
              style={{ color: textColor }}
            >
              <Icon size={15} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
