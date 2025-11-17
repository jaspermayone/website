import SquigglyLine from "@/components/SquigglyLine";
import { Link } from "next-view-transitions";

const NotFound = () => {
  // Array of configurations for bottom squiggly lines
  const bottomSquiggles = Array(20).fill({
    frequency: 10,
    amplitude: 5.4,
    className: "min-w-max",
    color: "#56ba8e",
  });

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden py-6">
      {bottomSquiggles.map((config, index) => (
        <SquigglyLine
          key={index}
          frequency={config.frequency}
          amplitude={config.amplitude}
          className={config.className}
          color={config.color}
        />
      ))}

      <div className="my-12 flex flex-col items-center justify-center rounded-md bg-linkHover/40 p-10">
        <div className="flex gap-2 mb-1">
          {["4", "0", "4"].map((letter, i) => (
            <div
              key={i}
              className="font-cute-notes w-12 h-12 flex items-center justify-center text-5xl font-medium"
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="max-w-lg text-center">
          <p className="inline">
            This page seems to have run away to join the circus.
          </p>{" "}
          <p className="inline underline decoration-wavy decoration-greeen hover:decoration-linkHover hover:bg-blue-400 hover:rounded-md transition-all duration-300">
            <Link href="/">Go home!</Link>
          </p>
        </div>
      </div>

      {bottomSquiggles.map((config, index) => (
        <SquigglyLine
          key={index}
          frequency={config.frequency}
          amplitude={config.amplitude}
          className={config.className}
          color={config.color}
        />
      ))}
    </div>
  );
};

export default NotFound;
