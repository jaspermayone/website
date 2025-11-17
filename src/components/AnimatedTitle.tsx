"use client";
import { useMemo } from "react";

interface AnimatedTitleProps {
  firstWord: string;
  secondWord?: string;
  thirdWord?: string;
  color?: string;
  addTextShadow?: boolean;
}

const AnimatedTitle = (props: AnimatedTitleProps) => {
  const firstWord = props.firstWord;
  const secondWord = props.secondWord;
  const thirdWord = props.thirdWord;
  const addTextShadow = props.addTextShadow || false;
  const color = addTextShadow ? "#051402" : props.color || "inherit";

  const totalLength =
    firstWord.length +
    (secondWord ? secondWord.length : 0) +
    (thirdWord ? thirdWord.length : 0);

  const LETTER_DELAY = 0.3; // 300ms between each letter within a word
  const WORD_GAP = 0.6; // 600ms extra pause between words
  const LETTER_ACTIVE_TIME = 0.3; // 300ms - how long each letter stays highlighted
  const CYCLE_PAUSE = 2; // 2000ms in seconds

  // Calculate total animation duration including word gaps
  const wordCount = (secondWord ? 1 : 0) + (thirdWord ? 1 : 0);
  const totalDuration =
    totalLength * LETTER_DELAY + wordCount * WORD_GAP + CYCLE_PAUSE;

  // Generate a single keyframe animation for the glow effect
  const keyframesStyle = useMemo(() => {
    // Calculate when the letter should be active (green) and when it fades
    const activePercent = (LETTER_ACTIVE_TIME / totalDuration) * 100;
    const fadePercent = ((LETTER_ACTIVE_TIME + 0.3) / totalDuration) * 100; // Transition duration

    return `
      @keyframes letter-glow {
        0% {
          color: #56ba8e;
        }
        ${activePercent}% {
          color: #56ba8e;
        }
        ${fadePercent}% {
          color: ${color};
        }
        100% {
          color: ${color};
        }
      }
    `;
  }, [totalDuration, LETTER_ACTIVE_TIME, color]);

  const getLetterStyle = (index: number) => {
    // Calculate delay with word gaps
    let delay = index * LETTER_DELAY;

    // Add extra delay for letters after the first word
    if (secondWord && index >= firstWord.length) {
      delay += WORD_GAP;
    }
    // Add extra delay for letters after the second word
    if (
      thirdWord &&
      secondWord &&
      index >= firstWord.length + secondWord.length
    ) {
      delay += WORD_GAP;
    }

    return {
      color: color,
      animation: `letter-glow ${totalDuration}s infinite`,
      animationDelay: `${delay}s`,
    };
  };

  return (
    <>
      <style>{keyframesStyle}</style>
      <h1
        className="m-0 text-5xl"
        style={{
          margin: 0,
          marginBottom: ".25rem",
          fontSize: "3.5em",
          fontFamily: "var(--font-cuteNotes)",
          viewTransitionName: "page-title",
        }}
        title={`${firstWord} ${secondWord || ""}`}
      >
        {firstWord.split("").map((letter, index) => (
          <span key={`first-${index}`} style={getLetterStyle(index)}>
            {letter}
          </span>
        ))}{" "}
        {secondWord?.split("").map((letter, index) => (
          <span
            key={`second-${index}`}
            style={getLetterStyle(index + firstWord.length)}
          >
            {letter}
          </span>
        ))}{" "}
        {thirdWord?.split("").map((letter, index) => (
          <span
            key={`third-${index}`}
            style={getLetterStyle(
              index + firstWord.length + (secondWord ? secondWord.length : 0),
            )}
          >
            {letter}
          </span>
        ))}
      </h1>
    </>
  );
};

export default AnimatedTitle;
