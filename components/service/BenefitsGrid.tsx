"use client";

import { getIcon } from "@/utils/iconMap";

type Benefit = {
    icon: string;
    title: string;
    description: string;
};

type BenefitsGridProps = {
    benefits: Benefit[];
};

const BenefitsGrid = ({
    benefits,
}: BenefitsGridProps) => {
    if (!benefits || benefits.length === 0)
        return null;

    return (
        <section className="bg-[#202020] text-white py-24 px-6 rounded-[3rem] max-w-7xl mx-auto mb-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Core Benefits
                    </h2>

                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Why leading businesses
                        choose our solutions for
                        sustainable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map(
                        (benefit, index) => (
                            <div
                                key={index}
                                className="bg-[#2a2a2a] p-8 rounded-[2rem] hover:bg-[#333] transition-colors border border-zinc-700 group"
                            >
                                <div className="bg-[#ff002b]/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#ff002b] transition-colors">
                                    <span className="text-[#ff002b] group-hover:text-white transition-colors">
                                        {getIcon(
                                            benefit.icon,
                                            {
                                                size: 32,
                                            }
                                        )}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3">
                                    {
                                        benefit.title
                                    }
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    {
                                        benefit.description
                                    }
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default BenefitsGrid;