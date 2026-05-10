"use client";

import Image from "next/image";

type Tool = {
    logo: string;
    name: string;
    category: string;
};

type ToolsAndPlatformsProps = {
    tools?: Tool[];
};

const ToolsAndPlatforms = ({
    tools,
}: ToolsAndPlatformsProps) => {
    if (!tools || tools.length === 0)
        return null;

    return (
        <section className="bg-zinc-50 py-24 px-6 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#202020]">
                    Tools & Technologies We
                    Use
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center">
                                <p className="font-bold text-[#202020]">
                                    {tool.name}
                                </p>

                                <span className="text-xs text-zinc-400 uppercase tracking-wide">
                                    {
                                        tool.category
                                    }
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsAndPlatforms;