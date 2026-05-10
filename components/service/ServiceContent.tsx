type ContentSection = {
    heading?: string;
    subheading?: string;
    paragraphs?: string[];
    bullets?: string[];
    steps?: string[];
};

type StaticContent = {
    title: string;
    sections: ContentSection[];
};

type ServiceContentProps = {
    staticContent?: StaticContent;
};

/**
 * ServiceContent - Plain static content section.
 * Renders the client's exact text, split into paragraphs,
 * with no interactive tabs or graphics.
 */
const ServiceContent = ({
    staticContent,
}: ServiceContentProps) => {
    if (!staticContent) return null;

    const { title, sections } =
        staticContent;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#202020]">
                        {title}
                    </h2>

                    <div className="h-1 w-16 rounded-full bg-[#ff002b]" />
                </div>

                {/* Content Sections */}
                <div className="space-y-10">
                    {sections.map(
                        (section, idx) => (
                            <div key={idx}>
                                {/* Section Heading */}
                                {section.heading && (
                                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#202020]">
                                        {
                                            section.heading
                                        }
                                    </h3>
                                )}

                                {/* Sub Heading */}
                                {section.subheading && (
                                    <h4 className="text-lg font-semibold mb-2 text-[#ff002b]">
                                        {
                                            section.subheading
                                        }
                                    </h4>
                                )}

                                {/* Paragraphs */}
                                {section.paragraphs?.map(
                                    (
                                        para,
                                        pIdx
                                    ) => (
                                        <p
                                            key={
                                                pIdx
                                            }
                                            className="text-base md:text-lg leading-relaxed mb-3 text-[#202020]"
                                        >
                                            {
                                                para
                                            }
                                        </p>
                                    )
                                )}

                                {/* Bullets */}
                                {section.bullets && (
                                    <ul className="mt-3 space-y-2 pl-5">
                                        {section.bullets.map(
                                            (
                                                bullet,
                                                bIdx
                                            ) => (
                                                <li
                                                    key={
                                                        bIdx
                                                    }
                                                    className="text-base md:text-lg leading-relaxed flex items-start gap-2 text-[#202020]"
                                                >
                                                    <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#ff002b]" />

                                                    {
                                                        bullet
                                                    }
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}

                                {/* Steps */}
                                {section.steps && (
                                    <ol className="mt-3 space-y-2 pl-5 list-decimal">
                                        {section.steps.map(
                                            (
                                                step,
                                                sIdx
                                            ) => (
                                                <li
                                                    key={
                                                        sIdx
                                                    }
                                                    className="text-base md:text-lg leading-relaxed text-[#202020]"
                                                >
                                                    {
                                                        step
                                                    }
                                                </li>
                                            )
                                        )}
                                    </ol>
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceContent;