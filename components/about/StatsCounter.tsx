"use client";
import { useEffect, useState, useRef } from 'react';
import { Users, TrendingUp, Target, Layers } from 'lucide-react';

const stats = [
    {
        id: 1,
        label: "Clients",
        value: 200,
        suffix: "+",
        icon: <Users className="text-[#ff002b]" size={32} />,
    },
    {
        id: 2,
        label: "ROI",
        value: 500,
        suffix: "%",
        icon: <TrendingUp className="text-[#ff002b]" size={32} />,
    },
    {
        id: 3,
        label: "Leads Generated",
        value: 1,
        suffix: "M+",
        icon: <Target className="text-[#ff002b]" size={32} />,
    },
    {
        id: 4,
        label: "Marketing Services",
        value: 8,
        suffix: "+",
        icon: <Layers className="text-[#ff002b]" size={32} />,
    },
];

const StatsCounter = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    stats.forEach((stat, index) => {
                        let start = 0;
                        const end = stat.value;
                        const duration = 2000;
                        const increment = end / (duration / 16); // 60fps

                        const timer = setInterval(() => {
                            start += increment;
                            if (start >= end) {
                                start = end;
                                clearInterval(timer);
                            }
                            setCounts((prev) => {
                                const newCounts = [...prev];
                                newCounts[index] = Math.floor(start);
                                return newCounts;
                            });
                        }, 16);
                    });
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} className="py-20 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#ff002b] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {stats.map((stat, index) => (
                    <div key={stat.id} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                        <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <div className="p-4 bg-white/10 rounded-full group-hover:bg-[#ff002b]/20 transition-colors">
                                {stat.icon}
                            </div>
                        </div>
                        <h4 className="text-4xl md:text-5xl font-bold mb-2">
                            {counts[index]}{stat.suffix}
                        </h4>
                        <p className="text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;
