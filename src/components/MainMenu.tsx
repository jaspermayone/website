import { pages } from "@/lib/defs";
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
  selectedTab: string;
  onMenuClick: (tab: string) => void;
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

  const handleMenuClick = async (item: string) => {
    // Special cases that shouldn't trigger navigation or state updates
    if (item === "resume") {
      handleDownload(new MouseEvent("click") as unknown as React.MouseEvent);
      return; // Exit early without updating state
    }

    // For other cases, update state and handle navigation
    onMenuClick(item);

    if (item === "portfolio") {
      router.push("/portfolio");
    } else if (item === "verify") {
      router.push("/verify");
    } else if (item === "home") {
      router.push("/");
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
          <p
            key={item}
            className={`${styles.menuItem} ${
              item === selectedTab ? styles.selected : ""
            }`}
            onClick={() => handleMenuClick(item)}
            title={`Go to ${item}`}
          >
            /{item}
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
