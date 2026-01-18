import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { ProductsSection } from "@/components/products-section";
import { TechnologySection } from "@/components/technology-section";
import { ImpactSection } from "@/components/impact-section";
import { TimelineSection } from "@/components/timeline-section";
import { TeamSection } from "@/components/team-section";
import { ResourcesSection } from "@/components/resources-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <ProductsSection />
        <TechnologySection />
        <ImpactSection />
        <TimelineSection />
        <TeamSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
