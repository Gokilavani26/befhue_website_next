"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioVideoCard({
    video,
    isPlaying,
    onPlay,
}: {
    video: {
        id: number;
        url: string;
        thumbnail: string;
    };
    isPlaying: boolean;
    onPlay: () => void;
}) {
    const [loading, setLoading] = useState(false);

    return (
        <div className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <div className="relative">
                {!isPlaying ? (
                    <>
                        {/* Thumbnail */}
                        <Image
                            src={video.thumbnail}
                            alt="Thumbnail"
                            width={800}
                            height={200}
                            sizes="100vw"
                            className="w-full aspect-[9/16] object-cover h-auto"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Play Button */}
                        <button
                            onClick={() => {
                                setLoading(true);
                                onPlay();
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-3xl ml-1">
                                    ▶
                                </span>
                            </div>
                        </button>
                    </>
                ) : (
                    <div className="relative">
                        {/* Loader */}
                        {loading && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
                                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                            </div>
                        )}

                        <video
                            src={video.url}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-auto object-cover"
                            onLoadStart={() => setLoading(true)}
                            onCanPlay={() => setLoading(false)}
                            onWaiting={() => setLoading(true)}
                            onPlaying={() => setLoading(false)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}