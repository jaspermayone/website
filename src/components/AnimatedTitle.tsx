import React, { useState, useEffect } from "react";

const AnimatedTitle = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const firstWord = "Jasper";
  const secondWord = "Mayone";
  const totalLength = firstWord.length + secondWord.length;
  const LETTER_DELAY = 300;
  const CYCLE_PAUSE = 2000;

  useEffect(() => {
    const animate = async () => {
      while (true) {
        for (let i = 0; i <= totalLength; i++) {
          setActiveIndex(i === totalLength ? -1 : i);
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
        margin: 0,
        marginBottom: ".25rem",
        fontSize: "3.5em",
        fontFamily: '"Cute Notes", sans-serif',
      }}
      title="Jasper Mayone's website"
    >
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
