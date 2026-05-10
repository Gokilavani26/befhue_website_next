"use client";

import Image from "next/image";
import {
    Shapes,
    User,
    Layers,
    Shield,
    Type,
    PenTool,
    Image as ImageIcon,
} from "lucide-react";

const LogoStyles = () => {
    const styles = [
        {
            title: "Abstract Designs",
            description:
                "Break free and design your brand logo on your terms. Through identifiable geometric shapes and colors, we give your brand the conceptual meaning it deserves.",
            icon: <Shapes size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#ff002b]/10 via-transparent to-transparent",
        },
        {
            title: "Mascots",
            description:
                "Prefer a character to speak for your brand? Our talented illustrators create faces full of personality that help your audience connect with your business instantly.",
            icon: <User size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#ff002b]/10 via-transparent to-transparent",
        },
        {
            title: "Combination Mark",
            description:
                "Enhance your branding message by integrating text and icon. Whether stacked or side-by-side, this versatile style tells your story clearly.",
            icon: <Layers size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-[#ff002b]/10 via-transparent to-transparent",
        },
        {
            title: "The Emblem",
            description:
                "Want a traditional, authoritative appearance? Emblems create a striking, badge-like effect perfect for established institutions and premium brands.",
            icon: <Shield size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff002b]/10 via-transparent to-transparent",
        },
        {
            title: "Lettermarks",
            description:
                "Ideal for long brand names, lettermarks (or monograms) focus on initials to create a streamlined, memorable visual identity.",
            icon: <Type size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#ff002b]/10 via-transparent to-transparent",
        },
        {
            title: "Wordmarks",
            description:
                "A font-based logo that focuses on your business name alone. Perfect for brands with distinct, catchy names that deserve center stage.",
            icon: <PenTool size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-[#ff002b]/5 via-transparent to-transparent",
        },
        {
            title: "Pictorial Marks",
            description:
                "An icon or graphic-based logo. It’s the image that comes to mind when people think of your brand, like the Apple or Twitter bird.",
            icon: <ImageIcon size={48} className="text-[#ff002b] opacity-80" />,
            pattern:
                "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff002b]/10 via-transparent to-transparent",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="mb-16 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-white">Select a style to </span>

                    <span className="text-[#ff002b]">kick-start</span>

                    <span className="text-white"> your business identity</span>
                </h2>

                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Logo Design is everything that will brighten your brand identity over
                    time. Choose a direction that resonates with your vision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {styles.map((style, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-[2rem] bg-[#202020] border border-white/5 hover:border-[#ff002b]/50 transition-colors duration-500 group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                    >
                        {/* Background Pattern */}
                        <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${style.pattern}`}
                        />

                        <div className="relative h-full p-10 flex flex-col justify-between z-10">
                            <div className="mb-6">
                                <div className="p-4 bg-white/5 rounded-2xl w-fit mb-6 text-white group-hover:text-[#ff002b] transition-colors">
                                    {style.icon}
                                </div>

                                <h3
                                    className={`font-bold text-white mb-4 ${index === 0 ? "text-4xl" : "text-2xl"
                                        }`}
                                >
                                    {style.title}
                                </h3>

                                <p
                                    className={`text-gray-400 leading-relaxed text-lg ${index === 0 ? "max-w-md" : ""
                                        }`}
                                >
                                    {style.description}
                                </p>
                            </div>

                            {index === 0 && (
                                <div className="hidden lg:flex absolute inset-0 pointer-events-none items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700 overflow-hidden">
                                    <Image
                                        src="/imgs/brand/abstract_logo.png"
                                        alt="Abstract Design Example"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-contain scale-90"
                                    />
                                </div>
                            )}

                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ff002b] group-hover:border-[#ff002b] transition-all">
                                <span className="text-2xl pb-1">→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoStyles;