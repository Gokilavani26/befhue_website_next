"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500 bg-transparent">
        <div className="h-3 w-3 rounded-full bg-red-500" />
      </div>
    </div>
  );
}