"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services does Befhue provide?",
        answer:
            "We provide branding, video editing, software development, UI/UX design, and marketing solutions tailored for modern businesses.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines depend on scope and complexity. Most projects take between 2–8 weeks.",
    },
    {
        question: "Do you provide ongoing support?",
        answer:
            "Yes, we offer maintenance, revisions, and long-term support packages for clients.",
    },
    {
        question: "Can you help with startup branding?",
        answer:
            "Absolutely. We specialize in building strong visual identities and digital presence for startups.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden flex flex-col pt-10 pb-20">

            <main className="relative z-10 flex flex-col items-center justify-center px-4 flex-1">
                <div className="w-full max-w-4xl">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-zinc-800 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="text-white font-bold text-lg pr-4">
                                        {faq.question}
                                    </span>

                                    <div className="flex-shrink-0">
                                        {openIndex === index ? (
                                            <Minus size={20} className="text-yellow-500" />
                                        ) : (
                                            <Plus size={20} className="text-white" />
                                        )}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-zinc-400 text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default FAQSection;