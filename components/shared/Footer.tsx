"use client";

import { Mail, Phone, MapPin, Mail as MailIcon } from 'lucide-react';
import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa";

import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    const isContactPage =
        pathname === "/productions-and-editing-company-in-coimbatore";

    return (
        <div
            className={`-mt-1 bef-bg-dark bef-white font-sf-pro selection:bg-[#ff002b] selection:text-[#ffffff] ${isContactPage ? "rounded-[2.5rem]" : ""
                }`}
        >
            {/* Contact Info Bar */}
            <div className="py-12 md:py-20 px-6 md:px-10 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium">

                {/* Email */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                    <div className="w-6 h-6 bef-bg-red rounded-full flex items-center justify-center shrink-0">
                        <Mail size={12} className="text-black" />
                    </div>

                    <a href="mailto:info@befhue.com">info@befhue.com</a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                    <div className="w-6 h-6 bef-bg-red rounded-full flex items-center justify-center shrink-0">
                        <Phone size={12} className="text-black" />
                    </div>

                    <a href="tel:+919342470592">+91 9342470592</a>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-6">

                <p className="text-sm text-gray-400 text-center md:text-left">
                    © 2025 BEFHUE - Editing as a Service. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        {
                            Icon: FaInstagram,
                            href: "https://www.instagram.com/befhue/",
                        },
                        {
                            Icon: FaLinkedinIn,
                            href: "https://in.linkedin.com/company/befhue",
                        },
                        {
                            Icon: FaFacebookF,
                            href: "https://www.facebook.com/61570272629729/",
                        },
                        {
                            Icon: MailIcon,
                            href: "mailto:info@befhue.com",
                        },
                    ].map(({ Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target={
                                !href.startsWith("mailto:")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                !href.startsWith("mailto:")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="w-8 h-8 bef-bg-red rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        >
                            <Icon size={14} className="text-black" />
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default Footer;