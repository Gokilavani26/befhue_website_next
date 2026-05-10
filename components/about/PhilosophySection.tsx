"use client";

import { motion } from 'framer-motion';

const PhilosophySection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our Journey & Philosophy</h2>
                            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                                Based in the industrial hub of Coimbatore, Befhue was born out of a desire to bridge the gap
                                between complex engineering and aesthetic storytelling. We believe that your website or app
                                is often the first and most critical impression your brand makes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
                            >
                                <h4 className="text-xl font-bold mb-4 text-[#ff002b]">Our Mission</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    To empower businesses with high-performance digital platforms that combine technical excellence
                                    with human-centric design, driving sustainable growth.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
                            >
                                <h4 className="text-xl font-bold mb-4 text-[#ff002b]">Our Vision</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    To define the future of digital-first brand experiences, where every interaction is
                                    seamless, meaningful, and technologically superior.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-[#ff002b]/10 to-transparent rounded-full blur-3xl opacity-50"></div>
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-[4/5] rounded-3xl bg-zinc-100 overflow-hidden shadow-lg"
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-50 flex items-center justify-center font-bold text-zinc-300 text-4xl italic">BE</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-3xl bg-[#ff002b] shadow-xl flex items-center justify-center p-8"
                                >
                                    <p className="text-white text-xl font-bold leading-tight">Technical Precision</p>
                                </motion.div>
                            </div>
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-3xl bg-[#202020] shadow-xl flex items-center justify-center p-8"
                                >
                                    <p className="text-white text-xl font-bold leading-tight">Innovative Design</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-[4/5] rounded-3xl bg-zinc-100 overflow-hidden shadow-lg"
                                >
                                    <div className="w-full h-full bg-gradient-to-tr from-zinc-50 to-zinc-200 flex items-center justify-center font-bold text-zinc-300 text-4xl italic">FHUE</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
