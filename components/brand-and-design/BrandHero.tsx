"use client";

import { ArrowRight, Download } from "lucide-react";
import { useRouter } from "next/navigation";

const BrandHero = () => {
    const router = useRouter();
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 z-10">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
                    Best{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                        Branding & Designing
                    </span>{" "}
                    Company in Coimbatore
                </h1>

                <button
                    onClick={() => router.push("/contact")}
                    className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group">
                    Get Started

                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Glassmorphism Sticker Wall */}
            <div className="hidden md:block flex-1 relative w-full aspect-square md:aspect-video lg:aspect-square">
                {/* Logo Design Sticker */}
                <div className="absolute top-0 right-0 w-64 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-xs text-gray-400 mb-2 uppercase tracking-widest">
                        Logo Design
                    </div>

                    <div className="flex gap-4 items-end">
                        <div className="text-4xl font-serif italic text-white/20">
                            A
                        </div>

                        <div className="text-2xl font-bold text-white">
                            Concept
                        </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <span className="w-8 h-8 rounded bg-pink-500/20 border border-pink-500/40" />

                        <span className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/40" />
                    </div>
                </div>

                {/* Typography Sticker */}
                <div className="absolute top-1/4 left-0 w-56 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="text-xs text-gray-400 mb-2 uppercase tracking-widest">
                        Typography System
                    </div>

                    <div className="text-3xl font-bold mb-1 text-white">
                        Aa
                    </div>

                    <div className="text-sm text-gray-400">
                        Heading Titles
                    </div>
                </div>

                {/* Brand Guidelines Sticker */}
                <div className="absolute bottom-10 right-10 w-72 p-6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <div className="text-sm font-bold text-white">
                            Brand Guidelines
                        </div>

                        <Download
                            size={18}
                            className="text-gray-400"
                        />
                    </div>

                    <div className="space-y-3">
                        <div className="h-2 w-full bg-white/10 rounded" />

                        <div className="h-2 w-3/4 bg-white/10 rounded" />

                        <div className="h-2 w-1/2 bg-white/10 rounded" />
                    </div>

                    <button className="w-full mt-6 py-2 bg-white/10 rounded text-xs uppercase tracking-widest font-bold text-white">
                        Download PDF
                    </button>
                </div>

                {/* Color Palette Sticker */}
                <div className="absolute bottom-1/4 left-10 w-48 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl transform -rotate-2">
                    <div className="text-[10px] text-gray-400 mb-3 uppercase tracking-tighter">
                        Color Palette
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="h-12 rounded bg-[#ff006e]" />

                        <div className="h-12 rounded bg-[#3a86ff]" />

                        <div className="h-12 rounded bg-[#8338ec]" />

                        <div className="h-12 rounded bg-[#ffbe0b]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandHero;