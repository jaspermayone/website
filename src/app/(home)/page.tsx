"use client";
import ConfettiWrapper from "@/components/ConfettiWrapper";
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import RoundedImage from "@/components/RoundedImage";
import { age } from "@/lib/defs";
import JmDark from "@public/images/jmdark-min.webp";
import JmLight from "@public/images/jmlite-min.webp";
import Link from "next/link";
import { useSyncExternalStore } from "react";

// Subscribe function for useSyncExternalStore
function subscribeToLightMode(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

// Get current snapshot for client
function getLightModeSnapshot() {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

// Get snapshot for server-side rendering
function getLightModeServerSnapshot() {
  return false;
}

export default function Home() {
  const isLightMode = useSyncExternalStore(
    subscribeToLightMode,
    getLightModeSnapshot,
    getLightModeServerSnapshot
  );

  const imgpath = isLightMode ? JmDark : JmLight;

  return (
    <div className="mx-auto flex min-h-screen min-w-screen flex-col">
      <MENU pageFirstWord="Jasper" pageSecondWord="Mayone" />
      <main className="flex-1">
        <ConfettiWrapper />
        <div className="mx-5 mt-5 mb-5 flex flex-col gap-8 md:flex-row">
          <div className="mx-auto mt-8 w-64 shrink-0 overflow-hidden md:mx-0 md:self-start">
            <RoundedImage
              src={imgpath}
              alt="Jasper Mayone"
              size={250}
              isPriority={true} // Add priority for above-the-fold images
              transitionName="profile-image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <p className="text-xl font-medium">
                <span style={{ fontFamily: "var(--font-balgin)" }}>
                  Jasper Mayone [<i>he/they</i>]
                </span>{" "}
                <span className="font-normal text-gray-700 dark:text-white/70">
                  is a {age}-year-old college student from rural Vermont,
                  currently residing in Boston.
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70">
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
              <p className="text-sm text-gray-600 dark:text-white/70">
                An avid organizer and big picture thinker, you can often find
                them scheming up some sort of business venture. From developing
                a small app to drafting large scale plans for a world domination
                scheme, Jasper is always looking for ways to combine their
                diverse interests and skills into enterprising projects. This
                knack for organization and leadership has opened doors for
                Jasper to take on exciting roles in various projects and
                adventures, both close to home and abroad.
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70">
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

              <p className="text-sm text-gray-600 dark:text-white/70">
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
