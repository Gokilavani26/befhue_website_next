"use client";

import { getIcon } from "@/utils/iconMap";

type Benefit = {
    icon: string;
    title: string;
    description: string;
};

type WhyChooseUsData = {
    title: string;
    description?: string;
    benefits: Benefit[];
};

type WhyChooseUsProps = {
    data: WhyChooseUsData;
};

const WhyChooseUs = ({
    data,
}: WhyChooseUsProps) => {
    if (
        !data ||
        !data.benefits ||
        data.benefits.length === 0
    ) {
        return null;
    }

    return (
        <section className="bg-zinc-50 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#202020]">
                        {data.title}
                    </h2>

                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {data.benefits.map(
                        (benefit, index) => (
                            <div
                                key={index}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#ff002b] shadow-sm group-hover:bg-[#ff002b] group-hover:text-white transition-all duration-300">
                                    {getIcon(
                                        benefit.icon,
                                        {
                                            size: 32,
                                        }
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                                        {
                                            benefit.title
                                        }
                                    </h3>

                                    <p className="text-zinc-500 leading-relaxed">
                                        {
                                            benefit.description
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;