import Link from "next/link";

import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import PhilosophySection from "@/components/about/PhilosophySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { Metadata } from "next";
import StatsCounter from "@/components/about/StatsCounter";

export const metadata: Metadata = {
    title: "Video Production & Digital Marketing Coimbatore | Befhue",
    description:
        "Befhue is a video production company in Coimbatore and digital marketing delivering creative branding, promotional videos and online growth services.",
    alternates: {
        canonical: "https://www.befhue.com/about-us",
    },
};

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white text-[#202020] font-sans selection:bg-[#ff002b] selection:text-white pt-24">

            {/* Hero Section */}
            <AboutHero />

            {/* Core Values */}
            <CoreValues />

            {/* Philosophy */}
            <PhilosophySection />

            {/* Stats */}
            <StatsCounter />

            {/* Testimonials */}
            <div className="bg-zinc-50 py-12">
                <TestimonialSection />
            </div>

            {/* CTA */}
            <section className="bg-zinc-900 text-white py-24 px-6 mb-12 mx-6 rounded-[3rem]">

                <div className="max-w-4xl mx-auto text-center space-y-8">

                    <h2 className="text-4xl md:text-6xl font-bold italic font-denton">
                        Ready to start a project?
                    </h2>

                    <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                        Whether you are a startup or an established brand,
                        we are here to help you scale.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-[#ff002b] hover:text-white transition-all"
                    >
                        Let&apos;s Talk
                    </Link>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;