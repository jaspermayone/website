"use client";
import { useMemo } from "react";

interface AnimatedTitleProps {
  firstWord: string;
  secondWord?: string;
  thirdWord?: string;
  color?: string;
}

const AnimatedTitle = (props: AnimatedTitleProps) => {
  const firstWord = props.firstWord;
  const secondWord = props.secondWord;
  const thirdWord = props.thirdWord;
  const color = props.color || "inherit";

  const totalLength =
    firstWord.length +
    (secondWord ? secondWord.length : 0) +
    (thirdWord ? thirdWord.length : 0);

  const LETTER_DELAY = 0.3; // 300ms in seconds
  const CYCLE_PAUSE = 2; // 2000ms in seconds
  const ACTIVE_DURATION = 0.3; // How long each letter stays highlighted

  // Calculate total animation duration
  const totalDuration = totalLength * LETTER_DELAY + CYCLE_PAUSE;

  // Generate keyframes as a string to inject into a style tag
  const keyframesStyle = useMemo(() => {
    const keyframePercentages: string[] = [];

    for (let i = 0; i < totalLength; i++) {
      const startTime = i * LETTER_DELAY;
      const endTime = startTime + ACTIVE_DURATION;
      const startPercent = (startTime / totalDuration) * 100;
      const endPercent = (endTime / totalDuration) * 100;

      keyframePercentages.push(`
        @keyframes letter-glow-${i} {
          0%, ${startPercent}% {
            color: ${color};
          }
          ${startPercent}%, ${endPercent}% {
            color: #56ba8e;
          }
          ${endPercent}%, 100% {
            color: ${color};
          }
        }
      `);
    }

    return keyframePercentages.join("\n");
  }, [totalLength, totalDuration, LETTER_DELAY, ACTIVE_DURATION, color]);

  const getLetterStyle = (index: number) => ({
    color: color,
    animation: `letter-glow-${index} ${totalDuration}s infinite`,
  });

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
