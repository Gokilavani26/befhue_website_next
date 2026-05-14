"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type BillingType = "monthly" | "yearly";

type Plan = {
    name: string;
    price: {
        monthly: number;
        yearly: number;
    };
    description: string;
    features: string[];
    highlight: boolean;
};

const plans: Plan[] = [
    {
        name: "Starter",
        price: {
            monthly: 999,
            yearly: 899,
        },
        description:
            "Perfect for small businesses starting their digital journey.",
        features: [
            "Social Media Management (2 Platforms)",
            "Basic SEO Optimization",
            "Monthly Performance Report",
            "Email Support",
        ],
        highlight: false,
    },
    {
        name: "Growth",
        price: {
            monthly: 2499,
            yearly: 1999,
        },
        description:
            "Accelerate your growth with comprehensive marketing strategies.",
        features: [
            "Social Media Management (4 Platforms)",
            "Advanced SEO & Content Strategy",
            "PPC Campaign Management",
            "Bi-Weekly Reporting",
            "Priority Support",
            "Email Marketing Automation",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: {
            monthly: 4999,
            yearly: 4499,
        },
        description:
            "Full-scale digital dominance for established brands.",
        features: [
            "Omni-Channel Strategy",
            "Dedicated Account Manager",
            "Custom Development",
            "Weekly Strategy Calls",
            "24/7 Priority Support",
            "Influencer Marketing",
        ],
        highlight: false,
    },
];

const PricingCards = () => {
    const [billing, setBilling] =
        useState<BillingType>("monthly");

    return (
        <section className="bg-zinc-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-16 space-y-6 text-center">

                    <h4 className="text-4xl font-bold text-zinc-900 md:text-5xl">
                        Flexible Plans
                    </h4>

                    <p className="mx-auto max-w-2xl text-lg text-zinc-500">
                        Choose a plan that fits your business needs and
                        scale as you grow.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-8 flex items-center justify-center gap-4">

                        {/* Monthly */}
                        <span
                            className={`text-lg font-medium ${billing === "monthly"
                                ? "text-zinc-900"
                                : "text-gray-400"
                                }`}
                        >
                            Monthly
                        </span>

                        {/* Toggle Button */}
                        <button
                            onClick={() =>
                                setBilling(
                                    billing === "monthly"
                                        ? "yearly"
                                        : "monthly"
                                )
                            }
                            className="relative h-8 w-16 rounded-full bg-zinc-200 p-1 transition-colors duration-300"
                        >
                            <div
                                className={`h-6 w-6 rounded-full bg-[#ff002b] shadow-md transition-transform duration-300 ${billing === "yearly"
                                    ? "translate-x-8"
                                    : "translate-x-0"
                                    }`}
                            />
                        </button>

                        {/* Yearly */}
                        <span
                            className={`text-lg font-medium ${billing === "yearly"
                                ? "text-zinc-900"
                                : "text-gray-400"
                                }`}
                        >
                            Yearly{" "}

                            <span className="ml-1 text-xs font-bold text-[#ff002b]">
                                (Save 20%)
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">

                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[2.5rem] p-8 transition-all duration-300 ${plan.highlight
                                ? "z-10 scale-105 bg-zinc-900 text-white shadow-2xl"
                                : "border border-zinc-100 bg-white text-zinc-900 shadow-lg hover:shadow-xl"
                                }`}
                        >

                            {/* Badge */}
                            {plan.highlight && (
                                <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-[#ff002b] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Name */}
                            <h4 className="mb-4 text-2xl font-bold">
                                {plan.name}
                            </h4>

                            {/* Price */}
                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-5xl font-bold">
                                    $
                                    {plan.price[
                                        billing
                                    ].toLocaleString()}
                                </span>

                                <span
                                    className={`text-sm ${plan.highlight
                                        ? "text-zinc-400"
                                        : "text-zinc-500"
                                        }`}
                                >
                                    /month
                                </span>
                            </div>

                            {/* Description */}
                            <p
                                className={`mb-8 ${plan.highlight
                                    ? "text-zinc-400"
                                    : "text-zinc-500"
                                    }`}
                            >
                                {plan.description}
                            </p>

                            {/* Divider */}
                            <hr
                                className={`mb-8 border-dashed ${plan.highlight
                                    ? "border-zinc-700"
                                    : "border-zinc-200"
                                    }`}
                            />

                            {/* Features */}
                            <ul className="mb-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3"
                                    >

                                        <div
                                            className={`rounded-full p-1 ${plan.highlight
                                                ? "bg-[#ff002b]"
                                                : "bg-zinc-100 text-[#ff002b]"
                                                }`}
                                        >
                                            <Check
                                                size={14}
                                                className={
                                                    plan.highlight
                                                        ? "text-white"
                                                        : ""
                                                }
                                            />
                                        </div>

                                        <span
                                            className={`text-sm ${plan.highlight
                                                ? "text-zinc-300"
                                                : "text-zinc-600"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full rounded-xl py-4 text-lg font-bold transition-all ${plan.highlight
                                    ? "bg-[#ff002b] text-white hover:bg-red-600"
                                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                                    }`}
                            >
                                Choose {plan.name}
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingCards;