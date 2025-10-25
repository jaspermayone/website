"use client";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const CuteNotes = localFont({
  src: "../../public/fonts/CuteNotes.ttf",
  display: "swap",
  variable: "--font-cute-notes",
});

interface AnimatedTitleProps {
  firstWord: string;
  secondWord?: string;
  thirdWord?: string;
  color?: string;
}

const AnimatedTitle = (props: AnimatedTitleProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const firstWord = props.firstWord;
  const secondWord = props.secondWord;
  const thirdWord = props.thirdWord;
  const totalLength =
    firstWord.length +
    (secondWord ? secondWord.length : 0) +
    (thirdWord ? thirdWord.length : 0);
  const LETTER_DELAY = 300;
  const CYCLE_PAUSE = 2000;

  const color = props.color || "inherit";

  useEffect(() => {
    let cancelled = false;

    const animate = async () => {
      while (!cancelled) {
        for (let i = 0; i <= totalLength; i++) {
          if (cancelled) break;
          setActiveIndex(i === totalLength ? -1 : i);
          await new Promise((resolve) => setTimeout(resolve, LETTER_DELAY));
        }
        if (!cancelled) {
          await new Promise((resolve) => setTimeout(resolve, CYCLE_PAUSE));
        }
      }
    };

    animate();
    return () => {
      cancelled = true;
      setActiveIndex(-1);
    };
  }, [totalLength, LETTER_DELAY, CYCLE_PAUSE]);

  return (
    <h1
      className={`m-0 text-5xl ${CuteNotes.className}`}
      style={{
        margin: 0,
        marginBottom: ".25rem",
        fontSize: "3.5em",
      }}
      title={`${firstWord} ${secondWord}`}
    >
      {firstWord.split("").map((letter, index) => (
        <span
          key={`first-${index}`}
          className="transition-colors duration-300"
          style={{
            color: index === activeIndex ? "#56ba8e" : color,
          }}
        >
          {letter}
        </span>
      ))}{" "}
      {secondWord?.split("").map((letter, index) => (
        <span
          key={`second-${index}`}
          className="transition-colors duration-300"
          style={{
            color: index + firstWord.length === activeIndex ? "#56ba8e" : color,
          }}
        >
          {letter}
        </span>
      ))}{" "}
      {thirdWord?.split("").map((letter, index) => (
        <span
          key={`third-${index}`}
          className="transition-colors duration-300"
          style={{
            color:
              index +
                firstWord.length +
                (secondWord ? secondWord.length : 0) ===
              activeIndex
                ? "#56ba8e"
                : color,
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
