
import { Calendar } from 'lucide-react';

const ProductionStats = () => {
    const services = [
        "Corporate Video Creation",
        "Videos For Brands",
        "Promo Videos",
        "Employee Videos",
        "Product Videos",
        "2D & 3D Animation Videos"
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                {/* Left Content */}
                <div className="flex-1 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-[#202020] leading-tight">
                        More Than 60 Video Production <br />
                        Projects Handled
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Befhue is an Avant-Garde creative agency as well as a video production company that specializes in creating high-quality videos for businesses and organizations. Based in Bangalore, we offer video production services for a range of requirements, including
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl px-6 py-4 text-[#202020] font-medium flex items-center hover:border-[#ff002b] transition-colors"
                            >
                                {service}
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-500 italic">
                        Our creative team makes sure that the finished product ensures satisfied clients.
                    </p>

                    <button className="bg-[#ff002b] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black transition-colors flex items-center gap-3">
                        Book a Meeting
                    </button>
                </div>

                {/* Right Content - Image Collage */}
                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                    {/* Top Left */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            {/* Placeholder for specific camera/interview shot */}
                        </div>
                        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-100">
                            {/* Placeholder for studio equipment shot */}
                        </div>
                    </div>
                    {/* Top Right */}
                    <div className="space-y-4 pt-8">
                        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-100">
                            {/* Placeholder for team working on sticky notes shot */}
                        </div>
                        <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-100">
                            {/* Placeholder for editing suite shot */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductionStats;
