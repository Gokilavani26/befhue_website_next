"use client";

import Footer from "@/components/shared/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/shared/ContactForm";
import FAQSection from "@/components/home/FAQSection";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Video Production & Digital Marketing Coimbatore | Befhue",
    description:
        "Befhue is a video production company in Coimbatore and digital marketing delivering creative branding, promotional videos and online growth services.",
    alternates: {
        canonical: "https://www.befhue.com/contact",
    }
};

const Contact = () => {

    return (
        <div className="min-h-screen bg-white text-[#202020] font-sans pt-24">
            <ContactHero />
            <ContactInfoCards />

            <section id="message-form">
                <ContactForm />
            </section>

            {/* <div className="bg-zinc-50 border-t border-zinc-100">
                <FAQSection />
            </div> */}

            <Footer />
        </div>
    );
};

export default Contact;