"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BrandClients = () => {
    const logo1 = "/svgs/l1.svg"
    const logo2 = "/svgs/l2.svg"
    const logo3 = "/svgs/l3.svg"
    const logo4 = "/svgs/l4.svg"
    const logo5 = "/svgs/l5.svg"
    const logo6 = "/svgs/l6.svg"
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    // Duplicate logos for smooth infinite marquee
    const column1 = [...logos, ...logos];
    const column2 = [...logos, ...logos];

    return (
        <section className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
            {/* Left Column */}
            <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                    Reliable Brand Design Professionals with 10+ Years of Experience
                </h2>

                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                        We are a brand design company that has over ten years of
                        experience and we have been reflecting our work on countless
                        clients through the establishment and enhancement of their logos,
                        brands, etc.
                    </p>

                    <p>
                        Our sophisticated team takes ideas from you and transforms them
                        into building blocks of logos and other elements that help your
                        business grow.
                    </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">
                        Reviewed by Verified Experts
                    </h3>

                    <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-bold font-serif">
                            Clutch
                        </span>

                        <span className="text-2xl font-bold font-serif">
                            Trustpilot
                        </span>

                        <span className="text-2xl font-bold font-serif">
                            Google
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex gap-6 h-[600px] overflow-hidden relative">
                {/* Gradient Masks */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />

                {/* Upward Column */}
                <div className="flex-1">
                    <motion.div
                        className="flex flex-col gap-6"
                        animate={{ y: [0, -1200] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {column1.map((logo, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${i + 1}`}
                                    width={200}
                                    height={100}
                                    className="w-full h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Downward Column */}
                <div className="flex-1">
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ y: -1200 }}
                        animate={{ y: [-1200, 0] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {column2.map((logo, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${i + 1}`}
                                    width={200}
                                    height={100}
                                    className="w-full h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandClients;