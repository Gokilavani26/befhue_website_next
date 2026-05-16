"use client";

import { useState } from "react";
import Image from "next/image";

import Footer from "@/components/shared/Footer";

import {
    portfolioVideos,
    widePortfolioVideos
} from "@/data/videoPortfolioData";
import PortfolioVideoCard from "@/components/portfolio/PortfolioVideoCard";
import WidePortfolioVideoCard from "@/components/portfolio/widePortfolioVideoCard";

export default function PortfolioPage() {
    const [activeVideoId, setActiveVideoId] =
        useState<number | null>(null);


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

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24 space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 items-start mx-8">
                    {portfolioVideos.map((video) => (
                        <PortfolioVideoCard
                            key={video.id}
                            video={video}
                            isPlaying={activeVideoId === video.id}
                            onPlay={() =>
                                setActiveVideoId(video.id)
                            }
                        />
                    ))}
                </div>
                <hr className="border-zinc-200 py-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 items-start mt-10">
                    {
                        widePortfolioVideos.map((video) => (
                            <WidePortfolioVideoCard
                                key={video.id}
                                video={video}
                                isPlaying={activeVideoId === video.id}
                                onPlay={() =>
                                    setActiveVideoId(video.id)
                                }
                            />
                        ))
                    }
                </div>
            </section>
            <Footer />
        </div>
    );
}