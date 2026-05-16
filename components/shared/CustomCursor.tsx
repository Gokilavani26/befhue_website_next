"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Target mouse position
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  // Current animated position
  const position = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationFrameId: number;

    const animate = () => {
      // Smooth interpolation
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.12;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.12;

      if (cursorRef.current) {''
        cursorRef.current.style.transform = `
          translate3d(
            ${position.current.x - 1}px,
            ${position.current.y - 1}px,
            0
          )
        `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
    >
      <div className="relative flex h-10 w-10 items-center justify-center">
        <div className="h-9 w-9 rounded-full bg-[#ff002b]" />
      </div>
    </div>
  );
}