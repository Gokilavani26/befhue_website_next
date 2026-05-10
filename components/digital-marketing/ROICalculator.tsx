"use client";

import { useState, useEffect } from "react";

import {
    PieChart,
    BarChart2,
} from "lucide-react";

type Industry = "tech" | "retail" | "finance";

type Goal = "leads" | "sales" | "traffic";

type ROIResults = {
    leads: number;
    conversions: number;
    label: string;
};

const ROICalculator = () => {
    const [budget, setBudget] = useState<number>(5000);

    const [industry, setIndustry] =
        useState<Industry>("tech");

    const [goal, setGoal] =
        useState<Goal>("leads");

    const [results, setResults] =
        useState<ROIResults>({
            leads: 0,
            conversions: 0,
            label: "Estimated Leads",
        });

    const calculateROI = () => {
        // Simple logic for demonstration purposes
        let cpc = 0;
        let conversionRate = 0;

        switch (industry) {
            case "tech":
                cpc = 2.5;
                conversionRate = 0.03;
                break;

            case "retail":
                cpc = 0.8;
                conversionRate = 0.05;
                break;

            case "finance":
                cpc = 4.0;
                conversionRate = 0.02;
                break;

            default:
                cpc = 1.5;
                conversionRate = 0.03;
        }

        if (goal === "sales") {
            // Sales are harder than leads
            conversionRate *= 0.5;
        } else if (goal === "traffic") {
            // Traffic is cheaper
            cpc *= 0.5;
        }

        const clicks = Math.floor(budget / cpc);

        const leads = Math.floor(
            clicks * conversionRate
        );

        // 20% of leads convert to customers on average
        const conversions = Math.floor(
            leads * 0.2
        );

        setResults({
            leads: goal === "traffic" ? clicks : leads,
            conversions,
            label:
                goal === "traffic"
                    ? "Estimated Traffic"
                    : "Estimated Leads",
        });
    };

    useEffect(() => {
        calculateROI();
    }, [budget, industry, goal]);

    return (
        <section className="bg-zinc-50 py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

                {/* Inputs */}
                <div className="space-y-10">

                    {/* Heading */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">
                            Calculate Your Potential ROI
                        </h2>

                        <p className="text-lg text-gray-500">
                            See the impact digital marketing can
                            have on your business growth.
                        </p>
                    </div>

                    {/* Calculator Card */}
                    <div className="space-y-8 rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-xl">

                        {/* Budget Slider */}
                        <div className="space-y-4">
                            <label className="flex justify-between text-lg font-bold">
                                <span>Monthly Budget</span>

                                <span className="text-[#ff002b]">
                                    ${budget.toLocaleString()}
                                </span>
                            </label>

                            <input
                                type="range"
                                min="1000"
                                max="50000"
                                step="500"
                                value={budget}
                                onChange={(e) =>
                                    setBudget(Number(e.target.value))
                                }
                                className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#ff002b]"
                            />

                            <div className="flex justify-between text-xs font-medium text-gray-400">
                                <span>$1,000</span>
                                <span>$50,000+</span>
                            </div>
                        </div>

                        {/* Industry Select */}
                        <div className="space-y-4">
                            <label className="block text-lg font-bold">
                                Industry
                            </label>

                            <div className="grid grid-cols-3 gap-4">
                                {(
                                    [
                                        "tech",
                                        "retail",
                                        "finance",
                                    ] as Industry[]
                                ).map((ind) => (
                                    <button
                                        key={ind}
                                        onClick={() => setIndustry(ind)}
                                        className={`rounded-xl border-2 px-4 py-3 font-medium capitalize transition-all ${industry === ind
                                            ? "border-[#ff002b] bg-[#ff002b]/5 text-[#ff002b]"
                                            : "border-gray-100 text-gray-500 hover:border-gray-300"
                                            }`}
                                    >
                                        {ind}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Goal Select */}
                        <div className="space-y-4">
                            <label className="block text-lg font-bold">
                                Goal
                            </label>

                            <div className="grid grid-cols-3 gap-4">
                                {(
                                    [
                                        "leads",
                                        "sales",
                                        "traffic",
                                    ] as Goal[]
                                ).map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGoal(g)}
                                        className={`rounded-xl border-2 px-4 py-3 font-medium capitalize transition-all ${goal === g
                                            ? "border-[#ff002b] bg-[#ff002b]/5 text-[#ff002b]"
                                            : "border-gray-100 text-gray-500 hover:border-gray-300"
                                            }`}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Results Display */}
                <div className="relative">

                    {/* Decorative Blur */}
                    <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-[#ff002b]/10 blur-3xl" />

                    <div className="absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                    {/* Results Card */}
                    <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 p-10 text-white shadow-2xl">

                        <div className="relative z-10 space-y-12">

                            {/* Header */}
                            <div>
                                <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold">
                                    <BarChart2 className="text-[#ff002b]" />
                                    Estimated Results
                                </h3>

                                <div className="grid grid-cols-1 gap-8">

                                    {/* Leads / Traffic */}
                                    <div className="space-y-2">
                                        <p className="text-sm uppercase tracking-wider text-zinc-400">
                                            {results.label}
                                        </p>

                                        <p className="text-6xl font-bold">
                                            {results.leads.toLocaleString()}
                                        </p>
                                    </div>

                                    {/* Conversions */}
                                    {goal !== "traffic" && (
                                        <div className="space-y-2">
                                            <p className="text-sm uppercase tracking-wider text-zinc-400">
                                                Est. Conversions
                                            </p>

                                            <p className="text-6xl font-bold text-[#ff002b]">
                                                {results.conversions.toLocaleString()}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Footer Note */}
                                <div className="mt-12 border-t border-zinc-800 pt-8">
                                    <p className="text-sm text-zinc-500">
                                        *Estimates based on industry
                                        averages. Actual growth may vary.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Background Pattern */}
                        <div className="pointer-events-none absolute bottom-0 right-0 opacity-5">
                            <PieChart size={300} />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ROICalculator;