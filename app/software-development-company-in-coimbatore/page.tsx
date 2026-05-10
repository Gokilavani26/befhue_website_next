import type { Metadata } from "next";
import Link from "next/link";
import {
    Smartphone,
    Monitor,
    ShoppingCart,
} from "lucide-react";

import Footer from "@/components/shared/Footer";
import ParallelogramTicker from "@/components/software-development/ParallelogramTicker";
import ITServices from "@/components/software-development/ITServices";

export const metadata: Metadata = {
    title:
        "Best Software Development Company in Coimbatore | Befhue",

    description:
        "Befhue is the best software development company in Coimbatore. We deliver custom software, web apps, and mobile solutions for modern businesses.",
    alternates: {
        canonical: "https://www.befhue.com/software-development-company-in-coimbatore",
    }
};

const services = [
    {
        title: "Website Development",
        description:
            "Custom, scalable, and secure websites tailored to your business needs.",
        icon: (
            <Monitor
                className="text-[#ff002b]"
                size={36}
            />
        ),
        link: "/website-development-company-in-coimbatore",
    },
    {
        title: "Mobile App Development",
        description:
            "High-performance iOS and Android apps that provide seamless user experiences.",
        icon: (
            <Smartphone
                className="text-[#ff002b]"
                size={36}
            />
        ),
        link: "/mobile-app-development-company-in-coimbatore",
    },
    {
        title: "Ecommerce Development",
        description:
            "Robust online stores with secure payments and intuitive shopping journeys.",
        icon: (
            <ShoppingCart
                className="text-[#ff002b]"
                size={36}
            />
        ),
        link: "/e-commerce-development-company-in-coimbatore",
    },
];

const SoftwareDevelopment = () => {
    return (
        <div className="min-h-screen bef-bg-white font-sans selection:bg-[#ff002b] selection:text-white pt-24">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-white text-[#202020] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="flex-1 max-w-2xl space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            Best Software Development{" "}
                            <span className="text-[#ff002b]">
                                Company
                            </span>{" "}
                            in Coimbatore
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 font-medium">
                            We are obsessed with growing your
                            business. Fast.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="inline-block border-2 border-[#ff002b] text-[#ff002b] px-8 py-3 rounded-full font-bold hover:bg-[#ff002b] hover:text-white transition-all active:scale-95 text-center"
                            >
                                Talk to Expert
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-block border-2 border-[#ff002b] bg-[#ff002b] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all active:scale-95 text-center"
                            >
                                Hire Top Talent Now
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                        {/* Background Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                        {/* Monitor Frame */}
                        <div className="relative w-full max-w-lg aspect-video bg-black rounded-lg shadow-2xl p-2 border border-zinc-700 z-10 transform lg:translate-x-12 lg:scale-110">
                            {/* Screen */}
                            <div className="w-full h-full bg-[#1e1e1e] rounded overflow-hidden relative">
                                {/* Header */}
                                <div className="h-8 bg-[#2d2d2d] flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>

                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>

                                {/* Mock Code */}
                                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                                    <div className="text-blue-400">
                                        import{" "}
                                        <span className="text-white">
                                            React
                                        </span>{" "}
                                        from{" "}
                                        <span className="text-green-300">
                                            &apos;react&apos;
                                        </span>
                                        ;
                                    </div>

                                    <div className="text-blue-400">
                                        import{" "}
                                        <span className="text-white">
                                            {`{ motion }`}
                                        </span>{" "}
                                        from{" "}
                                        <span className="text-green-300">
                                            &apos;framer-motion&apos;
                                        </span>
                                        ;
                                    </div>

                                    <br />

                                    <div className="text-purple-400">
                                        const{" "}
                                        <span className="text-yellow-300">
                                            App
                                        </span>{" "}
                                        ={" "}
                                        <span className="text-white">
                                            ()
                                        </span>{" "}
                                        <span className="text-purple-400">
                                            =&gt;
                                        </span>{" "}
                                        <span className="text-yellow-300">
                                            {`{`}
                                        </span>
                                    </div>

                                    <div className="ml-4 text-white">
                                        return (
                                    </div>

                                    <div className="ml-8 text-gray-400">
                                        {`<div className="app-container">`}
                                    </div>

                                    <div className="ml-12 text-gray-400">
                                        {`<h1>Hello World</h1>`}
                                    </div>

                                    <div className="ml-12 text-gray-400">
                                        {`<p>Building future...</p>`}
                                    </div>

                                    <div className="ml-8 text-gray-400">
                                        {`</div>`}
                                    </div>

                                    <div className="ml-4 text-white">
                                        );
                                    </div>

                                    <div className="text-yellow-300">
                                        {`}`}
                                    </div>

                                    <br />

                                    <div className="text-purple-400">
                                        export default{" "}
                                        <span className="text-yellow-300">
                                            App
                                        </span>
                                        ;
                                    </div>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Stand */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"></div>

                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-2 bg-gray-900 rounded-full shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <ParallelogramTicker />

            <ITServices />

            {/* Services */}
            <section className="bg-zinc-50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#202020]">
                            Our Development Services
                        </h2>

                        <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                            End-to-end software solutions
                            designed to drive innovation and
                            efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map(
                            (service, index) => (
                                <Link
                                    key={index}
                                    href={service.link}
                                    className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col"
                                >
                                    <div className="bg-zinc-50 p-5 rounded-2xl w-fit mb-6 shadow-inner group-hover:bg-[#ff002b]/5 transition-colors">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-[#202020]">
                                        {service.title}
                                    </h3>

                                    <p className="text-zinc-500 leading-relaxed flex-grow">
                                        {
                                            service.description
                                        }
                                    </p>

                                    <div className="mt-6 flex items-center text-[#ff002b] font-medium group-hover:gap-2 transition-all">
                                        <span>
                                            Learn more
                                        </span>

                                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SoftwareDevelopment;