"use client";

import { useState } from "react";
import {
    Calendar,
    Users,
    Laptop,
    Handshake,
} from "lucide-react";

const ParallelogramTicker = () => {
    const [activeTab, setActiveTab] = useState<"mission" | "vision">(
        "mission"
    );

    const stats = [
        {
            id: 1,
            value: "4+",
            label: "YEARS EXPERIENCE",
            icon: <Calendar className="text-[#ff002b]" size={32} />,
        },
        {
            id: 2,
            value: "60+",
            label: "DEDICATED PROFESSIONALS",
            icon: <Users className="text-[#ff002b]" size={32} />,
        },
        {
            id: 3,
            value: "200+",
            label: "DELIVERED PROJECTS",
            icon: <Laptop className="text-[#ff002b]" size={32} />,
        },
        {
            id: 4,
            value: "99%",
            label: "QUALITY ASSURANCE",
            icon: <Handshake className="text-[#ff002b]" size={32} />,
        },
    ];

    return (
        <section className="overflow-hidden bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center gap-16 lg:flex-row">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-bold text-[#202020] md:text-5xl">
                            Why <span className="text-[#ff002b]">Befhue?</span>
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
                            <p>
                                Befhue Provides top notch Web and Mobile App Solutions,
                                we develop high quality and Innovative Web and Mobile
                                Applications which can be easily stand out in competitive
                                market. Our Developers Work on latest and trending
                                technologies and we always deliver requirement specific
                                and user centric applications as per The business needs.
                            </p>

                            <p>
                                Befhue Provides top notch Web and Mobile App Solutions,
                                we develop high quality and Innovative Web and Mobile
                                Applications which can be easily stand out in competitive
                                market.
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="mt-8">
                            <div className="flex border-b border-gray-200">

                                <button
                                    onClick={() => setActiveTab("mission")}
                                    className={`relative px-6 pb-4 text-lg font-medium transition-colors ${activeTab === "mission"
                                            ? "text-[#ff002b]"
                                            : "text-zinc-500 hover:text-zinc-800"
                                        }`}
                                >
                                    Our Mission

                                    {activeTab === "mission" && (
                                        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#ff002b]" />
                                    )}
                                </button>

                                <button
                                    onClick={() => setActiveTab("vision")}
                                    className={`relative px-6 pb-4 text-lg font-medium transition-colors ${activeTab === "vision"
                                            ? "text-[#ff002b]"
                                            : "text-zinc-500 hover:text-zinc-800"
                                        }`}
                                >
                                    Our Vision

                                    {activeTab === "vision" && (
                                        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#ff002b]" />
                                    )}
                                </button>
                            </div>

                            <div className="min-h-[100px] pt-6">
                                {activeTab === "mission" ? (
                                    <div className="flex gap-3 text-zinc-600">
                                        <span className="font-bold text-[#ff002b]">✓</span>

                                        <p>
                                            Our aim is to make products that bring people
                                            closer through digital.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex gap-3 text-zinc-600">
                                        <span className="font-bold text-[#ff002b]">✓</span>

                                        <p>
                                            To be a global leader in digital innovation and
                                            software solutions.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="flex flex-col items-center rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl -skew-x-12"
                                >
                                    <div className="mb-4 rounded-full bg-red-50 p-4">
                                        {stat.icon}
                                    </div>

                                    <h3 className="mb-2 text-4xl font-bold text-[#ff002b]">
                                        {stat.value}
                                    </h3>

                                    <p className="text-sm font-bold uppercase tracking-wider text-zinc-700">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ParallelogramTicker;