"use client";
import SquigglyLine from "@/components/SquigglyLine";
import { Link } from "next-view-transitions";

const Error = () => {
  const bottomSquiggles = Array.from({ length: 20 }, (_, i) => ({
    id: `squiggle-${i}`,
    frequency: 10,
    amplitude: 5.4,
    className: "min-w-max",
    color: "#56ba8e",
  }));
  const errorLetters = ["E", "R", "R", "O", "R"].map((char, i) => ({
    id: `err-${i}`,
    char,
  }));

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden py-6">
      {bottomSquiggles.map((config) => (
        <SquigglyLine
          key={config.id}
          frequency={config.frequency}
          amplitude={config.amplitude}
          className={config.className}
          color={config.color}
        />
      ))}

      <div className="bg-linkHover/40 my-12 flex flex-col items-center justify-center rounded-md p-10">
        <div className="mb-1 flex gap-2">
          {errorLetters.map(({ id, char }) => (
            <div
              key={id}
              className="font-cute-notes flex size-12 items-center justify-center text-5xl font-medium"
            >
              {char}
            </div>
          ))}
        </div>
        <div className="max-w-lg text-center">
          <p className="inline" style={{ fontFamily: "var(--font-balgin)" }}>
            Uh oh! This page seems to have lost artistic direction. Please try
            to
          </p>{" "}
          <p className="decoration-greeen hover:decoration-linkHover inline underline decoration-wavy transition-all duration-300 hover:rounded-md hover:bg-blue-400">
            <Link href="/">return home!</Link>
          </p>
        </div>
      </div>

      {bottomSquiggles.map((config) => (
        <SquigglyLine
          key={config.id}
          frequency={config.frequency}
          amplitude={config.amplitude}
          className={config.className}
          color={config.color}
        />
      ))}
    </div>
  );
};

export default Error;
