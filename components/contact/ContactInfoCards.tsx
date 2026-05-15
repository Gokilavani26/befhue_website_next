import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const contactInfo = [
    {
        icon: <MapPin className="text-[#ff002b]" size={24} />,
        title: "Visit Our Studio",
        details: ["Coimbatore, Tamil Nadu", "India - 641001"],
        link: "https://maps.app.goo.gl/7opxoR18zRih1r8m7"
    },
    {
        icon: <Phone className="text-[#ff002b]" size={24} />,
        title: "Call Us Directly",
        details: ["+91 9342470592", "Mon - Sat, 9am - 7pm"],
        link: "tel:+919342470592"
    },
    {
        icon: <Mail className="text-[#ff002b]" size={24} />,
        title: "Email Inquiries",
        details: ["info@befhue.com"],
        link: "mailto:info@befhue.com"
    },
    // {
    //     icon: <MessageSquare className="text-[#ff002b]" size={24} />,
    //     title: "Instant Chat",
    //     details: ["WhatsApp Support", "Available 24/7"],
    //     link: "https://wa.me/918148431627"
    // }
];

const ContactInfoCards = () => {
    return (
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group block"
                        >
                            <div className="bg-zinc-50 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#ff002b]/5 group-hover:scale-110 transition-all duration-300">
                                {info.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-[#202020]">{info.title}</h4>
                            <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-zinc-500 font-medium text-sm leading-relaxed">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoCards;
