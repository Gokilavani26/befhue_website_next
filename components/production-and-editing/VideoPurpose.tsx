import {
    Monitor,
    BookOpen,
    Share2,
} from "lucide-react";

const VideoPurpose = () => {
    const pillars = [
        {
            title: "Marketing",
            description:
                "Videos are a powerful tool for marketing and advertising, as they can convey complex messages in an engaging and easily understandable way. Videos can also help to establish a company's brand identity and increase its visibility and recognition.",
            icon: (
                <Monitor
                    size={32}
                    className="text-white"
                />
            ),
            bgColor: "bg-[#ff002b]",
            cardBg: "bg-red-50",
        },
        {
            title: "Education",
            description:
                "Videos can be used for education purposes, providing users with visual and interactive resources to learn about the business, new skills and processes. Videos are the better way to communicate brand advocacy and showcase products and services.",
            icon: (
                <BookOpen
                    size={32}
                    className="text-white"
                />
            ),
            bgColor: "bg-blue-500",
            cardBg: "bg-blue-50",
        },
        {
            title: "Engagement",
            description:
                "Videos can be used to create engaging content for social media and other online platforms, which can help to drive traffic and increase engagement with customers and followers. This builds long-term loyalty and community.",
            icon: (
                <Share2
                    size={32}
                    className="text-white"
                />
            ),
            bgColor: "bg-green-500",
            cardBg: "bg-green-50",
        },
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#202020] leading-tight mb-8">
                        Creating Compelling Videos That Serve Your
                        Organization&apos;s Purpose Creatively
                    </h2>

                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            Videos are not just content but an experience for
                            the new digital world. Whether it&apos;s telling your
                            brand story, educating your audience, or driving
                            engagement, they have the power to attract, engage
                            and rightly communicate like no other medium.
                        </p>

                        <p>
                            As a top video production company in Bangalore,
                            Befhue offers a strategic partnership to its clients
                            that goes beyond just creating videos. We act as an
                            extension of your brand, suggesting what works for
                            the objectives you have, producing videos based on
                            the plans and ensuring your message reaches the
                            right audience in the most impactful way.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className={`${pillar.cardBg} rounded-[2.5rem] p-10 flex flex-col space-y-6 transition-transform hover:-translate-y-2 duration-300`}
                        >
                            <div
                                className={`${pillar.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}
                            >
                                {pillar.icon}
                            </div>

                            <h3 className="text-3xl font-bold text-[#202020]">
                                {pillar.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoPurpose;