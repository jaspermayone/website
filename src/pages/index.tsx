import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Email from "@/components/email";
import DotsBackground from "@/components/DotsBackground";
import styles from "@/styles/Home.module.css";
import CommitHash from "@/components/helpers/commitHash";
import {
  SiDevdotto,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from "react-icons/si";

/* Reference https://nextjs.org/learn/dashboard-app/adding-metadata when adding new metadata. */

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Homepage");

  const menuItems = [
    "Homepage",
    "Portfolio",
    "Resume",
    "Photos",
    "@jasperdoescircus",
  ];

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    console.log(
      "%cWOWY! A real life developer or code enthusiast? I'm so glad you're here! \nI'm GitHub at @jaspermayone! \nIf you're interested in circus arts, photography, or just want to chat, feel free to reach out to me at me@jaspermayone.com. \nI can't wait to meet you!",
      "background: #222; color: #bada55",
    );
  }, []);

  const renderContent = () => {
    switch (selectedTab) {
      case "Homepage":
        return (
          <>
            <p className="font-medium text-xl">
              Jasper Mayone (<i>he/they</i>){" "}
              <span className="text-gray-700 font-normal">
                is a 17-year-old high school student from Vermont. They are a
                circus performer, a{" "}
                <Link
                  className="underline"
                  href="https://github.com/jaspermayone"
                  aria-label="Link to Jasper's Github profile"
                  title="View Jasper's GitHub profile"
                >
                  coder
                </Link>
                , and a{" "}
                <Link
                  href="/photos"
                  className="underline"
                  aria-label="Link to Jasper's photography page."
                  title="View Jasper's photography"
                >
                  photographer
                </Link>
                .
              </span>
            </p>
            <p
              className="text-gray-600 text-sm pt-9"
              aria-label="Main bio text"
              title="Jasper's biography"
            >
              A circus artist and a native Vermonter, Jasper is a high school
              graduate from the class of 2024! Graduating a full year early,
              they are currently taking a gap year to explore. Jasper tries to
              live by the quote “We’ve all got both light and dark inside us.
              What matters is the part we choose to act on...that’s who we
              really are.” from one of their favorite books, Harry Potter.
              Jasper’s hobbies include reading, being in the great outdoors,
              photography, computer programming, cooking, and running away to
              join the circus.
            </p>
            <div className="py-5" />
            <Email />
          </>
        );
      case "Portfolio":
        return (
          <>
            <p className="text-gray-500 text-sm pt-9" title="Portfolio section">
              <i> Content coming soon.</i>
            </p>
          </>
        );
      case "Photos":
        return (
          <>
            <p className="text-gray-500 text-sm pt-9" title="Photos section">
              <i> Content coming soon.</i>
            </p>
          </>
        );
      case "@jasperdoescircus":
        return (
          <>
            <p className="text-gray-500 text-sm pt-9" title="Circus section">
              <i> Content coming soon.</i>
            </p>
          </>
        );
      default:
        return null;
    }
  };

  const handleMenuClick = (item: any) => {
    if (item === "Resume") {
      // Trigger the file download directly
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Path to your file
      link.download = "Jasper Mayone's Resume.pdf"; // File name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setSelectedTab(item);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <DotsBackground />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title} title="Jasper Mayone's website">
            Jasper Mayone
          </h1>
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
                <Link
                  href="https://www.instagram.com/jasper.mayone/"
                  aria-label="Jasper's Instagram profile"
                  title="@jasper.mayone on Instagram"
                  className="mx-1" // Added margin to the left and right
                >
                  <SiInstagram width={20} height={20} />
                </Link>
                <Link
                  href="https://x.com/jaspermayone"
                  aria-label="Jasper's X (Twitter) profile"
                  title="@jaspermayone on X (formerly Twitter)"
                  className="mx-1" // Added margin to the left and right
                >
                  <SiX width={20} height={20} />
                </Link>
                <Link
                  href="https://github.com/jaspermayone/"
                  aria-label="Jasper's Github profile"
                  title="@jaspermayone on GitHub"
                  className="mx-1" // Added margin to the left and right
                >
                  <SiGithub width={20} height={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jaspermayone/"
                  aria-label="Jasper's Linkedin profile"
                  title="Jasper Mayone on LinkedIn"
                  className="mx-1" // Added margin to the left and right
                >
                  <SiLinkedin width={20} height={20} />
                </Link>
                <Link
                  href="https://dev.to/jaspermayone"
                  aria-label="Jasper's Dev.to profile"
                  title="Jasper Mayone on Dev.to"
                  className="mx-1" // Added margin to the left and right
                >
                  <SiDevdotto width={20} height={20} />
                </Link>
                <Link
                  href="https://threads.net/@jasper.mayone"
                  aria-label="Jasper's Threads profile"
                  title="@jasper.mayone on Threads"
                  className="mx-1" // Added margin to the left and right
                >
                  <SiThreads width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentBox}>
          <motion.div
            key={selectedTab}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              opacity: { duration: 0.5 },
              filter: { duration: 0.5 },
            }}
          >
            {renderContent()}
          </motion.div>
        </div>
        <footer
          className="footer flex flex-col items-center mb-3.5"
          aria-label="footer"
          title="Page footer"
        >
          <div className="flex items-center justify-center">
            <p className="text-xs mr-1.5">
              <i className="fa-regular fa-copyright"></i>{" "}
              {new Date().getFullYear()} Jasper Mayone
            </p>
            <i className="fa-solid fa-code-branch fa-xs mr-1.5 mt-0.5"></i>
            <CommitHash />
            <p className="text-xs mr-1.5">. </p>
            <i className="fa-solid fa-brush fa-xs mr-1.5 mt-0.5"></i>{" "}
            <span className="text-xs">
              Made with{" "}
              <i
                className="fa-solid fa-heart mt-0.5"
                style={{ color: "#ee4444" }}
              ></i>{" "}
              by Jasper Mayone &amp;{" "}
              <Link
                className={styles.footerLink}
                href="/friends"
                aria-label="redirect to /friends page"
                title="Go to Friends page"
              >
                Friends.
              </Link>{" "}
              Open Source on{" "}
              <a
                className={styles.footerLink}
                href="https://github.com/jaspermayone/website"
                aria-label="GitHub Repository for Jasper's Website"
                title="GitHub repository"
              >
                GitHub
              </a>
              .
            </span>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
