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

  const handleMenuClick = async (item: string) => {
    onMenuClick(item);

    if (item === "cv") {
      router.push("/to/cv");
    } else if (item === "portfolio") {
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
      <div className={styles.menu2}>
        <div className="flex items-center justify-center">
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={`${href}?utm_source=jaspermayone.com&utm_medium=referral`}
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
