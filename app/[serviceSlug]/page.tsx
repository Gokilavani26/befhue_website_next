import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { servicesData } from "@/data/servicesData";

import Footer from "@/components/shared/Footer";

import PageBanner from "@/components/service/PageBanner";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceOverviewHero from "@/components/service/ServiceOverviewHero";
import ServiceContent from "@/components/service/ServiceContent";
import InteractiveServiceTypes from "@/components/service/InteractiveServiceTypes";
import TechnologyStackShowcase from "@/components/service/TechnologyStackShowcase";
import BenefitsGrid from "@/components/service/BenefitsGrid";
import ProcessTimeline from "@/components/digital-marketing/ProcessTimeline";
import ToolsAndPlatforms from "@/components/service/ToolsAndPlatforms";
import PricingPhilosophy from "@/components/service/PricingPhilosophy";
import ModelsSection from "@/components/service/ModelsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/service/CTASection";
import WhyChooseUs from "@/components/service/WhyChooseUs";
import ApproachSection from "@/components/service/ApproachSection";

type ServiceSlug = keyof typeof servicesData;

type PageProps = {
    params: Promise<{
        serviceSlug: ServiceSlug;
    }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { serviceSlug } = await params;
    const serviceData = servicesData[serviceSlug];

    if (!serviceData) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title:
            serviceData.meta?.title ||
            serviceData.banner?.title,

        description:
            serviceData.meta?.description ||
            serviceData.banner?.description,

        alternates: {
            canonical: serviceData.meta?.canonicalUrl ||
                `https://www.befhue.com/${serviceSlug}`,
        },
    };
}

const ServiceDetailPage = async ({
    params,
}: PageProps) => {
    const { serviceSlug } = await params;

    const serviceData =
        servicesData[serviceSlug];

    if (!serviceData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 font-sans selection:bg-[#ff002b] selection:text-white">

            <Breadcrumbs
                title={serviceData.banner.title}
            />

            <PageBanner {...serviceData.banner} />

            {serviceData.staticContent ? (
                <ServiceContent
                    staticContent={
                        serviceData.staticContent
                    }
                />
            ) : ("approachTab" in serviceData && serviceData.approachTab || "technologyTab" in serviceData && serviceData.technologyTab || "investmentTab" in serviceData && serviceData.investmentTab) && ("keyInsights" in serviceData && serviceData.keyInsights) && (
                (serviceData.overview ||
                    serviceData.approachTab ||
                    serviceData.technologyTab ||
                    serviceData.investmentTab) && (
                    <ServiceOverviewHero
                        overview={serviceData.overview}
                        approach={
                            serviceData.approachTab
                        }
                        technology={
                            serviceData.technologyTab
                        }
                        investment={
                            serviceData.investmentTab
                        }
                        keyInsights={
                            serviceData.keyInsights
                        }
                    />
                )
            )}

            {"intro" in serviceData &&
                !serviceData.overview &&
                serviceData.intro && (
                    <ServiceIntro
                        {...serviceData.intro}
                    />
                )}

            {"serviceTypes" in serviceData &&
                serviceData.serviceTypes && (
                    <InteractiveServiceTypes
                        {...serviceData.serviceTypes}
                    />
                )}

            {"technologyStack" in serviceData &&
                serviceData.technologyStack && (
                    <TechnologyStackShowcase
                        {...serviceData.technologyStack}
                    />
                )}

            {
                "benefits" in serviceData &&
                <BenefitsGrid
                    benefits={serviceData.benefits}
                />}

            {"approach" in serviceData &&
                serviceData.approach && (
                    <ApproachSection
                        {...serviceData.approach}
                    />
                )}

            {"process" in serviceData &&
                serviceData.process && (
                    <ProcessTimeline
                        process={serviceData.process}
                    />
                )}

            {"tools" in serviceData &&
                serviceData.tools && (
                    <ToolsAndPlatforms
                        tools={serviceData.tools}
                    />
                )}

            {"pricing" in serviceData &&
                serviceData.pricing && (
                    <PricingPhilosophy
                        {...serviceData.pricing}
                    />
                )}

            {"models" in serviceData &&
                serviceData.models && (
                    <ModelsSection
                        models={serviceData.models}
                    />
                )}

            {"whyChooseUs" in serviceData &&
                serviceData.whyChooseUs && (
                    <WhyChooseUs
                        data={serviceData.whyChooseUs}
                    />
                )}

            {/* <FAQSection
                faqs={serviceData.faqs}
            /> */}

            <CTASection {...serviceData.cta} />

            <Footer />
        </div>
    );
};

export default ServiceDetailPage;