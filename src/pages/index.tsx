import Email from "@/components/email";
import Experience from "@/components/experience";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(16px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", duration: 1.5 }}
        className="flex justify-center items-center min-h-screen pb-9"
      >
        <div className="md:pt-20 pt-9 space-y-3 text-wrap md:w-[50rem] w-72">
          <Header />
          <Image
            src="/valley.png"
            width={1000}
            height={500}
            alt="Jasper Mayone"
            className="rounded-lg"
          />
          <p className="font-medium text-2xl">
            Jasper Mayone{" "}
            <span className="text-gray-500 font-normal">
              is a 17-year-old high school student from Vermont. He is a circus
              performer, a{" "}
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
              .{"  "}—{"  "}
              He currently works at Hack Club where he is taking an gap year.
            </span>
          </p>
          <p className="text-gray-400 text-sm pt-9">
            Introduced to Hack Club through the circus, and a native vermonter,
            Jasper is currently a Junior in high school, on track for graduating
            a full year early! While in high school, Jasper led a Hack Club at
            his school. Jasper tries to live by the quote “We’ve all got both
            light and dark inside us. What matters is the part we choose to act
            on...that’s who we really are.” from one of his favorite books,
            Harry Potter. Jasper’s hobbies include reading, being in the great
            outdoors, photography, computer programming, cooking, and running
            away to join the circus.
          </p>
          <div className="py-5" />
          <Experience />
          <div className="py-5" />
          <Email />
          <div className="pt-9">
          <p className="text-gray-400 text-sm">Made by <Link className="underline" href="https://github.com/aramshiva/website">Aram</Link>. <Link className="underline" href="https://github.com/jaspermayone/website">Open Source</Link></p>
        </div>
        </div>
      </motion.div>
    </>
  );
}
