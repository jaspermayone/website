"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/DotsBackground.module.css";

const colors: string[] = [
  "#78cbf2",
  "#408da3",
  "#cbb53c",
  "#4a856b",
  "#4c8c91",
];

interface DotsBackgroundProps {
  move?: boolean; // Optional prop to control movement
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ move = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numDots = 20;
    const container = containerRef.current;

    if (container) {
      // Cleanup existing dots
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.className = styles.dot;

        // Increase the size range for larger dots
        const size = Math.random() * 50 + 20; // Dots are now between 20px and 70px
        const colorIndex = Math.floor(Math.random() * colors.length);
        const duration = move ? `${Math.random() * 10 + 10}s` : "0s"; // No animation if move is false
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.backgroundColor = colors[colorIndex];
        dot.style.animationDuration = duration;
        dot.style.top = `${top}%`;
        dot.style.left = `${left}%`;

        container.appendChild(dot);
      }
    }

    return () => {
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, [move]); // Dependency array includes move

  return <div ref={containerRef} className={styles.container}></div>;
};

export default DotsBackground;
