"use client";

import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "CEO, Streamline Media",
        quote: "Befhue's video editing team transformed our raw footage into a cinematic masterpiece. Their attention to detail in sound design and color grading is truly world-class.",
        highlight: "Expert Video Storytelling",
        image: "/imgs/testimonial/alex.jpeg"
    },
    {
        id: 2,
        name: "Elena Petrov",
        role: "Marketing Director, Nexus Corp",
        quote: "The brand identity Befhue created for us has shifted how customers perceive us. We've seen a massive boost in brand recall and trust, leading to stronger engagement.",
        highlight: "Strategic Brand Transformation",
        image: "/imgs/testimonial/elena.jpeg"
    },
    {
        id: 3,
        name: "David Chen",
        role: "Founder, GreenTech SaaS",
        quote: "The marketing strategies implemented by Befhue led to a 40% increase in our conversion rates within just three months. They are data-driven and incredibly creative.",
        highlight: "Result-Oriented Marketing",
        image: "/imgs/testimonial/david-chen.jpeg"
    },
    {
        id: 4,
        name: "Sophia Martinez",
        role: "Product Manager, FlowApp",
        quote: "Building our complex platform with Befhue was a breeze. They turned our vision into a robust, scalable reality with an exceptional user interface that our users love.",
        highlight: "Seamless Software Development",
        image: "/imgs/testimonial/sophia.jpeg"
    },
    {
        id: 5,
        name: "James Wilson",
        role: "Operations Head, Horizon Group",
        quote: "Befhue's Editing as a Service model gives us the flexibility of an in-house team with the creative breadth of a top-tier agency. They are our go-to for all things creative.",
        highlight: "Future of Creative Collaboration",
        image: "/imgs/testimonial/james.jpeg"
    }
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return {
            prev: testimonials[prevIndex],
            current: testimonials[currentIndex],
            next: testimonials[nextIndex]
        };
    };

    const { prev, current, next } = getVisibleTestimonials();

    // Progress Bar Logic
    // The progress bar represents which item is active. 
    // Width of the indicator = 100% / total items
    // Left position = current index * (100% / total items)
    const progressWidth = 100 / testimonials.length;
    const progressLeft = currentIndex * progressWidth;

    return (
        <div className="relative min-h-screen w-full overflow-hidden font-sans text-slate-900 flex flex-col justify-center items-center py-24">

            {/* Vibrant Grainy Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FFB7D5] via-[#D8B4FF] to-[#A0C4FF] pointer-events-none"></div>

            {/* Subtle Noise Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            {/* Header Section */}
            <div className="relative z-10 text-center mb-16 md:mb-20 px-4">
                <h3 className="text-5xl md:text-[84px] font-black tracking-tighter text-gray-950 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    Client’s Feedback
                    <div className="flex flex-row md:flex-col gap-2 mt-0 md:mt-2">
                        <div className="w-10 md:w-14 h-[3px] bg-purple-700/30"></div>
                        <div className="w-10 md:w-14 h-[3px] bg-purple-700/30"></div>
                    </div>
                </h3>
            </div>

            {/* Slider Container */}
            <div className="relative z-10 w-full flex items-center justify-center gap-4 lg:gap-16 px-4">

                {/* Left Testimonial (Preview) */}
                <div className="hidden lg:block opacity-30 blur-[1px] text-center max-w-sm scale-90 select-none transition-all duration-500">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-8 grayscale opacity-60">
                            <img src={prev.image} alt={prev.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="uppercase text-[11px] font-black tracking-[0.25em] text-slate-600 mb-4">{prev.role}</p>
                        <h4 className="text-3xl font-bold mb-6 text-slate-700">{prev.highlight}</h4>
                        <div className="flex justify-center gap-1 mb-8">
                            {[...Array(3)].map((_, i) => <Star key={i} size={16} className="fill-slate-500 stroke-none" />)}
                        </div>
                        <p className="text-sm text-slate-600 max-w-[280px] line-clamp-2">"{prev.quote}"</p>
                    </div>
                </div>

                {/* Center Testimonial (Active) */}
                <div className="max-w-3xl w-full text-center px-4 md:px-6 transition-all duration-500 flex flex-col items-center justify-center min-h-[520px]">
                    <div className="relative inline-block mb-10">
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full ring-[6px] ring-white/40 overflow-hidden shadow-2xl relative z-10 mx-auto">
                            <Image
                                src={current.image}
                                alt={current.name}
                                fill
                                sizes="(max-width: 768px) 112px, 144px"
                                className="object-cover"
                            />

                        </div>
                        {/* Decorative purple square pixel */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 z-20"></div>
                        <div className="absolute top-4 -right-4 w-3 h-3 bg-purple-500/60 z-20"></div>
                    </div>

                    <p className="uppercase text-[11px] md:text-[13px] font-black tracking-[0.3em] text-slate-800 mb-6 flex flex-wrap justify-center items-center gap-2">
                        <span>{current.name}</span>
                        <span className="text-slate-400 hidden sm:inline">/</span>
                        <span className="text-slate-400 sm:hidden">|</span>
                        <span>{current.role}</span>
                    </p>

                    <h3 className="text-3xl sm:text-4xl md:text-[52px] font-black text-slate-950 mb-8 md:mb-10 leading-[1.2] md:leading-[1.1] tracking-tight min-h-[120px] flex items-center justify-center">
                        {current.highlight}
                    </h3>

                    <div className="flex justify-center gap-1.5 mb-8 md:mb-10">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={22} className="fill-black stroke-none" />
                        ))}
                    </div>

                    <p className="text-lg md:text-2xl text-slate-900 font-medium leading-[1.6] max-w-2xl mx-auto tracking-tight min-h-[140px] flex items-center justify-center">
                        "{current.quote}"
                    </p>
                </div>

                {/* Right Testimonial (Preview) */}
                <div className="hidden lg:block opacity-30 blur-[1px] text-center max-w-sm scale-90 select-none transition-all duration-500">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-8 grayscale opacity-60">
                            <img src={next.image} alt={next.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="uppercase text-[11px] font-black tracking-[0.25em] text-slate-600 mb-4">{next.role}</p>
                        <h4 className="text-3xl font-bold mb-6 text-slate-700">{next.highlight}</h4>
                        <div className="flex gap-1 mb-8">
                            {[...Array(3)].map((_, i) => <Star key={i} size={16} className="fill-slate-500 stroke-none" />)}
                        </div>
                        <p className="text-sm text-slate-600 max-w-[280px] line-clamp-2">"{next.quote}"</p>
                    </div>
                </div>
            </div>

            {/* Footer Controls */}
            <div className="relative z-10 w-full max-w-7xl mt-24 px-12">
                <div className="flex flex-col md:flex-row items-center justify-center relative gap-10 md:gap-0">

                    {/* Progress Bar */}
                    <div className="w-full max-w-md px-6 order-2 md:order-1">
                        <div className="w-full h-[3px] bg-black/10 rounded-full relative overflow-hidden">
                            {/* Dynamic Progress Line */}
                            <div
                                className="absolute top-0 h-full bg-purple-600 rounded-full transition-all duration-300 ease-out"
                                style={{
                                    width: `${progressWidth}%`,
                                    left: `${progressLeft}%`
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-10 order-1 md:order-2 md:absolute md:right-0">
                        <div className="flex gap-10">
                            <button onClick={handlePrev} className="hover:scale-125 transition-transform text-slate-900 cursor-pointer">
                                <ArrowLeft size={28} strokeWidth={2.5} />
                            </button>
                            <button onClick={handleNext} className="hover:scale-125 transition-transform text-slate-900 cursor-pointer">
                                <ArrowRight size={28} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
