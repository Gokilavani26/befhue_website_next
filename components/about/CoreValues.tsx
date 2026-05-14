"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Users, Zap } from 'lucide-react';

const values = [
    {
        icon: <Code className="text-[#ff002b]" size={32} />,
        title: "Technical Precision",
        description: "We focus on clean code and robust engineering to ensure every digital platform is fast, secure, and scalable."
    },
    {
        icon: <Palette className="text-[#ff002b]" size={32} />,
        title: "Innovative Design",
        description: "Merging art with functionality, we create unique designs that reflect your brand’s voice and values."
    },
    {
        icon: <Users className="text-[#ff002b]" size={32} />,
        title: "Human-Centric",
        description: "Our philosophy centres on the user, creating intuitive interfaces that make technology feel effortless."
    },
    {
        icon: <Zap className="text-[#ff002b]" size={32} />,
        title: "Holistic Integration",
        description: "We merge branding, marketing, and development into a single growth strategy for your business."
    }
];

const CoreValues = () => {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="text-4xl md:text-5xl font-bold mb-6">Our Core Pillars</h4>
                    <p className="text-zinc-500 text-lg">The foundational principles that guide every project we undertake at Befhue.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="bg-zinc-50 p-4 rounded-2xl w-fit mb-8 group-hover:bg-[#ff002b]/5 group-hover:scale-110 transition-all">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-[#202020]">{value.title}</h4>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
