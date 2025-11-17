"use client";

import { FC, useEffect, useMemo, useState } from "react";

interface SquigglyLineProps {
  height?: string | number;
  color?: string;
  className?: string;
  frequency?: number;
  amplitude?: number;
  strokeWidth?: number;
}

const SquigglyLine: FC<SquigglyLineProps> = ({
  height = "20", // Increased default height
  color = "#60A5FA",
  className = "",
  frequency = 25, // Reduced frequency for larger waves
  amplitude = 1.2, // Increased amplitude for taller waves
  strokeWidth = 2, // Thicker stroke for larger waves
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Debounce resize handler
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdateWidth = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWidth, 250);
    };

    updateWidth(); // Initial call
    window.addEventListener("resize", debouncedUpdateWidth);
    return () => {
      window.removeEventListener("resize", debouncedUpdateWidth);
      clearTimeout(timeoutId);
    };
  }, []);

  const generatePath = useMemo(() => {
    if (screenWidth === 0) return "";

    // Create a smooth sine wave
    const points = [];
    const steps = screenWidth;
    const waveLength = screenWidth / frequency;

    for (let x = 0; x <= screenWidth; x++) {
      const y = amplitude * Math.sin((2 * Math.PI * x) / waveLength);
      // @ts-expect-error
      points.push(`${x},${y}`);
    }

    // Create the path with smooth curves
    const path = points.reduce((acc, point, i) => {
      if (i === 0) return `M ${point}`;
      // @ts-expect-error
      const [prevX, prevY] = points[i - 1].split(",");
      // @ts-expect-error
      const [x, y] = point.split(",");

      // Calculate control points for smooth curve
      const cp1x = Number(prevX) + (Number(x) - Number(prevX)) / 3;
      const cp2x = Number(prevX) + (2 * (Number(x) - Number(prevX))) / 3;

      return `${acc} C ${cp1x},${prevY} ${cp2x},${y} ${x},${y}`;
    }, "");

    return path;
  }, [screenWidth, frequency, amplitude]);

  return (
    <svg
      width="100%"
      height={height}
      className={`overflow-visible ${className}`}
      preserveAspectRatio="none"
      viewBox={`0 -${amplitude * 1.5} ${screenWidth} ${amplitude * 3}`}
      style={{ maxWidth: "100%" }}
    >
      <path
        d={generatePath}
        style={{
          stroke: color,
          strokeWidth: `${strokeWidth}px`,
          vectorEffect: "non-scaling-stroke",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
};

export default SquigglyLine;
