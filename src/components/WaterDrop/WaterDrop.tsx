// components/WaterDrop.tsx
import React from "react";

interface WaterDropProps {
  delay: number;
  x: number;
  y: number;
}

const WaterDrop: React.FC<WaterDropProps> = ({ delay, x, y }) => (
  <div
    className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-60"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `float ${
        3 + Math.random() * 2
      }s ease-in-out ${delay}s infinite alternate`,
    }}
  />
);

export default WaterDrop;
