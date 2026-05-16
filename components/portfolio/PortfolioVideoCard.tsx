"use client";
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
                            onClick={onPlay}
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
                    <video
                        src={video.url}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-auto object-cover"
                    />
                )}
            </div>

            {/* Footer */}
            {/* <div className="p-5 flex items-center justify-between">
                <span className="text-sm text-zinc-400 uppercase tracking-wider">
                    {video.category}
                </span>

                <span className="text-[#ff002b] text-sm font-medium">
                    Befhue
                </span>
            </div> */}
        </div>
    );
}