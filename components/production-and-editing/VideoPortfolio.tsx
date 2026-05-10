"use client";

import { motion } from "framer-motion";

const VideoPortfolio = () => {
    return (
        <section className="bg-black py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#ff002b] rounded-[2rem] md:rounded-[4rem] py-20 md:py-32 px-6 text-center shadow-2xl overflow-hidden relative group">
                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-sf-pro font-bold text-white/90 mb-10 leading-tight tracking-tight px-4"
                    >
                        Our Diverse Video Production Portfolio
                    </motion.h2>

                    {/* View Portfolio Heading */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-denton font-bold italic text-white cursor-pointer hover:text-white transition-all duration-300 inline-block px-4"
                    >
                        VIEW OUR PORTFOLIO
                    </motion.h3>

                    {/* Subtle design element */}
                    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                    <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default VideoPortfolio;