import MENU from "@/components/MENU";
import { Metadata } from "next";
import FOOTER from "@/components/FOOTER";
import SquigglyLine from "@/components/SquigglyLine";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "Green",
  description: "How I try to live sustainably.",
};

export default function Green() {
  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Green" />
      <main className="flex-1">
        <div className="mx-5 mt-4 mb-4">
          <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Living Green
          </h1>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-white/70">
              I love the environment! I'm a big fan of green energy and
              sustainability. I'm always looking for ways to reduce my carbon
              footprint and make a positive impact on the planet.
            </p>
            <p className="text-gray-600 dark:text-white/70">
              My house has solar panels and we also store that energy in
              batteries in case of a power outage.
            </p>
            <p className="text-gray-600 dark:text-white/70">
              I always love seeing cool sustainability and green projects. If
              you find one or are working on one, please let me know! My contact
              info is on the{" "}
              <a href="/contact" className={styles.lnk}>
                contact
              </a>{" "}
              page and has all the ways I can be reached.
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
