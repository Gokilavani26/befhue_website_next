"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-white text-[#202020] overflow-hidden border-b border-zinc-100">
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
                            Contact Us
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-950">
                        Let&apos;s Start a{" "}
                        <span className="bef-red italic font-serif">
                            Conversation
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                        Have a project in mind or just want to say hi?
                        We&apos;re here to help you scale your
                        digital presence with technical precision
                        and innovative design.
                    </p>

                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex -space-x-3">
                            <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center font-bold text-xs">
                                BE
                            </div>

                            <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center font-bold text-xs">
                                FH
                            </div>

                            <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-300 flex items-center justify-center font-bold text-xs">
                                UE
                            </div>
                        </div>

                        <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                            Trusted by 200+ Brands
                        </p>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative w-full flex justify-center lg:justify-end"
                >
                    {/* Background Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-100 via-zinc-100 to-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                    <div className="relative w-full max-w-lg aspect-square rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/20">
                        <Image
                            src={'/imgs/contact/contact.jpg'}
                            alt="Global Connections"
                            fill
                            priority
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white/80 text-xs font-bold uppercase tracking-widest hidden md:block">
                                Connected Globally, Delivering
                                Locally.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;