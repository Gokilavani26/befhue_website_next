import Link from "next/link";
import {
    Video,
    Tv,
    Mic,
    Briefcase,
    Scissors,
    ArrowUpRight,
} from "lucide-react";

import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";
import VideoPurpose from "@/components/production-and-editing/VideoPurpose";
import ProductionStats from "@/components/production-and-editing/ProductionStats";
import VideoPortfolio from "@/components/production-and-editing/VideoPortfolio";

export const metadata: Metadata = {
    title:
        "Best Productions and Editing Company in Coimbatore | Befhue",

    description:
        "Befhue is the best productions and editing company in Coimbatore offering professional video production, creative editing, ads shoot, and corporate media solutions.",
    alternates: {
        canonical: "https://www.befhue.com/productions-and-editing-company-in-coimbatore",
    }
};

const topics = [
    {
        title: "Video Productions",
        slug: "video-production-services-in-coimbatore",
        copy: "From concept to final cut, we produce high-quality videos that capture the essence of your brand. Whether it's a brand film or a creative narrative, our production team brings vision to life with cinematic excellence.",
        icon: <Video className="text-[#ff002b]" size={32} />,
        color: "from-[#ff002b]/20 to-transparent",
        keywords: ["Cinematic", "Brand Film", "Narrative"],
    },
    {
        title: "Ads Shoot",
        slug: "ads-shoot-company-in-coimbatore",
        copy: "Capture attention and drive results with professionally shot commercials. We specialize in creating high-energy, visually stunning ads tailored for digital and broadcast platforms to maximize your brand's reach and impact.",
        icon: <Tv className="text-yellow-500" size={32} />,
        color: "from-yellow-500/20 to-transparent",
        keywords: ["Commercials", "Digital Ads", "Broadcast"],
    },
    {
        title: "Podcast Shoot",
        slug: "podcast-shoot-company-in-coimbatore",
        copy: "Elevate your voice with our high-end podcast production services. We provide professional audio-visual setups, multi-cam recording, and a pristine studio environment to ensure your content sounds and looks top-tier.",
        icon: <Mic className="text-purple-500" size={32} />,
        color: "from-purple-500/20 to-transparent",
        keywords: ["Audio-Visual", "Multi-Cam", "Studio"],
    },
    {
        title: "Corporate Shoot",
        slug: "corporate-shoot-company-in-coimbatore",
        copy: "Professionalism meets creativity in our corporate production services. We handle executive interviews, company profile videos, and event coverage, ensuring your business communication is polished, engaging, and impactful.",
        icon: <Briefcase className="text-blue-500" size={32} />,
        color: "from-blue-500/20 to-transparent",
        keywords: ["Interviews", "Event Coverage", "Professional"],
    },
    {
        title: "Edit Videos",
        slug: "video-editing-services-in-coimbatore",
        copy: "Our editors transform raw footage into compelling stories. With advanced color grading, sound design, and motion graphics, we refine every frame to deliver a high-end, professional finish that resonates with your audience.",
        icon: <Scissors className="text-green-500" size={32} />,
        color: "from-green-500/20 to-transparent",
        keywords: [
            "Color Grading",
            "Sound Design",
            "Motion Graphics",
        ],
    },
];

const ProductionsAndEditing = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden pt-32 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto mb-20 px-6 md:px-12 lg:px-24">
                <h1 className="text-6xl md:text-8xl font-black mb-8">
                    Productions and Editing{" "}
                    <span className="text-[#ff002b]">Company</span> in
                    Coimbatore
                </h1>

                <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                    Cinematic excellence and precision post-production for
                    brands that demand the best.
                </p>
            </div>

            {/* Topics Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 mb-24">
                {topics.map((topic, index) => (
                    <Link
                        key={index}
                        href={`/${topic.slug}`}
                        className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${topic.color} border border-white/5 hover:border-white/20 transition-all duration-500 group block relative overflow-hidden`}
                    >
                        <div className="absolute top-8 right-8 p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <ArrowUpRight
                                className="text-white"
                                size={20}
                            />
                        </div>

                        <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                            {topic.icon}
                        </div>

                        <h2 className="text-3xl font-bold mb-4 text-white">
                            {topic.title}
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {topic.copy}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {topic.keywords.map((kw, i) => (
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

            {/* White Sections */}
            <VideoPurpose />

            {/* <ProductionStats />  */}

            <VideoPortfolio />

            {/* Footer */}
            <div className="mt-32 px-6 md:px-12 lg:px-24">
                <Footer />
            </div>
        </div>
    );
};

export default ProductionsAndEditing;