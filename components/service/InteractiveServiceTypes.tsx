"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { getIcon } from "@/utils/iconMap";

type ServiceType = {
    name: string;
    icon: string;
    description: string;
    details?: string;
    useCases?: string[];
    features?: string[];
};

type InteractiveServiceTypesProps = {
    title?: string;
    types: ServiceType[];
};

const InteractiveServiceTypes = ({
    title,
    types,
}: InteractiveServiceTypesProps) => {
    const [selectedType, setSelectedType] =
        useState<ServiceType | null>(null);

    if (!types || types.length === 0)
        return null;

    return (
        <section className="max-w-7xl mx-auto px-6 py-24 bg-zinc-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#202020]">
                    {title || "Service Types"}
                </h2>

                <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                    Explore the different
                    variations and models we
                    support
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {types.map((type, index) => (
                    <div
                        key={index}
                        onClick={() =>
                            setSelectedType(type)
                        }
                        className="bg-white p-8 rounded-2xl border border-zinc-100 hover:border-[#ff002b] transition-all cursor-pointer group hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#ff002b]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff002b] transition-colors">
                            <span className="text-[#ff002b] group-hover:text-white transition-colors">
                                {getIcon(
                                    type.icon,
                                    {
                                        size: 32,
                                    }
                                )}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-[#202020]">
                            {type.name}
                        </h3>

                        <p className="text-zinc-500 text-sm mb-4">
                            {
                                type.description
                            }
                        </p>

                        <button className="text-[#ff002b] font-sf-pro font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More →
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedType && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() =>
                        setSelectedType(null)
                    }
                >
                    <div
                        className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-[#ff002b]/10 flex items-center justify-center">
                                    <span className="text-[#ff002b]">
                                        {getIcon(
                                            selectedType.icon,
                                            {
                                                size: 32,
                                            }
                                        )}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#202020]">
                                        {
                                            selectedType.name
                                        }
                                    </h3>

                                    <p className="text-zinc-500">
                                        {
                                            selectedType.description
                                        }
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    setSelectedType(
                                        null
                                    )
                                }
                                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {selectedType.details && (
                            <div className="prose prose-lg text-zinc-600 mb-6">
                                {
                                    selectedType.details
                                }
                            </div>
                        )}

                        {selectedType.useCases &&
                            selectedType
                                .useCases
                                .length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold mb-4 text-[#202020]">
                                        Ideal
                                        For:
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {selectedType.useCases.map(
                                            (
                                                useCase,
                                                index
                                            ) => (
                                                <span
                                                    key={
                                                        index
                                                    }
                                                    className="bg-[#ff002b]/10 text-[#ff002b] px-4 py-2 rounded-full text-sm font-medium"
                                                >
                                                    {
                                                        useCase
                                                    }
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                        {selectedType.features &&
                            selectedType
                                .features
                                .length > 0 && (
                                <div>
                                    <h4 className="text-xl font-bold mb-4 text-[#202020]">
                                        Key
                                        Features:
                                    </h4>

                                    <ul className="space-y-3">
                                        {selectedType.features.map(
                                            (
                                                feature,
                                                index
                                            ) => (
                                                <li
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="text-[#ff002b] mt-1">
                                                        ✓
                                                    </span>

                                                    <span className="text-zinc-600">
                                                        {
                                                            feature
                                                        }
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default InteractiveServiceTypes;