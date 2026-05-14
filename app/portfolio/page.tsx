"use client";

import { useState } from "react";
import Image from "next/image";

import Footer from "@/components/shared/Footer";
import VideoModal from "@/components/portfolio/VideoModal";

import {
    portfolioVideos,
    categories,
} from "@/data/videoPortfolioData";

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const [activeVideo, setActiveVideo] =
        useState<string | null>(null);

    const filteredVideos =
        selectedCategory === "All"
            ? portfolioVideos
            : portfolioVideos.filter(
                (video) =>
                    video.category ===
                    selectedCategory
            );

    return (
        <div className="min-h-screen bg-white text-black pt-24">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Our{" "}
                    <span className="text-[#ff002b]">
                        Portfolio
                    </span>
                </h1>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-6 mb-14">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                            className={`px-6 py-3 rounded-full border transition-all duration-300 ${selectedCategory === category
                                ? "bg-[#ff002b] border-[#ff002b]"
                                : "border-zinc-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map((video) => (
                        <div
                            key={video.id}
                            className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
                        >
                            {/* Thumbnail */}
                            <div
                                onClick={() =>
                                    setActiveVideo(video.url)
                                }
                                className="relative cursor-pointer group"
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt="Video Thumbnail"
                                    width={600}
                                    height={900}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <span className="text-white text-3xl ml-1">
                                            ▶
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-5 flex items-center justify-between">
                                <span className="text-sm text-zinc-400 uppercase tracking-wider">
                                    {video.category}
                                </span>

                                <span className="text-[#ff002b] text-sm font-medium">
                                    Befhue
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Fullscreen Video */}
            {activeVideo && (
                <VideoModal
                    videoUrl={activeVideo}
                    onClose={() =>
                        setActiveVideo(null)
                    }
                />
            )}

            <Footer />
        </div>
    );
}