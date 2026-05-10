import {
    Smartphone,
    Layout,
    Settings,
    LucideIcon,
} from "lucide-react";

type Service = {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    color: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
};

const services: Service[] = [
    {
        title: "Developing Mobile Apps",
        subtitle: "Fast and Scalable",
        description:
            "Hire mobile app developers with rich experience in building blazing-fast and scalable applications using the latest app development toolkit and techniques.",
        features: [
            "Native, Hybrid & PWA",
            "Stable mobile Apps",
            "Android and iOS",
            "Engaging UI/UX",
            "Simple implementation",
            "APIs & Integrations",
        ],
        icon: Smartphone,
        color: "#f97316",
        borderColor: "border-t-[#f97316]",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        title: "Developing Web Apps",
        subtitle: "Feature-rich & secure",
        description:
            "Hire dedicated developers for full-stack development of high-performing, responsive, and secure web applications. Uncompromised quality and resource optimization guaranteed!",
        features: [
            "Static & Dynamic",
            "Highly-responsive",
            "Secure by default",
            "Superior performance",
            "Progressive Web Apps",
            "User privacy prioritised",
        ],
        icon: Layout,
        color: "#22c55e",
        borderColor: "border-t-[#22c55e]",
        iconBg: "bg-green-50",
        iconColor: "text-green-500",
    },
    {
        title: "Customized Software Development",
        subtitle: "Tailor-fit to your business",
        description:
            "Build your brand with custom software development! We customize your software specifically to your strengths & business drivers. Personalizing operations & implementations!",
        features: [
            "Full-stack Development",
            "Flexible delivery model",
            "Software upgrades",
            "Minimum build time",
        ],
        icon: Settings,
        color: "#3b82f6",
        borderColor: "border-t-[#3b82f6]",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
    },
];

const ITServices = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold leading-tight text-[#202020] md:text-5xl">
                        A complete package of{" "}
                        <span className="text-[#ff002b]">
                            customized IT services
                        </span>{" "}
                        for growing your company
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center rounded-lg border-t-8 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-2xl ${service.borderColor}`}
                            >

                                {/* Icon */}
                                <div
                                    className={`mb-6 rounded-full p-5 ${service.iconBg}`}
                                >
                                    <Icon
                                        strokeWidth={1.5}
                                        size={48}
                                        className={service.iconColor}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 text-2xl font-bold text-[#202020]">
                                    {service.title}
                                </h3>

                                {/* Subtitle */}
                                <p
                                    className="mb-6 text-md font-bold tracking-wide"
                                    style={{ color: service.color }}
                                >
                                    {service.subtitle}
                                </p>

                                {/* Description */}
                                <p className="mb-8 text-sm leading-relaxed text-zinc-500">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="mt-auto w-full border-t border-zinc-100 pt-6">
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-xs font-semibold text-zinc-600"
                                            >
                                                <span
                                                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                                                    style={{
                                                        backgroundColor: service.color,
                                                    }}
                                                />

                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ITServices;