import Image from "next/image";
import Link from "next/link";

type SecondaryCTA = {
    text: string;
    link: string;
};

type PageBannerProps = {
    title: string;
    subtitle?: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    secondaryCTA?: SecondaryCTA;
    badge?: string;
    backgroundImage: string;
};

const PageBanner = ({
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    secondaryCTA,
    badge,
    backgroundImage,
}: PageBannerProps) => {
    return (
        <section className="relative overflow-hidden bg-white py-20 text-[#202020] lg:py-32">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
                <div className="max-w-2xl flex-1 space-y-8">
                    {badge && (
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#ff002b]" />

                            <span className="text-sm font-bold uppercase tracking-widest text-[#ff002b]">
                                {badge}
                            </span>
                        </div>
                    )}

                    <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <h2 className="text-2xl font-medium text-zinc-800 md:text-3xl">
                            {subtitle}
                        </h2>
                    )}

                    <p className="text-lg font-medium leading-relaxed text-zinc-600 md:text-xl">
                        {description}
                    </p>

                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <Link
                            href={ctaLink}
                            className="rounded-full border-2 border-[#ff002b] bg-[#ff002b] px-8 py-3 text-center font-bold text-white transition-all hover:opacity-90 active:scale-95"
                        >
                            {ctaText}
                        </Link>

                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.link}
                                className="rounded-full border-2 border-[#ff002b] px-8 py-3 text-center font-bold text-[#ff002b] transition-all hover:bg-[#ff002b] hover:text-white active:scale-95"
                            >
                                {secondaryCTA.text}
                            </Link>
                        )}
                    </div>
                </div>

                <div className="relative flex w-full flex-1 justify-center lg:justify-end">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-60 blur-3xl" />

                    <div className="relative z-10 aspect-video w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 shadow-2xl lg:translate-x-12 lg:scale-110">
                        <Image
                            src={backgroundImage}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;