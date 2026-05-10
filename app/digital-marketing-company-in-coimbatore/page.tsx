import Image from "next/image";
import Link from "next/link";

import {
    Search,
    TrendingUp,
    Share2,
    MousePointer2,
    MonitorPlay,
    FileText,
    Mail,
    MessageSquare,
} from "lucide-react";

import Footer from "@/components/shared/Footer";
import StatsCounter from "@/components/about/StatsCounter";
import ProcessTimeline from "@/components/digital-marketing/ProcessTimeline";
import ROICalculator from "@/components/digital-marketing/ROICalculator";
import PricingCards from "@/components/digital-marketing/PricingCards";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Best Digital Marketing Company in Coimbatore | Befhue",
    description:
        "Best Digital Marketing Company in Coimbatore. Befhue helps businesses grow online with smart SEO, targeted ads, and engaging social media strategies.",
    alternates: {
        canonical: "https://www.befhue.com/digital-marketing-company-in-coimbatore",
    }
};

const services = [
    {
        title: "Search Engine Optimization",
        description:
            "Enhance your visibility and rank higher on search engines with our data-driven SEO strategies.",
        icon: Search,
        link: "/seo-company-in-coimbatore",
    },
    {
        title: "Search Engine Marketing",
        description:
            "Drive immediate traffic and high-quality leads through targeted paid search campaigns.",
        icon: TrendingUp,
        link: "/sem-company-in-coimbatore",
    },
    {
        title: "Social Media Marketing",
        description:
            "Engage your audience and build brand loyalty across all major social media platforms.",
        icon: Share2,
        link: "/social-media-marketing-company-in-coimbatore",
    },
    {
        title: "Social Media Optimization",
        description:
            "Optimize your social profiles to maximize organic reach and community engagement.",
        icon: MousePointer2,
        link: "/social-media-optimization-services-in-coimbatore",
    },
    {
        title: "Display and Video 360",
        description:
            "Reach your audience everywhere with sophisticated programmatic display and video advertising.",
        icon: MonitorPlay,
        link: "/display-video-360-company-in-coimbatore",
    },
    {
        title: "Content Marketing",
        description:
            "Tell your brand story with compelling content that attracts, informs, and converts.",
        icon: FileText,
        link: "/content-marketing-services-in-coimbatore",
    },
    {
        title: "Email Marketing",
        description:
            "Nurture leads and drive repeat business with personalized, high-performance email campaigns.",
        icon: Mail,
        link: "/email-marketing-services-in-coimbatore",
    },
    {
        title: "WhatsApp Marketing",
        description:
            "Connect directly with your customers where they are most active with our WhatsApp solutions.",
        icon: MessageSquare,
        link: "/whatsapp-marketing-company-in-coimbatore",
    },
];

const DigitalMarketingPage = () => {
    return (
        <div className="bef-bg-white min-h-screen pt-24 font-sf-pro text-[#202020] selection:bg-[#ff002b] selection:text-white">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-20 text-[#202020] lg:py-32">
                <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">

                    {/* Left Content */}
                    <div className="max-w-2xl flex-1 space-y-8">

                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#ff002b]" />

                            <span className="text-sm font-bold uppercase tracking-widest text-[#ff002b]">
                                Best Digital Marketing Company in Coimbatore
                            </span>
                        </div>

                        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                            Best Digital Marketing{" "}
                            <span className="text-[#ff002b]">Company</span>{" "}
                            in Coimbatore
                        </h1>

                        <p className="text-lg font-medium leading-relaxed text-zinc-600 md:text-xl">
                            Comprehensive digital strategies designed to
                            scale your business, increase visibility, and
                            build meaningful relationships with your audience.
                        </p>

                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="bef-bg-red inline-block rounded-full px-8 py-4 text-center font-bold text-white transition-all active:scale-95 hover:shadow-xl"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative flex w-full flex-1 justify-center lg:justify-end">

                        {/* Background Blur */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-60 blur-3xl" />

                        <div className="relative z-10 aspect-square w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 shadow-2xl">

                            <Image
                                src={"/imgs/digital-marketing/digital.jpg"}
                                alt="Digital Marketing Growth"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <StatsCounter />

            {/* Services */}
            <section className="mx-auto max-w-7xl px-6 py-24">

                <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">

                    <div className="max-w-xl">
                        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                            Our Expertise
                        </h2>

                        <p className="text-lg text-zinc-500">
                            We provide a full suite of digital marketing
                            services to help your brand thrive in the digital
                            landscape.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="bef-bg-red inline-block rounded-full px-8 py-4 text-center font-bold text-white transition-all active:scale-95 hover:shadow-xl"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={index}
                                href={service.link}
                                className="group flex flex-col rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
                            >

                                <div className="mb-8 w-fit rounded-2xl bg-white p-4 shadow-sm transition-all group-hover:scale-110 group-hover:bg-[#ff002b]/5">
                                    <Icon
                                        className="text-[#ff002b]"
                                        size={32}
                                    />
                                </div>

                                <h4 className="mb-4 text-xl font-bold text-[#202020]">
                                    {service.title}
                                </h4>

                                <p className="flex-grow text-sm leading-relaxed text-zinc-500">
                                    {service.description}
                                </p>

                                <div className="font-sf-pro mt-6 flex -translate-x-2 items-center font-medium text-[#ff002b] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <span className="mr-2">Learn more</span>
                                    <span>→</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Process */}
            {/* <ProcessTimeline /> */}

            {/* ROI */}
            <ROICalculator />

            {/* Testimonials */}
            <TestimonialSection />

            {/* Pricing */}
            <PricingCards />

            {/* CTA */}
            <section className="mx-6 mb-12 rounded-[3rem] bg-zinc-900 px-6 py-24 text-white">
                <div className="mx-auto max-w-4xl space-y-8 text-center">

                    <h2 className="font-denton text-4xl font-bold italic md:text-6xl">
                        Ready to grow your brand?
                    </h2>

                    <p className="mx-auto max-w-xl text-lg text-zinc-400">
                        Let's collaborate on a strategy that works for you.
                        Reach out today for a consultation.
                    </p>

                    <Link
                        href="/contact"
                        className="font-sf-pro inline-block rounded-full bg-white px-12 py-5 text-xl font-bold text-black transition-all hover:bg-[#ff002b] hover:text-white"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            {/* <FAQSection /> */}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DigitalMarketingPage;