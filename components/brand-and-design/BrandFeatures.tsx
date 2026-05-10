"use client";

import Link from "next/link";
import {
    MousePointer2,
    Layout,
    Box,
    FileText,
    ArrowUpRight,
} from "lucide-react";

const BrandFeatures = () => {
    const categories = [
        {
            title: "Branding",
            slug: "branding-company-in-coimbatore",
            icon: <MousePointer2 className="text-pink-500" size={32} />,
            content:
                "We don't just create logos; we build legacies. Our branding process dives deep into your business DNA to craft a cohesive identity that resonates with your audience and stands the test of time.",
            keywords: [
                "Identity",
                "Strategy",
                "Resonance",
                "Visual Storytelling",
            ],
            color: "from-pink-500/20 to-transparent",
        },
        {
            title: "Logo Designing",
            slug: "logo-designing-company-in-coimbatore",
            icon: <Layout className="text-blue-500" size={32} />,
            content:
                "A logo is the heartbeat of your brand. We specialize in crafting minimalist, iconic, and versatile logos that capture the essence of your business in a single mark.",
            keywords: [
                "Versatility",
                "Minimalism",
                "Recognition",
                "Iconic",
            ],
            color: "from-blue-500/20 to-transparent",
        },
        {
            title: "Packaging Design",
            slug: "product-packaging-design-company-in-coimbatore",
            icon: <Box className="text-purple-500" size={32} />,
            content:
                "Packaging is the first physical interaction a customer has. We design packaging that doesn't just sit on a shelf—it speaks, combining structural innovation with stunning graphics.",
            keywords: [
                "Unboxing",
                "Innovation",
                "Shelf Impact",
                "Materiality",
            ],
            color: "from-purple-500/20 to-transparent",
        },
        {
            title: "Brochures & Catalogue",
            slug: "brochures-and-catalogue-services-in-coimbatore",
            icon: <FileText className="text-green-500" size={32} />,
            content:
                "In a digital world, the power of print remains unmatched. We design brochures and catalogues that guide your customers through your product range with clarity and style.",
            keywords: [
                "Typography",
                "Layout",
                "Hierarchy",
                "Storytelling",
            ],
            color: "from-green-500/20 to-transparent",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {categories.map((cat, idx) => (
                    <Link
                        key={idx}
                        href={`/${cat.slug}`}
                        className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${cat.color} border border-white/5 hover:border-white/20 transition-all duration-500 group block relative overflow-hidden`}
                    >
                        <div className="absolute top-8 right-8 p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <ArrowUpRight className="text-white" size={20} />
                        </div>

                        <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                            {cat.icon}
                        </div>

                        <h3 className="text-3xl font-bold mb-4 text-white">
                            {cat.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                            {cat.content}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {cat.keywords.map((kw, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium text-gray-300 border border-white/10"
                                >
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default BrandFeatures;