import Hero from "@/components/Hero";
import DataStrip from "@/components/DataStrip";
import Pillars from "@/components/Pillars";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <DataStrip />
      <Pillars />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
