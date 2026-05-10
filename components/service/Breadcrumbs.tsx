"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
    ChevronRight,
    Home,
} from "lucide-react";

type BreadcrumbsProps = {
    title?: string;
};

const Breadcrumbs = ({
    title,
}: BreadcrumbsProps) => {
    const pathname = usePathname() || "";

    const pathnames = pathname
        .split("/")
        .filter(Boolean);

    const formatSegment = (
        segment: string
    ) => {
        return segment
            .split("-")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
            )
            .join(" ");
    };

    return (
        <nav className="max-w-7xl mx-auto flex items-center overflow-x-auto whitespace-nowrap px-6 py-4 text-sm text-zinc-500">
            <Link
                href="/"
                className="flex items-center transition-colors hover:text-[#ff002b]"
            >
                <Home
                    size={16}
                    className="mr-2"
                />
                Home
            </Link>

            {pathnames.map(
                (value, index) => {
                    const to = `/${pathnames
                        .slice(0, index + 1)
                        .join("/")}`;

                    const isLast =
                        index ===
                        pathnames.length - 1;

                    return (
                        <React.Fragment
                            key={to}
                        >
                            <ChevronRight
                                size={16}
                                className="mx-2 flex-shrink-0"
                            />

                            {isLast ? (
                                <span className="font-semibold text-[#ff002b]">
                                    {title ||
                                        formatSegment(
                                            value
                                        )}
                                </span>
                            ) : (
                                <Link
                                    href={to}
                                    className="transition-colors hover:text-[#ff002b]"
                                >
                                    {formatSegment(
                                        value
                                    )}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                }
            )}
        </nav>
    );
};

export default Breadcrumbs;