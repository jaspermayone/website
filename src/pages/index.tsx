import Image from "next/image";
import { Inter } from "next/font/google";

import DotsBackground from "@/components/DotsBackground";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <DotsBackground />
      <div className={styles.contentBox}>
        <h1>Welcome to My Website</h1>
        <p>
          This is a semi-transparent, blurred content box in the middle of the
          screen.
        </p>
      </div>
    </div>
  );
}
