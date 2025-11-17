"use client";
import ConfettiWrapper from "@/components/ConfettiWrapper";
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import RoundedImage from "@/components/RoundedImage";
import JmDark from "@public/images/jmdark-min.webp";
import JmLight from "@public/images/jmlite-min.webp";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen min-w-screen mx-auto flex flex-col">
      <MENU pageFirstWord="Jasper" pageSecondWord="Mayone" />
      <main className="flex-1">
        <ConfettiWrapper />
        <div className="flex flex-col md:flex-row gap-8 mx-5 mt-5 mb-5">
          <div className="w-64 flex-shrink-0 mt-8 mx-auto md:mx-0 md:self-start">
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
                  is a 19-year-old college student from rural Vermont, currently
                  residing in Boston.
                </span>
              </p>
              <p className="text-gray-600 dark:text-white/70 text-sm">
                A computer science major at{" "}
                <Link
                  className="lnk"
                  href="https://wit.edu?utm_source=jaspermayone.com&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wentworth Institute of Technology
                </Link>{" "}
                in Boston, Massachusetts. When not in school or at work,
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
                Recently they've been focusing their time (outside of their
                degree) on{" "}
                <Link
                  className="lnk"
                  href="https://patchworklabs.org?utm_source=jaspermayone.com&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="patchworklabs.org"
                >
                  Patchwork Labs
                </Link>
                , a nonprofit they started with the mission to bring back
                creativity and support the next generation of makers.
              </p>

              <p className="text-gray-600 dark:text-white/70 text-sm">
                Previously, Jasper's adventures included working at{" "}
                <Link
                  className="lnk"
                  href="https://mlh.io/?utm_source=jaspermayone.com&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MLH
                </Link>{" "}
                as the Summer 2025 engineering intern, a month-long trip to
                Rwanda, where they filmed a documentary and managed production
                for their fellow students' films. They also played a key role in
                the Waitsfield Elementary PTA's Annual Ski & Skate sale,
                co-coordinated large scale climate conferences called “See
                Change Sessions” with thousands of attendees, and enjoyed
                concerts by AJR, Sammy Rae & the Friends, and Lake Street Dive.
              </p>
            </div>
          </div>
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
