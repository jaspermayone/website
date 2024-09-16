import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Email from "@/components/email";
import DotsBackground from "@/components/DotsBackground";
import styles from "@/styles/Home.module.css";
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
    "Portfolio & Resume",
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
      "background: #222; color: #bada55"
    );
  }, []);

  const renderContent = () => {
    switch (selectedTab) {
      case "Homepage":
        return (
          <>
            <p className="font-medium text-xl">
              Jasper Mayone (<i>he/they</i>){" "}
              <span className="text-gray-500 font-normal">
                is a 17-year-old high school student from Vermont. They are a
                circus performer, a{" "}
                <Link
                  className="underline"
                  href="https://github.com/jaspermayone"
                >
                  coder
                </Link>
                , and a{" "}
                <Link href="/photos" className="underline">
                  photographer
                </Link>
                .
              </span>
            </p>
            <p className="text-gray-400 text-sm pt-9">
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
      case "Portfolio & Resume":
        return (
          <>
            <p className="text-gray-500 text-sm pt-9">
              <i> Content coming soon.</i>
            </p>
          </>
        );
      case "Photos":
        return (
          <>
            <p className="text-gray-500 text-sm pt-9">
              <i> Content coming soon.</i>
            </p>
          </>
        );
      case "@jasperdoescircus":
        return (
          <>
            <p className="text-gray-500 text-sm pt-9">
              <i> Content coming soon.</i>
            </p>
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
        <DotsBackground />
        <div className={styles.top}>
          <h1 className={styles.title}>Jasper Mayone</h1>
          <div className={styles.menuContainer}>
            <div className={styles.menu}>
              {menuItems.map((item) => (
                <p
                  key={item}
                  className={`${styles.menuItem} ${
                    item === selectedTab ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className={styles.menu2}>
              <Link href="https://www.instagram.com/jasper.mayone/">
                <SiInstagram width={20} height={20} />
              </Link>
              <Link href="https://x.com/jaspermayone">
                <SiX width={20} height={20} />
              </Link>
              <Link href="https://github.com/jaspermayone/">
                <SiGithub width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/jaspermayone/">
                <SiLinkedin width={20} height={20} />
              </Link>
              <Link href="https://dev.to/jaspermayone">
                <SiDevdotto width={20} height={20} />
              </Link>
              <Link href="threads.net/@jasper.mayone">
                <SiThreads width={20} height={20} />
              </Link>
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
      </div>
    </motion.div>
  );
}
