import React, { useState, useEffect } from "react";
import styles from "@/styles/AnimatedTitle.module.css";

const AnimatedTitle = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const firstWord = "Jasper";
  const secondWord = "Mayone";
  const totalLength = firstWord.length + secondWord.length;

  useEffect(() => {
    const animate = () => {
      let currentIndex = -1;
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % (totalLength + 1);
        setActiveIndex(currentIndex === totalLength ? -1 : currentIndex);
      }, 300);
      return () => clearInterval(interval);
    };
    const animation = animate();
    return () => animation();
  }, []);

  return (
    <h1 className={styles.title} title="Jasper Mayone's website">
      {firstWord.split("").map((letter, index) => (
        <span
          key={`first-${index}`}
          className="transition-colors duration-300"
          style={{
            color: index === activeIndex ? "#4299e1" : "inherit",
          }}
        >
          {letter}
        </span>
      ))}{" "}
      {secondWord.split("").map((letter, index) => (
        <span
          key={`second-${index}`}
          className="transition-colors duration-300"
          style={{
            color:
              index + firstWord.length === activeIndex ? "#4299e1" : "inherit",
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
