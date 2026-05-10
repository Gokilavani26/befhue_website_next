"use client";

import { getIcon } from "@/utils/iconMap";

type Model = {
    icon: string;
    name: string;
    description: string;
};

type ModelsSectionProps = {
    title?: string;
    models?: Model[];
};

const ModelsSection = ({
    title,
    models,
}: ModelsSectionProps) => {
    if (!models || models.length === 0)
        return null;

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#202020]">
                {title ||
                    "Business Models We Support"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-[#f8f8f8] rounded-2xl flex items-center justify-center mb-6 text-zinc-800 group-hover:bg-[#ff002b] group-hover:text-white transition-colors">
                            {getIcon(
                                model.icon,
                                {
                                    size: 28,
                                }
                            )}
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-[#202020]">
                            {model.name}
                        </h3>

                        <p className="text-zinc-500 leading-relaxed">
                            {
                                model.description
                            }
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ModelsSection;