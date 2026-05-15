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
    <>
      {/* Floating Circle */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          transform: `translate3d(${position.x - 11}px, ${position.y - 11}px, 0)`,
          transition: "transform 0.02s linear",
        }}
      //  style={{
      //         transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
      //     }}
      >
        <div className="relative flex h-10 w-10 items-center justify-center">
          {/* Outer Ring */}
          {/* <div className="absolute inset-0 rounded-full border border-[#ff002b]" /> */}

          {/* Inner Dot */}
          <div className="h-9.5 w-9.5 rounded-full bg-[#ff002b]" />
        </div>
      </div>
    </>
  );
}