import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ToursSection from "@/components/ToursSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ActivitiesSection />
        <ToursSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
