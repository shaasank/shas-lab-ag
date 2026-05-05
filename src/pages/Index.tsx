import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ChallengeSection from "@/components/ChallengeSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BrandsSection />
      <ChallengeSection />
      <ProcessSection />
      <ServicesSection />
      <CaseStudiesSection />
      <DifferentiationSection />
      <ClientsSection />
      <TestimonialsSection />

      <CTASection />
    </Layout>
  );
};

export default Index;
