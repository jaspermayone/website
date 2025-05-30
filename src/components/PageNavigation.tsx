"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { pages } from "@/lib/defs";
import styles from "@/styles/Home.module.css";
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from "react-icons/si";

export default function PageNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  // Determine the selected tab based on the current path
  const getSelectedTab = () => {
    if (pathname === "/") return "home";
    return pathname.substring(1); // Remove the leading slash
  };

  const selectedTab = getSelectedTab();

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.rel = "me";
    link.download = "Jasper Mayone's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMenuClick = async (item: string) => {
    // Special cases that shouldn't trigger navigation or state updates
    if (item === "resume") {
      handleDownload(new MouseEvent("click") as unknown as React.MouseEvent);
      return;
    }

    // For other cases, handle navigation
    if (item === "portfolio") {
      router.push("/portfolio");
    } else if (item === "verify") {
      router.push("/verify");
    } else if (item === "home") {
      router.push("/");
    } else {
      router.push(`/${item}`);
    }
  };

  const socialLinks = [
    {
      href: "/github",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      href: "/linkedin",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      href: "/instagram",
      label: "Instagram",
      Icon: SiInstagram,
    },
    {
      href: "/threads",
      label: "Threads",
      Icon: SiThreads,
    },
    {
      href: "/bluesky",
      label: "Bluesky",
      Icon: SiBluesky,
    },
    {
      href: "/x",
      label: "X",
      Icon: SiX,
    },
  ];

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu} aria-label="main menu">
        {pages.map((item) => (
          <div key={item} className={styles.menuItemContainer}>
            <p
              className={styles.menuItem}
              onClick={() => handleMenuClick(item)}
              title={`Go to ${item}`}
            >
              /{item}
            </p>
            {item === selectedTab && <div className={styles.activeIndicator} />}
          </div>
        ))}
      </div>
      <div className={`${styles.menu2} flex items-center`}>
        {socialLinks.map(({ href, label, Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Jasper's ${label} profile`}
            className="mx-1 transition-colors duration-200 hover:text-[#4299e1] flex items-center"
          >
            <Icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
