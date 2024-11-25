import React, { useState, useEffect } from "react";

const AnimatedProjectsTitle = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const title = "Jasper's Projects";
  const LETTER_DELAY = 300;
  const CYCLE_PAUSE = 2000;

  useEffect(() => {
    const animate = async () => {
      while (true) {
        for (let i = 0; i <= title.length; i++) {
          setActiveIndex(i === title.length ? -1 : i);
          await new Promise((resolve) => setTimeout(resolve, LETTER_DELAY));
        }
        await new Promise((resolve) => setTimeout(resolve, CYCLE_PAUSE));
      }
    };
    animate();
    return () => setActiveIndex(-1);
  }, []);

  return (
    <h1
      className="m-0 text-5xl font-cute-notes"
      style={{
        fontFamily: '"Cute Notes", sans-serif',
      }}
      title="Jasper's Projects Portfolio"
    >
      {title.split("").map((letter, index) => (
        <span
          key={index}
          className="transition-colors duration-300"
          style={{
            color: index === activeIndex ? "#4299e1" : "inherit",
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedProjectsTitle;
