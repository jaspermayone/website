import { menuItems } from "@/lib/defs";
import { MenuItemType } from "@/lib/types";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from "react-icons/si";

interface MainMenuProps {
  selectedTab: MenuItemType;
  onMenuClick: (tab: MenuItemType) => void;
}

const MainMenu = ({ selectedTab, onMenuClick }: MainMenuProps) => {
  const router = useRouter();

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

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMenuClick = async (item: MenuItemType) => {
    // Special cases that shouldn't trigger navigation or state updates
    if (item === "Resume") {
      handleDownload(new MouseEvent("click") as unknown as React.MouseEvent);
      return; // Exit early without updating state
    }

    // For other cases, update state and handle navigation
    onMenuClick(item);

    if (item === "Portfolio") {
      router.push("/portfolio");
    } else if (item === "Verify") {
      router.push("/verify");
    } else if (item === "Homepage") {
      router.push("/");
    }
  };

  const socialLinks = [
    {
      href: "https://github.jaspermayone.com",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      href: "https:/linkedin.jaspermayone.com",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      href: "https://instagram.jaspermayone.com",
      label: "Instagram",
      Icon: SiInstagram,
    },
    {
      href: "https://threads.jaspermayone.com",
      label: "Threads",
      Icon: SiThreads,
    },
    {
      href: "https://bluesky.jaspermayone.com",
      label: "Bluesky",
      Icon: SiBluesky,
    },
    {
      href: "https://x.jaspermayone.com",
      label: "X",
      Icon: SiX,
    },
  ];

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu} aria-label="main menu">
        {menuItems.map((item) => (
          <p
            key={item}
            className={`${styles.menuItem} ${
              item === selectedTab ? styles.selected : ""
            }`}
            onClick={() => handleMenuClick(item)}
            title={`Go to ${item}`}
          >
            {item}
          </p>
        ))}
      </div>
      <div className={styles.menu2}>
        <div className="flex items-center justify-center">
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Jasper's ${label} profile`}
              className="mx-1 transition-colors duration-200 hover:text-[#4299e1]"
            >
              <Icon width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
