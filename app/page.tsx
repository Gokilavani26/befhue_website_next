import Hero from "@/components/home/Hero";
import ContactForm from "@/components/shared/ContactForm";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FAQSection from "@/components/home/FAQSection";
import BefhueLanding from "@/components/shared/BefhueLanding";
import MarketingTemplate from "@/components/home/MarketingTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Production & Digital Marketing Company in Coimbatore",
  description:
    "Befhue is a leading video production company in Coimbatore and digital marketing offering creative video, logo designing, branding, and online growth.",
  alternates: {
    canonical: "https://www.befhue.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarketingTemplate />
      <ProjectsSection />
      {/* <Clientele /> */}
      <TestimonialSection />
      {/* <FAQSection /> */}
      <ContactForm />
      <BefhueLanding />
    </>
  );
}