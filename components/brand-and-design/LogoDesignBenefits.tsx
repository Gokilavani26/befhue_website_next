"use client";

import { motion } from "framer-motion";
import {
    Target,
    Award,
    RefreshCcw,
    Zap,
    Eye,
} from "lucide-react";

const LogoDesignBenefits = () => {
    const benefits = [
        {
            title: "Gives Instant Recognition",
            description:
                "A well-designed logo will help the audience know you better. In the population of billions, a special design carved on a specific color, with an evergreen font style can create the eye on the tags of your product. With the help of a genuine, interactive logo, your customer will instantly recognize the brand while taking any of your services, from any part of the world.",
            icon: <Target className="text-red-600" size={60} />,
            imageSlot: (
                <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-500">
                    <div className="flex flex-col items-center">
                        <div className="flex gap-2">
                            <span className="text-7xl font-bold font-serif text-[#4285F4]">
                                G
                            </span>
                            <span className="text-7xl font-bold font-serif text-[#EA4335]">
                                G
                            </span>
                        </div>

                        <div className="text-5xl font-bold font-serif text-gray-800 mt-2">
                            Google
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Peak of Professionalism",
            description:
                "A descriptive logo tells that you are serious about your business. It portrays a fair side of growth and professionalism among your competitors. And above all, your logo will speak confidence about business. Small business owners need Logo Design to create the brand identity. It can gear up your business game in a short span of time.",
            icon: <Award className="text-red-600" size={60} />,
            imageSlot: (
                <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-500">
                    <div className="relative w-full aspect-video bg-white rounded-xl shadow-lg border border-gray-200 p-6 overflow-hidden">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-4 w-3/4 bg-blue-100 rounded"></div>

                            <div className="h-4 w-1/2 bg-blue-50 rounded"></div>

                            <div className="grid grid-cols-3 gap-2 mt-4">
                                <div className="h-20 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400">
                                    Chart
                                </div>

                                <div className="h-20 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400">
                                    Data
                                </div>

                                <div className="h-20 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400">
                                    Growth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Consistent Brand Recall",
            description:
                "Your logo will appear everywhere you go. From business cards to website, stationery, products, and advertisements, the logo will remain intact until you decide to remodel the design. Once you create a significant place in the market, customers will look for your brand logo in terms of the originality of the product. This will lead to an increased sale and product superiority.",
            icon: <RefreshCcw className="text-red-600" size={60} />,
            imageSlot: (
                <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-500">
                    <div className="relative">
                        <div className="w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                            <div className="w-32 h-32 text-white border-8 border-white/30 rounded-full flex items-center justify-center">
                                <span className="text-6xl font-bold">!</span>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-lg shadow-lg rotate-12 flex items-center justify-center text-white">
                            <span className="text-2xl">🔔</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Differentiation through Design, that Matters!",
            description:
                "When you are creating a logo for your business, it means you are serious about it. A lot of companies operate in the industry without a logo and customers question their genuineness before buying their products. This leads to decrease sales and growth of the company. With a creative design, you are narrating the core value of the brand to your customers.",
            icon: <Zap className="text-red-600" size={60} />,
            imageSlot: (
                <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-500">
                    <div className="w-full h-full border-4 border-dashed border-gray-200 rounded-2xl flex flex-wrap gap-4 items-center justify-center p-4">
                        <div className="w-16 h-16 bg-red-100 rounded rotate-45"></div>

                        <div className="w-16 h-16 bg-blue-100 rounded-full"></div>

                        <div className="w-20 h-20 bg-gray-100 border-2 border-red-500 rounded flex items-center justify-center font-bold text-red-500">
                            BRAND
                        </div>

                        <div className="w-16 h-16 bg-yellow-100 rounded"></div>
                    </div>
                </div>
            ),
        },
        {
            title: "Intervene both conscious and subconscious",
            description:
                "A purpose of a Brand Identity is to capture the audience attraction by the combination of its color, shape, fonts and image. Iconic Logo Design and Brand Identities of the free world always intervened both conscious and subconscious of a prospect customer. A great logo design is a first step towards greatness of a brand.",
            icon: <Eye className="text-red-600" size={60} />,
            imageSlot: (
                <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-500">
                    <div className="relative w-64 h-64 border-2 border-gray-100 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-red-600 rounded-full opacity-5 animate-ping"></div>

                        <div className="w-48 h-48 bg-gradient-to-br from-red-50 to-white rounded-full shadow-inner flex flex-col items-center justify-center p-6 text-center">
                            <div className="text-xl font-bold bg-[#ff002b] text-white px-4 py-1 rounded-lg mb-2">
                                BRAND
                            </div>

                            <div className="text-xs text-gray-400">
                                Subconscious Attraction
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-1 bg-[#ff002b]"></div>

                    <span className="text-[#ff002b] font-bold uppercase tracking-widest text-sm">
                        Our Expertise
                    </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-[#202020] leading-tight mb-8">
                    How will Logo Design <br />
                    <span className="text-[#ff002b]">improve</span> your
                    business?
                </h2>

                <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
                    It is a wonderful way to express your perception of a
                    business to your audience. It gives your brand the desired
                    identity and communication.
                </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-32">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 0
                            ? "lg:flex-row"
                            : "lg:flex-row-reverse"
                            } items-center gap-16 md:gap-24`}
                    >
                        {/* Image Column */}
                        <div className="flex-1 w-full">
                            {benefit.imageSlot}
                        </div>

                        {/* Text Column */}
                        <div className="flex-1 space-y-8">
                            <div className="bg-gray-50 w-24 h-24 rounded-3xl flex items-center justify-center border border-gray-100 shadow-sm">
                                {benefit.icon}
                            </div>

                            <h3 className="text-4xl md:text-5xl font-bold text-[#202020] leading-tight">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 text-lg leading-relaxed md:text-xl">
                                {benefit.description}
                            </p>

                            <button className="flex items-center gap-2 font-bold text-[#ff002b] group">
                                Explore this style

                                <span className="text-2xl transition-transform group-hover:translate-x-2">
                                    →
                                </span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LogoDesignBenefits;