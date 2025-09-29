"use client";

import { pages } from "@/lib/defs";
import styles from "@/styles/Home.module.css";
import { usePathname, useRouter } from "next/navigation";

interface PageNavigationProps {
  color?: string;
}

export default function PageNavigation(props: PageNavigationProps) {
  const { color } = props;
  const router = useRouter();
  const pathname = usePathname();

  const textColor = color || "inherit";

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
              className={`${styles.menuItem} ${item === selectedTab ? "lnk" : ""} hover:!text-[#4299e1] cursor-pointer flex items-center`}
              onClick={() => handleMenuClick(item)}
              title={`Go to ${item}`}
              style={item === selectedTab ? {} : { color: textColor }}
            >
              /{item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
