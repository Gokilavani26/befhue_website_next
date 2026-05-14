"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Lightbulb,
    TrendingUp,
    Eye,
    Target,
} from "lucide-react";

const MarketingTemplate = () => {
    const router = useRouter();

    return (
        <div className="bg-[#ffffff] min-h-screen text-[#202020] font-sf-pro px-6 py-12 md:px-16 lg:px-24">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-24">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff002b]" />

                        <span className="text-[#ff002b] font-bold uppercase tracking-wider text-sm">
                            About Us
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                        Transforming <br />
                        Businesses with <br />
                        <span className="text-[#ff002b]">
                            Strategic
                        </span>{" "}
                        Marketing
                    </h2>

                    <p className="text-gray-600 max-w-lg text-lg leading-relaxed">
                        At BEFHUE, we combine creative excellence
                        with data-driven strategies to elevate your
                        brand. From impactful visuals to targeted
                        digital campaigns, our tailored marketing
                        solutions are designed to engage your
                        audience and drive measurable business
                        growth.
                    </p>

                    <button
                        onClick={() => router.push("/about-us")}
                        className="bg-[#ff002b] text-white px-8 py-4 rounded-full font-sf-pro font-bold text-lg hover:shadow-xl transition-all active:scale-95"
                    >
                        Learn More
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex-1 relative">
                    {/* Main Image */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/imgs/home-about.webp"
                            alt="Team working"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-10 -left-6 md:-left-12 bg-[#202020] p-8 rounded-[1.5rem] shadow-2xl text-white w-56 md:w-64 border border-gray-700">
                        <div className="bg-[#ff002b]/20 p-2 rounded-lg w-fit mb-4">
                            <TrendingUp
                                className="text-[#ff002b]"
                                size={32}
                            />
                        </div>

                        <p className="text-gray-400 text-sm font-medium">
                            Monthly Traffic
                        </p>

                        <h5 className="text-4xl font-bold mt-1">
                            100 K
                        </h5>

                        <p className="text-[#ff002b] font-bold mt-2 flex items-center gap-1">
                            <span className="text-xl">↑</span> +70%
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy / Vision / Mission */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Philosophy Card */}
                <div className="bg-[#202020] p-10 rounded-[2.5rem] text-white transition-transform hover:-translate-y-2 cursor-pointer">
                    <div className="bg-[#ff002b] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <Lightbulb size={28} />
                    </div>

                    <h4 className="text-2xl font-bold mb-4">
                        Our Philosophy
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                        We believe that great design goes beyond
                        aesthetics—it is a strategic tool that
                        solves problems, drives innovation, and
                        creates lasting brand value.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="bg-[#202020] p-10 rounded-[2.5rem] text-white transition-transform hover:-translate-y-2 cursor-pointer">
                    <div className="bg-[#ff002b] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <Eye size={28} />
                    </div>

                    <h4 className="text-2xl font-bold mb-4">
                        Our Vision
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                        To become the premier design partner for
                        businesses globally, setting new standards
                        in digital marketing, creative strategy,
                        and user experience.
                    </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#202020] p-10 rounded-[2.5rem] text-white transition-transform hover:-translate-y-2 cursor-pointer">
                    <div className="bg-[#ff002b] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <Target size={28} />
                    </div>

                    <h4 className="text-2xl font-bold mb-4">
                        Our Mission
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                        To empower enterprises with tailored,
                        high-quality design services that
                        seamlessly bridge the gap between creative
                        execution and business goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default MarketingTemplate;