"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Email from "@/components/email";
import styles from "@/styles/Home.module.css";
import CommitHash from "@/components/helpers/commitHash";
import SquigglyLine from "@/components/SquigglyLine";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
  SiBluesky,
} from "react-icons/si";
import RoundedImage from "@/components/RoundedImage";
import Experience from "@/components/experience";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Homepage");
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());

    console.log(
      "%cCheck out the code over on github at https://github.com/jaspermayone/website. \n\nIf you're interested in circus arts, photography, or just want to chat, feel free to reach out to me at me@jaspermayone.com. \n\nI can't wait to meet you!",
      "background: #fff; color: #4299e1",
    );
  }, []);

  const menuItems = ["Homepage", "Resume", "Portfolio", "@jasperdoescircus"];

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jasper Mayone's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMenuClick = (item) => {
    if (item === "Resume") {
      handleDownload(new Event("click"));
    } else if (item === "@jasperdoescircus") {
      handleExternalLink("https://www.instagram.com/jasper.does.circus/");
    } else {
      setSelectedTab(item);
    }
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Homepage":
        return (
          <>
            <div className="flex flex-col md:flex-row gap-8 items-center -mt-8">
              <div className="w-64 flex-shrink-0">
                <RoundedImage
                  src="/images/jmdark-min.jpg"
                  alt="Jasper Mayone"
                  size={250}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="font-medium text-xl">
                    Jasper Mayone (<i>he/they</i>){" "}
                    <span className="text-gray-700 font-normal">
                      is a 18-year-old post high school graduate from rural
                      Vermont. They are a circus performer, a{" "}
                      <Link
                        className={styles.lnk}
                        href="https://github.com/jaspermayone"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link to Jasper's Github profile"
                      >
                        coder
                      </Link>
                      , and a photographer.
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    A circus artist and a native Vermonter, Jasper is a high
                    school graduate from the class of 2024! Having completed
                    high school in just 3 years, they are currently taking a gap
                    year to explore. Jasper tries to live by the quote "We've
                    all got both light and dark inside us. What matters is the
                    part we choose to act on...that's who we really are." from
                    one of their favorite books, Harry Potter. Jasper's hobbies
                    include reading, being in the great outdoors, photography,
                    computer programming, cooking, and running away to join the
                    circus.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2.5" />
            <SquigglyLine
              width="104%"
              frequency={175}
              amplitude={1}
              className="-ml-10"
            />
            <div className="py-1.5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
              <Experience />
              <Email />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <div className={styles.container}>
        <div className={styles.top}>
          <AnimatedTitle />
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
                {[
                  {
                    href: "https://github.com/jaspermayone/",
                    label: "GitHub",
                    Icon: SiGithub,
                  },
                  {
                    href: "https://www.linkedin.com/in/jaspermayone/",
                    label: "LinkedIn",
                    Icon: SiLinkedin,
                  },
                  {
                    href: "https://www.instagram.com/jasper.mayone/",
                    label: "Instagram",
                    Icon: SiInstagram,
                  },
                  {
                    href: "https://threads.net/@jasper.mayone",
                    label: "Threads",
                    Icon: SiThreads,
                  },
                  {
                    href: "https://bsky.app/profile/jaspermayone.com",
                    label: "Bluesky",
                    Icon: SiBluesky,
                  },
                  {
                    href: "https://x.com/jaspermayone",
                    label: "X",
                    Icon: SiX,
                  },
                ].map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Jasper's ${label} profile`}
                    className="mx-1 transition-colors duration-200 hover:text-blue-600"
                  >
                    <Icon width={20} height={20} />
                  </Link>
                ))}
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
        <footer className="flex flex-col items-center mb-3.5 -mt-4">
          <div className="flex items-center justify-center">
            <p className="text-xs mr-1.5">
              © {currentYear || "2024"} Jasper Mayone
            </p>
            <div className="hidden md:block">
              <CommitHash />
            </div>
            <p className="text-xs mr-1.5 hidden md:block">.</p>
            <span className="text-xs">
              <Link
                className={styles.footerLink}
                href="https://github.com/jaspermayone/website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository for Jasper's Website"
              >
                <SiGithub />
              </Link>
            </span>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
