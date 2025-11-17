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
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden py-6">
      {bottomSquiggles.map((config, index) => (
        <SquigglyLine
          key={index}
          frequency={config.frequency}
          amplitude={config.amplitude}
          className={config.className}
          color={config.color}
        />
      ))}

      <div className="bg-linkHover/40 my-12 flex flex-col items-center justify-center rounded-md p-10">
        <div className="mb-1 flex gap-2">
          {["4", "0", "4"].map((letter, i) => (
            <div
              key={i}
              className="font-cute-notes flex h-12 w-12 items-center justify-center text-5xl font-medium"
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="max-w-lg text-center">
          <p className="inline">
            This page seems to have run away to join the circus.
          </p>{" "}
          <p className="decoration-greeen hover:decoration-linkHover inline underline decoration-wavy transition-all duration-300 hover:rounded-md hover:bg-blue-400">
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
