import React from 'react';
import Footer from './Footer';

const BefhueLanding = () => {
    return (
        <div className="min-h-screen bef-bg-dark bef-white font-sans flex flex-col justify-between selection:bg-[#ff002b] selection:text-[#ffffff]">

            {/* --- Main Hero Section --- */}
            <main className="flex flex-col items-center justify-center flex-grow overflow-hidden px-4">
                <div className="text-center w-full">
                    {/* Main Logo Text */}
                    <h2 className="bef-red text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] font-[1000] tracking-[-0.08em] leading-none uppercase w-full">
                        befhue
                    </h2>

                    {/* Subtitle */}
                    <div className="mt-2 md:mt-[-2rem] relative inline-block">
                        <p className="text-2xl sm:text-4xl md:text-6xl font-denton italic tracking-tight">
                            Editing as a Service
                        </p>
                        <div className="h-[2px] w-1/3 bef-bg-red mt-2 mx-auto md:mx-0 md:ml-0"></div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BefhueLanding;