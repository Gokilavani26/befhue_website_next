"use client";

import { CheckCircle2 } from "lucide-react";

type ServiceIntroProps = {
    content: string;
    highlights?: string[];
};

const ServiceIntro = ({
    content,
    highlights = [],
}: ServiceIntroProps) => {
    const hasHighlights =
        highlights.length > 0;

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Main Content */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 text-[#202020]">
                        Overview
                    </h2>

                    <div className="prose prose-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                        {content}
                    </div>
                </div>

                {/* Highlights Sidebar */}
                {hasHighlights && (
                    <div className="w-full md:w-1/3 bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 sticky top-24">
                        <h3 className="text-xl font-bold mb-6 text-[#202020]">
                            Key Highlights
                        </h3>

                        <ul className="space-y-4">
                            {highlights.map(
                                (
                                    item,
                                    index
                                ) => (
                                    <li
                                        key={
                                            index
                                        }
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            className="text-[#ff002b] mt-1 shrink-0"
                                            size={
                                                20
                                            }
                                        />

                                        <span className="text-zinc-700 font-medium">
                                            {
                                                item
                                            }
                                        </span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServiceIntro;