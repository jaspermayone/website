"use client";
import ConfettiWrapper from "@/components/ConfettiWrapper";
import Email from "@/components/email";
import Experience from "@/components/experience";
import RoundedImage from "@/components/RoundedImage";
import SquigglyLine from "@/components/SquigglyLine";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import JmDark from "@public/images/jmdark-min.jpeg";
import JmLight from "@public/images/jmlite-min.jpeg";
import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Initialize theme
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
      setIsLightMode(mediaQuery.matches);

      // Add listener for theme changes
      const handleThemeChange = (e) => {
        setIsLightMode(e.matches);
      };

      mediaQuery.addEventListener("change", handleThemeChange);

      // Cleanup listener
      return () => {
        mediaQuery.removeEventListener("change", handleThemeChange);
      };
    }
  }, []);

  const imgpath = isLightMode ? JmDark : JmLight;

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Jasper" pageSecondWord="Mayone" />
      <main className="flex-1">
        <ConfettiWrapper />
        <div className="flex flex-col md:flex-row gap-8 mx-5 mt-5 mb-5">
          <div className="w-64 flex-shrink-0 mt-8">
            <RoundedImage
              src={imgpath}
              alt="Jasper Mayone"
              size={250}
              isPriority={true} // Add priority for above-the-fold images
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <p className="font-medium text-xl">
                Jasper Mayone [<i>he/they</i>]{" "}
                <span className="text-gray-700 dark:text-white/70 font-normal">
                  is a 18-year-old post high school graduate from rural Vermont.
                  They are a circus performer, a{" "}
                  <Link
                    className={styles.lnk}
                    href="/to/github"
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label="Link to Jasper's Github profile"
                  >
                    coder
                  </Link>
                  , and a photographer.
                </span>
              </p>
              <p className="text-gray-600 dark:text-white/70 text-sm">
                A circus artist and a native Vermonter, Jasper is currently
                pursuing a gap year after their successful completion of high
                school a full year early. Jasper tries to live by the quote
                "We've all got both light and dark inside us. What matters is
                the part we choose to act on...that's who we really are."
                Jasper's hobbies include reading, being in the great outdoors,
                photography, computer programming, cooking, and running away to
                join the circus.
              </p>
              <p className="text-gray-600 dark:text-white/70 text-sm">
                An avid organizer and big picture thinker, you can often find
                them scheming up some sort of business venture. From developing
                a small app to drafting large scale plans for a world domination
                scheme, Jasper is always looking for ways to combine their
                diverse interests and skills into enterprising projects. This
                knack for organization and leadership has opened doors for
                Jasper to take on exciting roles in various projects and
                adventures, both close to home and abroad.
              </p>
              <p className="text-gray-600 dark:text-white/70 text-sm">
                Recently, Jasper's adventures include a month-long trip to
                Rwanda, where they filmed a documentary and managed production
                for his fellow students' films. They also played a key role in
                the Waitsfield Elementary PTA's Annual Ski & Skate sale,
                co-coordinated large scale climate conferences called “See
                Change Sessions” with thousands of attendees, and enjoyed
                concerts by Sammy Rae & the Friends, AJR, and Lake Street Dive.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="md:col-span-2">
              <Experience />
            </div>
            <div className="hidden md:block w-px bg-linkHover h-full absolute left-2/3 -translate-x-1/2" />
            <div className="md:col-span-1">
              <Email />
            </div>
          </div>
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
