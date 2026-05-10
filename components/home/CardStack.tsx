"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
    {
        id: 1,
        src: "/imgs/vr_person.webp",
        color: "from-blue-400 to-blue-600",
        rotation: -12,
        offsetX: -400,
        offsetY: 0,
        alt: "VR Art",
    },
    {
        id: 2,
        src: "/imgs/abstract_stones.webp",
        color: "from-amber-100 to-amber-200",
        rotation: -6,
        offsetX: -200,
        offsetY: -40,
        alt: "Abstract",
    },
    {
        id: 3,
        src: "/imgs/character_jar.webp",
        color: "from-purple-300 to-purple-500",
        rotation: 0,
        offsetX: 0,
        offsetY: 0,
        alt: "Character",
    },
    {
        id: 4,
        src: "/imgs/spoons_icecream.webp",
        color: "from-rose-300 to-rose-500",
        rotation: 6,
        offsetX: 200,
        offsetY: -40,
        alt: "Food Art",
    },
    {
        id: 5,
        src: "/imgs/dragon_toy.webp",
        color: "from-yellow-300 to-yellow-500",
        rotation: 12,
        offsetX: 400,
        offsetY: 0,
        alt: "Toy Design",
    },
];

type PhysicsState = {
    x: number;
    y: number;
    vx: number;
    vy: number;
};

const CardStack = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const imageRefs = useRef<(HTMLDivElement | null)[]>(
        Array.from({ length: IMAGES.length }, () => null)
    );

    const mousePos = useRef({ x: -9999, y: -9999 });

    const physics = useRef<PhysicsState[]>(
        IMAGES.map(() => ({
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
        }))
    );

    const animationFrameId = useRef<number | null>(null);

    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const REPULSION_STRENGTH = isMobile ? 120 : 200;
        const REPULSION_RADIUS = isMobile ? 150 : 300;
        const FRICTION = 0.93;
        const SPRING_STRENGTH = 0.006;
        const MAX_DISPLACEMENT = isMobile ? 80 : 150;
        const MAX_VELOCITY = 90;

        const activeImages = isMobile ? IMAGES.slice(0, 4) : IMAGES;

        const mobileOffsetsX = [-300, -100, 100, 300];
        const mobileOffsetsY = [20, -20, -20, 20];
        const mobileRotations = [-12, -4, 4, 12];

        const animate = () => {
            const rect = container.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            activeImages.forEach((image, index) => {
                const imageRef = imageRefs.current[index];

                if (!imageRef) return;

                const phys = physics.current[index];

                const offsetX = isMobile
                    ? mobileOffsetsX[index]
                    : image.offsetX;

                const offsetY = isMobile
                    ? mobileOffsetsY[index]
                    : image.offsetY;

                const baseRotation = isMobile
                    ? mobileRotations[index]
                    : image.rotation;

                const scale = isMobile ? 0.45 : 1;

                const imageCenterX =
                    centerX + (offsetX + phys.x) * scale;

                const imageCenterY =
                    centerY + (offsetY + phys.y) * scale;

                const dx = imageCenterX - mousePos.current.x;
                const dy = imageCenterY - mousePos.current.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                // Repulsion effect
                if (distance < REPULSION_RADIUS && distance > 0) {
                    const t = 1 - distance / REPULSION_RADIUS;

                    const force = t * t * REPULSION_STRENGTH;

                    const angle = Math.atan2(dy, dx);

                    phys.vx += Math.cos(angle) * force * 0.15;
                    phys.vy += Math.sin(angle) * force * 0.15;
                }

                // Spring return
                phys.vx += -phys.x * SPRING_STRENGTH;
                phys.vy += -phys.y * SPRING_STRENGTH;

                // Friction
                phys.vx *= FRICTION;
                phys.vy *= FRICTION;

                // Clamp velocity
                phys.vx = Math.max(
                    -MAX_VELOCITY,
                    Math.min(MAX_VELOCITY, phys.vx)
                );

                phys.vy = Math.max(
                    -MAX_VELOCITY,
                    Math.min(MAX_VELOCITY, phys.vy)
                );

                // Update positions
                phys.x += phys.vx * 0.9;
                phys.y += phys.vy * 0.9;

                // Clamp displacement
                const displacement = Math.sqrt(
                    phys.x * phys.x + phys.y * phys.y
                );

                if (displacement > MAX_DISPLACEMENT) {
                    const scaleDisp = MAX_DISPLACEMENT / displacement;

                    phys.x *= scaleDisp;
                    phys.y *= scaleDisp;
                }

                imageRef.style.transform = `
          translate(-50%, -50%)
          translateX(${offsetX + phys.x}px)
          translateY(${offsetY + phys.y}px)
          rotate(${baseRotation}deg)
        `;
            });

            animationFrameId.current =
                requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mousePos.current.x = e.touches[0].clientX;
                mousePos.current.y = e.touches[0].clientY;
            }
        };

        const handleMouseLeave = () => {
            mousePos.current.x = -9999;
            mousePos.current.y = -9999;
        };

        window.addEventListener("mousemove", handleMouseMove);

        window.addEventListener(
            "touchmove",
            handleTouchMove,
            { passive: true }
        );

        container.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        container.addEventListener(
            "touchend",
            handleMouseLeave
        );

        animationFrameId.current =
            requestAnimationFrame(animate);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "touchmove",
                handleTouchMove
            );

            container.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

            container.removeEventListener(
                "touchend",
                handleMouseLeave
            );

            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [isMobile]);

    const activeImages = isMobile
        ? IMAGES.slice(0, 4)
        : IMAGES;

    const mobileOffsetsX = [-300, -100, 100, 300];
    const mobileOffsetsY = [20, -20, -20, 20];
    const mobileRotations = [-12, -4, 4, 12];

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${isMobile
                ? "h-[240px] sm:h-[300px] mt-8 mb-12"
                : "h-[500px]"
                } flex items-center justify-center overflow-visible px-8 cursor-crosshair`}
            style={{ touchAction: "pan-y" }}
        >
            <div
                className={`relative w-full h-full perspective flex items-center justify-center ${isMobile ? "scale-[0.45] sm:scale-[0.55]" : ""
                    }`}
            >
                {activeImages.map((image, index) => {
                    const offsetX = isMobile
                        ? mobileOffsetsX[index]
                        : image.offsetX;

                    const offsetY = isMobile
                        ? mobileOffsetsY[index]
                        : image.offsetY;

                    const baseRotation = isMobile
                        ? mobileRotations[index]
                        : image.rotation;

                    return (
                        <div
                            key={image.id}
                            ref={(el) => {
                                imageRefs.current[index] = el;
                            }}
                            className="absolute w-72 h-[420px]"
                            style={{
                                left: "50%",
                                top: "50%",
                                transform: `
                  translate(-50%, -50%)
                  translateX(${offsetX}px)
                  translateY(${offsetY}px)
                  rotate(${baseRotation}deg)
                `,
                                zIndex: index,
                                filter:
                                    "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
                            }}
                        >
                            <div
                                className={`relative w-full h-full ${isMobile
                                    ? "rounded-[2.5rem]"
                                    : "rounded-2xl"
                                    } overflow-hidden bg-gradient-to-br ${image.color} shadow-lg hover:shadow-2xl transition-shadow`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover pointer-events-none"
                                    sizes="(max-width: 768px) 100vw, 288px"
                                    priority={index < 2}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {!isMobile && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-20" />
                </div>
            )}
        </div>
    );
};

export default CardStack;