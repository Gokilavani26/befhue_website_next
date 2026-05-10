"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutHero = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-white text-[#202020] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 max-w-2xl space-y-8"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff002b]" />

                        <span className="text-[#ff002b] font-bold uppercase tracking-widest text-sm">
                            About Befhue
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Crafting Bespoke{" "}
                        <span className="text-[#ff002b]">
                            Digital Experiences
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                        We don’t just build products; we craft the
                        digital backbone of high-performance brand
                        identities. Merging technical precision with
                        innovative design is our core philosophy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/digital-marketing-company-in-coimbatore"
                            className="inline-block bef-bg-red text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all active:scale-95 text-center"
                        >
                            Our Services
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-block border-2 border-zinc-200 text-[#202020] px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all active:scale-95 text-center"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="flex-1 relative w-full flex justify-center lg:justify-end"
                >
                    {/* Blur Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                    {/* Image */}
                    <div className="relative w-full max-w-lg aspect-square rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/20">
                        <Image
                            src="/imgs/about/about.jpg"
                            alt="Befhue Creative and Tech"
                            height={500}
                            width={500}
                            priority
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;