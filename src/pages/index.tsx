import Email from "@/components/email";
import Experience from "@/components/experience";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 1.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <div className="bg-white rounded-lg shadow-lg p-9 md:w-[70rem] w-96 space-y-3 mt-12 mb-12">
            <Header />
            <div className="flex justify-center">
              <Image
                src="/valley.png"
                width={1000}
                height={500}
                alt="Jasper Mayone"
                className="rounded-lg"
                style={{ border: "0.5px solid #e5e7eb" }}
              />
            </div>
          <br></br>
            <p className="font-medium text-2xl">
              Jasper Mayone{" "} (he/they)
              <span className="text-gray-500 font-normal">
                is a 17-year-old high school student from Vermont. They are a circus
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
                .
              </span>
            </p>
            <p className="text-gray-400 text-sm pt-9">
              A circus artist and a native Vermonter, Jasper is a high school graduate from the class of 2024! 
              Graduating a full year early, they are currently taking a gap year to explore. 
              Jasper tries to live by the quote “We’ve all got both light and dark inside us. 
              What matters is the part we choose to act on...that’s who we really are.” from one of their favorite books, Harry Potter. 
              Jasper’s hobbies include reading, being in the great outdoors, photography, computer programming, cooking, 
              and running away to join the circus.
            </p>
            <div className="py-5" />
            <Experience />
            <div className="py-5" />
            <Email />
            {/* <br></br> */}
            <br></br>
            <p className="text-gray-400 text-sm">
              Made by{" "}
              <Link className="underline" href="https://github.com/aramshiva/website">
                Aram
              </Link>.{" "}
              <Link className="underline" href="https://github.com/jaspermayone/website">
                Open Source
              </Link>.{" "}
              Site design inspired by{" "}
              <Link className="underline" href="https://tobyb.dev">
                tobyb.dev
              </Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
