import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAButton = {
    text: string;
    link: string;
};

type CTASectionProps = {
    title: string;
    description: string;
    primaryCTA: CTAButton;
    secondaryCTA?: CTAButton;
};

const CTASection = ({
    title,
    description,
    primaryCTA,
    secondaryCTA,
}: CTASectionProps) => {
    return (
        <section className="mx-auto mb-20 max-w-7xl px-6 py-12">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#ff002b] p-12 text-center text-white md:p-20">
                {/* Decorative circles */}
                <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-3xl space-y-8">
                    <h2 className="font-denton text-4xl font-bold leading-tight md:text-6xl">
                        {title}
                    </h2>

                    <p className="mx-auto max-w-2xl text-xl text-white/80">
                        {description}
                    </p>

                    <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
                        <Link
                            href={primaryCTA.link}
                            className="group flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 font-sf-pro text-lg font-bold text-[#ff002b] shadow-lg transition-colors hover:bg-zinc-100 active:scale-95"
                        >
                            {primaryCTA.text}

                            <ArrowRight
                                size={20}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.link}
                                className="rounded-full border-2 border-white px-10 py-4 font-sf-pro text-lg font-bold text-white transition-colors hover:bg-white/10 active:scale-95"
                            >
                                {secondaryCTA.text}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;