"use client";
import React, { useState } from 'react';
import { User, Mail, FileText, Layers, ChevronDown } from 'lucide-react';

const ContactForm = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");

        const formData = new FormData(event.target);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://contact-forms.dhigrowth.com/api/v1/contact/befhue", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "https://www.befhue.com"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                let data: any = {};
                try { data = await response.json(); } catch (e) { }
                console.log("Error", data);
                setResult(data?.message || "Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const backgroundImages = [
        "/imgs/vr_person.webp",
        "/imgs/abstract_stones.webp",
        "/imgs/character_jar.webp",
        "/imgs/spoons_icecream.webp",
        "/imgs/dragon_toy.webp",
        "/imgs/portfolio_1.webp",
        "/imgs/abstract_stones.webp",
        "/imgs/abs.jpeg",
    ];

    return (
        <div className="bg-black text-white font-sans relative overflow-hidden flex flex-col py-24">

            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-40 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pointer-events-none">
                {backgroundImages.map((src, i) => (
                    <div key={i} className="bg-zinc-800 rounded-2xl overflow-hidden aspect-[4/5] border border-zinc-700/30">
                        <img src={src} alt="bg" className="w-full h-full object-cover filter grayscale brightness-50" />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pb-20">
                <div className="text-center max-w-3xl mb-12">
                    <h3 className="text-4xl md:text-[54px] font-bold mb-6 tracking-tight leading-tight">
                        Let's Create Something <span className="bef-red italic font-serif">Amazing</span>
                    </h3>
                    <p className="text-zinc-300 text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
                        Ready to transform your vision into reality? Get in touch with our team and let's discuss your next project.
                    </p>
                </div>

                {/* The Card */}
                <div className="bg-white text-zinc-900 w-full max-w-[800px] rounded-[2.5rem] p-10 md:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                    <h5 className="text-[42px] font-black mb-10 tracking-tight text-gray-950">Get In Touch</h5>

                    <form onSubmit={onSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name Field */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                    <div className="p-1 rounded-full bef-bg-red flex items-center justify-center">
                                        <User size={12} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition placeholder:text-gray-400 font-medium"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                    <div className="p-1 rounded-full bef-bg-red flex items-center justify-center">
                                        <Mail size={12} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition placeholder:text-gray-400 font-medium"
                                />
                            </div>
                        </div>

                        {/* Service Selection */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <div className="p-1 rounded-full bef-bg-red flex items-center justify-center">
                                    <Layers size={12} className="text-white" strokeWidth={2.5} />
                                </div>
                                Service Interested In
                            </label>
                            <div className="relative">
                                <select
                                    name="service"
                                    className="w-full appearance-none px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition cursor-pointer text-gray-800 font-medium"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="Branding">Branding</option>
                                    <option value="Video Editing">Video Editing</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <ChevronDown size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <div className="p-1 rounded-full bef-bg-red flex items-center justify-center">
                                    <FileText size={12} className="text-white" strokeWidth={2.5} />
                                </div>
                                Project Details
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell us about your project, goals, and timeline..."
                                className="w-full px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition resize-none placeholder:text-gray-400 font-medium"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="space-y-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bef-bg-red text-white font-bold py-6 rounded-2xl transition-all transform active:scale-[0.98] shadow-xl text-lg mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {result && (
                                <p className={`text-center font-bold ${result.includes('Success') || result.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {result}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </main >
        </div >
    );
};

export default ContactForm;