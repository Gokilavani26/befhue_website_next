"use client";

import { getIcon } from "@/utils/iconMap";

type Factor = {
    icon: string;
    title: string;
    description: string;
};

type Tier = {
    name: string;
    ideal: string;
    description: string;
};

type PricingPhilosophyProps = {
    title: string;
    philosophy: string;
    factors: Factor[];
    tiers?: Tier[];
};

const PricingPhilosophy = ({
    title,
    philosophy,
    factors,
    tiers,
}: PricingPhilosophyProps) => {
    return (
        <section className="bg-[#202020] text-white py-24 px-6 rounded-[3rem] max-w-7xl mx-auto my-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left: Philosophy */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-bold leading-tight">
                            {title}
                        </h2>

                        <div className="prose prose-lg text-zinc-400 whitespace-pre-line">
                            {philosophy}
                        </div>

                        {/* Optional Tiers */}
                        {tiers && tiers.length > 0 && (
                            <div className="space-y-6 pt-8">
                                {tiers.map(
                                    (
                                        tier,
                                        index
                                    ) => (
                                        <div
                                            key={
                                                index
                                            }
                                            className="bg-white/5 p-6 rounded-2xl border border-white/10"
                                        >
                                            <h4 className="text-xl font-bold text-[#ff002b] mb-1">
                                                {
                                                    tier.name
                                                }
                                            </h4>

                                            <p className="text-white font-medium mb-2">
                                                {
                                                    tier.ideal
                                                }
                                            </p>

                                            <p className="text-sm text-zinc-400">
                                                {
                                                    tier.description
                                                }
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right: Cost Factors */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-8 text-white">
                            What Affects the
                            Investment?
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {factors.map(
                                (
                                    factor,
                                    index
                                ) => (
                                    <div
                                        key={
                                            index
                                        }
                                        className="bg-[#2a2a2a] p-6 rounded-2xl border border-zinc-700 hover:border-[#ff002b] transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-[#ff002b]/10 flex items-center justify-center text-[#ff002b] mb-4 group-hover:bg-[#ff002b] group-hover:text-white transition-colors">
                                            {getIcon(
                                                factor.icon,
                                                {
                                                    size: 24,
                                                }
                                            )}
                                        </div>

                                        <h4 className="font-bold text-lg mb-2 text-white">
                                            {
                                                factor.title
                                            }
                                        </h4>

                                        <p className="text-sm text-zinc-400">
                                            {
                                                factor.description
                                            }
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPhilosophy;