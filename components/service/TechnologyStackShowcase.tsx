"use client";

import { Info } from "lucide-react";

import { getIcon } from "@/utils/iconMap";

type Technology = {
    name: string;
    icon?: string;
    version?: string;
    description?: string;
    purpose?: string;
    features?: string[];
    usedFor?: string[];
};

type Category = {
    name: string;
    icon?: string;
    description?: string;
    technologies: Technology[];
};

type TechnologyStackShowcaseProps = {
    title?: string;
    description?: string;
    categories: Category[];
};

const TechnologyStackShowcase = ({
    title,
    description,
    categories,
}: TechnologyStackShowcaseProps) => {
    if (!categories || categories.length === 0)
        return null;

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#202020]">
                    {title ||
                        "Technology Stack"}
                </h2>

                {description && (
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>

            <div className="space-y-12">
                {categories.map(
                    (category, catIndex) => (
                        <div
                            key={catIndex}
                            className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-[#ff002b]/10 flex items-center justify-center">
                                    {getIcon(
                                        category.icon ||
                                        "Code",
                                        {
                                            size: 24,
                                            className:
                                                "text-[#ff002b]",
                                        }
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-[#202020]">
                                        {
                                            category.name
                                        }
                                    </h3>

                                    {category.description && (
                                        <p className="text-zinc-500 text-sm">
                                            {
                                                category.description
                                            }
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.technologies.map(
                                    (
                                        tech,
                                        techIndex
                                    ) => (
                                        <div
                                            key={
                                                techIndex
                                            }
                                            className="group relative bg-gradient-to-br from-zinc-50 to-white p-6 rounded-2xl border border-zinc-100 hover:border-[#ff002b] transition-all hover:shadow-lg"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    {tech.icon && (
                                                        <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center group-hover:border-[#ff002b] transition-colors">
                                                            {getIcon(
                                                                tech.icon,
                                                                {
                                                                    size: 20,
                                                                    className:
                                                                        "text-[#202020]",
                                                                }
                                                            )}
                                                        </div>
                                                    )}

                                                    <div>
                                                        <h4 className="text-lg font-bold text-[#202020]">
                                                            {
                                                                tech.name
                                                            }
                                                        </h4>

                                                        {tech.version && (
                                                            <span className="text-xs text-zinc-400">
                                                                {
                                                                    tech.version
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {tech.purpose && (
                                                    <div className="group/tooltip relative">
                                                        <Info
                                                            size={
                                                                16
                                                            }
                                                            className="text-zinc-400 hover:text-[#ff002b] cursor-help"
                                                        />

                                                        <div className="absolute right-0 top-6 w-64 bg-[#202020] text-white text-sm p-4 rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10 shadow-xl">
                                                            <div className="font-medium mb-1">
                                                                Why
                                                                we
                                                                use
                                                                this:
                                                            </div>

                                                            <div className="text-zinc-300">
                                                                {
                                                                    tech.purpose
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {tech.description && (
                                                <p className="text-zinc-500 text-sm mb-4">
                                                    {
                                                        tech.description
                                                    }
                                                </p>
                                            )}

                                            {tech.features &&
                                                tech
                                                    .features
                                                    .length >
                                                0 && (
                                                    <div className="space-y-2">
                                                        {tech.features.map(
                                                            (
                                                                feature,
                                                                featureIndex
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        featureIndex
                                                                    }
                                                                    className="flex items-center gap-2 text-sm text-zinc-600"
                                                                >
                                                                    <span className="text-[#ff002b]">
                                                                        ✓
                                                                    </span>

                                                                    <span>
                                                                        {
                                                                            feature
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}

                                            {tech.usedFor && (
                                                <div className="mt-4 pt-4 border-t border-zinc-100">
                                                    <div className="text-xs text-zinc-400 mb-2">
                                                        Best
                                                        for:
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {tech.usedFor.map(
                                                            (
                                                                use,
                                                                useIndex
                                                            ) => (
                                                                <span
                                                                    key={
                                                                        useIndex
                                                                    }
                                                                    className="bg-[#ff002b]/10 text-[#ff002b] px-2 py-1 rounded text-xs font-medium"
                                                                >
                                                                    {
                                                                        use
                                                                    }
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default TechnologyStackShowcase;