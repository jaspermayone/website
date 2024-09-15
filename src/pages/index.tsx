import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Email from "@/components/email"; // Assuming you have an Email component
import DotsBackground from "@/components/DotsBackground"; // Assuming you have a DotsBackground component
import styles from "@/styles/Home.module.css"; // Your CSS module

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Homepage"); // Default selected tab

  const menuItems = [
    "Homepage",
    "Portfolio",
    "Resume",
    "Photos",
    "@jasperdoescircus",
  ];

  // Framer Motion animation variants for a fade effect
  const fadeVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" }, // Set a positive blur value
    visible: { opacity: 1, filter: "blur(0px)" }, // Set blur to 0 when visible
    exit: { opacity: 0, filter: "blur(10px)" }, // Ensure blur is non-negative on exit
  };

  useEffect(() => {
    console.log("Page has fully loaded!");
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  // Function to render content based on selectedTab
  const renderContent = () => {
    switch (selectedTab) {
      case "Homepage":
        return (
          <>
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
              graduate from the class of 2024! Graduating a full year early,
              they are currently taking a gap year to explore. Jasper tries to
              live by the quote “We’ve all got both light and dark inside us.
              What matters is the part we choose to act on...that’s who we
              really are.” from one of their favorite books, Harry Potter.
              Jasper’s hobbies include reading, being in the great outdoors,
              photography, computer programming, cooking, and running away to
              join the circus.
            </p>
            <div className="py-5" />
            <Email />
          </>
        );
      case "Portfolio":
        return <p>Portfolio content will go here.</p>;
      case "Resume":
        return <p>Resume content will go here.</p>;
      case "Photos":
        return <p>Photos content will go here.</p>;
      case "@jasperdoescircus":
        return <p>Follow Jasper’s circus journey on Instagram.</p>;
      default:
        return null;
    }
  };

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
            {menuItems.map((item) => (
              <p
                key={item}
                className={item === selectedTab ? styles.selected : ""}
                onClick={() => setSelectedTab(item)} // Set the selected tab
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.contentBox}>
          {/* Use AnimatePresence for smooth transitions between content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab} // key to animate between different content
              variants={fadeVariants} // Use fade variants for animation
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                opacity: { duration: 0.5 },
                filter: { duration: 0.5 },
              }} // Adjust as needed
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
