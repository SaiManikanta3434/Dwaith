import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import IndustrySolutions from "@/components/IndustrySolutions";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <IndustrySolutions />
      <Workflow />
      <Testimonials />
      <CaseStudies />
      <CTA />
    </>
  );
}
