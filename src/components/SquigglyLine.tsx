// components/SquigglyLine.tsx
"use client";

import { FC, useMemo } from "react";

interface SquigglyLineProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  className?: string;
  frequency?: number; // How many waves
  amplitude?: number; // Height of waves
}

const SquigglyLine: FC<SquigglyLineProps> = ({
  width = "100%",
  height = "8",
  color = "#4299e1",
  className = "",
  frequency = 6, // Default number of waves
  amplitude = 1, // Default wave height
}) => {
  const generatePath = useMemo(() => {
    // Convert width to number if it's a string with units
    const numWidth =
      typeof width === "string" ? parseFloat(width) || 100 : width;

    const points = [];
    const segments = frequency * 2; // Two control points per wave
    const segmentWidth = numWidth / segments;

    for (let i = 0; i <= segments; i++) {
      const x = i * segmentWidth;
      const y = i % 2 === 0 ? 0.5 : i % 4 === 1 ? -amplitude : amplitude;
      // @ts-expect-error
      points.push(`${x},${y}`);
    }

    // Create the path using quadratic curves
    let path = `M${points[0]}`;
    for (let i = 1; i < points.length; i++) {
      // @ts-expect-error
      const [x, y] = points[i].split(",");
      path += ` Q${x},${y} ${x},${y}`;
    }

    return path;
  }, [width, frequency, amplitude]);

  return (
    <svg
      width={width}
      height={height}
      className={`overflow-visible ${className}`}
      preserveAspectRatio="none"
      viewBox={`0 -${amplitude} ${typeof width === "number" ? width : 100} ${amplitude * 2}`}
    >
      <path
        d={generatePath}
        style={{
          stroke: color,
          strokeWidth: "1.5px",
          vectorEffect: "non-scaling-stroke",
          fill: "none",
        }}
      />
    </svg>
  );
};

export default SquigglyLine;
