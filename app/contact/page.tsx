"use client";

import { useEffect } from "react";

import Footer from "@/components/shared/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/shared/ContactForm";
import FAQSection from "@/components/home/FAQSection";
import { Metadata } from "next";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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