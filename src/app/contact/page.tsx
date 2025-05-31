import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";
import SquigglyLine from "@/components/SquigglyLine";
import styles from "@/styles/Home.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch with me.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Contact" />
      <main className="flex-1">
        <div className="mx-5 mt-4 mb-4">
          <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Get in Touch
          </h1>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-white/70">
              You can email me at me [at] jaspermayone [dot] com
            </p>
            <p className="text-gray-600 dark:text-white/70">
              I can also be reached on Signal at{" "}
              <a
                className={styles.lnk}
                href="https://signal.me/#eu/jaspermayone.10"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jaspermayone.10
              </a>
            </p>
            <p className="text-gray-600 dark:text-white/70">
              Want my phone number? Let's be friends first! I promise I respond
              super quick on the other platforms 😁
            </p>
          </div>

          <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/20 rounded-lg">
            <p className="text-gray-600 dark:text-white/70">
              You can verify my identity and all the ways I might contact you by
              checking out the{" "}
              <a className={styles.lnk} href="/verify">
                /verify
              </a>{" "}
              page.
            </p>
          </div>
        </div>

        <div className="py-2" />
        <SquigglyLine
          frequency={50}
          amplitude={0.4}
          className="min-w-screen"
          color="#4299e1"
        />
      </main>
      <FOOTER />
    </div>
  );
}
