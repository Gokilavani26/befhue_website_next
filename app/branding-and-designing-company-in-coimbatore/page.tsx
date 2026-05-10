import type { Metadata } from "next";

import BrandHero from "@/components/brand-and-design/BrandHero";
import BrandFeatures from "@/components/brand-and-design/BrandFeatures";
import BrandClients from "@/components/brand-and-design/BrandClients";
import BrandQuote from "@/components/brand-and-design/BrandQuote";
import LogoStyles from "@/components/brand-and-design/LogoStyles";
import LogoDesignBenefits from "@/components/brand-and-design/LogoDesignBenefits";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
    title:
        "Best Branding & Designing Company in Coimbatore",
    description:
        "Befhue is the best branding & designing company in Coimbatore offering creative brand strategy, visual identity, logo design, and complete branding solutions.",
    alternates: {
        canonical: "https://www.befhue.com/branding-and-designing-company-in-coimbatore",
    }
};

const BrandAndDesign = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden pt-24">
            <BrandHero />
            {/* <BrandClients /> */}
            <BrandFeatures />
            <LogoStyles />
            <LogoDesignBenefits />
            <BrandQuote />
            <Footer />
        </div>
    );
};

export default BrandAndDesign;