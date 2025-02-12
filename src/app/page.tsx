"use client";
import AnimatedTitle from "@/components/AnimatedTitle";
import Email from "@/components/email";
import Experience from "@/components/experience";
import CommitHash from "@/components/helpers/commitHash";
import MainMenu from "@/components/MainMenu";
import ProfileEmailCard from "@/components/ProfileEmailCard";
import RoundedImage from "@/components/RoundedImage";
import SquigglyLine from "@/components/SquigglyLine";
import { MenuItemType } from "@/lib/types";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";

export const metadata: Metadata = {
  title: "Jasper Mayone",
  description:
    "Jasper Mayone is a 18-year-old post high school graduate from rural Vermont. They are a circus performer, a coder, and a photographer.",
};

export default function Home() {
  const [currentYear, setCurrentYear] = useState("");
  const [selectedTab, setSelectedTab] = useState<MenuItemType>("Homepage");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());

    console.log(
      "%cCheck out the code over on github at https://github.com/jaspermayone/website. \n\nIf you're interested in circus arts, photography, or just want to chat, feel free to reach out to me at me@jaspermayone.com. \n\nI can't wait to meet you!",
      "background: #fff; color: #4299e1"
    );
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Homepage":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-top -mt-8">
              <div className="w-64 flex-shrink-0">
                <RoundedImage
                  src="/images/jmdark-min.jpg"
                  alt="Jasper Mayone"
                  size={250}
                />
                <ProfileEmailCard email="me@jaspermayone.com" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="font-medium text-xl">
                    Jasper Mayone [<i>he/they</i>]{" "}
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
                    A circus artist and a native Vermonter, Jasper is currently
                    pursuing a gap year after their successful completion of
                    high school a full year early. Jasper tries to live by the
                    quote "We've all got both light and dark inside us. What
                    matters is the part we choose to act on...that's who we
                    really are." Jasper's hobbies include reading, being in the
                    great outdoors, photography, computer programming, cooking,
                    and running away to join the circus.
                  </p>
                  <p className="text-gray-600 text-sm">
                    An avid organizer and big picture thinker, you can often
                    find them scheming up some sort of business venture. From
                    developing a small app to drafting large scale plans for a
                    world domination scheme, Jasper is always looking for ways
                    to combine their diverse interests and skills into
                    enterprising projects. This knack for organization and
                    leadership has opened doors for Jasper to take on exciting
                    roles in various projects and adventures, both close to home
                    and abroad.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Recently, Jasper's adventures include a month-long trip to
                    Rwanda, where they filmed a documentary and managed
                    production for his fellow students' films. They also played
                    a key role in the Waitsfield Elementary PTA's Annual Ski &
                    Skate sale, co-coordinated large scale climate conferences
                    called “See Change Sessions” with thousands of attendees,
                    and enjoyed concerts by Sammy Rae & the Friends, AJR, and
                    Lake Street Dive.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2.5" />
            <SquigglyLine
              frequency={50}
              amplitude={0.4}
              className="min-w-screen"
              color="#4299e1"
            />
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="md:col-span-2">
                  <Experience />
                </div>
                <div className="hidden md:block w-px bg-slate-600 h-full absolute left-2/3 -translate-x-1/2" />
                <div className="md:col-span-1">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>
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
          <MainMenu selectedTab={selectedTab} onMenuClick={setSelectedTab} />
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
              © 2024-{currentYear || "2025"} Jasper Mayone
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
            <span className="text-xs ml-1.5">
              Verify my identity{" "}
              <Link
                className="underline decoration-wavy text-blurre hover:text-linkHover transition-colors duration-300 ease-in-out"
                href="/verify"
              >
                here
              </Link>
            </span>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
