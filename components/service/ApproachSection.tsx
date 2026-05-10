"use client";

import Image from "next/image";

type Step = {
    title: string;
    description: string;
};

type ApproachSectionProps = {
    title: string;
    content: string;
    steps: Step[];
    image: string;
    reversed?: boolean;
};

const ApproachSection = ({
    title,
    content,
    steps,
    image,
    reversed = false,
}: ApproachSectionProps) => {
    if (!steps || steps.length === 0)
        return null;

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div
                className={`flex flex-col lg:flex-row gap-16 items-center ${reversed
                    ? "lg:flex-row-reverse"
                    : ""
                    }`}
            >
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                    <h2 className="text-4xl font-bold leading-tight text-[#202020]">
                        {title}
                    </h2>

                    <p className="text-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                        {content}
                    </p>

                    <div className="space-y-6 pt-4">
                        {steps.map(
                            (step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff002b]/10 flex items-center justify-center text-[#ff002b] font-bold text-xl">
                                        {index + 1}
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-[#202020] mb-1">
                                            {
                                                step.title
                                            }
                                        </h4>

                                        <p className="text-zinc-500">
                                            {
                                                step.description
                                            }
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square md:aspect-[4/3]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;