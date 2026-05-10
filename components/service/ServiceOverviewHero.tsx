"use client";

import { useState } from "react";

import {
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Clock,
    DollarSign,
} from "lucide-react";

type OverviewSection = {
    title?: string;
    content: string;
    highlights?: string[];
};

type ApproachStep = {
    title: string;
    description: string;
};

type ApproachSection = {
    title?: string;
    content: string;
    steps?: ApproachStep[];
};

type TechnologyPlatform = {
    name: string;
    purpose: string;
};

type TechnologySection = {
    title?: string;
    content: string;
    platforms?: TechnologyPlatform[];
};

type InvestmentFactor = {
    title: string;
    description: string;
};

type InvestmentSection = {
    title?: string;
    content: string;
    factors?: InvestmentFactor[];
};

type KeyInsight = {
    value: string;
    label: string;
};

type ServiceOverviewHeroProps = {
    overview?: OverviewSection;
    approach?: ApproachSection;
    technology?: TechnologySection;
    investment?: InvestmentSection;
    keyInsights?: KeyInsight[];
};

const ServiceOverviewHero = ({
    overview,
    approach,
    technology,
    investment,
    keyInsights,
}: ServiceOverviewHeroProps) => {
    const [activeTab, setActiveTab] =
        useState<string>("overview");

    const tabs = [
        {
            id: "overview",
            label: "Overview",
            icon: CheckCircle2,
        },
        {
            id: "approach",
            label: "Our Approach",
            icon: TrendingUp,
        },
        {
            id: "technology",
            label: "Technology",
            icon: Clock,
        },
        {
            id: "investment",
            label: "Investment",
            icon: DollarSign,
        },
    ];

    const availableTabs = tabs.filter(
        (tab) => {
            if (tab.id === "overview")
                return overview;

            if (tab.id === "approach")
                return approach;

            if (tab.id === "technology")
                return technology;

            if (tab.id === "investment")
                return investment;

            return false;
        }
    );

    if (availableTabs.length === 0)
        return null;

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="flex-1">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-200 pb-4">
                        {availableTabs.map((tab) => {
                            const Icon = tab.icon;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() =>
                                        setActiveTab(
                                            tab.id
                                        )
                                    }
                                    className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all ${activeTab ===
                                        tab.id
                                        ? "bg-[#ff002b] text-white shadow-lg"
                                        : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100"
                                        }`}
                                >
                                    <Icon
                                        size={18}
                                    />

                                    <span>
                                        {
                                            tab.label
                                        }
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm min-h-[400px]">
                        {/* Overview */}
                        {activeTab ===
                            "overview" &&
                            overview && (
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-[#202020] mb-4">
                                        {overview.title ||
                                            "Overview"}
                                    </h3>

                                    <div className="prose prose-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                                        {
                                            overview.content
                                        }
                                    </div>

                                    {overview
                                        .highlights &&
                                        overview
                                            .highlights
                                            .length >
                                        0 && (
                                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {overview.highlights.map(
                                                    (
                                                        highlight,
                                                        index
                                                    ) => (
                                                        <div
                                                            key={
                                                                index
                                                            }
                                                            className="flex items-start gap-3 bg-zinc-50 p-4 rounded-xl"
                                                        >
                                                            <CheckCircle2
                                                                className="text-[#ff002b] mt-1 shrink-0"
                                                                size={
                                                                    20
                                                                }
                                                            />

                                                            <span className="text-zinc-700 font-medium">
                                                                {
                                                                    highlight
                                                                }
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>
                            )}

                        {/* Approach */}
                        {activeTab ===
                            "approach" &&
                            approach && (
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-[#202020] mb-4">
                                        {approach.title ||
                                            "Our Approach"}
                                    </h3>

                                    <div className="prose prose-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                                        {
                                            approach.content
                                        }
                                    </div>

                                    {approach
                                        .steps &&
                                        approach
                                            .steps
                                            .length >
                                        0 && (
                                            <div className="mt-8 space-y-4">
                                                {approach.steps.map(
                                                    (
                                                        step,
                                                        index
                                                    ) => (
                                                        <div
                                                            key={
                                                                index
                                                            }
                                                            className="flex gap-4 items-start"
                                                        >
                                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff002b]/10 flex items-center justify-center text-[#ff002b] font-bold">
                                                                {index +
                                                                    1}
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
                                        )}
                                </div>
                            )}

                        {/* Technology */}
                        {activeTab ===
                            "technology" &&
                            technology && (
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-[#202020] mb-4">
                                        {technology.title ||
                                            "Technology Stack"}
                                    </h3>

                                    <div className="prose prose-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                                        {
                                            technology.content
                                        }
                                    </div>

                                    {technology
                                        .platforms &&
                                        technology
                                            .platforms
                                            .length >
                                        0 && (
                                            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {technology.platforms.map(
                                                    (
                                                        platform,
                                                        index
                                                    ) => (
                                                        <div
                                                            key={
                                                                index
                                                            }
                                                            className="bg-gradient-to-br from-zinc-50 to-white p-6 rounded-xl border border-zinc-100 hover:border-[#ff002b] transition-all group"
                                                        >
                                                            <div className="text-2xl font-bold text-[#202020] mb-2">
                                                                {
                                                                    platform.name
                                                                }
                                                            </div>

                                                            <div className="text-sm text-zinc-500">
                                                                {
                                                                    platform.purpose
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>
                            )}

                        {/* Investment */}
                        {activeTab ===
                            "investment" &&
                            investment && (
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-[#202020] mb-4">
                                        {investment.title ||
                                            "Investment Information"}
                                    </h3>

                                    <div className="prose prose-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                                        {
                                            investment.content
                                        }
                                    </div>

                                    {investment
                                        .factors &&
                                        investment
                                            .factors
                                            .length >
                                        0 && (
                                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {investment.factors.map(
                                                    (
                                                        factor,
                                                        index
                                                    ) => (
                                                        <div
                                                            key={
                                                                index
                                                            }
                                                            className="bg-zinc-50 p-6 rounded-xl border border-zinc-100"
                                                        >
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className="w-10 h-10 rounded-full bg-[#ff002b]/10 flex items-center justify-center">
                                                                    <DollarSign
                                                                        className="text-[#ff002b]"
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                </div>

                                                                <h4 className="text-lg font-bold text-[#202020]">
                                                                    {
                                                                        factor.title
                                                                    }
                                                                </h4>
                                                            </div>

                                                            <p className="text-zinc-600">
                                                                {
                                                                    factor.description
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>
                            )}
                    </div>
                </div>

                {/* Sidebar */}
                {keyInsights &&
                    keyInsights.length > 0 && (
                        <div className="lg:w-80">
                            <div className="bg-gradient-to-br from-[#ff002b] to-[#cc0022] text-white p-8 rounded-2xl shadow-xl sticky top-24">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp
                                        size={24}
                                    />

                                    Key Insights
                                </h3>

                                <div className="space-y-6">
                                    {keyInsights.map(
                                        (
                                            insight,
                                            index
                                        ) => (
                                            <div
                                                key={
                                                    index
                                                }
                                                className="border-b border-white/20 pb-4 last:border-0 last:pb-0"
                                            >
                                                <div className="text-4xl font-bold mb-2">
                                                    {
                                                        insight.value
                                                    }
                                                </div>

                                                <div className="text-white/80 text-sm">
                                                    {
                                                        insight.label
                                                    }
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>

                                <button className="mt-8 w-full bg-white text-[#ff002b] px-6 py-3 rounded-full font-bold hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 group">
                                    Get Started

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    );
};

export default ServiceOverviewHero;