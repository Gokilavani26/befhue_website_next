"use client";

import {
    useRef,
    useEffect,
    useState,
    ReactNode,
} from "react";

import {
    Search,
    PenTool,
    Rocket,
    Zap,
    FileBarChart,
} from "lucide-react";

type ProcessItem = {
    phase: string;
    description: string;
};

type ProcessTimelineProps = {
    process?: ProcessItem[];
};

const defaultProcess: ProcessItem[] = [
    {
        phase: "Research",
        description:
            "We analyze your business goals, audience, and competitors.",
    },
    {
        phase: "Planning",
        description:
            "We create a strategic roadmap tailored to your growth.",
    },
    {
        phase: "Execution",
        description:
            "Our team launches campaigns with precision and creativity.",
    },
    {
        phase: "Optimization",
        description:
            "We continuously improve performance using data insights.",
    },
    {
        phase: "Reporting",
        description:
            "Transparent reports help track ROI and business impact.",
    },
];

const defaultIcons: ReactNode[] = [
    <Search className="text-white" size={24} key="search" />,
    <PenTool className="text-white" size={24} key="pen" />,
    <Rocket className="text-white" size={24} key="rocket" />,
    <Zap className="text-white" size={24} key="zap" />,
    <FileBarChart className="text-white" size={24} key="chart" />,
];

const defaultColors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-green-500",
];

const ProcessTimeline = ({
    process = defaultProcess,
}: ProcessTimelineProps) => {
    const [activeStep, setActiveStep] = useState(0);

    const containerRef = useRef<HTMLElement | null>(null);

    // Guard clause
    if (!process.length) {
        return null;
    }

    const steps = process.map((item, index) => ({
        id: index + 1,
        title: item.phase,
        description: item.description,
        icon: defaultIcons[index % defaultIcons.length],
        color: defaultColors[index % defaultColors.length],
    }));

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top, height } =
                    containerRef.current.getBoundingClientRect();

                const windowHeight = window.innerHeight;

                const scrollPercentage = Math.max(
                    0,
                    Math.min(
                        1,
                        (windowHeight - top - 100) /
                        (windowHeight + height / 2)
                    )
                );

                const stepIndex = Math.floor(
                    scrollPercentage * steps.length
                );

                setActiveStep(
                    Math.min(
                        steps.length - 1,
                        Math.max(0, stepIndex)
                    )
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [steps.length]);

    return (
        <section
            ref={containerRef}
            className="relative bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-[#ff002b]">
                        Our Process
                    </span>

                    <h2 className="text-4xl font-bold text-zinc-900 md:text-5xl">
                        How We Work
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-[32px] z-0 hidden h-1 w-full -translate-y-1/2 bg-gray-200 md:block">
                        <div
                            className="h-full bg-[#ff002b] transition-all duration-500 ease-out"
                            style={{
                                width: `${(activeStep /
                                    (steps.length - 1)) *
                                    100
                                    }%`,
                            }}
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex flex-col items-center text-center transition-all duration-500 ${index <= activeStep
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-50"
                                    }`}
                            >
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-white shadow-lg transition-all duration-300 ${index <= activeStep
                                        ? "scale-110 bg-[#ff002b]"
                                        : "bg-gray-300"
                                        }`}
                                >
                                    {step.icon}
                                </div>

                                <h3
                                    className={`mb-3 text-xl font-bold ${index <= activeStep
                                        ? "text-zinc-900"
                                        : "text-gray-400"
                                        }`}
                                >
                                    {step.title}
                                </h3>

                                <p className="max-w-[200px] text-sm leading-relaxed text-gray-500">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;