import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

import DotsBackground from "@/components/DotsBackground";
import styles from "@/styles/Home.module.css";
import Experience from "@/components/experience";
import Email from "@/components/email";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(16px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ type: "spring", duration: 1.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <div className={styles.container}>
        <DotsBackground />
        <div className={styles.top}>
          <h1 className={styles.title}>Jasper Mayone</h1>
          <div className={styles.menu}>
            <p>Portfolio</p>
            <p>Resume</p>
            <p>Photos</p>
            <p>@jasperdoescircus</p>
          </div>
        </div>
        <div className={styles.contentBox}>
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
            graduate from the class of 2024! Graduating a full year early, they
            are currently taking a gap year to explore. Jasper tries to live by
            the quote “We’ve all got both light and dark inside us. What matters
            is the part we choose to act on...that’s who we really are.” from
            one of their favorite books, Harry Potter. Jasper’s hobbies include
            reading, being in the great outdoors, photography, computer
            programming, cooking, and running away to join the circus.
          </p>
          <div className="py-5" />
          <Email />
        </div>
      </div>
    </motion.div>
  );
}
